package com.vaibhav.DocNet._0.model.dto.response;

import com.vaibhav.DocNet._0.model.entity.Doctor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DoctorResponse {
    private String id;
    private String userId;

    // User details
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String profileImage;

    // Doctor specific details
    private String registrationNumber;
    private List<String> specializations;
    private String qualification;
    private Integer experienceYears;
    private String bio;
    private String clinicName;
    private AddressDTO address;
    private Double consultationFee;
    private List<String> services;
    private List<String> languages;
    private AvailabilityDTO availability;

    // Ratings
    private Double rating;
    private Integer totalReviews;

    // Status
    private boolean verified;
    private boolean acceptingPatients;

    // New fields
    private List<Doctor.Education> educations;
    private List<Doctor.Experience> experiences;
    private List<Doctor.Award> awards;
    private List<Doctor.Clinic> clinics;
    private List<Doctor.Insurance> insurances;
    private List<Doctor.Membership> memberships;

    // Timestamps
    private LocalDateTime createdAt;

    // Nested DTOs
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AddressDTO {
        private String street;
        private String city;
        private String state;
        private String country;
        private String zipCode;
        private Double latitude;
        private Double longitude;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AvailabilityDTO {
        private List<DayScheduleDTO> weekSchedule;
        private Integer slotDuration;

        @Data
        @Builder
        @NoArgsConstructor
        @AllArgsConstructor
        public static class DayScheduleDTO {
            private String dayOfWeek;
            private boolean available;
            private LocalTime startTime;
            private LocalTime endTime;
            private LocalTime breakStartTime;
            private LocalTime breakEndTime;
        }
    }
}