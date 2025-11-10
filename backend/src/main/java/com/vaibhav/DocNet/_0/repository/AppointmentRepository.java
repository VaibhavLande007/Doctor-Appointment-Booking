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
import java.util.Optional;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {

    List<Appointment> findByDoctorIdAndStatus(String doctorId, Appointment.AppointmentStatus status);

    @Query("{ 'doctorId': ?0, 'appointmentDate': ?1, 'status': { $in: ['SCHEDULED', 'CONFIRMED'] } }")
    List<Appointment> findByDoctorIdAndDateAndActiveStatus(String doctorId, LocalDate date);
    Page<Appointment> findByPatientId(String patientId, Pageable pageable);
    Page<Appointment> findByDoctorId(String doctorId, Pageable pageable);

    // New method for pending appointments
    Page<Appointment> findByDoctorIdAndStatus(
            String doctorId,
            Appointment.AppointmentStatus status,
            Pageable pageable
    );


    List<Appointment> findByAppointmentDateBetweenAndStatus(
            LocalDate startDate,
            LocalDate endDate,
            Appointment.AppointmentStatus status
    );

    long countByDoctorIdAndStatus(String doctorId, Appointment.AppointmentStatus status);

    // NEW: Get distinct patient IDs for a doctor
    @Query(value = "{'doctorId': ?0}", fields = "{'patientId': 1}")
    List<Appointment> findDistinctPatientIdsByDoctorId(String doctorId);

    // NEW: Count appointments by patient and doctor
    Long countByDoctorIdAndPatientId(String doctorId, String patientId);

    // NEW: Count completed appointments
    Long countByDoctorIdAndPatientIdAndStatus(
            String doctorId, String patientId, Appointment.AppointmentStatus status);

    // NEW: Find last appointment for patient-doctor pair
    Optional<Appointment> findFirstByDoctorIdAndPatientIdOrderByAppointmentDateDescStartTimeDesc(
            String doctorId, String patientId);

    // NEW: Find appointments by patient and status
    List<Appointment> findByPatientIdAndStatus(String patientId, Appointment.AppointmentStatus status);
}
