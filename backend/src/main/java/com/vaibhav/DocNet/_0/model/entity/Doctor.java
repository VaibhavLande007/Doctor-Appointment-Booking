package com.vaibhav.DocNet._0.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "doctors")
public class Doctor {
    @Id
    private String id;

    @Indexed
    private String userId;

    private String registrationNumber;
    private List<String> specializations;
    private String qualification;
    private Integer experienceYears;

    private String bio;
    private String clinicName;
    private Address address;

    private Double consultationFee;

    @Builder.Default
    private List<String> services = new ArrayList<>();

    @Builder.Default
    private List<String> languages = new ArrayList<>();

    private Availability availability;

    @Builder.Default
    private Double rating = 0.0;

    @Builder.Default
    private Integer totalReviews = 0;

    @Builder.Default
    private boolean verified = false;

    @Builder.Default
    private boolean acceptingPatients = true;

    // NEW FIELDS
    @Builder.Default
    private List<Education> educations = new ArrayList<>();

    @Builder.Default
    private List<Experience> experiences = new ArrayList<>();

    @Builder.Default
    private List<Award> awards = new ArrayList<>();

    @Builder.Default
    private List<Clinic> clinics = new ArrayList<>();

    @Builder.Default
    private List<Insurance> insurances = new ArrayList<>();

    @Builder.Default
    private List<Membership> memberships = new ArrayList<>();

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Address {
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
    public static class Availability {
        private List<DaySchedule> weekSchedule;
        private Integer slotDuration; // in minutes

        @Data
        @Builder
        @NoArgsConstructor
        @AllArgsConstructor
        public static class DaySchedule {
            private String dayOfWeek;
            private boolean available;
            private LocalTime startTime;
            private LocalTime endTime;
            private LocalTime breakStartTime;
            private LocalTime breakEndTime;
        }
    }

    // NEW NESTED CLASSES
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Education {
        private String id;
        private String institution;
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
    public static class Experience {
        private String id;
        private String title;
        private String hospital;
        private String location;
        private String employmentType; // FULL_TIME, PART_TIME
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
    public static class Award {
        private String id;
        private String name;
        private Integer year;
        private String description;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Clinic {
        private String id;
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
    public static class Insurance {
        private String id;
        private String name;
        private String logoUrl;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Membership {
        private String id;
        private String title;
        private String about;
    }
}