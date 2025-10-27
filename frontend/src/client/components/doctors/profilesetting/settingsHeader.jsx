import React from 'react'
import { Link } from 'react-router-dom'

const SettingsHeader = () => {
  let pathnames = window.location.pathname;


  return (
    <div>
    <div className="setting-tab">
    <div className="appointment-tabs">
      <ul className="nav">
        <li className="nav-item">
          <Link
          className={`nav-link ${pathnames.includes("/doctor/profile-setting") ? "active" : ""}`}
            to="/doctor/profile-setting"
          >
            Basic Details
          </Link>
        </li>
        <li className="nav-item">
          <Link
          className={`nav-link ${pathnames.includes("/doctor/doctor-experience") ? "active" : ""}`}
            to="/doctor/doctor-experience"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link className={`nav-link ${pathnames.includes("/doctor/education") ? "active" : ""}`}
          to="/doctor/education"
          >
            Education
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathnames.includes("/doctor/doctor-awards-settings") ? "active" : ""}`}  to="/doctor/doctor-awards-settings">
            Awards
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathnames.includes("/doctor/doctor-insurance-settings") ? "active" : ""}`} to='/doctor/doctor-insurance-settings'>
            Insurances
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathnames.includes("/doctor/doctor-clinics-settings") ? 'active' : ''}`} to="/doctor/doctor-clinics-settings">
            Clinics
          </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${pathnames.includes('/doctor/doctor-business-setting') ? 'active' : ''}`} to="/doctor/doctor-business-settings">
            Business Hours
          </Link>
        </li>
      </ul>
    </div>
  </div>
    </div>
  )
}

export default SettingsHeader
