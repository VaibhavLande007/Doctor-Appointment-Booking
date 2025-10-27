import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import ProgressButton from "../../common/progress/progress";
import Cursor from "../../common/cursor/cursor";

const Home13Footer = () => {
  const cities = [
    { name: 'India', code: 'AU' },
    { name: 'USA', code: 'BR' },
  ];
  const citie = [
    { name: 'USD', code: 'AU' },
    { name: 'INR', code: 'BR' },
  ];
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [selectedCity2, setSelectedCity2] = useState(citie[0]);
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
      <footer className="footer footer-sec-fourteen">
        <div className="footer-top">
          <div className="row">
            <div className="col-sm-3 col-6 p-0">
              <div className="footer-img">
                <ImageWithBasePath
                  src="assets/img/service/footer-img-01.jpg"
                  className="img-fluid w-100"
                  alt="Img"
                />
              </div>
            </div>
            <div className="col-sm-3 col-6 p-0">
              <div className="footer-img">
                <ImageWithBasePath
                  src="assets/img/service/footer-img-02.jpg"
                  className="img-fluid w-100"
                  alt="Img"
                />
              </div>
            </div>
            <div className="col-sm-3 col-6 p-0">
              <div className="footer-img">
                <ImageWithBasePath
                  src="assets/img/service/footer-img-03.jpg"
                  className="img-fluid w-100"
                  alt="Img"
                />
              </div>
            </div>
            <div className="col-sm-3 col-6 p-0">
              <div className="footer-img">
                <ImageWithBasePath
                  src="assets/img/service/footer-img-04.jpg"
                  className="img-fluid w-100"
                  alt="Img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="footer-mid-content">
              <p>Would you like to connect with us</p>
              <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-x-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-pinterest" />
              </a>
            </li>
          </ul>

            </div>
          </div>
        </div>
        <div className="footer-mid-two">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-5 col-md-6 col-sm-12"
                data-aos="fade-down"
                data-aos-delay={500}
              >
                <div className="footer-logo-col">
                  <div className="footer-logo">
                    <ImageWithBasePath src="assets/img/icons/footer-logo-.svg" alt="Img" />
                  </div>
                  <p>
                    Connect with healthcare professionals, manage appointments
                    &amp; prioritize your well being{" "}
                  </p>
                  <form action="#">
                    <div className="input-block">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                      <button className="btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-3 col-sm-6"
                data-aos="fade-down"
                data-aos-delay={600}
              >
                <div className="footer-links-middle">
                  <h4>QUICK LINKS</h4>
                  <ul>
                    <li>
                      <Link to="/home-1">Home</Link>
                    </li>
                    <li>
                      <Link to="/pages/aboutus">About us</Link>
                    </li>
                    <li>
                      <Link to="payment.html">Payments</Link>
                    </li>
                    <li>
                      <Link to="/patient/booking1">Lab Test</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-2 col-md-3 col-sm-6"
                data-aos="fade-down"
                data-aos-delay={700}
              >
                <div className="footer-links-middle">
                  <h4>SERVICES</h4>
                  <ul>
                    <li>
                      <Link to="/patient/search-doctor2">Nurse at Home</Link>
                    </li>
                    <li>
                      <Link to="/patient/search-doctor2">Physiotherapy</Link>
                    </li>
                    <li>
                      <Link to="/patient/search-doctor2">Medical Equipment</Link>
                    </li>
                    <li>
                      <Link to="/patient/booking2">Doctor Consultation</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-4 col-sm-6"
                data-aos="fade-down"
                data-aos-delay={800}
              >
                <div className="footer-links-middle">
                  <h4>CONSUMER POLICY</h4>
                  <ul>
                    <li>
                      <Link to="/pages/privacy-policy">Privacy</Link>
                    </li>
                    <li>
                      <Link to="/pages/terms">Terms and Condition</Link>
                    </li>
                    <li>
                      <Link to="/patient/booking1">Aggrements</Link>
                    </li>
                    <li>
                      <Link to="/patient/doctor-grid">Sitemap</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="copy-right">
              <p>Copyright © 2025 Doccure. All rights are reserved.</p>
            </div>
            <div className="footer-select-drops">
              <div className="input-select">
                <span className="select-icon">
                  <i className="feather icon-globe" />
                </span>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Language" className="select icon-select foot-select" />
              </div>
              <div className="input-select currency-select">
              <Dropdown value={selectedCity2} onChange={(e) => setSelectedCity2(e.value)} options={citie} optionLabel="name" 
                placeholder="Select Language" className="select icon-select" />
              </div>
            </div>
            <ul className="payment-method">
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/footer-card-icon-01.svg"
                    alt="Img"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/footer-card-icon-02.svg"
                    alt="Img"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/footer-card-icon-03.svg"
                    alt="Img"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/footer-card-icon-04.svg"
                    alt="Img"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* /Footer */}
      <ProgressButton />
      <Cursor/>
    </div>
  );
};

export default Home13Footer;
