import React, { useEffect, useState } from "react";
import Home10Footer from "./footer";
import Home10Header from "./header";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoModal from "./videoModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home10 = () => {

  const [showModal, setShowModal] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/VXjGBqpbra0';
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-nav ">
        <button type="button" role="presentation" className="owl-next" onClick={onClick}>
            <i className="fa-solid fa-chevron-right" />
        </button>
    </div>
);

const CustomPrevArrow = ({ className, onClick }) => (
    <div className="owl-nav ">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fa-solid fa-chevron-left " />
        </button>
    </div>
);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const ourDoctor = {
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode:true,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
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
    <div className="main-wrapper home-fifteen">
      <Home10Header />
      {/* Home Banner */}
      <section className="banner-section-fifteen">
        <div className="sec-bg">
          <ImageWithBasePath
            src="assets/img/bg/ent-banner-bg-01.png"
            className="ban-blue-bg"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="banner-content banner-content-fifteen aos"
                data-aos="fade-up"
              >
                <h2>Painless, Safe Treatment</h2>
                <h1>Hear what you have been Missing</h1>
                <div className="banner-btns-fifteen">
                  <Link to="/doctor/appointments" className="btn btn-primary me-2">
                    Make an Appointment
                  </Link>
                  <Link
                    to="/patient/booking1"
                    className="btn btn-primary btns-primarytwo"
                  >
                    Quick Consultation
                  </Link>
                </div>
                <div className="d-sm-flex align-items-center">
                  <div className="aboutus-companyimg">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/banner-fifteen-vd.jpg"
                        alt="image"
                        className="img-fluid"
                      />
                    </Link>
                    <Link
                      to="#"
                      onClick={handleOpenModal}
                    >
                      <div className="playicon">
                        <span>
                          <i className="fa-solid fa-play" />
                        </span>
                      </div>
                    </Link>
                    <VideoModal show={showModal} handleClose={handleCloseModal} videoUrl={videoUrl} />
                  </div>
                  <div className="support-consult-main">
                    <div className="support-consult">
                      <div className="support-consult-img">
                        <ImageWithBasePath
                          src="assets/img/icons/customer-service-2.svg"
                          alt="Service"
                        />
                      </div>
                      <div className="support-consult-right">
                        <h6>24/7 Support</h6>
                        <div className="rating rating-fifteen">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                    </div>
                    <div className="support-consult">
                      <div className="support-consult-img">
                        <ImageWithBasePath
                          src="assets/img/icons/customer-service-1.svg"
                          alt="Service"
                        />
                      </div>
                      <div className="support-consult-right">
                        <h6>Online Consultation</h6>
                        <span>Just 60 Secs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-right-fifteen">
                <ImageWithBasePath
                  src="assets/img/banner-fifteen-ryt.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="banner-right-fifteenone">
                  <ImageWithBasePath src="assets/img/ban-fift-icon1.png" alt="Icon" />
                </div>
                <div className="banner-right-fifteentwo">
                  <ImageWithBasePath src="assets/img/ban-fift-icon2.png" alt="Icon" />
                </div>
                <div className="banner-right-fifteenthree">
                  <ImageWithBasePath src="assets/img/ban-fift-icon3.png" alt="Icon" />
                </div>
                <div className="banner-right-fifteenfour">
                  <ImageWithBasePath src="assets/img/ban-fift-icon4.png" alt="Icon" />
                </div>
                <div className="banner-right-fifteenseven">
                  <ImageWithBasePath src="assets/img/ban-fift-icon7.png" alt="Icon" />
                </div>
                <div className="banner-right-fifteeneight">
                  <ImageWithBasePath src="assets/img/ban-fift-icon8.png" alt="Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* services Section */}
      <section className="services-section-fifteen">
        <div className="service-bg-icon">
          <ImageWithBasePath src="assets/img/serive-bg-icon.png" alt="Icon" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fifteen text-center">
                <h2>
                  Our <span>Services</span>
                </h2>
                <p>
                  Our goal is to give the patient maximum relief within minimal
                  pain inflicted
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <div className="doctor-profile-widget-fifteen">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/service/service-3.jpg"
                          className="img-fluid"
                          alt="Service"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="doc-content-bottom">
                    <div className="doc-content-split">
                      <Link to="/patient/doctor-profile">EAR Treatment</Link>
                    </div>
                    <p>
                      we are dedicated to providing the highest standard of care
                      for all ear-related concerns
                    </p>
                    <span>5+ Services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <div className="doctor-profile-widget-fifteen">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/service/service-2.jpg"
                          className="img-fluid"
                          alt="Service"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="doc-content-bottom">
                    <div className="doc-content-split">
                      <Link to="/patient/doctor-profile">Nose and Sinus</Link>
                    </div>
                    <p>
                      The cranial aspect of the human body commanded respect
                      from patients and doctors alike.
                    </p>
                    <span>10+ Services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="item">
                <div className="doctor-profile-widget-fifteen">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/service/service-1.jpg"
                          className="img-fluid"
                          alt="Service"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="doc-content-bottom">
                    <div className="doc-content-split">
                      <Link to="/patient/doctor-profile">Throat / Larynx Surgery</Link>
                    </div>
                    <p>
                      Laryngoplasty was introduced and popularised by Isshiki in
                      the 1970’s.
                    </p>
                    <span>15+ Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /services Section */}
      {/* Patients Section */}
      <div className="Patients-section-fifteen">
        <div className="patient-fifteen-icon">
          <ImageWithBasePath src="assets/img/fifteen-bg-icon-3.png" alt="Icon" />
        </div>
        <div className="sec-bg-img">
          <ImageWithBasePath
            src="assets/img/bg/rectangle-bg.png"
            className="blue-rec-bg"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="patients-left-front patients-left-img">
                <ImageWithBasePath
                  src="assets/img/patients-img-fifteen.png"
                  alt="Patients"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header-fifteen section-header-fifteenpatient">
                <h2>
                  Who <span>We Are</span>
                </h2>
                <p>
                  Our goal is to give the patient maximum relief within minimal
                  pain inflicted
                </p>
              </div>
              <p>
                At Doccure, we are dedicated to providing comprehensive and
                compassionate care for all your ENT needs. Our team of
                experienced and highly skilled ENT specialists is committed to
                ensuring the well-being of our patients through state-of-the-art
                medical services.
              </p>
              <p>
                At the core of our mission is a commitment to excellence in
                patient care. We strive to enhance the quality of life for
                individuals of all ages by addressing a wide range of ENT issues
                with precision, empathy, and the latest medical advancements.
              </p>
              <div className="row">
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/we-are-icon3.svg"
                          alt="Icon"
                        />
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter">14,500</h3>
                    </div>
                    <h6>ENT Surgery</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/we-are-icon2.svg"
                          alt="Icon"
                        />
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter">50,000</h3>
                      <span>+</span>
                    </div>
                    <h6>Happy Patients</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/we-are-icon1.svg"
                          alt="Icon"
                        />
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter">30</h3>
                      <span>+</span>
                    </div>
                    <h6>Years of Service</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Patients Section */}
      {/* Doctors section */}
      <div className="doctors-section-fifteen">
        <div className="doctor-fifteen-icon">
          <ImageWithBasePath src="assets/img/fifteen-bg-icon-2.png" alt="Icon" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fifteen text-center">
                <h2>
                  Our <span>Expert Doctors</span>
                </h2>
                <p>The Great Place Of ENT Hospital Center</p>
              </div>
            </div>
          </div>
          <Slider 
          {...ourDoctor}
            className="owl-carousel slick-margins slick-arrow-bottom-center doctor-slider-fifteen owl-theme aos"
            data-aos="fade-up"
          >
            <div className="item item-fifteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-28.jpg"
                        className="img-fluid"
                        alt="Icon"
                      />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <Link to="#" className="fav-icon">
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <div className="item-info">
                    <h6>15+ Years Experience</h6>
                  </div>
                </div>
                <div className="doc-content-fift">
                  <Link to="/patient/doctor-profile">Dr. Brandon Nicholas</Link>
                  <p>MBBS, MS - ENT</p>
                  <div className="rate-fifteen">
                    <div className="rate-four">
                      <i className="fa-regular fa-star me-2" />
                      <span>4.9</span>
                    </div>
                    <ul>
                      <li>Mo</li>
                      <li>Tu</li>
                      <li>We</li>
                      <li>Th</li>
                      <li>Fri</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item item-fifteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-29.jpg"
                        className="img-fluid"
                        alt="Doctor"
                      />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <Link to="#" className="fav-icon">
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <div className="item-info">
                    <h6>5+ Years Experience</h6>
                  </div>
                </div>
                <div className="doc-content-fift">
                  <Link to="/patient/doctor-profile">Dr. Katherine Victoria</Link>
                  <p>MBBS, MS - ENT</p>
                  <div className="rate-fifteen">
                    <div className="rate-four">
                      <i className="fa-regular fa-star me-2" />
                      <span>4.6</span>
                    </div>
                    <ul>
                      <li>We</li>
                      <li>Th</li>
                      <li>Fri</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item item-fifteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-11.jpg"
                        className="img-fluid"
                        alt="Doctor"
                      />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <Link to="#" className="fav-icon">
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <div className="item-info">
                    <h6>7+ Years Experience</h6>
                  </div>
                </div>
                <div className="doc-content-fift">
                  <Link to="/patient/doctor-profile">Dr. Lisa Madeleine</Link>
                  <p>MBBS, MS - ENT</p>
                  <div className="rate-fifteen">
                    <div className="rate-four">
                      <i className="fa-regular fa-star me-2" />
                      <span>4.4</span>
                    </div>
                    <ul>
                      <li>Mo</li>
                      <li>Tu</li>
                      <li>Th</li>
                      <li>Fri</li>
                      <li>Sat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="item item-fifteen">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-09.jpg"
                        className="img-fluid"
                        alt="Doctor"
                      />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <Link to="#" className="fav-icon">
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <div className="item-info">
                    <h6>15+ Years Experience</h6>
                  </div>
                </div>
                <div className="doc-content-fift">
                  <Link to="/patient/doctor-profile">Dr. Brandon Nicholas</Link>
                  <p>Ear-Nose-Throat (ENT) Specialist</p>
                  <div className="rate-fifteen">
                    <div className="rate-four">
                      <i className="fa-regular fa-star me-2" />
                      <span>4.8</span>
                    </div>
                    <ul>
                      <li>Mo</li>
                      <li>Tu</li>
                      <li>We</li>
                      <li>Th</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* /blog section */}
      {/* Pharmacy Section */}
      <section className="pharmacy-section-fifteen">
        <div className="sec-bg">
          <ImageWithBasePath
            src="assets/img/bg/tablet-bg.png"
            className="tablet-left"
            alt="Img"
          />
          <ImageWithBasePath
            src="assets/img/bg/round-tablet-bg.png"
            className="tablet-right"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fifteen text-center">
                <h2>
                  Online <span>Pharmacy Store</span>
                </h2>
                <p>More the quantity, higher the discount. Hurry, Buy Now!</p>
              </div>
            </div>
          </div>
          <Slider
          {...ourDoctor}
            className="owl-carousel slick-margins slick-arrow-bottom-center pharmacy-slider-fifteen owl-theme aos"
            data-aos="fade-up"
          >
            <div className="item item-fifteen">
              <div className="doctor-profile-widget doctor-profile-widget-fift">
                <div className="doc-pro-img doc-pro-img-fifteen">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img doctor-profile-img-fifteen">
                      <ImageWithBasePath
                        src="assets/img/pharmacy-1.png"
                        className="img-fluid"
                        alt="Doctor"
                      />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <Link
                      to="#"
                      className="fav-icon fav-icon-fifteen"
                    >
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <div className="item-info">
                    <h6>10% Off</h6>
                  </div>
                  <div className="overlay-icons">
                    <Link to="/Pharmacy/cart">
                      <i className="fa-solid fa-cart-shopping" />
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="doc-content-fift d-flex justify-content-between align-items-center">
                  <div className="name-product">
                    <Link to="#">Otogesic Ear Drops</Link>
                    <p>Sold by: ERIS LIFESCIENCES LTD</p>
                  </div>
                  <h3 className="product-price">$150</h3>
                </div>
              </div>
            </div>
            <div className="item item-fifteen">
              <div className="doctor-profile-widget doctor-profile-widget-fift">
                <div className="doc-pro-img doc-pro-img-fifteen">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img doctor-profile-img-fifteen">
                      <ImageWithBasePath
                        src="assets/img/pharmacy-2.png"
                        className="img-fluid"
                        alt="Doctor"
                      />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <Link
                      to="#"
                      className="fav-icon fav-icon-fifteen"
                    >
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <div className="item-info">
                    <h6>15% Off</h6>
                  </div>
                  <div className="overlay-icons">
                    <Link to="/Pharmacy/cart">
                      <i className="fa-solid fa-cart-shopping" />
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="doc-content-fift d-flex justify-content-between align-items-center">
                  <div className="name-product">
                    <Link to="#">Himalaya Bresol-NS</Link>
                    <p>Sold by: THE HIMALAYA </p>
                  </div>
                  <h3 className="product-price">$120</h3>
                </div>
              </div>
            </div>
            <div className="item item-fifteen">
              <div className="doctor-profile-widget doctor-profile-widget-fift">
                <div className="doc-pro-img doc-pro-img-fifteen">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img doctor-profile-img-fifteen">
                      <ImageWithBasePath
                        src="assets/img/pharmacy-3.png"
                        className="img-fluid"
                        alt="Pharmacy"
                      />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <Link
                      to="#"
                      className="fav-icon fav-icon-fifteen"
                    >
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <div className="item-info">
                    <h6>10% Off</h6>
                  </div>
                  <div className="overlay-icons">
                    <Link to="/Pharmacy/cart">
                      <i className="fa-solid fa-cart-shopping" />
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="doc-content-fift d-flex justify-content-between align-items-center">
                  <div className="name-product">
                    <Link to="#">Otogesic Ear Drops</Link>
                    <p>Sold by: BOIRON</p>
                  </div>
                  <h3 className="product-price">$130</h3>
                </div>
              </div>
            </div>
            <div className="item item-fifteen">
              <div className="doctor-profile-widget doctor-profile-widget-fift">
                <div className="doc-pro-img doc-pro-img-fifteen">
                  <Link to="/patient/doctor-profile">
                    <div className="doctor-profile-img doctor-profile-img-fifteen">
                      <ImageWithBasePath
                        src="assets/img/pharmacy-1.png"
                        className="img-fluid"
                        alt="Pharmacy"
                      />
                    </div>
                  </Link>
                  <div className="doctor-amount">
                    <Link
                      to="#"
                      className="fav-icon fav-icon-fifteen"
                    >
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                  <div className="item-info">
                    <h6>10% Off</h6>
                  </div>
                  <div className="overlay-icons">
                    <Link to="/Pharmacy/cart">
                      <i className="fa-solid fa-cart-shopping" />
                    </Link>
                    <Link to="#">
                      <i className="fa-solid fa-heart" />
                    </Link>
                  </div>
                </div>
                <div className="doc-content-fift d-flex justify-content-between align-items-center">
                  <div className="name-product">
                    <Link to="#">Otogesic Ear Drops</Link>
                    <p>
                      <span>Sold by:</span> ERIS LIFESCIENCES LTD
                    </p>
                  </div>
                  <h3 className="product-price">$150</h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* /Pharmacy section */}
      {/* Feedback */}
      <section className="feedback-section-fifteen">
        <div className="container">
          <div className="feedback-schedule-all">
            <div className="row">
              <div className="col-lg-5">
                <div className="feedback-inner-main">
                  <ImageWithBasePath
                    src="assets/img/feedback-fifteen.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="feedback-fifteen-content">
                  <h3>Consult top doctors online for any health concern</h3>
                  <p>Connect within 60secs</p>
                  <Link to="/register">Signup Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Feedback */}
      {/* contact */}
      <section className="appointment-section-fifteen">
        <div className="container">
          <div className="row ">
            <div className="col-lg-7">
              <div className="appointment-schedule-main">
                <h2>Book Appointment</h2>
                <h6>More the quantity, higher the discount. Hurry, Buy Now!</h6>
                <p>
                  We approach each patient with empathy and understanding,
                  recognizing the importance of a supportive and caring
                  environment. Striving for excellence in everything we do, we
                  are committed to staying at the forefront of medical
                  advancements to provide the best possible care.
                </p>
                <ul>
                  <li>
                    <div className="appointment-schedule-img">
                      <ImageWithBasePath
                        src="assets/img/icons/experience-4.svg"
                        alt="Experience"
                      />
                      <div className="appoint-inner-img">
                        <ImageWithBasePath
                          src="assets/img/icons/experience-3.svg"
                          alt="Experience"
                        />
                      </div>
                    </div>
                    <span>Find Experience Doctors</span>
                  </li>
                  <li>
                    <div className="appointment-schedule-img">
                      <ImageWithBasePath
                        src="assets/img/icons/experience-5.svg"
                        alt="Experience"
                      />
                      <div className="appoint-inner-img">
                        <ImageWithBasePath
                          src="assets/img/icons/experience-1.svg"
                          alt="Experience"
                        />
                      </div>
                    </div>
                    <span>Share your Health Issues</span>
                  </li>
                  <li>
                    <div className="appointment-schedule-img">
                      <ImageWithBasePath
                        src="assets/img/icons/experience-6.svg"
                        alt="Experience"
                      />
                      <div className="appoint-inner-img">
                        <ImageWithBasePath
                          src="assets/img/icons/experience-2.svg"
                          alt="Experience"
                        />
                      </div>
                    </div>
                    <span>Get solution about health</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="appointment-right-image appoint-fift-img">
                <ImageWithBasePath
                  src="assets/img/appointment-ryt-1.png"
                  alt="Experience"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /contact */}
      {/* Patient About us */}
      <section className="about-us-section-fifteen">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fifteen text-center">
                <h2>
                  Our <span>Patients Says</span>
                </h2>
                <p>What our Patients say about us</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aboutus-img-main">
                <ImageWithBasePath
                  src="assets/img/aboutus-fift-1.jpg"
                  alt="image"
                  className="img-fluid"
                />
                <div className="aboutus-img-one">
                  <ImageWithBasePath src="assets/img/icons/aboutus-icon1.svg" alt="Icon" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <Slider {...settings} className="slider-container vertical-slider">
                <div className="aboutus-fifteen-main">
                  <div className="aboutus-profile-left">
                    <div className="aboutus-image">
                      <ImageWithBasePath
                        src="assets/img/clients/client-01.jpg"
                        alt="Client"
                        className="img-fluid"
                      />
                    </div>
                    <div className="aboutus-contents">
                      <h6>Madeleine Jennifer</h6>
                      <span>Chennai, Tamilnadu</span>
                    </div>
                  </div>
                  <p>
                    {" "}
                    The team's commitment to finding the best solutions impact
                    on my life
                  </p>
                </div>
                <div className="aboutus-fifteen-main">
                  <div className="aboutus-profile-left">
                    <div className="aboutus-image">
                      <ImageWithBasePath
                        src="assets/img/clients/client-01.jpg"
                        alt="Client"
                        className="img-fluid"
                      />
                    </div>
                    <div className="aboutus-contents">
                      <h6>Madeleine Jennifer</h6>
                      <span>Chennai, Tamilnadu</span>
                    </div>
                  </div>
                  <p>
                    After struggling with chronic sinus problems, I found relief
                    at Doccure. The ENT specialists here are not only highly
                    skilled but also genuinely caring. They took the time to
                    understand my concerns, provided a detailed diagnosis, and
                    guided me through a treatment plan that has greatly improved
                    my quality of life.
                  </p>
                </div>
                <div className="aboutus-fifteen-main">
                  <div className="aboutus-profile-left">
                    <div className="aboutus-image">
                      <ImageWithBasePath
                        src="assets/img/clients/client-02.jpg"
                        alt="Client"
                        className="img-fluid"
                      />
                    </div>
                    <div className="aboutus-contents">
                      <h6>Madeleine Jennifer</h6>
                      <span>Chennai, Tamilnadu</span>
                    </div>
                  </div>
                  <p>
                    The staff was friendly and attentive, and Doctor performed
                    well
                  </p>
                </div>
                <div className="aboutus-fifteen-main">
                  <div className="aboutus-profile-left">
                    <div className="aboutus-image">
                      <ImageWithBasePath
                        src="assets/img/clients/client-03.jpg"
                        alt="Client"
                        className="img-fluid"
                      />
                    </div>
                    <div className="aboutus-contents">
                      <h6>Madeleine Jennifer</h6>
                      <span>Chennai, Tamilnadu</span>
                    </div>
                  </div>
                  <p>
                    The staff was friendly and attentive, and Doctor performed
                    well
                  </p>
                </div>
                
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /Patient About us */}
      {/* Frequent section */}
      <section className="frequently-section-fifteen">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fifteen text-center">
                <h2>
                  Frequently <span>Asked Questions</span>
                </h2>
                <p>What our clients say about us</p>
              </div>
            </div>
          </div>
          <div className="faq-main-cards" id="accordionExample">
            <div className="faq-card aos" data-aos="fade-up">
              <div className="faq-title">
                <Link
                  data-bs-toggle="collapse"
                  to="#faqOne"
                  aria-expanded="false"
                >
                  <span>How do I book an appointment with a doctor?</span>
                </Link>
                <div
                  id="faqOne"
                  className="card-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <p>
                    Yes, simply visit our website and log in or create an
                    account. Search for a doctor based on specialization,
                    location, or availability &amp; confirm your booking.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-card aos" data-aos="fade-up">
              <div className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqtwo"
                  aria-expanded="false"
                >
                  <span>
                    Can I request a specific doctor when booking my appointment?
                  </span>
                </Link>
                <div
                  id="faqtwo"
                  className="card-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <p>
                    Yes, you can usually request a specific doctor when booking
                    your appointment, though availability may vary based on
                    their schedule.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-card aos" data-aos="fade-up">
              <div className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqthree"
                  aria-expanded="false"
                >
                  <span>
                    What should I do if I need to cancel or reschedule my
                    appointment?
                  </span>
                </Link>
                <div
                  id="faqthree"
                  className="card-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <p>
                    If you need to cancel or reschedule your appointment,
                    contact the doctor as soon as possible to inform them and to
                    reschedule for another available time slot.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-card aos" data-aos="fade-up">
              <div className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqfour"
                  aria-expanded="false"
                >
                  <span>What if I'm running late for my appointment?</span>
                </Link>
                <div
                  id="faqfour"
                  className="card-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <p>
                    If you know you will be late, it's courteous to call the
                    doctor's office and inform them. Depending on their policy
                    and schedule, they may be able to accommodate you or
                    reschedule your appointment.
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-card aos" data-aos="fade-up">
              <div className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqfive"
                  aria-expanded="false"
                >
                  <span>
                    Can I book appointments for family members or dependents?
                  </span>
                </Link>
                <div
                  id="faqfive"
                  className="card-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <p>
                    Yes, in many cases, you can book appointments for family
                    members or dependents. However, you may need to provide
                    their personal information and consent to do so.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Frequent section */}
      <Home10Footer />
      <div
        className="modal fade modal-content-video"
        id="video"
        tabIndex={-1}
        aria-labelledby="video"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="video-home">
                <video controls id="promovideo">
                  <iframe src="https://www.youtube.com/embed/ExJZAegsOis" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home10;
