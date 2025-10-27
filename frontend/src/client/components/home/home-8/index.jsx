import React, { useEffect, useState } from "react";
import Home8Header from "./header";
import Home8Footer from "./footer";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cursor from "../../common/cursor/cursor";
import ProgressButton from "../../common/progress/progress";

const Home8 = () => {
  const services2 = [
    { name: 'Obstetric', code: '1' },
    { name: 'Paediatrician', code: '2' }

];
  const [date, setDate] = useState(null);
  const [selectedServices, setSelectedServices] = useState(null);
  const [selectedServices2, setSelectedServices2] = useState(services2[1]);
  const services = [
      { name: 'Diagnostic Tests', code: '1' },
      { name: 'Blood Tests', code: '2' }

  ];

  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };
  const ourDoctor = {
    slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
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
                    slidesToShow: 3,
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
  const ourClient = {
    slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
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




  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className="main-wrapper home-twelve home-thirteen">
      <Home8Header />
      {/* Home Banner */}
      <section
        className="banner-section-thirteen common-padding aos"
        data-aos="fade-down"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content aos" data-aos="fade-up">
                <span className="care-item">
                  We specialize in Paediatric Care
                </span>
                <h1>A Safe Care for your children’s health</h1>
                <p>
                  Supporting you to keep your child healthy with easy access to
                  high-quality paediatric care.
                </p>
                <div className="banner-btns-fourteen ">
                  <Link to="/patient/search-doctor1" className="btn btn-primary ">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="banner-center-img d-flex justify-content-center">
                <ImageWithBasePath
                  src="assets/img/bg/home-13-banner-img.png"
                  alt="Banner Image"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="search-box-one search-box-thirteen aos"
                data-aos="fade-up"
              >
                <div className="search-title">
                  <h5>Fix Appointment</h5>
                </div>
                <form action="/patient/search-doctor2" className="search-lines">
                  <div className="search-input search-line-thirteen">
                    <i className="feather icon-user" />
                    <Dropdown showOnFocus={false} variant="filled" value={selectedServices} onChange={(e) => setSelectedServices(e.value)} options={services} optionLabel="name" 
                    placeholder="Choose a Services" className="select w-100" />
                   
                  </div>
                  <div className="search-input search-calendar-line-thirteen">
                    <i className="feather icon-calendar" />
                    <div className="mb-0">
                    <Calendar variant="filled" placeholder="Date" value={date} onChange={(e) => setDate(e.value)} />
                    </div>
                  </div>
                  <div className="search-input search-map-line-thirteen">
                    <i className="feather icon-map-pin" />
                    <div className="mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                      />
                      <Link
                        className="current-loc-icon current_location"
                        to="#"
                      ></Link>
                    </div>
                  </div>
                  <div className="search-input search-users-line-thirteen">
                    <i className="feather icon-users" />
                    <Dropdown showOnFocus={false} variant="filled" value={selectedServices2} onChange={(e) => setSelectedServices2(e.value)} options={services2} optionLabel="name" 
                    placeholder="Choose a Services" className="select w-100" />
                  </div>
                  <div className="form-search-btn">
                    <button className="btn" type="submit">
                      See Availability
                      <i className="feather icon-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-section-thirteen-bg">
          <div className="banner-section-thirteen-bg-one">
            <ImageWithBasePath src="assets/img/bg/pluse-1.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-two">
            <ImageWithBasePath src="assets/img/bg/pluse-2.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-three">
            <ImageWithBasePath src="assets/img/bg/pluse-4.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-four">
            <ImageWithBasePath src="assets/img/bg/pluse-3.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-five">
            <ImageWithBasePath src="assets/img/bg/pluse-3.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-six">
            <ImageWithBasePath src="assets/img/bg/pulse-6.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-seven">
            <ImageWithBasePath src="assets/img/bg/gold-star.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-eight">
            <ImageWithBasePath src="assets/img/bg/pink-star.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-nine">
            <ImageWithBasePath src="assets/img/bg/pluse-3.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-ten">
            <ImageWithBasePath src="assets/img/bg/pluse-3.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-eleven">
            <ImageWithBasePath src="assets/img/bg/atom-bond.png" alt="Pluse" />
          </div>
          <div className="banner-section-thirteen-bg-thirteen">
            <ImageWithBasePath src="assets/img/bg/pluse-white.png" alt="Pluse" />
          </div>
          <div
            className="banner-section-thirteen-bg-fifteen aos"
            data-aos="fade-left"
          >
            <ImageWithBasePath src="assets/img/bg/cloud-1.png" alt="Cloud" />
          </div>
          <div className="banner-section-thirteen-bg-seventeen">
            <Link to="#">Trained Paediatric Doctors</Link>
          </div>
          <div className="banner-section-thirteen-bg-eighteen">
            <Link to="#">New Born Care</Link>
          </div>
          <div className="banner-section-thirteen-bg-ninteen">
            <Link to="#">Child Care Treatments</Link>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* services Section */}
      <section className="services-section-thirteen common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <ImageWithBasePath src="assets/img/clinic/service-1.jpg" alt="Service" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>Prenatal/New-born</h5>
                    <p>Comprehensive care &amp; expert guidance from Day one</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <ImageWithBasePath src="assets/img/clinic/service-2.jpg" alt="Service" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>New-born examinate</h5>
                    <p>
                      Your baby's health is prioritized from the very beginning
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <ImageWithBasePath src="assets/img/clinic/service-3.jpg" alt="Service" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>Vaccinations </h5>
                    <p>
                      Ensuring a healthy start, our services prioritize
                      vaccinations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <ImageWithBasePath src="assets/img/clinic/service-4.jpg" alt="Service" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>Blood tests</h5>
                    <p>Offering precise blood tests tailored for children</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <ImageWithBasePath src="assets/img/clinic/service-5.jpg" alt="Service" />
                  </div>
                  <div className="service-inner-contents">
                    <h5>diagnostic tests</h5>
                    <p>Services include state-of-the-art diagnostic tests</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="service-thirteen-main">
                <div className="service-thirteen-all">
                  <div className="service-img-thirteen">
                    <ImageWithBasePath
                      src="assets/img/features/feature-01.jpg"
                      alt="Service"
                    />
                  </div>
                  <div className="service-inner-contents">
                    <h5>Home visits</h5>
                    <p>
                      Through home visits, your child receives personalized
                      attention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /services Section */}
      {/* Our Doctors */}
      <div className="our-doctor-thirteen common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <h2>Our Doctors</h2>
              </div>
            </div>
          </div>
          <Slider
            className=" our-slider-thirteen slick-margins eye-dots custom-slide owl-theme aos"
            data-aos="fade-up"
            {...ourDoctor}
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
                      <i className="fas fa-map-marker-alt" />
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
                      <i className="fas fa-map-marker-alt" /> 0.9 min - East
                      Syracuse, NY
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
                      <i className="fas fa-map-marker-alt" />
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
                      <i className="fas fa-map-marker-alt" />
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
                      <i className="fas fa-map-marker-alt" />
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
          </Slider>
        </div>
        <div className="our-doctor-thirteen-one">
          <ImageWithBasePath src="assets/img/bg/pluse-1.png" alt="pluse" />
          <ImageWithBasePath src="assets/img/bg/pluse-2.png" alt="pluse" />
          <ImageWithBasePath src="assets/img/bg/pluse-2.png" alt="pluse" />
        </div>
      </div>
      {/* /Our Doctors */}
      {/* Why Choose Us */}
      <section className="choose-us-section-thirteen common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-us-inner-all aos" data-aos="fade-up">
                <div className="choose-us-thirteen-img">
                  <ImageWithBasePath
                    src="assets/img/bg/doctor-bg.jpg"
                    alt="Doctor"
                    className="img-fluid"
                  />
                  <div className="choose-us-thirteen-imgone">
                    <ImageWithBasePath src="assets/img/bg/atom-bond.png" alt="Doctor" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ul>
                <li className="aos" data-aos="fade-up">
                  <div className="choose-us-content-thirteen">
                    <div className="chooseus-contents">
                      <i className="feather icon-upload-cloud" />
                    </div>
                    <div className="chooseus-content-ryt">
                      <h5>Latest diagnostics and technology</h5>
                      <p>
                        We offering the latest in diagnostic technology,
                        ensuring cutting-edge and accurate healthcare solutions
                        for our patients.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="choose-us-content-thirteen">
                    <div className="chooseus-contents">
                      <i className="feather icon-underline" />
                    </div>
                    <div className="chooseus-content-ryt">
                      <h5>Full breadth of paediatric care</h5>
                      <p>
                        Comprehensive services prioritize the health,
                        development, and well-being of your child at every stage
                        of growth.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="choose-us-content-thirteen">
                    <div className="chooseus-contents">
                      <i className="feather icon-type" />
                    </div>
                    <div className="chooseus-content-ryt">
                      <h5>Immunisation clinic</h5>
                      <p>
                        Dedicated to providing a safe and effective environment
                        for vaccinations to safeguard your health and the
                        community.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="aos" data-aos="fade-up">
                  <div className="choose-us-content-thirteen">
                    <div className="chooseus-contents">
                      <i className="feather icon-message-square" />
                    </div>
                    <div className="chooseus-content-ryt">
                      <h5>Paediatric theatres on every ward</h5>
                      <p>
                        Pediatric theaters on every ward, equipped to provide
                        specialized and immediate medical attention for
                        children.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="choose-us-thirteen-bg">
            <ImageWithBasePath src="assets/img/bg/rainbow-2.png" alt="img" />
            <ImageWithBasePath src="assets/img/icons/choose-icon.svg" alt="img" />
          </div>
        </div>
      </section>
      {/* /Why Choose Us */}
      <section className="client-us-section-thirteen common-padding">
        <div className="client-us-section-thirteenone">
          <ImageWithBasePath src="assets/img/bg/cloud-2.png" alt="Cloud" />
          <ImageWithBasePath src="assets/img/bg/rainbow-2.png" alt="Rainbow" />
          <ImageWithBasePath src="assets/img/icons/rainbow-5.svg" alt="Rainbow" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <h2>What Our Client Says?</h2>
              </div>
            </div>
          </div>
          <Slider className="custom-slide slick-margins eye-dots client-says-thirteen owl-theme" {...ourClient}>
            <div className="client-says-all ">
              <div className="clients-says-content">
                <p>
                  "I would like to thank everyone at Doccure for the fantastic
                  way you looked after me. I could not fault anyone during the
                  time I spent with you - from the point I arrived in reception,
                  to the catering team and every member of staff throughout the
                  changes of shift during my stay."
                </p>
                <h4>Courtney Henry</h4>
                <p className="location-thirteen">
                  <i className="fa-solid fa-location-dot" /> New York, USA
                </p>
                <div className="client-says-imagesone">
                  <ImageWithBasePath src="assets/img/icons/rainbow-3.svg" alt="Rainbow" />
                </div>
              </div>
              <div className="client-says-images">
                <ImageWithBasePath src="assets/img/bg/clients-says.jpg" alt="img-fluid" />
              </div>
            </div>
            <div className="client-says-all">
              <div className="clients-says-content">
                <p>
                  "I would like to thank everyone at Doccure for the fantastic
                  way you looked after me. I could not fault anyone during the
                  time I spent with you - from the point I arrived in reception,
                  to the catering team and every member of staff throughout the
                  changes of shift during my stay."
                </p>
                <h4>Marrie Wells</h4>
                <p className="location-thirteen">
                  <i className="fa-solid fa-location-dot" /> New York, USA
                </p>
                <div className="client-says-imagesone">
                  <ImageWithBasePath src="assets/img/icons/rainbow-4.svg" alt="Rainbow" />
                </div>
              </div>
              <div className="client-says-images">
                <ImageWithBasePath src="assets/img/clients/re-image-7.jpg" alt="img-fluid" />
              </div>
            </div>
            <div className="client-says-all">
              <div className="clients-says-content">
                <p>
                  "I would like to thank everyone at Doccure for the fantastic
                  way you looked after me. I could not fault anyone during the
                  time I spent with you - from the point I arrived in reception,
                  to the catering team and every member of staff throughout the
                  changes of shift during my stay."
                </p>
                <h4>Andrew John</h4>
                <p className="location-thirteen">
                  <i className="fa-solid fa-location-dot" /> New York, USA
                </p>
                <div className="client-says-imagesone">
                  <ImageWithBasePath src="assets/img/icons/rainbow-4.svg" alt="Rainbow" />
                </div>
              </div>
              <div className="client-says-images">
                <ImageWithBasePath src="assets/img/clients/re-image-8.jpg" alt="img-fluid" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Latest Articles */}
      <section className="latest-articles-thirteen common-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 aos" data-aos="fade-up">
              <div className="section-header-thirteen">
                <h2>Our Latest Articles</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 d-flex aos" data-aos="fade-up">
              <div className="articles-thirteen flex-fill">
                <div className="articles-thirteen-img">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      src="assets/img/patients/articles-1.jpg"
                      alt="Articles"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="articles-thirteen-content">
                  <h6>Paediatrician</h6>
                  <h5>
                    <Link to="/blog/blog-details">
                      Our experts will take care of your child...
                    </Link>
                  </h5>
                  <p>
                    Our experts are dedicated to taking care of your child,....
                  </p>
                  <div className="article-footer">
                    <div className="post-author">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-thumb-01.jpg"
                          alt="Post Author"
                        />
                        <span>Dr. Pamila Certis</span>
                      </Link>
                    </div>
                    <ul>
                      <li>
                        <i className="feather icon-message-square" />
                        70
                      </li>
                      <li>
                        <i className="feather icon-eye" />
                        1.2k
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex aos" data-aos="fade-up">
              <div className="articles-thirteen flex-fill">
                <div className="articles-thirteen-img">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      src="assets/img/patients/articles-2.jpg"
                      alt="Articles"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="articles-thirteen-content">
                  <h6>Paediatrician</h6>
                  <h5>
                    <Link to="/blog/blog-details">
                      The first step of the toddler Beyond immunize
                    </Link>
                  </h5>
                  <p>
                    Nurturing the first steps of your toddler extends beyond...
                  </p>
                  <div className="article-footer">
                    <div className="post-author">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          alt="Post Author"
                        />
                        <span>Dr. Ronald Jacobs</span>
                      </Link>
                    </div>
                    <ul>
                      <li>
                        <i className="feather icon-message-square" />
                        70
                      </li>
                      <li>
                        <i className="feather icon-eye" />
                        1.2k
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex aos" data-aos="fade-up">
              <div className="articles-thirteen flex-fill">
                <div className="articles-thirteen-img">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      src="assets/img/patients/articles-3.jpg"
                      alt="Articles"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="articles-thirteen-content">
                  <h6>Paediatrician</h6>
                  <h5>
                    <Link to="/blog/blog-details">
                      Balanced Diet Chart for Children under age 10.
                    </Link>
                  </h5>
                  <p>
                    Discover a balanced diet chart for children, ensuring
                    optimal nutrition....
                  </p>
                  <div className="article-footer">
                    <div className="post-author">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-thumb-03.jpg"
                          alt="Post Author"
                        />
                        <span>Dr. Marie Wells</span>
                      </Link>
                    </div>
                    <ul>
                      <li>
                        <i className="feather icon-message-square" />
                        70
                      </li>
                      <li>
                        <i className="feather icon-eye" />
                        1.2k
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Articles */}
      {/* Feedback */}
      <section className="feedback-section-thirteen common-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="feedback-main-thirteen aos" data-aos="fade-up">
                <div className="feedback-all-img">
                  <ImageWithBasePath
                    src="assets/img/feedback-inner.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feedback-main-content aos" data-aos="fade-up">
                <h2>
                  Download <br />
                  The Doccure App Today!
                </h2>
                <p>
                  Rasakan kemudahan pembayaran melalui aplikasi SmartInPays.
                  Jalan-jalan, membayar tagihan, donasi di ujung jari Anda.{" "}
                </p>
                <div className="feedback-inner-img">
                  <div className="feedback-inner-imgone">
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/icons/google-play.svg" alt="Store" />
                    </Link>
                  </div>
                  <div className="feedback-inner-imgtwo">
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/icons/app-store.svg" alt="Store" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-bg-icons">
          <ImageWithBasePath src="assets/img/bg/pluse-1.png" alt="Pluse" />
          <ImageWithBasePath src="assets/img/bg/pluse-2.png" alt="Pluse" />
          <ImageWithBasePath src="assets/img/bg/pluse-2.png" alt="Pluse" />
        </div>
      </section>
      {/* Feedback */}
      <Home8Footer />
    </div>
    <ProgressButton />
    <Cursor/>
    </>
  );
};

export default Home8;
