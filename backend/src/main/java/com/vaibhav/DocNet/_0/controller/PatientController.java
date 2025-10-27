package com.vaibhav.DocNet._0.controller;

import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.entity.Patient;
import com.vaibhav.DocNet._0.security.CustomUserDetails;
import com.vaibhav.DocNet._0.service.PatientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patients")
@RequiredArgsConstructor
@Tag(name = "Patients", description = "Patient management APIs")
@SecurityRequirement(name = "Bearer Authentication")
public class PatientController {

    private final PatientService patientService;

    @PostMapping("/me")
    @PreAuthorize("hasRole('PATIENT')")
    @Operation(summary = "Create patient profile")
    public ResponseEntity<ApiResponse<Patient>> createProfile(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody Patient patient) {

        Patient created = patientService.createPatientProfile(userDetails.getId(), patient);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Patient profile created", created));
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('PATIENT')")
    @Operation(summary = "Get my patient profile")
    public ResponseEntity<ApiResponse<Patient>> getMyProfile(
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        Patient patient = patientService.getPatientProfile(userDetails.getId());
        return ResponseEntity.ok(ApiResponse.success("Patient profile retrieved", patient));
    }

    @PutMapping("/me")
    @PreAuthorize("hasRole('PATIENT')")
    @Operation(summary = "Update patient profile")
    public ResponseEntity<ApiResponse<Patient>> updateProfile(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody Patient patient) {

        Patient updated = patientService.updatePatientProfile(userDetails.getId(), patient);
        return ResponseEntity.ok(ApiResponse.success("Patient profile updated", updated));
    }
}