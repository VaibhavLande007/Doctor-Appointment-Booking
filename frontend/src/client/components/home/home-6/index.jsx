import React, { useEffect, useState } from "react";
import Home6Footer from "./footer";
import Home6Header from "./header";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from "aos";
import "aos/dist/aos.css";
import { Calendar } from "primereact/calendar";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Dropdown } from "primereact/dropdown";
import { TimePicker } from 'antd'


const Home6 = () => {
  const [selectedValue1, setSelectedValue1] = useState();
  const [selectedValue2, setSelectedValue2] = useState();
  const [selectedValue3, setSelectedValue3] = useState();
  const [selectedValue4, setSelectedValue4] = useState();

  const [selectedTime, setSelectedTime] = useState();

  const handleTimeChange = (value) => {
    setSelectedTime(value);
  };
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="nav nav-container slide-11 owl-nav">
        <button type="button" role="presentation" className="owl-next" onClick={onClick}>
            <i className="fa-solid fa-arrow-right" />
        </button>
    </div>
);

const CustomPrevArrow = ({ className, onClick }) => (
    <div className="nav nav-container slide-11 owl-nav">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fa-solid fa-arrow-left" />
        </button>
    </div>
);
  const selectValue1 = [
    { name: "Hospital" },
    { name: "Online" },
    { name: "Offline" },
  ];
  const selectValue2 = [
    { name: "Doctor Name" },
    { name: "George" },
    { name: "Matthew" },
  ];
  const selectValue3 = [
    { name: "Online Consultation" },
    { name: "Online" },
    { name: "Offline" },
  ];
  const selectValue4 = [
    { name: "Appointment Type" },
    { name: "Online" },
    { name: "Offline" },
  ];
  
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);

  const specialSlider = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
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
  const eyeTestiSlider = {
    slidesToShow: 1,
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
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main-wrapper">
      <Home6Header />
      {/* Home Banner */}
      <section className="doctor-search-section doctor-search-eleven">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 aos" data-aos="fade-up">
              <div className="banner-header">
                <p>Take Eye Care Solution from Experts</p>
                <h1>Eye care &amp; holistic Care experts</h1>
              </div>
              <div className="search-box-fourteen aos" data-aos="fade-up">
                <form action="booking-2.html" className="form-block d-flex">
                  <div className="search-input">
                    <div className="forms-block">
                      <label className="mb-0">Date</label>
                      <Calendar
                        value={date1}
                        onChange={(e) => setDate1(e.value)}
                        placeholder="Thu, Mar 24, 2023"
                        className="custom-date-picker"
                      />
                    </div>
                  </div>
                  <div className="search-input">
                    <div className="forms-block mb-0">
                      <label className="location-icon">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="San Diego Branch"
                      />
                    </div>
                  </div>
                  <div className="search-btn">
                    <button className="btn btn-primary" type="submit">
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
              <div className="banner-users">
                <h6>
                  <ImageWithBasePath
                    src="assets/img/icons/star.svg"
                    alt="img"
                  />
                  4.8 Well Experienced
                </h6>
                <ul>
                  <li>
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctor-profiles/doc-profile-01.jpg"
                        alt="img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctor-profiles/doc-profile-02.jpg"
                        alt="img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctor-profiles/doc-profile-03.jpg"
                        alt="img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctor-profiles/doc-profile-04.jpg"
                        alt="img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctor-profiles/doc-profile-05.jpg"
                        alt="img"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctor-profiles/doc-profile-06.jpg"
                        alt="img"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 aos" data-aos="fade-up">
              <ImageWithBasePath
                src="assets/img/banner-11.png"
                className="img-fluid dr-img dr-eye-home-img"
                alt="eye-doctor"
              />
            </div>
          </div>
        </div>
        <div className="ban-bg">
          <ImageWithBasePath
            src="assets/img/bg/eyecare-home-bg-01.png"
            className="bg-01"
            alt="Img"
          />
        </div>
      </section>
      {/* /Home Banner */}
      {/* Specialties Section */}
      <section className="special-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading sec-heading-eye text-center">
                <h2>
                  <span>Our</span> Specialties
                </h2>
                <p>The Great Place Of Eyecare Hospital Center</p>
              </div>
            </div>
          </div>
          <div className="special owl-them slick-margins-15 eye-dots aos" data-aos="fade-up">
            <Slider {...specialSlider}>
              <div className="item">
                <div className="special-item">
                  <div className="special-img">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/clinic/clinic-06.png"
                        alt="eye-clinic"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="special-icon">
                    <Link to="#">
                      <i className="fa-solid fa-circle-chevron-right" />
                    </Link>
                  </div>
                  <h6>
                    <Link to="#">Cataract</Link>
                  </h6>
                </div>
              </div>
              <div className="item">
                <div className="special-item">
                  <div className="special-img">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/clinic/clinic-02.png"
                        alt="eye-clinic"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="special-icon">
                    <Link to="#">
                      <i className="fa-solid fa-circle-chevron-right" />
                    </Link>
                  </div>
                  <h6>
                    <Link to="#">Corneal Ulcer </Link>
                  </h6>
                </div>
              </div>
              <div className="item">
                <div className="special-item">
                  <div className="special-img">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/clinic/clinic-03.png"
                        alt="eye-clinic"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="special-icon">
                    <Link to="#">
                      <i className="fa-solid fa-circle-chevron-right" />
                    </Link>
                  </div>
                  <h6>
                    <Link to="#">Keratoconus</Link>
                  </h6>
                </div>
              </div>
              <div className="item">
                <div className="special-item">
                  <div className="special-img">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/clinic/clinic-01.png"
                        alt="eye-clinic"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="special-icon">
                    <Link to="#">
                      <i className="fa-solid fa-circle-chevron-right" />
                    </Link>
                  </div>
                  <h6>
                    <Link to="#">Glaucoma</Link>
                  </h6>
                </div>
              </div>
              <div className="item">
                <div className="special-item">
                  <div className="special-img">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/clinic/clinic-05.png"
                        alt="eye-clinic"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="special-icon">
                    <Link to="#">
                      <i className="fa-solid fa-circle-chevron-right" />
                    </Link>
                  </div>
                  <h6>
                    <Link to="#">Keratoconus</Link>
                  </h6>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* /Specialties Section */}
      {/* Center Section */}
      <section className="center-section">
        <div className="ban-bg">
          <ImageWithBasePath
            src="assets/img/bg/center-bg.png"
            alt="design-image"
            className="img-fluid bg-05"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 aos" data-aos="fade-up">
              <div className="center-img">
                <ImageWithBasePath
                  src="assets/img/hospital.png"
                  alt="eye-checkup"
                  className="img-fluid"
                />
                <div className="center-service">
                  <span>
                    <i className="fa-solid fa-headphones" />
                  </span>
                  <div>
                    <h6>24/7 Service</h6>
                    <p>We are available when you want</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 aos" data-aos="fade-up">
              <div className="center-info">
                <div className="section-heading sec-heading-eye">
                  <h2>
                    <span>Who</span> We Are
                  </h2>
                  <p>The Great Place Of Eyecare Hospital Center</p>
                </div>
                <p>
                  At Doccure, we understand the importance of clear vision and
                  comprehensive eye care. Our dedicated team of experienced
                  optometrists and ophthalmologists is committed to providing
                  top-notch eye care services tailored to your individual needs.
                </p>
                <p>
                  We envision a world where everyone enjoys optimal eye health
                  and experiences the beauty of life with clear vision.
                </p>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="care-box">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/eyecare-icon-01.svg"
                        alt="doctor-image"
                        className="img-fluid"
                      />
                    </span>
                    <h6>Expert Professionals and World Class Facilities</h6>
                    <Link to="doctor-search-grid.html">
                      Find Doctors
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="care-box">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/eyecare-icon-02.svg"
                        alt="doctor-image"
                        className="img-fluid"
                      />
                    </span>
                    <h6>Specialty Eyecare treatment for all</h6>
                    <Link to="/patient/booking1">
                      Book Now
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="care-box">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/eyecare-icon-03.svg"
                        alt="doctor-image"
                        className="img-fluid"
                      />
                    </span>
                    <h6>Online Appointment and Excellent Treatment</h6>
                    <Link to="/patient/booking2">
                      Make an Appointment
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Center Section */}
      {/* Counter Section */}
      <section className="counter-section">
        <div className="ban-bg">
          <ImageWithBasePath
            src="assets/img/bg/counter-bg.png"
            alt="design-image"
            className="img-fluid bg-06"
          />
          <ImageWithBasePath
            src="assets/img/bg/counter-bg-01.png"
            alt="eye-image"
            className="img-fluid bg-07"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 ">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/count-01.svg"
                    alt="doctor-image"
                    className="img-fluid"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={180} duration={5} className="count-digit" />+
                  </h3>
                  <p>Expert Doctors</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/count-02.svg"
                    alt="stethoscope"
                    className="img-fluid"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={26} duration={5} className="count-digit" />+
                  </h3>
                  <p>Expert Services</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/count-03.svg"
                    alt="smiley-icon"
                    className="img-fluid"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={10} duration={5} className="count-digit" />
                    K+
                  </h3>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/count-04.svg"
                    alt="award-icon"
                    className="img-fluid"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={150} duration={5} className="count-digit" />+
                  </h3>
                  <p>Best Awards Winner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Counter Section */}
      {/* Clinic Section */}
      <section className="eyeclinics-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <h2>
                  <span>Our</span> Specialties
                </h2>
                <p>The Great Place Of Eyecare Hospital Center</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="our-doctors-card eye-doc">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/eye-special-doc-01.jpg"
                      alt="Andrea"
                      className="img-fluid"
                    />
                  </Link>
                  <span className="rating-top-img">
                    <i className="fa-solid fa-star filled" />
                    4.9
                  </span>
                </div>
                <div className="doctors-body d-flex align-items-center justify-content-between">
                  <div className="doc-card-info">
                    <h4>
                      <Link to="/patient/doctor-profile">
                        Dr. Carrie Rosario
                      </Link>
                    </h4>
                    <p>MBBS, DOMS - Ophthalmology</p>
                  </div>
                  <div className="next-arrow">
                    <Link to="/patient/doctor-profile">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="our-doctors-card eye-doc">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/eye-special-doc-02.jpg"
                      alt="Andrea"
                      className="img-fluid"
                    />
                  </Link>
                  <span className="rating-top-img">
                    <i className="fa-solid fa-star filled" />
                    4.5
                  </span>
                </div>
                <div className="doctors-body d-flex align-items-center justify-content-between">
                  <div className="doc-card-info">
                    <h4>
                      <Link to="/patient/doctor-profile">Dr. Eric Hansley</Link>
                    </h4>
                    <p>MBBS, MS - Surgeon</p>
                  </div>
                  <div className="next-arrow">
                    <Link to="/patient/doctor-profile">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="our-doctors-card eye-doc">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/eye-special-doc-03.jpg"
                      alt="Andrea"
                      className="img-fluid"
                    />
                  </Link>
                  <span className="rating-top-img">
                    <i className="fa-solid fa-star filled" />
                    4.3
                  </span>
                </div>
                <div className="doctors-body d-flex align-items-center justify-content-between">
                  <div className="doc-card-info">
                    <h4>
                      <Link to="/patient/doctor-profile">
                        Dr. Mary Wilkinson
                      </Link>
                    </h4>
                    <p>MBBS, DNB - Ophthalmology</p>
                  </div>
                  <div className="next-arrow">
                    <Link to="/patient/doctor-profile">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Clinic Section */}
      {/* Store Section */}
      <section className="store-section">
        <div className="sec-bg-img">
          <ImageWithBasePath src="assets/img/bg/our-store-bg.png" alt="Img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <h2>
                  <span>Our</span> Store
                </h2>
                <p>Great Reasons For People Choose Doccure Store</p>
              </div>
              <ul className="store-tab nav">
                <li>
                  <Link
                    to="#"
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#eyeglass"
                  >
                    Eye Glasses
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#computer">
                    Computer Glasses
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#kids">
                    Kids Glasses
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#lense">
                    Contact Lenses
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#sunglass">
                    Sunglasses
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tab"
                    data-bs-target="#readingglass"
                  >
                    Reading Glasses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content">
            {/* Eye Glass */}
            <div className="tab-pane active" id="eyeglass">
              <div className="eye-blogslider eye-dots slick-margins-15 owl-them aos" data-aos="fade-up">
                <Slider {...specialSlider}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-01.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <span className="store-cat">New</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Nerdlane
                          </Link>
                        </h4>
                        <p>Black Full Frame Wayfarer Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$490</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-02.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Mirar Aviator
                          </Link>
                        </h4>
                        <p>Blue Full Frame Eyeglass</p>
                        <div className="price-tag">
                          <Link to="/Pharmacy/cart" className="cart-add">
                            Add to Cart
                          </Link>
                          <ul className="color-selection">
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-03.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <span className="store-cat">New</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Izibuko
                          </Link>
                        </h4>
                        <p>Gold Rectangle Frame Eyeglass</p>
                        <div className="price-tag">
                          <h5>$450</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-04.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Vistazo
                          </Link>
                        </h4>
                        <p>
                          Gold Full Frame Cateye Eyeglasses for Men and Women
                        </p>
                        <div className="price-tag">
                          <h5>$490</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-06.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">Tintin</Link>
                        </h4>
                        <p>Full Frame tintin Eyeglasses</p>
                        <div className="price-tag">
                          <Link to="/Pharmacy/cart" className="cart-add">
                            Add to Cart
                          </Link>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* /Eye Glass */}
            {/* Computer Glass */}
            <div className="tab-pane fade" id="computer">
              <div className="eye-blogslider eye-dots slick-margins-15 owl-them aos" data-aos="fade-up">
                <Slider {...specialSlider}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-06.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Danzier
                          </Link>
                        </h4>
                        <p>Black Frame Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$390</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-02.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">Fasil</Link>
                        </h4>
                        <p>Black Frame Computer Eyeglasses</p>
                        <div className="price-tag">
                          <Link to="/Pharmacy/cart" className="cart-add">
                            Add to Cart
                          </Link>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-05.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Coolers
                          </Link>
                        </h4>
                        <p>Gold Full Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$370</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-04.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Eye Protect
                          </Link>
                        </h4>
                        <p>Frame Cateye Eyeglasses for Women</p>
                        <div className="price-tag">
                          <h5>$410</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-03.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Computer Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Viratio
                          </Link>
                        </h4>
                        <p>
                          Gold Full Frame Cateye Eyeglasses for Men and Women
                        </p>
                        <div className="price-tag">
                          <h5>$420</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* /Computer Glass */}
            {/* Kids Glass */}
            <div className="tab-pane fade" id="kids">
              <div className="eye-blogslider eye-dots slick-margins-15 owl-them aos" data-aos="fade-up">
                <Slider {...specialSlider}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-07.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Readers
                          </Link>
                        </h4>
                        <p>Black Full Frame kids Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$490</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-08.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Sight Care
                          </Link>
                        </h4>
                        <p>Black Full Frame Kids Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$690</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-09.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Aviator
                          </Link>
                        </h4>
                        <p>Gold Full Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$240</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-10.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">Zibuko</Link>
                        </h4>
                        <p>Glossy Full Frame Cateye Eyeglasses for Women</p>
                        <div className="price-tag">
                          <Link to="/Pharmacy/cart" className="cart-add">
                            Add to Cart
                          </Link>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-03.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">Seeier</Link>
                        </h4>
                        <p>
                          Gold Full Frame Cateye Eyeglasses for Men and Women
                        </p>
                        <div className="price-tag">
                          <h5>$480</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* /Kids Glass */}
            {/* Lense Glass */}
            <div className="tab-pane fade" id="lense">
              <div className="eye-blogslider eye-dots slick-margins-15 owl-them aos" data-aos="fade-up">
                <Slider {...specialSlider}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-14.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Lenzomania
                          </Link>
                        </h4>
                        <p>Wayfarer Contact Lense</p>
                        <div className="price-tag">
                          <h5>$120</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-15.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Contacto
                          </Link>
                        </h4>
                        <p>Contact Lense</p>
                        <div className="price-tag">
                          <h5>$290</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-16.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Viator Lense
                          </Link>
                        </h4>
                        <p>Contact Lense</p>
                        <div className="price-tag">
                          <h5>$190</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-14.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Eizio Cart
                          </Link>
                        </h4>
                        <p>Glossy Blue Lenses</p>
                        <div className="price-tag">
                          <h5>$430</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-15.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Kids Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            ContactLense Cart
                          </Link>
                        </h4>
                        <p>
                          Gold Full Frame Cateye Eyeglasses for Men and Women
                        </p>
                        <div className="price-tag">
                          <h5>$280</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* /Lense Glass */}
            {/* Sunglass Glass */}
            <div className="tab-pane fade" id="sunglass">
              <div className="eye-blogslider eye-dots slick-margins-15 owl-them aos" data-aos="fade-up">
                <Slider {...specialSlider}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-12.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Sunglass
                          </Link>
                        </h4>
                        <p>Black Sunglasses</p>
                        <div className="price-tag">
                          <h5>$350</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-10.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Carezio
                          </Link>
                        </h4>
                        <p>Black Frame sun Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$550</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-11.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Aviator Sunglasses
                          </Link>
                        </h4>
                        <p>Gold Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$390</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-04.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Buzanio Glass
                          </Link>
                        </h4>
                        <p>Glossy Blue sun Cateye Eyeglasses for Women</p>
                        <div className="price-tag">
                          <h5>$430</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-13.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Sun Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Sunrace Buy
                          </Link>
                        </h4>
                        <p>Full Frame Cateye Eyeglasses for Men and Women</p>
                        <div className="price-tag">
                          <h5>$480</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* /Sun Glass */}
            {/* Reading Glass */}
            <div className="tab-pane fade" id="readingglass">
              <div className="eye-blogslider eye-dots slick-margins-15 owl-them aos" data-aos="fade-up">
                <Slider {...specialSlider}>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-01.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Nerdlane
                          </Link>
                        </h4>
                        <p>Black Full Frame Wayfarer Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$390</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-02.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Mirar Aviator Eyeglasses
                          </Link>
                        </h4>
                        <p>Gold Full Frame for Men and Women</p>
                        <div className="price-tag">
                          <h5>$580</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="gold-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="grey-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-03.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Izibuko
                          </Link>
                        </h4>
                        <p>Blue Full Frame Eyeglasses for Women</p>
                        <div className="price-tag">
                          <h5>$450</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-04.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Vistazo
                          </Link>
                        </h4>
                        <p>Gold Full Frame Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$370</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="sand-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="store-item">
                      <div className="store-img">
                        <Link to="/Pharmacy/product-description">
                          <ImageWithBasePath
                            src="assets/img/stores/store-07.jpg"
                            alt="eye-glass"
                            className="img-fluid"
                          />
                        </Link>
                        <span className="glass-cat">Power Glass</span>
                        <div className="overlay-top-items">
                          <Link to="#" className="fav-icon">
                            <i className="fa-solid fa-heart" />
                          </Link>
                          <Link to="/Pharmacy/product-description">
                            <i className="fa-solid fa-eye" />
                          </Link>
                          <Link to="#">
                            <i className="fa-solid fa-layer-group" />
                          </Link>
                        </div>
                      </div>
                      <div className="store-content">
                        <h4>
                          <Link to="/Pharmacy/product-description">
                            Dlanerz
                          </Link>
                        </h4>
                        <p>Full Frame Eyeglasses</p>
                        <div className="price-tag">
                          <h5>$320</h5>
                          <ul className="color-selection">
                            <li>
                              <span className="black-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                            <li>
                              <span className="blue-glass">
                                <i className="fa-solid fa-circle" />
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            {/* /Reading Glass */}
          </div>
        </div>
      </section>
      {/* /Store Section */}
      {/* Offer Section */}
      <section className="offer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex">
              <div className="offer-wrap flex-fill">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="off-img">
                      <ImageWithBasePath
                        src="assets/img/offer-01.png"
                        alt="eye-test image"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="off-info">
                      <h6>NEW USER OFFER</h6>
                      <p>21 - 25 April 2025</p>
                      <h5>Free Eye Camp </h5>
                      <Link to="#" className="btn btn-light-blue">
                        Book Now
                      </Link>
                    </div>
                    <div className="eye-card-bg">
                      <ImageWithBasePath
                        src="assets/img/bg/eye-card-bg-04.png"
                        className="bg-bottom"
                        alt="Img"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/eye-card-bg-02.png"
                        className="bg-top"
                        alt="Img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="offer-wrap flat-offer flex-fill">
                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="off-img">
                      <ImageWithBasePath
                        src="assets/img/offer-02.png"
                        alt="eye-glass"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="off-info">
                      <h6>Flat 30% OffER</h6>
                      <p>21 April 2025</p>
                      <h5>Crystal Clear </h5>
                      <Link to="#" className="btn btn-light-blue">
                        Buy Now
                      </Link>
                    </div>
                    <div className="eye-card-bg">
                      <ImageWithBasePath
                        src="assets/img/bg/eye-card-bg-04.png"
                        className="bg-bottom"
                        alt="Img"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/eye-card-bg-03.png"
                        className="bg-top"
                        alt="Img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Offer Section */}
      {/* Facility Section */}
      <section className="facilities-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <h2>
                  <span>Top</span> Facilities
                </h2>
                <p>The Great Place Of Eyecare Hospital Center</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="facility-box">
                <div className="facility-img">
                  <ImageWithBasePath
                    src="assets/img/features/facility-01.jpg"
                    alt="eye-test image"
                    className="img-fluid"
                  />
                </div>
                <Link
                  to="#"
                  className="btn btn-primary consult-btn"
                >
                  Consultation rooms
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="facility-box">
                    <div className="facility-img">
                      <ImageWithBasePath
                        src="assets/img/features/facility-02.jpg"
                        alt="eye-test image"
                        className="img-fluid"
                      />
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary consult-btn"
                    >
                      Consultation rooms
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="facility-box">
                    <div className="facility-img">
                      <ImageWithBasePath
                        src="assets/img/features/facility-03.jpg"
                        alt="eye-test image"
                        className="img-fluid"
                      />
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary consult-btn"
                    >
                      Consultation
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="facility-box">
                    <div className="facility-img">
                      <ImageWithBasePath
                        src="assets/img/features/facility-04.jpg"
                        alt="laboratory"
                        className="img-fluid"
                      />
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary consult-btn"
                    >
                      Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="facility-box">
                    <div className="facility-img">
                      <ImageWithBasePath
                        src="assets/img/features/facility-05.jpg"
                        alt="laboratory"
                        className="img-fluid"
                      />
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary consult-btn"
                    >
                      Consultation
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="facility-box">
                    <div className="facility-img">
                      <ImageWithBasePath
                        src="assets/img/features/facility-06.jpg"
                        alt="eye-test image"
                        className="img-fluid"
                      />
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary consult-btn"
                    >
                      Consultation
                    </Link>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="facility-box">
                    <div className="facility-img">
                      <ImageWithBasePath
                        src="assets/img/features/facility-07.jpg"
                        alt="pharmacy-shop"
                        className="img-fluid"
                      />
                    </div>
                    <Link
                      to="#"
                      className="btn btn-primary consult-btn"
                    >
                      Consultation rooms
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Facility Section */}
      {/* Blog Section */}
      <section className="our-blog-section eye-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <h2>
                  <span>Blog</span> Post
                </h2>
                <p>The Great Place Of Eyecare Hospital Center</p>
              </div>
            </div>
          </div>
          <div className="eye-blogslider eye-dots slick-margins-15 owl-them aos" data-aos="fade-up">
            <Slider {...specialSlider}>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        src="assets/img/blog/eye-blog-01.jpg"
                        alt="blog-image"
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <span className="blog-cat">Orthoptics</span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <h4>
                      <Link to="/blog/blog-details">
                        Clear Vision: Understanding the Importance of Eye Exams
                      </Link>
                    </h4>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      Read More
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        src="assets/img/blog/eye-blog-02.jpg"
                        alt="blog-image"
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <span className="blog-cat">Glaucoma</span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <h4>
                      <Link to="/blog/blog-details">
                        Foods for Healthy Vision and Age Degeneration Prevention
                      </Link>
                    </h4>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      Read More
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        src="assets/img/blog/eye-blog-03.jpg"
                        alt="blog-image"
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <span className="blog-cat">Corneal Ulcer </span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <h4>
                      <Link to="/blog/blog-details">
                        Tips for Protecting Your Eyes in the Digital Age
                      </Link>
                    </h4>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      Read More
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        src="assets/img/blog/eye-blog-04.jpg"
                        alt="blog-image"
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <span className="blog-cat">Keratoconus</span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <Link to="/blog/blog-details">
                      <h4>
                        The ABCs of LASIK Surgery: What to Expect and Consider
                      </h4>
                    </Link>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      Read More
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="our-blogs">
                  <div className="blogs-img">
                    <Link to="/blog/blog-details">
                      <ImageWithBasePath
                        src="assets/img/blog/eye-blog-04.jpg"
                        alt="blog-image"
                        className="img-fluid blog-inner-img"
                      />
                    </Link>
                    <div className="blogs-overlay">
                      <span className="blog-cat">Orthoptics</span>
                    </div>
                  </div>
                  <div className="blogs-info">
                    <Link to="/blog/blog-details">
                      <h4>There are many variations of passages</h4>
                    </Link>
                    <Link to="/blog/blog-details" className="blogs-btn">
                      Read More
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* /Blog Section */}
      {/* Testimonials Section */}
      <section className="eye-testimonial-section">
        <div className="sec-bg-img">
          <ImageWithBasePath src="assets/img/bg/testi-round-bg.png" alt="Img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <h2>
                  <span>Client</span> Testimonials
                </h2>
                <p>What our clients say about us</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="testi-img">
                <ImageWithBasePath
                  src="assets/img/testimonial.jpg"
                  alt="client-image"
                  className="img-fluid"
                />
                <span className="testi-icon">
                  <i className="fa-solid fa-quote-left" />
                </span>
              </div>
              <div className="testi-users">
                <div className="nav nav-container slide-11" />
                <ul>
                  <li>
                    <ImageWithBasePath
                      src="assets/img/clients/client-01.jpg"
                      alt="client-image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <ImageWithBasePath
                      src="assets/img/clients/client-02.jpg"
                      alt="client-image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <ImageWithBasePath
                      src="assets/img/clients/client-03.jpg"
                      alt="client-image"
                      className="img-fluid"
                    />
                  </li>
                  <li>
                    <ImageWithBasePath
                      src="assets/img/clients/client-04.jpg"
                      alt="client-image"
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <div className="eye-testislider slick-arrow-right">
                <Slider {...eyeTestiSlider}>
                  <div className="testimonial-wrap">
                    <h4>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy
                    </p>
                    <div className="testimonial-user">
                      <h6>Elizabeth Forsyth</h6>
                      <p>Las Vegas, USA</p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <h4>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy
                    </p>
                    <div className="testimonial-user">
                      <h6>Leigh Baley</h6>
                      <p>San Jose, USA</p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <h4>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical
                    </h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy
                    </p>
                    <div className="testimonial-user">
                      <h6>Jon Sparks</h6>
                      <p>Irvine, USA</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Testimonials Section */}
      {/* Appointment Section */}
      <section className="appointment-section">
        <div className="appointment-form">
          <div className="container">
            <div className="row">
              <div className="col-md-12 aos" data-aos="fade-up">
                <div className="section-heading text-center sec-heading-eye">
                  <h2 className="text-white">Book an appointment</h2>
                </div>
              </div>
            </div>
            <form action="#" className="doctor-search-form">
              <div className="row">
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom ">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                      <i className="feather icon-user" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <i className="feather icon-mail" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                      <i className="feather icon-phone" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom">
                    <Dropdown
                          value={selectedValue1}
                          onChange={(e) => setSelectedValue1(e.value)}
                          options={selectValue1}
                          optionLabel="name"
                          placeholder="Hospital"
                          className="custom-prime-select bg-prime-select"
                        />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom">
                    <Dropdown
                          value={selectedValue2}
                          onChange={(e) => setSelectedValue2(e.value)}
                          options={selectValue2}
                          optionLabel="name"
                          placeholder="Doctor Name"
                          className="custom-prime-select bg-prime-select"
                        />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom">
                    <Dropdown
                          value={selectedValue3}
                          onChange={(e) => setSelectedValue3(e.value)}
                          options={selectValue3}
                          optionLabel="name"
                          placeholder="Online Consultation"
                          className="custom-prime-select bg-prime-select"
                        />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom p-cal">
                    <Calendar
                        value={date2}
                        onChange={(e) => setDate2(e.value)}
                        placeholder="Date"
                        className="custom-date-picker w-100 changes-date"
                      />
                      <i className="feather icon-calendar" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom ant-time-picker">
                      
                      <TimePicker
                          
                          use12Hours
                          placeholder="Choose"
                          format="h:mm A"
                          className="timepicker1 w-100 time-picker-react"
                        />
                      <i className="feather icon-clock" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="forms-block">
                    <div className="form-custom">
                    <Dropdown
                          value={selectedValue4}
                          onChange={(e) => setSelectedValue4(e.value)}
                          options={selectValue4}
                          optionLabel="name"
                          placeholder="Appointment Type"
                          className="custom-prime-select bg-prime-select"
                        />
                    </div>
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <Link
                    to="/patient/search-doctor1"
                    className="btn btn-light-blue app-btn"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="ban-bg">
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-01.png"
              alt="eye-icon"
              className="img-fluid vector-right-bg"
            />
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-02.png"
              alt="eye-icon"
              className="img-fluid vector-left-bg"
            />
          </div>
        </div>
      </section>
      {/* /Appointment Section */}
      {/* Facility Section */}
      <section className="faq-eye-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-heading text-center sec-heading-eye">
                <h2>
                  <span>Frequently Asked </span> Questions
                </h2>
                <p>What our clients say about us</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="faq-wrap">
                <ul className="nav">
                  <li>
                    <Link
                      to="#"
                      className="active"
                      data-bs-toggle="tab"
                      data-bs-target="#faq1"
                    >
                      <span>Q</span>
                      How Often should I need to test my eyes?
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#faq2">
                      <span>Q</span>
                      What are the symptoms of Cataract?
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#faq3">
                      <span>Q</span>
                      Do I need surgery for Cataract? How would I know that?
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#faq4">
                      <span>Q</span>
                      What is Myopia or Nearsightedness?
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#faq5">
                      <span>Q</span>
                      What is Hyperopia or farsightedness?
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#faq6">
                      <span>Q</span>
                      What is Presbyopia?
                    </Link>
                  </li>
                  <li>
                    <Link to="#" data-bs-toggle="tab" data-bs-target="#faq7">
                      <span>Q</span>
                      My eyes are fine, then why do I need to visit the doctor
                      regularly?
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tab-content pt-0">
                <div className="tab-pane active" id="faq1">
                  <div className="faq-content">
                    <ImageWithBasePath
                      src="assets/img/faq/faq-01.jpg"
                      alt="eye-test-icon"
                      className="img-fluid"
                    />
                    <p>
                      As per the American Optometric Association adults who wear
                      glasses or contact lenses and adults who are over 60 years
                      should visit their eye care specialist every year or as
                      suggested by the doctor. If the person doesn’t require any
                      vision correction, then a person between 18 and 60 years
                      should visit the doctor twice a year.
                    </p>
                    <p>
                      This is a condition that results when the visual image is
                      focused behind the retina rather than on the retina. It
                      may be caused due to a small eyeball having a weak
                      focusing power being.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="faq2">
                  <div className="faq-content">
                    <ImageWithBasePath
                      src="assets/img/clients/re-image-1.jpg"
                      alt="eye-test-icon"
                      className="img-fluid"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="faq3">
                  <div className="faq-content">
                    <ImageWithBasePath
                      src="assets/img/clients/re-image-2.jpg"
                      alt="eye-test-icon"
                      className="img-fluid"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="faq4">
                  <div className="faq-content">
                    <ImageWithBasePath
                      src="assets/img/clients/re-image-3.jpg"
                      alt="eye-test-icon"
                      className="img-fluid"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="faq5">
                  <div className="faq-content">
                    <ImageWithBasePath
                      src="assets/img/clients/re-image-4.jpg"
                      alt="eye-test-icon"
                      className="img-fluid"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="faq6">
                  <div className="faq-content">
                    <ImageWithBasePath
                      src="assets/img/clients/re-image-5.jpg"
                      alt="eye-test-icon"
                      className="img-fluid"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="faq7">
                  <div className="faq-content">
                    <ImageWithBasePath
                      src="assets/img/clients/re-image-6.jpg"
                      alt="eye-test-icon"
                      className="img-fluid"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. consectetur adipiscing elit, sed do eiusmod.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ban-bg">
          <ImageWithBasePath
            src="assets/img/bg/center-bg.png"
            alt="design-image"
            className="img-fluid bg-05"
          />
        </div>
      </section>
      {/* /Facility Section */}
      <Home6Footer />
    </div>
  );
};

export default Home6;
