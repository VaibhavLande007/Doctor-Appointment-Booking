package com.vaibhav.DocNet._0.repository;


import com.vaibhav.DocNet._0.model.entity.Doctor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DoctorRepository extends MongoRepository<Doctor, String> {
    Optional<Doctor> findByUserId(String userId);

    Page<Doctor> findBySpecializationsIn(List<String> specializations, Pageable pageable);

    @Query("{ 'address.city': ?0 }")
    Page<Doctor> findByCity(String city, Pageable pageable);

    @Query("{ 'verified': true, 'acceptingPatients': true }")
    Page<Doctor> findAvailableDoctors(Pageable pageable);

    List<Doctor> findTop10ByOrderByRatingDesc();
}
