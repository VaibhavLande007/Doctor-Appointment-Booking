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
        log.info("Creating appointment request for patient: {} with doctor: {}", patientId, request.getDoctorId());

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

        LocalTime endTime = request.getStartTime().plusMinutes(30);

        // Create appointment with PENDING_APPROVAL status
        Appointment appointment = Appointment.builder()
                .patientId(patientId)
                .doctorId(request.getDoctorId())
                .appointmentDate(request.getAppointmentDate())
                .startTime(request.getStartTime())
                .endTime(endTime)
                .type(request.getType())
                .status(Appointment.AppointmentStatus.PENDING_APPROVAL) // Changed
                .reasonForVisit(request.getReasonForVisit())
                .symptoms(request.getSymptoms())
                .consultationFee(doctor.getConsultationFee())
                .build();

        if (request.getType() == Appointment.AppointmentType.VIDEO) {
            appointment.setVideoCallLink(generateVideoCallLink());
        }

        appointment = appointmentRepository.save(appointment);

        // Mark time slot as temporarily held (not fully booked yet)
        timeSlot.setAvailable(false);
        timeSlot.setAppointmentId(appointment.getId());
        timeSlotRepository.save(timeSlot);

        // Notify doctor about the appointment request
        notificationService.sendAppointmentRequestToDoctor(appointment);

        log.info("Appointment request created with ID: {}", appointment.getId());
        return appointment;
    }


    public Page<Appointment> getPatientAppointments(String patientId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());
        Page<Appointment> appointments = appointmentRepository.findByPatientId(patientId, pageable);
        return enrichAppointmentsPage(appointments); // ADD THIS
    }

    public Page<Appointment> getDoctorAppointments(String doctorId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());
        Page<Appointment> appointments = appointmentRepository.findByDoctorId(doctorId, pageable);
        return enrichAppointmentsPage(appointments); // ADD THIS
    }

    public Page<Appointment> getDoctorAppointmentsByStatus(String doctorId, Appointment.AppointmentStatus status, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").descending());
        Page<Appointment> appointments = appointmentRepository.findByDoctorIdAndStatus(doctorId, status, pageable);
        return enrichAppointmentsPage(appointments); // ADD THIS
    }

    public Page<Appointment> getPendingAppointments(String doctorId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("appointmentDate").ascending());
        Page<Appointment> appointments = appointmentRepository.findByDoctorIdAndStatus(
                doctorId,
                Appointment.AppointmentStatus.PENDING_APPROVAL,
                pageable
        );
        return enrichAppointmentsPage(appointments); // ADD THIS
    }

    public Appointment getAppointmentById(String appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment", "id", appointmentId));
        enrichAppointmentWithUserInfo(appointment); // ADD THIS
        return appointment;
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
    @Transactional
    public Appointment approveAppointment(String appointmentId, String doctorId) {
        log.info("Doctor {} approving appointment {}", doctorId, appointmentId);

        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment", "id", appointmentId));

        // Verify doctor owns this appointment
        if (!appointment.getDoctorId().equals(doctorId)) {
            throw new BadRequestException("You don't have permission to approve this appointment");
        }

        // Verify appointment is pending
        if (appointment.getStatus() != Appointment.AppointmentStatus.PENDING_APPROVAL) {
            throw new BadRequestException("Appointment is not pending approval");
        }

        // Update status to SCHEDULED
        appointment.setStatus(Appointment.AppointmentStatus.SCHEDULED);
        appointment = appointmentRepository.save(appointment);

        // Send confirmation notification to patient
        notificationService.sendAppointmentConfirmation(appointment);

        log.info("Appointment {} approved successfully", appointmentId);
        return appointment;
    }

    @Transactional
    public Appointment rejectAppointment(String appointmentId, String doctorId, String rejectionReason) {
        log.info("Doctor {} rejecting appointment {}", doctorId, appointmentId);

        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment", "id", appointmentId));

        // Verify doctor owns this appointment
        if (!appointment.getDoctorId().equals(doctorId)) {
            throw new BadRequestException("You don't have permission to reject this appointment");
        }

        // Verify appointment is pending
        if (appointment.getStatus() != Appointment.AppointmentStatus.PENDING_APPROVAL) {
            throw new BadRequestException("Appointment is not pending approval");
        }

        // Update status to CANCELLED
        appointment.setStatus(Appointment.AppointmentStatus.CANCELLED);
        appointment.setRejectionReason(rejectionReason); // Add this field to entity
        appointment = appointmentRepository.save(appointment);

        // Free up the time slot
        timeSlotRepository.findByDoctorIdAndDateAndStartTime(
                appointment.getDoctorId(),
                appointment.getAppointmentDate(),
                appointment.getStartTime()
        ).ifPresent(slot -> {
            slot.setAvailable(true);
            slot.setAppointmentId(null);
            timeSlotRepository.save(slot);
        });

        // Send rejection notification to patient
        notificationService.sendAppointmentRejection(appointment, rejectionReason);

        log.info("Appointment {} rejected successfully", appointmentId);
        return appointment;
    }

    // Add after existing methods in AppointmentService

    private void enrichAppointmentWithUserInfo(Appointment appointment) {
        userRepository.findById(appointment.getPatientId())
                .ifPresent(appointment::setPatientInfo);
//        userRepository.findById(appointment.getDoctorId())
//                .ifPresent(appointment::setDoctorInfo);

        doctorRepository.findById(appointment.getDoctorId())
                .ifPresent(doctor -> {
                    // Now get the user info using the doctor's userId
                    userRepository.findById(doctor.getUserId())
                            .ifPresent(appointment::setDoctorInfo);
                });
    }



    private Page<Appointment> enrichAppointmentsPage(Page<Appointment> appointments) {
        appointments.forEach(this::enrichAppointmentWithUserInfo);
        return appointments;
    }

    private String generateVideoCallLink() {
        return "https://meet.docnet360.com/" + UUID.randomUUID().toString();
    }
}
