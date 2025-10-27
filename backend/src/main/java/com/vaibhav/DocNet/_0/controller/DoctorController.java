package com.vaibhav.DocNet._0.controller;

import com.vaibhav.DocNet._0.model.dto.request.CreateDoctorRequest;
import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.dto.response.DoctorResponse;
import com.vaibhav.DocNet._0.model.dto.response.PaginatedResponse;
import com.vaibhav.DocNet._0.security.CustomUserDetails;
import com.vaibhav.DocNet._0.service.DoctorService;
import com.vaibhav.DocNet._0.service.TimeSlotService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/doctors")
@RequiredArgsConstructor
@Tag(name = "Doctors", description = "Doctor management APIs")
@SecurityRequirement(name = "Bearer Authentication")
public class DoctorController {

    private final DoctorService doctorService;
    private final TimeSlotService timeSlotService;

    @PostMapping("/me")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Create doctor profile")
    public ResponseEntity<ApiResponse<DoctorResponse>> createProfile(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @Valid @RequestBody CreateDoctorRequest request) {

        DoctorResponse response = doctorService.createDoctorProfile(userDetails.getId(), request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Doctor profile created successfully", response));
    }

    @GetMapping("/me")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Get my doctor profile")
    public ResponseEntity<ApiResponse<DoctorResponse>> getMyProfile(
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        DoctorResponse response = doctorService.getMyProfile(userDetails.getId());
        return ResponseEntity.ok(ApiResponse.success("Doctor profile retrieved", response));
    }

    @PutMapping("/me")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Update doctor profile")
    public ResponseEntity<ApiResponse<DoctorResponse>> updateProfile(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @Valid @RequestBody CreateDoctorRequest request) {

        DoctorResponse response = doctorService.updateDoctorProfile(userDetails.getId(), request);
        return ResponseEntity.ok(ApiResponse.success("Doctor profile updated", response));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get doctor by ID")
    public ResponseEntity<ApiResponse<DoctorResponse>> getDoctorById(@PathVariable String id) {
        DoctorResponse response = doctorService.getDoctorById(id);
        return ResponseEntity.ok(ApiResponse.success("Doctor retrieved", response));
    }

    @GetMapping
    @Operation(summary = "Get all doctors")
    public ResponseEntity<ApiResponse<PaginatedResponse<DoctorResponse>>> getAllDoctors(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "rating") String sortBy) {

        PaginatedResponse<DoctorResponse> response = doctorService.getAllDoctors(page, size, sortBy);
        return ResponseEntity.ok(ApiResponse.success("Doctors retrieved", response));
    }

    @GetMapping("/search")
    @Operation(summary = "Search doctors")
    public ResponseEntity<ApiResponse<PaginatedResponse<DoctorResponse>>> searchDoctors(
            @RequestParam(required = false) String specialization,
            @RequestParam(required = false) String city,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {

        PaginatedResponse<DoctorResponse> response =
                doctorService.searchDoctors(specialization, city, page, size);
        return ResponseEntity.ok(ApiResponse.success("Search results", response));
    }

    @PostMapping("/me/generate-slots")
    @PreAuthorize("hasRole('DOCTOR')")
    @Operation(summary = "Generate time slots for next 30 days")
    public ResponseEntity<ApiResponse<Void>> generateTimeSlots(
            @AuthenticationPrincipal CustomUserDetails userDetails) {

        // Get doctor ID from user
        DoctorResponse doctor = doctorService.getMyProfile(userDetails.getId());
        timeSlotService.generateSlotsForNextDays(doctor.getId(), 30);

        return ResponseEntity.ok(ApiResponse.success("Time slots generated successfully", null));
    }
}