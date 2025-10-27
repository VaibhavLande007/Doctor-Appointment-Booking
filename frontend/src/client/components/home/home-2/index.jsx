import React, { useEffect } from "react";
import Home2Header from "./header";
import Home2Footer from "./footer";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home2 = () => {
  const clinicSlider = {
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
    rows: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const doctorSlider = {
    dots: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const featureSlider = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    variableWidth: true,
    arrows: false,
    autoplay: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }]
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
      <Home2Header />
      {/* Home Banner */}
      <section className="section section-search">
        <div className="container-fluid">
          <div className="banner-wrapper">
            <div className="banner-header text-center aos" data-aos="fade-up">
              <h1>Search Doctor, Make an Appointment</h1>
              <p>
                Discover the best doctors, clinic &amp; hospital the city
                nearest to you.
              </p>
            </div>
            {/* Search */}
            <div className="search-box">
              <form action="/patient/search-doctor1">
                <div className="mb-3 search-location aos" data-aos="fade-up">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Location"
                  />
                  <span className="form-text">Based on your Location</span>
                </div>
                <div className="mb-3 search-info aos" data-aos="fade-up">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                  />
                  <span className="form-text">
                    Ex : Dental or Sugar Check up etc
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary search-btn mt-0 aos"
                  data-aos="fade-up"
                >
                  <i className="fas fa-search" /> <span>Search</span>
                </button>
              </form>
            </div>
            {/* /Search */}
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      <section className="section home-tile-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 m-auto">
              <div
                className="section-header text-center aos"
                data-aos="fade-up"
              >
                <h2>What are you looking for?</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-3 aos" data-aos="fade-up">
                  <div className="card text-center doctor-book-card">
                    <ImageWithBasePath
                      src="assets/img/doctors/doctor-07.jpg"
                      alt="doctor-image"
                      className="img-fluid"
                    />
                    <div className="doctor-book-card-content tile-card-content-1">
                      <div>
                        <h3 className="card-title mb-0">Visit a Doctor</h3>
                        <Link
                          to="/patient/search-doctor1"
                          className="btn book-btn1 px-3 py-2 mt-3"
                          tabIndex={0}
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 aos" data-aos="fade-up">
                  <div className="card text-center doctor-book-card">
                    <ImageWithBasePath
                      src="assets/img/img-pharmacy1.jpg"
                      alt="pharmacy image"
                      className="img-fluid"
                    />
                    <div className="doctor-book-card-content tile-card-content-1">
                      <div>
                        <h3 className="card-title mb-0">Find a Pharmacy</h3>
                        <Link
                          to="/Pharmacy/pharmacy-search"
                          className="btn book-btn1 px-3 py-2 mt-3"
                          tabIndex={0}
                        >
                          Find Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 aos" data-aos="fade-up">
                  <div className="card text-center doctor-book-card">
                    <ImageWithBasePath
                      src="assets/img/lab-image.jpg"
                      alt="lab-image"
                      className="img-fluid"
                    />
                    <div className="doctor-book-card-content tile-card-content-1">
                      <div>
                        <h3 className="card-title mb-0">Find a Lab</h3>
                        <Link
                          to="#"
                          className="btn book-btn1 px-3 py-2 mt-3"
                          tabIndex={0}
                        >
                          Coming Soon
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Clinic and Specialities */}
      <section className="section section-specialities">
        <div className="container-fluid">
          <div className="section-header text-center aos" data-aos="fade-up">
            <h2>Clinic and Specialities</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9 aos" data-aos="fade-up">
              {/* Slider */}
              <div className="specialities-slider slider">
                <Slider {...clinicSlider}>
                  {/* Slider Item */}
                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-01.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true" />
                      </span>
                    </div>
                    <p>Urology</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-02.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true" />
                      </span>
                    </div>
                    <p>Neurology</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-03.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true" />
                      </span>
                    </div>
                    <p>Orthopedic</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-04.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true" />
                      </span>
                    </div>
                    <p>Cardiologist</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-05.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true" />
                      </span>
                    </div>
                    <p>Dentist</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-01.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true" />
                      </span>
                    </div>
                    <p>Urology</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <ImageWithBasePath
                        src="assets/img/specialities/specialities-02.png"
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true" />
                      </span>
                    </div>
                    <p>Neurology</p>
                  </div>
                  {/* /Slider Item */}
                </Slider>
              </div>
              {/* /Slider */}
            </div>
          </div>
        </div>
      </section>
      {/* Clinic and Specialities */}
      {/* Popular Section */}
      <section className="section section-doctor">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 aos" data-aos="fade-up">
              <div className="section-header ">
                <h2>Book Our Doctor</h2>
                <p>Lorem Ipsum is simply dummy text </p>
              </div>
              <div className="about-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum.
                </p>
                <p>
                  web page editors now use Lorem Ipsum as their default model
                  text, and a search for 'lorem ipsum' will uncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years, sometimes
                </p>
                <Link to="#">Read More..</Link>
              </div>
            </div>
            <div className="col-lg-8 aos" data-aos="fade-up">
              <div className="doctor-slider slider arrow-custom">
                <Slider {...doctorSlider}>
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-01.jpg"
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Ruby Perrin</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MDS - Periodontology and Oral Implantology, BDS
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="d-inline-block average-rating">
                          (17)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Florida, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $300 - $1000
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-02.jpg"
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Darren Elder</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        BDS, MDS - Oral &amp; Maxillofacial Surgery
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (35)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Newyork, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $50 - $300
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-03.jpg"
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Deborah Angel</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - General Medicine, DNB - Cardiology
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (27)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Georgia, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $400
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-04.jpg"
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Sofia Brient</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MS - General Surgery, MCh - Urology
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (4)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Louisiana, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $150 - $250
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-05.jpg"
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Marvin Campbell</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Ophthalmology, DNB - Ophthalmology
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (66)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Michigan, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $50 - $700
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-06.jpg"
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Katharine Berthold</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (52)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Texas, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $500
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-07.jpg"
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Linda Tobin</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - General Medicine, DM - Neurology
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (43)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> Kansas, USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $1000
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Doctor Widget */}
                  {/* Doctor Widget */}
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="User Image"
                          src="assets/img/doctors/doctor-08.jpg"
                        />
                      </Link>
                      <Link to="#" className="fav-btn">
                        <i className="far fa-bookmark" />
                      </Link>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <Link to="/patient/doctor-profile">Paul Richard</Link>
                        <i className="fas fa-check-circle verified" />
                      </h3>
                      <p className="speciality">
                        MBBS, MD - Dermatology , Venereology &amp; Lepros
                      </p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                        <span className="d-inline-block average-rating">
                          (49)
                        </span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt" /> California,
                          USA
                        </li>
                        <li>
                          <i className="far fa-clock" /> Available on Fri, 22
                          Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt" /> $100 - $400
                          <i
                            className="fas fa-info-circle"
                            data-bs-toggle="tooltip"
                            title="Lorem Ipsum"
                          />
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn view-btn"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link to="/patient/booking1" className="btn book-btn">
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Doctor Widget */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Popular Section */}
      {/* Availabe Features */}
      <section className="section section-features">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 features-img aos" data-aos="fade-up">
              <ImageWithBasePath
                src="assets/img/features/feature.png"
                className="img-fluid"
                alt="Feature"
              />
            </div>
            <div className="col-md-7 aos" data-aos="fade-up">
              <div className="section-header">
                <h2 className="mt-2">Availabe Features in Our Clinic</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
              <div className="features-slider slider">
                <Slider {...featureSlider}>
                  {/* Slider Item */}
                  <div className="feature-item text-center">
                    <ImageWithBasePath
                      src="assets/img/features/feature-01.jpg"
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Patient Ward</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="feature-item text-center">
                    <ImageWithBasePath
                      src="assets/img/features/feature-02.jpg"
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Test Room</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="feature-item text-center">
                    <ImageWithBasePath
                      src="assets/img/features/feature-03.jpg"
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>ICU</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="feature-item text-center">
                    <ImageWithBasePath
                      src="assets/img/features/feature-04.jpg"
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Laboratory</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="feature-item text-center">
                    <ImageWithBasePath
                      src="assets/img/features/feature-05.jpg"
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Operation</p>
                  </div>
                  {/* /Slider Item */}
                  {/* Slider Item */}
                  <div className="feature-item text-center">
                    <ImageWithBasePath
                      src="assets/img/features/feature-06.jpg"
                      className="img-fluid"
                      alt="Feature"
                    />
                    <p>Medical</p>
                  </div>
                  {/* /Slider Item */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Availabe Features */}
      {/* Blog Section */}
      <section className="section section-blogs">
        <div className="container-fluid">
          {/* Section Header */}
          <div className="section-header text-center aos" data-aos="fade-up">
            <h2>Blogs and News</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* /Section Header */}
          <div className="row blog-grid-row">
            <div className="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
              {/* Blog Post */}
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/blog-01.jpg"
                      alt="Post Image"
                    />
                  </Link>
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
                          <span>Dr. Ruby Perrin</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-clock" /> 4 Dec 2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                      Doccure – Making your clinic painless visit?
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
              {/* Blog Post */}
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/blog-02.jpg"
                      alt="Post Image"
                    />
                  </Link>
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
                          <span>Dr. Darren Elder</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-clock" /> 3 Dec 2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                      What are the benefits of Online Doctor Booking?
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
              {/* Blog Post */}
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/blog-03.jpg"
                      alt="Post Image"
                    />
                  </Link>
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
                          <span>Dr. Deborah Angel</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-clock" /> 3 Dec 2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                      Benefits of consulting with an Online Doctor
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
            <div className="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">
              {/* Blog Post */}
              <div className="blog grid-blog">
                <div className="blog-image">
                  <Link to="/blog/blog-details">
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/blog-04.jpg"
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            src="assets/img/doctors/doctor-thumb-04.jpg"
                            alt="Post Author"
                          />
                          <span>Dr. Sofia Brient</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-clock" /> 2 Dec 2023
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <Link to="/blog/blog-details">
                      5 Great reasons to use an Online Doctor
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
          </div>
          <div className="view-all text-center aos" data-aos="fade-up">
            <Link to="/blog/blog-list" className="btn btn-primary">
              View All
            </Link>
          </div>
        </div>
      </section>
      {/* /Blog Section */}
      <Home2Footer />
    </div>
  );
};

export default Home2;
