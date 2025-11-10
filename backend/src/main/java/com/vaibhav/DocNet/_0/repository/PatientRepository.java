package com.vaibhav.DocNet._0.repository;

import com.vaibhav.DocNet._0.model.entity.Patient;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PatientRepository extends MongoRepository<Patient, String> {
    Optional<Patient> findByUserId(String userId);
    @Query("{'userId': {$in: ?0}}")
    Page<Patient> findByUserIdIn(List<String> userIds, Pageable pageable);
}