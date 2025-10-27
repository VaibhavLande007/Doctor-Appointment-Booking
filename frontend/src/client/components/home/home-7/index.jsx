import React, { useEffect, useState } from "react";
import Home7Header from "./header";
import Home7Footer from "./footer";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from "aos";
import "aos/dist/aos.css";
import { Calendar } from "primereact/calendar";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home7 = () => {
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-navs owl-nav ">
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
  const feedbackReviewSlider = {
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
  const variousLogoSlider = {
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
  return (
    <div className="main-wrapper home-twelve">
      <Home7Header />
      {/* Home Banner */}
      <section className="banner-section-fourteen banner-section-twelve">
        <div className="banner-section-twelve-bg">
          <ImageWithBasePath
            src="assets/img/bg/home-12-banner-bg-1.png"
            alt="design-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/home-12-banner-bg-2.png"
            alt="design-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="banner-content banner-content-fourteen aos"
                data-aos="fade-up"
              >
                <h1>We take care of Your Pets</h1>
                <p>
                  Ensuring the Health &amp; Happiness of your family member
                  throughCompassionate and advanced Veterinary Care
                </p>
                <div className="banner-btns-fourteen ">
                  <Link to="/patient/booking1" className="btn btn-primary">
                    Start a Consult
                  </Link>
                  <Link to="/patient/booking1" className="btn btn-primary ">
                    Schedule a Call
                  </Link>
                </div>
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
            </div>
            <div className="col-lg-6">
              <div
                className="banner-img banner-img-twelve aos"
                data-aos="fade-up"
              >
                <ImageWithBasePath
                  src="assets/img/bg/home-12-banner-1.png"
                  className="img-fluid"
                  alt="dog-image"
                />
                <ImageWithBasePath
                  src="assets/img/bg/home-12-banner-2.png"
                  className="img-fluid"
                  alt="cat-image"
                />
                <div className="banner-banner-img-twelve-bg">
                  <ImageWithBasePath
                    src="assets/img/bg/dot-1.png"
                    alt="dot-icon"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/dot-2.png"
                    alt="dot-icon"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/ring-1.png"
                    alt="ring-icon"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/ring-2.png"
                    alt="ring-icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12 d-flex justify-content-end">
              <div className="badge-info-bottom">
                <span>
                  <ImageWithBasePath
                    src="assets/img/icons/animal-feet-icon.svg"
                    alt="Img"
                  />
                </span>
                <h6>First Annual Checkup Free</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* services Section */}
      <section className="services-section-fourteen">
        <div className="floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/veterinary-pg-sec-icon-3.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/veterinary-pg-sec-icon-2.png"
            alt="paw-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-fourteen service-inner-fourteen">
                <div className="service-inner-fourteen"></div>
                <h2>What can We do </h2>
                <p>
                  Veterinary care encompasses a wide range of services aimed at
                  promoting the health and well-being of animals.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-gap justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-12 aos" data-aos="fade-up">
              <div className="our-services-list w-100">
                <div className="service-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/injection.svg"
                    alt="injection-icon"
                  />
                </div>
                <h4>Vaccination</h4>
                <p>
                  Administration of vaccines to protect animals against common
                  infectious diseases.
                </p>
                <Link
                  to="#"
                  className="more-btn overlay-btns d-inline-flex align-items-center"
                >
                  Learn More
                  <i className="fa-solid fa-circle-arrow-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 aos" data-aos="fade-up">
              <div className="our-services-list w-100">
                <div className="service-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/bottel.svg"
                    alt="bottel-icon"
                  />
                </div>
                <h4>Parasite Control</h4>
                <p>
                  Prescription and administration of parasite prevention
                  products to protect animals from fleas.
                </p>
                <Link
                  to="#"
                  className="more-btn overlay-btns d-inline-flex align-items-center"
                >
                  Learn More
                  <i className="fa-solid fa-circle-arrow-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 aos" data-aos="fade-up">
              <div className="our-services-list w-100">
                <div className="service-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/bath-tub.svg"
                    alt="pet-grooming-icon"
                  />
                </div>
                <h4>Pet Grooming</h4>
                <p>
                  Dental examinations to assess oral health, teeth cleaning, and
                  treatment of dental problems.
                </p>
                <Link
                  to="#"
                  className="more-btn overlay-btns d-inline-flex align-items-center"
                >
                  Learn More
                  <i className="fa-solid fa-circle-arrow-right ms-2" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 aos" data-aos="fade-up">
              <div className="our-services-list w-100">
                <div className="service-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/pet-doctor.svg"
                    alt="stethoscope-icon"
                  />
                </div>
                <h4>Diagnostic Testing</h4>
                <p>
                  Laboratory tests including blood tests, urinalysis, fecal
                  analysis, and imaging (X-rays, ultrasound).
                </p>
                <Link
                  to="#"
                  className="more-btn overlay-btns d-inline-flex align-items-center"
                >
                  Learn More
                  <i className="fa-solid fa-circle-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="marquee-title">
          <h3>
            We are Experts in Taking Care of your Pet for over 30 years and
            still going on...
          </h3>
        </div>
        <div className="container">
          <div className="best-quality-sec">
            <div className="row">
              <div className="col-lg-5">
                <div className="img-col">
                  <ImageWithBasePath
                    src="assets/img/bg/best-quality-sec-img.png"
                    className="img-fluid"
                    alt="Img"
                  />
                </div>
              </div>
              <div className="col-lg-7 aos" data-aos="fade-up">
                <div className="quality-service-info">
                  <div className="section-header-fourteen service-inner-fourteen">
                    <h2>
                      Our mission is to provide the best quality services to
                      your Pets{" "}
                    </h2>
                    <p>
                      Treating animals and we are always excited to add to our
                      ever-expanding family. We thank you for consider us and we
                      look forward to hearing from you soon.
                    </p>
                  </div>
                  <ul className="pets-service-list">
                    <li>
                      <h3 className="text-blue">
                        <CountUp
                          end={3564}
                          duration={5}
                          className="counter animated fadeInDownBig"
                        />
                        +
                      </h3>
                      <p>
                        The number of pets successfully treated in our vet
                        clinic
                      </p>
                    </li>
                    <li>
                      <h3 className="text-yellow">
                        <CountUp
                          end={1654}
                          duration={5}
                          className="counter animated fadeInDownBig"
                        />
                        +
                      </h3>
                      <p>Happy global customers who trusted us with ease</p>
                    </li>
                  </ul>
                  <Link
                    to="/patient/search-doctor2"
                    className="learn-more-btn btn btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /services Section */}
      {/* Finent-Veterinary */}
      <section className="finent-veterinary-sec">
        <div className="floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/small-paw-2.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/care-sec-bg-1.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/small-paw-2.png"
            alt="paw-image"
          />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="veterinary-care-info">
                <div
                  className="section-header-fourteen service-inner-fourteen"
                  data-aos="fade-up"
                >
                  <h2>The Finest Veterinary Care</h2>
                  <p>
                    Veterinary care encompasses a wide range of services aimed
                    at promoting the health and well-being of animals.
                  </p>
                </div>
                <ul className="care-list aos" data-aos="fade-up">
                  <li>
                    <span>1</span>
                    <div className="care-list-info">
                      <h5>Experienced &amp; Trained Staff</h5>
                      <p>
                        Ongoing training, professional development, and a
                        commitment to excellence are key components of a
                        successful veterinary practice.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="active">2</span>
                    <div className="care-list-info">
                      <h5>Competent Medical Pet Care</h5>
                      <p>
                        Ongoing training, professional development, and a
                        commitment to excellence are key components of a
                        successful veterinary practice.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>3</span>
                    <div className="care-list-info">
                      <h5>Thoughtful Guidance &amp; Advice</h5>
                      <p>
                        Ongoing training, professional development, and a
                        commitment to excellence are key components of a
                        successful veterinary practice.
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>4</span>
                    <div className="care-list-info">
                      <h5>On-Site Pharmacy And Shop</h5>
                      <p>
                        Ongoing training, professional development, and a
                        commitment to excellence are key components of a
                        successful veterinary practice.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-col-img">
                <ImageWithBasePath
                  src="assets/img/bg/dog-img.png"
                  className="img-fluid"
                  alt="Img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Finent-Veterinary */}
      {/* Our Doctors */}
      <div className="blog-section-fourteen our-doctor-twelve">
        <div className="floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/expert-sec-bg-01.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/expert-sec-bg-02.png"
            alt="paw-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header-fourteen service-inner-fourteen">
                <h2>Meet Our Experts</h2>
                <p>
                  We have over 30 years of experience treating animals and we
                  are always excited to add to our ever-expanding family.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/veterinary-doctor-07.jpg"
                          alt="image"
                          className="img-fluid "
                        />
                      </div>
                    </Link>
                    <div className="doc-info">
                      <h4 className="blog-inner-right-fourt-care">
                        <Link to="/patient/doctor-profile">
                          Dr. Keith Warner
                        </Link>
                        <span>Cheif Surgeon</span>
                      </h4>
                      <div className="card-cal-icon">
                        <Link to="/patient/booking2">
                          <i className="fa-solid fa-calendar-days" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/veterinary-doctor-08.jpg"
                          alt="image"
                          className="img-fluid "
                        />
                      </div>
                    </Link>
                    <div className="doc-info">
                      <h4 className="blog-inner-right-fourt-care">
                        <Link to="/patient/doctor-profile">Dr. Karl Woods</Link>
                        <span>Vacinator</span>
                      </h4>
                      <div className="card-cal-icon">
                        <Link to="/patient/booking2">
                          <i className="fa-solid fa-calendar-days" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/veterinary-doctor-05.jpg"
                          alt="image"
                          className="img-fluid "
                        />
                      </div>
                    </Link>
                    <div className="doc-info">
                      <h4 className="blog-inner-right-fourt-care">
                        <Link to="/patient/doctor-profile">
                          Dr. Worthington
                        </Link>
                        <span>Grooming Specialist</span>
                      </h4>
                      <div className="card-cal-icon">
                        <Link to="/patient/booking2">
                          <i className="fa-solid fa-calendar-days" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="card blog-inner-fourt-all">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/patient/doctor-profile">
                      <div className="blog-inner-right-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/veterinary-doctor-06.jpg"
                          alt="image"
                          className="img-fluid "
                        />
                      </div>
                    </Link>
                    <div className="doc-info">
                      <h4 className="blog-inner-right-fourt-care">
                        <Link to="/patient/doctor-profile">
                          Dr. Brandy Dixon
                        </Link>
                        <span>Vacinator</span>
                      </h4>
                      <div className="card-cal-icon">
                        <Link to="/patient/booking2">
                          <i className="fa-solid fa-calendar-days" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="blog-btn-sec text-center aos aos-init aos-animate"
            data-aos="fade-up"
          >
            <Link
              to="/patient/search-doctor1"
              className="btn btn-primary btn-view"
            >
              View all Doctors
            </Link>
          </div>
        </div>
      </div>
      {/* /Our Doctors */}
      {/* Pricing */}
      <section className="home-twelve-pricing">
        <div className="floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/price-sec-bg-01.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/price-sec-paw-01.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/price-sec-paw-02.png"
            alt="paw-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-fourteen service-inner-fourteen">
                <h2>Pricing Packages</h2>
                <p>
                  Veterinary care encompasses a wide range of services aimed at
                  promoting the health and well-being of animals.
                </p>
              </div>
            </div>
          </div>
          <div className="pricing-tab-panel text-center">
            <ul
              className="nav nav-pills inner-tab "
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-monthly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-monthly"
                  type="button"
                  role="tab"
                  aria-controls="pills-monthly"
                  aria-selected="true"
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-yearly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-yearly"
                  type="button"
                  role="tab"
                  aria-controls="pills-yearly"
                  aria-selected="false"
                  tabIndex={-1}
                >
                  yearly
                </button>
              </li>
            </ul>
            <div className="tab-content pt-0">
              <div
                className="tab-pane fade active show"
                id="pills-monthly"
                role="tabpanel"
                aria-labelledby="pills-monthly-tab"
              >
                <div className="row row-gap justify-content-center align-items-end">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="price-card-twelve">
                      <div className="price-content">
                        <div className="card-title">
                          <h3>Basic</h3>
                          <span>The most basic plan</span>
                        </div>
                        <div className="price">
                          <h2>$19</h2>
                          <span>Monthly</span>
                          <p>
                            This Plan excludes online consultation options for
                            the user
                          </p>
                        </div>
                        <div className="pack-details">
                          <ul>
                            <li>
                              <i className="feather icon-check-circle" />
                              30 day Services
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              15 Pet Shower
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />6 Hair
                              fall Pack
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              10 Vaccination
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              10 Basic Checkup
                            </li>
                          </ul>
                        </div>
                        <div className="price-btn w-100">
                          <Link to="/pages/pricing-plan" className="btn w-100">
                            Join the Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="price-card-twelve active">
                      <div className="price-content">
                        <div className="popular-head">
                          <span className="d-flex align-items-center">
                            <i className="fa-solid fa-dog me-2" />
                            Most Popular
                          </span>
                        </div>
                        <div className="card-title">
                          <h3>Premium</h3>
                          <span>Exclusive For pet owners</span>
                        </div>
                        <div className="price">
                          <h2>$29</h2>
                          <span>Monthly</span>
                          <p>
                            This plan includes online consultation options for
                            the user
                          </p>
                        </div>
                        <div className="pack-details">
                          <ul>
                            <li>
                              <i className="feather icon-check-circle" />
                              30 day Services
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />5 Pet
                              Shower
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />2 Hair
                              fall Pack
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />3
                              Vaccination
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />5 Basic
                              Checkup
                            </li>
                          </ul>
                        </div>
                        <div className="price-btn w-100">
                          <Link to="/pages/pricing-plan" className="btn w-100">
                            Join the Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="price-card-twelve">
                      <div className="price-content">
                        <div className="card-title">
                          <h3>Exclusive</h3>
                          <span>The most profitable plan</span>
                        </div>
                        <div className="price">
                          <h2>$59</h2>
                          <span>Monthly</span>
                          <p>
                            This plan includes online consultation options for
                            the user
                          </p>
                        </div>
                        <div className="pack-details">
                          <ul>
                            <li>
                              <i className="feather icon-check-circle" />
                              30 day Services
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              15 Pet Shower
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />6 Hair
                              fall Pack
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              10 Vaccination
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              10 Basic Checkup
                            </li>
                          </ul>
                        </div>
                        <div className="price-btn w-100">
                          <Link to="/pages/pricing-plan" className="btn w-100">
                            Join the Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-yearly"
                role="tabpanel"
                aria-labelledby="pills-yearly-tab"
              >
                <div className="row row-gap justify-content-center align-items-end">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="price-card-twelve">
                      <div className="price-content">
                        <div className="card-title">
                          <h3>Basic</h3>
                          <span>The most basic plan</span>
                        </div>
                        <div className="price">
                          <h2>$19</h2>
                          <span>Yearly</span>
                          <p>
                            This Plan excludes online consultation options for
                            the user
                          </p>
                        </div>
                        <div className="pack-details">
                          <ul>
                            <li>
                              <i className="feather icon-check-circle" />
                              30 day Services
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              15 Pet Shower
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />6 Hair
                              fall Pack
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              10 Vaccination
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              10 Basic Checkup
                            </li>
                          </ul>
                        </div>
                        <div className="price-btn w-100">
                          <Link to="/pages/pricing-plan" className="btn w-100">
                            Join the Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="price-card-twelve active">
                      <div className="price-content">
                        <div className="popular-head">
                          <span className="d-flex align-items-center">
                            <i className="fa-solid fa-dog me-2" />
                            Most Popular
                          </span>
                        </div>
                        <div className="card-title">
                          <h3>Premium</h3>
                          <span>Exclusive For pet owners</span>
                        </div>
                        <div className="price">
                          <h2>$29</h2>
                          <span>Yearly</span>
                          <p>
                            This plan includes online consultation options for
                            the user
                          </p>
                        </div>
                        <div className="pack-details">
                          <ul>
                            <li>
                              <i className="feather icon-check-circle" />
                              30 day Services
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />5 Pet
                              Shower
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />2 Hair
                              fall Pack
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />3
                              Vaccination
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />5 Basic
                              Checkup
                            </li>
                          </ul>
                        </div>
                        <div className="price-btn w-100">
                          <Link to="/pages/pricing-plan" className="btn w-100">
                            Join the Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="price-card-twelve">
                      <div className="price-content">
                        <div className="card-title">
                          <h3>Exclusive</h3>
                          <span>The most profitable plan</span>
                        </div>
                        <div className="price">
                          <h2>$59</h2>
                          <span>Yearly</span>
                          <p>
                            This plan includes online consultation options for
                            the user
                          </p>
                        </div>
                        <div className="pack-details">
                          <ul>
                            <li>
                              <i className="feather icon-check-circle" />
                              30 day Services
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              15 Pet Shower
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />6 Hair
                              fall Pack
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              10 Vaccination
                            </li>
                            <li>
                              <i className="feather icon-check-circle" />
                              10 Basic Checkup
                            </li>
                          </ul>
                        </div>
                        <div className="price-btn w-100">
                          <Link to="/pages/pricing-plan" className="btn w-100">
                            Join the Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Pricing */}
      {/* Feedback */}
      <section className="clients-section-fourteen">
        <div className="floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/small-paw-2.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/small-paw-2.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/small-paw-3.png"
            alt="paw-image"
          />
          <ImageWithBasePath
            src="assets/img/bg/care-sec-bg-1.png"
            alt="paw-image"
          />
        </div>
        <div className="container">
          <div className="badge-title">
            <span className="badge badge-bg-warning">
              <i className="fa-solid fa-circle me-2" />
              Testimonials
              <i className="fa-solid fa-circle ms-2" />
            </span>
          </div>
          <div className="testi-title-head">
            <h2>Hear&nbsp;Reviews&nbsp;From Our Amazing Clients</h2>
            <p>
              Veterinary care encompasses a wide range of services aimed at
              promoting the health and well-being of animals.
            </p>
            <div className="rate-star">
              <h5>Average Ratings</h5>
              <div>
                <span>4.9</span>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="review-thumb">
                <ImageWithBasePath
                  src="assets/img/icons/review-thumb.svg"
                  alt="Img"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="feedback-review-slider owl-theme aos"
                data-aos="fade-up"
              >
                <Slider {...feedbackReviewSlider}>
                  <div className="card feedback-card">
                    <div className="d-flex feedback-card-img-left">
                      <div className="client-inner-main">
                        <ImageWithBasePath
                          src="assets/img/reviews/review-img-02.png"
                          alt="image"
                          className="img-fluid w-auto"
                        />
                      </div>
                      <div className="card-body feedback-card-body">
                        <div className="feedback-inner-main">
                          <div className="rating rating-fourteen">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                          </div>
                          <p>
                            "I can't thank enough for the exceptional care they
                            provided to my beloved dog, Max. From the moment we
                            walked in, the staff made us feel like family. Dr.
                            Smith's expertise and compassion were evident as he
                            diagnosed and treated Max's illness. The entire team
                            went above and beyond to ensure Max's comfort and
                            recovery. I highly recommend to anyone seeking
                            top-notch veterinary care for their furry family
                            members."
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="feedback-card-user-info">
                              <h5>
                                <Link to="#">Andrea</Link>
                                <span>United States</span>
                              </h5>
                            </div>
                            <div className="quatation-img">
                              <ImageWithBasePath
                                src="assets/img/icons/quatation-img.svg"
                                className="w-auto"
                                alt="Img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card feedback-card">
                    <div className="d-flex feedback-card-img-left">
                      <div className="client-inner-main">
                        <ImageWithBasePath
                          src="assets/img/reviews/review-img-03.png"
                          alt="image"
                          className="img-fluid w-auto"
                        />
                      </div>
                      <div className="card-body feedback-card-body">
                        <div className="feedback-inner-main">
                          <div className="rating rating-fourteen">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                          </div>
                          <p>
                            "I can't thank enough for the exceptional care they
                            provided to my beloved dog, Max. From the moment we
                            walked in, the staff made us feel like family. Dr.
                            Smith's expertise and compassion were evident as he
                            diagnosed and treated Max's illness. The entire team
                            went above and beyond to ensure Max's comfort and
                            recovery. I highly recommend to anyone seeking
                            top-notch veterinary care for their furry family
                            members."
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="feedback-card-user-info">
                              <h5>
                                <Link to="#">Marie Wells</Link>
                                <span>United States</span>
                              </h5>
                            </div>
                            <div className="quatation-img">
                              <ImageWithBasePath
                                src="assets/img/icons/quatation-img.svg"
                                className="w-auto"
                                alt="Img"
                              />
                            </div>
                          </div>
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
      {/* /Feedback */}
      {/* Choose us */}
      <section className="choose-us-fourteen">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-fourteen text-center">
                <h2>Frequently Asked Questions</h2>
                <p>
                  FAQs help provide important information to clients and address
                  common queries they may have about the veterinary clinic's
                  services, policies, and procedures.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-us-right-main">
                <ImageWithBasePath
                  src="assets/img/bg/home-12-why-us.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="why-us-content">
                <div
                  className="us-faq aos"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How do I book an appointment with a doctor?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse shade show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            Yes, simply visit our website and log in or create
                            an account. Search for a doctor based on
                            specialization, location, or availability &amp;
                            confirm your booking.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Can I request a specific doctor when booking my
                          appointment?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse shade"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            Yes, you can usually request a specific doctor when
                            booking your appointment, though availability may
                            vary based on their schedule.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What should I do if I need to cancel or reschedule my
                          appointment?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse shade"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            If you need to cancel or reschedule your
                            appointment, contact the doctor as soon as possible
                            to inform them and to reschedule for another
                            available time slot.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What if I'm running late for my appointment?
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse shade"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            If you know you will be late, it's courteous to call
                            the doctor's office and inform them. Depending on
                            their policy and schedule, they may be able to
                            accommodate you or reschedule your appointment.
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Can I book appointments for family members or
                          dependents?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse shade"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <h6>
                            Yes, in many cases, you can book appointments for
                            family members or dependents. However, you may need
                            to provide their personal information and consent to
                            do so.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Choose us */}
      {/* blog section */}
      <div className="blog-section-fourteen">
        <div className="floating-bg">
          <ImageWithBasePath
            src="assets/img/bg/price-sec-bg-01.png"
            alt="paw-image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-header-fourteen service-inner-fourteen">
                <h2>Doccure recent Blogs</h2>
                <p>
                  Checkout our Latest blogs by our Experts by Month on Month to
                  know more about Petss
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="card blog-inner-fourt-all veterinary-blog-card">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/blog/blog-details">
                      <div className="blog-inner-right-img">
                        <ImageWithBasePath
                          src="assets/img/blog/veterinary-blog-01.jpg"
                          alt="image"
                          className="img-fluid "
                        />
                      </div>
                    </Link>
                    <div className="blog-inner-doc">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-thumb-18.jpg"
                        alt="Pamila Certis"
                        className="me-2"
                      />
                      <span>
                        <Link to="/patient/doctor-profile">
                          Dr. Pamila Certis
                        </Link>
                      </span>
                    </div>
                    <Link
                      to="/blog/blog-details"
                      className="blog-inner-right-fourt-care"
                    >
                      Must know best dog food Best Dog Food in India
                    </Link>
                    <p>
                      In the diverse landscape of India, dog food options have
                      variety of dietary needs..
                    </p>
                    <Link to="/blog/blog-details" className="read-cap-text">
                      Continue Reading
                      <i className="fa-solid fa-chevron-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="card blog-inner-fourt-all veterinary-blog-card">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/blog/blog-details">
                      <div className="blog-inner-right-img">
                        <ImageWithBasePath
                          src="assets/img/blog/veterinary-blog-02.jpg"
                          alt="image"
                          className="img-fluid "
                        />
                      </div>
                    </Link>
                    <div className="blog-inner-doc">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-thumb-17.jpg"
                        alt="Pamila Certis"
                        className="me-2"
                      />
                      <span>
                        <Link to="/patient/doctor-profile">
                          Dr. Ronald Jacobs
                        </Link>
                      </span>
                    </div>
                    <Link
                      to="/blog/blog-details"
                      className="blog-inner-right-fourt-care"
                    >
                      How to Care for Rabbits in the Winter
                    </Link>
                    <p>
                      During winter, it's crucial to provide proper care for
                      rabbits by ensuring they have a warm...
                    </p>
                    <Link to="/blog/blog-details" className="read-cap-text">
                      Continue Reading
                      <i className="fa-solid fa-chevron-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 aos" data-aos="fade-up">
              <div className="card blog-inner-fourt-all veterinary-blog-card">
                <div className="card-body blog-inner-fourt-main">
                  <div className="blog-inner-right-fourt">
                    <Link to="/blog/blog-details">
                      <div className="blog-inner-right-img">
                        <ImageWithBasePath
                          src="assets/img/blog/veterinary-blog-03.jpg"
                          alt="image"
                          className="img-fluid "
                        />
                      </div>
                    </Link>
                    <div className="blog-inner-doc">
                      <ImageWithBasePath
                        src="assets/img/doctors/doctor-thumb-16.jpg"
                        alt="Pamila Certis"
                        className="me-2"
                      />
                      <span>
                        <Link to="/patient/doctor-profile">
                          Dr. Marie Wells
                        </Link>
                      </span>
                    </div>
                    <Link
                      to="/blog/blog-details"
                      className="blog-inner-right-fourt-care"
                    >
                      Why do cat scratches while winter?
                    </Link>
                    <p>
                      During winter, it's crucial to provide proper care for
                      rabbits by ensuring they have a warm...
                    </p>
                    <Link to="/blog/blog-details" className="read-cap-text">
                      Continue Reading
                      <i className="fa-solid fa-chevron-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="various-logo-slider slick-margins">
                <Slider {...variousLogoSlider}>
                  <div className="plugin-logo-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/slider-plugin-icon-01.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <div className="plugin-logo-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/slider-plugin-icon-02.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <div className="plugin-logo-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/slider-plugin-icon-03.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <div className="plugin-logo-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/slider-plugin-icon-04.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <div className="plugin-logo-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/slider-plugin-icon-05.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <div className="plugin-logo-img">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/slider-plugin-icon-06.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /blog section */}
      <Home7Footer />
    </div>
  );
};

export default Home7;
