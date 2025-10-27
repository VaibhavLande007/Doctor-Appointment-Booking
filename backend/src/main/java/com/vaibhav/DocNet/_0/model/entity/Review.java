package com.vaibhav.DocNet._0.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "reviews")
public class Review {
    @Id
    private String id;

    @Indexed
    private String doctorId;

    @Indexed
    private String patientId;

    private String appointmentId;

    private Integer rating; // 1-5
    private String comment;

    private boolean recommended;

    @CreatedDate
    private LocalDateTime createdAt;
}