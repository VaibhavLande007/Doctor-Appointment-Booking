import React from "react";
import Header from "../../header";
import { Link } from "react-router-dom";
import { shape01, shape02 } from "./img";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import {
  doctorIcon,
  flag01,
  flag02,
  flag03,
  flag05,
  logo,
  patientIcon,
} from "../../imagepath";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Signup = (props) => {
  return (
    <>
      {/* Page Content */}
      <div className="login-content-info">
        <div className="container">
          {/* Signup */}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="account-content">
                <div className="account-info">
                  <div className="login-title">
                    <h3>Signup</h3>
                  </div>
                  <div className="signup-option-btns">
                    <Link to="/pages/doctor-signup" className="signup-btn-info">
                      <div className="signup-info">
                        <div className="signup-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/doctor-icon.svg"
                            alt="doctor-icon"
                          />
                        </div>
                        <div className="signup-content">
                          <h4>Doctor</h4>
                          <p>Join Doccure and Expand Your Practice</p>
                        </div>
                      </div>
                      <div className="signup-arrow">
                        <i className="isax isax-arrow-right-1" />
                      </div>
                    </Link>
                    <Link to="/pages/patient-signup" className="signup-btn-info">
                      <div className="signup-info">
                        <div className="signup-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/patient-icon.svg"
                            alt="patient-icon"
                          />
                        </div>
                        <div className="signup-content">
                          <h4>Patient</h4>
                          <p>Join Doccure and Take Control of Your Health</p>
                        </div>
                      </div>
                      <div className="signup-arrow">
                        <i className="isax isax-arrow-right-1" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Signup */}
        </div>
      </div>
      {/* /Page Content */}
    </>

  );
};

export default Signup;
