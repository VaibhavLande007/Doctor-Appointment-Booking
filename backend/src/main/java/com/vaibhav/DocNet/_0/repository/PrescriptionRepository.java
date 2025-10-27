package com.vaibhav.DocNet._0.repository;

import com.vaibhav.DocNet._0.model.entity.Prescription;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PrescriptionRepository extends MongoRepository<Prescription, String> {
    Optional<Prescription> findByAppointmentId(String appointmentId);

    List<Prescription> findByPatientId(String patientId);

    List<Prescription> findByDoctorId(String doctorId);
}
