import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import "react-datepicker/src/stylesheets/datepicker.scss";
import DoctorFooter from "../../common/doctorFooter";
import DoctorSidebar from "../sidebar";
import {
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_03,
  doctor_thumb_05,
  doctor_thumb_07,
  doctor_thumb_08,
  doctor_thumb_09,
  doctordashboardprofile01,
  doctorthumb02,
  logo,
} from "../../imagepath";
import Select from "react-select";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const PatientProfile = (props) => {
  const options = [
    { value: "", label: "Select Patient" },
    { value: "adrian_marshall", label: "Adrian Marshall" },
    { value: "kelly_stevens", label: "Kelly Stevens" },
    { value: "catherine_gracey", label: "Catherine Gracey" },
  ];
  const options2 = [
    { value: "", label: "Select Patient" },
    { value: "adrian_marshall", label: "Adrian Marshall" },
    { value: "kelly_stevens", label: "Kelly Stevens" },
    { value: "catherine_gracey", label: "Catherine Gracey" },
  ];
  const options3 = [
    { value: "", label: "Select" },
    { value: "Visit", label: "Visit" },
    { value: "Online", label: "Online" },
  ];
  const options4 = [
    { value: "", label: "Select" },
    { value: "1 Month", label: "1 Month" },
    { value: "1 Day", label: "1 Day" },
  ];

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
                        Doctor
                      </li>
                      <li className="breadcrumb-item active">Patients Profile</li>
                    </ol>
                    <h2 className="breadcrumb-title">Patients Profile</h2>
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
          {/* Page Content */}
          <div className="content doctor-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                  {/* Profile Sidebar */}
                  <div className="profile-sidebar doctor-sidebar profile-sidebar-new">
                    <div className="widget-profile pro-widget-content">
                      <div className="profile-info-widget">
                        <Link to="/patient/doctor-profile" className="booking-doc-img">
                          <ImageWithBasePath
                            src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                            alt="User Image"
                          />
                        </Link>
                        <div className="profile-det-info">
                          <h3>
                            <Link to="/patient/doctor-profile">Dr Edalin Hendry</Link>
                          </h3>
                          <div className="patient-details">
                            <h5 className="mb-0">
                              BDS, MDS - Oral &amp; Maxillofacial Surgery
                            </h5>
                          </div>
                          <span className="badge doctor-role-badge">
                            <i className="fa-solid fa-circle" />
                            Dentist
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-available-head">
                      <div className="input-block input-block-new">
                        <label className="form-label">
                          Availability <span className="text-danger">*</span>
                        </label>
                        <select className="select form-control">
                          <option>I am Available Now</option>
                          <option>Not Available</option>
                        </select>
                      </div>
                    </div>
                    <div className="dashboard-widget">
                      <nav className="dashboard-menu">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-dashboard">
                              <i className="isax isax-category-2" />
                              <span>Dashboard</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/doctor-request">
                              <i className="isax isax-clipboard-tick" />
                              <span>Requests</span>
                              <small className="unread-msg">2</small>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/appointments">
                              <i className="isax isax-calendar-1" />
                              <span>Appointments</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/available-timings">
                              <i className="isax isax-calendar-tick" />
                              <span>Available Timings</span>
                            </Link>
                          </li>
                          <li className="active">
                            <Link to="/doctor/my-patients">
                              <i className="fa-solid fa-user-injured" />
                              <span>My Patients</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/doctor-specialities">
                              <i className="isax isax-clock" />
                              <span>Specialties &amp; Services</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/review">
                              <i className="isax isax-star-1" />
                              <span>Reviews</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/account">
                              <i className="isax isax-profile-tick" />
                              <span>Accounts</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/invoices">
                              <i className="isax isax-document-text" />
                              <span>Invoices</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/doctor-payment">
                              <i className="fa-solid fa-money-bill-1" />
                              <span>Payout Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/chat-doctor">
                              <i className="isax isax-messages-1" />
                              <span>Message</span>
                              <small className="unread-msg">7</small>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/profile-setting">
                              <i className="isax isax-setting-2" />
                              <span>Profile Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/social-media">
                              <i className="fa-solid fa-shield-halved" />
                              <span>Social Media</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/doctor-change-password">
                              <i className="isax isax-key" />
                              <span>Change Password</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/login">
                              <i className="isax isax-logout" />
                              <span>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* /Profile Sidebar */}
                </div>
                {/* Patient Details */}
                <div className="col-lg-8 col-xl-9">
                  <div className="appointment-patient">
                    <div className="dashboard-header">
                      <h3>
                        <Link to="/doctor/my-patients">
                          <i className="fa-solid fa-arrow-left" /> Patient Details
                        </Link>
                      </h3>
                    </div>
                    <div className="patient-wrap">
                      <div className="patient-info">
                        <ImageWithBasePath
                          src="assets/img/doctors-dashboard/profile-01.jpg"
                          alt="img"
                        />
                        <div className="user-patient">
                          <h6>#P0016</h6>
                          <h5>Adrian Marshall</h5>
                          <ul>
                            <li>Age : 42</li>
                            <li>Male</li>
                            <li>AB+ve</li>
                          </ul>
                        </div>
                      </div>
                      <div className="patient-book">
                        <p>
                          <i className="isax isax-calendar-1" />
                          Last Booking
                        </p>
                        <p>24 Mar 2025</p>
                      </div>
                    </div>
                    {/* Appoitment Tabs */}
                    <div className="appointment-tabs user-tab">
                      <ul className="nav">
                        <li className="nav-item">
                          <Link
                            className="nav-link active"
                            to="#pat_appointments"
                            data-bs-toggle="tab"
                          >
                            Appointments
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="#prescription"
                            data-bs-toggle="tab"
                          >
                            Prescription
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#medical" data-bs-toggle="tab">
                            Medical Records
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#billing" data-bs-toggle="tab">
                            Billing
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Appoitment Tabs */}
                    <div className="tab-content pt-0">
                      {/* Appointment Tab */}
                      <div id="pat_appointments" className="tab-pane fade show active">
                        <div className="search-header">
                          <div className="search-field">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <span className="search-icon">
                              <i className="fa-solid fa-magnifying-glass" />
                            </span>
                          </div>
                        </div>
                        <div className="custom-table">
                          <div className="table-responsive">
                            <table className="table table-center mb-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Doctor</th>
                                  <th>Appt Date</th>
                                  <th>Booking Date</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <Link
                                      className="text-blue-600"
                                      to="/patient/upcoming-appointment"
                                    >
                                      #Apt123
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Edalin Hendry</Link>
                                    </h2>
                                  </td>
                                  <td>24 Mar 2025</td>
                                  <td>21 Mar 2025</td>
                                  <td>$300</td>
                                  <td>
                                    <span className="badge badge-yellow status-badge">
                                      Upcoming
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link to="/patient/upcoming-appointment">
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      className="text-blue-600"
                                      to="/patient/upcoming-appointment"
                                    >
                                      #Apt124
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-05.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">John Homes</Link>
                                    </h2>
                                  </td>
                                  <td>17 Mar 2025</td>
                                  <td>14 Mar 2025</td>
                                  <td>$450</td>
                                  <td>
                                    <span className="badge badge-yellow status-badge">
                                      Upcoming
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link to="/patient/upcoming-appointment">
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      className="text-blue-600"
                                      to="/patient/upcoming-appointment"
                                    >
                                      #Apt125
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-03.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Shanta Neill</Link>
                                    </h2>
                                  </td>
                                  <td>11 Mar 2025</td>
                                  <td>07 Mar 2025</td>
                                  <td>$250</td>
                                  <td>
                                    <span className="badge badge-yellow status-badge">
                                      Upcoming
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link to="/patient/upcoming-appointment">
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      className="text-blue-600"
                                      to="/patient/upcoming-appointment"
                                    >
                                      #Apt126
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-08.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Anthony Tran</Link>
                                    </h2>
                                  </td>
                                  <td>26 Feb 2025</td>
                                  <td>23 Feb 2025</td>
                                  <td>$320</td>
                                  <td>
                                    <span className="badge badge-yellow status-badge">
                                      Upcoming
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link to="/patient/upcoming-appointment">
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      className="text-blue-600"
                                      to="/patient/upcoming-appointment"
                                    >
                                      #Apt127
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Susan Lingo</Link>
                                    </h2>
                                  </td>
                                  <td>18 Feb 2025</td>
                                  <td>15 Feb 2025</td>
                                  <td>$480</td>
                                  <td>
                                    <span className="badge badge-yellow status-badge">
                                      Upcoming
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link to="/doctor/doctor-appointment-start">
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      className="text-blue-600"
                                      to="/doctor/doctor-cancelled-appointment"
                                    >
                                      #Apt128
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-09.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Joseph Boyd</Link>
                                    </h2>
                                  </td>
                                  <td>10 Feb 2025</td>
                                  <td>07 Feb 2025</td>
                                  <td>$260</td>
                                  <td>
                                    <span className="badge badge-danger status-badge">
                                      Cancelled
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link to="/patient/patient-cancelled-appointment">
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      className="text-blue-600"
                                      to="/patient/patient-completed-appointment"
                                    >
                                      #Apt129
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-07.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Juliet Gabriel</Link>
                                    </h2>
                                  </td>
                                  <td>28 Jan 2025</td>
                                  <td>25 Jan 2025</td>
                                  <td>$350</td>
                                  <td>
                                    <span className="badge badge-green status-badge">
                                      Completed
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link to="/patient/patient-completed-appointment">
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
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
                      {/* /Appointment Tab */}
                      {/* Prescription Tab */}
                      <div className="tab-pane fade" id="prescription">
                        <div className="search-header">
                          <div className="search-field">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <span className="search-icon">
                              <i className="fa-solid fa-magnifying-glass" />
                            </span>
                          </div>
                          <div>
                            <Link
                              to="#"
                              className="btn btn-primary prime-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#add_prescription"
                            >
                              Add New Prescription
                            </Link>
                          </div>
                        </div>
                        <div className="custom-table">
                          <div className="table-responsive">
                            <table className="table table-center mb-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Prescriped By</th>
                                  <th>Type</th>
                                  <th>Date</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <Link
                                      to="#"
                                      className="text-blue-600"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_prescription"
                                    >
                                      #Apt123
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Edalin Hendry</Link>
                                    </h2>
                                  </td>
                                  <td>Visit</td>
                                  <td>25 Jan 2025</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_prescription"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      to="#"
                                      className="text-blue-600"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_prescription"
                                    >
                                      #Apt124
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-05.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">John Homes</Link>
                                    </h2>
                                  </td>
                                  <td>Visit</td>
                                  <td>28 Jan 2025</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_prescription"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      to="#"
                                      className="text-blue-600"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_prescription"
                                    >
                                      #Apt125
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-03.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Shanta Neill</Link>
                                    </h2>
                                  </td>
                                  <td>Visit</td>
                                  <td>11 Feb 2025</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_prescription"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      to="#"
                                      className="text-blue-600"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_prescription"
                                    >
                                      #Apt126
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-08.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Anthony Tran</Link>
                                    </h2>
                                  </td>
                                  <td>Visit</td>
                                  <td>19 Feb 2025</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_prescription"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link
                                      to="#"
                                      className="text-blue-600"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_prescription"
                                    >
                                      #Apt127
                                    </Link>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <Link
                                        to="/patient/doctor-profile"
                                        className="avatar avatar-sm me-2"
                                      >
                                        <ImageWithBasePath
                                          className="avatar-img rounded-3"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </Link>
                                      <Link to="/patient/doctor-profile">Susan Lingo</Link>
                                    </h2>
                                  </td>
                                  <td>Visit</td>
                                  <td>27 Feb 2025</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_prescription"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
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
                      {/* /Prescription Tab */}
                      {/* Medical Records Tab */}
                      <div className="tab-pane fade" id="medical">
                        <div className="search-header">
                          <div className="search-field">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <span className="search-icon">
                              <i className="fa-solid fa-magnifying-glass" />
                            </span>
                          </div>
                          <div>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_medical_records"
                              className="btn btn-primary prime-btn"
                            >
                              Add Medical Record
                            </Link>
                          </div>
                        </div>
                        <div className="custom-table">
                          <div className="table-responsive">
                            <table className="table table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Date</th>
                                  <th>Description</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <Link to="#" className="lab-icon">
                                      <span>
                                        <i className="fa-solid fa-paperclip" />
                                      </span>
                                      Lab Report
                                    </Link>
                                  </td>
                                  <td>24 Mar 2025</td>
                                  <td>Glucose Test V12</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_medical_records"
                                      >
                                        <i className="isax isax-edit-2" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-import" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#" className="lab-icon">
                                      <span>
                                        <i className="fa-solid fa-paperclip" />
                                      </span>
                                      Lab Report
                                    </Link>
                                  </td>
                                  <td>27 Mar 2025</td>
                                  <td>Complete Blood Count(CBC)</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_medical_records"
                                      >
                                        <i className="isax isax-edit-2" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-import" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#" className="lab-icon">
                                      <span>
                                        <i className="fa-solid fa-paperclip" />
                                      </span>
                                      Lab Report
                                    </Link>
                                  </td>
                                  <td>10 Apr 2025</td>
                                  <td>Echocardiogram</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_medical_records"
                                      >
                                        <i className="isax isax-edit-2" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-import" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#" className="lab-icon">
                                      <span>
                                        <i className="fa-solid fa-paperclip" />
                                      </span>
                                      Lab Report
                                    </Link>
                                  </td>
                                  <td>19 Apr 2025</td>
                                  <td>COVID-19 Test</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_medical_records"
                                      >
                                        <i className="isax isax-edit-2" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-import" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#" className="lab-icon">
                                      <span>
                                        <i className="fa-solid fa-paperclip" />
                                      </span>
                                      Lab Report
                                    </Link>
                                  </td>
                                  <td>27 Apr 2025</td>
                                  <td>Allergy Tests</td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_medical_records"
                                      >
                                        <i className="isax isax-edit-2" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-import" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <Link to="#" className="lab-icon">
                                      <span>
                                        <i className="fa-solid fa-paperclip" />
                                      </span>
                                      Lab Report
                                    </Link>
                                  </td>
                                  <td>02 May 2025</td>
                                  <td>Lipid Panel </td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit_medical_records"
                                      >
                                        <i className="isax isax-edit-2" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-import" />
                                      </Link>
                                      <Link to="#">
                                        <i className="isax isax-trash" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
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
                      {/* /Medical Records Tab */}
                      {/* Billing Tab */}
                      <div className="tab-pane" id="billing">
                        <div className="search-header">
                          <div className="search-field">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <span className="search-icon">
                              <i className="fa-solid fa-magnifying-glass" />
                            </span>
                          </div>
                          <div>
                            <Link
                              to="#"
                              className="btn btn-primary prime-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#add_billing"
                            >
                              Add New Billing
                            </Link>
                          </div>
                        </div>
                        <div className="custom-table">
                          <div className="table-responsive">
                            <table className="table table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Billing Date</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>24 Mar 2025</td>
                                  <td>$300</td>
                                  <td>
                                    <span className="badge badge-green status-badge">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_bill"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>28 Mar 2025</td>
                                  <td>$350</td>
                                  <td>
                                    <span className="badge badge-green status-badge">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_bill"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>10 Apr 2025</td>
                                  <td>$400</td>
                                  <td>
                                    <span className="badge badge-green status-badge">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_bill"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>19 Apr 2025</td>
                                  <td>$250</td>
                                  <td>
                                    <span className="badge badge-green status-badge">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_bill"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>22 Apr 2025</td>
                                  <td>$320</td>
                                  <td>
                                    <span className="badge badge-green status-badge">
                                      Paid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_bill"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>02 May 2025</td>
                                  <td>$480</td>
                                  <td>
                                    <span className="badge badge-danger status-badge">
                                      Unpaid
                                    </span>
                                  </td>
                                  <td>
                                    <div className="action-item">
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view_bill"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
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
                      {/* Billing Tab */}
                    </div>
                  </div>
                </div>
                {/* /Patient Details */}
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>

        <DoctorFooter />
      </div>
      {/*View Prescription */}
      <div className="modal fade custom-modals" id="view_prescription">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">View Prescription</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body pb-0">
              <div className="prescribe-download">
                <h5>21 Mar 2025</h5>
                <ul>
                  <li>
                    <Link to="#" className="print-link">
                      <i className="isax isax-printer5" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn btn-primary prime-btn">
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="view-prescribe invoice-content">
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <ImageWithBasePath src={logo} alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="invoice-details">
                        <strong>Prescription ID :</strong> #PR-123 <br />
                        <strong>Issued:</strong> 21 Mar 2025
                      </p>
                    </div>
                  </div>
                </div>
                {/* Invoice Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <h6 className="customer-text">Doctor Details</h6>
                        <p className="invoice-details invoice-details-two">
                          Edalin Hendry <br />
                          806 Twin Willow Lane, <br />
                          Newyork, USA <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info invoice-info2">
                        <h6 className="customer-text">Patient Details</h6>
                        <p className="invoice-details">
                          Adrian Marshall <br />
                          299 Star Trek Drive,
                          <br />
                          Florida, 32405, USA <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Item */}
                <div className="invoice-item invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <h6>Prescription Details</h6>
                      <div className="table-responsive">
                        <table className="invoice-table table table-bordered">
                          <thead>
                            <tr>
                              <th>Medicine Name</th>
                              <th>Dosage</th>
                              <th>Frequency</th>
                              <th>Duration</th>
                              <th>Timings</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Ecosprin 75MG [Asprin 75 MG Oral Tab]</td>
                              <td>
                                75 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>Before Meal</td>
                            </tr>
                            <tr>
                              <td>Alexer 90MG Tab</td>
                              <td>
                                90 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>Before Meal</td>
                            </tr>
                            <tr>
                              <td>Ramistar XL2.5</td>
                              <td>
                                60 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-0</td>
                              <td>1 month</td>
                              <td>After Meal</td>
                            </tr>
                            <tr>
                              <td>Metscore</td>
                              <td>
                                90 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>After Meal</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Information */}
                <div className="other-info">
                  <h4>Other information</h4>
                  <p className="text-muted mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sed dictum ligula, cursus blandit risus. Maecenas
                    eget metus non tellus dignissim aliquam ut a ex. Maecenas
                    sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae
                    lorem interdum, eu scelerisque tellus fermentum. Curabitur
                    sit amet lacinia lorem. Nullam finibus pellentesque libero.
                  </p>
                </div>
                <div className="other-info">
                  <h4>Follow Up</h4>
                  <p className="text-muted mb-0">
                    Follow u p after 3 months, Have to come on empty stomach
                  </p>
                </div>
                <div className="prescriber-info">
                  <h6>Dr. Edalin Hendry</h6>
                  <p>Dept of Cardiology</p>
                </div>
                {/* /Invoice Information */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Prescription */}
      {/*View Prescription */}
      <div className="modal fade custom-modals" id="view_bill">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="modal-body pb-0">
              <div className="prescribe-download">
                <h5>View Billing</h5>
                <ul>
                  <li>
                    <Link to="#" className="print-link">
                      <i className="isax isax-printer5" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn btn-primary prime-btn">
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="view-prescribe invoice-content">
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <ImageWithBasePath src={logo} alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="invoice-details">
                        <strong>Invoice No : </strong> #INV005
                        <br />
                        <strong>Issued:</strong> 21 Mar 2025
                      </p>
                    </div>
                  </div>
                </div>
                {/* Invoice Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="invoice-info">
                        <h6 className="customer-text">Billing From</h6>
                        <p className="invoice-details invoice-details-two">
                          Edalin Hendry <br />
                          806 Twin Willow Lane, <br />
                          Newyork, USA <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="invoice-info">
                        <h6 className="customer-text">Billing To</h6>
                        <p className="invoice-details invoice-details-two">
                          Richard Wilson <br />
                          299 Star Trek Drive
                          <br />
                          Florida, 32405, USA
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="invoice-info invoice-info2">
                        <h6 className="customer-text">Payment Method</h6>
                        <p className="invoice-details">
                          Debit Card <br />
                          XXXXXXXXXXXX-2541
                          <br />
                          HDFC Bank
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Item */}
                <div className="invoice-item invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <h6>Invoice Details</h6>
                      <div className="table-responsive">
                        <table className="invoice-table table table-bordered">
                          <thead>
                            <tr>
                              <th>Description</th>
                              <th>Quatity</th>
                              <th>VAT</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>General Consultation</td>
                              <td>1</td>
                              <td>$0</td>
                              <td>$150</td>
                            </tr>
                            <tr>
                              <td>Video Call</td>
                              <td>1</td>
                              <td>$0</td>
                              <td>$100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 ms-auto">
                      <div className="table-responsive">
                        <table className="invoice-table-two table">
                          <tbody>
                            <tr>
                              <th>Subtotal:</th>
                              <td>
                                <span>$350</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Discount:</th>
                              <td>
                                <span>-10%</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Total Amount:</th>
                              <td>
                                <span>$315</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Information */}
                <div className="other-info mb-0">
                  <h4>Other information</h4>
                  <p className="text-muted mb-0">
                    An account of the present illness, which includes the
                    circumstances surrounding the onset of recent health changes
                    and the chronology of subsequent events that have led the
                    patient to seek medicine
                  </p>
                </div>
                {/* /Invoice Information */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Prescription */}
      {/* Add Medical Records Modal */}
      <div className="modal fade custom-modals" id="add_medical_records">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add Medical Record</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">Title</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">Select Patient</label>
                      <Select
                        className="select"
                        options={options}
                        placeholder="Select Patient"
                        isClearable={true}
                        isSearchable={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">Hospital Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Symptoms <span className="text-danger">*</span>
                      </label>
                      <div className="input-block input-block-new mb-0">
                        <input
                          className="input-tags form-control"
                          id="inputBox3"
                          type="text"
                          data-role="tagsinput"
                          placeholder="Type New"
                          name="Label"
                          defaultValue="Fever, Headache"
                        />
                        <Link to="#" className="input-text save-btn">
                          Save
                        </Link>
                      </div>
                    </div>
                    <div className="form-wrap mb-0">
                      <label className="col-form-label">Report</label>
                      <div className="upload-file">
                        <input type="file" />
                        <p>Drop files or Click to upload</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <Link
                    to="#"
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Medical Records Modal */}
      {/* Add Medical Records Modal */}
      <div className="modal fade custom-modals" id="edit_medical_records">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Edit Medical Record</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Echocardiogram	"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">Select Patient</label>
                      <Select
                        className="select"
                        options={options2}
                        placeholder="Select"
                        isClearable={true}
                        isSearchable={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Start Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        defaultValue="17/03/2025"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">Hospital Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="ENT Hospital"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Symptoms <span className="text-danger">*</span>
                      </label>
                      <div className="input-block input-block-new mb-0">
                        <input
                          className="input-tags form-control"
                          id="inputBox3"
                          type="text"
                          data-role="tagsinput"
                          placeholder="Type New"
                          name="Label"
                          defaultValue="Fever, Headache"
                        />
                        <Link to="#" className="input-text save-btn">
                          Save
                        </Link>
                      </div>
                    </div>
                    <div className="form-wrap mb-0">
                      <label className="col-form-label">Report</label>
                      <div className="upload-file">
                        <input type="file" />
                        <p>Drop files or Click to upload</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <Link
                    to="#"
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Medical Records Modal */}
      {/* Add Prescription */}
      <div className="modal fade custom-modals" id="add_prescription">
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add Prescription</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <form >
              <div className="modal-body">
                <div className="patient-wrap">
                  <div className="patient-info mt-0">
                    <img src={doctordashboardprofile01} alt="img" />
                    <div className="user-patient">
                      <h6>#P0016</h6>
                      <h5>Adrian Marshall</h5>
                      <ul>
                        <li>299 Star Trek Drive, Florida, 32405, USA</li>
                      </ul>
                    </div>
                  </div>
                  <div className="patient-book patien-inv">
                    <h6>#INV0001</h6>
                    <p>1 November 2023</p>
                  </div>
                </div>
                <div className="add-prescripe-info">
                  <div className="row prescripe-cont">
                    <div className="col-xl-2 xol-lg-3 col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xl-2 xol-lg-3 col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Type</label>
                        <Select
                          className="select"
                          options={options3}
                          placeholder="Select"
                          isClearable={true}
                          isSearchable={true}
                        />
                      </div>
                    </div>
                    <div className="col-xl-2 xol-lg-3 col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Dosage</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xl-2 xol-lg-3 col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Frequency</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xl-2 xol-lg-3 col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Duration</label>
                        <Select
                          className="select"
                          options={options4}
                          placeholder="Select"
                          isClearable={true}
                          isSearchable={true}
                        />
                      </div>
                    </div>
                    <div className="col-xl-2 xol-lg-3 col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="form-wrap w-100">
                          <label className="col-form-label">Instruction</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-wrap ms-2">
                          <label className="col-form-label d-block">
                            &nbsp;
                          </label>
                          <Link to="#" className="trash">
                            <i className="isax isax-trash" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <Link to="#" className="add-prescribe">
                    Add More
                  </Link>
                </div>
                <div className="wrap-sign">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sign-wrapper">
                        <div className="upload-sign">
                          <p>Click here to sign</p>
                        </div>
                        <div className="info-name">
                          <h6>( Dr. Darren Elder )</h6>
                          <p>Signature</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <Link
                    to="#"
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button type="button" data-bs-dismiss="modal" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Prescription */}
      {/* Add Billing */}
      <div className="modal fade custom-modals" id="add_billing">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add Billing</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <form action="#">
              <div className="modal-body">
                <div className="patient-wrap">
                  <div className="patient-info">
                    <img src={doctordashboardprofile01} alt="img" />
                    <div className="user-patient">
                      <h6>#P0016</h6>
                      <h5>Adrian Marshall</h5>
                      <ul>
                        <li>Age : 42</li>
                        <li>Male</li>
                        <li>AB+ve</li>
                      </ul>
                    </div>
                  </div>
                  <div className="patient-book patien-inv">
                    <h6>#INV0001</h6>
                    <p>1 November 2023</p>
                  </div>
                </div>
                <div className="add-billing-info">
                  <div className="row bill-cont">
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          Title <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <div className="form-wrap w-100">
                          <label className="col-form-label">Amount</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-wrap ms-2">
                          <label className="col-form-label d-block">
                            &nbsp;
                          </label>
                          <Link to="#" className="trash">
                            Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <Link to="#" className="add-bill">
                    Add More
                  </Link>
                </div>
                <div className="wrap-sign">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="sign-wrapper">
                        <div className="upload-sign">
                          <p>Click here to sign</p>
                        </div>
                        <div className="info-name">
                          <h6>( Dr. Darren Elder )</h6>
                          <p>Signature</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <Link
                    to="#"
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Billing */}
    </>
  );
};

export default PatientProfile;
