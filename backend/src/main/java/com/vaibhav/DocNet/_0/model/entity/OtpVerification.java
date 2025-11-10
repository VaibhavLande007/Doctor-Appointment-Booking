package com.vaibhav.DocNet._0.model.entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "otp_verifications")
public class OtpVerification {

    @Id
    private String id;

    @Indexed
    private String email;

    private String otp;

    private OtpType type;

    private boolean verified;

    @Builder.Default
    private int attemptCount = 0;

    private LocalDateTime createdAt;

    @Indexed(expireAfterSeconds = 600) // 10 minutes TTL
    private LocalDateTime expiresAt;

    public enum OtpType {
        PASSWORD_RESET,
        EMAIL_VERIFICATION,
        TWO_FACTOR_AUTH
    }

    public boolean isExpired() {
        return LocalDateTime.now().isAfter(expiresAt);
    }

    public boolean canRetry() {
        return attemptCount < 5;
    }

    public void incrementAttempt() {
        this.attemptCount++;
    }
}