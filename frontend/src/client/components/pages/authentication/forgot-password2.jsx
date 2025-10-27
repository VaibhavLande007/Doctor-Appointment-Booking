import React from "react";
import { Link } from "react-router-dom";
// import Header from "../../header";
// import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { shape01, shape02 } from "./img";
// import config from "config";
import AuthenticationHeader from "../../authiticationHeader";

const ForgotPassword2 = () => {
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
                    <h3>Forgot Password</h3>
                    <p>
                      Enter your email and we will send you a link to reset your
                      password.
                    </p>
                  </div>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input className="form-control" type="email" />
                    </div>
                    <div className="mb-3">
                      <Link to='/pages/login-email'
                        className="btn btn-primary-gradient w-100"

                      >
                        Submit
                      </Link>
                    </div>
                    <div className="account-signup">
                      <p>
                        Remember Password? <Link to="/pages/login-email">Sign In</Link>
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

export default ForgotPassword2;
