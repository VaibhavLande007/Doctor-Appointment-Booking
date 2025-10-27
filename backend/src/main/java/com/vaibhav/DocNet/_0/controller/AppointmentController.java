package com.vaibhav.DocNet._0.controller;

import com.vaibhav.DocNet._0.model.dto.request.CreateAppointmentRequest;
import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.entity.Appointment;
import com.vaibhav.DocNet._0.model.entity.TimeSlot;
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
    @Operation(summary = "Get doctor appointments")
    public ResponseEntity<ApiResponse<Page<Appointment>>> getDoctorAppointments(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        // Need to get doctor ID from userDetails - implement this
        Page<Appointment> appointments = appointmentService.getDoctorAppointments(
                "doctorId", page, size);
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
}