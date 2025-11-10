package com.vaibhav.DocNet._0.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "appointments")
public class Appointment {
    @Id
    private String id;

    @Indexed
    private String patientId;

    @Indexed
    private String doctorId;

    @Indexed
    private LocalDate appointmentDate;

    private LocalTime startTime;
    private LocalTime endTime;

    @Builder.Default
    private AppointmentType type = AppointmentType.IN_PERSON;

    @Builder.Default
    private AppointmentStatus status = AppointmentStatus.SCHEDULED;

    private String reasonForVisit;
    private String symptoms;
    private String notes;
    private String rejectionReason;

    private String prescriptionId;
    private String paymentId;

    private Double consultationFee;

    private String videoCallLink;

    private LocalDateTime reminderSentAt;

    @CreatedDate
    private LocalDateTime createdAt;

    @LastModifiedDate
    private LocalDateTime updatedAt;

    @Transient
    private User patientInfo;

    @Transient
    private User doctorInfo;

    public enum AppointmentType {
        IN_PERSON, VIDEO, PHONE
    }

    public enum AppointmentStatus {
        PENDING_APPROVAL, SCHEDULED, CONFIRMED, IN_PROGRESS, COMPLETED, CANCELLED, NO_SHOW
    }
}