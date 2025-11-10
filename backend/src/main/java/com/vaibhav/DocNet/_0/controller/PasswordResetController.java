package com.vaibhav.DocNet._0.controller;

import com.vaibhav.DocNet._0.model.dto.request.ForgotPasswordRequest;
import com.vaibhav.DocNet._0.model.dto.request.ResetPasswordRequest;
import com.vaibhav.DocNet._0.model.dto.request.VerifyOtpRequest;
import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.dto.response.OtpResponse;
import com.vaibhav.DocNet._0.service.PasswordResetService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth/password")
@RequiredArgsConstructor
@Tag(name = "Password Reset", description = "Password reset and recovery APIs")
public class PasswordResetController {

    private final PasswordResetService passwordResetService;

    @PostMapping("/forgot")
    @Operation(summary = "Send OTP for password reset",
            description = "Sends a 6-digit OTP to the user's email address")
    public ResponseEntity<ApiResponse<OtpResponse>> forgotPassword(
            @Valid @RequestBody ForgotPasswordRequest request) {

        OtpResponse response = passwordResetService.sendPasswordResetOtp(request);
        return ResponseEntity.ok(ApiResponse.success(
                "OTP sent successfully",
                response
        ));
    }

    @PostMapping("/verify-otp")
    @Operation(summary = "Verify OTP",
            description = "Verifies the OTP sent to user's email")
    public ResponseEntity<ApiResponse<OtpResponse>> verifyOtp(
            @Valid @RequestBody VerifyOtpRequest request) {

        OtpResponse response = passwordResetService.verifyOtp(request);
        return ResponseEntity.ok(ApiResponse.success(
                "OTP verified successfully",
                response
        ));
    }

    @PostMapping("/reset")
    @Operation(summary = "Reset password",
            description = "Resets the password using verified OTP")
    public ResponseEntity<ApiResponse<Void>> resetPassword(
            @Valid @RequestBody ResetPasswordRequest request) {

        passwordResetService.resetPassword(request);
        return ResponseEntity.ok(ApiResponse.success(
                "Password reset successfully",
                null
        ));
    }

    @PostMapping("/resend-otp")
    @Operation(summary = "Resend OTP",
            description = "Resends OTP if the previous one expired")
    public ResponseEntity<ApiResponse<OtpResponse>> resendOtp(
            @Valid @RequestBody ForgotPasswordRequest request) {

        OtpResponse response = passwordResetService.resendOtp(request);
        return ResponseEntity.ok(ApiResponse.success(
                "OTP resent successfully",
                response
        ));
    }
}