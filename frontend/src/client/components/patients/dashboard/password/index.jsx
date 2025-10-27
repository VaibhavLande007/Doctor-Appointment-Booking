import React, { useState } from "react";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import Footer from "../../../footer";
import { Link } from "react-router-dom";
import Header from "../../../header.jsx";
import ImageWithBasePath from "../../../../../core/img/imagewithbasebath.jsx";

const Password = (props) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  const [isPasswordVisiblenew, setPasswordVisibilitynew] = useState(false);

  const togglePasswordVisibilitynew = () => {
    setPasswordVisibilitynew(!isPasswordVisiblenew);
  };
  const [isPasswordVisibleconfirm, setPasswordVisibilityconfirm] = useState(false);

  const togglePasswordVisibilityconfirm = () => {
    setPasswordVisibilityconfirm(!isPasswordVisibleconfirm);
  };

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>Change Password</h3>
              </div>
              <>
                <nav className="settings-tab mb-1">
                  <ul className="nav nav-tabs-bottom" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link className="nav-link" to='/patient/profile'>
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link className="nav-link active" to="/patient/change-password">
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
                      <h5>Change Password</h5>
                    </div>
                    <form action="/patient/change-password">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Current Password <span className="text-danger">*</span>
                            </label>
                            <div className="pass-group">
                              <input
                                type={isPasswordVisible ? "text" : "password"}
                                className="form-control pass-input-sub"
                              />
                              <span
                                className={`feather toggle-password-sub ${isPasswordVisible ? "feather-eye" : "feather-eye-off"
                                  }`}
                                onClick={togglePasswordVisibility}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              New Password <span className="text-danger">*</span>
                            </label>
                            <div className="pass-group">
                              <input
                                type={isPasswordVisiblenew ? "text" : "password"}
                                className="form-control pass-input-sub"
                              />
                              <span
                                className={`feather toggle-password-sub ${isPasswordVisiblenew ? "feather-eye" : "feather-eye-off"
                                  }`}
                                onClick={togglePasswordVisibilitynew}
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Confirm Password <span className="text-danger">*</span>
                            </label>
                            <div className="pass-group">
                              <input
                                type={isPasswordVisibleconfirm ? "text" : "password"}
                                className="form-control pass-input-sub"
                              />
                              <span
                                className={`feather toggle-password-sub ${isPasswordVisibleconfirm ? "feather-eye" : "feather-eye-off"
                                  }`}
                                onClick={togglePasswordVisibilityconfirm}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-btn border-top pt-3 text-end">
                        <Link to="#" className="btn btn-md btn-light rounded-pill">
                          Cancel
                        </Link>
                        <Link to-='#'
                          className="btn btn-md btn-primary-gradient rounded-pill"
                        >
                          Save Changes
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Password;
