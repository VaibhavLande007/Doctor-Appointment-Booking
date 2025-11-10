package com.vaibhav.DocNet._0.controller;

import com.vaibhav.DocNet._0.exception.ResourceNotFoundException;
import com.vaibhav.DocNet._0.model.dto.request.CreateAppointmentRequest;
import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.entity.Appointment;
import com.vaibhav.DocNet._0.model.entity.Doctor;
import com.vaibhav.DocNet._0.model.entity.TimeSlot;
import com.vaibhav.DocNet._0.repository.DoctorRepository;
import com.vaibhav.DocNet._0.security.CustomUserDetails;
import com.vaibhav.DocNet._0.service.AppointmentService;
import com.vaibhav.DocNet._0.service.TimeSlotService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor
@Tag(name = "Appointments", description = "Appointment management APIs")
@SecurityRequirement(name = "Bearer Authentication")
public class AppointmentController {

    private final AppointmentService appointmentService;
    private final TimeSlotService timeSlotService;
    private final DoctorRepository doctorRepository;
    @PostMapping
    @PreAuthorize("hasRole('PATIENT')")
    @Operation(summary = "Book an appointment")
    public ResponseEntity<ApiResponse<Appointment>> bookAppointment(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @Valid @RequestBody CreateAppointmentRequest request) {

        Appointment appointment = appointmentService.bookAppointment(userDetails.getId(), request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Appointment booked successfully", appointment));
    }

    @GetMapping("/my-appointments")
    @PreAuthorize("hasRole('PATIENT')")
    @Operation(summary = "Get my appointments")
    public ResponseEntity<ApiResponse<Page<Appointment>>> getMyAppointments(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<Appointment> appointments = appointmentService.getPatientAppointments(
                userDetails.getId(), page, size);
        return ResponseEntity.ok(ApiResponse.success("Appointments retrieved", appointments));
    }

    @GetMapping("/doctor/appointments")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<ApiResponse<Page<Appointment>>> getDoctorAppointments(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) Appointment.AppointmentStatus status) { // ADD THIS

        String doctorId = getDoctorIdFromUser(userDetails.getId());
        Page<Appointment> appointments;

        if (status != null) {
            appointments = appointmentService.getDoctorAppointmentsByStatus(doctorId, status, page, size);
        } else {
            appointments = appointmentService.getDoctorAppointments(doctorId, page, size);
        }

        return ResponseEntity.ok(ApiResponse.success("Appointments retrieved", appointments));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get appointment by ID")
    public ResponseEntity<ApiResponse<Appointment>> getAppointment(@PathVariable String id) {
        Appointment appointment = appointmentService.getAppointmentById(id);
        return ResponseEntity.ok(ApiResponse.success("Appointment retrieved", appointment));
    }

    @PutMapping("/{id}/cancel")
    @Operation(summary = "Cancel appointment")
    public ResponseEntity<ApiResponse<Void>> cancelAppointment(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @PathVariable String id) {

        appointmentService.cancelAppointment(id, userDetails.getId());
        return ResponseEntity.ok(ApiResponse.success("Appointment cancelled", null));
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Update appointment status")
    public ResponseEntity<ApiResponse<Appointment>> updateStatus(
            @PathVariable String id,
            @RequestParam Appointment.AppointmentStatus status) {

        Appointment appointment = appointmentService.updateAppointmentStatus(id, status);
        return ResponseEntity.ok(ApiResponse.success("Status updated", appointment));
    }

    @GetMapping("/slots")
    @Operation(summary = "Get available time slots")
    public ResponseEntity<ApiResponse<List<TimeSlot>>> getAvailableSlots(
            @RequestParam String doctorId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {

        List<TimeSlot> slots = timeSlotService.getAvailableSlots(doctorId, date);
        return ResponseEntity.ok(ApiResponse.success("Available slots retrieved", slots));
    }
    @GetMapping("/doctor/pending")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Get pending appointment requests")
    public ResponseEntity<ApiResponse<Page<Appointment>>> getPendingAppointments(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        // Get doctor ID from userDetails
        String doctorId = getDoctorIdFromUser(userDetails.getId());
        Page<Appointment> appointments = appointmentService.getPendingAppointments(
                doctorId, page, size);
        return ResponseEntity.ok(ApiResponse.success("Pending appointments retrieved", appointments));
    }

    @PutMapping("/{id}/approve")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Approve appointment request")
    public ResponseEntity<ApiResponse<Appointment>> approveAppointment(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @PathVariable String id) {

        String doctorId = getDoctorIdFromUser(userDetails.getId());
        Appointment appointment = appointmentService.approveAppointment(id, doctorId);
        return ResponseEntity.ok(ApiResponse.success("Appointment approved", appointment));
    }

    @PutMapping("/{id}/reject")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Reject appointment request")
    public ResponseEntity<ApiResponse<Appointment>> rejectAppointment(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @PathVariable String id,
            @RequestParam(required = false) String reason) {

        String doctorId = getDoctorIdFromUser(userDetails.getId());
        Appointment appointment = appointmentService.rejectAppointment(
                id, doctorId, reason);
        return ResponseEntity.ok(ApiResponse.success("Appointment rejected", appointment));
    }

    // Helper method to get doctor ID from user
    private String getDoctorIdFromUser(String userId) {
        // Implement based on your user-doctor relationship
        Doctor doctor = doctorRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor", "userId", userId));
        return doctor.getId();
    }

    @DeleteMapping("/slots/{id}")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Delete a time slot")
    public ResponseEntity<ApiResponse<Void>> deleteTimeSlot(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @PathVariable String id) {

        String doctorId = getDoctorIdFromUser(userDetails.getId());
        timeSlotService.deleteTimeSlot(id, doctorId);
        return ResponseEntity.ok(ApiResponse.success("Time slot deleted", null));
    }

    @DeleteMapping("/slots/bulk")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Delete multiple time slots")
    public ResponseEntity<ApiResponse<Void>> deleteTimeSlots(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody List<String> slotIds) {

        String doctorId = getDoctorIdFromUser(userDetails.getId());
        timeSlotService.deleteTimeSlots(slotIds, doctorId);
        return ResponseEntity.ok(ApiResponse.success(
                String.format("%d time slots deleted", slotIds.size()), null));
    }
}