import React, { useState } from "react";
// import Header from "../../header";
import { Link } from "react-router-dom";
import { googleicon, shape01, shape02 } from "./img";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
const LoginPhone = () => {


  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const [value, setValue] = useState(undefined);

  return (
    <>
      {/* <Header {...props} /> */}

      <>
        {/* Page Content */}
        <div className="login-content-info">
          <div className="container">
            {/* Login Phone */}
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="account-content">
                  <div className="account-info">
                    <div className="login-title">
                      <h3>Sign in</h3>
                      <p>We'll send a confirmation code to your Phone.</p>
                      <span>
                        Sign in with <Link to="/pages/login-email">Email</Link>
                      </span>
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
                        <div className="form-group-flex">
                          <label className="form-label">Password</label>
                          <Link to="/pages/forgot-password" className="forgot-link">
                            Forgot password?
                          </Link>
                        </div>
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
                      <div className="mb-3 form-check-box">
                        <div className="form-group-flex">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember"
                              defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="remember">
                              Remember Me
                            </label>
                          </div>
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember1"
                            />
                            <label className="form-check-label" htmlFor="remember1">
                              Login with OTP
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <Link
                          className="btn btn-primary-gradient w-100"
                          to='#'
                        >
                          Sign in
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
                          Don't have an account ? <Link to="/signup">Sign up</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Phone */}
          </div>
        </div>
        {/* /Page Content */}
      </>

    </>
  );
};

export default LoginPhone;
