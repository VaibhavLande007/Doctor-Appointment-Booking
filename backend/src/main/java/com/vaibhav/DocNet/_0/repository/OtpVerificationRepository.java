package com.vaibhav.DocNet._0.repository;

import com.vaibhav.DocNet._0.model.entity.OtpVerification;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OtpVerificationRepository extends MongoRepository<OtpVerification, String> {

    Optional<OtpVerification> findByEmailAndTypeAndVerifiedFalse(
            String email,
            OtpVerification.OtpType type
    );

    Optional<OtpVerification> findByEmailAndOtpAndTypeAndVerifiedFalse(
            String email,
            String otp,
            OtpVerification.OtpType type
    );
    Optional<OtpVerification> findTopByEmailAndTypeOrderByCreatedAtDesc(
            String email,
            OtpVerification.OtpType type
    );
    void deleteByEmail(String email);

    void deleteByEmailAndType(String email, OtpVerification.OtpType type);
}