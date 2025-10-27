import React from 'react'
import Header from "../../header";
import ImageWithBasePath from '../../../../core/img/imagewithbasebath';
import Footer from "../../footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DoctorProfileTwo = (props) => {


  const CustomNextArrow = ({ className, onClick }) => (
    <div className="nav nav-container slide-1 doctor-profile">
      <button type="button" role="presentation" className="owl-next" onClick={onClick}>
        <i className="fas fa-chevron-right" />
      </button>
    </div>

  );

  const CustomPrevArrow = ({ className, onClick }) => (
    <div className="nav nav-container slide-1 doctor-profile">
      <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
        <i className="fas fa-chevron-left" />
      </button>
    </div>
  );

  const insurence = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


  const availability = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const awards = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="main-wrapper">
        <Header {...props} />
        <>
          {/* Breadcrumb */}
          <div className="breadcrumb-bar">
            <div className="container">
              <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/home">
                          <i className="isax isax-home-15" />
                        </Link>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Patient
                      </li>
                      <li className="breadcrumb-item active">Doctor Profile 2</li>
                    </ol>
                    <h2 className="breadcrumb-title">Doctor Profile</h2>
                  </nav>
                </div>
              </div>
            </div>
            <div className="breadcrumb-bg">
              <ImageWithBasePath
                src="assets/img/bg/breadcrumb-bg-01.png"
                alt="img"
                className="breadcrumb-bg-01"
              />
              <ImageWithBasePath
                src="assets/img/bg/breadcrumb-bg-02.png"
                alt="img"
                className="breadcrumb-bg-02"
              />
              <ImageWithBasePath
                src="assets/img/bg/breadcrumb-icon.png"
                alt="img"
                className="breadcrumb-bg-03"
              />
              <ImageWithBasePath
                src="assets/img/bg/breadcrumb-icon.png"
                alt="img"
                className="breadcrumb-bg-04"
              />
            </div>
          </div>
          {/* /Breadcrumb */}
        </>

        <>
          {/* Page Content */}
          <div className="content">
            <div className="container">
              {/* Doctor Widget */}
              <div className="card doc-profile-card">
                <div className="card-body">
                  <div className="doctor-widget doctor-profile-two">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doc-profile-02.jpg"
                          className="img-fluid"
                          alt="User Image"
                        />
                      </div>
                      <div className="doc-info-cont">
                        <span className="badge doc-avail-badge">
                          <i className="fa-solid fa-circle" />
                          Available{" "}
                        </span>
                        <h4 className="doc-name">
                          Dr.Martin Adian{" "}
                          <ImageWithBasePath src="assets/img/icons/badge-check.svg" alt="Img" />
                          <span className="badge doctor-role-badge">
                            <i className="fa-solid fa-circle" />
                            Dentist
                          </span>
                        </h4>
                        <p>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                        <p>Speaks : English, French, German</p>
                        <p className="address-detail">
                          <span className="loc-icon">
                            <i className="feather-map-pin" />
                          </span>
                          No 14, 15th Cross, Old Trafford, UK{" "}
                          <span className="view-text">( View Location )</span>
                        </p>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      <ul className="doctors-activities">
                        <li>
                          <div className="hospital-info">
                            <span className="list-icon">
                              <ImageWithBasePath src="assets/img/icons/watch-icon.svg" alt="Img" />
                            </span>
                            <p>Full Time, Online Therapy Available</p>
                          </div>
                          <ul className="sub-links">
                            <li>
                              <a href="#">
                                <i className="feather-heart" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-share-2" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="feather-link" />
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="hospital-info">
                            <span className="list-icon">
                              <ImageWithBasePath src="assets/img/icons/thumb-icon.svg" alt="Img" />
                            </span>
                            <p>
                              <b>94% </b> Recommended
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="hospital-info">
                            <span className="list-icon">
                              <ImageWithBasePath src="assets/img/icons/building-icon.svg" alt="Img" />
                            </span>
                            <p>Royal Prince Alfred Hospital</p>
                          </div>
                          <h5 className="accept-text">
                            <span>
                              <i className="feather-check" />
                            </span>
                            Accepting New Patients
                          </h5>
                        </li>
                        <li>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>5.0</span>
                            <a href="#" className="d-inline-block average-rating">
                              150 Reviews
                            </a>
                          </div>
                          <ul className="contact-doctors">
                            <li>
                              <a href="/doctor/chat-doctor">
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/device-message2.svg"
                                    alt="Img"
                                  />
                                </span>
                                Chat
                              </a>
                            </li>
                            <li>
                              <a href="/pages/voice-call">
                                <span className="bg-violet">
                                  <i className="feather-phone-forwarded" />
                                </span>
                                Audio Call
                              </a>
                            </li>
                            <li>
                              <a href="/pages/video-call">
                                <span className="bg-indigo">
                                  <i className="fa-solid fa-video" />
                                </span>
                                Video Call
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doc-profile-card-bottom">
                    <ul>
                      <li>
                        <span className="bg-blue">
                          <ImageWithBasePath src="assets/img/icons/calendar3.svg" alt="Img" />
                        </span>
                        Nearly 200+ Appointment Booked
                      </li>
                      <li>
                        <span className="bg-dark-blue">
                          <ImageWithBasePath src="assets/img/icons/bullseye.svg" alt="Img" />
                        </span>
                        In Practice for 21 Years
                      </li>
                      <li>
                        <span className="bg-green">
                          <ImageWithBasePath src="assets/img/icons/bookmark-star.svg" alt="Img" />
                        </span>
                        15+ Awards
                      </li>
                    </ul>
                    <div className="bottom-book-btn">
                      <p>
                        <span>Price : $100 - $200 </span> for a Session
                      </p>
                      <div className="clinic-booking">
                        <a className="apt-btn" href="/patient/booking1">
                          Book Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Widget */}
              <div className="doctors-detailed-info">
                <ul className="information-title-list">
                  <li className="active">
                    <a href="#doc_bio">Doctor Bio</a>
                  </li>
                  <li>
                    <a href="#experience">Experience</a>
                  </li>
                  <li>
                    <a href="#insurence">Insurances</a>
                  </li>
                  <li>
                    <a href="#services">Treatments</a>
                  </li>
                  <li>
                    <a href="#speciality">Speciality</a>
                  </li>
                  <li>
                    <a href="#availability">Availability</a>
                  </li>
                  <li>
                    <a href="#clinic">Clinics</a>
                  </li>
                  <li>
                    <a href="#membership">Memberships</a>
                  </li>
                  <li>
                    <a href="#awards">Awards</a>
                  </li>
                  <li>
                    <a href="#bussiness_hour">Business Hours</a>
                  </li>
                  <li>
                    <a href="#review">Review</a>
                  </li>
                </ul>
                <div className="doc-information-main">
                  <div className="doc-information-details bio-detail" id="doc_bio">
                    <div className="detail-title">
                      <h4>Doctor Bio</h4>
                    </div>
                    <p>
                      “Highly motivated and experienced doctor with a passion for
                      providing excellent care to patients. Experienced in a wide
                      variety of medical settings, with particular expertise in
                      diagnostics, primary care and emergency medicine. Skilled in using
                      the latest technology to streamline patient care. Committed to
                      delivering compassionate, personalized care to each and every
                      patient.”
                    </p>
                    <a href="#" className="show-more d-flex align-items-center">
                      See More
                      <i className="fa-solid fa-chevron-down ms-2" />
                    </a>
                  </div>
                  <div className="doc-information-details" id="experience">
                    <div className="detail-title">
                      <h4>Practice Experience</h4>
                    </div>
                    <div className="experience-info">
                      <div className="experience-logo">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/experience-logo-01.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                      <div className="experience-content">
                        <h5>
                          Cambridge University Hospital, NHS Foundation Trust Cambridge
                        </h5>
                        <ul className="ent-list">
                          <li>ENT </li>
                          <li>Cambridge</li>
                        </ul>
                        <ul className="date-list">
                          <li>Dec 2020 - Jan 2022 </li>
                          <li>2 Years 2 months</li>
                        </ul>
                        <p>
                          Experienced in a wide variety of medical settings, with
                          particular expertise in diagnostics, primary care and
                          emergency medicine.
                        </p>
                      </div>
                    </div>
                    <div className="experience-info">
                      <div className="experience-logo">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/experience-logo-02.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                      <div className="experience-content mb-0">
                        <h5>Hill Medical Hospital, Newcastle</h5>
                        <ul className="ent-list">
                          <li>ENT </li>
                          <li>Cambridge</li>
                        </ul>
                        <ul className="date-list">
                          <li>Dec 2022 - Jan 2022 </li>
                          <li>1 Years 1 months</li>
                        </ul>
                        <p>
                          Experienced in a wide variety of medical settings, with
                          particular expertise in diagnostics, primary care and
                          emergency medicine.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="doc-information-details" id="insurence">
                    <div className="detail-title slider-nav d-flex justify-content-between align-items-center">
                      <h4>Insurance Accepted (6)</h4>
                      <div className="nav nav-container slide-1" />
                    </div>
                    <Slider {...insurence} className="insurence-logo-slider owl-carousel">
                      <div className="insurence-logo">
                        <span>
                          <ImageWithBasePath src="assets/img/icons/insurence-logo-01.svg" alt="Img" />
                        </span>
                      </div>
                      <div className="insurence-logo">
                        <span>
                          <ImageWithBasePath src="assets/img/icons/insurence-logo-02.svg" alt="Img" />
                        </span>
                      </div>
                      <div className="insurence-logo">
                        <span>
                          <ImageWithBasePath src="assets/img/icons/insurence-logo-03.svg" alt="Img" />
                        </span>
                      </div>
                      <div className="insurence-logo">
                        <span>
                          <ImageWithBasePath src="assets/img/icons/insurence-logo-04.svg" alt="Img" />
                        </span>
                      </div>
                      <div className="insurence-logo">
                        <span>
                          <ImageWithBasePath src="assets/img/icons/insurence-logo-05.svg" alt="Img" />
                        </span>
                      </div>
                      <div className="insurence-logo">
                        <span>
                          <ImageWithBasePath src="assets/img/icons/insurence-logo-06.svg" alt="Img" />
                        </span>
                      </div>
                      <div className="insurence-logo">
                        <span>
                          <ImageWithBasePath src="assets/img/icons/insurence-logo-03.svg" alt="Img" />
                        </span>
                      </div>
                      <div className="insurence-logo">
                        <span>
                          <ImageWithBasePath src="assets/img/icons/insurence-logo-04.svg" alt="Img" />
                        </span>
                      </div>
                    </Slider>
                  </div>
                  <div className="doc-information-details" id="speciality">
                    <div className="detail-title">
                      <h4>Speciality</h4>
                    </div>
                    <ul className="special-links">
                      <li>
                        <a href="#">Orthopedic Consultation</a>
                      </li>
                      <li>
                        <a href="#">Delivery Blocks</a>
                      </li>
                      <li>
                        <a href="#">Ultrasound Injection</a>
                      </li>
                      <li>
                        <a href="#">Tooth Bleaching</a>
                      </li>
                      <li>
                        <a href="#">Tooth Bleaching</a>
                      </li>
                      <li>
                        <a href="#">Cosmetic</a>
                      </li>
                    </ul>
                  </div>
                  <div className="doc-information-details" id="services">
                    <div className="detail-title">
                      <h4>Services &amp; Pricing</h4>
                    </div>
                    <ul className="special-links">
                      <li>
                        <a href="#">
                          Orthopedic Consultation <span>$52</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Delivery Blocks <span>$24</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Ultrasound Injection <span>$31</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Tooth Bleaching <span>$20</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Tooth Bleaching <span>$15</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Cosmetic <span>$10</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="doc-information-details" id="availability">
                    <div className="detail-title slider-nav d-flex justify-content-between align-items-center">
                      <h4>Availability</h4>
                      <div className="nav nav-container slide-2" />
                    </div>
                    <Slider {...availability} className="insurence-logo-slider availability-slots-slider owl-carousel">
                      <div className="availability-date">
                        <div className="book-date">
                          <h6>Wed Feb 2025</h6>
                          <span>01:00 - 02:00 PM</span>
                        </div>
                      </div>
                      <div className="availability-date">
                        <div className="book-date">
                          <h6>Wed Feb 2025</h6>
                          <span>01:00 - 02:00 PM</span>
                        </div>
                      </div>
                      <div className="availability-date">
                        <div className="book-date">
                          <h6>Wed Feb 2025</h6>
                          <span>01:00 - 02:00 PM</span>
                        </div>
                      </div>
                      <div className="availability-date">
                        <div className="book-date">
                          <h6>Wed Feb 2025</h6>
                          <span>01:00 - 02:00 PM</span>
                        </div>
                      </div>
                      <div className="availability-date">
                        <div className="book-date">
                          <h6>Wed Feb 2025</h6>
                          <span>01:00 - 02:00 PM</span>
                        </div>
                      </div>
                      <div className="availability-date">
                        <div className="book-date">
                          <h6>Wed Feb 2025</h6>
                          <span>01:00 - 02:00 PM</span>
                        </div>
                      </div>
                      <div className="availability-date">
                        <div className="book-date">
                          <h6>Wed Feb 2025</h6>
                          <span>01:00 - 02:00 PM</span>
                        </div>
                      </div>
                      <div className="availability-date">
                        <div className="book-date">
                          <h6>Wed Feb 2025</h6>
                          <span>01:00 - 02:00 PM</span>
                        </div>
                      </div>
                    </Slider>
                  </div>
                  <div className="doc-information-details" id="clinic">
                    <div className="detail-title">
                      <h4>Clinics &amp; Locations</h4>
                    </div>
                    <div className="clinic-loc">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="clinic-info">
                            <div className="clinic-img">
                              <ImageWithBasePath src="assets/img/clinic/clinic-11.jpg" alt="Img" />
                            </div>
                            <div className="detail-clinic">
                              <h5>Sofi’s Clinic - </h5>
                              <span>$350 / Apponitment</span>
                              <p>2286 Sundown Lane, Old Trafford 24541, UK</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center avail-time-slot">
                            <div className="availability-date">
                              <div className="book-date">
                                <h6>Monday</h6>
                                <span>07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="availability-date">
                              <div className="book-date">
                                <h6>Tuesday</h6>
                                <span>07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="contact-map d-flex">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d-76.13077892422932!3d36.82498697224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae976cfe9f8af%3A0xa61eac05156fbdb9!2sBeachStreet%20USA!5e0!3m2!1sen!2sin!4v1669777904208!5m2!1sen!2sin"
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clinic-loc mb-0">
                      <div className="row align-items-center">
                        <div className="col-lg-7">
                          <div className="clinic-info">
                            <div className="clinic-img">
                              <ImageWithBasePath src="assets/img/clinic/clinic-12.jpg" alt="Img" />
                            </div>
                            <div className="detail-clinic">
                              <h5>The Family Dentistry Clinic </h5>
                              <span>$550 / Apponitment</span>
                              <p>MDS - Periodontology and Oral Implantology, BDS</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center avail-time-slot">
                            <div className="availability-date">
                              <div className="book-date">
                                <h6>Friday</h6>
                                <span>07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                            <div className="availability-date">
                              <div className="book-date">
                                <h6>Saturday</h6>
                                <span>07:00 AM - 09:00 PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="contact-map d-flex">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d-76.13077892422932!3d36.82498697224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae976cfe9f8af%3A0xa61eac05156fbdb9!2sBeachStreet%20USA!5e0!3m2!1sen!2sin!4v1669777904208!5m2!1sen!2sin"
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="doc-information-details" id="membership">
                    <div className="detail-title">
                      <h4>Membership</h4>
                    </div>
                    <div className="member-ship-info">
                      <span className="mem-check">
                        <i className="fa-solid fa-check" />
                      </span>
                      <p>
                        Affiliate members include related allied health professionals-
                        evidence based (Dietitians, Physiotherapist, Occupational
                        therapist and Clinical Psychologist) who will team up with
                        allopathic physicians to support the Lifestyle Medicine movement
                        in India through ISLM.
                      </p>
                    </div>
                    <div className="member-ship-info mb-0">
                      <span className="mem-check">
                        <i className="fa-solid fa-check" />
                      </span>
                      <p>
                        Physician members include the allopathic doctors only (MBBS, MD,
                        MS, DM, MCH, DNB or equivalent degree) who hold a valid medical
                        license as recognized by the Medical Council of India.
                      </p>
                    </div>
                  </div>
                  <div className="doc-information-details" id="awards">
                    <div className="detail-title slider-nav d-flex justify-content-between align-items-center">
                      <h4>Awards</h4>
                      <div className="nav nav-container slide-3" />
                    </div>
                    <Slider {...awards} className="insurence-logo-slider awards-slider owl-carousel">
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath src="assets/img/icons/bookmark-star.svg" alt="Img" />
                          </span>
                          <h5>Award Name (2021)</h5>
                          <p>
                            evidence based (Dietitians, Physiotherapist, Occupational
                            therapist and Clinical)
                          </p>
                        </div>
                      </div>
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath src="assets/img/icons/bookmark-star.svg" alt="Img" />
                          </span>
                          <h5>Award Name (2022)</h5>
                          <p>
                            evidence based (Dietitians, Physiotherapist, Occupational
                            therapist and Clinical)
                          </p>
                        </div>
                      </div>
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath src="assets/img/icons/bookmark-star.svg" alt="Img" />
                          </span>
                          <h5>Award Name (2023)</h5>
                          <p>
                            evidence based (Dietitians, Physiotherapist, Occupational
                            therapist and Clinical)
                          </p>
                        </div>
                      </div>
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath src="assets/img/icons/bookmark-star.svg" alt="Img" />
                          </span>
                          <h5>Award Name (2025)</h5>
                          <p>
                            evidence based (Dietitians, Physiotherapist, Occupational
                            therapist and Clinical)
                          </p>
                        </div>
                      </div>
                      <div className="award-card">
                        <div className="award-card-info">
                          <span>
                            <ImageWithBasePath src="assets/img/icons/bookmark-star.svg" alt="Img" />
                          </span>
                          <h5>Award Name (2020)</h5>
                          <p>
                            evidence based (Dietitians, Physiotherapist, Occupational
                            therapist and Clinical)
                          </p>
                        </div>
                      </div>
                    </Slider>
                  </div>
                  <div className="doc-information-details" id="bussiness_hour">
                    <div className="detail-title">
                      <h4>Business Hours</h4>
                    </div>
                    <div className="hours-business">
                      <ul>
                        <li>
                          <div className="today-hours">
                            <h6>Today</h6>
                            <span>5 Feb 2025</span>
                          </div>
                          <div className="availed">
                            <span className="badge doc-avail-badge">
                              <i className="fa-solid fa-circle" />
                              Available{" "}
                            </span>
                            <p>07:00 AM - 09:00 PM</p>
                          </div>
                        </li>
                        <li>
                          <h6>Monday</h6>
                          <p>07:00 AM - 09:00 PM</p>
                        </li>
                        <li>
                          <h6>Tuesday</h6>
                          <p>07:00 AM - 09:00 PM</p>
                        </li>
                        <li>
                          <h6>Wednesday</h6>
                          <p>07:00 AM - 09:00 PM</p>
                        </li>
                        <li>
                          <h6>Thursday</h6>
                          <p>07:00 AM - 09:00 PM</p>
                        </li>
                        <li>
                          <h6>Friday</h6>
                          <p>07:00 AM - 09:00 PM</p>
                        </li>
                        <li>
                          <h6>Saturday</h6>
                          <p>07:00 AM - 09:00 PM</p>
                        </li>
                        <li>
                          <h6>Sunday</h6>
                          <p>07:00 AM - 09:00 PM</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="doc-information-details" id="review">
                    <div className="detail-title">
                      <h4>Reviews (200)</h4>
                    </div>
                    <div className="doc-review-card">
                      <div className="user-info-review">
                        <div className="reviewer-img">
                          <a href="#" className="avatar-img">
                            <ImageWithBasePath src="assets/img/clients/client-13.jpg" alt="Img" />
                          </a>
                          <div className="review-star">
                            <a href="#">kadajsalamander</a>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span>5.0 | 2 days ago</span>
                            </div>
                          </div>
                        </div>
                        <span className="thumb-icon">
                          <i className="fa-regular fa-thumbs-up" />
                          Yes,Recommend for Appointment
                        </span>
                      </div>
                      <p>
                        Thank you for this informative article! I've had a couple of
                        hit-and-miss experiences with freelancers in the past, and I
                        realize now that I wasn't vetting them properly. Your checklist
                        for choosing the right freelancer is going to be my go-to from
                        now on
                      </p>
                      <a href="#" className="reply d-flex align-items-center">
                        <i className="fa-solid fa-reply me-2" />
                        Reply
                      </a>
                    </div>
                    <div className="doc-review-card">
                      <div className="user-info-review">
                        <div className="reviewer-img">
                          <a href="#" className="avatar-img">
                            <ImageWithBasePath src="assets/img/clients/client-14.jpg" alt="Img" />
                          </a>
                          <div className="review-star">
                            <a href="#">Dane jose</a>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span>5.0 | 1 Months ago</span>
                            </div>
                          </div>
                        </div>
                        <span className="thumb-icon">
                          <i className="fa-regular fa-thumbs-up" />
                          Yes,Recommend for Appointment
                        </span>
                      </div>
                      <p>
                        As a freelancer myself, I find this article spot on! It's
                        important for clients to understand what to look for in a
                        freelancer and how to foster a good working relationship. The
                        point about mutual respect and clear communication is key in my
                        experience. Well done
                      </p>
                      <a href="#" className="reply d-flex align-items-center">
                        <i className="fa-solid fa-reply me-2" />
                        Reply
                      </a>
                    </div>
                    <div className="doc-review-card mb-0">
                      <div className="user-info-review">
                        <div className="reviewer-img">
                          <a href="#" className="avatar-img">
                            <ImageWithBasePath src="assets/img/clients/client-15.jpg" alt="Img" />
                          </a>
                          <div className="review-star">
                            <a href="#">Dane jose</a>
                            <div className="rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span>5.0 | 15 days ago</span>
                            </div>
                          </div>
                        </div>
                        <span className="thumb-icon">
                          <i className="fa-regular fa-thumbs-up" />
                          Yes,Recommend for Appointment
                        </span>
                      </div>
                      <p>
                        Great article! I've bookmarked it for future reference. I'd love
                        to read more about managing long-term relationships with
                        freelancers, if you have any tips on that.
                      </p>
                      <a href="#" className="reply d-flex align-items-center">
                        <i className="fa-solid fa-reply me-2" />
                        Reply
                      </a>
                      <div className="replied-info">
                        <div className="user-info-review">
                          <div className="reviewer-img">
                            <a href="#" className="avatar-img">
                              <ImageWithBasePath src="assets/img/clients/client-16.jpg" alt="Img" />
                            </a>
                            <div className="review-star">
                              <a href="#">Robert Hollenbeck</a>
                            </div>
                          </div>
                        </div>
                        <p>
                          Thank you for your comment and I will try to make a another
                          post on that topic.
                        </p>
                        <a href="#" className="reply d-flex align-items-center">
                          <i className="fa-solid fa-reply me-2" />
                          Reply
                        </a>
                      </div>
                      {/* Pagination */}
                      <div className="pagination dashboard-pagination">
                        <ul>
                          <li>
                            <a href="#" className="page-link prev-link">
                              <i className="fa-solid fa-chevron-left me-2" />
                              Prev
                            </a>
                          </li>
                          <li>
                            <a href="#" className="page-link active">
                              1
                            </a>
                          </li>
                          <li>
                            <a href="#" className="page-link">
                              2
                            </a>
                          </li>
                          <li>
                            <a href="#" className="page-link">
                              3
                            </a>
                          </li>
                          <li>
                            <a href="#" className="page-link">
                              4
                            </a>
                          </li>
                          <li>
                            <a href="#" className="page-link">
                              5
                            </a>
                          </li>
                          <li>
                            <a href="#" className="page-link">
                              6
                            </a>
                          </li>
                          <li>
                            <a href="#" className="page-link next-link">
                              Next
                              <i className="fa-solid fa-chevron-right ms-2" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* /Pagination */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>

        <Footer {...props} />

      </div>
    </>
  )
}

export default DoctorProfileTwo