package com.vaibhav.DocNet._0.controller;

import com.vaibhav.DocNet._0.model.dto.response.ApiResponse;
import com.vaibhav.DocNet._0.model.entity.Review;
import com.vaibhav.DocNet._0.repository.ReviewRepository;
import com.vaibhav.DocNet._0.security.CustomUserDetails;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
@Tag(name = "Reviews", description = "Review management APIs")
@SecurityRequirement(name = "Bearer Authentication")
public class ReviewController {

    private final ReviewRepository reviewRepository;

    @PostMapping
    @PreAuthorize("hasRole('PATIENT')")
    @Operation(summary = "Create review")
    public ResponseEntity<ApiResponse<Review>> createReview(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody Review review) {

        review.setPatientId(userDetails.getId());
        Review created = reviewRepository.save(review);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Review created", created));
    }

    @GetMapping("/doctor/{doctorId}")
    @Operation(summary = "Get doctor reviews")
    public ResponseEntity<ApiResponse<Page<Review>>> getDoctorReviews(
            @PathVariable String doctorId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Review> reviews = reviewRepository.findByDoctorId(doctorId, pageable);
        return ResponseEntity.ok(ApiResponse.success("Reviews retrieved", reviews));
    }
}