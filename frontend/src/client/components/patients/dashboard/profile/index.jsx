import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import Footer from "../../../footer.jsx";
import Header from "../../../header.jsx";
import { DatePicker } from "antd";
import Select from "react-select";
import ImageWithBasePath from "../../../../../core/img/imagewithbasebath.jsx";
import apiService from "../../../../../config/apiService";
import dayjs from "dayjs";

const Profile = (props) => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [profileExists, setProfileExists] = useState(false);

  const [formData, setFormData] = useState({
    // User data
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    profileImage: "",

    // Patient specific data
    dateOfBirth: null,
    gender: "",
    bloodGroup: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    allergies: [],
    chronicConditions: [],
    currentMedications: [],
    insuranceProvider: "",
    insurancePolicyNumber: ""
  });

  const [profileImageFile, setProfileImageFile] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState("");

  const BloodGroup = [
    { value: "", label: "Select Blood Group" },
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" }
  ];

  const GenderOptions = [
    { value: "", label: "Select Gender" },
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" },
    { value: "OTHER", label: "Other" }
  ];

  useEffect(() => {
    fetchUserAndPatientData();
  }, []);

  const fetchUserAndPatientData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const userStr = localStorage.getItem("user");

      if (!token || !userStr) {
        setError("Please login to continue");
        return;
      }

      const user = JSON.parse(userStr);

      // Set user data
      setFormData(prev => ({
        ...prev,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        profileImage: user.profileImage || ""
      }));

      if (user.profileImage) {
        setProfileImagePreview(user.profileImage);
      }

      // Fetch patient profile
      try {
        const response = await apiService.get("/patients/me");

        if (response.data.success && response.data.data) {
          const patientData = response.data.data;
          setProfileExists(true);

          setFormData(prev => ({
            ...prev,
            dateOfBirth: patientData.dateOfBirth,
            gender: patientData.gender || "",
            bloodGroup: patientData.bloodGroup || "",
            address: patientData.address || "",
            city: patientData.city || "",
            state: patientData.state || "",
            country: patientData.country || "",
            zipCode: patientData.zipCode || "",
            emergencyContactName: patientData.emergencyContactName || "",
            emergencyContactNumber: patientData.emergencyContactNumber || "",
            allergies: patientData.allergies || [],
            chronicConditions: patientData.chronicConditions || [],
            currentMedications: patientData.currentMedications || [],
            insuranceProvider: patientData.insuranceProvider || "",
            insurancePolicyNumber: patientData.insurancePolicyNumber || ""
          }));
        }
      } catch (err) {
        if (err.response?.status === 404) {
          setProfileExists(false);
        } else {
          console.error("Error fetching patient profile:", err);
        }
      }
    } catch (err) {
      setError("Failed to load profile data");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, selectedOption) => {
    setFormData(prev => ({
      ...prev,
      [name]: selectedOption?.value || ""
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      dateOfBirth: date ? dayjs(date).format("YYYY-MM-DD") : null
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        setError("Image size should be less than 4MB");
        return;
      }

      setProfileImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImageFile(null);
    setProfileImagePreview("");
    setFormData(prev => ({
      ...prev,
      profileImage: ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setSubmitting(true);

    try {
      // Prepare patient data
      const patientData = {
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        bloodGroup: formData.bloodGroup,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zipCode: formData.zipCode,
        emergencyContactName: formData.emergencyContactName,
        emergencyContactNumber: formData.emergencyContactNumber,
        allergies: formData.allergies,
        chronicConditions: formData.chronicConditions,
        currentMedications: formData.currentMedications,
        insuranceProvider: formData.insuranceProvider,
        insurancePolicyNumber: formData.insurancePolicyNumber
      };

      let response;
      if (profileExists) {
        response = await apiService.put("/patients/me", patientData);
      } else {
        response = await apiService.post("/patients/me", patientData);
        setProfileExists(true);
      }

      if (response.data.success) {
        setSuccess("Profile updated successfully!");

        // Update user data in localStorage
        const userStr = localStorage.getItem("user");
        if (userStr) {
          const user = JSON.parse(userStr);
          user.firstName = formData.firstName;
          user.lastName = formData.lastName;
          user.phoneNumber = formData.phoneNumber;
          localStorage.setItem("user", JSON.stringify(user));
        }

        setTimeout(() => setSuccess(""), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile");
      console.error("Error updating profile:", err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div>
        <Header {...props} />
        <div className="content">
          <div className="container">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <Footer {...props} />
      </div>
    );
  }

  return (
    <div>
      <Header {...props} />

      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">
                      <i className="isax isax-home-15" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Patient
                  </li>
                  <li className="breadcrumb-item active">Settings</li>
                </ol>
                <h2 className="breadcrumb-title">Settings</h2>
              </nav>
            </div>
          </div>
        </div>
        <div className="breadcrumb-bg">
          <ImageWithBasePath
            src="assets/img/bg/breadcrumb-bg-01.png"
            alt="img"
            className="breadcrumb-bg-01"
          />
          <ImageWithBasePath
            src="assets/img/bg/breadcrumb-bg-02.png"
            alt="img"
            className="breadcrumb-bg-02"
          />
          <ImageWithBasePath
            src="assets/img/bg/breadcrumb-icon.png"
            alt="img"
            className="breadcrumb-bg-03"
          />
          <ImageWithBasePath
            src="assets/img/bg/breadcrumb-icon.png"
            alt="img"
            className="breadcrumb-bg-04"
          />
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-lg-8 col-xl-9">
              <nav className="settings-tab mb-1">
                <ul className="nav nav-tabs-bottom" role="tablist">
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link active" to='/patient/profile'>
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link" to="/patient/change-password">
                      Change Password
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link" to="/patient/two-factor-authentication">
                      2 Factor Authentication
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link className="nav-link" to="/patient/delete-account">
                      Delete Account
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="card">
                <div className="card-body">
                  <div className="border-bottom pb-3 mb-3">
                    <h5>Profile Settings</h5>
                  </div>

                  {error && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      {error}
                      <button type="button" className="btn-close" onClick={() => setError("")} />
                    </div>
                  )}

                  {success && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      {success}
                      <button type="button" className="btn-close" onClick={() => setSuccess("")} />
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="setting-card">
                      <label className="form-label mb-2">Profile Photo</label>
                      <div className="change-avatar img-upload">
                        <div className="profile-img">
                          {profileImagePreview ? (
                            <img src={profileImagePreview} alt="Profile" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px" }} />
                          ) : (
                            <i className="fa-solid fa-file-image" />
                          )}
                        </div>
                        <div className="upload-img">
                          <div className="imgs-load d-flex align-items-center">
                            <div className="change-photo">
                              Upload New
                              <input type="file" className="upload" accept="image/*" onChange={handleImageChange} />
                            </div>
                            <Link to="#" className="upload-remove" onClick={handleRemoveImage}>
                              Remove
                            </Link>
                          </div>
                          <p>Your Image should Below 4 MB, Accepted format jpg, png, svg</p>
                        </div>
                      </div>
                    </div>

                    <div className="setting-title">
                      <h6>Personal Information</h6>
                    </div>
                    <div className="setting-card">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Date of Birth <span className="text-danger">*</span>
                            </label>
                            <div className="form-icon">
                              <DatePicker
                                className="form-control datetimepicker"
                                placeholder="dd/mm/yyyy"
                                value={formData.dateOfBirth ? dayjs(formData.dateOfBirth) : null}
                                onChange={handleDateChange}
                                format="DD/MM/YYYY"
                              />
                              <span className="icon">
                                <i className="isax isax-calendar-1" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Phone Number <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              required
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Email Address <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              disabled
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Gender <span className="text-danger">*</span>
                            </label>
                            <Select
                              className="select"
                              options={GenderOptions}
                              value={GenderOptions.find(opt => opt.value === formData.gender)}
                              onChange={(opt) => handleSelectChange("gender", opt)}
                              placeholder="Select Gender"
                              isClearable={true}
                              isSearchable={false}
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Blood Group
                            </label>
                            <Select
                              className="select"
                              options={BloodGroup}
                              value={BloodGroup.find(opt => opt.value === formData.bloodGroup)}
                              onChange={(opt) => handleSelectChange("bloodGroup", opt)}
                              placeholder="Select Blood Group"
                              isClearable={true}
                              isSearchable={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="setting-title">
                      <h6>Address</h6>
                    </div>
                    <div className="setting-card">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">City</label>
                            <input
                              type="text"
                              className="form-control"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">State</label>
                            <input
                              type="text"
                              className="form-control"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Country</label>
                            <input
                              type="text"
                              className="form-control"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Pincode</label>
                            <input
                              type="text"
                              className="form-control"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="setting-title">
                      <h6>Emergency Contact</h6>
                    </div>
                    <div className="setting-card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Contact Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="emergencyContactName"
                              value={formData.emergencyContactName}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Contact Number</label>
                            <input
                              type="text"
                              className="form-control"
                              name="emergencyContactNumber"
                              value={formData.emergencyContactNumber}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="setting-title">
                      <h6>Insurance Information</h6>
                    </div>
                    <div className="setting-card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Insurance Provider</label>
                            <input
                              type="text"
                              className="form-control"
                              name="insuranceProvider"
                              value={formData.insuranceProvider}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Policy Number</label>
                            <input
                              type="text"
                              className="form-control"
                              name="insurancePolicyNumber"
                              value={formData.insurancePolicyNumber}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="modal-btn text-end">
                      <Link to="/patient/dashboard" className="btn btn-md btn-light rounded-pill">
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-md btn-primary-gradient rounded-pill"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" />
                            Saving...
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </div>
  );
};

export default Profile;