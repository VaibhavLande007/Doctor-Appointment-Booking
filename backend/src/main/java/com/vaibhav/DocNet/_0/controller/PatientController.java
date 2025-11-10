package com.vaibhav.DocNet._0.controller;

import com.vaibhav.DocNet._0.exception.ResourceNotFoundException;
import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.dto.response.PaginatedResponse;
import com.vaibhav.DocNet._0.model.dto.response.PatientResponse;
import com.vaibhav.DocNet._0.model.entity.Doctor;
import com.vaibhav.DocNet._0.model.entity.Patient;
import com.vaibhav.DocNet._0.repository.DoctorRepository;
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

import java.util.Map;

@RestController
@RequestMapping("/patients")
@RequiredArgsConstructor
@Tag(name = "Patients", description = "Patient management APIs")
@SecurityRequirement(name = "Bearer Authentication")
public class PatientController {

    private final PatientService patientService;
    private final DoctorRepository doctorRepository;

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

    // NEW ENDPOINTS FOR DOCTORS

    @GetMapping("/doctor/my-patients")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Get doctor's patients list")
    public ResponseEntity<ApiResponse<PaginatedResponse<PatientResponse>>> getMyPatients(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestParam(required = false) Boolean isActive,
            @RequestParam(required = false) String search,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {

        String doctorId = getDoctorIdFromUser(userDetails.getId());

        PaginatedResponse<PatientResponse> patients = patientService.getDoctorPatients(
                doctorId, isActive, search, page, size);

        return ResponseEntity.ok(ApiResponse.success("Patients retrieved", patients));
    }

    @GetMapping("/doctor/statistics")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Get patient statistics for doctor")
    public ResponseEntity<ApiResponse<Map<String, Integer>>> getPatientStatistics(
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        String doctorId = getDoctorIdFromUser(userDetails.getId());
        Map<String, Integer> statistics = patientService.getPatientStatistics(doctorId);

        return ResponseEntity.ok(ApiResponse.success("Statistics retrieved", statistics));
    }

    // Helper method
    private String getDoctorIdFromUser(String userId) {
        Doctor doctor = doctorRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor", "userId", userId));
        return doctor.getId();
    }
}