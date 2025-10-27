import React from "react";
// import Header from "../../header";
import { Link } from "react-router-dom";
import { googleicon, shape01, shape02 } from "./img";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import AuthenticationHeader from "../../authiticationHeader";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const LoginPhoneOtp = () => {
  const config = "/react/template";
  return (
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
                      <input
                        className="form-control form-control-lg group_formcontrol"
                        id="phone"
                        name="phone"
                        type="text"
                      />
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
                      <Link to='/pages/motp'
                        className="btn btn-primary-gradient w-100"
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
                        Don't have an account ? <Link to="/register">Sign up</Link>
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

  );
};

export default LoginPhoneOtp;
