/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Content from "./content";
import Pagecontent from "./pagecontent";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import apiService from "../../../../config/apiService";

const DoctorProfile = (props) => {
  const { doctorId } = useParams();
  const history = useHistory();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDoctorDetails();
  }, [doctorId]);

  const fetchDoctorDetails = async () => {
    try {
      setLoading(true);
      const response = await apiService.get(`/doctors/${doctorId}`);

      if (response.data.success) {
        setDoctor(response.data.data);
      }
    } catch (err) {
      console.error('Error fetching doctor details:', err);
      setError(err.response?.data?.message || 'Failed to load doctor details');
    } finally {
      setLoading(false);
    }
  };

  const handleBookNow = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!token) {
      // Not logged in - redirect to login with return URL
      localStorage.setItem('returnUrl', `/booking/${doctorId}`);
      history.push('/login');
    } else if (user.role === 'PATIENT') {
      // Patient is logged in - go to booking
      history.push(`/booking/${doctorId}`);
    } else {
      // Logged in as doctor/admin - show error or redirect
      alert('Please login as a patient to book appointments');
    }
  };

  if (loading) {
    return (
      <div>
        <Header {...props} />
        <div className="content">
          <div className="container">
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading doctor profile...</p>
            </div>
          </div>
        </div>
        <Footer {...props} />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header {...props} />
        <div className="content">
          <div className="container">
            <div className="alert alert-danger text-center" role="alert">
              {error}
              <div className="mt-3">
                <Link to="/patient/doctor-grid" className="btn btn-primary">
                  Back to Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer {...props} />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div>
        <Header {...props} />
        <div className="content">
          <div className="container">
            <div className="alert alert-warning text-center" role="alert">
              Doctor not found
            </div>
          </div>
        </div>
        <Footer {...props} />
      </div>
    );
  }

  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">
                      <i className="isax isax-home-15" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Patient
                  </li>
                  <li className="breadcrumb-item active">Doctor Profile</li>
                </ol>
                <h2 className="breadcrumb-title">Doctor Profile</h2>
              </nav>
            </div>
          </div>
        </div>
        <div className="breadcrumb-bg">
          <ImageWithBasePath
            src="assets/img/bg/breadcrumb-bg-01.png"
            alt="img"
            className="breadcrumb-bg-01"
          />
          <ImageWithBasePath
            src="assets/img/bg/breadcrumb-bg-02.png"
            alt="img"
            className="breadcrumb-bg-02"
          />
          <ImageWithBasePath
            src="assets/img/bg/breadcrumb-icon.png"
            alt="img"
            className="breadcrumb-bg-03"
          />
          <ImageWithBasePath
            src="assets/img/bg/breadcrumb-icon.png"
            alt="img"
            className="breadcrumb-bg-04"
          />
        </div>
      </div>

      <div className="content">
        <div className="container">
          <Pagecontent doctor={doctor} onBookNow={handleBookNow} />
          <Content doctor={doctor} />
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default DoctorProfile;