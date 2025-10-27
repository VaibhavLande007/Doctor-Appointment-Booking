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
@Document(collection = "chat_messages")
public class ChatMessage {
    @Id
    private String id;

    @Indexed
    private String senderId;

    @Indexed
    private String receiverId;

    @Indexed
    private String appointmentId;

    private String message;

    @Builder.Default
    private MessageType type = MessageType.TEXT;

    @Builder.Default
    private boolean read = false;

    private LocalDateTime readAt;

    @CreatedDate
    private LocalDateTime createdAt;

    public enum MessageType {
        TEXT, IMAGE, FILE
    }
}