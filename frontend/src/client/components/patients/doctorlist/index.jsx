import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Header from "../../header";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { DatePicker } from "antd";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
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


const DoctorList = (props) => {
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
              <form>
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
                <div className="col-lg-12">
                  <div className="card doctor-list-card">
                    <div className="d-md-flex align-items-center">
                      <div className="card-img card-img-hover">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-01.jpg" alt="" />
                        </Link>
                        <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                          <span className="badge bg-orange">
                            <i className="fa-solid fa-star me-1" />
                            4.8
                          </span>
                          <Link to="javascript:void(0)" className="fav-icon">
                            <i className="fa fa-heart" />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                          <Link to="#" className="text-teal fw-medium fs-14">
                            Neurologist
                          </Link>
                          <span className="badge bg-success-light d-inline-flex align-items-center">
                            <i className="fa-solid fa-circle fs-5 me-1" />
                            Available
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="doctor-info-detail pb-3">
                            <div className="row align-items-center gy-3">
                              <div className="col-sm-6">
                                <div>
                                  <h6 className="d-flex align-items-center mb-1">
                                    <Link to="/patient/doctor-profile">Dr. Charles Scott</Link>
                                    <i className="isax isax-tick-circle5 text-success ms-2" />
                                  </h6>
                                  <p className="mb-2">MBBS, DNB - Neurology</p>
                                  <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-location me-2" />
                                    Hamshire, TX
                                    <Link
                                      to="#"
                                      className="text-primary text-decoration-underline ms-2"
                                    >
                                      Get Direction
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div>
                                  <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                    <i className="isax isax-language-circle text-dark me-2" />
                                    English, French
                                  </p>
                                  <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                    <i className="isax isax-like-1 text-dark me-2" />
                                    98% (252 / 287 Votes)
                                  </p>
                                  <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-archive-14 text-dark me-2" />
                                    20 Years of Experience
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                            <div className="d-flex align-items-center flex-wrap row-gap-3">
                              <div className="me-3">
                                <p className="mb-1">Consultation Fees</p>
                                <h3 className="text-orange">$600</h3>
                              </div>
                              <p className="mb-0">
                                Next available at <br />
                                10:00 AM - 15 Oct, Tue
                              </p>
                            </div>
                            <Link
                              to="/booking"
                              className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                            >
                              <i className="isax isax-calendar-1 me-2" />
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card doctor-list-card">
                    <div className="d-md-flex align-items-center">
                      <div className="card-img card-img-hover">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-02.jpg" alt="" />
                        </Link>
                        <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                          <span className="badge bg-orange">
                            <i className="fa-solid fa-star me-1" />
                            4.3
                          </span>
                          <Link to="javascript:void(0)" className="fav-icon">
                            <i className="fa fa-heart" />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                          <Link to="#" className="text-info fw-medium fs-14">
                            Cardiologist
                          </Link>
                          <span className="badge bg-danger-light d-inline-flex align-items-center">
                            <i className="fa-solid fa-circle fs-5 me-1" />
                            Unavailable
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="doctor-info-detail pb-3">
                            <div className="row align-items-center gy-3">
                              <div className="col-sm-6">
                                <div>
                                  <h6 className="d-flex align-items-center mb-1">
                                    <Link to="/patient/doctor-profile">Dr. Robert Thomas</Link>
                                    <i className="isax isax-tick-circle5 text-success ms-2" />
                                  </h6>
                                  <p className="mb-2">MBBS, MD - Cardialogy</p>
                                  <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-location me-2" />
                                    Oakland, CA
                                    <Link
                                      to="#"
                                      className="text-primary text-decoration-underline ms-2"
                                    >
                                      Get Direction
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div>
                                  <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                    <i className="isax isax-language-circle text-dark me-2" />
                                    English, Spanish
                                  </p>
                                  <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                    <i className="isax isax-like-1 text-dark me-2" />
                                    92% (270 / 300 Votes)
                                  </p>
                                  <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-archive-14 text-dark me-2" />
                                    30 Years of Experience
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                            <div className="d-flex align-items-center flex-wrap row-gap-3">
                              <div className="me-3">
                                <p className="mb-1">Consultation Fees</p>
                                <h3 className="text-orange">$450</h3>
                              </div>
                              <p className="mb-0">
                                Next available at <br />
                                11.00 AM - 19 Oct, Sat
                              </p>
                            </div>
                            <Link
                              to="/booking"
                              className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                            >
                              <i className="isax isax-calendar-1 me-2" />
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card doctor-list-card">
                    <div className="d-md-flex align-items-center">
                      <div className="card-img card-img-hover">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-03.jpg" alt="" />
                        </Link>
                        <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                          <span className="badge bg-orange">
                            <i className="fa-solid fa-star me-1" />
                            4.7
                          </span>
                          <Link to="javascript:void(0)" className="fav-icon">
                            <i className="fa fa-heart" />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                          <Link to="#" className="text-indigo fw-medium fs-14">
                            Psychologist
                          </Link>
                          <span className="badge bg-success-light d-inline-flex align-items-center">
                            <i className="fa-solid fa-circle fs-5 me-1" />
                            Available
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="doctor-info-detail pb-3">
                            <div className="row align-items-center gy-3">
                              <div className="col-sm-6">
                                <div>
                                  <h6 className="d-flex align-items-center mb-1">
                                    <Link to="/patient/doctor-profile">Dr. Margaret Koller</Link>
                                    <i className="isax isax-tick-circle5 text-success ms-2" />
                                  </h6>
                                  <p className="mb-2"> B.S, M.S - Psychology</p>
                                  <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-location me-2" />
                                    Killeen, TX
                                    <Link
                                      to="#"
                                      className="text-primary text-decoration-underline ms-2"
                                    >
                                      Get Direction
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div>
                                  <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                    <i className="isax isax-language-circle text-dark me-2" />
                                    English, Portuguese
                                  </p>
                                  <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                    <i className="isax isax-like-1 text-dark me-2" />
                                    94% (268 / 312 Votes)
                                  </p>
                                  <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-archive-14 text-dark me-2" />
                                    15 Years of Experience
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                            <div className="d-flex align-items-center flex-wrap row-gap-3">
                              <div className="me-3">
                                <p className="mb-1">Consultation Fees</p>
                                <h3 className="text-orange">$700</h3>
                              </div>
                              <p className="mb-0">
                                Next available at <br />
                                10.30 AM - 29 Oct, Tue
                              </p>
                            </div>
                            <Link
                              to="/booking"
                              className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                            >
                              <i className="isax isax-calendar-1 me-2" />
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card doctor-list-card">
                    <div className="d-md-flex align-items-center">
                      <div className="card-img card-img-hover">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-04.jpg" alt="" />
                        </Link>
                        <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                          <span className="badge bg-orange">
                            <i className="fa-solid fa-star me-1" />
                            4.5
                          </span>
                          <Link to="javascript:void(0)" className="fav-icon">
                            <i className="fa fa-heart" />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                          <Link to="#" className="text-pink fw-medium fs-14">
                            Pediatrician
                          </Link>
                          <span className="badge bg-danger-light d-inline-flex align-items-center">
                            <i className="fa-solid fa-circle fs-5 me-1" />
                            Unavailable
                          </span>
                        </div>
                        <div className="p-3">
                          <div className="doctor-info-detail pb-3">
                            <div className="row align-items-center gy-3">
                              <div className="col-sm-6">
                                <div>
                                  <h6 className="d-flex align-items-center mb-1">
                                    <Link to="/patient/doctor-profile">Dr. Cath Busick</Link>
                                    <i className="isax isax-tick-circle5 text-success ms-2" />
                                  </h6>
                                  <p className="mb-2">MBBS, MD - Pediatrics</p>
                                  <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-location me-2" />
                                    Schenectady, NY
                                    <Link
                                      to="#"
                                      className="text-primary text-decoration-underline ms-2"
                                    >
                                      Get Direction
                                    </Link>
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div>
                                  <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                    <i className="isax isax-language-circle text-dark me-2" />
                                    English, Arabic
                                  </p>
                                  <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                                    <i className="isax isax-like-1 text-dark me-2" />
                                    87% (237 / 250 Votes)
                                  </p>
                                  <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-archive-14 text-dark me-2" />
                                    12 Years of Experience
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                            <div className="d-flex align-items-center flex-wrap row-gap-3">
                              <div className="me-3">
                                <p className="mb-1">Consultation Fees</p>
                                <h3 className="text-orange">$750</h3>
                              </div>
                              <p className="mb-0">
                                Next available at <br />
                                02:00 PM - 04 Nov, Mon
                              </p>
                            </div>
                            <Link
                              to="/booking"
                              className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                            >
                              <i className="isax isax-calendar-1 me-2" />
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pagination dashboard-pagination mt-md-3 mt-0 mb-4">
                    <ul>
                      <li>
                        <Link to="#" className="page-link prev">
                          Prev
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="page-link">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="page-link active">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="page-link">
                          3
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="page-link">
                          4
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="page-link next">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
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

export default DoctorList;
