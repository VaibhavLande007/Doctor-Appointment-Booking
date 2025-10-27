package com.vaibhav.DocNet._0.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "prescriptions")
public class Prescription {
    @Id
    private String id;

    private String prescriptionNumber;
    private String appointmentId;
    private String patientId;
    private String doctorId;

    private String diagnosis;
    private List<Medication> medications;
    private String instructions;

    private LocalDate prescriptionDate;
    private LocalDate validUntil;

    @CreatedDate
    private LocalDateTime createdAt;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Medication {
        private String name;
        private String dosage;
        private String frequency;
        private Integer duration; // in days
        private String instructions;
    }
}