package com.vaibhav.DocNet._0.model.dto.request;

import com.vaibhav.DocNet._0.model.entity.Doctor;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateDoctorRequest {

    @NotBlank(message = "Registration number is required")
    private String registrationNumber;

    @NotEmpty(message = "At least one specialization is required")
    private List<String> specializations;

    @NotBlank(message = "Qualification is required")
    private String qualification;

    @NotNull(message = "Experience years is required")
    @Min(value = 0, message = "Experience years must be positive")
    private Integer experienceYears;

    private String bio;
    private String clinicName;

    @NotNull(message = "Address is required")
    private AddressDTO address;

    @NotNull(message = "Consultation fee is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Consultation fee must be positive")
    private Double consultationFee;

    private List<String> services;
    private List<String> languages;

    private AvailabilityDTO availability;

    // NEW FIELDS
    private List<EducationDTO> educations;
    private List<ExperienceDTO> experiences;
    private List<AwardDTO> awards;
    private List<ClinicDTO> clinics;
    private List<InsuranceDTO> insurances;
    private List<MembershipDTO> memberships;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AddressDTO {
        private String street;

        @NotBlank(message = "City is required")
        private String city;

        @NotBlank(message = "State is required")
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

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class EducationDTO {
        private String id;

        @NotBlank(message = "Institution is required")
        private String institution;

        @NotBlank(message = "Course is required")
        private String course;

        private LocalDate startDate;
        private LocalDate endDate;
        private Integer years;
        private String description;
        private String logoUrl;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ExperienceDTO {
        private String id;

        @NotBlank(message = "Title is required")
        private String title;

        @NotBlank(message = "Hospital is required")
        private String hospital;

        private String location;
        private String employmentType;
        private LocalDate startDate;
        private LocalDate endDate;
        private boolean currentlyWorking;
        private String jobDescription;
        private Integer yearsOfExperience;
        private String logoUrl;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AwardDTO {
        private String id;

        @NotBlank(message = "Award name is required")
        private String name;

        private Integer year;
        private String description;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class ClinicDTO {
        private String id;

        @NotBlank(message = "Clinic name is required")
        private String name;

        private String location;
        private String address;
        private String logoUrl;
        private List<String> galleryImages;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class InsuranceDTO {
        private String id;

        @NotBlank(message = "Insurance name is required")
        private String name;

        private String logoUrl;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MembershipDTO {
        private String id;

        @NotBlank(message = "Membership title is required")
        private String title;

        private String about;
    }
}