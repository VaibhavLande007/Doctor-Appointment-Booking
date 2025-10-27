package com.vaibhav.DocNet._0.controller;

import com.vaibhav.DocNet._0.exception.ResourceNotFoundException;
import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.entity.Prescription;
import com.vaibhav.DocNet._0.repository.PrescriptionRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/prescriptions")
@RequiredArgsConstructor
@Tag(name = "Prescriptions", description = "Prescription management APIs")
@SecurityRequirement(name = "Bearer Authentication")
public class PrescriptionController {

    private final PrescriptionRepository prescriptionRepository;

    @PostMapping
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Create prescription")
    public ResponseEntity<ApiResponse<Prescription>> createPrescription(
            @RequestBody Prescription prescription) {

        Prescription created = prescriptionRepository.save(prescription);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Prescription created", created));
    }

    @GetMapping("/patient/{patientId}")
    @Operation(summary = "Get patient prescriptions")
    public ResponseEntity<ApiResponse<List<Prescription>>> getPatientPrescriptions(
            @PathVariable String patientId) {

        List<Prescription> prescriptions = prescriptionRepository.findByPatientId(patientId);
        return ResponseEntity.ok(ApiResponse.success("Prescriptions retrieved", prescriptions));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get prescription by ID")
    public ResponseEntity<ApiResponse<Prescription>> getPrescription(@PathVariable String id) {
        Prescription prescription = prescriptionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Prescription", "id", id));

        return ResponseEntity.ok(ApiResponse.success("Prescription retrieved", prescription));
    }

    @GetMapping("/appointment/{appointmentId}")
    @Operation(summary = "Get prescription by appointment")
    public ResponseEntity<ApiResponse<Prescription>> getPrescriptionByAppointment(
            @PathVariable String appointmentId) {

        Prescription prescription = prescriptionRepository.findByAppointmentId(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException("Prescription not found for appointment"));

        return ResponseEntity.ok(ApiResponse.success("Prescription retrieved", prescription));
    }
}
