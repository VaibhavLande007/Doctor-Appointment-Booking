package com.vaibhav.DocNet._0.scheduler;

import com.vaibhav.DocNet._0.model.entity.Appointment;
import com.vaibhav.DocNet._0.repository.AppointmentRepository;
import com.vaibhav.DocNet._0.service.NotificationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class AppointmentScheduler {

    private final AppointmentRepository appointmentRepository;
    private final NotificationService notificationService;

    @Scheduled(cron = "0 0 9 * * *") // Every day at 9 AM
    public void sendDailyReminders() {
        log.info("Sending daily appointment reminders");

        LocalDate tomorrow = LocalDate.now().plusDays(1);
        List<Appointment> appointments = appointmentRepository.findByAppointmentDateBetweenAndStatus(
                tomorrow, tomorrow, Appointment.AppointmentStatus.SCHEDULED
        );

        appointments.forEach(appointment -> {
            if (appointment.getReminderSentAt() == null) {
                notificationService.sendAppointmentConfirmation(appointment);
                appointment.setReminderSentAt(LocalDateTime.now());
                appointmentRepository.save(appointment);
            }
        });

        log.info("Sent reminders for {} appointments", appointments.size());
    }

    @Scheduled(cron = "0 0 2 * * *") // Every day at 2 AM
    public void updateMissedAppointments() {
        log.info("Updating missed appointments");

        LocalDate yesterday = LocalDate.now().minusDays(1);
        List<Appointment> appointments = appointmentRepository.findByAppointmentDateBetweenAndStatus(
                yesterday, yesterday, Appointment.AppointmentStatus.SCHEDULED
        );

        appointments.forEach(appointment -> {
            appointment.setStatus(Appointment.AppointmentStatus.NO_SHOW);
            appointmentRepository.save(appointment);
        });

        log.info("Updated {} missed appointments", appointments.size());
    }
}