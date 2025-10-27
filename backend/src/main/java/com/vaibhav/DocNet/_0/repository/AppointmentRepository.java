package com.vaibhav.DocNet._0.repository;

import com.vaibhav.DocNet._0.model.entity.Appointment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {
    Page<Appointment> findByPatientId(String patientId, Pageable pageable);

    Page<Appointment> findByDoctorId(String doctorId, Pageable pageable);

    List<Appointment> findByPatientIdAndStatus(String patientId, Appointment.AppointmentStatus status);

    List<Appointment> findByDoctorIdAndStatus(String doctorId, Appointment.AppointmentStatus status);

    @Query("{ 'doctorId': ?0, 'appointmentDate': ?1, 'status': { $in: ['SCHEDULED', 'CONFIRMED'] } }")
    List<Appointment> findByDoctorIdAndDateAndActiveStatus(String doctorId, LocalDate date);

    List<Appointment> findByAppointmentDateBetweenAndStatus(
            LocalDate startDate,
            LocalDate endDate,
            Appointment.AppointmentStatus status
    );

    long countByDoctorIdAndStatus(String doctorId, Appointment.AppointmentStatus status);
}
