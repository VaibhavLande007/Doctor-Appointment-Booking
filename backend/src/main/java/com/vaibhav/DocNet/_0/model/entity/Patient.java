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

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "patients")
public class Patient {
    @Id
    private String id;

    @Indexed
    private String userId;

    private LocalDate dateOfBirth;
    private String gender;
    private String bloodGroup;

    private String address;
    private String city;
    private String state;
    private String country;
    private String zipCode;

    private String emergencyContactName;
    private String emergencyContactNumber;

    @Builder.Default
    private List<String> allergies = new ArrayList<>();

    @Builder.Default
    private List<String> chronicConditions = new ArrayList<>();

    @Builder.Default
    private List<String> currentMedications = new ArrayList<>();

    private String insuranceProvider;
    private String insurancePolicyNumber;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;
}