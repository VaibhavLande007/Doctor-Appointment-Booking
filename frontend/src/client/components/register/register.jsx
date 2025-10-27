import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";
import apiService from "../../../config/apiService";

const Register = (props) => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";

    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[-\s]/g, ""))) newErrors.phoneNumber = "Phone number must be 10 digits";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";

    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      // Step 1: Register the user
      const registerData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role: "PATIENT",
      };

      const registerResponse = await apiService.post("/auth/register", registerData);

      if (registerResponse.data.success) {
        // Step 2: Automatically log in the user
        const loginData = {
          email: formData.email,
          password: formData.password,
        };

        const loginResponse = await apiService.post("/auth/login", loginData);

        if (loginResponse.data.success) {
          const token = loginResponse.data.data.token;
          const user = loginResponse.data.data.user;

          // Store authentication data
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          // Set authorization header for future requests
          apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          // Check for return URL
          const returnUrl = localStorage.getItem('returnUrl');
          if (returnUrl) {
            localStorage.removeItem('returnUrl');
            history.push(returnUrl);
          } else {
            // Redirect to patient registration page if no return URL
            history.push("/patient/patientregisterstep-1");
          }
        }
      }
    } catch (error) {
      setErrors({
        submit: error.response?.data?.message || "Registration failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header {...props} />

      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src={loginBanner} className="img-fluid" alt="Login Banner" />
                  </div>

                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Patient Register{" "}
                        <Link to="/doctor/doctor-register">Are you a Doctor?</Link>
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={`form-control floating ${formData.firstName ? "filled" : ""} ${errors.firstName ? "is-invalid" : ""}`}
                            />
                            <label className="focus-label">First Name</label>
                            {errors.firstName && <div className="invalid-feedback d-block">{errors.firstName}</div>}
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className={`form-control floating ${formData.lastName ? "filled" : ""} ${errors.lastName ? "is-invalid" : ""}`}
                            />
                            <label className="focus-label">Last Name</label>
                            {errors.lastName && <div className="invalid-feedback d-block">{errors.lastName}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="form-group form-focus">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-control floating ${formData.email ? "filled" : ""} ${errors.email ? "is-invalid" : ""}`}
                        />
                        <label className="focus-label">Email</label>
                        {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                      </div>

                      <div className="form-group form-focus">
                        <input
                          type="text"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={`form-control floating ${formData.phoneNumber ? "filled" : ""} ${errors.phoneNumber ? "is-invalid" : ""}`}
                        />
                        <label className="focus-label">Mobile Number</label>
                        {errors.phoneNumber && <div className="invalid-feedback d-block">{errors.phoneNumber}</div>}
                      </div>

                      <div className="form-group form-focus">
                        <div className="position-relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`form-control floating ${formData.password ? "filled" : ""} ${errors.password ? "is-invalid" : ""}`}
                          />
                          <label className="focus-label">Create Password</label>
                          <button
                            type="button"
                            className="btn btn-link position-absolute"
                            style={{ right: "10px", top: "8px", padding: "0" }}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`} />
                          </button>
                        </div>
                        {errors.password && <div className="invalid-feedback d-block">{errors.password}</div>}
                      </div>

                      <div className="form-group form-focus">
                        <div className="position-relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`form-control floating ${formData.confirmPassword ? "filled" : ""} ${errors.confirmPassword ? "is-invalid" : ""}`}
                          />
                          <label className="focus-label">Confirm Password</label>
                          <button
                            type="button"
                            className="btn btn-link position-absolute"
                            style={{ right: "10px", top: "8px", padding: "0" }}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            <i className={`fa ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`} />
                          </button>
                        </div>
                        {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                      </div>

                      {errors.submit && <div className="alert alert-danger" role="alert">{errors.submit}</div>}

                      <div className="text-end mb-3">
                        <Link className="forgot-link" to="/login">Already have an account?</Link>
                      </div>

                      <button className="btn btn-primary w-100 btn-lg login-btn" type="submit" disabled={loading}>
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                            Registering...
                          </>
                        ) : (
                          "Signup"
                        )}
                      </button>

                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>

                      <div className="row form-row social-login">
                        <div className="col-6">
                          <button type="button" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> Login
                          </button>
                        </div>
                        <div className="col-6">
                          <button type="button" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> Login
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </>
  );
};

export default Register;