import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../header';
import DoctorFooter from '../../common/doctorFooter';
import DoctorSidebar from '../sidebar';
import SettingsHeader from './settingsHeader';
import apiService from '../../../../config/apiService';

const BusinessSettings = (props) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [slotDuration, setSlotDuration] = useState(30);

  const [weekSchedule, setWeekSchedule] = useState([
    { dayOfWeek: "MONDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "TUESDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "WEDNESDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "THURSDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "FRIDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "SATURDAY", available: false, startTime: null, endTime: null, breakStartTime: null, breakEndTime: null },
    { dayOfWeek: "SUNDAY", available: false, startTime: null, endTime: null, breakStartTime: null, breakEndTime: null }
  ]);

  const [activeDay, setActiveDay] = useState('MONDAY');

  useEffect(() => {
    loadBusinessSettings();
  }, []);

  const loadBusinessSettings = async () => {
    try {
      const response = await apiService.get('/doctors/me');
      if (response.data.success && response.data.data.availability) {
        const availability = response.data.data.availability;
        if (availability.weekSchedule) {
          setWeekSchedule(availability.weekSchedule);
        }
        if (availability.slotDuration) {
          setSlotDuration(availability.slotDuration);
        }
      }
    } catch (error) {
      console.error('Error loading business settings:', error);
    }
  };

  const handleDayClick = (day) => {
    setActiveDay(day);
  };

  const handleAvailabilityChange = (dayOfWeek, field, value) => {
    setWeekSchedule(weekSchedule.map(day => {
      if (day.dayOfWeek === dayOfWeek) {
        if (field === 'available') {
          if (!value) {
            return {
              ...day,
              available: false,
              startTime: null,
              endTime: null,
              breakStartTime: null,
              breakEndTime: null
            };
          }
          return { ...day, [field]: value };
        }
        return { ...day, [field]: value };
      }
      return day;
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const profileResponse = await apiService.get('/doctors/me');
      const currentProfile = profileResponse.data.data;

      const updatePayload = {
        ...currentProfile,
        availability: {
          weekSchedule: weekSchedule,
          slotDuration: slotDuration
        }
      };

      const response = await apiService.put('/doctors/me', updatePayload);

      if (response.data.success) {
        alert('Business hours saved successfully!');

        // Regenerate time slots
        await apiService.post('/doctors/me/generate-slots');
        alert('Time slots regenerated successfully!');

        loadBusinessSettings();
      }
    } catch (error) {
      console.error('Error saving business settings:', error);
      setErrors({
        submit: error.response?.data?.message || 'Failed to save business settings'
      });
    } finally {
      setLoading(false);
    }
  };

  const getDaySchedule = (dayOfWeek) => {
    return weekSchedule.find(day => day.dayOfWeek === dayOfWeek);
  };

  return (
    <div>
      <Header {...props} />

      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Doctor Profile</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home-1">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Doctor Profile
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="content doctor-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              <DoctorSidebar />
            </div>

            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>Profile Settings</h3>
              </div>

              <SettingsHeader />

              <div className="dashboard-header border-0 mb-0">
                <h3>Business Hours</h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="business-wrap">
                  <h4>Select Business days</h4>
                  <ul className="business-nav">
                    {weekSchedule.map((day) => (
                      <li key={day.dayOfWeek}>
                        <Link
                          className={`tab-link ${activeDay === day.dayOfWeek ? 'active' : ''}`}
                          to="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDayClick(day.dayOfWeek);
                          }}
                        >
                          {day.dayOfWeek.charAt(0) + day.dayOfWeek.slice(1).toLowerCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-3">
                  <label className="col-form-label">Slot Duration (minutes)</label>
                  <select
                    className="form-control"
                    value={slotDuration}
                    onChange={(e) => setSlotDuration(parseInt(e.target.value))}
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>

                <div className="accordions business-info" id="list-accord">
                  {weekSchedule.map((day, index) => {
                    const dayName = day.dayOfWeek.charAt(0) + day.dayOfWeek.slice(1).toLowerCase();
                    const isActive = activeDay === day.dayOfWeek;

                    return (
                      <div
                        className={`user-accordion-item tab-items ${isActive ? 'active' : ''}`}
                        id={`day-${day.dayOfWeek.toLowerCase()}`}
                        key={day.dayOfWeek}
                      >
                        <Link
                          to="#"
                          className={`accordion-wrap ${!isActive ? 'collapsed' : ''}`}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${day.dayOfWeek.toLowerCase()}`}
                        >
                          {dayName}
                          <span className="edit">
                            <input
                              type="checkbox"
                              checked={day.available}
                              onChange={(e) => {
                                e.stopPropagation();
                                handleAvailabilityChange(day.dayOfWeek, 'available', e.target.checked);
                              }}
                              className="form-check-input me-2"
                            />
                            {day.available ? 'Available' : 'Unavailable'}
                          </span>
                        </Link>

                        <div
                          className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                          id={day.dayOfWeek.toLowerCase()}
                          data-bs-parent="#list-accord"
                        >
                          <div className="content-collapse pb-0">
                            {day.available ? (
                              <div className="row align-items-center">
                                <div className="col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      From <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-icon">
                                      <input
                                        type="time"
                                        className="form-control"
                                        value={day.startTime || ""}
                                        onChange={(e) => handleAvailabilityChange(day.dayOfWeek, 'startTime', e.target.value)}
                                      />
                                      <span className="icon">
                                        <i className="fa-solid fa-clock" />
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      To <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-icon">
                                      <input
                                        type="time"
                                        className="form-control"
                                        value={day.endTime || ""}
                                        onChange={(e) => handleAvailabilityChange(day.dayOfWeek, 'endTime', e.target.value)}
                                      />
                                      <span className="icon">
                                        <i className="fa-solid fa-clock" />
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">Break Start</label>
                                    <div className="form-icon">
                                      <input
                                        type="time"
                                        className="form-control"
                                        value={day.breakStartTime || ""}
                                        onChange={(e) => handleAvailabilityChange(day.dayOfWeek, 'breakStartTime', e.target.value)}
                                      />
                                      <span className="icon">
                                        <i className="fa-solid fa-clock" />
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">Break End</label>
                                    <div className="form-icon">
                                      <input
                                        type="time"
                                        className="form-control"
                                        value={day.breakEndTime || ""}
                                        onChange={(e) => handleAvailabilityChange(day.dayOfWeek, 'breakEndTime', e.target.value)}
                                      />
                                      <span className="icon">
                                        <i className="fa-solid fa-clock" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="alert alert-info">
                                This day is marked as unavailable
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {errors.submit && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errors.submit}
                  </div>
                )}

                <div className="modal-btn text-end">
                  <Link to="/doctor/doctor-dashboard" className="btn btn-gray">
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-primary prime-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" />
                        Saving...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <DoctorFooter />
    </div>
  );
};

export default BusinessSettings;