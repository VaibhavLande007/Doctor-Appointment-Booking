package com.vaibhav.DocNet._0.service;

import com.vaibhav.DocNet._0.exception.BadRequestException;
import com.vaibhav.DocNet._0.model.dto.request.LoginRequest;
import com.vaibhav.DocNet._0.model.dto.request.RegisterRequest;
import com.vaibhav.DocNet._0.model.dto.response.AuthResponse;
import com.vaibhav.DocNet._0.model.entity.Doctor;
import com.vaibhav.DocNet._0.model.entity.Patient;
import com.vaibhav.DocNet._0.model.entity.User;
import com.vaibhav.DocNet._0.repository.DoctorRepository;
import com.vaibhav.DocNet._0.repository.PatientRepository;
import com.vaibhav.DocNet._0.repository.UserRepository;
import com.vaibhav.DocNet._0.security.CustomUserDetails;
import com.vaibhav.DocNet._0.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final DoctorRepository doctorRepository;
    private final PatientRepository patientRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        log.info("Registering new user with email: {}", request.getEmail());

        // 1️⃣ Check if email is already in use
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Email already in use");
        }

        // 2️⃣ Create and save User
        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phoneNumber(request.getPhoneNumber())
                .roles(Collections.singleton(request.getRole()))
                .enabled(true)
                .emailVerified(false)
                .build();

        user = userRepository.save(user);
        log.info("User registered successfully with ID: {}", user.getId());

        // 3️⃣ Create additional profile based on role
        switch (request.getRole()) {
            case DOCTOR -> {
                Doctor doctor = Doctor.builder()
                        .userId(user.getId())
                        .verified(false)
                        .acceptingPatients(true)
                        .build();
                doctorRepository.save(doctor);
                log.info("Doctor profile created for " +
                        " ID: {}", user.getId());
            }
            case PATIENT -> {
                Patient patient = Patient.builder()
                        .userId(user.getId())
                        .build();
                patientRepository.save(patient);
                log.info("Patient profile created for user ID: {}", user.getId());
            }
            default -> log.info("No additional profile created for role: {}", request.getRole());
        }

        // 4️⃣ Authenticate newly registered user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // 5️⃣ Generate tokens
        String token = tokenProvider.generateToken(authentication);
        String refreshToken = tokenProvider.generateRefreshToken(user.getId());

        return AuthResponse.builder()
                .token(token)
                .refreshToken(refreshToken)
                .user(mapToUserDTO(user))
                .build();
    }

    public AuthResponse login(LoginRequest request) {
        log.info("User login attempt: {}", request.getEmail());

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId())
                .orElseThrow(() -> new BadRequestException("User not found"));

        String token = tokenProvider.generateToken(authentication);
        String refreshToken = tokenProvider.generateRefreshToken(user.getId());

        log.info("User logged in successfully: {}", user.getEmail());

        return AuthResponse.builder()
                .token(token)
                .refreshToken(refreshToken)
                .user(mapToUserDTO(user))
                .build();
    }

    private AuthResponse.UserDTO mapToUserDTO(User user) {
        return AuthResponse.UserDTO.builder()
                .id(user.getId())
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .phoneNumber(user.getPhoneNumber())
                .role(user.getRoles().iterator().next())
                .profileImage(user.getProfileImage())
                .build();
    }
    public void logout(Authentication authentication) {
        if (authentication != null) {
            SecurityContextHolder.clearContext();
            log.info("User logged out successfully");
        }
    }
}
