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
@Document(collection = "notifications")
public class Notification {
    @Id
    private String id;

    @Indexed
    private String userId;

    private String title;
    private String message;

    @Builder.Default
    private NotificationType type = NotificationType.INFO;

    @Builder.Default
    private boolean read = false;

    private String actionUrl;

    @CreatedDate
    private LocalDateTime createdAt;

    public enum NotificationType {
        APPOINTMENT, PAYMENT, PRESCRIPTION, REMINDER, INFO
    }
}
