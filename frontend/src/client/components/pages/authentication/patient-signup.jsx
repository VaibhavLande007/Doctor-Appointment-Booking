import React, { useState } from "react";
// import Header from "../../header";
import { Link } from "react-router-dom";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import "react-phone-input-2/lib/style.css";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const PatientSignup = () => {

  const [value, setValue] = useState(undefined);

  const config = "/react/template";
  return (
    <>
      {/* Page Content */}
      <div className="login-content-info">
        <div className="container">
          {/* Patient Signup */}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="account-content">
                <div className="account-info">
                  <div className="login-title">
                    <h3>Patient Signup</h3>
                    <p className="mb-0">
                      Enter your credentials &amp; create your account
                    </p>
                  </div>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Phone</label>
                      <PhoneInput
                        placeholder="(201) 555-0123"
                        value={value}
                        defaultCountry="US"
                        onChange={setValue} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3 form-check-box terms-check-box">
                      <div className="form-group-flex">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember"
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="remember">
                            I have read and agree to Doccure’s{" "}
                            <Link to="/pages/terms-condition">Terms of Service</Link> and{" "}
                            <Link to="/pages/privacy-policy">Privacy Policy.</Link>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <Link to='/success-signup'
                        className="btn btn-primary-gradient btn-xl w-100"
                      >
                        Register Now
                      </Link>
                    </div>
                    <div className="mb-3">
                      <Link to='/success-signup' className="btn btn-light btn-xl w-100">
                        Create an Account
                      </Link>
                    </div>
                    <div className="login-or">
                      <span className="or-line" />
                      <span className="span-or">or</span>
                    </div>
                    <div className="social-login-btn">
                      <Link to="#" className="btn w-100">
                        <ImageWithBasePath
                          src="assets/img/icons/google-icon.svg"
                          alt="google-icon"
                        />
                        Sign in With Google
                      </Link>
                      <Link to="#" className="btn w-100">
                        <ImageWithBasePath
                          src="assets/img/icons/facebook-icon.svg"
                          alt="fb-icon"
                        />
                        Sign in With Facebook
                      </Link>
                    </div>
                    <div className="account-signup">
                      <p>
                        Already have account? <Link to="/pages/login-email">Sign In</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Patient Signup */}
        </div>
      </div>
      {/* /Page Content */}
    </>

  );
};

export default PatientSignup;
