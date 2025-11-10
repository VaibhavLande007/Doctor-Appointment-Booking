package com.vaibhav.DocNet._0.service;


import com.vaibhav.DocNet._0.exception.ResourceNotFoundException;
import com.vaibhav.DocNet._0.model.dto.response.PaginatedResponse;
import com.vaibhav.DocNet._0.model.dto.response.PatientResponse;
import com.vaibhav.DocNet._0.model.entity.Appointment;
import com.vaibhav.DocNet._0.model.entity.Patient;
import com.vaibhav.DocNet._0.model.entity.User;
import com.vaibhav.DocNet._0.repository.AppointmentRepository;
import com.vaibhav.DocNet._0.repository.PatientRepository;
import com.vaibhav.DocNet._0.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.Period;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class PatientService {

    private final PatientRepository patientRepository;
    private final UserRepository userRepository;
    private final AppointmentRepository appointmentRepository;
    /**
     * Get all patients for a doctor with active/inactive status
     */
    public PaginatedResponse<PatientResponse> getDoctorPatients(
            String doctorId,
            Boolean isActive,
            String searchTerm,
            int page,
            int size) {

        log.info("Getting patients for doctor: {}, active: {}", doctorId, isActive);

        // Get all unique patient IDs from appointments
        List<Appointment> appointments = appointmentRepository.findDistinctPatientIdsByDoctorId(doctorId);

        Set<String> uniquePatientIds = appointments.stream()
                .map(Appointment::getPatientId)
                .collect(Collectors.toSet());

        if (uniquePatientIds.isEmpty()) {
            return PaginatedResponse.<PatientResponse>builder()
                    .content(new ArrayList<>())
                    .page(page)
                    .size(size)
                    .totalElements(0L)
                    .totalPages(0)
                    .last(true)
                    .build();
        }

        // Get patients with pagination
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        Page<Patient> patientPage = patientRepository.findByUserIdIn(
                new ArrayList<>(uniquePatientIds), pageable);

        // Build patient responses with statistics
        List<PatientResponse> patientResponses = patientPage.getContent().stream()
                .map(patient -> buildPatientResponse(patient, doctorId))
                .filter(response -> {
                    // Filter by active status if specified
                    if (isActive != null) {
                        return response.getIsActive().equals(isActive);
                    }
                    return true;
                })
                .filter(response -> {
                    // Filter by search term if specified
                    if (searchTerm != null && !searchTerm.isEmpty()) {
                        String search = searchTerm.toLowerCase();
                        return response.getFirstName().toLowerCase().contains(search) ||
                                response.getLastName().toLowerCase().contains(search) ||
                                (response.getEmail() != null && response.getEmail().toLowerCase().contains(search));
                    }
                    return true;
                })
                .collect(Collectors.toList());

        return PaginatedResponse.<PatientResponse>builder()
                .content(patientResponses)
                .page(patientPage.getNumber())
                .size(patientPage.getSize())
                .totalElements(patientPage.getTotalElements())
                .totalPages(patientPage.getTotalPages())
                .last(patientPage.isLast())
                .build();
    }

    /**
     * Build patient response with appointment statistics
     */
    private PatientResponse buildPatientResponse(Patient patient, String doctorId) {
        User user = userRepository.findById(patient.getUserId())
                .orElse(null);

        // Get appointment statistics
        Long totalAppointments = appointmentRepository.countByDoctorIdAndPatientId(
                doctorId, patient.getUserId());

        Long completedAppointments = appointmentRepository.countByDoctorIdAndPatientIdAndStatus(
                doctorId, patient.getUserId(), Appointment.AppointmentStatus.COMPLETED);

        Long cancelledAppointments = appointmentRepository.countByDoctorIdAndPatientIdAndStatus(
                doctorId, patient.getUserId(), Appointment.AppointmentStatus.CANCELLED);

        // Get last appointment
        Optional<Appointment> lastAppointment = appointmentRepository
                .findFirstByDoctorIdAndPatientIdOrderByAppointmentDateDescStartTimeDesc(
                        doctorId, patient.getUserId());

        // Check if patient is active (has upcoming or recent appointments)
        boolean isActive = hasActiveStatus(patient.getUserId(), doctorId);

        // Calculate age
        Integer age = null;
        if (patient.getDateOfBirth() != null) {
            age = Period.between(patient.getDateOfBirth(), LocalDate.now()).getYears();
        }

        return PatientResponse.builder()
                .id(patient.getId())
                .userId(patient.getUserId())
                .firstName(user != null ? user.getFirstName() : null)
                .lastName(user != null ? user.getLastName() : null)
                .email(user != null ? user.getEmail() : null)
                .phoneNumber(user != null ? user.getPhoneNumber() : null)
                .profileImage(user != null ? user.getProfileImage() : null)
                .dateOfBirth(patient.getDateOfBirth())
                .age(age)
                .gender(patient.getGender())
                .bloodGroup(patient.getBloodGroup())
                .address(patient.getAddress())
                .city(patient.getCity())
                .state(patient.getState())
                .country(patient.getCountry())
                .lastBookingDate(lastAppointment.map(Appointment::getCreatedAt).orElse(null))
                .lastAppointmentDate(lastAppointment.map(app ->
                        app.getAppointmentDate().atTime(app.getStartTime())).orElse(null))
                .lastAppointmentStatus(lastAppointment.map(app ->
                        app.getStatus().toString()).orElse(null))
                .totalAppointments(totalAppointments.intValue())
                .completedAppointments(completedAppointments.intValue())
                .cancelledAppointments(cancelledAppointments.intValue())
                .isActive(isActive)
                .build();
    }

    /**
     * Check if patient has active status (upcoming or recent appointments)
     */
    private boolean hasActiveStatus(String patientId, String doctorId) {
        LocalDate threeMonthsAgo = LocalDate.now().minusMonths(3);

        // Check for upcoming appointments
        List<Appointment> upcomingAppointments = appointmentRepository
                .findByPatientIdAndStatus(patientId, Appointment.AppointmentStatus.SCHEDULED);

        if (!upcomingAppointments.isEmpty()) {
            return true;
        }

        // Check for recent appointments (within last 3 months)
        Optional<Appointment> lastAppointment = appointmentRepository
                .findFirstByDoctorIdAndPatientIdOrderByAppointmentDateDescStartTimeDesc(
                        doctorId, patientId);

        return lastAppointment
                .map(app -> app.getAppointmentDate().isAfter(threeMonthsAgo))
                .orElse(false);
    }

    /**
     * Get patient statistics for a doctor
     */
    public Map<String, Integer> getPatientStatistics(String doctorId) {
        List<Appointment> appointments = appointmentRepository.findDistinctPatientIdsByDoctorId(doctorId);

        Set<String> uniquePatientIds = appointments.stream()
                .map(Appointment::getPatientId)
                .collect(Collectors.toSet());

        int activeCount = 0;
        int inactiveCount = 0;

        for (String patientId : uniquePatientIds) {
            if (hasActiveStatus(patientId, doctorId)) {
                activeCount++;
            } else {
                inactiveCount++;
            }
        }

        Map<String, Integer> stats = new HashMap<>();
        stats.put("total", uniquePatientIds.size());
        stats.put("active", activeCount);
        stats.put("inactive", inactiveCount);

        return stats;
    }

    // Keep existing methods...
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