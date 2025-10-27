import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Header from "../../header";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { DatePicker } from "antd";
import Slider from "react-slick";


const locations = [
  {
    id: 1,
    doc_name: "Dr. Michael Brown",
    speciality: "Psychologist",
    address: "Minneapolis, MN",
    lat: 53.470692,
    lng: -2.220328,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "17",
    image: "assets/img/doctor-grid/doctor-grid-01.jpg",
  },
  {
    id: 2,
    doc_name: "Dr. Darren Elder",
    speciality: "Psychologist",
    address: "New York, USA",
    lat: 53.469189,
    lng: -2.199262,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "35",
    image: "assets/img/doctors/doctor-02.jpg",
  },
  {
    id: 3,
    doc_name: "Dr. Deborah Angel",
    speciality: "Psychologist",
    address: "Georgia, USA",
    lat: 53.468665,
    lng: -2.189269,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "27",
    image: "assets/img/doctors/doctor-03.jpg",
  },
  {
    id: 4,
    doc_name: "Dr. Sofia Brient",
    speciality: "Psychologist",
    address: "Louisiana, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "4",
    image: "assets/img/doctors/doctor-04.jpg",
  },
  {
    id: 5,
    doc_name: "Dr. Marvin Campbell",
    speciality: "Psychologist",
    address: "Michigan, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "66",
    image: "assets/img/doctors/doctor-05.jpg",
  },
  {
    id: 6,
    doc_name: "Dr. Katharine Berthold",
    speciality: "Psychologist",
    address: "Texas, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "52",
    image: "assets/img/doctors/doctor-06.jpg",
  },
  {
    id: 7,
    doc_name: "Dr. Linda Tobin",
    speciality: "Psychologist",
    address: "Kansas, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "43",
    image: "assets/img/doctors/doctor-07.jpg",
  },
  {
    id: 8,
    doc_name: "Dr. Paul Richard",
    speciality: "Psychologist",
    address: "California, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "49",
    image: "assets/img/doctors/doctor-08.jpg",
  },
  {
    id: 9,
    doc_name: "Dr. John Gibbs",
    speciality: "Psychologist",
    address: "Oklahoma, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "49",
    image: "assets/img/doctors/doctor-09.jpg",
  },
  {
    id: 10,
    doc_name: "Dr. Olga Barlow",
    speciality: "Psychologist",
    address: "Montana, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "65",
    image: "assets/img/doctors/doctor-10.jpg",
  },
  {
    id: 11,
    doc_name: "Dr. Julia Washington",
    speciality: "Psychologist",
    address: "Oklahoma, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "5",
    image: "assets/img/doctors/doctor-11.jpg",
  },
  {
    id: 12,
    doc_name: "Dr. Shaun Aponte",
    speciality: "Psychologist",
    address: "Indiana, USA",
    lat: 53.463894,
    lng: -2.17788,
    icons: "default",
    profile_link: "/patient/doctor-profile",
    total_review: "5",
    image: "assets/img/doctors/doctor-12.jpg",
  },
];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 53.470692,
  lng: -2.220328,
};



const DoctorListAvailability = (props) => {
  useEffect(() => {
    document.body.classList.add("map-page");

    return () => document.body.classList.remove("map-page");
  }, []);



  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD6adZVdzTvBpE2yBRK8cDfsss8QXChK0I", // Replace with your API key
  });


  const [selectedMarker, setSelectedMarker] = useState(locations[0]);

  if (!isLoaded) return <div>Loading Map...</div>;
  const specialities = [
    { value: 'Specialities', label: 'Specialities' },
    { value: 'Urology', label: 'Urology' },
    { value: 'Psychiatry', label: 'Psychiatry' },
    { value: 'Psychiatry', label: 'Psychiatry' },
    { value: 'Cardiology', label: 'Cardiology' },
  ];
  const reviews = [
    { value: 'Reviews', label: 'Reviews' },
    { value: '5 Star', label: '5 Star' },
    { value: '4 Star', label: '4 Star' },
    { value: '3 Star', label: '3 Star' },
  ];
  const clinic = [
    { value: 'Bright Smiles Dental Clinic', label: 'Bright Smiles Dental Clinic' },
    { value: 'Family Care Clinic', label: 'Family Care Clinic' },
    { value: 'Express Health Clinic', label: 'Express Health Clinic' },
  ];

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    variableWidth: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar overflow-visible">
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
                  <li className="breadcrumb-item">Doctor</li>
                  <li className="breadcrumb-item active">Doctor List</li>
                </ol>
                <h2 className="breadcrumb-title">Doctor List</h2>
              </nav>
            </div>
          </div>
          <div className="bg-primary-gradient rounded-pill doctors-search-box">
            <div className="search-box-one rounded-pill">
              <form action="/patient/search-doctor2">
                <div className="search-input search-line">
                  <i className="isax isax-hospital5 bficon" />
                  <div className=" mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for Doctors, Hospitals, Clinics"
                    />
                  </div>
                </div>
                <div className="search-input search-map-line">
                  <i className="isax isax-location5" />
                  <div className=" mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="search-input search-calendar-line">
                  <i className="isax isax-calendar-tick5" />
                  <div className=" mb-0">
                    <DatePicker
                      className="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
                <div className="form-search-btn">
                  <button
                    className="btn btn-primary d-inline-flex align-items-center rounded-pill"
                    type="submit"
                  >
                    <i className="isax isax-search-normal-15 me-2" />
                    Search
                  </button>
                </div>
              </form>
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

      <div className="content mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="mb-4">
                <h3>
                  Showing <span className="text-secondary">450</span> Doctors For You
                </h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-end mb-4">
                <div className="dropdown header-dropdown me-2">
                  <Link
                    className="dropdown-toggle sort-dropdown"
                    data-bs-toggle="dropdown"
                    to="#"
                    aria-expanded="false"
                  >
                    <span>Sort By</span>Price (Low to High)
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#" className="dropdown-item">
                      Price (Low to High)
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Price (High to Low)
                    </Link>
                  </div>
                </div>
                <Link to="/patient/doctor-grid" className="btn btn-sm head-icon me-2">
                  <i className="isax isax-grid-7" />
                </Link>
                <Link to="/patient/search-doctor2" className="btn btn-sm head-icon me-2">
                  <i className="isax isax-row-vertical" />
                </Link>
                <Link to="/patient/doctor-list" className="btn btn-sm head-icon active">
                  <i className="isax isax-location" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-9">
              <div className="row align-items-center mb-4 map-select">
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-sm-4 col-6">
                      <div className="mb-4">
                        <Select
                          className="select"
                          options={specialities}
                          placeholder="Select"
                          isClearable={true}
                          isSearchable={true}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="mb-4">
                        <Select
                          className="select"
                          options={reviews}
                          placeholder="Select"
                          isClearable={true}
                          isSearchable={true}
                        />
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="mb-4">
                        <Select
                          className="select"
                          options={clinic}
                          placeholder="Select"
                          isClearable={true}
                          isSearchable={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="text-end mb-3">
                    <Link
                      to="#"
                      className="fw-medium text-secondary text-decoration-underline"
                    >
                      Clear All
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                <div className="doctor-filter-availability">
                  <p>Availability</p>
                  <div className="status-toggle status-tog">
                    <input type="checkbox" id="status_6" className="check" />
                    <label htmlFor="status_6" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <Link to="/patient/doctor-grid" className="btn btn-sm head-icon me-2">
                    <i className="isax isax-grid-7" />
                  </Link>
                  <Link to="/patient/doctor-list" className="btn btn-sm head-icon active">
                    <i className="isax isax-row-vertical" />
                  </Link>
                </div>
              </div>
              <div className="row">
                <>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-lg-5">
                            <div className="doctor-available-profile">
                              <div className="d-flex align-items-center mb-4">
                                <div className="position-relative">
                                  <span className="avail-img">
                                    <ImageWithBasePath
                                      src="assets/img/doctor-grid/doctor-grid-05.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span className="avail-check">
                                    <i className="isax isax-tick-circle5 text-success" />
                                  </span>
                                </div>
                                <div>
                                  <h6 className="mb-1">Dr. Charles Scott</h6>
                                  <span className="d-block fs-14 mb-3">MBBS, Neurologist</span>
                                  <span className="fs-14 d-block">2197 Haven Lane</span>
                                  <Link
                                    to="#"
                                    className="text-primary text-decoration-underline"
                                  >
                                    Get Direction
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <h6 className="fs-14 fw-normal mb-1">Speciality</h6>
                                <p className="mb-3">Orthopedic Consultation, Delivery Blocks</p>
                                <p className="mb-2">
                                  Consultation Fees :{" "}
                                  <span className="text-orange fw-semibold fs-18">$650</span>
                                </p>
                                <Link
                                  to="#"
                                  className="btn btn-md w-100 btn-dark d-inline-flex justify-content-center align-items-center rounded-pill"
                                >
                                  <i className="isax isax-chart-success me-2" />
                                  Book Online Consultation
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="booking-date-slider booking-wizard-slots">
                              <ul className="date-slider slick mb-4">
                                <Slider {...settings}>
                                  <li className="active">
                                    <h4>Mon</h4>
                                    <p>Jan 16</p>
                                  </li>
                                  <li>
                                    <h4>Tue</h4>
                                    <p>Jan 17</p>
                                  </li>
                                  <li>
                                    <h4>Wed</h4>
                                    <p>Jan 18</p>
                                  </li>
                                  <li>
                                    <h4>Thu</h4>
                                    <p>Jan 19</p>
                                  </li>
                                  <li>
                                    <h4>Fri</h4>
                                    <p>Jan 20</p>
                                  </li>
                                  <li>
                                    <h4>Sat</h4>
                                    <p>Jan 21</p>
                                  </li>
                                  <li>
                                    <h4>Sun</h4>
                                    <p>Jan 22</p>
                                  </li>
                                </Slider>
                              </ul>
                              <div className="token-slot mt-2 mb-2">
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                      defaultChecked=""
                                    />
                                    <span className="visit-rsn">09:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">-</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">-</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">09:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">-</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                                <div className="form-check-inline visits me-0">
                                  <label className="visit-btns">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      name="appintment"
                                    />
                                    <span className="visit-rsn">10:45</span>
                                  </label>
                                </div>
                              </div>
                              <div className="text-center">
                                <Link to="#" className="text-primary text-decoration-underline">
                                  View More Schedule
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-lg-5">
                            <div className="doctor-available-profile">
                              <div className="d-flex align-items-center mb-4">
                                <div className="position-relative">
                                  <span className="avail-img">
                                    <ImageWithBasePath
                                      src="assets/img/doctor-grid/doctor-grid-05.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span className="avail-check">
                                    <i className="isax isax-tick-circle5 text-success" />
                                  </span>
                                </div>
                                <div>
                                  <h6 className="mb-1">Dr. Charles Scott</h6>
                                  <span className="d-block fs-14 mb-3">MBBS, Neurologist</span>
                                  <span className="fs-14 d-block">2197 Haven Lane</span>
                                  <Link
                                    to="#"
                                    className="text-primary text-decoration-underline"
                                  >
                                    Get Direction
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <h6 className="fs-14 fw-normal mb-1">Speciality</h6>
                                <p className="mb-3">Orthopedic Consultation, Delivery Blocks</p>
                                <p className="mb-2">
                                  Consultation Fees :{" "}
                                  <span className="text-orange fw-semibold fs-18">$650</span>
                                </p>
                                <Link
                                  to="#"
                                  className="btn btn-md w-100 btn-dark d-inline-flex justify-content-center align-items-center rounded-pill"
                                >
                                  <i className="isax isax-chart-success me-2" />
                                  Book Online Consultation
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="booking-date-slider booking-wizard-slots">
                              <ul className="date-slider slick mb-4">
                                <Slider {...settings}>
                                  <li className="active">
                                    <h4>Mon</h4>
                                    <p>Jan 16</p>
                                  </li>
                                  <li>
                                    <h4>Tue</h4>
                                    <p>Jan 17</p>
                                  </li>
                                  <li>
                                    <h4>Wed</h4>
                                    <p>Jan 18</p>
                                  </li>
                                  <li>
                                    <h4>Thu</h4>
                                    <p>Jan 19</p>
                                  </li>
                                  <li>
                                    <h4>Fri</h4>
                                    <p>Jan 20</p>
                                  </li>
                                  <li>
                                    <h4>Sat</h4>
                                    <p>Jan 21</p>
                                  </li>
                                  <li>
                                    <h4>Sun</h4>
                                    <p>Jan 22</p>
                                  </li>
                                </Slider>

                              </ul>
                              <div className="text-center mb-5 mt-5">
                                <div className="card d-inline-block">
                                  <div className="card-body p-2">
                                    <h6 className="mb-1 fw-medium fs-14">Next available at</h6>
                                    <p className="mb-0 fs-14">10:00 AM - 15 Oct, Tue</p>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center">
                                <Link to="#" className="text-primary text-decoration-underline">
                                  View More Schedule
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-lg-5">
                            <div className="doctor-available-profile">
                              <div className="d-flex align-items-center mb-4">
                                <div className="position-relative">
                                  <span className="avail-img">
                                    <ImageWithBasePath
                                      src="assets/img/doctor-grid/doctor-grid-05.jpg"
                                      alt=""
                                    />
                                  </span>
                                  <span className="avail-check">
                                    <i className="isax isax-tick-circle5 text-success" />
                                  </span>
                                </div>
                                <div>
                                  <h6 className="mb-1">Dr. Charles Scott</h6>
                                  <span className="d-block fs-14 mb-3">MBBS, Neurologist</span>
                                  <span className="fs-14 d-block">2197 Haven Lane</span>
                                  <Link
                                    to="#"
                                    className="text-primary text-decoration-underline"
                                  >
                                    Get Direction
                                  </Link>
                                </div>
                              </div>
                              <div>
                                <h6 className="fs-14 fw-normal mb-1">Speciality</h6>
                                <p className="mb-3">Orthopedic Consultation, Delivery Blocks</p>
                                <p className="mb-2">
                                  Consultation Fees :{" "}
                                  <span className="text-orange fw-semibold fs-18">$650</span>
                                </p>
                                <Link
                                  to="#"
                                  className="btn btn-md w-100 btn-dark d-inline-flex justify-content-center align-items-center rounded-pill"
                                >
                                  <i className="isax isax-chart-success me-2" />
                                  Book Online Consultation
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="booking-date-slider booking-wizard-slots">
                              <div className="text-center">
                                <div className="card d-inline-block">
                                  <div className="card-body p-2">
                                    <p className="mb-0 fs-14">
                                      No Schedule for this Week, Contact Customer <br />
                                      Support or call +1 34565 65678
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="text-center mb-4">
                      <Link
                        to="/login"
                        className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                      >
                        <i className="isax isax-d-cube-scan5 me-2" />
                        Load More 425 Doctors
                      </Link>
                    </div>
                  </div>
                </>

              </div>
            </div>

            <div className="col-lg-3">
              <div id="map" className="map-listing h-100">
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={14}
                  options={{
                    scrollwheel: false,
                    mapTypeId: "roadmap",
                  }}
                >
                  {locations.map((location) => (
                    <Marker
                      key={location.id}
                      position={{ lat: location.lat, lng: location.lng }}
                      onClick={() => setSelectedMarker(location)}
                    />
                  ))}

                  {selectedMarker && (
                    <InfoWindow
                      position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                      onCloseClick={() => setSelectedMarker(null)}
                    >
                      <div>
                        <div
                          className="card border-0"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <div className="card-body">
                            <div className="doc-img d-flex align-items-center">
                              <Link
                                to={selectedMarker.profile_link}
                                className="avatar flex-shrink-0 me-2 avatar-xl avatar-rounded"
                                tabIndex={0}
                                target="_blank"
                              >
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Dr. John Gibbs"
                                  src={selectedMarker.image}
                                />
                              </Link>
                              <div>
                                <h6 className="title fs-16 mb-1">
                                  <Link to={selectedMarker.profile_link} tabIndex={0}>
                                    {selectedMarker.doc_name}
                                  </Link>
                                  <span className="badge bg-orange mt-1">
                                    <i className="fa-solid fa-star me-1" />
                                    {selectedMarker.total_review}
                                  </span>
                                </h6>
                                <p className="speciality text-indigo">{selectedMarker.speciality}</p>
                              </div>
                            </div>
                            <div className="pro-content">
                              <ul className="available-info">
                                <li>
                                  <i className="fas fa-map-marker-alt" /> {selectedMarker.address}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                    </InfoWindow>
                  )}
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorListAvailability;
