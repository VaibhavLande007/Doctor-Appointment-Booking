import React, { useEffect, useState , useRef} from "react";
import Home14Footer from "./footer";
import Home14Header from "./header";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Calendar } from 'primereact/calendar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from "react-countup";

const Home14 = () => {
  const [date, setDate] = useState(null);
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-nav slide-nav ">
        <button type="button" role="presentation" className="owl-next" onClick={onClick}>
            <i className="fa-solid fa-chevron-right" />
        </button>
    </div>
);



const CustomPrevArrow = ({ className, onClick }) => (
    <div className="owl-nav slide-nav">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fa-solid fa-chevron-left" />
        </button>
    </div>
);

  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };
  const ourPartner = {
    slidesToShow:6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
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
  const ourTreatment = {
    slidesToShow: 2,
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
                slidesToShow: 2,
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
  const ourExpert = {
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
  const ourCustomer = {
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
  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const { top, bottom } = componentRef.current.getBoundingClientRect();
        const isVisibleNow = top < window.innerHeight && bottom >= 0;
        if (isVisibleNow) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll); // Remove event listener once component is visible
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility when component mounts

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup event listener on component unmount
    };
  }, []);
  return (
    <div className="main-wrapper home-dentist">
      <Home14Header  />
      {/* Home Banner */}
      <section className="banner-section banner-sec-fourteen dentist-banner-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="banner-content aos" data-aos="fade-up">
                <div className="banner-head">
                  <h1>
                    We Care about Your <span> Dental Health</span>
                  </h1>
                  <p>
                    If you are in need of high-quality, professional and
                    friendly dental care, look no further than our clinic.
                  </p>
                </div>
                <div className="dentist-banner-btn">
                  <ul>
                    <li>
                      <Link to="#" className="btn btn-check">
                        <i className="fa fa-plus-circle me-2" />
                        Free Check-up
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn btn-primary">
                        <i className="fa fa-mobile me-2" />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="search-box-fourteen aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <form action="booking-2.html" className="form-block d-flex">
                    <div className="search-input">
                      <div className="forms-block">
                        <label className="mb-0">Date</label>
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
                        <label className="location-icon">Location</label>
                        <div
                          className="searchinputs dropdown-toggle"
                          id="dropdownMenuClickable"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="false"
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="San Diego Branch"
                          />
                        </div>
                        <div
                          className="dropdown-menu location-dropdown"
                          aria-labelledby="dropdownMenuClickable"
                        >
                          <ul className="location-auto-complete">
                            <li>
                              <Link to="#">
                                <span>
                                  <i className="fa-solid fa-hospital" />
                                </span>
                                CompassionCare Health Clinic
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>
                                  <i className="fa-solid fa-hospital" />
                                </span>
                                Caring Touch Wellness Center
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>
                                  <i className="fa-solid fa-hospital" />
                                </span>
                                Comfort Haven Clinic
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>
                                  <i className="fa-solid fa-hospital" />
                                </span>
                                Compassionate Caregivers Clinic
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>
                                  <i className="fa-solid fa-hospital" />
                                </span>
                                Core Health &amp; Wellness Center
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>
                                  <i className="fa-solid fa-hospital" />
                                </span>
                                Cityscape Medical Center
                              </Link>
                            </li>
                          </ul>
                        </div>
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
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Service Section */}
      <section className="why-us-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="clinic-partner-sec mt-0">
                <div
                  className="section-header text-center aos"
                  data-aos="fade-down"
                >
                  <h5>Our Clinics Partners</h5>
                </div>
                <div className="partners-info">
                  <ul >
                   <Slider className="owl-carousel partners-sliders slick-margins " {...ourPartner}>
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
                          src="assets/img/partners/partners-4.svg"
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
          <div className="section-header text-center aos" data-aos="fade-down">
            <h2>
              Why We Are <span>Different</span>
            </h2>
            <p>
              We are a private health care dedicated to providing quality dental
              care in cosmetic, restorative, and general dentistry.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="expert-wrap flex-fill aos" data-aos="fade-down">
                <div className="expert-img">
                  <ImageWithBasePath src="assets/img/service/dentist-01.jpg" alt="Img" />
                </div>
                <div className="expert-content">
                  <h4>Experienced dentists</h4>
                  <p>
                    The goal of our clinic is to provide friendly, caring
                    dentistry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="expert-wrap flex-fill aos" data-aos="fade-down">
                <div className="expert-img">
                  <ImageWithBasePath src="assets/img/service/dentist-02.jpg" alt="Img" />
                </div>
                <div className="expert-content">
                  <h4>Friendly atmosphere</h4>
                  <p>
                    The goal of our clinic is to provide friendly, caring
                    dentistry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="expert-wrap flex-fill aos" data-aos="fade-down">
                <div className="expert-img">
                  <ImageWithBasePath src="assets/img/service/dentist-03.jpg" alt="Img" />
                </div>
                <div className="expert-content">
                  <h4>Best latest technology</h4>
                  <p>
                    The goal of our clinic is to provide friendly, caring
                    dentistry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="expert-wrap flex-fill aos" data-aos="fade-down">
                <div className="expert-img">
                  <ImageWithBasePath src="assets/img/service/dentist-04.jpg" alt="Img" />
                </div>
                <div className="expert-content">
                  <h4>Affordable prices</h4>
                  <p>
                    The goal of our clinic is to provide friendly, caring
                    dentistry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
      {/* Treatments Section */}
      <section className="impression-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="impression-img aos" data-aos="fade-down">
                <div className="impress-img">
                  <ImageWithBasePath
                    src="assets/img/dentist-01.jpg"
                    className="img-fluid"
                    alt="Img"
                  />
                </div>
                <div className="impress-img2">
                  <ImageWithBasePath
                    src="assets/img/dentist-02.jpg"
                    className="img-fluid"
                    alt="Img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="impression-content aos" data-aos="fade-down">
                <div className="section-header">
                  <h2>
                    First Impressions Begin with <span>Smile</span>
                  </h2>
                  <p>
                    The goal of our clinic is to provide friendly, caring
                    dentistry and the highest level of general, cosmetic, and
                    specialist dental treatments. With dental practices
                    throughout the world, we are growing our clinic with just
                    one goal in mind – to offer affordable, high quality dental
                    care around the world.
                  </p>
                </div>
                <div className="impress-list">
                  <div className="impress-wrap">
                    <h6>Free Dental Checkup</h6>
                  </div>
                  <div className="impress-wrap">
                    <h6>Professional Doctors</h6>
                  </div>
                  <div className="impress-wrap">
                    <h6>Emergency Care on consultation</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="treatment-sec">
            <div className="row">
              <div className="col-md-8">
                <div className="section-header">
                  <h2>
                    What <span>Dental Treatments</span> Do We Offer?
                  </h2>
                </div>
              </div>
              <div className="col-md-4">
                <div className="owl-nav slide-nav slide-nav-02 text-end" />
              </div>
            </div>
            <div className="row">
              <div className="ol-md-12">
                <Slider {...ourTreatment} className="owl-carousel slick-margins slick-arrow-right home-14-slick-arrow treatment-slider">
                  <div className="treatment-item aos" data-aos="fade-down">
                    <div className="treatment-img">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-01.jpg"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="treatment-content">
                      <h4>
                        <Link to="#">Emergency Care</Link>
                      </h4>
                      <p>
                        Toothache can be caused by various problems. An
                        examination can help to determine it.
                      </p>
                      <Link to="#" className="btn btn-gray">
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div className="treatment-item aos" data-aos="fade-down">
                    <div className="treatment-img">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-02.jpg"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="treatment-content">
                      <h4>
                        <Link to="#">Restorative Dentistry</Link>
                      </h4>
                      <p>
                        We can restore your smile, as well as speaking &amp;
                        eating ability with advanced prosthetics.
                      </p>
                      <Link to="#" className="btn btn-gray">
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div className="treatment-item aos" data-aos="fade-down">
                    <div className="treatment-img">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-03.jpg"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="treatment-content">
                      <h4>
                        <Link to="#">Dental Cleanings</Link>
                      </h4>
                      <p>
                        Professional dental cleanings help remove plaque and
                        tartar buildup from your teeth and gums,{" "}
                      </p>
                      <Link to="#" className="btn btn-gray">
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div className="treatment-item aos" data-aos="fade-down">
                    <div className="treatment-img">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-04.jpg"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="treatment-content">
                      <h4>
                        <Link to="#">Dental Implants</Link>
                      </h4>
                      <p>
                        Dental implants are a permanent solution for replacing
                        missing teeth, providing a strong.{" "}
                      </p>
                      <Link to="#" className="btn btn-gray">
                        Learn more
                      </Link>
                    </div>
                  </div>
                  <div className="treatment-item aos" data-aos="fade-down">
                    <div className="treatment-img">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-05.jpg"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="treatment-content">
                      <h4>
                        <Link to="#">Traditional Braces</Link>
                      </h4>
                      <p>
                        We offer traditional metal braces to straighten
                        misaligned teeth and correct bite issues.
                      </p>
                      <Link to="#" className="btn btn-gray">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Treatments Section */}
      {/* Expert Section */}
      <section className="experts-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="section-header">
                <h2>
                  Our <span>Experts</span>
                </h2>
                <p>
                  We are a private health care dedicated to providing quality
                  dental care in cosmetic, restorative, and general dentistry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="owl-nav slide-nav slide-nav-01 text-end" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...ourExpert} className="expert-slider slick-margins slick-arrow-right home-14-slick-arrow owl-carousel">
                <div className="expert-profile aos" data-aos="fade-down">
                  <div className="expert-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/dentist-doctor-01.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="expert-info">
                    <h5>
                      <Link to="/patient/doctor-profile">Dr. Warner</Link>
                    </h5>
                    <p>Prosthodontist</p>
                  </div>
                </div>
                <div className="expert-profile" data-aos="fade-down">
                  <div className="expert-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/dentist-doctor-02.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="expert-info">
                    <h5>
                      <Link to="/patient/doctor-profile">Dr. Keith</Link>
                    </h5>
                    <p>Endodontist</p>
                  </div>
                </div>
                <div className="expert-profile" data-aos="fade-down">
                  <div className="expert-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/dentist-doctor-03.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="expert-info">
                    <h5>
                      <Link to="/patient/doctor-profile">Dr. Brandy</Link>
                    </h5>
                    <p>Complex Extractions</p>
                  </div>
                </div>
                <div className="expert-profile" data-aos="fade-down">
                  <div className="expert-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/dentist-doctor-04.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="expert-info">
                    <h5>
                      <Link to="/patient/doctor-profile">Dr. Dixon</Link>
                    </h5>
                    <p>Periodontist</p>
                  </div>
                </div>
                <div className="expert-profile" data-aos="fade-down">
                  <div className="expert-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/dentist-doctor-05.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="expert-info">
                    <h5>
                      <Link to="/patient/doctor-profile">Dr. Adiran</Link>
                    </h5>
                    <p>Endodontist</p>
                  </div>
                </div>
                <div className="expert-profile" data-aos="fade-down">
                  <div className="expert-img">
                    <Link to="/patient/doctor-profile">
                      <ImageWithBasePath
                        src="assets/img/doctors/dentist-doctor-06.jpg"
                        alt="Img"
                      />
                    </Link>
                  </div>
                  <div className="expert-info">
                    <h5>
                      <Link to="/patient/doctor-profile">Dr. Bruce evana</Link>
                    </h5>
                    <p>Prosthodontist</p>
                  </div>
                </div>
              </Slider>
              <div className="view-button text-center">
                <Link to="/patient/doctor-list" className="btn btn-viewall">
                  View All Doctors
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-sec" ref={componentRef}>
        {isVisible && 
          <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 aos" data-aos="fade-down">
              <div className="count-wrap">
                <h2>
                  <CountUp className="counter" start={1} end={300} />
                  <span className="count-icon">+</span>
                </h2>
                <p>Clinics</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 aos" data-aos="fade-down">
              <div className="count-wrap">
                <h2>
                <CountUp className="counter" start={1} end={22} />
                  <span className="count-icon">+</span>
                </h2>
                <p>Countries</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 aos" data-aos="fade-down">
              <div className="count-wrap">
                <h2>
                <CountUp className="counter" start={1} end={45} />
                  <span className="count-icon">+</span>
                </h2>
                <p>Years of Service</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 aos" data-aos="fade-down">
              <div className="count-wrap">
                <h2>
                <CountUp className="counter" start={1} end={105} />
                  <span className="count-icon">+</span>
                </h2>
                <p>Experienced Doctors</p>
              </div>
            </div>
          </div>
        </div>
      }
          
        </div>
      </section>
      {/* /Expert Section */}
      {/* Testimonial Section */}
      <section className="question-section dentist-home-testi">
        <div className="section-bg">
          <ImageWithBasePath
            src="assets/img/bg/testi-left-bg.png"
            className="testi-bg-left"
            alt="Img"
          />
          <ImageWithBasePath
            src="assets/img/bg/testi-right-bg.png"
            className="testi-bg-right"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-header text-center aos"
                data-aos="fade-down"
              >
                <h2>
                  What Our <span>Happy Customers</span> Says
                </h2>
              </div>
              <Slider {...ourCustomer} className="customer-slider slick-margins slick-arrow-right home-14-slick-arrow owl-carousel">
                <div className="customer-wrap">
                  <div className="customer-infos">
                    <ImageWithBasePath src="assets/img/clients/client-13.jpg" alt="Img" />
                    <h6>Rio Hasslee</h6>
                    <p>Newyork, USA</p>
                  </div>
                  <p>
                    They're patient, gentle, and great at explaining things in a
                    way that kids can understand. My children actually look
                    forward to their dental appointments now.
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="customer-wrap">
                  <div className="customer-infos">
                    <ImageWithBasePath src="assets/img/clients/client-11.jpg" alt="Img" />
                    <h6>Jenifer Robinson</h6>
                    <p>Texas, USA</p>
                  </div>
                  <p>
                    My journey towards parenthood became a seamless and informed
                    experience. The comprehensive resources, expert advice, and
                    supportive.
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="customer-wrap">
                  <div className="customer-infos">
                    <ImageWithBasePath src="assets/img/clients/client-14.jpg" alt="Img" />
                    <h6>Brandy</h6>
                    <p>illinios, USA</p>
                  </div>
                  <p>
                    The staff are always friendly and professional, and the
                    clinic is clean and modern. From routine cleanings to more
                    extensive procedures, the dentists.
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="customer-wrap">
                  <div className="customer-infos">
                    <ImageWithBasePath src="assets/img/clients/client-15.jpg" alt="Img" />
                    <h6>Dixon</h6>
                    <p>Texas, USA</p>
                  </div>
                  <p>
                    My journey towards parenthood became a seamless and informed
                    experience. The comprehensive resources, expert advice, and
                    supportive.
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </Slider>
              <div className="view-button text-center aos" data-aos="fade-down">
                <div className="owl-nav slide-nav customer-nav nav-control" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Testimonial Section */}
      {/* Blog Section */}
      <section className="question-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="section-header text-center aos"
                data-aos="fade-down"
              >
                <h2>
                  Frequently Asked <span>Questions</span>
                </h2>
                <p>
                  FAQs help provide important information to clients and address
                  common queries they may have about the veterinary clinic's
                  services, policies, and procedures.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="faq-imgs aos" data-aos="fade-down">
                <ImageWithBasePath
                  src="assets/img/faq-img-3.png"
                  className="img-fluid"
                  alt="Img"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="accordion faq-info" id="faq-details">
                {/* FAQ Item */}
                <div className="accordion-item aos" data-aos="fade-down">
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
                          Yes, simply visit our website and log in or create an
                          account. Search for a doctor based on specialization,
                          location, or availability &amp; confirm your booking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /FAQ Item */}
                {/* FAQ Item */}
                <div className="accordion-item aos" data-aos="fade-down">
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
                          booking your appointment, though availability may vary
                          based on their schedule.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /FAQ Item */}
                {/* FAQ Item */}
                <div className="accordion-item aos" data-aos="fade-down">
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
                          If you need to cancel or reschedule your appointment,
                          contact the doctor as soon as possible to inform them
                          and to reschedule for another available time slot.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /FAQ Item */}
                {/* FAQ Item */}
                <div className="accordion-item aos" data-aos="fade-down">
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
                <div className="accordion-item aos" data-aos="fade-down">
                  <h2 className="accordion-header" id="headingFive">
                    <Link
                      to="#"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can I book appointments for family members or dependents?
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
                          family members or dependents. However, you may need to
                          provide their personal information and consent to do
                          so.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /FAQ Item */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className=" dentist-blog aos" data-aos="fade-down">
                <div className="section-header text-center">
                  <h2>
                    Doccure <span>Recent Blogs</span>
                  </h2>
                  <p>
                    Checkout our Latest blogs by our Experts by Month on Month
                  </p>
                </div>
                <Slider {...ourBlog} className="dentist-slider slick-margins slick-arrow-right home-14-slick-arrow owl-carousel">
                  <div className="blog grid-blog aos" data-aos="fade-down">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <ImageWithBasePath
                          className="img-fluid"
                          src="assets/img/blog/dentist-blog-01.jpg"
                          alt="Post Image"
                        />
                      </Link>
                      <span className="day-badge">
                        <i className="feather icon-calendar" />
                        15 Feb 2025
                      </span>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/patient/doctor-profile">
                              <ImageWithBasePath
                                src="assets/img/doctors/doctor-thumb-01.jpg"
                                alt="Post Author"
                              />
                              <span>Dr. Pamila Certis</span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                          Must know best dog food Best teeth strength Food in
                          India
                        </Link>
                      </h3>
                      <p>
                        In the diverse landscape of India, teeth options have
                        variety of dietary needs..
                      </p>
                      <Link to="/blog/blog-details" className="view-link">
                        Continue Reading
                        <i className="fa-solid fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="blog grid-blog aos" data-aos="fade-down">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <ImageWithBasePath
                          className="img-fluid"
                          src="assets/img/blog/dentist-blog-02.jpg"
                          alt="Post Image"
                        />
                      </Link>
                      <span className="day-badge">
                        <i className="feather icon-calendar" />
                        18 Jan 2025
                      </span>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/patient/doctor-profile">
                              <ImageWithBasePath
                                src="assets/img/doctors/doctor-thumb-02.jpg"
                                alt="Post Author"
                              />
                              <span>Dr. Ronald Jacobs</span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                          How to Care for teeth in the Cavity
                        </Link>
                      </h3>
                      <p>
                        During winter, it's crucial to provide proper care for
                        teeth by ensuring they have a warm...
                      </p>
                      <Link to="/blog/blog-details" className="view-link">
                        Continue Reading
                        <i className="fa-solid fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="blog grid-blog aos" data-aos="fade-down">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <ImageWithBasePath
                          className="img-fluid"
                          src="assets/img/blog/dentist-blog-03.jpg"
                          alt="Post Image"
                        />
                      </Link>
                      <span className="day-badge">
                        <i className="feather icon-calendar" />
                        25 Jan 2025
                      </span>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/patient/doctor-profile">
                              <ImageWithBasePath
                                src="assets/img/doctors/doctor-thumb-03.jpg"
                                alt="Post Author"
                              />
                              <span>Dr. Marie Wells</span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                          Why do teeth aches while winter?
                        </Link>
                      </h3>
                      <p>
                        During winter, it's crucial to provide proper care for
                        rabbits by ensuring they have a warm...
                      </p>
                      <Link to="/blog/blog-details" className="view-link">
                        Continue Reading
                        <i className="fa-solid fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="blog grid-blog aos" data-aos="fade-down">
                    <div className="blog-image">
                      <Link to="/blog/blog-details">
                        <ImageWithBasePath
                          className="img-fluid"
                          src="assets/img/blog/dentist-blog-02.jpg"
                          alt="Post Image"
                        />
                      </Link>
                      <span className="day-badge">
                        <i className="feather icon-calendar" />
                        18 Feb 2025
                      </span>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <Link to="/patient/doctor-profile">
                              <ImageWithBasePath
                                src="assets/img/doctors/doctor-thumb-01.jpg"
                                alt="Post Author"
                              />
                              <span>Dr. Pamila Certis</span>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <h3 className="blog-title">
                        <Link to="/blog/blog-details">
                          Must know best dog food Best teeth strength Food in
                          India
                        </Link>
                      </h3>
                      <p>
                        In the diverse landscape of India, teeth options have
                        variety of dietary needs..
                      </p>
                      <Link to="/blog/blog-details" className="view-link">
                        Continue Reading
                        <i className="fa-solid fa-chevron-right" />
                      </Link>
                    </div>
                  </div>
                </Slider>
                <div
                  className="view-button text-center aos"
                  data-aos="fade-down"
                >
                  <div className="owl-nav slide-nav blog-nav nav-control" />
                </div>
              </div>
              <div className="visit-wrap aos aos-init aos-animate" data-aos="fade-down">
                <div className="visit-content">
                  <div className="row justify-content-center">
                    <div className="col-md-10">
                      <h2>Get 10% Off Your First Visit</h2>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-9">
                        <p>
                          With dental practices throughout the world, we are growing our
                          clinic with just one goal in mind – to offer affordable, high
                          quality dental care around the world.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to="/patient/booking1" className="btn btn-gray">
                    Book an Appointment
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* /Blog Section */}
      <Home14Footer />
    </div>
  );
};

export default Home14;
