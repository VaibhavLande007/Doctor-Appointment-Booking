package com.vaibhav.DocNet._0.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.CompoundIndex;
import org.springframework.data.mongodb.core.index.CompoundIndexes;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "time_slots")
@CompoundIndexes({
        @CompoundIndex(name = "doctor_date_idx", def = "{'doctorId': 1, 'date': 1}"),
        @CompoundIndex(name = "doctor_date_time_idx", def = "{'doctorId': 1, 'date': 1, 'startTime': 1}")
})
public class TimeSlot {
    @Id
    private String id;

    private String doctorId;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;

    @Builder.Default
    private boolean available = true;

    private String appointmentId;
}
