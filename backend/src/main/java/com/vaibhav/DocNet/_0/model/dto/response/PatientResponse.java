package com.vaibhav.DocNet._0.model.dto.response;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatientResponse {
    private String id;
    private String userId;
    private String appointmentId;

    // User details
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String profileImage;

    // Patient details
    private LocalDate dateOfBirth;
    private Integer age;
    private String gender;
    private String bloodGroup;
    private String address;
    private String city;
    private String state;
    private String country;

    // Last appointment info
    private LocalDateTime lastBookingDate;
    private LocalDateTime lastAppointmentDate;
    private String lastAppointmentStatus;

    // Statistics
    private Integer totalAppointments;
    private Integer completedAppointments;
    private Integer cancelledAppointments;

    // Status
    private Boolean isActive;
}