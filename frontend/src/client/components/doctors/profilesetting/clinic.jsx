import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../header';
import DoctorFooter from '../../common/doctorFooter';
import DoctorSidebar from '../sidebar';
import SettingsHeader from './settingsHeader';
import { v4 as uuidv4 } from 'uuid';
import apiService from '../../../../config/apiService';

const Clinic = (props) => {
  const history = useHistory();
  const [clinics, setClinics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [profileExists, setProfileExists] = useState(true);

  useEffect(() => {
    loadClinics();
  }, []);

  const loadClinics = async () => {
    try {
      const response = await apiService.get('/doctors/me');
      if (response.data.success && response.data.data) {
        setProfileExists(true);
        if (response.data.data.clinics) {
          setClinics(response.data.data.clinics);
        }
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setProfileExists(false);
        alert('Please complete your basic doctor profile first');
        history.push('/doctor/profile-settings');
      } else {
        console.error('Error loading clinics:', error);
      }
    }
  };

  const addClinic = () => {
    const newClinic = {
      id: uuidv4(),
      clinicName: "",
      location: "",
      address: "",
      logo: null,
      gallery: [],
      isNew: true
    };
    setClinics([...clinics, newClinic]);
  };

  const deleteClinic = (id) => {
    if (window.confirm('Are you sure you want to delete this clinic?')) {
      setClinics(clinics.filter((clinic) => clinic.id !== id));
    }
  };

  const handleClinicChange = (id, field, value) => {
    setClinics(clinics.map((clinic) => {
      if (clinic.id === id) {
        return { ...clinic, [field]: value };
      }
      return clinic;
    }));
  };

  const handleLogoUpload = (id, event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file size (4MB limit)
      if (file.size > 4 * 1024 * 1024) {
        alert('File size should be less than 4MB');
        return;
      }

      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
      if (!validTypes.includes(file.type)) {
        alert('Only JPG, PNG, and SVG formats are allowed');
        return;
      }

      // Create preview URL (in production, upload to server)
      const logoUrl = URL.createObjectURL(file);
      handleClinicChange(id, 'logo', logoUrl);

      // TODO: Implement actual file upload
      // uploadImageToServer(file).then(url => {
      //   handleClinicChange(id, 'logo', url);
      // });
    }
  };

  const handleGalleryUpload = (id, event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      // Validate each file
      const validFiles = files.filter(file => {
        if (file.size > 4 * 1024 * 1024) {
          alert(`${file.name} is too large. Maximum size is 4MB`);
          return false;
        }
        const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
        if (!validTypes.includes(file.type)) {
          alert(`${file.name} has invalid format. Only JPG, PNG, SVG allowed`);
          return false;
        }
        return true;
      });

      if (validFiles.length > 0) {
        // Create preview URLs (in production, upload to server)
        const galleryUrls = validFiles.map(file => URL.createObjectURL(file));
        const clinic = clinics.find(c => c.id === id);
        const updatedGallery = [...(clinic.gallery || []), ...galleryUrls];
        handleClinicChange(id, 'gallery', updatedGallery);

        // TODO: Implement actual file upload
        // uploadMultipleImagesToServer(validFiles).then(urls => {
        //   const clinic = clinics.find(c => c.id === id);
        //   const updatedGallery = [...(clinic.gallery || []), ...urls];
        //   handleClinicChange(id, 'gallery', updatedGallery);
        // });
      }
    }
  };

  const removeGalleryImage = (clinicId, imageUrl) => {
    if (window.confirm('Remove this image?')) {
      const clinic = clinics.find(c => c.id === clinicId);
      const updatedGallery = clinic.gallery.filter(img => img !== imageUrl);
      handleClinicChange(clinicId, 'gallery', updatedGallery);
    }
  };

  const removeLogo = (id) => {
    handleClinicChange(id, 'logo', null);
  };

  const resetClinic = (id) => {
    const clinic = clinics.find(c => c.id === id);
    if (clinic && clinic.isNew) {
      deleteClinic(id);
    } else {
      if (window.confirm('Reset this clinic to original state?')) {
        loadClinics();
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

    // Validate clinics
    const invalidClinics = clinics.filter(
      clinic => !clinic.clinicName || !clinic.location || !clinic.address
    );

    if (invalidClinics.length > 0) {
      setErrors({
        submit: 'Please fill all required fields for each clinic'
      });
      setLoading(false);
      return;
    }

    try {
      // Get current profile
      const profileResponse = await apiService.get('/doctors/me');
      const currentProfile = profileResponse.data.data;

      // Remove isNew flag before sending
      const cleanedClinics = clinics.map(({ isNew, ...clinic }) => clinic);

      // Update profile with clinics
      const updatePayload = {
        ...currentProfile,
        clinics: cleanedClinics
      };

      const response = await apiService.put('/doctors/me', updatePayload);

      if (response.data.success) {
        alert('Clinics saved successfully!');
        loadClinics();
      }
    } catch (error) {
      console.error('Error saving clinics:', error);
      setErrors({
        submit: error.response?.data?.message || 'Failed to save clinics'
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
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Doctor Profile</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="alert alert-warning text-center mt-5">
              <h4>Profile Not Found</h4>
              <p>Please complete your basic doctor profile first before adding clinics.</p>
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

      {/* Breadcrumb */}
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
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="content doctor-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorSidebar />
              {/* /Profile Sidebar */}
            </div>

            <div className="col-lg-8 col-xl-9">
              {/* Profile Settings */}
              <div className="dashboard-header">
                <h3>Profile Settings</h3>
              </div>

              {/* Settings List */}
              <SettingsHeader />
              {/* /Settings List */}

              <div className="dashboard-header border-0 mb-0">
                <h3>Clinics</h3>
                <ul>
                  <li>
                    <Link
                      to="#"
                      className="btn btn-primary prime-btn add-clinics"
                      onClick={(e) => {
                        e.preventDefault();
                        addClinic();
                      }}
                    >
                      Add New Clinic
                    </Link>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="accordions clinic-infos" id="list-accord">
                  {clinics.length === 0 ? (
                    <div className="alert alert-info">
                      No clinics added yet. Click "Add New Clinic" to get started.
                    </div>
                  ) : (
                    clinics.map((clinic, index) => (
                      <div className="user-accordion-item" key={clinic.id}>
                        <Link
                          to="#"
                          className={`accordion-wrap ${index !== 0 ? 'collapsed' : ''}`}
                          data-bs-toggle="collapse"
                          data-bs-target={`#clinic${clinic.id}`}
                        >
                          {clinic.clinicName || `Clinic ${index + 1}`}
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              deleteClinic(clinic.id);
                            }}
                          >
                            Delete
                          </span>
                        </Link>
                        <div
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          id={`clinic${clinic.id}`}
                          data-bs-parent="#list-accord"
                        >
                          <div className="content-collapse">
                            <div className="add-service-info">
                              <div className="add-info">
                                <div className="row align-items-center">
                                  {/* Logo Upload */}
                                  <div className="col-md-12">
                                    <div className="form-wrap mb-2">
                                      <div className="change-avatar img-upload">
                                        <div className="profile-img">
                                          {clinic.logo ? (
                                            <img
                                              src={clinic.logo}
                                              alt="Logo"
                                              style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                borderRadius: '8px'
                                              }}
                                            />
                                          ) : (
                                            <i className="fa-solid fa-file-image" />
                                          )}
                                        </div>
                                        <div className="upload-img">
                                          <h5>Logo</h5>
                                          <div className="imgs-load d-flex align-items-center">
                                            <div className="change-photo">
                                              Upload New
                                              <input
                                                type="file"
                                                className="upload"
                                                accept="image/jpeg,image/png,image/svg+xml"
                                                onChange={(e) => handleLogoUpload(clinic.id, e)}
                                              />
                                            </div>
                                            <Link
                                              to="#"
                                              className="upload-remove"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                removeLogo(clinic.id);
                                              }}
                                            >
                                              Remove
                                            </Link>
                                          </div>
                                          <p className="form-text">
                                            Your Image should be below 4 MB, Accepted formats: JPG, PNG, SVG
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Clinic Name */}
                                  <div className="col-md-12">
                                    <div className="form-wrap">
                                      <label className="col-form-label">
                                        Clinic Name <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={clinic.clinicName || ""}
                                        onChange={(e) => handleClinicChange(clinic.id, 'clinicName', e.target.value)}
                                        placeholder="Enter clinic name"
                                        required
                                      />
                                    </div>
                                  </div>

                                  {/* Location */}
                                  <div className="col-md-6">
                                    <div className="form-wrap">
                                      <label className="col-form-label">
                                        Location <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={clinic.location || ""}
                                        onChange={(e) => handleClinicChange(clinic.id, 'location', e.target.value)}
                                        placeholder="City, State"
                                        required
                                      />
                                    </div>
                                  </div>

                                  {/* Address */}
                                  <div className="col-md-6">
                                    <div className="form-wrap">
                                      <label className="col-form-label">
                                        Address <span className="text-danger">*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        value={clinic.address || ""}
                                        onChange={(e) => handleClinicChange(clinic.id, 'address', e.target.value)}
                                        placeholder="Street address"
                                        required
                                      />
                                    </div>
                                  </div>

                                  {/* Gallery Upload */}
                                  <div className="col-md-12">
                                    <div className="form-wrap">
                                      <label className="col-form-label">Gallery</label>
                                      <div className="drop-file">
                                        <p>Drop files or Click to upload</p>
                                        <input
                                          type="file"
                                          multiple
                                          accept="image/jpeg,image/png,image/svg+xml"
                                          onChange={(e) => handleGalleryUpload(clinic.id, e)}
                                        />
                                      </div>
                                      {clinic.gallery && clinic.gallery.length > 0 && (
                                        <div className="view-imgs">
                                          {clinic.gallery.map((image, imgIndex) => (
                                            <div className="view-img" key={imgIndex}>
                                              <img src={image} alt={`Gallery ${imgIndex + 1}`} />
                                              <Link
                                                to="#"
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  removeGalleryImage(clinic.id, image);
                                                }}
                                              >
                                                Remove
                                              </Link>
                                            </div>
                                          ))}
                                        </div>
                                      )}
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
                                    resetClinic(clinic.id);
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
              {/* /Profile Settings */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}

      <DoctorFooter />
    </div>
  );
};

export default Clinic;