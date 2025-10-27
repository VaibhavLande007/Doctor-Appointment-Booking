import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import ProgressButton from "../../common/progress/progress";
import Cursor from "../../common/cursor/cursor";

const Home9Footer = () => {
  return (
    <div>
      {" "}
      {/* Footer */}
      <footer className="footer footer-three footer-fourteen">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <Link to="/home-10">
                      <ImageWithBasePath src="assets/img/footer-logo.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="footer-about-content">
                    <p>
                      Effortlessly schedule your medical appointments with
                      Doccure. Connect with healthcare professionals, manage
                      appointments &amp; prioritize your well being{" "}
                    </p>
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
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Useful Links</h2>
                  <ul>
                    <li>
                      <Link to="#">Home</Link>
                    </li>
                    <li>
                      <Link to="#">Doctors</Link>
                    </li>
                    <li>
                      <Link to="#">Patients</Link>
                    </li>
                    <li>
                      <Link to="#">Pharmacy</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Services</h2>
                  <ul>
                    <li>
                      <Link to="#">Obstetric care</Link>
                    </li>
                    <li>
                      <Link to="#">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="#">Refund Policy</Link>
                    </li>
                    <li>
                      <Link to="#">FAQ</Link>
                    </li>
                    <li>
                      <Link to="#">Blogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Get In Touch</h2>
                  <ul>
                    <li>
                      <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="#">Prenatal care</Link>
                    </li>
                    <li>
                      <Link to="#">Ultrasound imaging</Link>
                    </li>
                    <li>
                      <Link to="#">
                        Maternity and baby supplies
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Counseling &amp; Education
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <p className="loc-info">
                        <i className="feather icon-map-pin" />
                        Address
                      </p>
                      <p>123 Street Name, City, USA</p>
                    </div>
                    <div className="footer-address">
                      <p className="loc-info">
                        <i className="feather icon-phone-call" />
                        Phone Number
                      </p>
                      <p>+1 315 369 5943</p>
                    </div>
                    <div className="footer-address mb-0">
                      <p className="loc-info">
                        <i className="feather icon-mail" />
                        Email Address
                      </p>
                      <p>doccure@example.com</p>
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
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright-text text-center">
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
      {/* /Footer */}
      <ProgressButton />
    <Cursor/>
    </div>
  );
};

export default Home9Footer;
