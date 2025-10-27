package com.vaibhav.DocNet._0.repository;

import com.vaibhav.DocNet._0.model.entity.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PaymentRepository extends MongoRepository<Payment, String> {
    Optional<Payment> findByAppointmentId(String appointmentId);

    List<Payment> findByPatientId(String patientId);

    List<Payment> findByDoctorId(String doctorId);

    List<Payment> findByStatus(Payment.PaymentStatus status);
}