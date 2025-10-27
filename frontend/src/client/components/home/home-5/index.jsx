import React, { useEffect, useState } from "react";
import Home5Header from "./header";
import Home5Footer from "./footer";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Calendar } from "primereact/calendar";

const Home5 = () => {
  const [isClassAdded, setIsClassAdded] = useState([false]);

  const toggleClass = (index) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);
  };
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-nav ">
        <button type="button" role="presentation" className="owl-next" onClick={onClick}>
            <i className="fas fa-chevron-right " />
        </button>
    </div>

);

const CustomPrevArrow = ({ className, onClick }) => (
    <div className="owl-nav ">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fas fa-chevron-left " />
        </button>
    </div>
);
  const [date1, setDate1] = useState(null);

  const serviceSlider = {
    slidesToShow: 3,
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
  const doctorTenSlider = {
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
  const testimonialSlider = {
    slidesToShow: 4,
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
    <div className="main-wrapper home-ten">
      <Home5Header />
      {/* Home Banner */}
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="banner-content aos" data-aos="fade-up">
                <div className="beat-wrap">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/heart-icon.svg"
                      alt="heart-icon"
                    />
                  </span>
                  <h6>Every Beat, Every Moment</h6>
                </div>
                <h1>
                  Preventive care is essential for <span>Healthy Heart</span>
                </h1>
                <p>
                  We can guide you through issues like Cardiac arrest, Heart
                  Failure, Peripheral Artery Disease, Arrhythmia, Atrial
                  Fibrillation, Cholesterol and High BP.
                </p>
              </div>
              <form action="#" className="doctor-search">
                <div className="input-box-twelve">
                  <div className="search-input input-block search-line">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                    <Link className="current-loc-icon current_location" to="#">
                      <i className="fa-solid fa-location-dot" />
                    </Link>
                  </div>
                  <div className="search-input input-block">
                    <Calendar
                      value={date1}
                      onChange={(e) => setDate1(e.value)}
                      placeholder="Select Date"
                      className="custom-date-picker"
                    />
                    <Link className="current-loc-icon current_location" to="#">
                      <i className="fa-solid fa-calendar-days" />
                    </Link>
                  </div>
                  <div className="input-block">
                    <div className="search-btn-info">
                      <Link to="/patient/search-doctor2">Search Doctor</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Service Section */}
      <section className="service-section">
        <div className="bg-shapes">
          <ImageWithBasePath src="assets/img/bg/cardiac-bg.png" alt="image" />
        </div>
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-8 mx-auto aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">
                  We Provide a Best Service For You
                </h2>
                <p>
                  Cardiology services encompass a wide range of medical services
                  related to diagnosis, treatment, and management of heart
                  conditions &amp; diseases.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="slider-service slick-margins owl-theme p-0 nav-center">
                <Slider {...serviceSlider}>
                  <div className="service-wrap">
                    <Link to="/patient/search-doctor1" className="service-img">
                      <ImageWithBasePath
                        src="assets/img/features/feature-07.jpg"
                        className="img-fluid"
                        alt="service image"
                      />
                      <div className="service-cont">
                        <h3>Diagnostic Testing</h3>
                        <p>
                          Cardiologists use various diagnostic tests to assess
                          heart health and function
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="service-wrap">
                    <Link to="/patient/search-doctor1" className="service-img">
                      <ImageWithBasePath
                        src="assets/img/features/feature-08.jpg"
                        className="img-fluid"
                        alt="service image"
                      />
                      <div className="service-cont">
                        <h3>Treatment of Heart Conditions</h3>
                        <p>
                          Stent placement, bypass surgery, or valve
                          repair/replacement.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="service-wrap">
                    <Link to="/patient/search-doctor1" className="service-img">
                      <ImageWithBasePath
                        src="assets/img/features/feature-09.jpg"
                        className="img-fluid"
                        alt="service image"
                      />
                      <div className="service-cont">
                        <h3>Preventive Care</h3>
                        <p>
                          Cardiologists also provide preventive care to reduce
                          the risk of heart disease.
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="service-wrap">
                    <Link to="/patient/search-doctor1" className="service-img">
                      <ImageWithBasePath
                        src="assets/img/features/feature-10.jpg"
                        className="img-fluid"
                        alt="service image"
                      />
                      <div className="service-cont">
                        <h3>Non-Invasive Treatments</h3>
                        <p>
                          Offers guidance on diet, exercise, and lifestyle to
                          reduce cardiovascular risk factors.
                        </p>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center aos" data-aos="fade-up">
              <Link to="/patient/search-doctor1" className="btn btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
      {/* Need To Know */}
      <section className="need-to-know-section">
        <div className="bg-shapes">
          <ImageWithBasePath src="assets/img/bg/cardiac-bg.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title mb-0">
                  Need To Know Cardiac Conditions
                </h2>
              </div>
              <div className="accordion-condition" id="accord-parent">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <Link
                      to="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Heart Failure
                    </Link>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accord-parent"
                  >
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>
                          If one of the valves in your heart becomes diseased it
                          can affect the flow of blood. This can happen in one
                          of two ways: valve stenosis (where the valve does not
                          fully open and obstructs or restricts flow) or valve
                          incompetence (where the valve does not close properly
                          and blood is allowed to leak backwards)....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <Link
                      to="#"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Heart Valve Disease
                    </Link>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accord-parent"
                  >
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>
                          If one of the valves in your heart becomes diseased it
                          can affect the flow of blood. This can happen in one
                          of two ways: valve stenosis (where the valve does not
                          fully open and obstructs or restricts flow) or valve
                          incompetence (where the valve does not close properly
                          and blood is allowed to leak backwards)....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <Link
                      to="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      Pacemakers and Defibrillators
                    </Link>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accord-parent"
                  >
                    <div className="accordion-body">
                      <div className="accordion-content">
                        <p>
                          If one of the valves in your heart becomes diseased it
                          can affect the flow of blood. This can happen in one
                          of two ways: valve stenosis (where the valve does not
                          fully open and obstructs or restricts flow) or valve
                          incompetence (where the valve does not close properly
                          and blood is allowed to leak backwards)....
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="gallery-box-block">
                <div className="box-detail">
                  <ImageWithBasePath
                    src="assets/img/features/feature-13.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="box-detail">
                  <ImageWithBasePath
                    src="assets/img/features/feature-14.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                  <div className="bg-shapes">
                    <ImageWithBasePath
                      src="assets/img/bg/cardiac-bg-02.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Need To Know */}
      {/* Our Doctor */}
      <section className="our-doctor-section">
        <div className="section-floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/hexagen-group-1.png"
            alt="design-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/hexagon-group-2.png"
            alt="design-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title mb-0">Our Specialist Doctors</h2>
              </div>
            </div>
          </div>
          <div
            className="doctor-slider-ten nav-center slick-margins owl-theme aos"
            data-aos="fade-up"
          >
            <Slider {...doctorTenSlider}>
              <div className="module-border-wrap">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-13.jpg"
                        className="img-fluid"
                        alt="Jonathan Behar"
                      />
                    </Link>
                    <div className="fav-item">
                      <div className="featured-rating">
                        <i className="fa fa-star " /> <span>4.5</span>
                      </div>
                      <Link
                        onClick={() => toggleClass(1)}
                        to="#"
                        className={`fav-icon ${
                          isClassAdded[1] ? "selected" : ""
                        }`}
                      >
                        <i className="fa fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-category">
                        <Link to="#" className="listing-category-tag tag-green">
                          Cardiology
                        </Link>
                        <Link
                          to="#"
                          className="listing-category-tag tag-purple"
                        >
                          Electrophysiology
                        </Link>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-floating-img">
                          <ImageWithBasePath
                            src="assets/img/bg/ecg-wave.png"
                            alt="ecg-wave"
                          />
                        </div>
                        <div className="listing-user">
                          <div className="listing-user-details">
                            <h6>
                              <Link to="/patient/doctor-profile">
                                Dr Jonathan Behar{" "}
                              </Link>
                            </h6>
                            <span>Cardiologist</span>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link
                            to="/patient/booking2"
                            className="btn consult-btn"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="module-border-wrap">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        className="img-fluid"
                        alt="Piers Clifford"
                      />
                    </Link>
                    <div className="fav-item">
                      <div className="featured-rating">
                        <i className="fa fa-star " /> <span>4.5</span>
                      </div>
                      <Link
                        onClick={() => toggleClass(2)}
                        to="#"
                        className={`fav-icon ${
                          isClassAdded[2] ? "selected" : ""
                        }`}
                      >
                        <i className="fa fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-category">
                        <Link to="#" className="listing-category-tag tag-red">
                          Hypertension
                        </Link>
                        <Link to="#" className="listing-category-tag tag-green">
                          Cardiology
                        </Link>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-floating-img">
                          <ImageWithBasePath
                            src="assets/img/bg/ecg-wave.png"
                            alt="ecg-wave"
                          />
                        </div>
                        <div className="listing-user">
                          <div className="listing-user-details">
                            <h6>
                              <Link to="/patient/doctor-profile">
                                Dr Piers Clifford
                              </Link>
                            </h6>
                            <span>Consultant Cardiologist</span>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link
                            to="/patient/booking2"
                            className="btn consult-btn"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="module-border-wrap">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-thumb-05.jpg"
                        className="img-fluid"
                        alt="Rajan Sharma"
                      />
                    </Link>
                    <div className="fav-item">
                      <div className="featured-rating">
                        <i className="fa fa-star " /> <span>4.5</span>
                      </div>
                      <Link
                        onClick={() => toggleClass(3)}
                        to="#"
                        className={`fav-icon ${
                          isClassAdded[3] ? "selected" : ""
                        }`}
                      >
                        <i className="fa fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-category">
                        <Link to="#" className="listing-category-tag tag-green">
                          Cardiology
                        </Link>
                        <Link
                          to="#"
                          className="listing-category-tag tag-purple"
                        >
                          Catheterization
                        </Link>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-floating-img">
                          <ImageWithBasePath
                            src="assets/img/bg/ecg-wave.png"
                            alt="ecg-wave"
                          />
                        </div>
                        <div className="listing-user">
                          <div className="listing-user-details">
                            <h6>
                              <Link to="/patient/doctor-profile">
                                Dr Rajan Sharma
                              </Link>
                            </h6>
                            <span>Cardiologist</span>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link
                            to="/patient/booking2"
                            className="btn consult-btn"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="module-border-wrap">
                <div className="listing-card">
                  <div className="listing-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-thumb-07.jpg"
                        className="img-fluid"
                        alt="Julian Collinson"
                      />
                    </Link>
                    <div className="fav-item">
                      <div className="featured-rating">
                        <i className="fa fa-star " /> <span>4.5</span>
                      </div>
                      <Link
                        onClick={() => toggleClass(4)}
                        to="#"
                        className={`fav-icon ${
                          isClassAdded[4] ? "selected" : ""
                        }`}
                      >
                        <i className="fa fa-heart" />
                      </Link>
                    </div>
                  </div>
                  <div className="listing-content">
                    <div className="listing-details">
                      <div className="listing-category">
                        <Link to="#" className="listing-category-tag tag-green">
                          Cardiology
                        </Link>
                        <Link
                          to="#"
                          className="listing-category-tag tag-purple"
                        >
                          Electrophysiology
                        </Link>
                      </div>
                      <div className="listing-profile-details">
                        <div className="listing-floating-img">
                          <ImageWithBasePath
                            src="assets/img/bg/ecg-wave.png"
                            alt="ecg-wave"
                          />
                        </div>
                        <div className="listing-user">
                          <div className="listing-user-details">
                            <h6>
                              <Link to="/patient/doctor-profile">
                                Dr Julian Collinson
                              </Link>
                            </h6>
                            <span>Consultant Cardiologist</span>
                          </div>
                        </div>
                        <div className="listing-btn">
                          <Link
                            to="/patient/booking2"
                            className="btn consult-btn"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* /Our Doctor */}
      {/* Specialities Section */}
      <section className="specialities-section-one">
        <div className="bg-shapes">
          <ImageWithBasePath src="assets/img/bg/circle-bg.png" alt="image" />
          <ImageWithBasePath src="assets/img/bg/steps-bg-02.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title mb-0">Why Choose Doccure?</h2>
              </div>
            </div>
          </div>
          <div className="specialities-block aos" data-aos="fade-up">
            <div className="row rows-col-5">
              <div className="col-xl col-lg-4 col-sm-6 col-12 d-flex">
                <div className="specialities-item flex-fill">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <ImageWithBasePath
                        src="assets/img/icons/health-care-love.svg"
                        alt="heart-icon"
                      />
                    </div>
                  </div>
                  <p>Personalized Health care</p>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-sm-6 col-12 d-flex">
                <div className="specialities-item flex-fill">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <ImageWithBasePath
                        src="assets/img/icons/user-doctor.svg"
                        alt="male-doctor-icon"
                      />
                    </div>
                  </div>
                  <p>World-Leading Experts for your Care</p>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-sm-6 col-12 d-flex">
                <div className="specialities-item flex-fill">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <ImageWithBasePath
                        src="assets/img/icons/healthcare.svg"
                        alt="stethoscope-icon"
                      />
                    </div>
                  </div>
                  <p>Regular Check Up of your Heart</p>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-sm-6 col-12 d-flex">
                <div className="specialities-item flex-fill">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <ImageWithBasePath
                        src="assets/img/icons/drugs.svg"
                        alt="medicine-icon"
                      />
                    </div>
                  </div>
                  <p>Treatment For Complex Conditions</p>
                </div>
              </div>
              <div className="col-xl col-lg-4 col-sm-6 col-12 d-flex">
                <div className="specialities-item flex-fill">
                  <div className="specialities-img">
                    <div className="hexogen">
                      <ImageWithBasePath
                        src="assets/img/icons/syringe.svg"
                        alt="syringe-icon"
                      />
                    </div>
                  </div>
                  <p>Minimally Invasive Procedures</p>
                </div>
              </div>
            </div>
          </div>
          <div className="specialities-wrap">
            <div className="row">
              <div className="col-lg-7">
                <div className="special-content">
                  <h2>Don’t Make Delay on your Life</h2>
                  <h4>Book An Appointment Today</h4>
                  <p>
                    If you have a primary care physician, you can reach out to
                    their office and explain that you would like to see a
                    cardiologist. They can typically provide referrals and help
                    you schedule an appointment.
                  </p>
                  <div className="special-btn">
                    <Link to="#" className="btn btn-primary">
                      Start a Consult
                    </Link>
                    <Link to="#" className="btn btn-outline-primary">
                      Click Our Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Specialities Section */}
      {/* Steps To Follow*/}
      <section className="need-to-know-section steps-to-follow">
        <div className="bg-shapes">
          <ImageWithBasePath src="assets/img/bg/steps-bg.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="section-header-one section-header-slider text-center">
                <h2 className="section-title">Steps For New Patients</h2>
                <p>
                  Connect with your chosen healthcare professional at the
                  scheduled time. After your appointment, follow any post-visit
                  instructions provided by the doctor.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
              <div className="box-detail">
                <div className="steps-list-box">
                  <div className="steps-list-img">
                    <span>1</span>
                    <ImageWithBasePath
                      src="assets/img/icons/hreat-pulse.svg"
                      className="img-fluid"
                      alt="heart-pulse"
                    />
                  </div>
                  <h6>Choose Your Doctor</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing..</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
              <div className="box-detail">
                <div className="steps-list-box">
                  <div className="steps-list-img">
                    <span>2</span>
                    <ImageWithBasePath
                      src="assets/img/icons/hreat-pulse.svg"
                      className="img-fluid"
                      alt="heart-pulse"
                    />
                  </div>
                  <h6>Set Appointment</h6>
                  <p>
                    After choose your preferred doctor, set your appointment.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
              <div className="box-detail">
                <div className="steps-list-box">
                  <div className="steps-list-img">
                    <span>3</span>
                    <ImageWithBasePath
                      src="assets/img/icons/hreat-pulse.svg"
                      className="img-fluid"
                      alt="heart-pulse"
                    />
                  </div>
                  <h6>Consult With Doctor</h6>
                  <p>
                    Discuss your health concerns with the doctor you choosed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 aos" data-aos="fade-up">
              <div className="box-detail">
                <div className="steps-list-box">
                  <div className="steps-list-img">
                    <span>4</span>
                    <ImageWithBasePath
                      src="assets/img/icons/hreat-pulse.svg"
                      className="img-fluid"
                      alt="heart-pulse"
                    />
                  </div>
                  <h6>Get recommendation</h6>
                  <p>
                    After consulting you receive personalized advice &amp;
                    solution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Steps To Follow */}
      {/* Testimonials */}
      <div className="testimonial-section-ten need-to-know-section">
        <div className="section-floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/hexagen-group-1.png"
            alt="design-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/hexagon-group-2.png"
            alt="design-image"
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider text-center">
                <h2 className="section-title">What Our Patients Say</h2>
                <p>
                  Very happy with his care and would recommend to anyone else.
                  Professional and informative.
                </p>
              </div>
            </div>
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="testimonial-sliders slick-margins nav-center">
                <Slider {...testimonialSlider}>
                  <div className="testimonial-card">
                    <div className="testimonial-user-details">
                      <div className="d-flex align-items-center">
                        <div className="testimonial-user-img">
                          <ImageWithBasePath
                            src="assets/img/clients/client-07.jpg"
                            className="img-fluid"
                            alt="Martin Philips"
                          />
                        </div>
                        <div className="testimonial-user-name">
                          <h5>Andrew</h5>
                          <p>Newyork, USA</p>
                        </div>
                      </div>
                      <div className="rating">
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                      </div>
                    </div>
                    <div className="testmonial-user-coments">
                      <h6>“ Awesome Impact ”</h6>
                      <p>
                        After suffering from a heart condition for a number of
                        years I was very happy to meet Doccure, from the first
                        consultation where he believed there was a solution...
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-user-details">
                      <div className="d-flex align-items-center">
                        <div className="testimonial-user-img">
                          <ImageWithBasePath
                            src="assets/img/clients/client-08.jpg"
                            className="img-fluid"
                            alt="James Anderson"
                          />
                        </div>
                        <div className="testimonial-user-name">
                          <h5>James Anderson</h5>
                          <p>Newyork, USA</p>
                        </div>
                      </div>
                      <div className="rating">
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                      </div>
                    </div>
                    <div className="testmonial-user-coments">
                      <h6>“ I am very grateful ”</h6>
                      <p>
                        A Doctors explains everything clearly and helps you to
                        understand even the most complex medical term
                        consultation
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-user-details">
                      <div className="d-flex align-items-center">
                        <div className="testimonial-user-img">
                          <ImageWithBasePath
                            src="assets/img/clients/client-09.jpg"
                            className="img-fluid"
                            alt="Christina Louis"
                          />
                        </div>
                        <div className="testimonial-user-name">
                          <h5>Christina Louis</h5>
                          <p>Newyork, USA</p>
                        </div>
                      </div>
                      <div className="rating">
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                      </div>
                    </div>
                    <div className="testmonial-user-coments">
                      <h6>“ Excellent Clinician ”</h6>
                      <p>
                        Excellent clinician. Endlessly patient and
                        reassuring.Also a very efficient back up team. He was
                        prepared to spend as long as I needed to understand what
                        he was saying.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-card">
                    <div className="testimonial-user-details">
                      <div className="d-flex align-items-center">
                        <div className="testimonial-user-img">
                          <ImageWithBasePath
                            src="assets/img/clients/client-10.jpg"
                            className="img-fluid"
                            alt="Christina Louis"
                          />
                        </div>
                        <div className="testimonial-user-name">
                          <h5>Sofia Nick</h5>
                          <p>Newyork, USA</p>
                        </div>
                      </div>
                      <div className="rating">
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                        <i className="fa-solid fa-star filled" />
                      </div>
                    </div>
                    <div className="testmonial-user-coments">
                      <h6>“ Excellent Work ”</h6>
                      <p>
                        Doctors explains everything clearly and helps you to
                        understand even the most complex medical terms
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Testimonials */}
      {/* Pricing */}
      <section className="pricing-section pricing-section-ten">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-md-12 mx-auto text-center aos"
              data-aos="fade-up"
            >
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Choose your Package </h2>
                <p>
                  Clearly communicated the risks and outcomes of the procedure.
                  Very happy with his care and would recommend to anyone else.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-cente">
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex aos"
              data-aos="fade-up"
            >
              <div className="card pricing-card pricing-card-active flex-fill">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-title">
                        <h4>Free</h4>
                      </div>
                      <div className="pricing-tag">
                        <div>
                          <ImageWithBasePath
                            src="assets/img/bg/heart-plus.png"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>$0 </h2>
                      <span>per month</span>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/pages/pricing-plan" className="btn">
                        Request a Demo
                      </Link>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>100 Conversations p/m</li>
                        <li>10 Websites</li>
                        <li>2 GB Data Storage</li>
                      </ul>
                    </div>
                    <div className="pricing-list pricing-list-two">
                      <ul>
                        <li>Chat Widget</li>
                        <li>Real Time Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex aos"
              data-aos="fade-up"
            >
              <div className="card pricing-card flex-fill">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-title">
                        <h4>Essentials</h4>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>$50 </h2>
                      <span>per month</span>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/pages/pricing-plan" className="btn">
                        Request A Demo
                      </Link>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>500 Conversations p/m</li>
                        <li>20 Websites</li>
                        <li>20 GB Data Storage</li>
                      </ul>
                    </div>
                    <div className="pricing-list pricing-list-two">
                      <ul>
                        <li>
                          Everything Off <span className="badge">Free</span>
                        </li>
                        <li>Chat widget</li>
                        <li>Real Time Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex aos"
              data-aos="fade-up"
            >
              <div className="card pricing-card flex-fill">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-title d-flex align-items-center justify-content-between">
                        <h4>Team</h4>
                        <span className="badge">30% discount</span>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>$90 </h2>
                      <span>per month</span>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/pages/pricing-plan" className="btn">
                        Request A Demo
                      </Link>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>1000 conversations p/m</li>
                        <li>20 Websites</li>
                        <li>20 GB Data Storage</li>
                      </ul>
                    </div>
                    <div className="pricing-list pricing-list-two">
                      <ul>
                        <li>
                          Everything Off <span className="badge">Free</span>
                        </li>
                        <li>Chat widget</li>
                        <li>Real Time Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex aos"
              data-aos="fade-up"
            >
              <div className="card pricing-card flex-fill">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-title">
                        <h4>Enterprises</h4>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>$150 </h2>
                      <span>per month</span>
                    </div>
                    <div className="pricing-btn">
                      <Link to="/pages/pricing-plan" className="btn">
                        Request A Demo
                      </Link>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>2000 Conversations p/m</li>
                        <li>20 Websites</li>
                        <li>20 GB Data Storage</li>
                      </ul>
                    </div>
                    <div className="pricing-list pricing-list-two">
                      <ul>
                        <li>
                          Everything Off <span className="badge">Free</span>
                        </li>
                        <li>Chat widget</li>
                        <li>Real Time Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="partners-info aos" data-aos="fade-up">
                <div className="section-header-one text-center">
                  <h2 className="section-title mb-0">
                    Top Business Organizations Collaborated With Us
                  </h2>
                </div>
                <ul className="partners-slider slick-margins ">
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
          </div>
        </div>
      </section>
      {/* /Pricing */}
      {/* FAQ Section */}
      <section className="faq-section faq-section-ten">
        <div className="section-floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/hexagen-group-1.png"
            alt="design-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/hexagon-group-2.png"
            alt="design-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="faq-img">
                <ImageWithBasePath
                  src="assets/img/faq-img-2.png"
                  className="img-fluid"
                  alt="img"
                />
                <div className="bg-shapes">
                  <ImageWithBasePath
                    src="assets/img/bg/cardiac-bg-02.png"
                    alt="image"
                  />
                </div>
                <div className="faq-user">
                  <div className="user-info">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/clients/client-08.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </span>
                    <div className="flex-1">
                      <h6>Andrew</h6>
                      <p>Newyork, USA</p>
                    </div>
                  </div>
                  <div className="rating">
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-header-one aos" data-aos="fade-up">
                <h2 className="section-title mb-0">
                  Frequently Asked Questions?
                </h2>
              </div>
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">
                  {/* FAQ Item */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <Link
                        to="#"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqone"
                        aria-expanded="false"
                        aria-controls="faqone"
                      >
                        Have you need an expert medical team in house?
                      </Link>
                    </h2>
                    <div
                      id="faqone"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Simply visit our website and log in or create an
                            account. Search for a doctor based on
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
                    <h2 className="accordion-header" id="headingFour">
                      <Link
                        to="#"
                        className="accordion-button collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        The medical Experts carefully Transplant the Heart
                      </Link>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
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
                    <h2 className="accordion-header" id="headingFive">
                      <Link
                        to="#"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Experience in When to repair the mitral valve.
                      </Link>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Heart care and specialist doctors in the hospital.
                            They are carefully and easily manage heart surgey.
                          </p>
                          <ul>
                            <li>The extinction of plant and</li>
                            <li>animal species is endangering</li>
                            <li>the functioning of ecosystems</li>
                          </ul>
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
      {/* Blog Section */}
      <section className="section section-blogs cardio-blogs">
        <div className="container">
          {/* Section Header */}
          <div className="section-header-one aos" data-aos="fade-up">
            <h2 className="section-title">Latest News</h2>
            <p>
              Have a look on our news &amp; Articles will help you to understand
              about the health
            </p>
          </div>
          {/* /Section Header */}
          <div className="blog-slider slick-margins nav-center">
          <Slider {...serviceSlider}>
            {/* Blog Post */}
            <div className="blog grid-blog aos" data-aos="fade-up">
              <div className="blog-image">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/blog/cardio-blog-01.jpg"
                    alt="Post Image"
                  />
                </Link>
                <div className="post-author">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/doctor-thumb-01.jpg"
                      alt="Post Author"
                    />
                    <span>Dr. Pamila Certis</span>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-slug">Prevention</div>
                <h3 className="blog-title">
                  <Link to="/blog/blog-details">
                    How To Get Pregnant: Tips to Increase Fertility
                  </Link>
                </h3>
                <p className="mb-0">
                  Embark on a fertility journey with expert advice on lifestyle
                  changes, nutrition, and holistic...
                </p>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="blog grid-blog aos" data-aos="fade-up">
              <div className="blog-image">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/blog/cardio-blog-02.jpg"
                    alt="Post Image"
                  />
                </Link>
                <div className="post-author">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/doctor-thumb-02.jpg"
                      alt="Post Author"
                    />
                    <span>Dr. Ronald Jacobs</span>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-slug">Diet</div>
                <h3 className="blog-title">
                  <Link to="/blog/blog-details">
                    The prevalence of coronary artery disease in patients
                    presenting ....
                  </Link>
                </h3>
                <p className="mb-0">
                  Explore the rich culinary heritage of Central India with a
                  flavourful recipe thought to be...
                </p>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="blog grid-blog aos" data-aos="fade-up">
              <div className="blog-image">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/blog/cardio-blog-03.jpg"
                    alt="Post Image"
                  />
                </Link>
                <div className="post-author">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctors/doctor-thumb-07.jpg"
                      alt="Post Author"
                    />
                    <span>Dr. Marie Wells</span>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-slug">Medecine</div>
                <h3 className="blog-title">
                  <Link to="/blog/blog-details">
                    Benefits of consulting with an Online Doctor
                  </Link>
                </h3>
                <p className="mb-0">
                  Embark on a fertility journey with expert advice on lifestyle
                  changes, nutrition, and holistic...
                </p>
              </div>
            </div>
            {/* /Blog Post */}
            {/* Blog Post */}
            <div className="blog grid-blog aos" data-aos="fade-up">
              <div className="blog-image">
                <Link to="/blog/blog-details">
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/blog/cardio-blog-04.jpg"
                    alt="Post Image"
                  />
                </Link>
                <div className="post-author">
                  <Link to="/patient/doctor-profile">
                    <ImageWithBasePath
                      src="assets/img/doctor-profiles/doc-profile-01.jpg"
                      alt="Post Author"
                    />
                    <span>Dr. Darcie Nixon</span>
                  </Link>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-slug">Symptoms</div>
                <h3 className="blog-title">
                  <Link to="/blog/blog-details">
                    Understanding Heart Disease: Types, Symptoms, and Risk
                    Factors
                  </Link>
                </h3>
                <p className="mb-0">
                  Explore the various forms of heart disease, their symptoms,
                  and the factors that ...
                </p>
              </div>
            </div>
            {/* /Blog Post */}
            </Slider>
          </div>
          <div className="view-all text-center aos" data-aos="fade-up">
            <Link to="/blog/blog-list" className="btn btn-primary">
              All Articles
            </Link>
          </div>
        </div>
      </section>
      {/* /Blog Section */}
      <Home5Footer />
    </div>
  );
};

export default Home5;
