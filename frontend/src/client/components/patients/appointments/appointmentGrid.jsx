import React from "react";
import Header from "../../header";
import StickyBox from "react-sticky-box";
import DashboardSidebar from "../dashboard/sidebar/sidebar";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import { Filter, initialSettings } from "../../common/filter";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { doctor_thumb_13, doctor_thumb_14, doctor_thumb_15, doctor_thumb_16, doctor_thumb_17, doctor_thumb_18, doctor_thumb_19, doctor_thumb_21 } from "../../imagepath";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const AppointmentGrid = (props) => {
  return (
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
                    <li className="breadcrumb-item active">Appointments</li>
                  </ol>
                  <h2 className="breadcrumb-title">Appointments</h2>
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

      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>Appointments</h3>
                <ul className="header-list-btns">
                  <li>
                    <div className="input-block dash-search-input">
                      <input type="text" className="form-control" placeholder="Search" />
                      <span className="search-icon">
                        <i className="isax isax-search-normal" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="view-icons">
                      <Link to="/patient/patient-appointments">
                        <i className="isax isax-grid-7" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view-icons">
                      <Link to="/patient/appoinment-grid" className="active">
                        <i className="fa-solid fa-th" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="appointment-tab-head">
                <div className="appointment-tabs">
                  <ul className="nav nav-pills inner-tab " id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-upcoming-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-upcoming"
                        type="button"
                        role="tab"
                        aria-controls="pills-upcoming"
                        aria-selected="false"
                      >
                        Upcoming<span>21</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-cancel-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-cancel"
                        type="button"
                        role="tab"
                        aria-controls="pills-cancel"
                        aria-selected="true"
                      >
                        Cancelled<span>16</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-complete-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-complete"
                        type="button"
                        role="tab"
                        aria-controls="pills-complete"
                        aria-selected="true"
                      >
                        Completed<span>214</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="filter-head">
                  <div className="position-relative daterange-wraper me-2">
                    <div className="input-groupicon calender-input">
                      <DateRangePicker initialSettings={initialSettings}>
                        <input
                          className="form-control  date-range bookingrange"
                          type="text"
                        />
                      </DateRangePicker>
                    </div>
                    <i className="isax isax-calendar-1" />
                  </div>
                  <div className="form-sorts dropdown">
                    <Link
                      to="#"
                      className="dropdown-toggle"
                      id="table-filter"
                    >
                      <i className="isax isax-filter me-2" />
                      Filter By
                    </Link>
                    <div className="filter-dropdown-menu">
                      <div className="filter-set-view">
                        <div className="accordion" id="accordionExample">
                          <div className="filter-set-content">
                            <div className="filter-set-content-head">
                              <Link
                                to="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Name
                                <i className="fa-solid fa-chevron-right" />
                              </Link>
                            </div>
                            <div
                              className="filter-set-contents accordion-collapse collapse show"
                              id="collapseTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <ul>
                                <li>
                                  <div className="input-block dash-search-input w-100">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Search"
                                    />
                                    <span className="search-icon">
                                      <i className="fa-solid fa-magnifying-glass" />
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="filter-set-content">
                            <div className="filter-set-content-head">
                              <Link
                                to="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Appointment Type
                                <i className="fa-solid fa-chevron-right" />
                              </Link>
                            </div>
                            <div
                              className="filter-set-contents accordion-collapse collapse show"
                              id="collapseOne"
                              data-bs-parent="#accordionExample"
                            >
                              <ul>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" defaultChecked="" />
                                      <span className="checkmarks" />
                                      <span className="check-title">All Type</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Video Call</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Audio Call</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Chat</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Direct Visit</span>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="filter-set-content">
                            <div className="filter-set-content-head">
                              <Link
                                to="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Visit Type
                                <i className="fa-solid fa-chevron-right" />
                              </Link>
                            </div>
                            <div
                              className="filter-set-contents accordion-collapse collapse show"
                              id="collapseThree"
                              data-bs-parent="#accordionExample"
                            >
                              <ul>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" defaultChecked="" />
                                      <span className="checkmarks" />
                                      <span className="check-title">All Visit</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">General</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Consultation</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Follow-up</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Direct Visit</span>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="filter-reset-btns">
                          <Link
                            to="/doctor/appointments"
                            className="btn btn-md btn-light rounded-pill"
                          >
                            Reset
                          </Link>
                          <Link
                            to="/doctor/appointments"
                            className="btn btn-md btn-primary-gradient rounded-pill"
                          >
                            Filter Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content appointment-tab-content appoint-patient">
                <div
                  className="tab-pane fade show active"
                  id="pills-upcoming"
                  role="tabpanel"
                  aria-labelledby="pills-upcoming-tab"
                >
                  <div className="row">
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-21.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0001</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr Edalin Hendry
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              11 Nov 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              10.45 AM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-13.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0002</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr.Shanta Nesmith
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="hospital-icon">
                                  <Link to="#">
                                    <i className="isax isax-hospital5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              05 Nov 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              11.50 AM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-14.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0003</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr.John Ewel
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="telephone-icon">
                                  <Link to="#">
                                    <i className="isax isax-call5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              27 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              09.30 AM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-15.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0004</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr.Susan Fenimore
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="hospital-icon">
                                  <Link to="#">
                                    <i className="isax isax-hospital5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              18 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              12.20 PM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-16.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0005</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr.Juliet Rios
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              10 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              11.30 AM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-17.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0006</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr.Joseph Engels
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              26 Sep 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              10.20 AM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-18.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0007</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr.Victoria Selzer
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              14 Sep 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              08.10 AM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-19.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0008</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr.Benjamin Hedge
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              03 Sep 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              06.00 PM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/upcoming-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-21.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0009</p>
                                  <h6>
                                    <Link to="/patient/upcoming-appointment">
                                      Dr.Kristina Lepley
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              25 Aug 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              10.45 AM
                            </p>
                          </li>
                          <li className="appointment-action">
                            <ul>
                              <li>
                                <Link to="/patient/upcoming-appointment">
                                  <i className="isax isax-eye4" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-messages-25" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <i className="isax isax-close-circle5" />
                                </Link>
                              </li>
                            </ul>
                            <div className="appointment-detail-btn">
                              <Link to="#" className="start-link">
                                <i className="isax isax-calendar-tick5 me-1" />
                                Attend
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    <div className="col-md-12">
                      <div className="loader-item text-center">
                        <Link
                          to="#"
                          className="btn btn-outline-primary rounded-pill"
                        >
                          Load More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-cancel"
                  role="tabpanel"
                  aria-labelledby="pills-cancel-tab"
                >
                  <div className="row">
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-cancelled-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-21.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0001</p>
                                  <h6>
                                    <Link to="/patient/patient-cancelled-appointment">
                                      Dr Edalin Hendry
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              11 Nov 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              10.45 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-cancelled-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-cancelled-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-13.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0002</p>
                                  <h6>
                                    <Link to="/patient/patient-cancelled-appointment">
                                      Dr.Shanta Nesmith
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              05 Nov 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              11.50 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-cancelled-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-cancelled-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-14.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0003</p>
                                  <h6>
                                    <Link to="/patient/patient-cancelled-appointment">
                                      Dr.John Ewel
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              27 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              09.30 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-cancelled-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-cancelled-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-15.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0004</p>
                                  <h6>
                                    <Link to="/patient/patient-cancelled-appointment">
                                      Dr.Susan Fenimore
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="hospital-icon">
                                  <Link to="#">
                                    <i className="isax isax-hospital5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              18 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              12.20 PM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-cancelled-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-cancelled-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-16.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0005</p>
                                  <h6>
                                    <Link to="/patient/patient-cancelled-appointment">
                                      Dr.Juliet Rios
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              10 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              11.30 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-cancelled-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-cancelled-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-17.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0006</p>
                                  <h6>
                                    <Link to="/patient/patient-cancelled-appointment">
                                      Dr.Joseph Engels
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              26 Sep 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              10.20 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-cancelled-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    <div className="col-md-12">
                      <div className="loader-item text-center">
                        <Link
                          to="#"
                          className="btn btn-outline-primary rounded-pill"
                        >
                          Load More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-complete"
                  role="tabpanel"
                  aria-labelledby="pills-complete-tab"
                >
                  <div className="row">
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-completed-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-21.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0001</p>
                                  <h6>
                                    <Link to="/patient/patient-completed-appointment">
                                      Dr Edalin Hendry
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              11 Nov 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              10.45 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-completed-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-completed-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-13.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0002</p>
                                  <h6>
                                    <Link to="/patient/patient-completed-appointment">
                                      Dr.Shanta Nesmith
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="hospital-icon">
                                  <Link to="#">
                                    <i className="isax isax-hospital5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              05 Nov 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              11.50 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-completed-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-completed-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-14.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0003</p>
                                  <h6>
                                    <Link to="/patient/patient-completed-appointment">
                                      Dr.John Ewel
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="telephone-icon">
                                  <Link to="#">
                                    <i className="isax isax-call5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              27 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              09.30 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-completed-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-completed-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-15.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0004</p>
                                  <h6>
                                    <Link to="/patient/patient-completed-appointment">
                                      Dr.Susan Fenimore
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="hospital-icon">
                                  <Link to="#">
                                    <i className="isax isax-hospital5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              18 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              12.20 PM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-completed-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-completed-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-16.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0005</p>
                                  <h6>
                                    <Link to="/patient/patient-completed-appointment">
                                      Dr.Juliet Rios
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              10 Oct 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              11.30 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-completed-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    {/* Appointment Grid */}
                    <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                      <div className="appointment-wrap appointment-grid-wrap">
                        <ul>
                          <li>
                            <div className="appointment-grid-head">
                              <div className="patinet-information">
                                <Link to="/patient/patient-completed-appointment">
                                   <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-17.jpg"
                                    alt="User Image"
                                  />
                                </Link>
                                <div className="patient-info">
                                  <p>#Apt0006</p>
                                  <h6>
                                    <Link to="/patient/patient-completed-appointment">
                                      Dr.Joseph Engels
                                    </Link>
                                  </h6>
                                  <p className="visit">General Visit</p>
                                </div>
                              </div>
                              <div className="grid-user-msg">
                                <span className="video-icon">
                                  <Link to="#">
                                    <i className="isax isax-video5" />
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="appointment-info">
                            <p>
                              <i className="isax isax-calendar5" />
                              26 Sep 2025
                            </p>
                            <p>
                              <i className="isax isax-clock5" />
                              10.20 AM
                            </p>
                          </li>
                          <li className="appointment-detail-btn">
                            <Link
                              to="/patient/patient-completed-appointment"
                              className="start-link w-100"
                            >
                              View Details
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /Appointment Grid */}
                    <div className="col-md-12">
                      <div className="loader-item text-center">
                        <Link
                          to="#"
                          className="btn btn-outline-primary rounded-pill"
                        >
                          Load More
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

      <Footer {...props} />
    </div>
  );
};

export default AppointmentGrid;
