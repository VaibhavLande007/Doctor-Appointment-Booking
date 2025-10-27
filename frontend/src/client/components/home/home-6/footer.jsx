import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cursor from "../../common/cursor/cursor";
import ProgressButton from "../../common/progress/progress";

const Home6Footer = () => {
  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      {" "}
      {/* Footer */}
      <footer className="footer footer-eleven">
        <div className="sec-bg-img">
          <ImageWithBasePath
            src="assets/img/bg/vector-bg-02.png"
            alt="eye-icon"
            className="img-fluid vector-left-bg"
          />
        </div>
        <div className="footer-top aos aos-init aos-animate" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-about">
                  <div className="footer-widget-title">
                    <h4>About Doccure </h4>
                  </div>
                  <p>
                    We can guide you through issues like Cardiac arrest, Heart
                    Failure, Peripheral Artery Disease, Arrhythmia, Atrial
                    Fibrillation, Cholesterol and High BP.
                  </p>
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
              <div className="col-xl-4 col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <div className="footer-widget-title">
                    <h4>Contact Us</h4>
                  </div>
                  <ul>
                    <li>
                      <span className="icon-contact">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <p>
                        <span>Looking for Consultation</span>+1 315 369 5943
                      </p>
                    </li>
                    <li>
                      <span className="icon-contact">
                        <i className="fa-regular fa-envelope" />
                      </span>
                      <p>
                        <span>Email Address</span>doccure@example.com
                      </p>
                    </li>
                    <li>
                      <span className="icon-contact">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      <p>
                        <span>Address</span>123 Street Name, City, USA
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <div className="footer-widget-title">
                    <h4>Useful Links</h4>
                  </div>
                  <ul>
                    <li>
                      <Link to="/home-7">Home</Link>
                    </li>
                    <li>
                      <Link to="/doctor/doctor-dashboard">Doctors</Link>
                    </li>
                    <li>
                      <Link to="/patient/dashboard">Patients</Link>
                    </li>
                    <li>
                      <Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <div className="footer-widget-title">
                    <h4>Services</h4>
                  </div>
                  <ul>
                    <li>
                      <Link to="/home-10">Cardiac Consultation</Link>
                    </li>
                    <li>
                      <Link to="#">Diagnostic Testing</Link>
                    </li>
                    <li>
                      <Link to="#">Treatments</Link>
                    </li>
                    <li>
                      <Link to="#">Interventional Procedure</Link>
                    </li>
                    <li>
                      <Link to="#">Electrophysiology</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-xl-5">
                  <div className="copyright-text">
                    <p>Copyright © 2025 Doccure. All Rights Reserved</p>
                  </div>
                </div>
                <div className="col-xl-2">
                  <div className="footer-bottom-logo">
                    <div className="social-icon">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-x-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-twitter" />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <Link to="/pages/privacy-policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/pages/terms">Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link to="pr">Refund Policy</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                </div>
              </div>
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

export default Home6Footer;
