package com.vaibhav.DocNet._0.repository;

import com.vaibhav.DocNet._0.model.entity.TimeSlot;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface TimeSlotRepository extends MongoRepository<TimeSlot, String> {
    List<TimeSlot> findByDoctorIdAndDate(String doctorId, LocalDate date);

    List<TimeSlot> findByDoctorIdAndDateAndAvailable(String doctorId, LocalDate date, boolean available);

    @Query("{ 'doctorId': ?0, 'date': ?1, 'startTime': ?2 }")
    Optional<TimeSlot> findByDoctorIdAndDateAndStartTime(String doctorId, LocalDate date, LocalTime startTime);

    void deleteByDoctorIdAndDateBefore(String doctorId, LocalDate date);
}
