import React from 'react'
import { Link } from "react-router-dom";
import ImageWithBasePath from '../../../../core/img/imagewithbasebath';

const Home2Footer = () => {
  return (
    <>
    {/* Footer */}
    <footer className="footer">
    {/* Footer Top */}
    <div className="footer-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-about">
              <div className="footer-logo">
                <ImageWithBasePath src="assets/img/footer-logo.png" alt="logo" />
              </div>
              <div className="footer-about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. </p>
                <div className="social-icon">
                  <ul>
                    <li>
                      <Link to="#"><i className="fab fa-facebook-f" /> </Link>
                    </li>
                    <li>
                      <Link to="#"><i className="fab fa-twitter" /> </Link>
                    </li>
                    <li>
                      <Link to="#"><i className="fab fa-linkedin-in" /></Link>
                    </li>
                    <li>
                      <Link to="#"><i className="fab fa-instagram" /></Link>
                    </li>
                    <li>
                      <Link to="#"><i className="fab fa-dribbble" /> </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Patients</h2>
              <ul>
                <li><Link to="/patient/search-doctor1">Search for Doctors</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/patient/booking1">Booking</Link></li>
                <li><Link to="/patient/dashboard">Patient Dashboard</Link></li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-menu">
              <h2 className="footer-title">For Doctors</h2>
              <ul>
                <li><Link to="/doctor/appointments">Appointments</Link></li>
                <li><Link to="/patient/patient-chat">Chat</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/doctor/doctor-register">Register</Link></li>
                <li><Link to="/doctor/doctor-dashboard">Doctor Dashboard</Link></li>
              </ul>
            </div>
            {/* /Footer Widget */}
          </div>
          <div className="col-lg-3 col-md-6">
            {/* Footer Widget */}
            <div className="footer-widget footer-contact">
              <h2 className="footer-title">Contact Us</h2>
              <div className="footer-contact-info">
                <div className="footer-address">
                  <span><i className="fas fa-map-marker-alt" /></span>
                  <p> 3556 Beech Street, San Francisco,<br /> California, CA 94108 </p>
                </div>
                <p>
                  <i className="fas fa-phone-alt" />
                  +1 315 369 5943
                </p>
                <p className="mb-0">
                  <i className="fas fa-envelope" />
                  doccure@example.com
                </p>
              </div>
            </div>
            {/* /Footer Widget */}
          </div>
        </div>
      </div>
    </div>
    {/* /Footer Top */}
    {/* Footer Bottom */}
    <div className="footer-bottom">
      <div className="container-fluid">
        {/* Copyright */}
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="copyright-text">
                <p className="mb-0">© 2025 Doccure. All rights reserved.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              {/* Copyright Menu */}
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li><Link to="/pages/terms">Terms and Conditions</Link></li>
                  <li><Link to="/pages/privacy-policy">Policy</Link></li>
                </ul>
              </div>
              {/* /Copyright Menu */}
            </div>
          </div>
        </div>
        {/* /Copyright */}
      </div>
    </div>
    {/* /Footer Bottom */}
  </footer>
  {/* /Footer */}
  </>
  )
}

export default Home2Footer