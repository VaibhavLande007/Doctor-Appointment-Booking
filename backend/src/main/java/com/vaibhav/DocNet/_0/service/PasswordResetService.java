package com.vaibhav.DocNet._0.service;

import com.vaibhav.DocNet._0.exception.BadRequestException;
import com.vaibhav.DocNet._0.model.dto.request.ForgotPasswordRequest;
import com.vaibhav.DocNet._0.model.dto.request.ResetPasswordRequest;
import com.vaibhav.DocNet._0.model.dto.request.VerifyOtpRequest;
import com.vaibhav.DocNet._0.model.dto.response.OtpResponse;
import com.vaibhav.DocNet._0.model.entity.OtpVerification;
import com.vaibhav.DocNet._0.model.entity.User;
import com.vaibhav.DocNet._0.repository.OtpVerificationRepository;
import com.vaibhav.DocNet._0.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.SecureRandom;
import java.time.LocalDateTime;

@Slf4j
@Service
@RequiredArgsConstructor
public class PasswordResetService {

    private final UserRepository userRepository;
    private final OtpVerificationRepository otpRepository;
    private final EmailService emailService;
    private final PasswordEncoder passwordEncoder;

    @Value("${otp.expiration.minutes:10}")
    private int otpExpirationMinutes;

    private static final SecureRandom random = new SecureRandom();

    /**
     * Send OTP to user's email for password reset
     */
    @Transactional
    public OtpResponse sendPasswordResetOtp(ForgotPasswordRequest request) {
        log.info("Password reset OTP requested for email: {}", request.getEmail());

        // Check if user exists
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BadRequestException("No account found with this email address"));

        // Delete any existing OTPs for this email
        otpRepository.deleteByEmailAndType(request.getEmail(), OtpVerification.OtpType.PASSWORD_RESET);

        // Generate 6-digit OTP
        String otp = generateOtp();

        // Create and save OTP verification
        OtpVerification otpVerification = OtpVerification.builder()
                .email(request.getEmail())
                .otp(otp)
                .type(OtpVerification.OtpType.PASSWORD_RESET)
                .verified(false)
                .attemptCount(0)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(otpExpirationMinutes))
                .build();

        otpRepository.save(otpVerification);
        log.info("OTP generated and saved for email: {}", request.getEmail());

        // Send OTP via email
        String userName = user.getFirstName() != null ? user.getFirstName() : "User";
        emailService.sendOtpEmail(request.getEmail(), otp, userName);

        return OtpResponse.builder()
                .message("OTP has been sent to your email address")
                .email(maskEmail(request.getEmail()))
                .expiresInMinutes(otpExpirationMinutes)
                .build();
    }

    /**
     * Verify OTP without resetting password
     */
    @Transactional
    public OtpResponse verifyOtp(VerifyOtpRequest request) {
        log.info("OTP verification attempt for email: {}", request.getEmail());

        OtpVerification otpVerification = otpRepository
                .findByEmailAndOtpAndTypeAndVerifiedFalse(
                        request.getEmail(),
                        request.getOtp(),
                        OtpVerification.OtpType.PASSWORD_RESET
                )
                .orElseThrow(() -> {
                    log.warn("Invalid OTP attempt for email: {}", request.getEmail());
                    return new BadRequestException("Invalid OTP. Please check and try again.");
                });

        // Check if OTP is expired
        if (otpVerification.isExpired()) {
            log.warn("Expired OTP used for email: {}", request.getEmail());
            otpRepository.delete(otpVerification);
            throw new BadRequestException("OTP has expired. Please request a new one.");
        }

        // Check attempt count
        if (!otpVerification.canRetry()) {
            log.warn("Maximum OTP attempts exceeded for email: {}", request.getEmail());
            otpRepository.delete(otpVerification);
            throw new BadRequestException("Maximum verification attempts exceeded. Please request a new OTP.");
        }

        // Mark as verified (but don't save yet - we'll verify again during password reset)
        otpVerification.setVerified(true);
        otpRepository.save(otpVerification);

        log.info("OTP verified successfully for email: {}", request.getEmail());

        return OtpResponse.builder()
                .message("OTP verified successfully. You can now reset your password.")
                .email(maskEmail(request.getEmail()))
                .expiresInMinutes(0)
                .build();
    }

    /**
     * Reset password - Can be called with or without prior verification
     * This method verifies OTP and resets password in one go
     */
    @Transactional
    public void resetPassword(ResetPasswordRequest request) {
        log.info("Password reset attempt for email: {}", request.getEmail());

        // Validate password match
        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            throw new BadRequestException("Passwords do not match");
        }

        // Find the most recent OTP for this email (verified or not)
        OtpVerification otpVerification = otpRepository
                .findTopByEmailAndTypeOrderByCreatedAtDesc(
                        request.getEmail(),
                        OtpVerification.OtpType.PASSWORD_RESET
                )
                .orElseThrow(() -> new BadRequestException("No OTP found. Please request a new OTP."));

        // Verify the OTP matches what user provided
        if (!otpVerification.getOtp().equals(request.getOtp())) {
            log.warn("OTP mismatch for email: {}. Expected: {}, Got: {}",
                    request.getEmail(), otpVerification.getOtp(), request.getOtp());
            throw new BadRequestException("Invalid OTP. Please check and try again.");
        }

        // Check if OTP is expired
        if (otpVerification.isExpired()) {
            log.warn("Expired OTP used for password reset: {}", request.getEmail());
            otpRepository.delete(otpVerification);
            throw new BadRequestException("OTP has expired. Please request a new one.");
        }

        // Check attempt count
        if (!otpVerification.canRetry()) {
            log.warn("Maximum attempts exceeded for password reset: {}", request.getEmail());
            otpRepository.delete(otpVerification);
            throw new BadRequestException("Maximum attempts exceeded. Please request a new OTP.");
        }

        // Find user and update password
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BadRequestException("User not found"));

        // Encode and save new password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        // Delete used OTP
        otpRepository.delete(otpVerification);

        log.info("Password reset successful for email: {}", request.getEmail());

        // Send confirmation email
        String userName = user.getFirstName() != null ? user.getFirstName() : "User";
        emailService.sendPasswordResetSuccessEmail(request.getEmail(), userName);
    }

    /**
     * Resend OTP if previous one expired
     */
    @Transactional
    public OtpResponse resendOtp(ForgotPasswordRequest request) {
        log.info("OTP resend requested for email: {}", request.getEmail());

        // Check if user exists
        userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BadRequestException("No account found with this email address"));

        // Delete existing OTP
        otpRepository.deleteByEmailAndType(request.getEmail(), OtpVerification.OtpType.PASSWORD_RESET);

        // Send new OTP
        return sendPasswordResetOtp(request);
    }

    /**
     * Generate 6-digit OTP
     */
    private String generateOtp() {
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    /**
     * Mask email for privacy
     */
    private String maskEmail(String email) {
        String[] parts = email.split("@");
        if (parts.length != 2) {
            return email;
        }

        String localPart = parts[0];
        String domain = parts[1];

        if (localPart.length() <= 2) {
            return localPart.charAt(0) + "***@" + domain;
        }

        return localPart.substring(0, 2) + "***" + localPart.charAt(localPart.length() - 1) + "@" + domain;
    }
}