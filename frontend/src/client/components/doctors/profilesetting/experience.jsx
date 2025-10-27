import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from 'react-select';
import Header from "../../header";
import DoctorFooter from "../../common/doctorFooter";
import DoctorSidebar from "../sidebar";
import SettingsHeader from "./settingsHeader";
import apiService from "../../../../config/apiService";
import { v4 as uuidv4 } from 'uuid';

const Experience = (props) => {
  const history = useHistory();
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const employmentOptions = [
    { label: 'Full Time', value: 'FULL_TIME' },
    { label: 'Part Time', value: 'PART_TIME' },
  ];

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = async () => {
    try {
      const response = await apiService.get('/doctors/me');
      if (response.data.success && response.data.data.experiences) {
        setExperiences(response.data.data.experiences.map(exp => ({
          ...exp,
          startDate: exp.startDate ? new Date(exp.startDate) : null,
          endDate: exp.endDate ? new Date(exp.endDate) : null,
          isExpanded: false
        })));
      }
    } catch (error) {
      console.error('Error loading experiences:', error);
    }
  };

  const addExperience = () => {
    const newExperience = {
      id: uuidv4(),
      title: "",
      hospital: "",
      location: "",
      employmentType: "FULL_TIME",
      startDate: null,
      endDate: null,
      currentlyWorking: false,
      jobDescription: "",
      yearsOfExperience: 0,
      logoUrl: "",
      isExpanded: true,
    };
    setExperiences([...experiences, newExperience]);
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const toggleExpand = (id) => {
    setExperiences(experiences.map((exp) =>
      exp.id === id ? { ...exp, isExpanded: !exp.isExpanded } : exp
    ));
  };

  const handleChange = (id, field, value) => {
    setExperiences(experiences.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      // Get current profile
      const profileResponse = await apiService.get('/doctors/me');
      const currentProfile = profileResponse.data.data;

      // Format experiences with proper date handling
      const formattedExperiences = experiences.map(exp => ({
        id: exp.id,
        title: exp.title,
        hospital: exp.hospital,
        location: exp.location,
        employmentType: exp.employmentType,
        startDate: exp.startDate ? exp.startDate.toISOString().split('T')[0] : null,
        endDate: exp.endDate ? exp.endDate.toISOString().split('T')[0] : null,
        currentlyWorking: exp.currentlyWorking,
        jobDescription: exp.jobDescription,
        yearsOfExperience: exp.yearsOfExperience,
        logoUrl: exp.logoUrl || ""
      }));

      // Prepare update payload with all required fields
      const updatePayload = {
        registrationNumber: currentProfile.registrationNumber || "",
        specializations: currentProfile.specializations || [],
        qualification: currentProfile.qualification || "",
        experienceYears: currentProfile.experienceYears || 0,
        consultationFee: currentProfile.consultationFee || 0,
        address: currentProfile.address || {
          street: "",
          city: "",
          state: "",
          country: "",
          postalCode: ""
        },
        availableSlots: currentProfile.availableSlots || [],
        about: currentProfile.about || "",
        languages: currentProfile.languages || [],
        awards: currentProfile.awards || [],
        services: currentProfile.services || [],
        educations: currentProfile.educations || [],
        experiences: formattedExperiences  // Updated experiences
      };

      const response = await apiService.put('/doctors/me', updatePayload);

      if (response.data.success) {
        alert('Experience information saved successfully!');
        loadExperiences();
      }
    } catch (error) {
      console.error('Error saving experiences:', error);

      // Better error handling to show validation errors
      const errorMessage = error.response?.data?.message
        || error.response?.data?.errors
        || 'Failed to save experience information';

      setErrors({
        submit: typeof errorMessage === 'object'
          ? JSON.stringify(errorMessage)
          : errorMessage
      });
    } finally {
      setLoading(false);
    }
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
                <h3>Experience</h3>
                <ul>
                  <li>
                    <Link
                      to="#"
                      className="btn btn-primary prime-btn add-experiences"
                      onClick={addExperience}
                    >
                      Add New Experience
                    </Link>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="accordions experience-infos" id="list-accord">
                  {experiences.map((experience) => (
                    <div className="user-accordion-item" key={experience.id}>
                      <Link
                        to="#"
                        className={experience.isExpanded ? "accordion-wrap" : "collapsed accordion-wrap"}
                        data-bs-toggle="collapse"
                        data-bs-target={`#experience${experience.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpand(experience.id);
                        }}
                      >
                        {experience.title || "Experience"} - {experience.hospital || "Hospital"}
                        <span onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          deleteExperience(experience.id);
                        }}>Delete</span>
                      </Link>

                      <div
                        className={`accordion-collapse collapse ${experience.isExpanded ? 'show' : ''}`}
                        id={`experience${experience.id}`}
                        data-bs-parent="#list-accord"
                      >
                        <div className="content-collapse">
                          <div className="add-service-info">
                            <div className="add-info">
                              <div className="row align-items-center">
                                <div className="col-lg-4 col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">Title</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={experience.title}
                                      onChange={(e) => handleChange(experience.id, 'title', e.target.value)}
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      Hospital <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={experience.hospital}
                                      onChange={(e) => handleChange(experience.id, 'hospital', e.target.value)}
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      Years of Experience <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      value={experience.yearsOfExperience}
                                      onChange={(e) => handleChange(experience.id, 'yearsOfExperience', parseInt(e.target.value) || 0)}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      Location <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={experience.location}
                                      onChange={(e) => handleChange(experience.id, 'location', e.target.value)}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">Employment</label>
                                    <Select
                                      className='select'
                                      options={employmentOptions}
                                      value={employmentOptions.find(opt => opt.value === experience.employmentType)}
                                      onChange={(selected) => handleChange(experience.id, 'employmentType', selected.value)}
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      Job Description <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      value={experience.jobDescription}
                                      onChange={(e) => handleChange(experience.id, 'jobDescription', e.target.value)}
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      Start Date <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-icon">
                                      <DatePicker
                                        className="form-control datetimepicker"
                                        selected={experience.startDate}
                                        onChange={(date) => handleChange(experience.id, 'startDate', date)}
                                        dateFormat="dd/MM/yyyy"
                                      />
                                      <span className="icon">
                                        <i className="fa-regular fa-calendar-days" />
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      End Date <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-icon">
                                      <DatePicker
                                        className="form-control datetimepicker"
                                        selected={experience.endDate}
                                        onChange={(date) => handleChange(experience.id, 'endDate', date)}
                                        dateFormat="dd/MM/yyyy"
                                        disabled={experience.currentlyWorking}
                                      />
                                      <span className="icon">
                                        <i className="fa-regular fa-calendar-days" />
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">&nbsp;</label>
                                    <div className="form-check">
                                      <label className="form-check-label">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          checked={experience.currentlyWorking}
                                          onChange={(e) => handleChange(experience.id, 'currentlyWorking', e.target.checked)}
                                        />
                                        I Currently Working Here
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {experiences.length === 0 && (
                  <div className="text-center py-5">
                    <p className="text-muted">No experiences added yet. Click "Add New Experience" to get started.</p>
                  </div>
                )}

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

export default Experience;