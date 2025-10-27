package com.vaibhav.DocNet._0.service;

import com.vaibhav.DocNet._0.model.entity.Appointment;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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
}