package com.vaibhav.DocNet._0.service;

import com.vaibhav.DocNet._0.exception.BadRequestException;
import com.vaibhav.DocNet._0.exception.ResourceNotFoundException;
import com.vaibhav.DocNet._0.model.dto.request.CreateDoctorRequest;
import com.vaibhav.DocNet._0.model.dto.response.DoctorResponse;
import com.vaibhav.DocNet._0.model.dto.response.PaginatedResponse;
import com.vaibhav.DocNet._0.model.entity.Doctor;
import com.vaibhav.DocNet._0.model.entity.User;
import com.vaibhav.DocNet._0.repository.DoctorRepository;
import com.vaibhav.DocNet._0.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class DoctorService {

    private final DoctorRepository doctorRepository;
    private final UserRepository userRepository;

    @Transactional
    public DoctorResponse createDoctorProfile(String userId, CreateDoctorRequest request) {
        log.info("Creating doctor profile for user: {}", userId);

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        if (!user.getRoles().contains(User.Role.DOCTOR)) {
            throw new BadRequestException("User is not registered as a doctor");
        }

        if (doctorRepository.findByUserId(userId).isPresent()) {
            throw new BadRequestException("Doctor profile already exists");
        }

        Doctor doctor = Doctor.builder()
                .userId(userId)
                .registrationNumber(request.getRegistrationNumber())
                .specializations(request.getSpecializations())
                .qualification(request.getQualification())
                .experienceYears(request.getExperienceYears())
                .bio(request.getBio())
                .clinicName(request.getClinicName())
                .address(mapToAddress(request.getAddress()))
                .consultationFee(request.getConsultationFee())
                .services(hasContent(request.getServices()) ? request.getServices() : new ArrayList<>())
                .languages(hasContent(request.getLanguages()) ? request.getLanguages() : new ArrayList<>())
                .availability(mapToAvailability(request.getAvailability()))
                .educations(mapEducations(request.getEducations()))
                .experiences(mapExperiences(request.getExperiences()))
                .awards(mapAwards(request.getAwards()))
                .clinics(mapClinics(request.getClinics()))
                .insurances(mapInsurances(request.getInsurances()))
                .memberships(mapMemberships(request.getMemberships()))
                .verified(false)
                .acceptingPatients(true)
                .rating(0.0)
                .totalReviews(0)
                .build();

        doctor = doctorRepository.save(doctor);
        log.info("Doctor profile created with ID: {}", doctor.getId());

        return mapToDoctorResponse(doctor, user);
    }

    public DoctorResponse getDoctorById(String doctorId) {
        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor", "id", doctorId));

        User user = userRepository.findById(doctor.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", doctor.getUserId()));

        return mapToDoctorResponse(doctor, user);
    }

    public DoctorResponse getMyProfile(String userId) {
        Doctor doctor = doctorRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor profile not found for user: " + userId));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        return mapToDoctorResponse(doctor, user);
    }

    public PaginatedResponse<DoctorResponse> getAllDoctors(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).descending());
        Page<Doctor> doctorPage = doctorRepository.findAll(pageable);

        List<DoctorResponse> doctors = doctorPage.getContent().stream()
                .map(doctor -> {
                    User user = userRepository.findById(doctor.getUserId()).orElse(null);
                    return mapToDoctorResponse(doctor, user);
                })
                .collect(Collectors.toList());

        return PaginatedResponse.<DoctorResponse>builder()
                .content(doctors)
                .page(doctorPage.getNumber())
                .size(doctorPage.getSize())
                .totalElements(doctorPage.getTotalElements())
                .totalPages(doctorPage.getTotalPages())
                .last(doctorPage.isLast())
                .build();
    }

    public PaginatedResponse<DoctorResponse> searchDoctors(
            String specialization,
            String city,
            int page,
            int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Doctor> doctorPage;

        if (specialization != null && !specialization.isEmpty()) {
            doctorPage = doctorRepository.findBySpecializationsIn(
                    List.of(specialization), pageable);
        } else if (city != null && !city.isEmpty()) {
            doctorPage = doctorRepository.findByCity(city, pageable);
        } else {
            doctorPage = doctorRepository.findAvailableDoctors(pageable);
        }

        List<DoctorResponse> doctors = doctorPage.getContent().stream()
                .map(doctor -> {
                    User user = userRepository.findById(doctor.getUserId()).orElse(null);
                    return mapToDoctorResponse(doctor, user);
                })
                .collect(Collectors.toList());

        return PaginatedResponse.<DoctorResponse>builder()
                .content(doctors)
                .page(doctorPage.getNumber())
                .size(doctorPage.getSize())
                .totalElements(doctorPage.getTotalElements())
                .totalPages(doctorPage.getTotalPages())
                .last(doctorPage.isLast())
                .build();
    }

    @Transactional
    public DoctorResponse updateDoctorProfile(String userId, CreateDoctorRequest request) {
        log.info("Updating doctor profile for user: {}", userId);

        Doctor doctor = doctorRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Doctor profile not found"));

        // Update basic fields
        doctor.setRegistrationNumber(request.getRegistrationNumber());
        doctor.setSpecializations(request.getSpecializations());
        doctor.setQualification(request.getQualification());
        doctor.setExperienceYears(request.getExperienceYears());
        doctor.setBio(request.getBio());
        doctor.setClinicName(request.getClinicName());
        doctor.setAddress(mapToAddress(request.getAddress()));
        doctor.setConsultationFee(request.getConsultationFee());

        // Update lists - only if they have content
        doctor.setServices(hasContent(request.getServices()) ? request.getServices() : new ArrayList<>());
        doctor.setLanguages(hasContent(request.getLanguages()) ? request.getLanguages() : new ArrayList<>());

        // Update availability
        doctor.setAvailability(mapToAvailability(request.getAvailability()));

        // Update new fields
        doctor.setEducations(mapEducations(request.getEducations()));
        doctor.setExperiences(mapExperiences(request.getExperiences()));
        doctor.setAwards(mapAwards(request.getAwards()));
        doctor.setClinics(mapClinics(request.getClinics()));
        doctor.setInsurances(mapInsurances(request.getInsurances()));
        doctor.setMemberships(mapMemberships(request.getMemberships()));

        doctor = doctorRepository.save(doctor);
        log.info("Doctor profile updated for user: {}", userId);

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userId));

        return mapToDoctorResponse(doctor, user);
    }

    // Helper method to check if list has content
    private boolean hasContent(List<?> list) {
        return list != null && !list.isEmpty();
    }

    // Mapping methods for nested entities
    private List<Doctor.Education> mapEducations(List<CreateDoctorRequest.EducationDTO> dtos) {
        if (!hasContent(dtos)) {
            return new ArrayList<>();
        }
        return dtos.stream()
                .map(dto -> Doctor.Education.builder()
                        .id(StringUtils.hasText(dto.getId()) ? dto.getId() : UUID.randomUUID().toString())
                        .institution(dto.getInstitution())
                        .course(dto.getCourse())
                        .startDate(dto.getStartDate())
                        .endDate(dto.getEndDate())
                        .years(dto.getYears())
                        .description(dto.getDescription())
                        .logoUrl(dto.getLogoUrl())
                        .build())
                .collect(Collectors.toList());
    }

    private List<Doctor.Experience> mapExperiences(List<CreateDoctorRequest.ExperienceDTO> dtos) {
        if (!hasContent(dtos)) {
            return new ArrayList<>();
        }
        return dtos.stream()
                .map(dto -> Doctor.Experience.builder()
                        .id(StringUtils.hasText(dto.getId()) ? dto.getId() : UUID.randomUUID().toString())
                        .title(dto.getTitle())
                        .hospital(dto.getHospital())
                        .location(dto.getLocation())
                        .employmentType(dto.getEmploymentType())
                        .startDate(dto.getStartDate())
                        .endDate(dto.getEndDate())
                        .currentlyWorking(dto.isCurrentlyWorking())
                        .jobDescription(dto.getJobDescription())
                        .yearsOfExperience(dto.getYearsOfExperience())
                        .logoUrl(dto.getLogoUrl())
                        .build())
                .collect(Collectors.toList());
    }

    private List<Doctor.Award> mapAwards(List<CreateDoctorRequest.AwardDTO> dtos) {
        if (!hasContent(dtos)) {
            return new ArrayList<>();
        }
        return dtos.stream()
                .map(dto -> Doctor.Award.builder()
                        .id(StringUtils.hasText(dto.getId()) ? dto.getId() : UUID.randomUUID().toString())
                        .name(dto.getName())
                        .year(dto.getYear())
                        .description(dto.getDescription())
                        .build())
                .collect(Collectors.toList());
    }

    private List<Doctor.Clinic> mapClinics(List<CreateDoctorRequest.ClinicDTO> dtos) {
        if (!hasContent(dtos)) {
            return new ArrayList<>();
        }
        return dtos.stream()
                .map(dto -> Doctor.Clinic.builder()
                        .id(StringUtils.hasText(dto.getId()) ? dto.getId() : UUID.randomUUID().toString())
                        .name(dto.getName())
                        .location(dto.getLocation())
                        .address(dto.getAddress())
                        .logoUrl(dto.getLogoUrl())
                        .galleryImages(hasContent(dto.getGalleryImages()) ? dto.getGalleryImages() : new ArrayList<>())
                        .build())
                .collect(Collectors.toList());
    }

    private List<Doctor.Insurance> mapInsurances(List<CreateDoctorRequest.InsuranceDTO> dtos) {
        if (!hasContent(dtos)) {
            return new ArrayList<>();
        }
        return dtos.stream()
                .map(dto -> Doctor.Insurance.builder()
                        .id(StringUtils.hasText(dto.getId()) ? dto.getId() : UUID.randomUUID().toString())
                        .name(dto.getName())
                        .logoUrl(dto.getLogoUrl())
                        .build())
                .collect(Collectors.toList());
    }

    private List<Doctor.Membership> mapMemberships(List<CreateDoctorRequest.MembershipDTO> dtos) {
        if (!hasContent(dtos)) {
            return new ArrayList<>();
        }
        return dtos.stream()
                .map(dto -> Doctor.Membership.builder()
                        .id(StringUtils.hasText(dto.getId()) ? dto.getId() : UUID.randomUUID().toString())
                        .title(dto.getTitle())
                        .about(dto.getAbout())
                        .build())
                .collect(Collectors.toList());
    }

    private Doctor.Availability mapToAvailability(CreateDoctorRequest.AvailabilityDTO dto) {
        if (dto == null) {
            return null;
        }

        List<Doctor.Availability.DaySchedule> weekSchedule = null;
        if (hasContent(dto.getWeekSchedule())) {
            weekSchedule = dto.getWeekSchedule().stream()
                    .map(dayDto -> Doctor.Availability.DaySchedule.builder()
                            .dayOfWeek(dayDto.getDayOfWeek())
                            .available(dayDto.isAvailable())
                            .startTime(dayDto.getStartTime())
                            .endTime(dayDto.getEndTime())
                            .breakStartTime(dayDto.getBreakStartTime())
                            .breakEndTime(dayDto.getBreakEndTime())
                            .build())
                    .collect(Collectors.toList());
        }

        return Doctor.Availability.builder()
                .weekSchedule(weekSchedule)
                .slotDuration(dto.getSlotDuration())
                .build();
    }

    private Doctor.Address mapToAddress(CreateDoctorRequest.AddressDTO dto) {
        if (dto == null) {
            return null;
        }
        return Doctor.Address.builder()
                .street(dto.getStreet())
                .city(dto.getCity())
                .state(dto.getState())
                .country(dto.getCountry())
                .zipCode(dto.getZipCode())
                .latitude(dto.getLatitude())
                .longitude(dto.getLongitude())
                .build();
    }

    private DoctorResponse mapToDoctorResponse(Doctor doctor, User user) {
        DoctorResponse.AddressDTO addressDTO = null;
        if (doctor.getAddress() != null) {
            addressDTO = DoctorResponse.AddressDTO.builder()
                    .street(doctor.getAddress().getStreet())
                    .city(doctor.getAddress().getCity())
                    .state(doctor.getAddress().getState())
                    .country(doctor.getAddress().getCountry())
                    .zipCode(doctor.getAddress().getZipCode())
                    .latitude(doctor.getAddress().getLatitude())
                    .longitude(doctor.getAddress().getLongitude())
                    .build();
        }

        DoctorResponse.AvailabilityDTO availabilityDTO = null;
        if (doctor.getAvailability() != null) {
            List<DoctorResponse.AvailabilityDTO.DayScheduleDTO> weekSchedule = null;
            if (hasContent(doctor.getAvailability().getWeekSchedule())) {
                weekSchedule = doctor.getAvailability().getWeekSchedule().stream()
                        .map(day -> DoctorResponse.AvailabilityDTO.DayScheduleDTO.builder()
                                .dayOfWeek(day.getDayOfWeek())
                                .available(day.isAvailable())
                                .startTime(day.getStartTime())
                                .endTime(day.getEndTime())
                                .breakStartTime(day.getBreakStartTime())
                                .breakEndTime(day.getBreakEndTime())
                                .build())
                        .collect(Collectors.toList());
            }

            availabilityDTO = DoctorResponse.AvailabilityDTO.builder()
                    .weekSchedule(weekSchedule)
                    .slotDuration(doctor.getAvailability().getSlotDuration())
                    .build();
        }

        return DoctorResponse.builder()
                .id(doctor.getId())
                .userId(doctor.getUserId())
                .firstName(user != null ? user.getFirstName() : null)
                .lastName(user != null ? user.getLastName() : null)
                .email(user != null ? user.getEmail() : null)
                .phoneNumber(user != null ? user.getPhoneNumber() : null)
                .profileImage(user != null ? user.getProfileImage() : null)
                .registrationNumber(doctor.getRegistrationNumber())
                .specializations(doctor.getSpecializations())
                .qualification(doctor.getQualification())
                .experienceYears(doctor.getExperienceYears())
                .bio(doctor.getBio())
                .clinicName(doctor.getClinicName())
                .address(addressDTO)
                .consultationFee(doctor.getConsultationFee())
                .services(doctor.getServices())
                .languages(doctor.getLanguages())
                .availability(availabilityDTO)
                .rating(doctor.getRating())
                .totalReviews(doctor.getTotalReviews())
                .verified(doctor.isVerified())
                .acceptingPatients(doctor.isAcceptingPatients())
                .createdAt(doctor.getCreatedAt())
                .educations(doctor.getEducations())
                .experiences(doctor.getExperiences())
                .awards(doctor.getAwards())
                .clinics(doctor.getClinics())
                .insurances(doctor.getInsurances())
                .memberships(doctor.getMemberships())
                .build();
    }
}