import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { doctordashboardprofile06 } from "../../../imagepath";
import apiService from "../../../../../config/apiService";

export const DashboardSidebar = () => {
  const pathnames = window.location.pathname;
  const history = useHistory();

  // State to store user data
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profileImage: '',
    patientId: '',
    gender: '',
    dateOfBirth: '',
    age: ''
  });

  // Calculate age from date of birth
  const calculateAge = (dob) => {
    if (!dob) return '';

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} years ${months < 10 ? '0' : ''}${months} Months`;
  };

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUserData({
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.email || '',
          profileImage: user.profileImage || doctordashboardprofile06,
          patientId: user.patientId || user.id || 'PT000000',
          gender: user.gender || 'Not Specified',
          dateOfBirth: user.dateOfBirth || '',
          age: calculateAge(user.dateOfBirth)
        });
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  // Logout handler
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      // Call backend logout endpoint using apiService
      if (token) {
        await apiService.post('/auth/logout');
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear all stored data
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      localStorage.removeItem('rememberedEmail');

      // Clear authorization header from apiService
      delete apiService.defaults.headers.common['Authorization'];

      // Redirect to login page
      history.push('/login');
    }
  };

  // Get full name
  const fullName = `${userData.firstName} ${userData.lastName}`.trim() || 'Patient';

  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar patient-sidebar profile-sidebar-new">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="/patient/profile" className="booking-doc-img">
              <img
                src={userData.profileImage || doctordashboardprofile06}
                alt="User Image"
                onError={(e) => {
                  e.target.src = doctordashboardprofile06;
                }}
              />
            </Link>
            <div className="profile-det-info">
              <h3>
                <Link to="/patient/profile">{fullName}</Link>
              </h3>
              <div className="patient-details">
                <h5 className="mb-0">Patient ID : {userData.patientId}</h5>
              </div>
              <span>
                {userData.gender}
                {userData.age && (
                  <>
                    <i className="fa-solid fa-circle" /> {userData.age}
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
              <li className={pathnames.includes('/patient/dashboard') ? 'active' : ''}>
                <Link to="/patient/dashboard">
                  <i className="isax isax-category-2"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/patient-appointments') || pathnames.includes('/patient/patient-cancelled-appointment') || pathnames.includes('/patient/patient-cancelled-appointment') || pathnames.includes('/patient/patient-completed-appointment') || pathnames.includes('/patient/upcoming-appointment') ? 'active' : ''}>
                <Link to="/patient/patient-appointments">
                  <i className="isax isax-calendar-1"></i>
                  <span>My Appointments</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/favourites') ? 'active' : ''}>
                <Link to="/patient/favourites">
                  <i className="isax isax-star-1"></i>
                  <span>Favourites</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/dependent') ? 'active' : ''}>
                <Link to="/patient/dependent">
                  <i className="isax isax-user-octagon"></i>
                  <span>Dependants</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/medicalrecords') ? 'active' : ''}>
                <Link to="/patient/medicalrecords">
                  <i className="isax isax-note-21"></i>
                  <span>Medical Records</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/accounts') ? 'active' : ''}>
                <Link to="/patient/accounts">
                  <i className="isax isax-wallet-2"></i>
                  <span>Wallet</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/patient-invoice') ? 'active' : ''}>
                <Link to="/patient/patient-invoice">
                  <i className="isax isax-document-text"></i>
                  <span>Invoices</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/patient-chat') ? 'active' : ''}>
                <Link to="/patient/patient-chat">
                  <i className="isax isax-messages-1"></i>
                  <span>Message</span>
                  <small className="unread-msg">7</small>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/medicaldetail') ? 'active' : ''}>
                <Link to="/patient/medicaldetails">
                  <i className="isax isax-note-1"></i>
                  <span>Vitals</span>
                </Link>
              </li>
              <li className={pathnames.includes('/patient/profile') ? 'active' : pathnames.includes('/patient/change-password') ? 'active' : pathnames.includes('/patient/two-factor-authentication') ? 'active' : pathnames.includes('/patient/delete-account') ? 'active' : ''}>
                <Link to="/patient/profile">
                  <i className="isax isax-setting-2"></i>
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <a href="/login" onClick={handleLogout}>
                  <i className="isax isax-logout"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* /Profile Sidebar */}
    </>
  );
};

export default DashboardSidebar;