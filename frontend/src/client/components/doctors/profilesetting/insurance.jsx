import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DoctorSidebar from '../sidebar';
import SettingsHeader from './settingsHeader';
import Header from '../../header';
import DoctorFooter from '../../common/doctorFooter';
import apiService from '../../../../config/apiService';
import { v4 as uuidv4 } from 'uuid';

const InsuranceSettings = (props) => {
  const [insurances, setInsurances] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    loadInsurances();
  }, []);

  const loadInsurances = async () => {
    try {
      const response = await apiService.get('/doctors/me');
      if (response.data.success && response.data.data.insurances) {
        setInsurances(response.data.data.insurances.map(insurance => ({
          ...insurance,
          isExpanded: false
        })));
      }
    } catch (error) {
      console.error('Error loading insurances:', error);
    }
  };

  const addInsurance = () => {
    const newInsurance = {
      id: uuidv4(),
      name: "",
      logoUrl: "",
      isExpanded: true,
    };
    setInsurances([...insurances, newInsurance]);
  };

  const deleteInsurance = (id) => {
    setInsurances(insurances.filter((insurance) => insurance.id !== id));
  };

  const toggleExpand = (id) => {
    setInsurances(insurances.map((insurance) =>
      insurance.id === id ? { ...insurance, isExpanded: !insurance.isExpanded } : insurance
    ));
  };

  const handleChange = (id, field, value) => {
    setInsurances(insurances.map((insurance) =>
      insurance.id === id ? { ...insurance, [field]: value } : insurance
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const profileResponse = await apiService.get('/doctors/me');
      const currentProfile = profileResponse.data.data;

      const formattedInsurances = insurances.map(insurance => ({
        id: insurance.id,
        name: insurance.name,
        logoUrl: insurance.logoUrl
      }));

      const updatePayload = {
        ...currentProfile,
        insurances: formattedInsurances
      };

      const response = await apiService.put('/doctors/me', updatePayload);

      if (response.data.success) {
        alert('Insurance information saved successfully!');
        loadInsurances();
      }
    } catch (error) {
      console.error('Error saving insurances:', error);
      setErrors({
        submit: error.response?.data?.message || 'Failed to save insurance information'
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
                <h3>Insurance</h3>
                <ul>
                  <li>
                    <Link
                      to="#"
                      className="btn btn-primary prime-btn add-insurance"
                      onClick={addInsurance}
                    >
                      Add New Insurance
                    </Link>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="accordions insurance-infos" id="list-accord">
                  {insurances.map((insurance) => (
                    <div className="user-accordion-item" key={insurance.id}>
                      <Link
                        to="#"
                        className={insurance.isExpanded ? "accordion-wrap" : "collapsed accordion-wrap"}
                        data-bs-toggle="collapse"
                        data-bs-target={`#insurance${insurance.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleExpand(insurance.id);
                        }}
                      >
                        {insurance.name || "Insurance"}
                        <span onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          deleteInsurance(insurance.id);
                        }}>Delete</span>
                      </Link>

                      <div
                        className={`accordion-collapse collapse ${insurance.isExpanded ? 'show' : ''}`}
                        id={`insurance${insurance.id}`}
                        data-bs-parent="#list-accord"
                      >
                        <div className="content-collapse">
                          <div className="add-service-info">
                            <div className="add-info">
                              <div className="row align-items-center">
                                <div className="col-md-12">
                                  <div className="form-wrap mb-2">
                                    <div className="change-avatar img-upload">
                                      <div className="profile-img">
                                        <i className="fa-solid fa-file-image" />
                                      </div>
                                      <div className="upload-img">
                                        <h5>Logo</h5>
                                        <div className="imgs-load d-flex align-items-center">
                                          <div className="change-photo">
                                            Upload New
                                            <input type="file" className="upload" />
                                          </div>
                                          <Link to="#" className="upload-remove">
                                            Remove
                                          </Link>
                                        </div>
                                        <p className="form-text">
                                          Your Image should Below 4 MB, Accepted format Jpg,Png,Svg
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-wrap">
                                    <label className="col-form-label">
                                      Insurance Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={insurance.name}
                                      onChange={(e) => handleChange(insurance.id, 'name', e.target.value)}
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
                                  handleChange(insurance.id, 'name', '');
                                  handleChange(insurance.id, 'logoUrl', '');
                                }}
                              >
                                Reset
                              </Link>
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
                    className="btn btn-primary prime-btn"
                    type="submit"
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

      <DoctorFooter {...props} />
    </div>
  );
};

export default InsuranceSettings;