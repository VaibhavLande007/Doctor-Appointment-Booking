/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useRef } from "react";
import DoctorSidebar from "../sidebar";
import Header from "../../header";
import { doctordashboardclient01, doctordashboardclient02, doctordashboardprofile01, doctordashboardprofile02, doctordashboardprofile04, doctordashboardprofile05, doctordashboardprofile3 } from "../../imagepath";
import Chart from 'react-apexcharts';
import DoctorFooter from "../../common/doctorFooter";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const DoctorDashboard = (props) => {

  // revenue chart
  const chartRef1 = useRef(null);
  useEffect(() => {
    if (chartRef1.current) {
      const sCol = {
        chart: {
          height: 220,
          type: 'bar',
          stacked: true,
          toolbar: {
            show: false,
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
            endingShape: 'rounded',
            borderRadius: '5',
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1
        },
        series: [{
          name: 'High',
          color: '#0E82FD',
          data: [50, 40, 15, 45, 35, 48, 65]
        }],
        xaxis: {
          categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + "k"
            }
          }
        }
      };

      const chart = new ApexCharts(chartRef1.current, sCol);
      chart.render();
    }
  }, []);

  //appoinment chart
  const chartRef = useRef(null);
  useEffect(() => {
    const sCol = {
      chart: {
        height: 220,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          endingShape: 'rounded',
          borderRadius: '5',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 1,
      },
      series: [{
        name: 'High',
        color: '#0E82FD',
        data: [40, 20, 30, 60, 90, 40, 110]
      }],
      xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + "k"
          }
        }
      }
    };

    if (chartRef.current) {
      const chart = new ApexCharts(chartRef.current, sCol);
      chart.render();
    }
  }, []);

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
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                  <h2 className="breadcrumb-title">Dashboard</h2>
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
              <div className="stickybar">
                {/* Profile Sidebar */}
                <DoctorSidebar />
                {/* /Profile Sidebar */}
              </div>
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-xl-4 d-flex">
                  <div className="dashboard-box-col w-100">
                    <div className="dashboard-widget-box">
                      <div className="dashboard-content-info">
                        <h6>Total Patient</h6>
                        <h4>978</h4>
                        <span className="text-success">
                          <i className="fa-solid fa-arrow-up" />
                          15% From Last Week
                        </span>
                      </div>
                      <div className="dashboard-widget-icon">
                        <span className="dash-icon-box">
                          <i className="fa-solid fa-user-injured" />
                        </span>
                      </div>
                    </div>
                    <div className="dashboard-widget-box">
                      <div className="dashboard-content-info">
                        <h6>Patients Today</h6>
                        <h4>80</h4>
                        <span className="text-danger">
                          <i className="fa-solid fa-arrow-up" />
                          15% From Yesterday
                        </span>
                      </div>
                      <div className="dashboard-widget-icon">
                        <span className="dash-icon-box">
                          <i className="fa-solid fa-user-clock" />
                        </span>
                      </div>
                    </div>
                    <div className="dashboard-widget-box">
                      <div className="dashboard-content-info">
                        <h6>Appointments Today</h6>
                        <h4>50</h4>
                        <span className="text-success">
                          <i className="fa-solid fa-calendar-days" />
                          20% From Yesterday
                        </span>
                      </div>
                      <div className="dashboard-widget-icon">
                        <span className="dash-icon-box">
                          <i className="fa-solid fa-calendar-days" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 d-flex">
                  <div className="dashboard-card w-100">
                    <div className="dashboard-card-head">
                      <div className="header-title">
                        <h5>Appointment</h5>
                      </div>
                      <div className="dropdown header-dropdown">
                        <Link
                          className="dropdown-toggle nav-tog"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          Last 7 Days
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item">
                            Today
                          </Link>
                          <Link to="#" className="dropdown-item">
                            This Month
                          </Link>
                          <Link to="#" className="dropdown-item">
                            Last 7 Days
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card-body">
                      <div className="table-responsive">
                        <table className="table dashboard-table">
                          <tbody>
                            <tr>
                              <td>
                                <div className="patient-info-profile">
                                  <Link
                                    to="/doctor/appointments"
                                    className="table-avatar"
                                  >
                                    <img
                                      src={doctordashboardprofile01}
                                      alt="Img"
                                    />
                                  </Link>
                                  <div className="patient-name-info">
                                    <span>#Apt0001</span>
                                    <h5>
                                      <Link to="/doctor/appointments">
                                        Adrian Marshall
                                      </Link>
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="appointment-date-created">
                                  <h6>11 Nov 2025 10.45 AM</h6>
                                  <span className="badge table-badge">General</span>
                                </div>
                              </td>
                              <td>
                                <div className="apponiment-actions d-flex align-items-center">
                                  <Link to="#" className="text-success me-2">
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link to="#" className="text-danger">
                                    <i className="fa-solid fa-xmark" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="patient-info-profile">
                                  <Link
                                    to="/doctor/appointments"
                                    className="table-avatar"
                                  >
                                    <img
                                      src={doctordashboardprofile02}
                                      alt="Img"
                                    />
                                  </Link>
                                  <div className="patient-name-info">
                                    <span>#Apt0002</span>
                                    <h5>
                                      <Link to="/doctor/appointments">Kelly Stevens</Link>
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="appointment-date-created">
                                  <h6>10 Nov 2025 11.00 AM</h6>
                                  <span className="badge table-badge">
                                    Clinic Consulting
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="apponiment-actions d-flex align-items-center">
                                  <Link to="#" className="text-success me-2">
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link to="#" className="text-danger">
                                    <i className="fa-solid fa-xmark" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="patient-info-profile">
                                  <Link
                                    to="/doctor/appointments"
                                    className="table-avatar"
                                  >
                                    <img
                                      src={doctordashboardprofile3}
                                      alt="Img"
                                    />
                                  </Link>
                                  <div className="patient-name-info">
                                    <span>#Apt0003</span>
                                    <h5>
                                      <Link to="/doctor/appointments">
                                        Samuel Anderson
                                      </Link>
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="appointment-date-created">
                                  <h6>03 Nov 2025 02.00 PM</h6>
                                  <span className="badge table-badge">General</span>
                                </div>
                              </td>
                              <td>
                                <div className="apponiment-actions d-flex align-items-center">
                                  <Link to="#" className="text-success me-2">
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link to="#" className="text-danger">
                                    <i className="fa-solid fa-xmark" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="patient-info-profile">
                                  <Link
                                    to="/doctor/appointments"
                                    className="table-avatar"
                                  >
                                    <img
                                      src={doctordashboardprofile04}
                                      alt="Img"
                                    />
                                  </Link>
                                  <div className="patient-name-info">
                                    <span>#Apt0004</span>
                                    <h5>
                                      <Link to="/doctor/appointments">
                                        Catherine Griffin
                                      </Link>
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="appointment-date-created">
                                  <h6>01 Nov 2025 04.00 PM</h6>
                                  <span className="badge table-badge">
                                    Clinic Consulting
                                  </span>
                                </div>
                              </td>
                              <td>
                                <div className="apponiment-actions d-flex align-items-center">
                                  <Link to="#" className="text-success me-2">
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link to="#" className="text-danger">
                                    <i className="fa-solid fa-xmark" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="patient-info-profile">
                                  <Link
                                    to="/doctor/appointments"
                                    className="table-avatar"
                                  >
                                    <img
                                      src={doctordashboardprofile05}
                                      alt="Img"
                                    />
                                  </Link>
                                  <div className="patient-name-info">
                                    <span>#Apt0005</span>
                                    <h5>
                                      <Link to="/doctor/appointments">
                                        Robert Hutchinson
                                      </Link>
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="appointment-date-created">
                                  <h6>28 Oct 2025 05.30 PM</h6>
                                  <span className="badge table-badge">General</span>
                                </div>
                              </td>
                              <td>
                                <div className="apponiment-actions d-flex align-items-center">
                                  <Link to="#" className="text-success me-2">
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link to="#" className="text-danger">
                                    <i className="fa-solid fa-xmark" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 d-flex">
                  <div className="dashboard-chart-col w-100">
                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head border-0">
                        <div className="header-title">
                          <h5>Weekly Overview</h5>
                        </div>
                        <div className="chart-create-date">
                          <h6>Mar 14 - Mar 21</h6>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="chart-tab">
                          <ul
                            className="nav nav-pills product-licence-tab"
                            id="pills-tab2"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-revenue-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-revenue"
                                type="button"
                                role="tab"
                                aria-controls="pills-revenue"
                                aria-selected="false"
                              >
                                Revenue
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-appointment-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-appointment"
                                type="button"
                                role="tab"
                                aria-controls="pills-appointment"
                                aria-selected="true"
                              >
                                Appointments
                              </button>
                            </li>
                          </ul>
                          <div
                            className="tab-content w-100"
                            id="v-pills-tabContent"
                          >
                            <div
                              className="tab-pane fade show active"
                              id="pills-revenue"
                              role="tabpanel"
                              aria-labelledby="pills-revenue-tab"
                            >
                              <div ref={chartRef1} id="revenue-chart" />
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-appointment"
                              role="tabpanel"
                              aria-labelledby="pills-appointment-tab"
                            >
                              <div ref={chartRef} id="appointment-chart" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Recent Patients</h5>
                        </div>
                        <div className="card-view-link">
                          <Link to="/doctor/my-patients">View All</Link>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="d-flex recent-patient-grid-boxes">
                          <div className="recent-patient-grid">
                            <Link to="pages/patient-details" className="patient-img">
                              <img
                                src={doctordashboardprofile01}
                                alt="Img"
                              />
                            </Link>
                            <h5>
                              <Link to="pages/patient-details">Adrian Marshall</Link>
                            </h5>
                            <span>Patient ID :&nbsp;P0001</span>
                            <div className="date-info">
                              <p>Last Appointment 15 Mar 2025</p>
                            </div>
                          </div>
                          <div className="recent-patient-grid">
                            <Link to="pages/patient-details" className="patient-img">
                              <img
                                src={doctordashboardprofile02}
                                alt="Img"
                              />
                            </Link>
                            <h5>
                              <Link to="pages/patient-details">Kelly Stevens</Link>
                            </h5>
                            <span>Patient ID :&nbsp;P0002</span>
                            <div className="date-info">
                              <p>Last Appointment 13 Mar 2025</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 d-flex">
                  <div className="dashboard-main-col w-100">
                    <div className="upcoming-appointment-card">
                      <div className="title-card">
                        <h5>Upcoming Appointment</h5>
                      </div>
                      <div className="upcoming-patient-info">
                        <div className="info-details">
                          <span className="img-avatar">
                            <img
                              src={doctordashboardprofile01}
                              alt="Img"
                            />
                          </span>
                          <div className="name-info">
                            <span>#Apt0001</span>
                            <h6>Adrian Marshall</h6>
                          </div>
                        </div>
                        <div className="date-details">
                          <span>General visit</span>
                          <h6>Today, 10:45 AM</h6>
                        </div>
                      </div>
                      <div className="appointment-card-footer">
                        <h5>
                          <i className="fa-solid fa-video" />
                          Video Appointment
                        </h5>
                        <div className="btn-appointments">
                          <Link to="/doctor/chat-doctor" className="btn">
                            Chat Now
                          </Link>
                          <Link to="/doctor/doctor-appointment-start" className="btn">
                            Start Appointment
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Recent Invoices</h5>
                        </div>
                        <div className="card-view-link">
                          <Link to="/doctor/invoices">View All</Link>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="table-responsive">
                          <table className="table dashboard-table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="patient-info-profile">
                                    <Link
                                      to="/doctor/invoices"
                                      className="table-avatar"
                                    >
                                      <img
                                        src={doctordashboardprofile01}
                                        alt="Img"
                                      />
                                    </Link>
                                    <div className="patient-name-info">
                                      <h5>
                                        <Link to="/doctor/invoices">Adrian</Link>
                                      </h5>
                                      <span>#Apt0001</span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Amount</span>
                                    <h6>$450</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Paid On</span>
                                    <h6>11 Nov 2025</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="apponiment-view d-flex align-items-center">
                                    <Link to="/pages/invoice-view">
                                      <i className="fa-solid fa-eye" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="patient-info-profile">
                                    <Link to="#" className="table-avatar">
                                      <img
                                        src={doctordashboardprofile02}
                                        alt="Img"
                                      />
                                    </Link>
                                    <div className="patient-name-info">
                                      <h5>
                                        <Link to="#">Kelly</Link>
                                      </h5>
                                      <span>#Apt0002</span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Paid On</span>
                                    <h6>10 Nov 2025</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Amount</span>
                                    <h6>$500</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="apponiment-view d-flex align-items-center">
                                    <Link to="#">
                                      <i className="fa-solid fa-eye" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="patient-info-profile">
                                    <Link to="#" className="table-avatar">
                                      <img
                                        src={doctordashboardprofile3}
                                        alt="Img"
                                      />
                                    </Link>
                                    <div className="patient-name-info">
                                      <h5>
                                        <Link to="#">Samuel</Link>
                                      </h5>
                                      <span>#Apt0003</span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Paid On</span>
                                    <h6>03 Nov 2025</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Amount</span>
                                    <h6>$320</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="apponiment-view d-flex align-items-center">
                                    <Link to="#">
                                      <i className="fa-solid fa-eye" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="patient-info-profile">
                                    <Link to="#" className="table-avatar">
                                      <img
                                        src={doctordashboardprofile04}
                                        alt="Img"
                                      />
                                    </Link>
                                    <div className="patient-name-info">
                                      <h5>
                                        <Link to="#">Catherine</Link>
                                      </h5>
                                      <span>#Apt0004</span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Paid On</span>
                                    <h6>01 Nov 2025</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Amount</span>
                                    <h6>$240</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="apponiment-view d-flex align-items-center">
                                    <Link to="#">
                                      <i className="fa-solid fa-eye" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="patient-info-profile">
                                    <Link to="#" className="table-avatar">
                                      <img
                                        src={doctordashboardprofile05}
                                        alt="Img"
                                      />
                                    </Link>
                                    <div className="patient-name-info">
                                      <h5>
                                        <Link to="#">Robert</Link>
                                      </h5>
                                      <span>#Apt0005</span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Paid On</span>
                                    <h6>28 Oct 2025</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="appointment-date-created">
                                    <span className="paid-text">Amount</span>
                                    <h6>$380</h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="apponiment-view d-flex align-items-center">
                                    <Link to="#">
                                      <i className="fa-solid fa-eye" />
                                    </Link>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 d-flex">
                  <div className="dashboard-card w-100">
                    <div className="dashboard-card-head">
                      <div className="header-title">
                        <h5>Notifications</h5>
                      </div>
                      <div className="card-view-link">
                        <Link to="#">View All</Link>
                      </div>
                    </div>
                    <div className="dashboard-card-body">
                      <div className="table-responsive">
                        <table className="table dashboard-table">
                          <tbody>
                            <tr>
                              <td>
                                <div className="table-noti-info">
                                  <div className="table-noti-icon color-violet">
                                    <i className="fa-solid fa-bell" />
                                  </div>
                                  <div className="table-noti-message">
                                    <h6>
                                      <Link to="#">
                                        Booking Confirmed on{" "}
                                        <span> 21 Mar 2025 </span> 10:30 AM
                                      </Link>
                                    </h6>
                                    <span className="message-time">Just Now</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="table-noti-info">
                                  <div className="table-noti-icon color-blue">
                                    <i className="fa-solid fa-star" />
                                  </div>
                                  <div className="table-noti-message">
                                    <h6>
                                      <Link to="#">
                                        You have a <span> New </span> Review for
                                        your Appointment{" "}
                                      </Link>
                                    </h6>
                                    <span className="message-time">5 Days ago</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="table-noti-info">
                                  <div className="table-noti-icon color-red">
                                    <i className="fa-solid fa-calendar-check" />
                                  </div>
                                  <div className="table-noti-message">
                                    <h6>
                                      <Link to="#">
                                        You have Appointment with{" "}
                                        <span> Ahmed </span> by 01:20 PM{" "}
                                      </Link>
                                    </h6>
                                    <span className="message-time">12:55 PM</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="table-noti-info">
                                  <div className="table-noti-icon color-yellow">
                                    <i className="fa-solid fa-money-bill-1-wave" />
                                  </div>
                                  <div className="table-noti-message">
                                    <h6>
                                      <Link to="#">
                                        Sent an amount of <span> $200 </span> for an
                                        Appointment by 01:20 PM{" "}
                                      </Link>
                                    </h6>
                                    <span className="message-time">2 Days ago</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="table-noti-info">
                                  <div className="table-noti-icon color-blue">
                                    <i className="fa-solid fa-star" />
                                  </div>
                                  <div className="table-noti-message">
                                    <h6>
                                      <Link to="#">
                                        You have a <span> New </span> Review for
                                        your Appointment{" "}
                                      </Link>
                                    </h6>
                                    <span className="message-time">5 Days ago</span>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 d-flex">
                  <div className="dashboard-card w-100">
                    <div className="dashboard-card-head">
                      <div className="header-title">
                        <h5>Clinics &amp; Availability</h5>
                      </div>
                    </div>
                    <div className="dashboard-card-body">
                      <div className="clinic-available">
                        <div className="clinic-head">
                          <div className="clinic-info">
                            <span className="clinic-img">
                              <img
                                src={doctordashboardclient02}
                                alt="Img"
                              />
                            </span>
                            <h6>Sofi’s Clinic</h6>
                          </div>
                          <div className="clinic-charge">
                            <span>$900</span>
                          </div>
                        </div>
                        <div className="available-time">
                          <ul>
                            <li>
                              <span>Tue :</span>
                              07:00 AM - 09:00 PM
                            </li>
                            <li>
                              <span>Wed : </span>
                              07:00 AM - 09:00 PM
                            </li>
                          </ul>
                          <div className="change-time">
                            <Link to="#">Change </Link>
                          </div>
                        </div>
                      </div>
                      <div className="clinic-available mb-0">
                        <div className="clinic-head">
                          <div className="clinic-info">
                            <span className="clinic-img">
                              <img
                                src={doctordashboardclient01}
                                alt="Img"
                              />
                            </span>
                            <h6>The Family Dentistry Clinic</h6>
                          </div>
                          <div className="clinic-charge">
                            <span>$600</span>
                          </div>
                        </div>
                        <div className="available-time">
                          <ul>
                            <li>
                              <span>Sat :</span>
                              07:00 AM - 09:00 PM
                            </li>
                            <li>
                              <span>Tue : </span>
                              07:00 AM - 09:00 PM
                            </li>
                          </ul>
                          <div className="change-time">
                            <Link to="#">Change </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default DoctorDashboard;
