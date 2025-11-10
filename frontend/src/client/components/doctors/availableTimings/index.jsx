import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../patients/dashboard/header";
import Footer from "../../footer";
import DoctorSidebar from "../sidebar";
import apiService from "../../../../config/apiService";
import moment from "moment";

const AvailableTiming = (props) => {
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [doctorProfile, setDoctorProfile] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [slotDuration, setSlotDuration] = useState(30);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [saving, setSaving] = useState(false);

  // Weekly schedule
  const [weekSchedule, setWeekSchedule] = useState([
    { dayOfWeek: "MONDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "TUESDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "WEDNESDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "THURSDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "FRIDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "SATURDAY", available: false, startTime: null, endTime: null, breakStartTime: null, breakEndTime: null },
    { dayOfWeek: "SUNDAY", available: false, startTime: null, endTime: null, breakStartTime: null, breakEndTime: null }
  ]);

  useEffect(() => {
    loadDoctorProfile();
  }, []);

  useEffect(() => {
    if (selectedDate && doctorProfile) {
      loadTimeSlotsForDate(selectedDate);
    }
  }, [selectedDate, doctorProfile]);

  const loadDoctorProfile = async () => {
    try {
      setInitialLoading(true);
      const response = await apiService.get('/doctors/me');

      if (response.data.success) {
        const profile = response.data.data;
        setDoctorProfile(profile);

        // Load availability settings
        if (profile.availability) {
          if (profile.availability.weekSchedule) {
            setWeekSchedule(profile.availability.weekSchedule);
          }
          if (profile.availability.slotDuration) {
            setSlotDuration(profile.availability.slotDuration);
          }
        }
      }
    } catch (error) {
      console.error('Error loading profile:', error);
      alert('Failed to load doctor profile. Please make sure you have completed your profile setup.');
    } finally {
      setInitialLoading(false);
    }
  };

  const loadTimeSlotsForDate = async (date) => {
    if (!doctorProfile) return;

    try {
      setLoading(true);
      const slotsResponse = await apiService.get('/appointments/slots', {
        params: {
          doctorId: doctorProfile.id,
          date: date
        }
      });

      if (slotsResponse.data.success) {
        setTimeSlots(slotsResponse.data.data || []);
      }
    } catch (error) {
      console.error('Error loading time slots:', error);
      if (error.response?.status !== 404) {
        console.error('Error details:', error.response?.data);
      }
      setTimeSlots([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDayAvailability = (index, field, value) => {
    const updated = [...weekSchedule];
    if (field === 'available') {
      updated[index].available = value;
      if (!value) {
        updated[index].startTime = null;
        updated[index].endTime = null;
        updated[index].breakStartTime = null;
        updated[index].breakEndTime = null;
      } else {
        // Set default times when enabling
        updated[index].startTime = "09:00";
        updated[index].endTime = "17:00";
        updated[index].breakStartTime = "13:00";
        updated[index].breakEndTime = "14:00";
      }
    } else {
      updated[index][field] = value;
    }
    setWeekSchedule(updated);
  };

  const handleSlotToggle = (slotId) => {
    setSelectedSlots(prev => {
      if (prev.includes(slotId)) {
        return prev.filter(id => id !== slotId);
      } else {
        return [...prev, slotId];
      }
    });
  };

  const handleSaveAvailability = async () => {
    if (!doctorProfile) {
      alert('Doctor profile not loaded');
      return;
    }

    try {
      setSaving(true);

      // Build complete update request with all required fields
      const payload = {
        registrationNumber: doctorProfile.registrationNumber,
        specializations: doctorProfile.specializations,
        qualification: doctorProfile.qualification,
        experienceYears: doctorProfile.experienceYears,
        bio: doctorProfile.bio || "",
        clinicName: doctorProfile.clinicName || "",
        address: doctorProfile.address,
        consultationFee: doctorProfile.consultationFee,
        services: doctorProfile.services || [],
        languages: doctorProfile.languages || [],
        availability: {
          weekSchedule: weekSchedule,
          slotDuration: slotDuration
        },
        educations: doctorProfile.educations || [],
        experiences: doctorProfile.experiences || [],
        awards: doctorProfile.awards || [],
        clinics: doctorProfile.clinics || [],
        insurances: doctorProfile.insurances || [],
        memberships: doctorProfile.memberships || []
      };

      console.log('Updating profile with payload:', payload);

      const response = await apiService.put('/doctors/me', payload);

      if (response.data.success) {
        // Regenerate slots after updating availability
        await apiService.post('/doctors/me/generate-slots');

        alert('Availability updated and slots generated successfully!');
        await loadDoctorProfile();
        await loadTimeSlotsForDate(selectedDate);
        setSelectedSlots([]);
      }
    } catch (error) {
      console.error('Error saving availability:', error);
      console.error('Error response:', error.response?.data);
      alert(error.response?.data?.message || 'Failed to save availability. Please check all required fields.');
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteSelectedSlots = async () => {
    if (selectedSlots.length === 0) {
      alert('Please select slots to delete');
      return;
    }

    if (!window.confirm(`Are you sure you want to delete ${selectedSlots.length} slot(s)?`)) {
      return;
    }

    try {
      setLoading(true);

      // Delete each selected slot individually
      for (const slotId of selectedSlots) {
        await apiService.delete(`/appointments/slots/${slotId}`);
      }

      alert('Selected slots deleted successfully!');
      setSelectedSlots([]);
      await loadTimeSlotsForDate(selectedDate);
    } catch (error) {
      console.error('Error deleting slots:', error);
      alert(error.response?.data?.message || 'Failed to delete slots');
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setSelectedSlots([]);
  };

  const formatTime = (time) => {
    if (!time) return '';
    // Handle both "HH:mm" and "HH:mm:ss" formats
    return moment(time, ['HH:mm:ss', 'HH:mm']).format('hh:mm A');
  };

  if (initialLoading) {
    return (
      <>
        <Header {...props} />
        <div className="content">
          <div className="container">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading profile...</p>
            </div>
          </div>
        </div>
        <Footer {...props} />
      </>
    );
  }

  if (!doctorProfile) {
    return (
      <>
        <Header {...props} />
        <div className="content">
          <div className="container">
            <div className="alert alert-warning text-center">
              <h4>Profile Setup Required</h4>
              <p>Please complete your doctor profile before managing availability.</p>
              <Link to="/doctor/profile-settings" className="btn btn-primary">
                Complete Profile
              </Link>
            </div>
          </div>
        </div>
        <Footer {...props} />
      </>
    );
  }

  return (
    <>
      <Header {...props} />

      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Available Timings</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home-2">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Available Timings
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <DoctorSidebar />
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              {/* Weekly Schedule Settings */}
              <div className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title">Weekly Schedule Settings</h4>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Slot Duration (minutes)</label>
                        <select
                          className="form-control"
                          value={slotDuration}
                          onChange={(e) => setSlotDuration(parseInt(e.target.value))}
                          disabled={saving}
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="45">45 minutes</option>
                          <option value="60">60 minutes</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Day</th>
                          <th>Available</th>
                          <th>Start Time</th>
                          <th>End Time</th>
                          <th>Break Start</th>
                          <th>Break End</th>
                        </tr>
                      </thead>
                      <tbody>
                        {weekSchedule.map((day, index) => (
                          <tr key={day.dayOfWeek}>
                            <td className="fw-bold">{day.dayOfWeek}</td>
                            <td>
                              <input
                                type="checkbox"
                                checked={day.available}
                                onChange={(e) => handleDayAvailability(index, 'available', e.target.checked)}
                                className="form-check-input"
                                disabled={saving}
                              />
                            </td>
                            <td>
                              <input
                                type="time"
                                value={day.startTime || ""}
                                onChange={(e) => handleDayAvailability(index, 'startTime', e.target.value)}
                                className="form-control form-control-sm"
                                disabled={!day.available || saving}
                              />
                            </td>
                            <td>
                              <input
                                type="time"
                                value={day.endTime || ""}
                                onChange={(e) => handleDayAvailability(index, 'endTime', e.target.value)}
                                className="form-control form-control-sm"
                                disabled={!day.available || saving}
                              />
                            </td>
                            <td>
                              <input
                                type="time"
                                value={day.breakStartTime || ""}
                                onChange={(e) => handleDayAvailability(index, 'breakStartTime', e.target.value)}
                                className="form-control form-control-sm"
                                disabled={!day.available || saving}
                              />
                            </td>
                            <td>
                              <input
                                type="time"
                                value={day.breakEndTime || ""}
                                onChange={(e) => handleDayAvailability(index, 'breakEndTime', e.target.value)}
                                className="form-control form-control-sm"
                                disabled={!day.available || saving}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-end mt-3">
                    <button
                      className="btn btn-primary"
                      onClick={handleSaveAvailability}
                      disabled={saving}
                    >
                      {saving ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Saving & Generating Slots...
                        </>
                      ) : (
                        'Save Schedule & Generate Slots'
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Time Slots for Specific Date */}
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Manage Time Slots</h4>

                  <div className="row mb-3 align-items-end">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Select Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={selectedDate}
                          onChange={handleDateChange}
                          min={moment().format('YYYY-MM-DD')}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      {selectedSlots.length > 0 && (
                        <button
                          className="btn btn-danger w-100"
                          onClick={handleDeleteSelectedSlots}
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" />
                              Deleting...
                            </>
                          ) : (
                            `Delete Selected (${selectedSlots.length})`
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {loading ? (
                    <div className="text-center py-4">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-2 text-muted">Loading slots...</p>
                    </div>
                  ) : timeSlots.length === 0 ? (
                    <div className="alert alert-info">
                      <i className="fas fa-info-circle me-2"></i>
                      No time slots available for {moment(selectedDate).format('DD MMM YYYY')}.
                      <br />
                      Please configure your weekly schedule above and click "Save Schedule & Generate Slots".
                    </div>
                  ) : (
                    <>
                      <div className="mb-3">
                        <span className="badge bg-success me-2">
                          <i className="fas fa-check me-1"></i>
                          Available: {timeSlots.filter(s => s.available).length}
                        </span>
                        <span className="badge bg-warning text-dark me-2">
                          <i className="fas fa-calendar-check me-1"></i>
                          Booked: {timeSlots.filter(s => !s.available && s.appointmentId).length}
                        </span>
                        <span className="badge bg-danger">
                          <i className="fas fa-times me-1"></i>
                          Unavailable: {timeSlots.filter(s => !s.available && !s.appointmentId).length}
                        </span>
                      </div>

                      <div className="token-slot mt-3">
                        {timeSlots.map((slot) => (
                          <div className="form-check-inline visits me-1 mb-2" key={slot.id}>
                            <label className={`visit-btns ${!slot.available ? 'disabled' : ''}`}>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={selectedSlots.includes(slot.id)}
                                onChange={() => handleSlotToggle(slot.id)}
                                disabled={!slot.available || slot.appointmentId || loading}
                              />
                              <span
                                className={`visit-rsn ${!slot.available ? 'bg-secondary' : ''} ${slot.appointmentId ? 'bg-warning' : ''}`}
                                title={slot.available ? 'Available' : (slot.appointmentId ? 'Booked' : 'Unavailable')}
                              >
                                {formatTime(slot.startTime)}
                              </span>
                            </label>
                          </div>
                        ))}
                      </div>

                      <div className="alert alert-info mt-3">
                        <i className="fas fa-info-circle me-2"></i>
                        <strong>Note:</strong> Select available slots to delete them. Booked slots cannot be deleted.
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </>
  );
};

export default AvailableTiming;