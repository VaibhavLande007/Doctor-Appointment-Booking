import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import Header from "../../header";
import DoctorFooter from "../../common/doctorFooter";
import DoctorSidebar from "../sidebar";
import SettingsHeader from "./settingsHeader";
import apiService from "../../../../config/apiService";
import { v4 as uuidv4 } from 'uuid';

const Education = (props) => {
  const history = useHistory();
  const [educations, setEducations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadEducations();
  }, []);

  const loadEducations = async () => {
    try {
      const response = await apiService.get('/doctors/me');
      if (response.data.success && response.data.data.educations) {
        setEducations(response.data.data.educations.map(edu => ({
          ...edu,
          startDate: edu.startDate ? new Date(edu.startDate) : null,
          endDate: edu.endDate ? new Date(edu.endDate) : null,
          isExpanded: false
        })));
      }
    } catch (error) {
      console.error('Error loading educations:', error);
    }
  };

  const addEducation = () => {
    const newEducation = {
      id: uuidv4(),
      institution: "",
      course: "",
      startDate: null,
      endDate: null,
      years: 0,
      description: "",
      logoUrl: "",
      isExpanded: true,
    };
    setEducations([...educations, newEducation]);
  };

  const deleteEducation = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  const toggleExpand = (id) => {
    setEducations(educations.map((edu) =>
      edu.id === id ? { ...edu, isExpanded: !edu.isExpanded } : edu
    ));
  };

  const handleChange = (id, field, value) => {
    setEducations(educations.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get current doctor profile
      const profileResponse = await apiService.get('/doctors/me');
      const currentProfile = profileResponse.data.data;

      // Format educations for backend
      const formattedEducations = educations.map(edu => ({
        id: edu.id,
        institution: edu.institution,
        course: edu.course,
        startDate: edu.startDate ? edu.startDate.toISOString().split('T')[0] : null,
        endDate: edu.endDate ? edu.endDate.toISOString().split('T')[0] : null,
        years: edu.years,
        description: edu.description,
        logoUrl: edu.logoUrl
      }));

      // Update profile with new educations
      const updatePayload = {
        ...currentProfile,
        educations: formattedEducations
      };

      const response = await apiService.put('/doctors/me', updatePayload);

      if (response.data.success) {
        alert('Education information saved successfully!');
        loadEducations();
      }
    } catch (error) {
      console.error('Error saving educations:', error);
      setErrors({
        submit: error.response?.data?.message || 'Failed to save education information'
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
                <h3>Education</h3>
                <ul>
                  <li>
                    <Link
                      to="#"
                      className="btn btn-primary prime-btn add-educations"
                      onClick={addEducation}
                    >
                      Add New Education
                    </Link>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="accordions education-infos" id="list-accord">
                  {educations.map((education, index) => (
                    <div className="user-accordion-item" key={education.id}>
                      <Link
                        to="#"
                        className={education.isExpanded ? "accordion-wrap" : "collapsed accordion-wrap"}
                        data-bs-toggle="collapse"
                        data-bs-target={`#education${education.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpand(education.id);
                        }}
                      >
                        {education.institution || "Education"} - {education.course || "Course"}
                        <span onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          deleteEducation(education.id);
                        }}>Delete</span>
                      </Link>

                      <div
                        className={`accordion-collapse collapse ${education.isExpanded ? 'show' : ''}`}
                        id={`education${education.id}`}
                        data-bs-parent="#list-accord"
                      >
                        <div className="content-collapse">
                          <div className="add-service-info">
                            <div className="add-info">
                              <div className="row align-items-center">
                                <div className="col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      Name of the Institution
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={education.institution}
                                      onChange={(e) => handleChange(education.id, 'institution', e.target.value)}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-6">
                                  <div className="form-wrap">
                                    <label className="col-form-label">Course</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={education.course}
                                      onChange={(e) => handleChange(education.id, 'course', e.target.value)}
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
                                        selected={education.startDate}
                                        onChange={(date) => handleChange(education.id, 'startDate', date)}
                                        dateFormat="dd-MM-yyyy"
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
                                        selected={education.endDate}
                                        onChange={(date) => handleChange(education.id, 'endDate', date)}
                                        dateFormat="dd-MM-yyyy"
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
                                      No of Years <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      value={education.years}
                                      onChange={(e) => handleChange(education.id, 'years', parseInt(e.target.value) || 0)}
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      Description <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      value={education.description}
                                      onChange={(e) => handleChange(education.id, 'description', e.target.value)}
                                    />
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

export default Education;