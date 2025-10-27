import React, { useState } from "react";
import Header from "../../header";
import DoctorSidebar from "../sidebar/index";
import DoctorFooter from "../../common/doctorFooter";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Password = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const toggleConfirmPassword = () => {
    setConfirmPassword(!showConfirmPassword);
  }
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
                      <a href="/home">
                        <i className="isax isax-home-15" />
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Doctor
                    </li>
                    <li className="breadcrumb-item active">Change Password</li>
                  </ol>
                  <h2 className="breadcrumb-title">Change Password</h2>
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
              <div className="dashboard-header">
                <h3>Change Password</h3>
              </div>
              <form>
                <div className="card pass-card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-block input-block-new">
                          <label className="form-label">Old Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="input-block input-block-new">
                          <label className="form-label">New Password</label>
                          <div className="pass-group">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="form-control pass-input"
                            />
                            <span
                              className={`feather-eye${showPassword ? "" : "-off"} toggle-password`}
                              onClick={togglePasswordVisibility}
                            />
                          </div>
                        </div>
                        <div className="input-block input-block-new mb-0">
                          <label className="form-label">Confirm Password</label>
                          <div className="pass-group">
                            <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              className="form-control pass-input-sub"
                            />

                            <span
                              className={`feather-eye${showConfirmPassword ? "" : "-off"} toggle-password`}
                              onClick={toggleConfirmPassword}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-set-button">
                  <button className="btn btn-light" type="button">
                    Cancel
                  </button>
                  <Link className="btn btn-primary" to="#">
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <DoctorFooter />
    </div>
  );
};

export default Password;
