import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import Cursor from "../../common/cursor/cursor";
import ProgressButton from "../../common/progress/progress";

const Home5Footer = () => {
  return (
    <div>
      {" "}
      {/* Footer */}
      <footer className="footer footer-three footer-ten">
        <div className="footer-ten-bg">
          <ImageWithBasePath src="assets/img/bg/hexagen-group-4.png" alt="design-image" />
          <ImageWithBasePath src="assets/img/bg/hexagen-group-5.png" alt="design-image" />
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="footer-details">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget footer-about">
                    <h2 className="footer-title">About Doccure </h2>
                    <div className="footer-about-content">
                      <p>
                        {" "}
                        We can guide you through issues like Cardiac arrest,
                        Heart Failure, Peripheral Artery Disease, Arrhythmia,
                        Atrial Fibrillation, Cholesterol and High BP.
                      </p>
                    </div>
                    <div className="subscribe-form">
                      <form action="#">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <button type="submit" className="btn">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Useful Links</h2>
                    <ul>
                      <li>
                        <Link to="/home-1">Home</Link>
                      </li>
                      <li>
                        <Link to="/patient/search-doctor1">Doctors</Link>
                      </li>
                      <li>
                        <Link to="/doctor/my-patients">Patients</Link>
                      </li>
                      <li>
                        <Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link>
                      </li>
                      <li>
                        <Link to="/pages/aboutus">Pages</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget footer-menu">
                    <h2 className="footer-title">Services</h2>
                    <ul>
                      <li>
                        <Link to="#">Cardiac Consultation</Link>
                      </li>
                      <li>
                        <Link to="#">Diagnostic Testing</Link>
                      </li>
                      <li>
                        <Link to="#">Treatments</Link>
                      </li>
                      <li>
                        <Link to="#">
                          Interventional Procedure
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Electrophysiology</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget footer-contact">
                    <h2 className="footer-title">Contact Us</h2>
                    <div className="footer-contact-info">
                      <div className="footer-address">
                        <span>
                          <i className="feather icon-phone-call" />
                        </span>
                        <div className="addr-info">
                          <h6>Looking for Consultation</h6>
                          <p>+1 315 369 5943</p>
                        </div>
                      </div>
                      <div className="footer-address">
                        <span>
                          <i className="feather icon-mail" />
                        </span>
                        <div className="addr-info">
                          <h6>Email Address</h6>
                          <p>doccure@example.com</p>
                        </div>
                      </div>
                      <div className="footer-address mb-0">
                        <span>
                          <i className="feather icon-map-pin" />
                        </span>
                        <div className="addr-info">
                          <h6>Address</h6>
                          <p>123 Street Name, City, USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="copyright-text">
                <p className="mb-0">
                  Copyright © 2025 Doccure. All Rights Reserved
                </p>
              </div>
              {/* Copyright Menu */}
              <div className="copyright-menu">
                <ul className="policy-menu">
                  <li>
                    <Link to="/pages/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/pages/terms">Terms and Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-x-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* /Copyright Menu */}
            </div>
            {/* /Copyright */}
          </div>
        </div>
      </footer>
      {/* /Footer */}
      <ProgressButton />
      <Cursor/>
    </div>
  );
};

export default Home5Footer;
