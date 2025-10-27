import React from "react";
import Header from "../../header";
import DoctorSidebar from "../sidebar";
import DoctorFooter from "../../common/doctorFooter";
import { doctordashboardprofile01, doctordashboardprofile02, doctordashboardprofile04, doctordashboardprofile05, doctordashboardprofile06, doctordashboardprofile07, doctordashboardprofile08, doctordashboardprofile3 } from "../../imagepath";
import { Filter, initialSettings } from "../../common/filter";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Appointments = (props) => {




  return (
    <div>
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
                      <a href="/home">
                        <i className="isax isax-home-15" />
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Doctor
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

      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorSidebar />
              {/* /Profile Sidebar */}
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>Appointments</h3>
                <ul className="header-list-btns">
                  <li>
                    <div className="input-block dash-search-input">
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
                  <li>
                    <div className="view-icons">
                      <Link to="/doctor/appointments" className="active">
                      <i className="isax isax-grid-7"></i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view-icons">
                      <Link to="/doctor/doctor-appointments-grid">
                        <i className="fa-solid fa-th" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view-icons">
                      <Link to="#">
                      <i className="isax isax-calendar-tick"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="appointment-tab-head">
                <div className="appointment-tabs">
                  <ul
                    className="nav nav-pills inner-tab "
                    id="pills-tab"
                    role="tablist"
                  >
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
                    <i className="fa-solid fa-calendar-days" />
                  </div>
                  <Filter />
                </div>
              </div>
              <div className="tab-content appointment-tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-upcoming"
                  role="tabpanel"
                  aria-labelledby="pills-upcoming-tab"
                >
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-upcoming-appointment">
                            <img
                              src={doctordashboardprofile01}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0001</p>
                            <h6>
                              <Link to="/doctor/doctor-upcoming-appointment">Adrian</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          11 Nov 2025 10.45 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            adran@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            +1 504 368 6874
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-upcoming-appointment">
                              <i className="fa-solid fa-eye" />
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
                      </li>
                      <li className="appointment-start">
                        <Link
                          to="/doctor/doctor-appointment-start"
                          className="start-link"
                        >
                          Start Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-upcoming-appointment">
                            <img
                              src={doctordashboardprofile02}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0002</p>
                            <h6>
                              <Link to="/doctor/doctor-upcoming-appointment">Kelly</Link>
                              <span className="badge new-tag">New</span>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          05 Nov 2025 11.50 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Audio Call</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            kelly@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            &nbsp;+1 832 891 8403
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-upcoming-appointment">
                              <i className="fa-solid fa-eye" />
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
                      </li>
                      <li className="appointment-start">
                        <Link
                          to="/doctor/doctor-appointment-start"
                          className="start-link"
                        >
                          Start Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-upcoming-appointment">
                            <img
                              src={doctordashboardprofile3}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0003</p>
                            <h6>
                              <Link to="/doctor/doctor-upcoming-appointment">Samuel</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          27 Oct 2025 09.30 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            samuel@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            &nbsp;&nbsp;+1 749 104 6291
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-upcoming-appointment">
                              <i className="fa-solid fa-eye" />
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
                      </li>
                      <li className="appointment-start">
                        <Link
                          to="/doctor/doctor-appointment-start"
                          className="start-link"
                        >
                          Start Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-upcoming-appointment">
                            <img
                              src={doctordashboardprofile04}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0004</p>
                            <h6>
                              <Link to="/doctor/doctor-upcoming-appointment">
                                Catherine
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          18 Oct 2025 12.20 PM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Direct Visit</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            catherine@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            +1 584 920 7183
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-upcoming-appointment">
                              <i className="fa-solid fa-eye" />
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
                      </li>
                      <li className="appointment-start">
                        <Link
                          to="/doctor/doctor-appointment-start"
                          className="start-link"
                        >
                          Start Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-upcoming-appointment">
                            <img
                              src={doctordashboardprofile05}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0005</p>
                            <h6>
                              <Link to="/doctor/doctor-upcoming-appointment">Robert</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          10 Oct 2025 11.30 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            robert@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            &nbsp;+1 059 327 6729
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-upcoming-appointment">
                              <i className="fa-solid fa-eye" />
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
                      </li>
                      <li className="appointment-start">
                        <Link
                          to="/doctor/doctor-appointment-start"
                          className="start-link"
                        >
                          Start Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-upcoming-appointment">
                            <img
                              src={doctordashboardprofile06}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0006</p>
                            <h6>
                              <Link to="/doctor/doctor-upcoming-appointment">Anderea</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          26 Sep 2025 10.20 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            anderea@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            &nbsp;&nbsp;+1 278 402 7103
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-upcoming-appointment">
                              <i className="fa-solid fa-eye" />
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
                      </li>
                      <li className="appointment-start">
                        <Link
                          to="/doctor/doctor-appointment-start"
                          className="start-link"
                        >
                          Start Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-upcoming-appointment">
                            <img
                              src={doctordashboardprofile07}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0007</p>
                            <h6>
                              <Link to="/doctor/doctor-upcoming-appointment">Peter</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          14 Sep 2025 08.10 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            peter@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            &nbsp;+1 638 278 0249
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-upcoming-appointment">
                              <i className="fa-solid fa-eye" />
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
                      </li>
                      <li className="appointment-start">
                        <Link
                          to="/doctor/doctor-appointment-start"
                          className="start-link"
                        >
                          Start Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-upcoming-appointment">
                            <img
                              src={doctordashboardprofile08}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0008</p>
                            <h6>
                              <Link to="/doctor/doctor-upcoming-appointment">Emily</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          03 Sep 2025 06.00 PM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            emily@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            &nbsp;&nbsp;+1 261 039 1873
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-upcoming-appointment">
                              <i className="fa-solid fa-eye" />
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
                      </li>
                      <li className="appointment-start">
                        <Link
                          to="/doctor/doctor-appointment-start"
                          className="start-link"
                        >
                          Start Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Pagination */}
                  <div className="pagination dashboard-pagination">
                    <ul>
                      <li>
                        <Link to="#" className="page-link">
                          <i className="fa-solid fa-chevron-left" />
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
                        <Link to="#" className="page-link">
                          ...
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="page-link">
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Pagination */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-cancel"
                  role="tabpanel"
                  aria-labelledby="pills-cancel-tab"
                >
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-cancelled-appointment">
                            <img
                              src={doctordashboardprofile01}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0001</p>
                            <h6>
                              <Link to="/doctor/doctor-cancelled-appointment">Adrian</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          11 Nov 2025 10.45 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-cancelled-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-cancelled-appointment">
                            <img
                              src={doctordashboardprofile02}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0002</p>
                            <h6>
                              <Link to="/doctor/doctor-cancelled-appointment">Kelly</Link>
                              <span className="badge new-tag">New</span>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          05 Nov 2025 11.50 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Audio Call</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-cancelled-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-cancelled-appointment">
                            <img
                              src={doctordashboardprofile3}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0003</p>
                            <h6>
                              <Link to="/doctor/doctor-cancelled-appointment">Samuel</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          27 Oct 2025 09.30 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-cancelled-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-cancelled-appointment">
                            <img
                              src={doctordashboardprofile04}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0004</p>
                            <h6>
                              <Link to="/doctor/doctor-cancelled-appointment">
                                Catherine
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          18 Oct 2025 12.20 PM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Direct Visit</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-cancelled-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-cancelled-appointment">
                            <img
                              src={doctordashboardprofile05}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0005</p>
                            <h6>
                              <Link to="/doctor/doctor-cancelled-appointment">Robert</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          10 Oct 2025 11.30 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-cancelled-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-cancelled-appointment">
                            <img
                              src={doctordashboardprofile06}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0006</p>
                            <h6>
                              <Link to="/doctor/doctor-cancelled-appointment">
                                Anderea
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          26 Sep 2025 10.20 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-cancelled-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-cancelled-appointment">
                            <img
                              src={doctordashboardprofile07}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0007</p>
                            <h6>
                              <Link to="/doctor/doctor-cancelled-appointment">Peter</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          14 Sep 2025 08.10 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-cancelled-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-cancelled-appointment">
                            <img
                              src={doctordashboardprofile08}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0008</p>
                            <h6>
                              <Link to="/doctor/doctor-cancelled-appointment">Emily</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          03 Sep 2025 06.00 PM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-cancelled-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Pagination */}
                  <div className="pagination dashboard-pagination">
                    <ul>
                      <li>
                        <Link to="#" className="page-link">
                          <i className="fa-solid fa-chevron-left" />
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
                        <Link to="#" className="page-link">
                          ...
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="page-link">
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Pagination */}
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-complete"
                  role="tabpanel"
                  aria-labelledby="pills-complete-tab"
                >
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-completed-appointment">
                            <img
                              src={doctordashboardprofile01}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0001</p>
                            <h6>
                              <Link to="/doctor/doctor-completed-appointment">Adrian</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          11 Nov 2025 10.45 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-completed-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-completed-appointment">
                            <img
                              src={doctordashboardprofile02}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0002</p>
                            <h6>
                              <Link to="/doctor/doctor-completed-appointment">Kelly</Link>
                              <span className="badge new-tag">New</span>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          05 Nov 2025 11.50 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Audio Call</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-completed-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-completed-appointment">
                            <img
                              src={doctordashboardprofile3}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0003</p>
                            <h6>
                              <Link to="/doctor/doctor-completed-appointment">Samuel</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          27 Oct 2025 09.30 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-completed-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-completed-appointment">
                            <img
                              src={doctordashboardprofile04}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0004</p>
                            <h6>
                              <Link to="/doctor/doctor-completed-appointment">
                                Catherine
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          18 Oct 2025 12.20 PM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Direct Visit</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-completed-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-completed-appointment">
                            <img
                              src={doctordashboardprofile05}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0005</p>
                            <h6>
                              <Link to="/doctor/doctor-completed-appointment">Robert</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          10 Oct 2025 11.30 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-completed-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-completed-appointment">
                            <img
                              src={doctordashboardprofile06}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0006</p>
                            <h6>
                              <Link to="/doctor/doctor-completed-appointment">
                                Anderea
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          26 Sep 2025 10.20 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-completed-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-completed-appointment">
                            <img
                              src={doctordashboardprofile07}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0007</p>
                            <h6>
                              <Link to="/doctor/doctor-completed-appointment">Peter</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          14 Sep 2025 08.10 AM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-completed-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="/doctor/doctor-completed-appointment">
                            <img
                              src={doctordashboardprofile08}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0008</p>
                            <h6>
                              <Link to="/doctor/doctor-completed-appointment">Emily</Link>
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          03 Sep 2025 06.00 PM
                        </p>
                        <ul className="d-flex apponitment-types">
                          <li>General Visit</li>
                          <li>Video Call</li>
                        </ul>
                      </li>
                      <li className="appointment-detail-btn">
                        <Link
                          to="/doctor/doctor-completed-appointment"
                          className="start-link"
                        >
                          View Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Pagination */}
                  <div className="pagination dashboard-pagination">
                    <ul>
                      <li>
                        <Link to="#" className="page-link">
                          <i className="fa-solid fa-chevron-left" />
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
                        <Link to="#" className="page-link">
                          ...
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="page-link">
                          <i className="fa-solid fa-chevron-right" />
                        </Link>
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
      <DoctorFooter {...props} />
    </div>
  );
};

export default Appointments;
