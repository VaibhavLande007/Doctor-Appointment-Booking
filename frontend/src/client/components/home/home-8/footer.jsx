import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cursor from "../../common/cursor/cursor";
import ProgressButton from "../../common/progress/progress";

const Home8Footer = () => {
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
      {/* Footer */}
      <footer className="footer footer-thirteen">
        <div className="footer-bg-icon">
          <ImageWithBasePath
            src="assets/img/bg/footer-bg.png"
            alt="Rainbow"
            className="aos"
            data-aos="fade-left"
          />
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">About us</h2>
                      <ul>
                        <li>
                          <Link to="#">Our Doctors</Link>
                        </li>
                        <li>
                          <Link to="#">Why us</Link>
                        </li>
                        <li>
                          <Link to="#">How it works</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Our News &amp; Events
                          </Link>
                        </li>
                        <li>
                          <Link to="#">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Our cabins</h2>
                      <ul>
                        <li>
                          <Link to="#">North of London</Link>
                        </li>
                        <li>
                          <Link to="#">Golden Hideaway</Link>
                        </li>
                        <li>
                          <Link to="#">Oak Treehouse</Link>
                        </li>
                        <li>
                          <Link to="#">Acacia Retreat</Link>
                        </li>
                        <li>
                          <Link to="#">Blue Lagoon</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Services</h2>
                      <ul>
                        <li>
                          <Link to="#">Prenatal/New-born</Link>
                        </li>
                        <li>
                          <Link to="#">Vaccinations</Link>
                        </li>
                        <li>
                          <Link to="#">Blood tests</Link>
                        </li>
                        <li>
                          <Link to="#">Diagnostic tests</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Parents training classes
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-widget footer-menu footer-menu-thirteen">
                      <h2 className="footer-title">Services</h2>
                      <ul>
                        <li>
                          <Link to="#">Our Doctors</Link>
                        </li>
                        <li>
                          <Link to="#">Why us</Link>
                        </li>
                        <li>
                          <Link to="#">How it works</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Our News &amp; Events
                          </Link>
                        </li>
                        <li>
                          <Link to="/pages/faq">FAQ</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Support</h2>
                      <ul>
                        <li>
                          <Link to="#">Help Us</Link>
                        </li>
                        <li>
                          <Link to="/pages/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/pages/contactus">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/pages/terms">Terms of Service</Link>
                        </li>
                        <li>
                          <Link to="#">Complaints Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-contents-thirteen-main">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8">
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <button type="submit" className="btn">
                        Subscribe
                        <i className="feather icon-arrow-right ms-2" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright-text">
                    <p className="mb-0">
                      {" "}
                      Copyright © 2025 All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
      </footer>
      <ProgressButton />
      <Cursor/>
      {/* /Footer */}
    </div>
  );
};

export default Home8Footer;
