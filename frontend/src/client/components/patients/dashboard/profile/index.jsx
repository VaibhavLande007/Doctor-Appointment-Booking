import React from "react";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import IMG01 from "../../../../assets/images/patient.jpg";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Footer from "../../../footer.jsx";
import Header from "../../../header.jsx";
import { DatePicker } from "antd";
import Select from "react-select";
import ImageWithBasePath from "../../../../../core/img/imagewithbasebath.jsx";

const Profile = (props) => {

  const BloodGroup = [
    { value: "", label: "Select" },
    { value: "B+ve", label: "B+ve" },
    { value: "AB+ve", label: "AB+ve" },
    { value: "B-ve", label: "B-ve" },
    { value: "O+ve", label: "O+ve" },
    { value: "O-ve", label: "O-ve" },
  ];

  return (
    <div>
      <Header {...props} />
      <>
        {/* Breadcrumb */}
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
        {/* /Breadcrumb */}
      </>


      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-lg-8 col-xl-9">
              <form >
                <>
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
                      <form action="/patient/profile">
                        <div className="setting-card">
                          <label className="form-label mb-2">Profile Photo</label>
                          <div className="change-avatar img-upload">
                            <div className="profile-img">
                              <i className="fa-solid fa-file-image" />
                            </div>
                            <div className="upload-img">
                              <div className="imgs-load d-flex align-items-center">
                                <div className="change-photo">
                                  Upload New
                                  <input type="file" className="upload" />
                                </div>
                                <Link to="#" className="upload-remove">
                                  Remove
                                </Link>
                              </div>
                              <p>Your Image should Below 4 MB, Accepted format jpg,png,svg</p>
                            </div>
                          </div>
                        </div>
                        <div className="setting-title">
                          <h6>Information</h6>
                        </div>
                        <div className="setting-card">
                          <div className="row">
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  First Name <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Last Name <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
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
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Email Address <span className="text-danger">*</span>
                                </label>
                                <input type="email" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Blood Group <span className="text-danger">*</span>
                                </label>
                                <Select
                                  className="select"
                                  options={BloodGroup}
                                  placeholder="Select Gender"
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
                                <label className="form-label">
                                  Address <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  City <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  State <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Country <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Pincode <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-btn text-end">
                          <Link to="#" className="btn btn-md btn-light rounded-pill">
                            Cancel
                          </Link>
                          <button
                            type="submit"
                            className="btn btn-md btn-primary-gradient rounded-pill"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>

              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Profile;
