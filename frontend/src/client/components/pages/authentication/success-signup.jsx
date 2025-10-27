import React from "react";
import Header from "../../header";
import { Link } from "react-router-dom";
import { shape01, shape02 } from "./img";

const SuccessSignup = (props) => {
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
                  <div className="login-verify-img">
                    <i className="isax isax-tick-circle" />
                  </div>
                  <div className="login-title">
                    <h3>Success</h3>
                    <p>Your new password has been Successfully saved</p>
                  </div>
                  <form>
                    <div className="mb-3">
                      <Link
                        className="btn btn-primary-gradient w-100"
                        to='/pages/login-email'
                      >
                        Sign In
                      </Link>
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

export default SuccessSignup;
