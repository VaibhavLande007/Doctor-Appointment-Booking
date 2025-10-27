import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home9Header from "./header";
import { Calendar } from 'primereact/calendar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Home9Footer from "./footer";

const Home9 = () => {
  const [date, setDate] = useState(null);
  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };
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
  const ourServices = {
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
  const ourDoctor = {
    slidesToShow: 4,
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
  const ourClient = {
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
  const ourArticles = {
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
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="main-wrapper home-fourteen">
      {/* Home Banner */}
      <Home9Header />
      <section className="banner-section-fourteen">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div
                className="banner-content banner-content-fourteen aos"
                data-aos="fade-up"
              >
                <h1>
                  Empowering Your Journey to Parenthood, Discover Fertility
                  Solutions Today!
                </h1>
                <div className="banner-btns-fourteen">
                  <Link to="/patient/booking1" className="btn btn-primary">
                    <i className="fa-solid fa-calendar-days" />
                    Meet Our Specialist
                  </Link>
                  <Link to="/patient/booking2" className="btn btn-primarytwo">
                    <i className="fa-solid fa-phone" />
                    Schedule a Call
                  </Link>
                </div>
                <div className="search-box-fourteen aos" data-aos="fade-up">
                  <form action="/patient/search-doctor1" className="form-block d-flex">
                    <div className="search-input">
                      <div className="forms-block">
                        <label>Date</label>
                        {/* <input
                          type="text"
                          className="form-control datetimepicker"
                          placeholder="Thu, Mar 24, 2023"
                        /> */}
                        <Calendar placeholder="Select Date"  value={date} onChange={(e) => setDate(e.value)} />
                      </div>
                    </div>
                    <div className="search-input">
                      <div className="forms-block mb-0">
                        <label>Location</label>
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
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="banner-img banner-img-fourteen aos"
                data-aos="fade-up"
              >
                <ImageWithBasePath
                  src="assets/img/banner-six-2.png"
                  className="img-fluid"
                  alt="Banner"
                />
                <div className="banner-img1 banner-imgfourteen">
                  <ImageWithBasePath
                    src="assets/img/icons/ban-six-icon1.svg"
                    className="img-fluid"
                    alt="Icon"
                  />
                </div>
                <div className="banner-img2">
                  <ImageWithBasePath
                    src="assets/img/icons/ban-six-icon3.svg"
                    className="img-fluid"
                    alt="Icon"
                  />
                </div>
                <div className="banner-img3 banner-imgfourteen3">
                  <ImageWithBasePath
                    src="assets/img/icons/ban-six-icon2.svg"
                    className="img-fluid"
                    alt="Icon"
                  />
                </div>
                <div className="banner-imgfourteen4">
                  <ImageWithBasePath
                    src="assets/img/icons/ban-img-icon-4.svg"
                    className="img-fluid"
                    alt="Icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-imgfourteen5">
          <ImageWithBasePath
            src="assets/img/icons/ban-img-icon5.svg"
            className="img-fluid"
            alt="Icon"
          />
        </div>
        <div className="banner-imgfourteen6">
          <ImageWithBasePath
            src="assets/img/icons/ban-img-icon6.svg"
            className="img-fluid"
            alt="Icon"
          />
        </div>
      </section>
      {/* /Home Banner */}
      {/* Benifit Section */}
      <section className="benifit-section">
        <div className="bg-shapes">
          <ImageWithBasePath
            src="assets/img/bg/benefit-bg.png"
            alt="image"
            className="img-fluid"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-header-fourteen text-center aos"
                data-aos="fade-up"
              >
                <h2>
                  Benefits <span>With Us</span>
                </h2>
                <p>
                  Pregnancy services typically refer to a range of medical,
                  emotional, and practical support provided to individuals who
                  are pregnant or planning a pregnancy.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 d-flex aos" data-aos="fade-up">
              <div className="benifit-wrap flex-fill">
                <span>
                  <ImageWithBasePath src="assets/img/icons/benefit-icon-01.svg" alt="img" />
                </span>
                <h5>Qualified Doctors</h5>
                <p>Meet Our Trusted Team of Experienced Doctors.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 d-flex aos" data-aos="fade-up">
              <div className="benifit-wrap flex-fill">
                <span>
                  <ImageWithBasePath src="assets/img/icons/benefit-icon-02.svg" alt="img" />
                </span>
                <h5>Modern Equipments</h5>
                <p>Experience Cutting-Edge Technology for Superior Care.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 d-flex aos" data-aos="fade-up">
              <div className="benifit-wrap flex-fill">
                <span>
                  <ImageWithBasePath src="assets/img/icons/benefit-icon-03.svg" alt="img" />
                </span>
                <h5>Individual Approach</h5>
                <p>Experience Personalized Care Like Never Before.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 d-flex aos" data-aos="fade-up">
              <div className="benifit-wrap flex-fill">
                <span>
                  <ImageWithBasePath src="assets/img/icons/benefit-icon-04.svg" alt="img" />
                </span>
                <h5>Qualified Doctors</h5>
                <p>Urgent Help When You Need It Most</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Benifit Section */}
      {/* services Section */}
      <section className="services-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-header-fourteen text-center aos"
                data-aos="fade-up"
              >
                <h2>
                  Services <span>We Provide</span>
                </h2>
                <p>
                  Pregnancy services typically refer to a range of medical,
                  emotional, and practical support provided to individuals who
                  are pregnant or planning a pregnancy.
                </p>
              </div>
            </div>
            <div className="col-lg-12 aos" data-aos="fade-up">
              <Slider {...ourServices} className="fertility-slider slick-margins owl-carousel nav-center">
                <div className="card service-inner-fourt-all w-100">
                  <div className="card-body service-inner-fourt-main">
                    <div className="service-inner-item">
                      <Link to="/patient/search-doctor1">
                        <div className="service-inner-img">
                          <ImageWithBasePath
                            src="assets/img/service/fertility-01.jpg"
                            className="img-fluid"
                            alt="image"
                          />
                        </div>
                      </Link>
                      <div className="service-body">
                        <span className="service-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/care-01.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <span className="service-icon-img">
                          <ImageWithBasePath
                            src="assets/img/icons/care-big-01.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h4>
                          <Link
                            to="/patient/search-doctor1"
                            className="service-inner-right-fourt-care"
                          >
                            Prenatal care
                          </Link>
                        </h4>
                        <p>
                          Regular medical check-ups during pregnancy to monitor
                          the health of the mother and the developing baby.
                        </p>
                        <Link to="/patient/search-doctor1" className="service-link">
                          Learn More
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card service-inner-fourt-all w-100">
                  <div className="card-body service-inner-fourt-main">
                    <div className="service-inner-item">
                      <Link to="/patient/search-doctor1">
                        <div className="service-inner-img">
                          <ImageWithBasePath
                            src="assets/img/service/fertility-02.jpg"
                            alt="image"
                          />
                        </div>
                      </Link>
                      <div className="service-body">
                        <span className="service-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/care-02.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <span className="service-icon-img">
                          <ImageWithBasePath
                            src="assets/img/icons/care-big-02.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h4>
                          <Link
                            to="/patient/search-doctor1"
                            className="service-inner-right-fourt-care"
                          >
                            Obstetric care
                          </Link>
                        </h4>
                        <p>
                          Medical care provided by obstetricians or midwives
                          throughout pregnancy, labor, and delivery.
                        </p>
                        <Link to="/patient/search-doctor1" className="service-link">
                          Learn More
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card service-inner-fourt-all w-100">
                  <div className="card-body service-inner-fourt-main">
                    <div className="service-inner-item">
                      <Link to="/patient/search-doctor1">
                        <div className="service-inner-img">
                          <ImageWithBasePath
                            src="assets/img/service/fertility-03.jpg"
                            alt="image"
                          />
                        </div>
                      </Link>
                      <div className="service-body">
                        <span className="service-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/care-03.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <span className="service-icon-img">
                          <ImageWithBasePath
                            src="assets/img/icons/care-big-03.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h4>
                          <Link
                            to="/patient/search-doctor1"
                            className="service-inner-right-fourt-care"
                          >
                            Ultrasound imaging
                          </Link>
                        </h4>
                        <p>
                          Using sound waves to create images of the fetus in the
                          womb, which helps monitor fetal development and detect
                          any potential issues.
                        </p>
                        <Link to="/patient/search-doctor1" className="service-link">
                          Learn More
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card service-inner-fourt-all w-100">
                  <div className="card-body service-inner-fourt-main">
                    <div className="service-inner-item">
                      <Link to="/patient/search-doctor1">
                        <div className="service-inner-img">
                          <ImageWithBasePath
                            src="assets/img/service/fertility-04.jpg"
                            alt="image"
                          />
                        </div>
                      </Link>
                      <div className="service-body">
                        <span className="service-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/care-04.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <span className="service-icon-img">
                          <ImageWithBasePath
                            src="assets/img/icons/care-big-04.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <Link
                          to="/patient/search-doctor1"
                          className="service-inner-right-fourt-care"
                        >
                          Counseling &amp; Education
                        </Link>
                        <p>
                          Providing information and support regarding pregnancy,
                          childbirth, parenting, breastfeeding, and other
                          related topics.
                        </p>
                        <Link to="/patient/search-doctor1" className="service-link">
                          Learn More
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card service-inner-fourt-all w-100">
                  <div className="card-body service-inner-fourt-main">
                    <div className="service-inner-item">
                      <Link to="/patient/search-doctor1">
                        <div className="service-inner-img">
                          <ImageWithBasePath
                            src="assets/img/service/fertility-05.jpg"
                            alt="image"
                          />
                        </div>
                      </Link>
                      <div className="service-body">
                        <span className="service-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/care-05.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <span className="service-icon-img">
                          <ImageWithBasePath
                            src="assets/img/icons/care-big-05.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <Link
                          to="/patient/search-doctor1"
                          className="service-inner-right-fourt-care"
                        >
                          Maternity and baby supplies
                        </Link>
                        <p>
                          Providing access to essential items such as prenatal
                          vitamins, maternity clothes, diapers, and baby formula
                        </p>
                        <Link to="/patient/search-doctor1" className="service-link">
                          Learn More
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="btn-sec text-center">
                <Link to="/patient/search-doctor1" className="btn btn-primary">
                  Browse all services
                  <i className="fa-solid fa-chevron-right" />
                </Link>
              </div>
            </div>
            <div className="bg-shapes">
              <ImageWithBasePath
                src="assets/img/icons/ban-img-icon7.svg"
                alt="image"
                className="img-fluid shape-1"
              />
              <ImageWithBasePath
                src="assets/img/icons/ban-img-icon8.svg"
                alt="image"
                className="img-fluid shape-2"
              />
              <ImageWithBasePath
                src="assets/img/icons/ban-img-icon9.svg"
                alt="image"
                className="img-fluid shape-3"
              />
            </div>
          </div>
        </div>
      </section>
      {/* /services Section */}
      {/* Choose us */}
      <section className="choose-us-fourteen">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="choose-us-image  aos" data-aos="fade-up">
                <ImageWithBasePath
                  src="assets/img/choose-us-six.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-content aos" data-aos="fade-up">
                <div className="section-header-fourteen">
                  <h6>Why Choose us</h6>
                  <h2>
                    We’ll Ensure You Always Get the Best <span>Treatment.</span>
                  </h2>
                  <p>
                    We are effectively communicate the compassionate care,
                    expertise, and comprehensive services offered by your
                    fertility hospital, inspiring hope and confidence in
                    patients seeking assistance with their fertility challenges.
                  </p>
                </div>
                <ul>
                  <li>
                    Core of our mission is commitment to excellence in patient
                    care.{" "}
                  </li>
                  <li>
                    We strive to enhance the quality of life for individuals of
                    all ages
                  </li>
                  <li>
                    Addressing with precision &amp; latest medical advancements.
                  </li>
                </ul>
                <div className="choose-list">
                  <div className="num-item">
                    <h3>500+</h3>
                    <h5>Doctors Available</h5>
                  </div>
                  <div className="num-item">
                    <h3>2k+</h3>
                    <h5>Appointments</h5>
                  </div>
                  <div className="num-item">
                    <h3>100%</h3>
                    <h5>Patient Satisfaction</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-shapes">
            <ImageWithBasePath
              src="assets/img/icons/bg-icon-01.svg"
              alt="image"
              className="img-fluid shape-1"
            />
            <ImageWithBasePath
              src="assets/img/icons/bg-icon-02.svg"
              alt="image"
              className="img-fluid shape-2"
            />
          </div>
        </div>
      </section>
      {/* /Choose us */}
      {/* Team Section */}
      <div className="team-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-header-fourteen text-center aos"
                data-aos="fade-up"
              >
                <h2>
                  Qualified <span>Doctors</span>
                </h2>
                <p>
                  Pregnancy services typically refer to a range of medical,
                  emotional, and practical support provided to individuals who
                  are pregnant or planning a pregnancy.
                </p>
              </div>
            </div>
          </div>
          <Slider
          {...ourDoctor}
            className="owl-carousel slick-margins team-fourteen-slider nav-center owl-theme aos"
            data-aos="fade-up"
          >
            <div className="item">
              <div className="our-doctors-card">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/fertility-doc-01.jpg"
                      alt="Dr. Marie Wells"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="doctors-body">
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Marie Wells</h4>
                  </Link>
                  <p>Pregnancy Specialist</p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block">(60)</span>
                  </div>
                  <div className="location">
                    <p>
                      <i className="feather icon-map-pin" />
                      0.7 min - Baltimore, MD
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="view-btn" tabIndex={0}>
                      $500
                    </span>
                    <Link to="/patient/booking1" className="btn book-btn">
                      Consult Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="our-doctors-card">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/fertility-doc-02.jpg"
                      alt="Dr. Rebekah"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="doctors-body">
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Rebekah</h4>
                  </Link>
                  <p>Obstetric Specialist</p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block">3.0</span>
                  </div>
                  <div className="location">
                    <p>
                      <i className="feather icon-map-pin" /> 0.9 min - East Syracuse,
                      NY
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="view-btn" tabIndex={0}>
                      $350
                    </span>
                    <Link to="/patient/booking1" className="btn book-btn">
                      Consult Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="our-doctors-card">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/fertility-doc-03.jpg"
                      alt="Dr. Johnson"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="doctors-body">
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Johnson</h4>
                  </Link>
                  <p>Pregnancy Specialist</p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block">(29)</span>
                  </div>
                  <div className="location">
                    <p>
                      <i className="feather icon-map-pin" />
                      10 min - Athens, AL
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="view-btn" tabIndex={0}>
                      $200
                    </span>
                    <Link to="/patient/booking1" className="btn book-btn">
                      Consult Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="our-doctors-card">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/fertility-doc-04.jpg"
                      alt="Darren Elder"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="doctors-body">
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Packard</h4>
                  </Link>
                  <p>Pregnancy Specialist</p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <span className="d-inline-block">4.0</span>
                  </div>
                  <div className="location">
                    <p>
                      <i className="feather icon-map-pin" />
                      15 min - Santa Cruz, CA
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="view-btn" tabIndex={0}>
                      $100
                    </span>
                    <Link to="/patient/booking1" className="btn book-btn">
                      Consult Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="our-doctors-card">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/fertility-doc-05.jpg"
                      alt="Dr. Johnson"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="doctors-body">
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Richard</h4>
                  </Link>
                  <p>Pregnancy Specialist</p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block">(29)</span>
                  </div>
                  <div className="location">
                    <p>
                      <i className="feather icon-map-pin" />
                      15 min - 29 Webster St, NH
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="view-btn" tabIndex={0}>
                      $180
                    </span>
                    <Link to="/patient/booking1" className="btn book-btn">
                      Consult Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="our-doctors-card">
                <div className="doctors-header">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/fertility-doc-06.jpg"
                      alt="Dr. Johnson"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="doctors-body">
                  <Link to="/patient/doctor-profile">
                    <h4>Dr. Angel</h4>
                  </Link>
                  <p>Pregnancy Specialist</p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="d-inline-block">(29)</span>
                  </div>
                  <div className="location">
                    <p>
                      <i className="feather icon-map-pin" />
                      10 min - 48 Oak Lane, MO
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="view-btn" tabIndex={0}>
                      $210
                    </span>
                    <Link to="/patient/booking1" className="btn book-btn">
                      Consult Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="bg-shapes">
          <ImageWithBasePath
            src="assets/img/bg/benefit-bg.png"
            alt="image"
            className="img-fluid"
          />
        </div>
      </div>
      {/* /Team Section */}
      {/* Feedback */}
      <section className="clients-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="client-inner-main">
                <ImageWithBasePath
                  src="assets/img/bg/feedback-six.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header-fourteen">
                <h2>
                  Our Happy <span>Clients</span>
                </h2>
                <p>Our clients feedback about us</p>
              </div>
              <Slider
              {...ourClient}
                className="owl-carousel feedback-slider-fourteen slick-arrow-bottom owl-theme aos"
                data-aos="fade-up"
              >
                <div className="card feedback-card">
                  <div className="card-body feedback-card-body">
                    <div className="feedback-inner-main">
                      <div className="rating rating-fourteen">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                      </div>
                      <p>
                        My journey towards parenthood became a seamless and
                        informed experience. The comprehensive resources, expert
                        advice, and supportive community played a pivotal role
                        in our successful conception. Grateful for this
                        invaluable platform that guided us every step of the
                        way.
                      </p>
                      <h4>Jenifer Robinson</h4>
                      <h6>Texas, USA</h6>
                    </div>
                  </div>
                </div>
                <div className="card feedback-card">
                  <div className="card-body feedback-card-body">
                    <div className="feedback-inner-main">
                      <div className="rating rating-fourteen">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                      </div>
                      <p>
                        Doctors explains everything clearly and helps you to
                        understand complex medical terms. Excellent clinician.
                        Endlessly patient and reassuring.Also a very efficient
                        back up team. He was prepared to spend as long as I
                        needed to understand what he was saying.
                      </p>
                      <h4>Matthew George</h4>
                      <h6>Texas, USA</h6>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /Feedback */}
      {/* blog section */}
      <div className="blog-section-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header-fourteen text-center">
                <h2>
                  Recent <span>Articles</span>
                </h2>
                <p>Checkout latest articles from our experience doctors</p>
              </div>
            </div>
          </div>
          <Slider
          {...ourArticles}
            className="owl-carousel slick-margins blog-slider-fourteen  nav-center owl-theme aos"
            data-aos="fade-up"
          >
            <div className="card blog-inner-fourt-all">
              <div className="card-body blog-inner-fourt-main">
                <div className="blog-inner-right-fourt">
                  <Link to="/blog/blog-details">
                    <div className="blog-inner-right-img">
                      <ImageWithBasePath
                        src="assets/img/blog/blog-15.jpg"
                        alt="image"
                        className="img-fluid blog-inner-right-inner"
                      />
                      <div className="blog-inner-top-content">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-04.jpg"
                          alt="Doctor"
                          className="me-2"
                        />
                        <span>Dr. Pamila Certis</span>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/blog/blog-details"
                    className="blog-inner-right-fourt-care"
                  >
                    How To Get Pregnant: Tips to Increas it Affect Fertility
                  </Link>
                  <ul className="articles-list nav blog-articles-list">
                    <li>
                      <i className="feather icon-calendar" /> 15 Nov 2025
                    </li>
                    <li>
                      <i className="feather icon-message-square" /> 68
                    </li>
                    <li>
                      <i className="feather icon-eye" /> 1.5k
                    </li>
                  </ul>
                  <p>
                    Embark on a fertility journey with expert advice on
                    lifestyle changes, nutrition, and holistic...
                  </p>
                  <ul className="articles-list nav blog-articles-list-two">
                    <li>Fertility</li>
                    <li>Pregnancy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card blog-inner-fourt-all">
              <div className="card-body blog-inner-fourt-main">
                <div className="blog-inner-right-fourt">
                  <Link to="/blog/blog-details">
                    <div className="blog-inner-right-img">
                      <ImageWithBasePath
                        src="assets/img/blog/blog-16.jpg"
                        alt="image"
                        className="img-fluid blog-inner-right-inner"
                      />
                      <div className="blog-inner-top-content">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-05.jpg"
                          alt="Doctor"
                          className="me-2"
                        />
                        <span>Dr. James Matthew</span>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/blog/blog-details"
                    className="blog-inner-right-fourt-care"
                  >
                    Flavourful Recipe of Central India to Boost Fertility
                  </Link>
                  <ul className="articles-list nav blog-articles-list">
                    <li>
                      <i className="feather icon-calendar" /> 18 Nov 2025
                    </li>
                    <li>
                      <i className="feather icon-message-square" /> 70
                    </li>
                    <li>
                      <i className="feather icon-eye" /> 1.2k
                    </li>
                  </ul>
                  <p>
                    Explore the rich culinary heritage of Central India with a
                    flavourful recipe thought to be...
                  </p>
                  <ul className="articles-list nav blog-articles-list-two">
                    <li>Diet</li>
                    <li>Health</li>
                    <li>Natural Foods</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card blog-inner-fourt-all">
              <div className="card-body blog-inner-fourt-main">
                <div className="blog-inner-right-fourt">
                  <Link to="/blog/blog-details">
                    <div className="blog-inner-right-img">
                      <ImageWithBasePath
                        src="assets/img/blog/blog-17.jpg"
                        alt="image"
                        className="img-fluid blog-inner-right-inner"
                      />
                      <div className="blog-inner-top-content">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-06.jpg"
                          alt="Doctor"
                          className="me-2"
                        />
                        <span>Dr. James Certis</span>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/blog/blog-details"
                    className="blog-inner-right-fourt-care"
                  >
                    Sperm Morphology – What is it &amp; How Does it Affect
                    Fertility
                  </Link>
                  <ul className="articles-list nav blog-articles-list">
                    <li>
                      <i className="feather icon-calendar" /> 20 Nov 2025
                    </li>
                    <li>
                      <i className="feather icon-message-square" /> 54
                    </li>
                    <li>
                      <i className="feather icon-eye" /> 1.4k
                    </li>
                  </ul>
                  <p>
                    Explore the intricacies of sperm morphology, its role in
                    fertility, and insights into factors...
                  </p>
                  <ul className="articles-list nav blog-articles-list-two">
                    <li>Health</li>
                    <li>Fertility</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card blog-inner-fourt-all">
              <div className="card-body blog-inner-fourt-main">
                <div className="blog-inner-right-fourt">
                  <Link to="/blog/blog-details">
                    <div className="blog-inner-right-img">
                      <ImageWithBasePath
                        src="assets/img/blog/fertility-blog-01.jpg"
                        alt="image"
                        className="img-fluid blog-inner-right-inner"
                      />
                      <div className="blog-inner-top-content">
                        <ImageWithBasePath
                          src="assets/img/doctor-profiles/doc-profile-07.jpg"
                          alt="Doctor"
                          className="me-2"
                        />
                        <span>Dr. Kathleen Potts</span>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/blog/blog-details"
                    className="blog-inner-right-fourt-care"
                  >
                    Top 10 Foods That Can Boost Fertility Naturally
                  </Link>
                  <ul className="articles-list nav blog-articles-list">
                    <li>
                      <i className="feather icon-calendar" /> 24 Nov 2025
                    </li>
                    <li>
                      <i className="feather icon-message-square" /> 63
                    </li>
                    <li>
                      <i className="feather icon-eye" /> 2.2k
                    </li>
                  </ul>
                  <p>
                    Discover the power of nutrition in enhancing fertility with
                    a curated list of fertility-friendly...
                  </p>
                  <ul className="articles-list nav blog-articles-list-two">
                    <li>Food</li>
                    <li>Fertility</li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
          <div
            className="btn-sec text-center aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link to="/patient/search-doctor1" className="btn btn-primary">
              Browse all blogs
              <i className="fa-solid fa-chevron-right" />
            </Link>
          </div>
          <div className="faq-info aos" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-header-fourteen text-center">
                  <h2>
                    Frequently Asked <span>Questions</span>
                  </h2>
                  <p>Questions that solves the doubts of our patients</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto">
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
                            Yes, in many case, you can book appointments for
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
          <div className="bg-shapes">
            <ImageWithBasePath
              src="assets/img/bg/article-bg.png"
              alt="image"
              className="img-fluid shape-1"
            />
          </div>
        </div>
      </div>
      {/* /blog section */}
      <Home9Footer/>
    </div>
  );
};

export default Home9;
