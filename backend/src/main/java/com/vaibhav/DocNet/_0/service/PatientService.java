package com.vaibhav.DocNet._0.service;


import com.vaibhav.DocNet._0.exception.ResourceNotFoundException;
import com.vaibhav.DocNet._0.model.entity.Patient;
import com.vaibhav.DocNet._0.model.entity.User;
import com.vaibhav.DocNet._0.repository.PatientRepository;
import com.vaibhav.DocNet._0.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;

@Slf4j
@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientRepository patientRepository;
    private final UserRepository userRepository;

    @Transactional
    public Patient createPatientProfile(String userId, Patient patient) {
        log.info("Creating patient profile for user: {}", userId);

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        patient.setUserId(userId);
        patient = patientRepository.save(patient);

        log.info("Patient profile created with ID: {}", patient.getId());
        return patient;
    }

    public Patient getPatientProfile(String userId) {
        return patientRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient profile not found for user: " + userId));
    }

    @Transactional
    public Patient updatePatientProfile(String userId, Patient updatedPatient) {
        Patient patient = patientRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Patient profile not found"));

        patient.setDateOfBirth(updatedPatient.getDateOfBirth());
        patient.setGender(updatedPatient.getGender());
        patient.setBloodGroup(updatedPatient.getBloodGroup());
        patient.setAddress(updatedPatient.getAddress());
        patient.setCity(updatedPatient.getCity());
        patient.setState(updatedPatient.getState());
        patient.setCountry(updatedPatient.getCountry());
        patient.setZipCode(updatedPatient.getZipCode());
        patient.setEmergencyContactName(updatedPatient.getEmergencyContactName());
        patient.setEmergencyContactNumber(updatedPatient.getEmergencyContactNumber());
        patient.setAllergies(updatedPatient.getAllergies());
        patient.setChronicConditions(updatedPatient.getChronicConditions());
        patient.setCurrentMedications(updatedPatient.getCurrentMedications());
        patient.setInsuranceProvider(updatedPatient.getInsuranceProvider());
        patient.setInsurancePolicyNumber(updatedPatient.getInsurancePolicyNumber());

        return patientRepository.save(patient);
    }
}