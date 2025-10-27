import React, { useState, useEffect, useRef } from "react";
import Home13Header from "./header";
import Home13Footer from "./footer";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home13 = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
  const togglePlayback = () => {
    const video = videoRef.current;
    video.play();
    if (video) {
      video.play();
      if (isPlaying) {
        video.play(); // Pause the video
      } else {
        video.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the playback state
    }
  };
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-nav left-bottom nav-control ">
        <button type="button" role="presentation" className="owl-next" onClick={onClick}>
            <i className="fa-solid fa-chevron-right" />
        </button>
    </div>
);



const CustomPrevArrow = ({ className, onClick }) => (
    <div className="owl-nav left-bottom nav-control ">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fa-solid fa-chevron-left" />
        </button>
    </div>
);
const CustomPrevArrow2 = ({ className, onClick }) => (
  <div className="owl-nav left-bottom bg-white nav-control  ">
      <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
          <i className="fa-solid fa-chevron-left " />
      </button>
  </div>
);
const CustomNextArrow2 = ({ className, onClick }) => (
  <div className="owl-nav left-bottom bg-white nav-control  ">
      <button type="button" role="presentation" className="owl-next" onClick={onClick}>
          <i className="fa-solid fa-chevron-right" />
      </button>
  </div>
);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
    setTimeout(() => {
      document.getElementById('vid').play();
    }, 3000);
  }, []);

  const ourNurse = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
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
  const ourNurseSlide = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow2 />,
    prevArrow: <CustomPrevArrow2 />,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
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
  const ourBlog = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
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
    <div className="main-wrapper home-pg-fourteen">
      <Home13Header />
      {/* Home Banner */}
      <section className="banner-section banner-sec-fourteen">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content aos" data-aos="fade-up">
                <div className="banner-head">
                  <h6>Let’s Take Care</h6>
                  <h1>Home Care Services in Your Area</h1>
                  <p>
                    Book an expert caregiver that you can trust. To get started
                  </p>
                </div>
                <div className="banner-form-field">
                  <form action="#">
                    <div className="input-box">
                      <div className="input-block">
                        <div className="icon-badge">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                        </div>
                        <div className="banner-input-box">
                          <label className="form-label">Location</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Newyork, United States"
                          />
                        </div>
                      </div>
                      <div className="input-block">
                        <div className="icon-badge">
                          <span>
                            <i className="fa-solid fa-users-gear" />
                          </span>
                        </div>
                        <div className="banner-input-box">
                          <label className="form-label">Services</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Services"
                          />
                        </div>
                      </div>
                      <div className="input-btn">
                        <button type="submit" className="btn">
                          <i className="fa-solid fa-magnifying-glass" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="watch-video">
                  <Link to="#">
                    <span>
                      <i className="fa-solid fa-circle-play" />
                    </span>
                    Watch Video About Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-sec-img">
                <span>
                  <ImageWithBasePath
                    src="assets/img/banner-img-13.png"
                    className="img-fluid"
                    alt="Img"
                  />
                </span>
                <span
                  className="banner-curve aos"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <ImageWithBasePath
                    src="assets/img/banner-img-curve-13.png"
                    className="img-fluid"
                    alt="Img"
                  />
                </span>
                <span className="banner-round-bg">
                  <ImageWithBasePath src="assets/img/banner-round-vector-13.png" alt="Img" />
                </span>
                <span className="lief-img">
                  <ImageWithBasePath src="assets/img/banner-lief-img.png" alt="Img" />
                </span>
                <span className="banner-curve-two">
                  <ImageWithBasePath src="assets/img/banner-curve-bg.png" alt="Img" />
                </span>
                <span className="chat-call-btn">
                  <Link to="/doctor/chat-doctor">Chat and Call Now</Link>
                </span>
                <div className="banner-cal-icon">
                  <span className="calender-border">
                    <ImageWithBasePath src="assets/img/icons/banner-cal-icon.svg" alt="Img" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* How it Work */}
      <div className="how-it-work-fourteen">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-4">
              <div
                className="section-work-head"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <span>Book best caregiver</span>
                <h2>
                  How it <span>Works &amp; Booking</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <ul className="work-flow-chart">
                <li data-aos="fade-up" data-aos-delay={500}>
                  <ImageWithBasePath src="assets/img/bg/chart-arrow-01.png" alt="Img" />
                  <div className="flow-chart-list">
                    <span className="chart-icon">
                      <ImageWithBasePath
                        src="assets/img/icons/flow-chart-icon-01.svg"
                        alt="Img"
                      />
                    </span>
                    <h6>Location</h6>
                    <span className="chart-count">01</span>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={600}>
                  <ImageWithBasePath src="assets/img/bg/chart-arrow-01.png" alt="Img" />
                  <div className="flow-chart-list bg-yelllow">
                    <span className="chart-icon">
                      <ImageWithBasePath
                        src="assets/img/icons/flow-chart-icon-02.svg"
                        alt="Img"
                      />
                    </span>
                    <h6>Booking</h6>
                    <span className="chart-count">02</span>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={700}>
                  <ImageWithBasePath src="assets/img/bg/chart-arrow-01.png" alt="Img" />
                  <div className="flow-chart-list">
                    <span className="chart-icon">
                      <ImageWithBasePath
                        src="assets/img/icons/flow-chart-icon-03.svg"
                        alt="Img"
                      />
                    </span>
                    <h6>Caregiver</h6>
                    <span className="chart-count">03</span>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={800}>
                  <ImageWithBasePath src="assets/img/bg/chart-arrow-02.png" alt="Img" />
                  <div className="flow-chart-list bg-yelllow">
                    <span className="chart-icon">
                      <ImageWithBasePath
                        src="assets/img/icons/flow-chart-icon-04.svg"
                        alt="Img"
                      />
                    </span>
                    <h6>Takecare</h6>
                    <span className="chart-count">04</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /How it Work */}
      {/* Service Section */}
      <section className="service-sec-fourteen">
        <div className="section-bg">
          <ImageWithBasePath src="assets/img/bg/sercice-sec-bg.png" alt="Img" />
        </div>
        <div className="container">
          <div className="section-head-fourteen">
            <h2>
              Our <span> Services</span>
            </h2>
            <p>More the quantity, higher the discount. Hurry, Buy Now!</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12 d-flex">
              <div className="service-type-cards w-100">
                <div className="service-types" data-aos="fade-down">
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-01.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Nurse at Home</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                </div>
                <div className="service-types" data-aos="fade-down">
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-02.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Mobility Assistance</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                </div>
                <div className="service-types" data-aos="fade-down">
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-03.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Physiotherapy</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                </div>
                <div className="service-types" data-aos="fade-down">
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-04.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Medical Equipment</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                </div>
                <div className="service-types" data-aos="fade-down">
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-05.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Trained Attendants</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="services-img-col w-100">
                <div className="sec-img-center">
                  <ImageWithBasePath src="assets/img/service/service-img.jpg" alt="Img" />
                </div>
                <div
                  className="img-center img-center-one"
                  data-aos="fade-down"
                  data-aos-delay={500}
                >
                  <ImageWithBasePath src="assets/img/service/service-img-01.jpg" alt="Img" />
                </div>
                <div
                  className="img-center img-center-two"
                  data-aos="fade-up"
                  data-aos-delay={800}
                >
                  <ImageWithBasePath src="assets/img/service/service-img-02.jpg" alt="Img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 d-flex">
              <div className="service-type-cards w-100">
                <div
                  className="service-types service-type-right"
                  data-aos="fade-down"
                >
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Lab Tests</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-06.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="service-types service-type-right"
                  data-aos="fade-down"
                >
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Doctor Consultation</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-07.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="service-types service-type-right"
                  data-aos="fade-down"
                >
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Mother &amp; Baby Care</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-08.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="service-types service-type-right"
                  data-aos="fade-down"
                >
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Vaccination</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-09.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                </div>
                <div
                  className="service-types service-type-right"
                  data-aos="fade-down"
                >
                  <div className="service-content">
                    <h4>
                      <Link to="/patient/search-doctor2">Tele Consultation</Link>
                    </h4>
                    <Link to="/patient/search-doctor2" className="explore-link">
                      Explore
                      <i className="feather icon-arrow-right-circle" />
                    </Link>
                  </div>
                  <div className="doctor-image">
                    <Link to="/patient/search-doctor2">
                      <ImageWithBasePath
                        src="assets/img/service/service-doctor-10.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
      {/* Top Nurses Section */}
      <section className="neraby-nurses-sec top-nurse-sec">
        <div className="container">
          <div className="section-head-fourteen" data-aos="fade-up">
            <h2>
              Top <span> Nurses </span>
            </h2>
            <p>Our Qualified Nurses</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...ourNurse} className="top-nurse-profile-slider slick-margins owl-carousel">
                <div className="nurse-profile" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-04.jpg" alt="Img" />
                    </Link>
                    <span className="badge">7+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                    <span className="calender-icon img-top-item">
                      <Link to="#">
                        <i className="feather icon-calendar" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Carolyn</Link>
                        </h5>
                        <span>United States</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          94%
                        </span>
                        1756 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        600 m
                      </span>
                    </div>
                    <div className="nurse-book">
                      <div className="nurse-fees">
                        <h5>
                          $120<span>/ day</span>
                        </h5>
                      </div>
                      <div className="book-btns">
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-05.jpg" alt="Img" />
                    </Link>
                    <span className="badge">10+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                    <span className="calender-icon img-top-item">
                      <Link to="#">
                        <i className="feather icon-calendar" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Jasmine Madeleine</Link>
                        </h5>
                        <span>United States</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-02.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          98%
                        </span>
                        1856 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        700 m
                      </span>
                    </div>
                    <div className="nurse-book">
                      <div className="nurse-fees">
                        <h5>
                          $100<span>/ day</span>
                        </h5>
                      </div>
                      <div className="book-btns">
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-06.jpg" alt="Img" />
                    </Link>
                    <span className="badge">15+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                    <span className="calender-icon img-top-item">
                      <Link to="#">
                        <i className="feather icon-calendar" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Samantha Tracey</Link>
                        </h5>
                        <span>United Kingdom</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          95%
                        </span>
                        1156 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        500 m
                      </span>
                    </div>
                    <div className="nurse-book">
                      <div className="nurse-fees">
                        <h5>
                          $150<span>/ day</span>
                        </h5>
                      </div>
                      <div className="book-btns">
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-01.jpg" alt="Img" />
                    </Link>
                    <span className="badge">7+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                    <span className="calender-icon img-top-item">
                      <Link to="#">
                        <i className="feather icon-calendar" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Elizabeth Penelope</Link>
                        </h5>
                        <span>United States</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          98%
                        </span>
                        1856 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        700 m
                      </span>
                    </div>
                    <div className="nurse-book">
                      <div className="nurse-fees">
                        <h5>
                          $140<span>/ day</span>
                        </h5>
                      </div>
                      <div className="book-btns">
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-02.jpg" alt="Img" />
                    </Link>
                    <span className="badge">5+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                    <span className="calender-icon img-top-item">
                      <Link to="#">
                        <i className="feather icon-calendar" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Dorothy Joanne</Link>
                        </h5>
                        <span>United Kingdom</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          97%
                        </span>
                        2589 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        2.5 m
                      </span>
                    </div>
                    <div className="nurse-book">
                      <div className="nurse-fees">
                        <h5>
                          $160<span>/ day</span>
                        </h5>
                      </div>
                      <div className="book-btns">
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-03.jpg" alt="Img" />
                    </Link>
                    <span className="badge">8+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                    <span className="calender-icon img-top-item">
                      <Link to="#">
                        <i className="feather icon-calendar" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Rachel Sophie</Link>
                        </h5>
                        <span>United States</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          91%
                        </span>
                        5478 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        900 m
                      </span>
                    </div>
                    <div className="nurse-book">
                      <div className="nurse-fees">
                        <h5>
                          $120<span>/ day</span>
                        </h5>
                      </div>
                      <div className="book-btns">
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="owl-nav-button">
                <div className="owl-nav top-nurse-slide-nav nav-control" />
                <Link to="/patient/doctor-profile" className="view-all">
                  View All Top Nurses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Top Nurses Section */}
      {/* Our Best Work Section */}
      <section className="our-best-work-sec">
        <div className="container">
          <div className="section-head-fourteen" data-aos="fade-down">
            <h2>See Our Best Work</h2>
            <p>More the quantity, higher the discount. hurry, buy now!</p>
          </div>
          <div className="treatment-video-main">
            <div className="row">
              <div className="col-lg-12">
                <div className="best-work-video" data-aos="fade-up">
                  <Slider 
                  asNavFor={nav2} ref={slider => (sliderRef1 = slider)}
                  className="slider work-video-img">
                    <div className="treatment-video">
                      <div className="video-img">
                        <ImageWithBasePath
                          src="assets/img/slider/video-slider-img-01.jpg"
                          alt="Slider"
                        />
                        <div className="video-player">
                          <video ref={videoRef} id="vid" className={`doctor-treatment-video ${isPlaying? 'active':''}`} loop >
                            <source
                              src="https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q="
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                      {/* <Link to="#">
                        <span className="play-btn-video">
                          <i className="feather icon-play" />
                        </span>
                        <span className="pause-btn-video">
                          <i className="feather icon-pause" />
                        </span>
                      </Link> */}
                      <Link to="#" className={`${isPlaying ? 'active' : ''}`} onClick={togglePlayback}>
                        <span className="play-btn-video" >
                          <i className="feather icon-play" />
                        </span>
                        <span className="pause-btn-video" >
                          <i className="feather icon-pause" />
                        </span>
                      </Link>
                    </div>
                    <div className="treatment-video">
                      <div className="video-img">
                        <ImageWithBasePath
                          src="assets/img/slider/video-slider-img-02.jpg"
                          alt="Slider"
                        />
                        <div className="video-player">
                          <video ref={videoRef} id="vid2" className={`doctor-treatment-video ${isPlaying2? 'active':''}`} loop >
                            <source
                              src="https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q="
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                      <Link to="#" className={`${isPlaying2 ? 'active' : ''}`} onClick={()=>setIsPlaying2(!isPlaying2)}>
                        <span className="play-btn-video" >
                          <i className="feather icon-play" />
                        </span>
                        <span className="pause-btn-video" >
                          <i className="feather icon-pause" />
                        </span>
                      </Link>
                    </div>
                    <div className="treatment-video">
                      <div className="video-img">
                        <ImageWithBasePath
                          src="assets/img/slider/video-slider-img-03.jpg"
                          alt="Slider"
                        />
                        <div className="video-player">
                          <video className={`doctor-treatment-video ${isPlaying3? 'active':''}`} loop>
                            <source
                              src="https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q="
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                      <Link to="#" id="vid3" className={`${isPlaying3 ? 'active' : ''}`} onClick={()=>setIsPlaying3(!isPlaying3)}>
                        <span className="play-btn-video">
                          <i className="feather icon-play" />
                        </span>
                        <span className="pause-btn-video">
                          <i className="feather icon-pause" />
                        </span>
                      </Link>
                    </div>
                    <div className="treatment-video">
                      <div className="video-img">
                        <ImageWithBasePath
                          src="assets/img/slider/video-slider-img-04.jpg"
                          alt="Slider"
                        />
                        <div className="video-player">
                          <video className={`doctor-treatment-video ${isPlaying4? 'active':''}`} loop>
                            <source
                              src="https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q="
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                      <Link to="#" id="vid4" className={`${isPlaying4 ? 'active' : ''}`} onClick={()=>setIsPlaying4(!isPlaying4)}>
                        <span className="play-btn-video">
                          <i className="feather icon-play" />
                        </span>
                        <span className="pause-btn-video">
                          <i className="feather icon-pause" />
                        </span>
                      </Link>
                    </div>
                  </Slider>
                  <Slider 
                   asNavFor={nav1}
                   ref={slider => (sliderRef2 = slider)}
                   slidesToShow={3}
                   swipeToSlide={true}
                   focusOnSelect={true}
                  className="slider slider-thumbnails-img">
                    <div className="slider-small-thumb">
                      <div className="small-slide-img">
                        <ImageWithBasePath
                          src="assets/img/slider/video-slider-thumb-01.jpg"
                          alt="product image"
                        />
                      </div>
                      <Link to="#" className="play-btn-small">
                        <i className="feather icon-play" />
                      </Link>
                    </div>
                    <div className="slider-small-thumb">
                      <div className="small-slide-img">
                        <ImageWithBasePath
                          src="assets/img/slider/video-slider-thumb-02.jpg"
                          alt="product image"
                        />
                      </div>
                      <Link to="#" className="play-btn-small">
                        <i className="feather icon-play" />
                      </Link>
                    </div>
                    <div className="slider-small-thumb">
                      <div className="small-slide-img">
                        <ImageWithBasePath
                          src="assets/img/slider/video-slider-thumb-03.jpg"
                          alt="product image"
                        />
                      </div>
                      <Link to="#" className="play-btn-small">
                        <i className="feather icon-play" />
                      </Link>
                    </div>
                    <div className="slider-small-thumb">
                      <div className="small-slide-img">
                        <ImageWithBasePath
                          src="assets/img/slider/video-slider-thumb-03.jpg"
                          alt="product image"
                        />
                      </div>
                      <Link to="#" className="play-btn-small">
                        <i className="feather icon-play" />
                      </Link>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Our Best Work Section */}
      {/* Nearby Nurse Section */}
      <section className="neraby-nurses-sec">
        <div className="container">
          <div className="section-head-fourteen" data-aos="fade-up">
            <h2>
              Nearby <span> Nurses </span>
            </h2>
            <p>Meet your nearby nurses</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...ourNurseSlide} className="nurse-profile-slider slick-margins owl-carousel">
                <div className="nurse-profile nurse-card" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-01.jpg" alt="Img" />
                    </Link>
                    <span className="badge">7+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Elizabeth Penelope</Link>
                        </h5>
                        <span>United States</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          98%
                        </span>
                        1856 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        700 m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile nurse-card" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-02.jpg" alt="Img" />
                    </Link>
                    <span className="badge">5+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Dorothy Joanne</Link>
                        </h5>
                        <span>United Kingdom</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          97%
                        </span>
                        2589 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        2.5 m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile nurse-card" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-03.jpg" alt="Img" />
                    </Link>
                    <span className="badge">8+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Rachel Sophie</Link>
                        </h5>
                        <span>United States</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          91%
                        </span>
                        5478 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        900 m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile nurse-card" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-04.jpg" alt="Img" />
                    </Link>
                    <span className="badge">7+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Carolyn</Link>
                        </h5>
                        <span>United States</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          94%
                        </span>
                        1756 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        600 m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile nurse-card" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-05.jpg" alt="Img" />
                    </Link>
                    <span className="badge">10+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Jasmine Madeleine</Link>
                        </h5>
                        <span>United States</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          98%
                        </span>
                        1856 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        700 m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="nurse-profile nurse-card" data-aos="fade-down">
                  <div className="nurse-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath src="assets/img/nurses/nurse-06.jpg" alt="Img" />
                    </Link>
                    <span className="badge">15+ Years Experience</span>
                    <span className="fav-item img-top-item">
                      <Link to="#" className="fav-icon">
                        <i className="feather icon-heart" />
                      </Link>
                    </span>
                  </div>
                  <div className="nurse-pofile-info">
                    <div className="d-flex justify-content-between nurse-content">
                      <div className="nurse-name">
                        <h5>
                          <Link to="/patient/doctor-profile">Samantha Tracey</Link>
                        </h5>
                        <span>United Kingdom</span>
                      </div>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/nurse-slide-badge-01.svg"
                          alt="Img"
                        />
                      </span>
                    </div>
                    <div className="nurse-details">
                      <h6>
                        <span>
                          <i className="feather icon-thumbs-up" />
                          95%
                        </span>
                        1156 Patients
                      </h6>
                      <span className="distance">
                        <i className="feather icon-map-pin" />
                        500 m
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="owl-nav-button">
                <div className="owl-nav nurse-slide-nav nav-control" />
                <Link to="/patient/doctor-profile" className="view-all">
                  View All Top Nurses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Nearby Nurse Section */}
      {/* Blog Section */}
      <section className="our-blog-fourteen">
        <div className="section-bg">
          <ImageWithBasePath src="assets/img/bg/blog-bg-14.png" alt="Img" />
        </div>
        <div className="container">
          <div className="section-head-fourteen">
            <h2>
              Our <span> Blog </span>
            </h2>
            <p>Our latest articles</p>
          </div>
          <Slider {...ourBlog} className="blog-slide-fourteen slick-margins owl-carousel">
            <div
              className="blog-grid-fourteen"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="blog-grig-img">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath src="assets/img/blog/blog-18.jpg" alt="Img" />
                </Link>
              </div>
              <div className="blog-grid-content">
                <div className="grid-head">
                  <span className="badge badge-blue">Health and Safety</span>
                  <span>01 May 2025</span>
                </div>
                <h4>
                  <Link to="/blog/blog-details">
                    Adapting Homes for Aging Gracefully: Design Tips for Old Age
                    Comfort
                  </Link>
                </h4>
                <p>
                  Explore practical design tips to make living spaces in old age
                  homes adaptable and comfortable, enhancing the quality of life
                  for seniors. Learn about accessibility, safety features, and
                  creating a warm environment.
                </p>
                <div className="grid-footer">
                  <span>
                    <i className="feather icon-eye" />
                    1k views
                  </span>
                  <Link to="/blog/blog-details">
                    Read More
                    <i className="feather icon-arrow-right-circle" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="blog-grid-fourteen"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="blog-grig-img">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath src="assets/img/blog/blog-19.jpg" alt="Img" />
                </Link>
              </div>
              <div className="blog-grid-content">
                <div className="grid-head">
                  <span className="badge badge-pink">Caregiving</span>
                  <span>06 May 2025</span>
                </div>
                <h4>
                  <Link to="/blog/blog-details">
                    Navigating the Transition: A Guide to Choosing the Right Old
                    Age Home
                  </Link>
                </h4>
                <p>
                  Explore factors to consider when selecting age home, ensuring
                  a seamless transition for your loved ones. Gain insights into
                  facility options, care services, and creating a supportive
                  environment.
                </p>
                <div className="grid-footer">
                  <span>
                    <i className="feather icon-eye" />
                    850 views
                  </span>
                  <Link to="/blog/blog-details">
                    Read More
                    <i className="feather icon-arrow-right-circle" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="blog-grid-fourteen"
              data-aos="fade-up"
              data-aos-delay={700}
            >
              <div className="blog-grig-img">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath src="assets/img/blog/blog-20.jpg" alt="Img" />
                </Link>
              </div>
              <div className="blog-grid-content">
                <div className="grid-head">
                  <span className="badge badge-info">Physiotherapy</span>
                  <span>10 May 2025</span>
                </div>
                <h4>
                  <Link to="/blog/blog-details">
                    Empowering Aging Bodies: The Impact of Physiotherapy in Old
                    Age Home Wellness
                  </Link>
                </h4>
                <p>
                  Discover the transformative effects of physiotherapy in home
                  care, focusing on tailored interventions that address mobility
                  challenges, pain management, and overall physical health for
                  elderly residents.
                </p>
                <div className="grid-footer">
                  <span>
                    <i className="feather icon-eye" />
                    4.5k views
                  </span>
                  <Link to="/blog/blog-details">
                    Read More
                    <i className="feather icon-arrow-right-circle" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="blog-grid-fourteen"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <div className="blog-grig-img">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath src="assets/img/blog/blog-18.jpg" alt="Img" />
                </Link>
              </div>
              <div className="blog-grid-content">
                <div className="grid-head">
                  <span className="badge badge-pink">Health and Safety</span>
                  <span>01 May 2025</span>
                </div>
                <h4>
                  <Link to="/blog/blog-details">
                    Adapting Homes for Aging Gracefully: Design Tips for Old Age
                    Comfort
                  </Link>
                </h4>
                <p>
                  Explore practical design tips to make living spaces in old age
                  homes adaptable and comfortable, enhancing the quality of life
                  for seniors. Learn about accessibility, safety features, and
                  creating a warm environment.
                </p>
                <div className="grid-footer">
                  <span>
                    <i className="feather icon-eye" />
                    1k views
                  </span>
                  <Link to="/blog/blog-details">
                    Read More
                    <i className="feather icon-arrow-right-circle" />
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
          <div className="owl-nav-button">
            <div className="owl-nav blog-slide-nav nav-control" />
            <Link to="/blog/blog-grid" className="view-all">
              View All Blogs
            </Link>
          </div>
        </div>
      </section>
      {/* /Blog Section */}
      {/* Pricing Section */}
      <section className="pricing-plane-sec">
        <div className="container">
          <div className="section-head-fourteen">
            <h2>
              Pricing <span> Plan </span>
            </h2>
            <p>No extra charges, no surprise fees</p>
          </div>
          <div className="price-sec-main">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="price-plane-card">
                  <div className="price-head">
                    <h4>Basic</h4>
                    <h3>
                      $99 <span>/monthly</span>
                    </h3>
                  </div>
                  <div className="plane-includes">
                    <h5>What’s included</h5>
                    <ul>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Emergency support
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        In-person care manager visits
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Healthcare support
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Home Care (as needed)
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Safety &amp; Security
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Engagement assistance
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Physiotherapy/ counselor{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="plane-btn">
                    <Link
                      to="/pages/login-email"
                      className="btn btn-primary w-100"
                    >
                      Choose Plans
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={700}
              >
                <div className="price-plane-card active">
                  <div className="price-head">
                    <h4>Premium</h4>
                    <h3>
                      $120 <span>/monthly</span>
                    </h3>
                  </div>
                  <div className="plane-includes">
                    <h5>What’s included</h5>
                    <ul>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Emergency support
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        In-person care manager visits
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Healthcare support
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Home Care (as needed)
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Safety &amp; Security
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Engagement assistance
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Physiotherapy/ counselor{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="plane-btn">
                    <Link
                      to="/pages/login-email"
                      className="btn btn-primary w-100"
                    >
                      Choose Plans
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={900}
              >
                <div className="price-plane-card">
                  <div className="price-head">
                    <h4>Enterprise</h4>
                    <h3>
                      $199 <span>/monthly</span>
                    </h3>
                  </div>
                  <div className="plane-includes">
                    <h5>What’s included</h5>
                    <ul>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Emergency support
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        In-person care manager visits
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Healthcare support
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-check" />
                        Home Care (as needed)
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Safety &amp; Security
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Engagement assistance
                      </li>
                      <li>
                        <i className="fa-solid fa-circle-xmark" />
                        Physiotherapy/ counselor{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="plane-btn">
                    <Link
                      to="/pages/login-email"
                      className="btn btn-primary w-100"
                    >
                      Choose Plans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Pricing Section */}
      {/* Faq Section */}
      <section className="faq-sec-fourteen">
        <div className="container">
          <div className="section-head-fourteen">
            <h2>
              Have any <span> Questions? </span>
            </h2>
            <p>No extra charges, no surprise fees</p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="faq-main-cards" id="accordionExample">
                <div className="faq-card aos" data-aos="fade-down">
                  <div className="faq-title">
                    <Link
                      data-bs-toggle="collapse"
                      to="#faqOne"
                      aria-expanded="false"
                    >
                      <span>Q</span>
                      <div className="faq-content">
                        <h6>Is assisted living for me?</h6>
                        <div
                          id="faqOne"
                          className="card-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            Despite your best efforts to provide elder care at
                            home, you may find that the level of care required
                            is simply too demanding. With increase in
                            dependency, you may find that you’re unable to
                            provide assistance yourself or through at-home
                            caregivers. In such a situation, an assisted living
                            facility is the best option. A team of skilled and
                            experienced caregivers are better suited to be able
                            to take care of your loved ones’ every need.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="faq-card aos" data-aos="fade-down">
                  <div className="faq-title">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqtwo"
                      aria-expanded="false"
                    >
                      <span>Q</span>
                      <div className="faq-content">
                        <h6>
                          Can you treat my relation with dementia &amp; help
                          with recovery?
                        </h6>
                        <div
                          id="faqtwo"
                          className="card-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            An otolaryngologist is a doctor who specializes in
                            the diagnosis and treatment of ear, nose and throat
                            diseases as well as related structures of the head
                            and neck. Otolaryngologists are also referred to as
                            ENT doctors or physicians. For more information
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="faq-card aos" data-aos="fade-down">
                  <div className="faq-title">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqthree"
                      aria-expanded="false"
                    >
                      <span>Q</span>
                      <div className="faq-content">
                        <h6>Is there a doctor on the premises?</h6>
                        <div
                          id="faqthree"
                          className="card-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            An otolaryngologist is a doctor who specializes in
                            the diagnosis and treatment of ear, nose and throat
                            diseases as well as related structures of the head
                            and neck. Otolaryngologists are also referred to as
                            ENT doctors or physicians. For more information
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="faq-card aos" data-aos="fade-down">
                  <div className="faq-title">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqfour"
                      aria-expanded="false"
                    >
                      <span>Q</span>
                      <div className="faq-content">
                        <h6>How can we pay for long-term care?</h6>
                        <div
                          id="faqfour"
                          className="card-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            An otolaryngologist is a doctor who specializes in
                            the diagnosis and treatment of ear, nose and throat
                            diseases as well as related structures of the head
                            and neck. Otolaryngologists are also referred to as
                            ENT doctors or physicians. For more information
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="faq-card aos" data-aos="fade-down">
                  <div className="faq-title">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#faqfive"
                      aria-expanded="false"
                    >
                      <span>Q</span>
                      <div className="faq-content">
                        <h6>What is Respite Care?</h6>
                        <div
                          id="faqfive"
                          className="card-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            An otolaryngologist is a doctor who specializes in
                            the diagnosis and treatment of ear, nose and throat
                            diseases as well as related structures of the head
                            and neck. Otolaryngologists are also referred to as
                            ENT doctors or physicians. For more information
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="faq-sec-imgs">
                <span className="faq-img-one">
                  <ImageWithBasePath src="assets/img/faq-sec-img-01.png" alt="Img" />
                </span>
                <span className="faq-img-two">
                  <ImageWithBasePath src="assets/img/faq-sec-img-02.png" alt="Img" />
                </span>
                <span className="faq-img-three">
                  <ImageWithBasePath src="assets/img/faq-sec-img-03.png" alt="Img" />
                </span>
                <span className="faq-img-four">
                  <ImageWithBasePath src="assets/img/faq-sec-img-04.png" alt="Img" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Faq Section */}
      <Home13Footer />
    </div>
  );
};

export default Home13;
