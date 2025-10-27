package com.vaibhav.DocNet._0.service;

import com.vaibhav.DocNet._0.exception.BadRequestException;
import com.vaibhav.DocNet._0.exception.ResourceNotFoundException;
import com.vaibhav.DocNet._0.model.dto.request.CreateAppointmentRequest;
import com.vaibhav.DocNet._0.model.entity.Appointment;
import com.vaibhav.DocNet._0.model.entity.Doctor;
import com.vaibhav.DocNet._0.model.entity.TimeSlot;
import com.vaibhav.DocNet._0.repository.AppointmentRepository;
import com.vaibhav.DocNet._0.repository.DoctorRepository;
import com.vaibhav.DocNet._0.repository.TimeSlotRepository;
import com.vaibhav.DocNet._0.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final TimeSlotRepository timeSlotRepository;
    private final DoctorRepository doctorRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;

    @Transactional
    public Appointment bookAppointment(String patientId, CreateAppointmentRequest request) {
        log.info("Booking appointment for patient: {} with doctor: {}", patientId, request.getDoctorId());

        // Validate doctor
        Doctor doctor = doctorRepository.findById(request.getDoctorId())
                .orElseThrow(() -> new ResourceNotFoundException("Doctor", "id", request.getDoctorId()));

        if (!doctor.isAcceptingPatients()) {
            throw new BadRequestException("Doctor is not accepting patients");
        }

        // Check time slot availability
        TimeSlot timeSlot = timeSlotRepository.findByDoctorIdAndDateAndStartTime(
                request.getDoctorId(),
                request.getAppointmentDate(),
                request.getStartTime()
        ).orElseThrow(() -> new BadRequestException("Time slot not available"));

        if (!timeSlot.isAvailable()) {
            throw new BadRequestException("Time slot is already booked");
        }

        // Calculate end time
        LocalTime endTime = request.getStartTime().plusMinutes(30); // Default 30 min consultation

        // Create appointment
        Appointment appointment = Appointment.builder()
                .patientId(patientId)
                .doctorId(request.getDoctorId())
                .appointmentDate(request.getAppointmentDate())
                .startTime(request.getStartTime())
                .endTime(endTime)
                .type(request.getType())
                .status(Appointment.AppointmentStatus.SCHEDULED)
                .reasonForVisit(request.getReasonForVisit())
                .symptoms(request.getSymptoms())
                .consultationFee(doctor.getConsultationFee())
                .build();

        // Generate video call link if needed
        if (request.getType() == Appointment.AppointmentType.VIDEO) {
            appointment.setVideoCallLink(generateVideoCallLink());
        }

        appointment = appointmentRepository.save(appointment);

        // Mark time slot as unavailable
        timeSlot.setAvailable(false);
        timeSlot.setAppointmentId(appointment.getId());
        timeSlotRepository.save(timeSlot);

        // Send notifications
        notificationService.sendAppointmentConfirmation(appointment);

        log.info("Appointment booked successfully with ID: {}", appointment.getId());
        return appointment;
    }

    public Page<Appointment> getPatientAppointments(String patientId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());
        return appointmentRepository.findByPatientId(patientId, pageable);
    }

    public Page<Appointment> getDoctorAppointments(String doctorId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());
        return appointmentRepository.findByDoctorId(doctorId, pageable);
    }

    public Appointment getAppointmentById(String appointmentId) {
        return appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment", "id", appointmentId));
    }

    @Transactional
    public Appointment updateAppointmentStatus(String appointmentId, Appointment.AppointmentStatus status) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment", "id", appointmentId));

        appointment.setStatus(status);

        // If cancelled, free up the time slot
        if (status == Appointment.AppointmentStatus.CANCELLED) {
            timeSlotRepository.findByDoctorIdAndDateAndStartTime(
                    appointment.getDoctorId(),
                    appointment.getAppointmentDate(),
                    appointment.getStartTime()
            ).ifPresent(slot -> {
                slot.setAvailable(true);
                slot.setAppointmentId(null);
                timeSlotRepository.save(slot);
            });
        }

        return appointmentRepository.save(appointment);
    }

    @Transactional
    public void cancelAppointment(String appointmentId, String userId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment", "id", appointmentId));

        // Verify user has permission to cancel
        if (!appointment.getPatientId().equals(userId) && !appointment.getDoctorId().equals(userId)) {
            throw new BadRequestException("You don't have permission to cancel this appointment");
        }

        updateAppointmentStatus(appointmentId, Appointment.AppointmentStatus.CANCELLED);
        notificationService.sendCancellationNotification(appointment);
    }

    public List<Appointment> getTodayAppointments(String doctorId) {
        LocalDate today = LocalDate.now();
        return appointmentRepository.findByAppointmentDateBetweenAndStatus(
                today, today, Appointment.AppointmentStatus.SCHEDULED
        );
    }

    private String generateVideoCallLink() {
        return "https://meet.docnet360.com/" + UUID.randomUUID().toString();
    }
}
