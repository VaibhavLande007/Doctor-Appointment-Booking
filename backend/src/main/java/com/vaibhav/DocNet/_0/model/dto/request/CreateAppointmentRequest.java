package com.vaibhav.DocNet._0.model.dto.request;


import com.vaibhav.DocNet._0.model.entity.Appointment;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateAppointmentRequest {
    @NotBlank(message = "Doctor ID is required")
    private String doctorId;

    @NotNull(message = "Appointment date is required")
    @Future(message = "Appointment date must be in future")
    private LocalDate appointmentDate;

    @NotNull(message = "Start time is required")
    private LocalTime startTime;

    @NotNull(message = "Appointment type is required")
    private Appointment.AppointmentType type;

    @NotBlank(message = "Reason for visit is required")
    private String reasonForVisit;

    private String symptoms;
}