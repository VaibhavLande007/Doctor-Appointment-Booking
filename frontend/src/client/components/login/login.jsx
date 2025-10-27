import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import apiService from "../../../config/apiService";

const LoginContainer = (props) => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, []);

  // Load remembered email if exists
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setFormData((prev) => ({
        ...prev,
        email: savedEmail,
      }));
      setRememberMe(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (serverError) {
      setServerError("");
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      const response = await apiService.post("/auth/login", loginData);

      if (response.data.success) {
        // Store authentication token
        localStorage.setItem("token", response.data.data.token);

        // Store user information
        localStorage.setItem("user", JSON.stringify(response.data.data.user));

        // Store email if remember me is checked
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", formData.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        // Set authorization header for future requests
        apiService.defaults.headers.common["Authorization"] = `Bearer ${response.data.data.token}`;

        // Redirect based on user role
        const user = response.data.data.user;
        if (user.role === "DOCTOR") {
          history.push("/doctor/doctor-dashboard");
        } else if (user.role === "ADMIN") {
          history.push("/admin/dashboard");
        } else {
          history.push("/patient/dashboard");
        }
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Login failed. Please check your credentials and try again.";

      setServerError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header {...props} />

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <ImageWithBasePath
                      src="assets/img/login-banner.png"
                      className="img-fluid"
                      alt="DocNet Login"
                    />
                  </div>

                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>DocNet</span>
                      </h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {serverError && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                          {serverError}
                          <button
                            type="button"
                            className="btn-close"
                            onClick={() => setServerError("")}
                          />
                        </div>
                      )}

                      <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                          type="email"
                          name="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          disabled={loading}
                        />
                        {errors.email && (
                          <div className="invalid-feedback d-block">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <div className="form-group-flex">
                          <label className="form-label">Password</label>
                          <Link
                            to="/pages/forgot-password"
                            className="forgot-link"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <div className="pass-group">
                          <input
                            type={isPasswordVisible ? "text" : "password"}
                            name="password"
                            className={`form-control pass-input-sub ${errors.password ? "is-invalid" : ""}`}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            disabled={loading}
                          />
                          <span
                            className={`feather toggle-password-sub ${
                              isPasswordVisible
                                ? "feather-eye"
                                : "feather-eye-off"
                            }`}
                            onClick={togglePasswordVisibility}
                            role="button"
                            tabIndex="0"
                          />
                        </div>
                        {errors.password && (
                          <div className="invalid-feedback d-block">
                            {errors.password}
                          </div>
                        )}
                      </div>

                      <div className="mb-3 form-check-box">
                        <div className="form-group-flex">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember"
                              checked={rememberMe}
                              onChange={handleRememberMeChange}
                              disabled={loading}
                            />
                            <label className="form-check-label" htmlFor="remember">
                              Remember Me
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <button
                          className="btn btn-primary-gradient w-100"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              />
                              Signing in...
                            </>
                          ) : (
                            "Sign in"
                          )}
                        </button>
                      </div>

                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>

                      <div className="social-login-btn">
                        <button
                          type="button"
                          className="btn w-100"
                          disabled={loading}
                        >
                          <ImageWithBasePath
                            src="assets/img/icons/google-icon.svg"
                            alt="google-icon"
                          />
                          Sign in With Google
                        </button>
                        <button
                          type="button"
                          className="btn w-100"
                          disabled={loading}
                        >
                          <ImageWithBasePath
                            src="assets/img/icons/facebook-icon.svg"
                            alt="fb-icon"
                          />
                          Sign in With Facebook
                        </button>
                      </div>

                      <div className="account-signup">
                        <p>
                          Don't have an account ?{" "}
                          <Link to="/register">Sign up</Link>
                        </p>
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

export default LoginContainer;