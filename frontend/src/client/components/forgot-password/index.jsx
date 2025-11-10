import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import loginBanner from "../../assets/images/login-banner.png";
import apiService from "../../../config/apiService";

const ForgotPassword = (props) => {
  const history = useHistory();

  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [otpTimer, setOtpTimer] = useState(0);

  useEffect(() => {
    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, []);

  // OTP Timer countdown
  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  const validateEmail = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOtp = () => {
    const newErrors = {};
    if (!otp.trim()) {
      newErrors.otp = "OTP is required";
    } else if (!/^[0-9]{6}$/.test(otp)) {
      newErrors.otp = "OTP must be 6 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};

    if (!newPassword) {
      newErrors.newPassword = "Password is required";
    } else if (newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
      newErrors.newPassword = "Password must contain uppercase, lowercase, and number";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!validateEmail()) return;

    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    try {
      const response = await apiService.post("/auth/password/forgot", { email });

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setStep(2);
        setOtpTimer(600); // 10 minutes
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to send OTP. Please try again.";
      setServerError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!validateOtp()) return;

    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    try {
      const response = await apiService.post("/auth/password/verify-otp", {
        email,
        otp,
      });

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setStep(3);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Invalid OTP. Please try again.";
      setServerError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!validatePassword()) return;

    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    try {
      const response = await apiService.post("/auth/password/reset", {
        email,
        otp,
        newPassword,
        confirmPassword,
      });

      if (response.data.success) {
        setSuccessMessage("Password reset successful! Redirecting to login...");
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to reset password. Please try again.";
      setServerError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setServerError("");
    setSuccessMessage("");

    try {
      const response = await apiService.post("/auth/password/resend-otp", { email });

      if (response.data.success) {
        setSuccessMessage("New OTP sent to your email!");
        setOtp("");
        setOtpTimer(600);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to resend OTP. Please try again.";
      setServerError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
                    <img
                      src={loginBanner}
                      className="img-fluid"
                      alt="Login Banner"
                    />
                  </div>

                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        {step === 1 && "Forgot Password?"}
                        {step === 2 && "Verify OTP"}
                        {step === 3 && "Reset Password"}
                      </h3>
                      <p className="small text-muted">
                        {step === 1 && "Enter your email to receive OTP"}
                        {step === 2 && "Enter the 6-digit code sent to your email"}
                        {step === 3 && "Create a new password for your account"}
                      </p>
                    </div>

                    {/* Success Message */}
                    {successMessage && (
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {successMessage}
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setSuccessMessage("")}
                        />
                      </div>
                    )}

                    {/* Error Message */}
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

                    {/* Step 1: Email Input */}
                    {step === 1 && (
                      <form onSubmit={handleSendOtp}>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email) {
                                setErrors({ ...errors, email: "" });
                              }
                            }}
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
                          <button
                            className="btn btn-primary-gradient w-100"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" />
                                Sending OTP...
                              </>
                            ) : (
                              "Send OTP"
                            )}
                          </button>
                        </div>

                        <div className="text-center">
                          <Link to="/login" className="forgot-link">
                            Remember your password? Sign in
                          </Link>
                        </div>
                      </form>
                    )}

                    {/* Step 2: OTP Verification */}
                    {step === 2 && (
                      <form onSubmit={handleVerifyOtp}>
                        <div className="mb-3">
                          <label className="form-label">Enter OTP</label>
                          <input
                            type="text"
                            className={`form-control text-center ${errors.otp ? "is-invalid" : ""}`}
                            value={otp}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              if (value.length <= 6) {
                                setOtp(value);
                                if (errors.otp) {
                                  setErrors({ ...errors, otp: "" });
                                }
                              }
                            }}
                            placeholder="000000"
                            maxLength="6"
                            style={{ fontSize: "24px", letterSpacing: "10px" }}
                            disabled={loading}
                          />
                          {errors.otp && (
                            <div className="invalid-feedback d-block">
                              {errors.otp}
                            </div>
                          )}
                        </div>

                        {otpTimer > 0 && (
                          <div className="text-center mb-3">
                            <small className="text-muted">
                              OTP expires in: <strong>{formatTime(otpTimer)}</strong>
                            </small>
                          </div>
                        )}

                        <div className="mb-3">
                          <button
                            className="btn btn-primary-gradient w-100"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" />
                                Verifying...
                              </>
                            ) : (
                              "Verify OTP"
                            )}
                          </button>
                        </div>

                        <div className="text-center">
                          <button
                            type="button"
                            className="btn btn-link"
                            onClick={handleResendOtp}
                            disabled={loading || otpTimer > 540}
                          >
                            Resend OTP
                          </button>
                          <span className="mx-2">|</span>
                          <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => {
                              setStep(1);
                              setOtp("");
                              setOtpTimer(0);
                            }}
                          >
                            Change Email
                          </button>
                        </div>
                      </form>
                    )}

                    {/* Step 3: Reset Password */}
                    {step === 3 && (
                      <form onSubmit={handleResetPassword}>
                        <div className="mb-3">
                          <label className="form-label">New Password</label>
                          <div className="pass-group">
                            <input
                              type={isPasswordVisible ? "text" : "password"}
                              className={`form-control pass-input-sub ${errors.newPassword ? "is-invalid" : ""}`}
                              value={newPassword}
                              onChange={(e) => {
                                setNewPassword(e.target.value);
                                if (errors.newPassword) {
                                  setErrors({ ...errors, newPassword: "" });
                                }
                              }}
                              placeholder="Enter new password"
                              disabled={loading}
                            />
                            <span
                              className={`feather toggle-password-sub ${
                                isPasswordVisible ? "feather-eye" : "feather-eye-off"
                              }`}
                              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                              role="button"
                            />
                          </div>
                          {errors.newPassword && (
                            <div className="invalid-feedback d-block">
                              {errors.newPassword}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Confirm Password</label>
                          <div className="pass-group">
                            <input
                              type={isConfirmPasswordVisible ? "text" : "password"}
                              className={`form-control pass-input-sub ${errors.confirmPassword ? "is-invalid" : ""}`}
                              value={confirmPassword}
                              onChange={(e) => {
                                setConfirmPassword(e.target.value);
                                if (errors.confirmPassword) {
                                  setErrors({ ...errors, confirmPassword: "" });
                                }
                              }}
                              placeholder="Confirm new password"
                              disabled={loading}
                            />
                            <span
                              className={`feather toggle-password-sub ${
                                isConfirmPasswordVisible ? "feather-eye" : "feather-eye-off"
                              }`}
                              onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                              role="button"
                            />
                          </div>
                          {errors.confirmPassword && (
                            <div className="invalid-feedback d-block">
                              {errors.confirmPassword}
                            </div>
                          )}
                        </div>

                        <div className="mb-3">
                          <button
                            className="btn btn-primary-gradient w-100"
                            type="submit"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" />
                                Resetting Password...
                              </>
                            ) : (
                              "Reset Password"
                            )}
                          </button>
                        </div>
                      </form>
                    )}
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

export default ForgotPassword;