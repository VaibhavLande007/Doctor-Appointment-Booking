import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import Select from 'react-select';
import Header from "../../header";
import DoctorSidebar from "../sidebar/index";
import DoctorFooter from "../../common/doctorFooter/index.jsx";
import SettingsHeader from "./settingsHeader.jsx";
import apiService from "../../../../config/apiService";

const CompleteDoctorProfile = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [profileExists, setProfileExists] = useState(false);
  const [activeTab, setActiveTab] = useState('basic'); // basic, education, experience, awards, clinics

  // Basic Information State
  const [formData, setFormData] = useState({
    registrationNumber: "",
    specializations: [],
    qualification: "",
    experienceYears: "",
    bio: "",
    clinicName: "",
    consultationFee: "",
    services: [],
    languages: [],
  });

  // Address State
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "USA",
    zipCode: "",
    latitude: null,
    longitude: null
  });

  // Availability State
  const [weekSchedule, setWeekSchedule] = useState([
    { dayOfWeek: "MONDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "TUESDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "WEDNESDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "THURSDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "FRIDAY", available: true, startTime: "09:00", endTime: "17:00", breakStartTime: "13:00", breakEndTime: "14:00" },
    { dayOfWeek: "SATURDAY", available: false, startTime: null, endTime: null, breakStartTime: null, breakEndTime: null },
    { dayOfWeek: "SUNDAY", available: false, startTime: null, endTime: null, breakStartTime: null, breakEndTime: null }
  ]);

  const [slotDuration, setSlotDuration] = useState(30);

  // New Fields State
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [awards, setAwards] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [memberships, setMemberships] = useState([]);

  // Specialization options
  const specializationOptions = [
    { value: "Psychologist", label: "Psychologist" },
    { value: "Pediatrician", label: "Pediatrician" },
    { value: "Neurologist", label: "Neurologist" },
    { value: "Cardiologist", label: "Cardiologist" },
    { value: "Dermatologist", label: "Dermatologist" },
    { value: "Orthopedic", label: "Orthopedic" },
    { value: "General Physician", label: "General Physician" },
  ];

  // Load existing profile on mount
  useEffect(() => {
    loadDoctorProfile();
  }, []);

  const loadDoctorProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        history.push('/login');
        return;
      }

      const response = await apiService.get('/doctors/me');
      if (response.data.success) {
        const profile = response.data.data;
        setProfileExists(true);

        setFormData({
          registrationNumber: profile.registrationNumber || "",
          specializations: profile.specializations || [],
          qualification: profile.qualification || "",
          experienceYears: profile.experienceYears || "",
          bio: profile.bio || "",
          clinicName: profile.clinicName || "",
          consultationFee: profile.consultationFee || "",
          services: profile.services || [],
          languages: profile.languages || [],
        });

        if (profile.address) {
          setAddress(profile.address);
        }

        if (profile.availability) {
          if (profile.availability.weekSchedule) {
            setWeekSchedule(profile.availability.weekSchedule);
          }
          if (profile.availability.slotDuration) {
            setSlotDuration(profile.availability.slotDuration);
          }
        }

        setEducations(profile.educations || []);
        setExperiences(profile.experiences || []);
        setAwards(profile.awards || []);
        setClinics(profile.clinics || []);
        setInsurances(profile.insurances || []);
        setMemberships(profile.memberships || []);
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setProfileExists(false);
      } else {
        console.error('Error loading profile:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecializationChange = (selected) => {
    setFormData(prev => ({
      ...prev,
      specializations: selected ? selected.map(s => s.value) : []
    }));
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
      }
    } else {
      updated[index][field] = value;
    }
    setWeekSchedule(updated);
  };

  // Education handlers
  const addEducation = () => {
    setEducations([...educations, {
      id: Date.now().toString(),
      institution: "",
      course: "",
      startDate: "",
      endDate: "",
      years: "",
      description: "",
      logoUrl: ""
    }]);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...educations];
    updated[index][field] = value;
    setEducations(updated);
  };

  const removeEducation = (index) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  // Experience handlers
  const addExperience = () => {
    setExperiences([...experiences, {
      id: Date.now().toString(),
      title: "",
      hospital: "",
      location: "",
      employmentType: "FULL_TIME",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      jobDescription: "",
      yearsOfExperience: "",
      logoUrl: ""
    }]);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  // Award handlers
  const addAward = () => {
    setAwards([...awards, {
      id: Date.now().toString(),
      name: "",
      year: "",
      description: ""
    }]);
  };

  const updateAward = (index, field, value) => {
    const updated = [...awards];
    updated[index][field] = value;
    setAwards(updated);
  };

  const removeAward = (index) => {
    setAwards(awards.filter((_, i) => i !== index));
  };

  // Clinic handlers
  const addClinic = () => {
    setClinics([...clinics, {
      id: Date.now().toString(),
      name: "",
      location: "",
      address: "",
      logoUrl: "",
      galleryImages: []
    }]);
  };

  const updateClinic = (index, field, value) => {
    const updated = [...clinics];
    updated[index][field] = value;
    setClinics(updated);
  };

  const removeClinic = (index) => {
    setClinics(clinics.filter((_, i) => i !== index));
  };

  // Insurance handlers
  const addInsurance = () => {
    setInsurances([...insurances, {
      id: Date.now().toString(),
      name: "",
      logoUrl: ""
    }]);
  };

  const updateInsurance = (index, field, value) => {
    const updated = [...insurances];
    updated[index][field] = value;
    setInsurances(updated);
  };

  const removeInsurance = (index) => {
    setInsurances(insurances.filter((_, i) => i !== index));
  };

  // Membership handlers
  const addMembership = () => {
    setMemberships([...memberships, {
      id: Date.now().toString(),
      title: "",
      about: ""
    }]);
  };

  const updateMembership = (index, field, value) => {
    const updated = [...memberships];
    updated[index][field] = value;
    setMemberships(updated);
  };

  const removeMembership = (index) => {
    setMemberships(memberships.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.registrationNumber.trim()) {
      newErrors.registrationNumber = "Registration number is required";
    }
    if (formData.specializations.length === 0) {
      newErrors.specializations = "At least one specialization is required";
    }
    if (!formData.qualification.trim()) {
      newErrors.qualification = "Qualification is required";
    }
    if (!formData.experienceYears || formData.experienceYears < 0) {
      newErrors.experienceYears = "Valid experience years required";
    }
    if (!formData.consultationFee || formData.consultationFee <= 0) {
      newErrors.consultationFee = "Valid consultation fee required";
    }
    if (!address.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!address.state.trim()) {
      newErrors.state = "State is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        registrationNumber: formData.registrationNumber,
        specializations: formData.specializations,
        qualification: formData.qualification,
        experienceYears: parseInt(formData.experienceYears),
        bio: formData.bio,
        clinicName: formData.clinicName,
        consultationFee: parseFloat(formData.consultationFee),
        services: formData.services.length > 0 ? formData.services : undefined,
        languages: formData.languages.length > 0 ? formData.languages : undefined,
        address: {
          street: address.street,
          city: address.city,
          state: address.state,
          country: address.country,
          zipCode: address.zipCode,
          latitude: address.latitude,
          longitude: address.longitude
        },
        availability: {
          weekSchedule: weekSchedule,
          slotDuration: slotDuration
        },
        educations: educations.length > 0 ? educations : undefined,
        experiences: experiences.length > 0 ? experiences : undefined,
        awards: awards.length > 0 ? awards : undefined,
        clinics: clinics.length > 0 ? clinics : undefined,
        insurances: insurances.length > 0 ? insurances : undefined,
        memberships: memberships.length > 0 ? memberships : undefined
      };

      let response;
      if (profileExists) {
        response = await apiService.put('/doctors/me', payload);
      } else {
        response = await apiService.post('/doctors/me', payload);
      }

      if (response.data.success) {
        alert(`Profile ${profileExists ? 'updated' : 'created'} successfully!`);
        await apiService.post('/doctors/me/generate-slots');
        history.push('/doctor/doctor-dashboard');
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      setErrors({
        submit: error.response?.data?.message || 'Failed to save profile. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header {...props} />

      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Doctor Profile Settings</h2>
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

              {/* Tab Navigation */}
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified mb-4">
                <li className="nav-item">
                  <a className={`nav-link ${activeTab === 'basic' ? 'active' : ''}`}
                     onClick={() => setActiveTab('basic')}
                     style={{ cursor: 'pointer' }}>
                    Basic Info
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeTab === 'education' ? 'active' : ''}`}
                     onClick={() => setActiveTab('education')}
                     style={{ cursor: 'pointer' }}>
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`}
                     onClick={() => setActiveTab('experience')}
                     style={{ cursor: 'pointer' }}>
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeTab === 'additional' ? 'active' : ''}`}
                     onClick={() => setActiveTab('additional')}
                     style={{ cursor: 'pointer' }}>
                    Additional
                  </a>
                </li>
              </ul>

              <form onSubmit={handleSubmit}>
                {/* Basic Information Tab */}
                {activeTab === 'basic' && (
                  <>
                    <div className="setting-title">
                      <h5>Basic Information</h5>
                    </div>
                    <div className="setting-card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Registration Number <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="registrationNumber"
                              value={formData.registrationNumber}
                              onChange={handleInputChange}
                              className={`form-control ${errors.registrationNumber ? 'is-invalid' : ''}`}
                              placeholder="MED-XXX-2024-001"
                            />
                            {errors.registrationNumber && (
                              <div className="invalid-feedback d-block">{errors.registrationNumber}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Specializations <span className="text-danger">*</span>
                            </label>
                            <Select
                              isMulti
                              options={specializationOptions}
                              value={specializationOptions.filter(opt =>
                                formData.specializations.includes(opt.value)
                              )}
                              onChange={handleSpecializationChange}
                              className={errors.specializations ? 'is-invalid' : ''}
                            />
                            {errors.specializations && (
                              <div className="invalid-feedback d-block">{errors.specializations}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Qualification <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="qualification"
                              value={formData.qualification}
                              onChange={handleInputChange}
                              className={`form-control ${errors.qualification ? 'is-invalid' : ''}`}
                              placeholder="MBBS, MD"
                            />
                            {errors.qualification && (
                              <div className="invalid-feedback d-block">{errors.qualification}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Years of Experience <span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              name="experienceYears"
                              value={formData.experienceYears}
                              onChange={handleInputChange}
                              className={`form-control ${errors.experienceYears ? 'is-invalid' : ''}`}
                              min="0"
                            />
                            {errors.experienceYears && (
                              <div className="invalid-feedback d-block">{errors.experienceYears}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Consultation Fee (USD) <span className="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              name="consultationFee"
                              value={formData.consultationFee}
                              onChange={handleInputChange}
                              className={`form-control ${errors.consultationFee ? 'is-invalid' : ''}`}
                              min="0"
                              step="0.01"
                            />
                            {errors.consultationFee && (
                              <div className="invalid-feedback d-block">{errors.consultationFee}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">Clinic Name</label>
                            <input
                              type="text"
                              name="clinicName"
                              value={formData.clinicName}
                              onChange={handleInputChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">Bio</label>
                            <textarea
                              name="bio"
                              value={formData.bio}
                              onChange={handleInputChange}
                              className="form-control"
                              rows="3"
                              placeholder="Brief description about yourself and your practice"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">Services Offered</label>
                            <TagsInput
                              value={formData.services}
                              onChange={(services) => setFormData(prev => ({ ...prev, services }))}
                              placeHolder="Press enter to add service"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">Languages</label>
                            <TagsInput
                              value={formData.languages}
                              onChange={(languages) => setFormData(prev => ({ ...prev, languages }))}
                              placeHolder="Press enter to add language"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="setting-title">
                      <h5>Clinic Address</h5>
                    </div>
                    <div className="setting-card">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">Street Address</label>
                            <input
                              type="text"
                              name="street"
                              value={address.street}
                              onChange={handleAddressChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              City <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={address.city}
                              onChange={handleAddressChange}
                              className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                            />
                            {errors.city && (
                              <div className="invalid-feedback d-block">{errors.city}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              State <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              name="state"
                              value={address.state}
                              onChange={handleAddressChange}
                              className={`form-control ${errors.state ? 'is-invalid' : ''}`}
                            />
                            {errors.state && (
                              <div className="invalid-feedback d-block">{errors.state}</div>
                            )}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">Country</label>
                            <input
                              type="text"
                              name="country"
                              value={address.country}
                              onChange={handleAddressChange}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="col-form-label">Zip Code</label>
                            <input
                              type="text"
                              name="zipCode"
                              value={address.zipCode}
                              onChange={handleAddressChange}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="setting-title">
                      <h5>Availability</h5>
                    </div>
                    <div className="setting-card">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-wrap">
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
                        </div>

                        {weekSchedule.map((day, index) => (
                          <div className="col-md-12" key={day.dayOfWeek}>
                            <div className="form-wrap">
                              <div className="d-flex align-items-center mb-2">
                                <input
                                  type="checkbox"
                                  checked={day.available}
                                  onChange={(e) => handleDayAvailability(index, 'available', e.target.checked)}
                                  className="form-check-input me-2"
                                />
                                <label className="mb-0 fw-bold">{day.dayOfWeek}</label>
                              </div>

                              {day.available && (
                                <div className="row">
                                  <div className="col-md-3">
                                    <input
                                      type="time"
                                      value={day.startTime || ""}
                                      onChange={(e) => handleDayAvailability(index, 'startTime', e.target.value)}
                                      className="form-control"
                                      placeholder="Start Time"
                                    />
                                  </div>
                                  <div className="col-md-3">
                                    <input
                                      type="time"
                                      value={day.endTime || ""}
                                      onChange={(e) => handleDayAvailability(index, 'endTime', e.target.value)}
                                      className="form-control"
                                      placeholder="End Time"
                                    />
                                  </div>
                                  <div className="col-md-3">
                                    <input
                                      type="time"
                                      value={day.breakStartTime || ""}
                                      onChange={(e) => handleDayAvailability(index, 'breakStartTime', e.target.value)}
                                      className="form-control"
                                      placeholder="Break Start"
                                    />
                                  </div>
                                  <div className="col-md-3">
                                    <input
                                      type="time"
                                      value={day.breakEndTime || ""}
                                      onChange={(e) => handleDayAvailability(index, 'breakEndTime', e.target.value)}
                                      className="form-control"
                                      placeholder="Break End"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Education Tab */}
                {activeTab === 'education' && (
                  <>
                    <div className="setting-title d-flex justify-content-between align-items-center">
                      <h5>Education</h5>
                      <button type="button" className="btn btn-primary btn-sm" onClick={addEducation}>
                        + Add Education
                      </button>
                    </div>
                    <div className="setting-card">
                      {educations.length === 0 ? (
                        <p className="text-muted">No education added yet. Click "Add Education" to get started.</p>
                      ) : (
                        educations.map((edu, index) => (
                          <div key={edu.id} className="border p-3 mb-3 rounded">
                            <div className="d-flex justify-content-between mb-2">
                              <h6>Education {index + 1}</h6>
                              <button type="button" className="btn btn-sm btn-danger" onClick={() => removeEducation(index)}>
                                Remove
                              </button>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Institution *</label>
                                  <input
                                    type="text"
                                    value={edu.institution}
                                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Course *</label>
                                  <input
                                    type="text"
                                    value={edu.course}
                                    onChange={(e) => updateEducation(index, 'course', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-wrap">
                                  <label className="col-form-label">Start Date</label>
                                  <input
                                    type="date"
                                    value={edu.startDate}
                                    onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-wrap">
                                  <label className="col-form-label">End Date</label>
                                  <input
                                    type="date"
                                    value={edu.endDate}
                                    onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-wrap">
                                  <label className="col-form-label">Years</label>
                                  <input
                                    type="number"
                                    value={edu.years}
                                    onChange={(e) => updateEducation(index, 'years', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">Description</label>
                                  <textarea
                                    value={edu.description}
                                    onChange={(e) => updateEducation(index, 'description', e.target.value)}
                                    className="form-control"
                                    rows="2"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">Logo URL</label>
                                  <input
                                    type="text"
                                    value={edu.logoUrl}
                                    onChange={(e) => updateEducation(index, 'logoUrl', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </>
                )}

                {/* Experience Tab */}
                {activeTab === 'experience' && (
                  <>
                    <div className="setting-title d-flex justify-content-between align-items-center">
                      <h5>Experience</h5>
                      <button type="button" className="btn btn-primary btn-sm" onClick={addExperience}>
                        + Add Experience
                      </button>
                    </div>
                    <div className="setting-card">
                      {experiences.length === 0 ? (
                        <p className="text-muted">No experience added yet. Click "Add Experience" to get started.</p>
                      ) : (
                        experiences.map((exp, index) => (
                          <div key={exp.id} className="border p-3 mb-3 rounded">
                            <div className="d-flex justify-content-between mb-2">
                              <h6>Experience {index + 1}</h6>
                              <button type="button" className="btn btn-sm btn-danger" onClick={() => removeExperience(index)}>
                                Remove
                              </button>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Title *</label>
                                  <input
                                    type="text"
                                    value={exp.title}
                                    onChange={(e) => updateExperience(index, 'title', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Hospital *</label>
                                  <input
                                    type="text"
                                    value={exp.hospital}
                                    onChange={(e) => updateExperience(index, 'hospital', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Location</label>
                                  <input
                                    type="text"
                                    value={exp.location}
                                    onChange={(e) => updateExperience(index, 'location', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Employment Type</label>
                                  <select
                                    value={exp.employmentType}
                                    onChange={(e) => updateExperience(index, 'employmentType', e.target.value)}
                                    className="form-control"
                                  >
                                    <option value="FULL_TIME">Full Time</option>
                                    <option value="PART_TIME">Part Time</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-wrap">
                                  <label className="col-form-label">Start Date</label>
                                  <input
                                    type="date"
                                    value={exp.startDate}
                                    onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-wrap">
                                  <label className="col-form-label">End Date</label>
                                  <input
                                    type="date"
                                    value={exp.endDate}
                                    onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                                    className="form-control"
                                    disabled={exp.currentlyWorking}
                                  />
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-wrap">
                                  <div className="form-check mt-4">
                                    <input
                                      type="checkbox"
                                      checked={exp.currentlyWorking}
                                      onChange={(e) => updateExperience(index, 'currentlyWorking', e.target.checked)}
                                      className="form-check-input"
                                      id={`current-${index}`}
                                    />
                                    <label className="form-check-label" htmlFor={`current-${index}`}>
                                      Currently Working
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Years of Experience</label>
                                  <input
                                    type="number"
                                    value={exp.yearsOfExperience}
                                    onChange={(e) => updateExperience(index, 'yearsOfExperience', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Logo URL</label>
                                  <input
                                    type="text"
                                    value={exp.logoUrl}
                                    onChange={(e) => updateExperience(index, 'logoUrl', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">Job Description</label>
                                  <textarea
                                    value={exp.jobDescription}
                                    onChange={(e) => updateExperience(index, 'jobDescription', e.target.value)}
                                    className="form-control"
                                    rows="2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </>
                )}

                {/* Additional Information Tab */}
                {activeTab === 'additional' && (
                  <>
                    {/* Awards Section */}
                    <div className="setting-title d-flex justify-content-between align-items-center">
                      <h5>Awards</h5>
                      <button type="button" className="btn btn-primary btn-sm" onClick={addAward}>
                        + Add Award
                      </button>
                    </div>
                    <div className="setting-card mb-4">
                      {awards.length === 0 ? (
                        <p className="text-muted">No awards added yet.</p>
                      ) : (
                        awards.map((award, index) => (
                          <div key={award.id} className="border p-3 mb-3 rounded">
                            <div className="d-flex justify-content-between mb-2">
                              <h6>Award {index + 1}</h6>
                              <button type="button" className="btn btn-sm btn-danger" onClick={() => removeAward(index)}>
                                Remove
                              </button>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Award Name *</label>
                                  <input
                                    type="text"
                                    value={award.name}
                                    onChange={(e) => updateAward(index, 'name', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Year</label>
                                  <input
                                    type="number"
                                    value={award.year}
                                    onChange={(e) => updateAward(index, 'year', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">Description</label>
                                  <textarea
                                    value={award.description}
                                    onChange={(e) => updateAward(index, 'description', e.target.value)}
                                    className="form-control"
                                    rows="2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Clinics Section */}
                    <div className="setting-title d-flex justify-content-between align-items-center">
                      <h5>Clinics</h5>
                      <button type="button" className="btn btn-primary btn-sm" onClick={addClinic}>
                        + Add Clinic
                      </button>
                    </div>
                    <div className="setting-card mb-4">
                      {clinics.length === 0 ? (
                        <p className="text-muted">No clinics added yet.</p>
                      ) : (
                        clinics.map((clinic, index) => (
                          <div key={clinic.id} className="border p-3 mb-3 rounded">
                            <div className="d-flex justify-content-between mb-2">
                              <h6>Clinic {index + 1}</h6>
                              <button type="button" className="btn btn-sm btn-danger" onClick={() => removeClinic(index)}>
                                Remove
                              </button>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Clinic Name *</label>
                                  <input
                                    type="text"
                                    value={clinic.name}
                                    onChange={(e) => updateClinic(index, 'name', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Location</label>
                                  <input
                                    type="text"
                                    value={clinic.location}
                                    onChange={(e) => updateClinic(index, 'location', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">Address</label>
                                  <input
                                    type="text"
                                    value={clinic.address}
                                    onChange={(e) => updateClinic(index, 'address', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">Logo URL</label>
                                  <input
                                    type="text"
                                    value={clinic.logoUrl}
                                    onChange={(e) => updateClinic(index, 'logoUrl', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">Gallery Images (URLs)</label>
                                  <TagsInput
                                    value={clinic.galleryImages}
                                    onChange={(images) => updateClinic(index, 'galleryImages', images)}
                                    placeHolder="Press enter to add image URL"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Insurances Section */}
                    <div className="setting-title d-flex justify-content-between align-items-center">
                      <h5>Insurances Accepted</h5>
                      <button type="button" className="btn btn-primary btn-sm" onClick={addInsurance}>
                        + Add Insurance
                      </button>
                    </div>
                    <div className="setting-card mb-4">
                      {insurances.length === 0 ? (
                        <p className="text-muted">No insurances added yet.</p>
                      ) : (
                        insurances.map((insurance, index) => (
                          <div key={insurance.id} className="border p-3 mb-3 rounded">
                            <div className="d-flex justify-content-between mb-2">
                              <h6>Insurance {index + 1}</h6>
                              <button type="button" className="btn btn-sm btn-danger" onClick={() => removeInsurance(index)}>
                                Remove
                              </button>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Insurance Name *</label>
                                  <input
                                    type="text"
                                    value={insurance.name}
                                    onChange={(e) => updateInsurance(index, 'name', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-wrap">
                                  <label className="col-form-label">Logo URL</label>
                                  <input
                                    type="text"
                                    value={insurance.logoUrl}
                                    onChange={(e) => updateInsurance(index, 'logoUrl', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Memberships Section */}
                    <div className="setting-title d-flex justify-content-between align-items-center">
                      <h5>Professional Memberships</h5>
                      <button type="button" className="btn btn-primary btn-sm" onClick={addMembership}>
                        + Add Membership
                      </button>
                    </div>
                    <div className="setting-card">
                      {memberships.length === 0 ? (
                        <p className="text-muted">No memberships added yet.</p>
                      ) : (
                        memberships.map((membership, index) => (
                          <div key={membership.id} className="border p-3 mb-3 rounded">
                            <div className="d-flex justify-content-between mb-2">
                              <h6>Membership {index + 1}</h6>
                              <button type="button" className="btn btn-sm btn-danger" onClick={() => removeMembership(index)}>
                                Remove
                              </button>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">Title *</label>
                                  <input
                                    type="text"
                                    value={membership.title}
                                    onChange={(e) => updateMembership(index, 'title', e.target.value)}
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-wrap">
                                  <label className="col-form-label">About</label>
                                  <textarea
                                    value={membership.about}
                                    onChange={(e) => updateMembership(index, 'about', e.target.value)}
                                    className="form-control"
                                    rows="2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </>
                )}

                {errors.submit && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errors.submit}
                  </div>
                )}

                <div className="modal-btn text-end mt-4">
                  <Link to="/doctor/doctor-dashboard" className="btn btn-gray me-1">
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
                      profileExists ? 'Update Profile' : 'Create Profile'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <DoctorFooter {...props} />
    </div>
  );
};

export default CompleteDoctorProfile;