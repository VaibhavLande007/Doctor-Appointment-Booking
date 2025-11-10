package com.vaibhav.DocNet._0.service;

import com.vaibhav.DocNet._0.model.entity.Appointment;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Async
    public void sendAppointmentConfirmationEmail(Appointment appointment) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo("patient@email.com"); // Get from user repository
            message.setSubject("Appointment Confirmation - DocNet 360");
            message.setText("Your appointment has been confirmed for " +
                    appointment.getAppointmentDate() + " at " + appointment.getStartTime());

            mailSender.send(message);
            log.info("Confirmation email sent for appointment: {}", appointment.getId());
        } catch (Exception e) {
            log.error("Failed to send email", e);
        }
    }

    @Async
    public void sendPasswordResetEmail(String email, String resetToken) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(fromEmail);
            message.setTo(email);
            message.setSubject("Password Reset - DocNet 360");
            message.setText("Your password reset token is: " + resetToken);

            mailSender.send(message);
            log.info("Password reset email sent to: {}", email);
        } catch (Exception e) {
            log.error("Failed to send password reset email", e);
        }
    }

    @Async
    public void sendOtpEmail(String toEmail, String otp, String userName) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("DocNet - Password Reset OTP");

            String htmlContent = buildOtpEmailTemplate(otp, userName);
            helper.setText(htmlContent, true);

            mailSender.send(message);
            log.info("OTP email sent successfully to: {}", toEmail);

        } catch (MessagingException e) {
            log.error("Failed to send OTP email to: {}", toEmail, e);
            throw new RuntimeException("Failed to send email", e);
        }
    }

    private String buildOtpEmailTemplate(String otp, String userName) {
        // Using String.format() instead of .formatted() to avoid issues with # in color codes
        String template = """
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: %s;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: %s;
                    }
                    .header {
                        background: linear-gradient(135deg, %s 0%%, %s 100%%);
                        color: white;
                        padding: 30px;
                        text-align: center;
                        border-radius: 10px 10px 0 0;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 28px;
                    }
                    .header p {
                        margin: 5px 0 0 0;
                        font-size: 16px;
                    }
                    .content {
                        background-color: white;
                        padding: 30px;
                        border-radius: 0 0 10px 10px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .content p {
                        margin: 15px 0;
                        color: %s;
                    }
                    .otp-box {
                        background-color: %s;
                        border: 2px dashed %s;
                        padding: 25px;
                        text-align: center;
                        margin: 25px 0;
                        border-radius: 8px;
                    }
                    .otp-code {
                        font-size: 36px;
                        font-weight: bold;
                        color: %s;
                        letter-spacing: 10px;
                        margin: 10px 0;
                        font-family: 'Courier New', monospace;
                    }
                    .warning {
                        background-color: %s;
                        border-left: 4px solid %s;
                        padding: 15px;
                        margin: 20px 0;
                        border-radius: 4px;
                    }
                    .warning strong {
                        display: block;
                        margin-bottom: 10px;
                    }
                    .warning ul {
                        margin: 10px 0 0 0;
                        padding-left: 20px;
                    }
                    .warning li {
                        margin: 5px 0;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 20px;
                        padding-top: 20px;
                        border-top: 1px solid %s;
                        color: %s;
                        font-size: 12px;
                    }
                    .footer p {
                        margin: 5px 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>DocNet 360</h1>
                        <p>Password Reset Request</p>
                    </div>
                    <div class="content">
                        <p>Hello <strong>%s</strong>,</p>
                        <p>We received a request to reset your password. Use the OTP code below to complete the password reset process:</p>
                        
                        <div class="otp-box">
                            <p style="margin: 0; font-size: 14px; color: %s; font-weight: 600;">YOUR OTP CODE</p>
                            <div class="otp-code">%s</div>
                            <p style="margin: 10px 0 0 0; font-size: 12px; color: %s;">This code is valid for 10 minutes</p>
                        </div>
                        
                        <div class="warning">
                            <strong>⚠️ Security Notice:</strong>
                            <ul>
                                <li>Never share this OTP with anyone, including DocNet staff</li>
                                <li>DocNet will never ask you for your OTP via phone or email</li>
                                <li>If you didn't request this reset, please ignore this email and your password will remain unchanged</li>
                                <li>For security concerns, contact our support team immediately</li>
                            </ul>
                        </div>
                        
                        <p>This OTP will <strong>expire in 10 minutes</strong> for your security.</p>
                        <p>If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged and your account is secure.</p>
                        
                        <p style="margin-top: 30px;">Best regards,<br><strong>The DocNet 360 Team</strong></p>
                    </div>
                    <div class="footer">
                        <p>This is an automated email. Please do not reply to this message.</p>
                        <p>&copy; 2025 DocNet 360. All rights reserved.</p>
                        <p style="margin-top: 10px;">Need help? Contact us at support@docnet360.com</p>
                    </div>
                </div>
            </body>
            </html>
            """;

        return String.format(template,
                "#333333",      // body text color
                "#f4f7fa",      // container background
                "#667eea",      // header gradient start
                "#764ba2",      // header gradient end
                "#444444",      // content text color
                "#f0f4ff",      // OTP box background
                "#667eea",      // OTP box border
                "#667eea",      // OTP code color
                "#fff3cd",      // warning background
                "#ffc107",      // warning border
                "#e0e0e0",      // footer border
                "#666666",      // footer text color
                userName,       // user name
                "#666666",      // "YOUR OTP CODE" text color
                otp,            // OTP value
                "#999999"       // expiry text color
        );
    }

    @Async
    public void sendPasswordResetSuccessEmail(String toEmail, String userName) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("DocNet - Password Reset Successful");

            String htmlContent = buildPasswordResetSuccessTemplate(userName);
            helper.setText(htmlContent, true);

            mailSender.send(message);
            log.info("Password reset success email sent to: {}", toEmail);

        } catch (MessagingException e) {
            log.error("Failed to send password reset success email to: {}", toEmail, e);
        }
    }

    private String buildPasswordResetSuccessTemplate(String userName) {
        String template = """
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: %s;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: %s;
                    }
                    .header {
                        background: linear-gradient(135deg, %s 0%%, %s 100%%);
                        color: white;
                        padding: 30px;
                        text-align: center;
                        border-radius: 10px 10px 0 0;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 28px;
                    }
                    .header p {
                        margin: 5px 0 0 0;
                        font-size: 16px;
                    }
                    .content {
                        background-color: white;
                        padding: 40px 30px;
                        border-radius: 0 0 10px 10px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .content p {
                        margin: 15px 0;
                        color: %s;
                    }
                    .success-icon {
                        font-size: 64px;
                        text-align: center;
                        margin: 20px 0;
                    }
                    .success-message {
                        background-color: %s;
                        border-left: 4px solid %s;
                        padding: 15px;
                        margin: 20px 0;
                        border-radius: 4px;
                    }
                    .security-tips {
                        background-color: %s;
                        padding: 20px;
                        margin: 20px 0;
                        border-radius: 8px;
                        border: 1px solid %s;
                    }
                    .security-tips h3 {
                        margin-top: 0;
                        color: %s;
                    }
                    .security-tips ul {
                        margin: 10px 0;
                        padding-left: 20px;
                    }
                    .security-tips li {
                        margin: 8px 0;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 20px;
                        padding-top: 20px;
                        border-top: 1px solid %s;
                        color: %s;
                        font-size: 12px;
                    }
                    .footer p {
                        margin: 5px 0;
                    }
                    .button {
                        display: inline-block;
                        padding: 12px 30px;
                        background: linear-gradient(135deg, %s 0%%, %s 100%%);
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        margin: 20px 0;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>DocNet 360</h1>
                        <p>Password Reset Successful</p>
                    </div>
                    <div class="content">
                        <div class="success-icon">✅</div>
                        
                        <div class="success-message">
                            <strong>Password Successfully Changed</strong>
                        </div>
                        
                        <p>Hello <strong>%s</strong>,</p>
                        <p>Your password has been successfully reset and updated in our system.</p>
                        <p>You can now log in to your DocNet 360 account using your new password.</p>
                        
                        <div style="text-align: center;">
                            <a href="http://localhost:3000/login" class="button">Login to Your Account</a>
                        </div>
                        
                        <div class="security-tips">
                            <h3>🔒 Security Tips</h3>
                            <ul>
                                <li>Use a strong, unique password for your account</li>
                                <li>Never share your password with anyone</li>
                                <li>Enable two-factor authentication if available</li>
                                <li>Log out from shared devices after use</li>
                            </ul>
                        </div>
                        
                        <p><strong>⚠️ Important:</strong> If you didn't make this change or suspect unauthorized access to your account, please contact our support team immediately.</p>
                        
                        <p style="margin-top: 30px;">Best regards,<br><strong>The DocNet 360 Team</strong></p>
                    </div>
                    <div class="footer">
                        <p>This is an automated email. Please do not reply to this message.</p>
                        <p>&copy; 2025 DocNet 360. All rights reserved.</p>
                        <p style="margin-top: 10px;">Need help? Contact us at support@docnet360.com</p>
                    </div>
                </div>
            </body>
            </html>
            """;

        return String.format(template,
                "#333333",      // body text color
                "#f4f7fa",      // container background
                "#667eea",      // header gradient start
                "#764ba2",      // header gradient end
                "#444444",      // content text color
                "#d4edda",      // success message background
                "#28a745",      // success message border
                "#f8f9fa",      // security tips background
                "#e0e0e0",      // security tips border
                "#667eea",      // security tips heading color
                "#e0e0e0",      // footer border
                "#666666",      // footer text color
                "#667eea",      // button gradient start
                "#764ba2",      // button gradient end
                userName        // user name
        );
    }
}