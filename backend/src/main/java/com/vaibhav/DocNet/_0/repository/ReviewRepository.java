package com.vaibhav.DocNet._0.repository;

import com.vaibhav.DocNet._0.model.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {
    Page<Review> findByDoctorId(String doctorId, Pageable pageable);

    Optional<Review> findByAppointmentId(String appointmentId);

    @Query(value = "{ 'doctorId': ?0 }", count = true)
    long countByDoctorId(String doctorId);

    @Query(value = "{ 'doctorId': ?0 }", fields = "{ 'rating': 1 }")
    Double getAverageRatingByDoctorId(String doctorId);
}