import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import Home1Footer from "./footer";
import Home1Header from "./header";
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Calendar } from "primereact/calendar";

const Home1 = () => {
  const [date1, setDate1] = useState(null);

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-nav slide-nav-1 text-end nav-control">
        <button type="button" role="presentation" className="owl-next" onClick={onClick}>
            <i className="fas fa-chevron-right custom-arrow" />
        </button>
    </div>

);

const CustomPrevArrow = ({ className, onClick }) => (
    <div className="owl-nav slide-nav-1 text-end nav-control">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fas fa-chevron-left custom-arrow" />
        </button>
    </div>
);

  const specialitiesSlider = {
    slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                },
            },
        ],
  };
  const bestDoctorsSlider = {
    slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                },
            },
        ],
  };
  const partnersSlider = {
    slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        autoplay:true,
        arrows: false,
        infinite: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                },
            },
        ],
  };
  const testimonialSlider = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 2000,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main-wrapper home-one">
      <Home1Header />
      {/* Home Banner */}
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content aos" data-aos="fade-up">
                <h1>
                  Consult <span>Best Doctors</span> Your Nearby Location.
                </h1>
                <ImageWithBasePath
                  src="assets/img/icons/header-icon.svg"
                  className="header-icon"
                  alt="header-icon"
                />
                <p>Embark on your healing journey with Doccure</p>
                <Link to="/patient/booking1" className="btn btn-primary">
                  Start a Consult
                </Link>
                <div className="banner-arrow-img">
                  <ImageWithBasePath
                    src="assets/img/down-arrow-img.png"
                    className="img-fluid"
                    alt="down-arrow"
                  />
                </div>
              </div>
              <div className="search-box-one aos" data-aos="fade-up">
                <form action="/patient/search-doctor2">
                  <div className="search-input search-line">
                    <i className="feather icon-search bficon" />
                    <div className=" mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search doctors, clinics, hospitals, etc"
                      />
                    </div>
                  </div>
                  <div className="search-input search-map-line">
                    <i className="feather icon-map-pin" />
                    <div className=" mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                      />
                      <Link
                        className="current-loc-icon current_location"
                        to="#"
                      >
                        <i className="feather icon-crosshair" />
                      </Link>
                    </div>
                  </div>
                  <div className="search-input search-calendar-line">
                    <i className="feather icon-calendar" />
                    <div className=" mb-0">
                      <Calendar
                        value={date1}
                        onChange={(e) => setDate1(e.value)}
                        placeholder="From"
                        className="custom-date-picker"
                      />
                    </div>
                  </div>
                  <div className="form-search-btn">
                    <button className="btn btn-primary" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img aos" data-aos="fade-up">
                <ImageWithBasePath
                  src="assets/img/banner-img.png"
                  className="img-fluid"
                  alt="patient-image"
                />
                <div className="banner-img1">
                  <ImageWithBasePath
                    src="assets/img/banner/banner-img1.svg"
                    className="img-fluid"
                    alt="checkup-image"
                  />
                </div>
                <div className="banner-img2">
                  <ImageWithBasePath
                    src="assets/img/banner/banner-img2.svg"
                    className="img-fluid"
                    alt="doctor-slide"
                  />
                </div>
                <div className="banner-img3">
                  <ImageWithBasePath
                    src="assets/img/banner/banner-img3.svg"
                    className="img-fluid"
                    alt="doctors-list"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Specialities Section */}
      <section className="specialities-section-one">
        <div className="container">
          <div className="service-sec-one">
            <div className="row row-cols-7 row-cols-xxl-7 row-cols-xl-4 row-cols-lg-4 rows-cols-md-6 justify-content-center">
              <div className="col-12 d-flex col-xxl col-lg-3 col-sm-6">
                <Link to="#" className="serv-wrap blue-bg flex-fill">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/service-01.svg"
                      alt="heart-image"
                    />
                  </span>
                  <h4>Book Appointment</h4>
                </Link>
              </div>
              <div className="col-12 d-flex col-xxl col-lg-3 col-sm-6">
                <Link to="#" className="serv-wrap green-bg flex-fill">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/service-02.svg"
                      alt="heart-image"
                    />
                  </span>
                  <h4>Lab Testing Services</h4>
                </Link>
              </div>
              <div className="col-12 d-flex col-xxl col-lg-3 col-sm-6">
                <Link to="#" className="serv-wrap info-bg flex-fill">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/service-03.svg"
                      alt="heart-image"
                    />
                  </span>
                  <h4>Medicines &amp; Supplies</h4>
                </Link>
              </div>
              <div className="col-12 d-flex col-xxl col-lg-3 col-sm-6">
                <Link to="#" className="serv-wrap red-bg flex-fill">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/service-04.svg"
                      alt="heart-image"
                    />
                  </span>
                  <h4>Hospitals / Clinics</h4>
                </Link>
              </div>
              <div className="col-12 d-flex col-xxl col-lg-3 col-sm-6">
                <Link to="#" className="serv-wrap success-bg flex-fill">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/service-05.svg"
                      alt="heart-image"
                    />
                  </span>
                  <h4>Health Care Services</h4>
                </Link>
              </div>
              <div className="col-12 d-flex col-xxl col-lg-3 col-sm-6">
                <Link to="#" className="serv-wrap pink-bg flex-fill">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/service-06.svg"
                      alt="heart-image"
                    />
                  </span>
                  <h4>Talk to Doctor’s</h4>
                </Link>
              </div>
              <div className="col-12 d-flex col-xxl col-lg-3 col-sm-6">
                <Link to="#" className="serv-wrap danger-bg flex-fill">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/service-07.svg"
                      alt="heart-image"
                    />
                  </span>
                  <h4>Home Care Services</h4>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-7 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Specialities</h2>
              </div>
            </div>
            <div className="col-md-6 col-5  aos" data-aos="fade-up">
              <div className="owl-nav slide-nav-1 text-end nav-control" />
            </div>
          </div>
          <div
            className="specialities-slider-one owl-theme aos slick-arrow-right"
            data-aos="fade-up"
          >
            <Slider {...specialitiesSlider}>
              <div className="item">
                <div className="specialities-item">
                  <div className="specialities-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-01.svg"
                        alt="heart-image"
                      />
                    </span>
                  </div>
                  <p>Cardiology</p>
                </div>
              </div>
              <div className="item">
                <div className="specialities-item">
                  <div className="specialities-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-02.svg"
                        alt="brain-image"
                      />
                    </span>
                  </div>
                  <p>Neurology</p>
                </div>
              </div>
              <div className="item">
                <div className="specialities-item">
                  <div className="specialities-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-03.svg"
                        alt="kidney-image"
                      />
                    </span>
                  </div>
                  <p>Urology</p>
                </div>
              </div>
              <div className="item">
                <div className="specialities-item">
                  <div className="specialities-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-04.svg"
                        alt="bone-image"
                      />
                    </span>
                  </div>
                  <p>Orthopedic</p>
                </div>
              </div>
              <div className="item">
                <div className="specialities-item">
                  <div className="specialities-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-05.svg"
                        alt="dentist"
                      />
                    </span>
                  </div>
                  <p>Dentist</p>
                </div>
              </div>
              <div className="item">
                <div className="specialities-item">
                  <div className="specialities-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-06.svg"
                        alt="eye-image"
                      />
                    </span>
                  </div>
                  <p>Ophthalmology</p>
                </div>
              </div>
              <div className="item">
                <div className="specialities-item">
                  <div className="specialities-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-02.svg"
                        alt="brain-image"
                      />
                    </span>
                  </div>
                  <p>Neurology</p>
                </div>
              </div>
            </Slider>
          </div>
          <div className="specialities-btn aos" data-aos="fade-up">
            <Link to="/patient/search-doctor1" className="btn btn-primary">
              See All Specialities
            </Link>
          </div>
        </div>
      </section>
      {/* /Specialities Section */}
      {/* Doctors Section */}
      <section className="doctors-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider text-center">
                <h2 className="section-title">Best Doctors</h2>
              </div>
            </div>
          </div>
          <div className="doctor-slider-one owl-theme aos" data-aos="fade-up">
            <Slider {...bestDoctorsSlider}>
         
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-03.jpg"
                          className="img-fluid"
                          alt="Ruby Perrin"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$200</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. Downer</Link>
                        <p>Orthopedic</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.5
                          </span>{" "}
                          (35)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" /> Newyork, USA
                      </p>
                      <span className="badge badge-success doc-badge">
                        <i className="fa-solid fa-circle" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-02.jpg"
                          className="img-fluid"
                          alt="Paul Richard"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$300</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. John Doe</Link>
                        <p>Dentist</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.3
                          </span>{" "}
                          (45)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" /> Austin, TX
                      </p>
                      <span className="badge badge-success doc-badge">
                        <i className="fa-solid fa-circle" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-04.jpg"
                          className="img-fluid"
                          alt="Darren Elder"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$100</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. Aviles</Link>
                        <p>Neurology</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.0
                          </span>{" "}
                          (20)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" /> Newyork, USA
                      </p>
                      <span className="badge badge-danger doc-badge">
                        <i className="fa-solid fa-circle" />
                        Unavailable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-05.jpg"
                          className="img-fluid"
                          alt="Sofia Brient"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$250</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. Palmore</Link>
                        <p>Immunologist</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.5
                          </span>{" "}
                          (35)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" /> Waipahu, HI
                      </p>
                      <span className="badge badge-success doc-badge">
                        <i className="fa-solid fa-circle" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-01.jpg"
                          className="img-fluid"
                          alt="John Doe"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$880</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. Paul Richard</Link>
                        <p>Dentist</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.4
                          </span>{" "}
                          (50)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" /> California, USA
                      </p>
                      <span className="badge badge-success doc-badge">
                        <i className="fa-solid fa-circle" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
            </Slider>
          </div>
        </div>
      </section>
      {/* /Doctors Section */}
      {/* Pricing */}
      <section className="pricing-section doc-plan">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 text-center aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="section-header-one">
                <h2 className="section-title">Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-4 col-sm-12 aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="card pricing-card">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src="assets/img/icons/price-icon1.svg" alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <h4>Basic</h4>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $99 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Profile Creation</li>
                        <li>Appointment Booking</li>
                        <li>Notification Alerts</li>
                        <li>Limited Telemedicine Access</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.html" className="btn btn-primary">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-12 aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="card pricing-card active">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src="assets/img/icons/price-icon2.svg" alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <h4>Pro</h4>
                      </div>
                    </div>
                    <div>
                      <span className="badge">Popular</span>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $199 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Profile Creation</li>
                        <li>Appointment Booking</li>
                        <li>Notification Alerts</li>
                        <li>Extended Telemedicine Access</li>
                        <li>Exclusive Discounts</li>
                        <li>Appointment History</li>
                        <li>Priority Customer Support</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.html" className="btn btn-primary">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-12 aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="card pricing-card">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img src="assets/img/icons/price-icon3.svg" alt="icon" />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <h4>Enterprise</h4>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $399 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>All Basic Plan Features</li>
                        <li>All Premium Plan Features</li>
                        <li>Personalized Health Insights</li>
                        <li>Family Account Management</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.html" className="btn btn-primary">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Pricing */}
      {/* Work Section */}
      <section className="work-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 work-img-info aos"
              data-aos="fade-up"
            >
              <div className="work-img">
                <ImageWithBasePath
                  src="assets/img/work-img.png"
                  className="img-fluid"
                  alt="doctor-image"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 work-details">
              <div className="section-header-one aos" data-aos="fade-up">
                <h5>How it Works</h5>
                <h2 className="section-title">
                  4 easy steps to get your solution
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/work-01.svg"
                          alt="search-doctor-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Search Doctor</h5>
                      <p>
                        Search for a doctor based on specialization, location,
                        or availability.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/work-02.svg"
                          alt="doctor-profile-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Check Doctor Profile</h5>
                      <p>
                        Explore detailed doctor profiles on our platform to make
                        informed healthcare decisions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/work-03.svg"
                          alt="calendar-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Schedule Appointment</h5>
                      <p>
                        After choose your preferred doctor, select a convenient
                        time slot, &amp; confirm your appointment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/work-04.svg"
                          alt="solution-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Get Your Solution</h5>
                      <p>
                        Discuss your health concerns with the doctor and receive
                        personalized advice &amp; solution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Work Section */}
      {/* Articles Section */}
      <section className="articles-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one text-center">
                <h2 className="section-title">Latest Articles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="/blog/blog-details">
                      <div className="articles-img">
                        <ImageWithBasePath
                          src="assets/img/blog/blog-11.jpg"
                          className="img-fluid"
                          alt="John Doe"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather icon-user" /> John Doe
                        </li>
                        <li>
                          <i className="feather icon-calendar" /> 13 Aug, 2023
                        </li>
                      </ul>
                      <h4>
                        <Link to="/blog/blog-details">
                          Navigating Telehealth: A Guide to Virtual Healthcare
                          Visits
                        </Link>
                      </h4>
                      <p>
                        Explore the benefits &amp; challenges of virtual
                        healthcare appointments, along with tips for making good
                        health.
                      </p>
                      <Link to="/blog/blog-details" className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="/blog/blog-details">
                      <div className="articles-img">
                        <ImageWithBasePath
                          src="assets/img/blog/blog-24.jpg"
                          className="img-fluid"
                          alt="Darren Elder"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather icon-user" /> Darren Elder
                        </li>
                        <li>
                          <i className="feather icon-calendar" /> 10 Sep, 2023
                        </li>
                      </ul>
                      <h4>
                        <Link to="/blog/blog-details">
                          Work-Life Harmony: Balancing Career and Personal
                          Wellness
                        </Link>
                      </h4>
                      <p>
                        Uncover strategies to achieve a harmonious balance
                        between professional commitments and personal
                        well-being.
                      </p>
                      <Link to="/blog/blog-details" className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="/blog/blog-details">
                      <div className="articles-img">
                        <ImageWithBasePath
                          src="assets/img/blog/blog-25.jpg"
                          className="img-fluid"
                          alt="Ruby Perrin"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather icon-user" /> Ruby Perrin
                        </li>
                        <li>
                          <i className="feather icon-calendar" /> 30 Oct, 2023
                        </li>
                      </ul>
                      <h4>
                        <Link to="/blog/blog-details">
                          Sleep Solutions: Unveiling the Secrets to a Restful
                          Night
                        </Link>
                      </h4>
                      <p>
                        Explore importance of quality sleep &amp; learn tips to
                        improve your sleep, ensuring you wake up refreshed &amp;
                        ready to face the day.
                      </p>
                      <Link to="/blog/blog-details" className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
              <div className="articles-grid w-100">
                <div className="articles-info">
                  <div className="articles-left">
                    <Link to="/blog/blog-details">
                      <div className="articles-img">
                        <ImageWithBasePath
                          src="assets/img/blog/blog-12.jpg"
                          className="img-fluid"
                          alt="Sofia Brient"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="articles-right">
                    <div className="articles-content">
                      <ul className="articles-list nav">
                        <li>
                          <i className="feather icon-user" /> Sofia Brient
                        </li>
                        <li>
                          <i className="feather icon-calendar" /> 08 Nov, 2023
                        </li>
                      </ul>
                      <h4>
                        <Link to="/blog/blog-details">
                          Mental Wellness in a Digital Age: Strategies for a
                          Healthy Mind Online
                        </Link>
                      </h4>
                      <p>
                        Delve into the impact of digital life on mental health
                        &amp; discover practical strategies to maintain mental
                        well-being.
                      </p>
                      <Link to="/blog/blog-details" className="btn btn-primary">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Articles Section */}
      {/* App Section */}
      <section className="app-section pt-0">
        <div className="container">
          <div className="app-bg">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12">
                <div className="app-content">
                  <div className="app-header aos" data-aos="fade-up">
                    <h5>Working for Your Better Health.</h5>
                    <h2>Download the Doccure App today!</h2>
                  </div>
                  <div className="app-scan aos" data-aos="fade-up">
                    <p>Scan the QR code to get the app now</p>
                    <ImageWithBasePath
                      src="assets/img/scan-img.png"
                      alt="scan-image"
                    />
                  </div>
                  <div className="google-imgs aos" data-aos="fade-up">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/icons/google-play-icon.svg"
                        alt="img"
                      />
                    </Link>
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/icons/app-store-icon.svg"
                        alt="img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                <div className="mobile-img">
                  <ImageWithBasePath
                    src="assets/img/mobile-img.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /App Section */}
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-one aos" data-aos="fade-up">
                <h5>Get Your Answer</h5>
                <h2 className="section-title">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="faq-img">
                <ImageWithBasePath
                  src="assets/img/faq-img.png"
                  className="img-fluid"
                  alt="img"
                />
                <div className="faq-patients-count">
                  <div className="faq-smile-img">
                    <ImageWithBasePath
                      src="assets/img/icons/smiling-icon.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="faq-patients-content">
                    <h4>
                      <span className="count-digit">95</span>k+
                    </h4>
                    <p>Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <Link
                        to="#"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How do I book an appointment with a doctor?
                      </Link>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, simply visit our website and log in or create
                            an account. Search for a doctor based on
                            specialization, location, or availability &amp;
                            confirm your booking.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <Link
                        to="#"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I request a specific doctor when booking my
                        appointment?
                      </Link>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, you can usually request a specific doctor when
                            booking your appointment, though availability may
                            vary based on their schedule.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <Link
                        to="#"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What should I do if I need to cancel or reschedule my
                        appointment?
                      </Link>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            If you need to cancel or reschedule your
                            appointment, contact the doctor as soon as possible
                            to inform them and to reschedule for another
                            available time slot.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <Link
                        to="#"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What if I'm running late for my appointment?
                      </Link>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            If you know you will be late, it's courteous to call
                            the doctor's office and inform them. Depending on
                            their policy and schedule, they may be able to
                            accommodate you or reschedule your appointment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <Link
                        to="#"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can I book appointments for family members or
                        dependents?
                      </Link>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, in many cases, you can book appointments for
                            family members or dependents. However, you may need
                            to provide their personal information and consent to
                            do so.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /FAQ Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /FAQ Section */}
      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider slick">
                <Slider {...testimonialSlider}>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <ImageWithBasePath
                          src="assets/img/clients/client-01.jpg"
                          className="img-fluid"
                          alt="John Doe"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-header-one section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2 className="section-title">
                            What Our Client Says
                          </h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Doccure exceeded my expectations in healthcare. The
                            seamless booking process, coupled with the expertise
                            of the doctors, made my experience exceptional.
                            Their commitment to quality care and convenience
                            truly sets them apart. I highly recommend Doccure
                            for anyone seeking reliable and accessible
                            healthcare services.
                          </p>
                          <h6>
                            <span className="d-block">John Doe</span> New York
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <ImageWithBasePath
                          src="assets/img/clients/client-03.jpg"
                          className="img-fluid"
                          alt="Amanda Warren"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            As a busy professional, I don't have time to wait on
                            hold or play phone tag to schedule doctor
                            appointments. Thanks to Doccure, booking
                            appointments has never been easier! The
                            user-friendly interface allows me to quickly find
                            available appointment slots that fit my schedule and
                            book them with just a few clicks. It's a
                            game-changer for anyone looking to streamline their
                            healthcare management.
                          </p>
                          <h6>
                            <span className="d-block">Andrew Denner</span>{" "}
                            Nevada
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-img">
                        <ImageWithBasePath
                          src="assets/img/clients/client-11.jpg"
                          className="img-fluid"
                          alt="Betty Carlson"
                        />
                      </div>
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>What Our Client Says</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            As a parent, coordinating doctor appointments for my
                            family can be overwhelming. Doccure has simplified
                            the process and made scheduling appointments a
                            breeze! I love being able to see all available
                            appointment times in one place and book appointments
                            for multiple family members with ease. Plus, the
                            automatic reminders ensure we never miss an
                            appointment. I highly recommend Doccure to other
                            busy parents!
                          </p>
                          <h6>
                            <span className="d-block">Niya Patel</span> New York
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Testimonial Section */}
      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-header-one text-center aos"
                data-aos="fade-up"
              >
                <h2 className="section-title">Our Partners</h2>
              </div>
            </div>
          </div>
          <div className="partners-info aos" data-aos="fade-up">
            <ul className="partners-slider slick-margins">
              <Slider {...partnersSlider}>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-1.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-2.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-3.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-4.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-5.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-6.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-1.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-2.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-3.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-4.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-5.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/partners/partners-6.svg"
                      alt="partners"
                    />
                  </Link>
                </li>
              </Slider>
            </ul>
          </div>
        </div>
      </section>
      {/* /Partners Section */}
      <Home1Footer />
    </div>
  );
};

export default Home1;
