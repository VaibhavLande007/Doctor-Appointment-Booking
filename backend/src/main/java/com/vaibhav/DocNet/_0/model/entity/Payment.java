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
@Document(collection = "payments")
public class Payment {
    @Id
    private String id;

    @Indexed
    private String appointmentId;

    @Indexed
    private String patientId;

    private String doctorId;

    private Double amount;
    private String currency;

    @Builder.Default
    private PaymentStatus status = PaymentStatus.PENDING;

    @Builder.Default
    private PaymentMethod method = PaymentMethod.CARD;

    private String transactionId;
    private String paymentGateway;

    private String receiptUrl;

    @CreatedDate
    private LocalDateTime createdAt;

    private LocalDateTime paidAt;

    public enum PaymentStatus {
        PENDING, COMPLETED, FAILED, REFUNDED
    }

    public enum PaymentMethod {
        CARD, UPI, WALLET, CASH
    }
}