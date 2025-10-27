import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import DashboardSidebar from "../dashboard/sidebar/sidebar";
import { doctor_15, doctor_thumb_02, doctorprofileimg } from "../../imagepath";

const UpComingAppointment = (props) => {
  return (
    <div className="main-wrapper">
      <Header {...props} />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Patient Appointments</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home-1">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Patient Appointments
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

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
                <div className="header-back">
                  <Link to="/patient/patient-appointments" className="back-arrow">
                    <i className="fa-solid fa-arrow-left" />
                  </Link>
                  <h3>Appointment Details</h3>
                </div>
              </div>
              <div className="appointment-details-wrap">
                {/* Appointment Detail Card */}
                <div className="appointment-wrap appointment-detail-card">
                  <ul>
                    <li>
                      <div className="patinet-information">
                        <Link to="#">
                          <img
                            src={doctorprofileimg}
                            alt="User Image"
                          />
                        </Link>
                        <div className="patient-info">
                          <p>#Apt0001</p>
                          <h6>
                            <Link to="#">Dr Edalin Hendry</Link>
                          </h6>
                          <div className="mail-info-patient">
                            <ul>
                              <li>
                                <i className="fa-solid fa-envelope" />
                                edalin@example.com
                              </li>
                              <li>
                                <i className="fa-solid fa-phone" />
                                &nbsp;+1 504 368 6874
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="appointment-info">
                      <div className="person-info">
                        <p>Type of Appointment</p>
                        <ul className="d-flex apponitment-types">
                          <li>
                            <i className="fa-solid fa-hospital text-green" />
                            Direct Visit
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="appointment-action">
                      <div className="detail-badge-info">
                        <span className="badge bg-yellow">Upcoming</span>
                      </div>
                      <div className="consult-fees">
                        <h6>Consultation Fees : $200</h6>
                      </div>
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fa-solid fa-comments" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-solid fa-xmark" />
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="detail-card-bottom-info">
                    <li>
                      <h6>Appointment Date &amp; Time</h6>
                      <span>22 Jul 2023 - 12:00 pm</span>
                    </li>
                    <li>
                      <h6>Clinic Location</h6>
                      <span>Adrian’s Dentistry</span>
                    </li>
                    <li>
                      <h6>Location</h6>
                      <span>Newyork, United States</span>
                    </li>
                    <li>
                      <h6>Visit Type</h6>
                      <span>General</span>
                    </li>
                    <li>
                      <div className="start-btn">
                        <Link to="#" className="btn btn-secondary">
                          Start Session
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Appointment Detail Card */}
                <div className="recent-appointments">
                  <h5 className="head-text">Recent Appointments</h5>
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="#">
                            <img
                              src={doctor_15}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0002</p>
                            <h6>
                              <Link to="#">Dr.Shanta Nesmith</Link>
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
                          <li>Chat</li>
                        </ul>
                      </li>
                      <li className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            shanta@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            &nbsp;+1 504 368 6874
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fa-solid fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
                  {/* Appointment List */}
                  <div className="appointment-wrap">
                    <ul>
                      <li>
                        <div className="patinet-information">
                          <Link to="#">
                            <img
                              src={doctor_thumb_02}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <p>#Apt0003</p>
                            <h6>
                              <Link to="#">Dr.John Ewel</Link>
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
                            john@example.com
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            &nbsp;+1 749 104 6291
                          </li>
                        </ul>
                      </li>
                      <li className="appointment-action">
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fa-solid fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  {/* /Appointment List */}
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

export default UpComingAppointment;
