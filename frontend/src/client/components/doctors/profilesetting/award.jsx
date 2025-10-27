import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../../header";
import DoctorFooter from "../../common/doctorFooter";
import DoctorSidebar from "../sidebar";
import SettingsHeader from "./settingsHeader";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from 'uuid';
import apiService from '../../../../config/apiService';

const Awards = (props) => {
  const history = useHistory();
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [profileExists, setProfileExists] = useState(true);

  useEffect(() => {
    loadAwards();
  }, []);

  const loadAwards = async () => {
    try {
      const response = await apiService.get('/doctors/me');
      if (response.data.success && response.data.data) {
        setProfileExists(true);
        if (response.data.data.awards) {
          setAwards(response.data.data.awards);
        }
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setProfileExists(false);
        alert('Please complete your basic doctor profile first');
        history.push('/doctor/profile-settings'); // or your complete profile route
      } else {
        console.error('Error loading awards:', error);
      }
    }
  };

  const addAward = () => {
    const newAward = {
      id: uuidv4(),
      awardName: "",
      year: new Date().getFullYear(),
      description: "",
      isNew: true
    };
    setAwards([...awards, newAward]);
  };

  const deleteAward = (id) => {
    if (window.confirm('Are you sure you want to delete this award?')) {
      setAwards(awards.filter((award) => award.id !== id));
    }
  };

  const handleAwardChange = (id, field, value) => {
    setAwards(awards.map((award) => {
      if (award.id === id) {
        return { ...award, [field]: value };
      }
      return award;
    }));
  };

  const handleDateChange = (id, date) => {
    if (date) {
      setAwards(awards.map((award) => {
        if (award.id === id) {
          return { ...award, year: date.getFullYear() };
        }
        return award;
      }));
    }
  };

  const resetAward = (id) => {
    const award = awards.find(a => a.id === id);
    if (award && award.isNew) {
      deleteAward(id);
    } else {
      if (window.confirm('Reset this award to original state?')) {
        loadAwards();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!profileExists) {
      alert('Please create your doctor profile first');
      history.push('/doctor/profile-settings');
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      // Get current profile
      const profileResponse = await apiService.get('/doctors/me');
      const currentProfile = profileResponse.data.data;

      // Remove isNew flag before sending
      const cleanedAwards = awards.map(({ isNew, ...award }) => award);

      // Update profile with awards
      const updatePayload = {
        ...currentProfile,
        awards: cleanedAwards
      };

      const response = await apiService.put('/doctors/me', updatePayload);

      if (response.data.success) {
        alert('Awards saved successfully!');
        loadAwards();
      }
    } catch (error) {
      console.error('Error saving awards:', error);
      setErrors({
        submit: error.response?.data?.message || 'Failed to save awards'
      });
    } finally {
      setLoading(false);
    }
  };

  // Show message if profile doesn't exist
  if (!profileExists) {
    return (
      <div>
        <Header {...props} />
        <div className="content">
          <div className="container">
            <div className="alert alert-warning text-center">
              <h4>Profile Not Found</h4>
              <p>Please complete your basic doctor profile first before adding awards.</p>
              <Link to="/doctor/profile-settings" className="btn btn-primary">
                Complete Profile
              </Link>
            </div>
          </div>
        </div>
        <DoctorFooter />
      </div>
    );
  }

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
                <h3>Awards</h3>
                <ul>
                  <li>
                    <Link
                      to="#"
                      className="btn btn-primary prime-btn add-awards"
                      onClick={(e) => {
                        e.preventDefault();
                        addAward();
                      }}
                    >
                      Add New Award
                    </Link>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="accordions award-infos" id="list-accord">
                  {awards.length === 0 ? (
                    <div className="alert alert-info">
                      No awards added yet. Click "Add New Award" to get started.
                    </div>
                  ) : (
                    awards.map((award, index) => (
                      <div className="user-accordion-item" key={award.id}>
                        <Link
                          to="#"
                          className={`accordion-wrap ${index !== 0 ? 'collapsed' : ''}`}
                          data-bs-toggle="collapse"
                          data-bs-target={`#award${award.id}`}
                        >
                          {award.awardName || `Award ${index + 1}`}
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              deleteAward(award.id);
                            }}
                          >
                            Delete
                          </span>
                        </Link>
                        <div
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          id={`award${award.id}`}
                          data-bs-parent="#list-accord"
                        >
                          <div className="content-collapse">
                            <div className="add-service-info">
                              <div className="add-info">
                                <div className="row align-items-center">
                                  <div className="col-md-6">
                                    <div className="form-wrap">
                                      <label className="col-form-label">
                                        Award Name <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={award.awardName || ""}
                                        onChange={(e) => handleAwardChange(award.id, 'awardName', e.target.value)}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-wrap">
                                      <label className="col-form-label">
                                        Year <span className="text-danger">*</span>
                                      </label>
                                      <div className="form-icon">
                                        <DatePicker
                                          className="form-control datetimepicker w-100"
                                          selected={award.year ? new Date(award.year, 0, 1) : new Date()}
                                          onChange={(date) => handleDateChange(award.id, date)}
                                          showYearPicker
                                          dateFormat="yyyy"
                                        />
                                        <span className="icon">
                                          <i className="fa-regular fa-calendar-days" />
                                        </span>
                                      </div>
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
                                        value={award.description || ""}
                                        onChange={(e) => handleAwardChange(award.id, 'description', e.target.value)}
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-end">
                                <Link
                                  to="#"
                                  className="reset more-item"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    resetAward(award.id);
                                  }}
                                >
                                  Reset
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
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

export default Awards;