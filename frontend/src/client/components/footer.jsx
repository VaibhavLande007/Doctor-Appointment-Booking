/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ImageWithBasePath from "../../core/img/imagewithbasebath";

const Footer = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {!props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") &&
        !props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") && (
          <>

          
          <footer className="footer inner-footer footer-info">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-3 col-md-3">
                        <div className="footer-widget footer-menu">
                          <h6 className="footer-title">Company</h6>
                          <ul>
                            <li>
                              <Link to="/pages/about-us">About</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Features</Link>
                            </li>
                            <li>
                              <Link to="#">Works</Link>
                            </li>
                            <li>
                              <Link to="#">Careers</Link>
                            </li>
                            <li>
                              <Link to="#">Locations</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3">
                        <div className="footer-widget footer-menu">
                          <h6 className="footer-title">Treatments</h6>
                          <ul>
                            <li>
                              <Link to="/patient/search-doctor1">Dental</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Cardiac</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Spinal Cord</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Hair Growth</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Anemia &amp; Disorder</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3">
                        <div className="footer-widget footer-menu">
                          <h6 className="footer-title">Specialities</h6>
                          <ul>
                            <li>
                              <Link to="/patient/search-doctor1">Transplant</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Cardiologist</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Oncology</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Pediatrics</Link>
                            </li>
                            <li>
                              <Link to="/patient/search-doctor1">Gynacology</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3">
                        <div className="footer-widget footer-menu">
                          <h6 className="footer-title">Utilites</h6>
                          <ul>
                            <li>
                              <Link to="/pages/pricing">Pricing</Link>
                            </li>
                            <li>
                              <Link to="/pages/contact-us">Contact</Link>
                            </li>
                            <li>
                              <Link to="/pages/contact-us">Request A Quote</Link>
                            </li>
                            <li>
                              <Link to="#">Premium Membership</Link>
                            </li>
                            <li>
                              <Link to="#">Integrations</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-7">
                    <div className="footer-widget">
                      <h6 className="footer-title">Newsletter</h6>
                      <p className="mb-2">
                        Subscribe &amp; Stay Updated from the Doccure
                      </p>
                      <div className="subscribe-input">
                        <form action="#">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                          />
                          <button
                            type="submit"
                            className="btn btn-md btn-primary-gradient d-inline-flex align-items-center"
                          >
                            <i className="isax isax-send-25 me-1" />
                            Send
                          </button>
                        </form>
                      </div>
                      <div className="social-icon">
                        <h6 className="mb-3">Connect With Us</h6>
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-x-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-linkedin" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa-brands fa-pinterest" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bg">
                <ImageWithBasePath
                  src="assets/img/bg/footer-bg-01.png"
                  alt="img"
                  className="footer-bg-01"
                />
                <ImageWithBasePath
                  src="assets/img/bg/footer-bg-02.png"
                  alt="img"
                  className="footer-bg-02"
                />
                <ImageWithBasePath
                  src="assets/img/bg/footer-bg-03.png"
                  alt="img"
                  className="footer-bg-03"
                />
                <ImageWithBasePath
                  src="assets/img/bg/footer-bg-04.png"
                  alt="img"
                  className="footer-bg-04"
                />
                <ImageWithBasePath
                  src="assets/img/bg/footer-bg-05.png"
                  alt="img"
                  className="footer-bg-05"
                />
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
                        <Link to="#">Legal Notice</Link>
                      </li>
                      <li>
                        <Link to="/pages/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Refund Policy</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                  <ul className="payment-method">
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/card-01.svg" alt="Img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/card-02.svg" alt="Img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/card-03.svg" alt="Img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/card-04.svg" alt="Img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/card-05.svg" alt="Img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/card-06.svg" alt="Img" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* /Copyright */}
              </div>
            </div>
          </footer>
          </>
        )}
    </>
  );
};

export default Footer;
