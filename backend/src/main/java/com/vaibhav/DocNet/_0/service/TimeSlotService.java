package com.vaibhav.DocNet._0.service;

import com.vaibhav.DocNet._0.exception.ResourceNotFoundException;
import com.vaibhav.DocNet._0.model.entity.Doctor;
import com.vaibhav.DocNet._0.model.entity.TimeSlot;
import com.vaibhav.DocNet._0.repository.DoctorRepository;
import com.vaibhav.DocNet._0.repository.TimeSlotRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TimeSlotService {

    private final TimeSlotRepository timeSlotRepository;
    private final DoctorRepository doctorRepository;

    @Transactional
    public void generateTimeSlots(String doctorId, LocalDate date) {
        log.info("Generating time slots for doctor: {} on date: {}", doctorId, date);

        Doctor doctor = doctorRepository.findById(doctorId)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        if (doctor.getAvailability() == null || doctor.getAvailability().getWeekSchedule() == null) {
            log.warn("Doctor {} has no availability schedule", doctorId);
            return;
        }

        String dayOfWeek = date.getDayOfWeek().toString();

        Doctor.Availability.DaySchedule schedule = doctor.getAvailability().getWeekSchedule()
                .stream()
                .filter(s -> s.getDayOfWeek().equalsIgnoreCase(dayOfWeek))
                .findFirst()
                .orElse(null);

        if (schedule == null || !schedule.isAvailable()) {
            log.info("Doctor not available on {}", dayOfWeek);
            return;
        }

        int slotDuration = doctor.getAvailability().getSlotDuration() != null ?
                doctor.getAvailability().getSlotDuration() : 30;

        List<TimeSlot> slots = generateSlots(
                doctorId,
                date,
                schedule.getStartTime(),
                schedule.getEndTime(),
                schedule.getBreakStartTime(),
                schedule.getBreakEndTime(),
                slotDuration
        );

        timeSlotRepository.saveAll(slots);
        log.info("Generated {} time slots for doctor: {}", slots.size(), doctorId);
    }

    public List<TimeSlot> getAvailableSlots(String doctorId, LocalDate date) {
        return timeSlotRepository.findByDoctorIdAndDateAndAvailable(doctorId, date, true);
    }

    private List<TimeSlot> generateSlots(String doctorId, LocalDate date,
                                         LocalTime startTime, LocalTime endTime,
                                         LocalTime breakStart, LocalTime breakEnd,
                                         int duration) {
        List<TimeSlot> slots = new ArrayList<>();
        LocalTime current = startTime;

        while (current.plusMinutes(duration).isBefore(endTime) ||
                current.plusMinutes(duration).equals(endTime)) {

            // Skip break time
            if (breakStart != null && breakEnd != null) {
                if (current.isBefore(breakEnd) && current.plusMinutes(duration).isAfter(breakStart)) {
                    current = breakEnd;
                    continue;
                }
            }

            TimeSlot slot = TimeSlot.builder()
                    .doctorId(doctorId)
                    .date(date)
                    .startTime(current)
                    .endTime(current.plusMinutes(duration))
                    .available(true)
                    .build();

            slots.add(slot);
            current = current.plusMinutes(duration);
        }

        return slots;
    }

    @Transactional
    public void generateSlotsForNextDays(String doctorId, int days) {
        LocalDate today = LocalDate.now();
        for (int i = 0; i < days; i++) {
            LocalDate date = today.plusDays(i);
            generateTimeSlots(doctorId, date);
        }
    }

    @Transactional
    public void deleteTimeSlot(String slotId, String doctorId) {
        TimeSlot slot = timeSlotRepository.findById(slotId)
                .orElseThrow(() -> new ResourceNotFoundException("TimeSlot", "id", slotId));

        // Verify the slot belongs to this doctor
        if (!slot.getDoctorId().equals(doctorId)) {
            throw new RuntimeException("Unauthorized to delete this time slot");
        }

        // Prevent deletion of booked slots
        if (slot.getAppointmentId() != null) {
            throw new RuntimeException("Cannot delete booked time slot");
        }

        timeSlotRepository.deleteById(slotId);
        log.info("Deleted time slot: {} for doctor: {}", slotId, doctorId);
    }

    @Transactional
    public void deleteTimeSlots(List<String> slotIds, String doctorId) {
        for (String slotId : slotIds) {
            deleteTimeSlot(slotId, doctorId);
        }
    }

    @Transactional
    public void regenerateSlots(String doctorId, LocalDate startDate, int days) {
        // Delete existing future slots
        timeSlotRepository.deleteByDoctorIdAndDateAfter(doctorId, startDate.minusDays(1));

        // Generate new slots
        for (int i = 0; i < days; i++) {
            LocalDate date = startDate.plusDays(i);
            generateTimeSlots(doctorId, date);
        }
    }
}