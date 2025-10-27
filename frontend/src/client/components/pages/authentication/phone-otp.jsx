/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import { InputOtp } from 'primereact/inputotp';

const MobileOtp = (props) => {

  const [token, setTokens] = useState();

  return (
    <>
      {/* Page Content */}
      <div className="login-content-info">
        <div className="container">
          {/* Login Phone Otp */}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="account-content">
                <div className="account-info">
                  <div className="login-verify-img">
                    <i className="isax isax-mobile" />
                  </div>
                  <div className="login-title">
                    <h3>Phone OTP</h3>
                    <p className="mb-0">
                      OTP sent to your mobile number ending&nbsp;******9575
                    </p>
                  </div>
                  <form
                    method="get"
                    className="digit-group login-form-control"
                    data-group-name="digits"
                    data-autosubmit="false"
                    autoComplete="off"
                  >
                    <div className="otp-box">
                      <div className="mb-3">
                        <InputOtp value={token} onChange={(e) => setTokens(e.value)} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="otp-info">
                        <div className="otp-code">
                          <p>
                            Didn't receive OTP code?{" "}
                            <a href="javascript:void(0);">Resend Code</a>
                          </p>
                        </div>
                        <div className="otp-sec">
                          <p>
                            <i className="isax isax-clock" />
                            00:59 secs
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="reset-btn">
                      <Link to='/doctor/doctor-dashboard'
                        className="btn btn-primary-gradient w-100"
                      >
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Login Phone Otp */}
        </div>
      </div>
      {/* /Page Content */}
    </>

  );
};

export default MobileOtp;
