package com.vaibhav.DocNet._0.service;
import com.vaibhav.DocNet._0.model.entity.Appointment;
import com.vaibhav.DocNet._0.model.entity.Notification;
import com.vaibhav.DocNet._0.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final EmailService emailService;

    @Transactional
    public void sendAppointmentConfirmation(Appointment appointment) {
        // Create notification for patient
        Notification notification = Notification.builder()
                .userId(appointment.getPatientId())
                .title("Appointment Confirmed")
                .message("Your appointment has been scheduled for " + appointment.getAppointmentDate())
                .type(Notification.NotificationType.APPOINTMENT)
                .read(false)
                .build();

        notificationRepository.save(notification);

        // Send email
        emailService.sendAppointmentConfirmationEmail(appointment);

        log.info("Appointment confirmation sent for appointment: {}", appointment.getId());
    }

    @Transactional
    public void sendCancellationNotification(Appointment appointment) {
        Notification notification = Notification.builder()
                .userId(appointment.getPatientId())
                .title("Appointment Cancelled")
                .message("Your appointment scheduled for " + appointment.getAppointmentDate() + " has been cancelled")
                .type(Notification.NotificationType.APPOINTMENT)
                .read(false)
                .build();

        notificationRepository.save(notification);
        log.info("Cancellation notification sent for appointment: {}", appointment.getId());
    }

    public Page<Notification> getUserNotifications(String userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return notificationRepository.findByUserIdOrderByCreatedAtDesc(userId, pageable);
    }

    @Transactional
    public void markAsRead(String notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
                .orElseThrow(() -> new RuntimeException("Notification not found"));

        notification.setRead(true);
        notificationRepository.save(notification);
    }

    public long getUnreadCount(String userId) {
        return notificationRepository.countByUserIdAndReadFalse(userId);
    }
}