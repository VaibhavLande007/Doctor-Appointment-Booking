import React, { useState } from "react";
// import Header from "../../header";
import { Link } from "react-router-dom";
import { shape01, shape02 } from "./img";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { signupUnlock, signupUsers } from "../../imagepath";
import "react-phone-input-2/lib/style.css";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const DoctorSignup = () => {
  const [tab, setTab] = useState(true);
  const [value, setValue] = useState(undefined);

  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };



  return (
    <>
      {/* <Header {...props} /> */}
      <>
        {/* Page Content */}
        <div className="login-content-info">
          <div className="container">
            {/* Doctor Signup */}
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6">
                <div className="account-content">
                  <div className="login-shapes">
                    <div className="shape-img-left">
                      <ImageWithBasePath src="assets/img/shape-01.png" alt="shape-image" />
                    </div>
                    <div className="shape-img-right">
                      <ImageWithBasePath src="assets/img/shape-02.png" alt="shape-image" />
                    </div>
                  </div>
                  <div className="widget-set">
                    <div className="account-info">
                      <div className="widget-content multistep-form">
                        <fieldset id="first" className={`${tab === false ? "field-card d-none" : "d-block"}`}>
                          <div className="login-title">
                            <h3>Doctor Signup</h3>
                            <p className="mb-0">
                              Welcome back! Please enter your details.
                            </p>
                          </div>
                          <div className="widget-setcount">
                            <ul id="progressbar">
                              <li className="progress-active">
                                <div className="step-box">
                                  <div className="step-icon">
                                    <span>
                                      <i className="isax isax-user" />
                                    </span>
                                  </div>
                                  <div className="step-content">
                                    <p>Step 1</p>
                                    <h4>Create Account</h4>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="step-box">
                                  <div className="step-icon">
                                    <span>
                                      <i className="isax isax-lock" />
                                    </span>
                                  </div>
                                  <div className="step-content">
                                    <p>Step 2</p>
                                    <h4>Verify Account</h4>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <form action="#">
                            <div className="mb-3">
                              <label className="form-label">Name</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Email</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Phone Number</label>
                              <PhoneInput
                                placeholder="(201) 555-0123"
                                value={value}
                                defaultCountry="US"
                                onChange={setValue} />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Password</label>
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
                          </form>
                          <div className="widget-btn">
                            <Link
                              to="#"
                              className="btn btn-primary btn-block next_btn"
                              onClick={() => setTab(!tab)}
                            >
                              Next
                            </Link>
                          </div>
                        </fieldset>
                        <fieldset className={`${tab === false ? "field-card d-block" : "d-none"}`}>
                          <div className="login-title">
                            <h3>Security Verification</h3>
                            <p className="mb-0">
                              To Secure your Account create complete the following
                              verify request.
                            </p>
                          </div>
                          <div className="widget-setcount">
                            <ul id="progressbar1">
                              <li className="progress-active">
                                <div className="step-box">
                                  <div className="step-icon">
                                    <span>
                                      <i className="isax isax-user" />
                                    </span>
                                  </div>
                                  <div className="step-content">
                                    <h4>Create Account</h4>
                                    <p>Step 1</p>
                                  </div>
                                </div>
                              </li>
                              <li className="progress-active">
                                <div className="step-box">
                                  <div className="step-icon">
                                    <span>
                                      <i className="isax isax-lock" />
                                    </span>
                                  </div>
                                  <div className="step-content">
                                    <h4>Verify Account</h4>
                                    <p>Step 2</p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <form
                            className="signup-verfication-form"
                          >
                            <div className="mb-3">
                              <div className="form-group-flex">
                                <label className="form-label">Phone</label>

                              </div>
                              <div className="pass-group">
                                <PhoneInput
                                  placeholder="(201) 555-0123"
                                  value={value}
                                  defaultCountry="US"
                                  onChange={setValue} />
                              </div>
                              <p className="signup-code">
                                Enter the 6 digit code sent to 98****4578
                              </p>
                            </div>
                            <div className="mb-3">
                              <div className="form-group-flex">
                                <label className="form-label">Email</label>
                                <a href="javascript:void(0);" className="forgot-link">
                                  Get Code
                                </a>
                              </div>
                              <div className="pass-group">
                                <input
                                  type="text"
                                  className="form-control form-control-phone"
                                />
                              </div>
                              <p className="signup-code">
                                Enter the 6 digit code sent to ex****@gmail.com
                              </p>
                            </div>
                            <div className="mb-0">
                              <Link
                                className="btn btn-primary-gradient w-100"
                                to='/success-signup'
                              >
                                Submit
                              </Link>
                            </div>
                          </form>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Signup */}
          </div>
        </div>
        {/* /Page Content */}
      </>

    </>
  );
};

export default DoctorSignup;
