/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
// import { Tab, Tabs } from "react-bootstrap";

import Footer from "../../footer";
import Header from "../../header.jsx";
import DoctorFooter from "../../common/doctorFooter/index.jsx";
import { doctor_14, doctor_15, doctor_17, doctor_thumb_01, doctor_thumb_03, doctor_thumb_05, doctor_thumb_07, doctor_thumb_08, doctor_thumb_09, doctor_thumb_13, doctor_thumb_21, doctordashboardprofile06, doctordashboardprofile07, doctordashboardprofile08, doctorprofileimg, doctorthumb02, doctorthumb11, patient20, patient21 } from "../../imagepath.jsx";
import Chart from 'react-apexcharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ImageWithBasePath from '../../../../core/img/imagewithbasebath.jsx';
import PatientModal from './modal/patientModal.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Dashboard = (props) => {
  const TextContent = () => <p>Last Visit 25 Mar 2025</p>;

  const [count, setCount] = useState(1, 2, 3, 4);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     key: 1,
  //   };
  //   this.handleSelect = this.handleSelect.bind(this);
  // }
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        series: [{
          data: [140, 100, 180, 130, 100, 130]
        }],
        chart: {
          height: 300,
          type: 'bar',
          events: {
            click: function (chart, w, e) {
              // Handle click event
            }
          }
        },
        fill: {
          colors: ['#0E82FD']
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        crosshairs: {
          show: false
        }
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      // Cleanup function
      return () => {
        chart.destroy();
      };
    }
  }, []);

  const [options1, setOptions1] = useState(null); // Initialize options1 as null

  const chartContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        { data: [90, 60, 30, 60, 90, 70, 70] },
        { data: [110, 90, 40, 120, 130, 130, 130] }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      fill: {
        opacity: 1,
        colors: ['#0E82FD']
      },
      states: {
        hover: {
          color: '#00008B'
        }
      }
    };

    setOptions1(options); // Set options1 state

    if (chartContainerRef.current) {
      const chart = new ApexCharts(chartContainerRef.current, options);
      chart.render();
    }

    return () => {
      // Cleanup code if needed
    };
  }, []);


  const [animate, setAnimate] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const elementPos = circleRef.current.getBoundingClientRect().top;
        const topOfWindow = window.scrollY;
        const percent = parseFloat(circleRef.current.getAttribute('data-percent'));
        const animate = circleRef.current.dataset.animate === 'true';

        if (elementPos < topOfWindow + window.innerHeight - 30 && !animate) {
          circleRef.current.dataset.animate = 'true';
          setAnimate(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-nav slide-nav text-end nav-control">
      <button type="button" role="presentation" className="owl-next" onClick={onClick}>
        <i className="fas fa-chevron-right" />
      </button>
    </div>

  );

  const CustomPrevArrow = ({ className, onClick }) => (
    <div className="owl-nav slide-nav text-end nav-control">
      <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
        <i className="fas fa-chevron-left" />
      </button>
    </div>
  );

  const Appointments = {
    infinite: false, // Loop disabled
    speed: 2000, // Match smartSpeed
    autoplay: false,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Pastappointment = {
    infinite: true, // Matches loop: true
    slidesToShow: 1, // Default to 1 item
    slidesToScroll: 1, // Scroll one item at a time
    arrows: true, // Matches nav: true
    dots: false, // Matches dots: false
    autoplay: false, // Not mentioned in the original code
    speed: 500, // Adjust speed as needed
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
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
                      Patient
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                  <h2 className="breadcrumb-title">Patient Dashboard</h2>
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
            {/* Profile Sidebar */}
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="stickybar">
                {/* Profile Sidebar */}
                <DashboardSidebar />
                {/* /Profile Sidebar */}
              </div>
            </div>
            {/* / Profile Sidebar */}
            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>Dashboard</h3>
                <ul className='header-list-btns'>
                  <li>
                    <div className="dropdown header-dropdown">
                      <Link
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        to="#"
                      >
                        <img
                          src={doctordashboardprofile06}
                          className="avatar dropdown-avatar"
                          alt="Img"
                        />
                        Hendrita
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          <img
                            src={doctordashboardprofile06}
                            className="avatar dropdown-avatar"
                            alt="Img"
                          />
                          Hendrita
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <img
                            src={doctordashboardprofile08}
                            className="avatar dropdown-avatar"
                            alt="Img"
                          />
                          Laura
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <img
                            src={doctordashboardprofile07}
                            className="avatar dropdown-avatar"
                            alt="Img"
                          />
                          Mathew
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row">
                <div className="col-xl-8 d-flex">
                  <div className="dashboard-card w-100">
                    <div className="dashboard-card-head">
                      <div className="header-title">
                        <h5>Health Records</h5>
                      </div>

                    </div>
                    <div className="dashboard-card-body">
                      <div className="row">
                        <div className="col-sm-7">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="health-records icon-orange">
                                <span>
                                  <i className="fa-solid fa-heart" />
                                  Heart Rate
                                </span>
                                <h3>
                                  140 Bpm <sup> 2%</sup>
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="health-records icon-amber">
                                <span>
                                  <i className="fa-solid fa-temperature-high" />
                                  Body Temprature
                                </span>
                                <h3>37.5 C</h3>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="health-records icon-dark-blue">
                                <span>
                                  <i className="fa-solid fa-notes-medical" />
                                  Glucose Level
                                </span>
                                <h3>
                                  70 - 90<sup> 6%</sup>
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="health-records icon-blue">
                                <span>
                                  <i className="fa-solid fa-highlighter" />
                                  SPo2
                                </span>
                                <h3>96%</h3>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="health-records icon-red">
                                <span>
                                  <i className="fa-solid fa-syringe" />
                                  Blood Pressure
                                </span>
                                <h3>
                                  100 mg/dl<sup> 2%</sup>
                                </h3>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="health-records icon-purple">
                                <span>
                                  <i className="fa-solid fa-user-pen" />
                                  BMI{" "}
                                </span>
                                <h3>20.1 kg/m2</h3>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="report-gen-date">
                                <p>
                                  Report generated on last visit : 25 Mar 2025{" "}
                                  <span>
                                    <i className="fa-solid fa-copy" />
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="chart-over-all-report">
                            <h5>Overall Report</h5>
                            <div className="circle-bar circle-bar3 report-chart">
                              <div className="circle-graph3" ref={circleRef} data-animate="false" data-percent="66">
                                {animate && (
                                  <CircularProgressbar
                                    value={parseFloat(circleRef.current.getAttribute('data-percent'))}
                                    text="Last Visit 25 Mar 2025"
                                    strokeWidth={7}
                                    styles={buildStyles({
                                      textColor: '#465D7C', // Black color
                                      pathColor: '#04BD6C',
                                      textSize: '7px', // Adjust font size here
                                    })}
                                    className="health-percentage" // Add the class name here
                                  />
                                )}
                              </div>
                            </div>
                            <span className="health-percentage">
                              Your health is 95% Normal
                            </span>
                            <Link
                              to="/patient/medicaldetails"
                              className="btn btn-dark w-100 rounded-pill"
                            >
                              View Details
                              <i className="fa-solid fa-chevron-right ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 d-flex">
                  <div className="favourites-dashboard w-100">
                    <div className="book-appointment-head">
                      <h3>
                        <span>Book a new</span>Appointment
                      </h3>
                      <span className="add-icon">
                        <Link to="#">
                          <i className="fa-solid fa-circle-plus" />
                        </Link>
                      </span>
                    </div>
                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Favourites</h5>
                        </div>
                        <div className="card-view-link">
                          <Link to="/patient/favourites">View All</Link>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="doctor-fav-list">
                          <div className="doctor-info-profile">
                            <Link to="#" className="table-avatar">
                              <img
                                src={doctorprofileimg}
                                alt="Img"
                              />
                            </Link>
                            <div className="doctor-name-info">
                              <h5>
                                <Link to="#">Dr. Edalin</Link>
                              </h5>
                              <span>Endodontists</span>
                            </div>
                          </div>
                          <Link to="#" className="cal-plus-icon">
                            <i className="isax isax-calendar5"></i>
                          </Link>
                        </div>
                        <div className="doctor-fav-list">
                          <div className="doctor-info-profile">
                            <Link to="#" className="table-avatar">
                              <img
                                src={doctorthumb11}
                                alt="Img"
                              />
                            </Link>
                            <div className="doctor-name-info">
                              <h5>
                                <Link to="#">Dr. Maloney</Link>
                              </h5>
                              <span>Cardiologist</span>
                            </div>
                          </div>
                          <Link to="#" className="cal-plus-icon">
                            <i className="isax isax-calendar5"></i>
                          </Link>
                        </div>
                        <div className="doctor-fav-list">
                          <div className="doctor-info-profile">
                            <Link to="#" className="table-avatar">
                              <img
                                src={doctor_14}
                                alt="Img"
                              />
                            </Link>
                            <div className="doctor-name-info">
                              <h5>
                                <Link to="#">Dr. Wayne&nbsp;</Link>
                              </h5>
                              <span>Dental Specialist</span>
                            </div>
                          </div>
                          <Link to="#" className="cal-plus-icon">
                            <i className="isax isax-calendar5"></i>
                          </Link>
                        </div>
                        <div className="doctor-fav-list">
                          <div className="doctor-info-profile">
                            <Link to="#" className="table-avatar">
                              <img
                                src={doctor_15}
                                alt="Img"
                              />
                            </Link>
                            <div className="doctor-name-info">
                              <h5>
                                <Link to="#">Dr. Marla</Link>
                              </h5>
                              <span>Endodontists</span>
                            </div>
                          </div>
                          <Link to="#" className="cal-plus-icon">
                            <i className="isax isax-calendar5"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 d-flex">
                  <div className="dashboard-main-col w-100">
                    <div className="dashboard-card dashboard-slider w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>
                            <span className="card-head-icon">
                              <i className="fa-solid fa-calendar-days" />
                            </span>
                            Appointment
                          </h5>
                        </div>
                        <div className="card-view-link">
                          <div className="owl-nav slide-nav-patient text-end nav-control" />
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="apponiment-dates">

                          <ul className="appointment-calender-slider common-slider slick-margins-15 p-0">
                            <Slider {...Appointments}>
                              <li>
                                <Link to="#">
                                  <h5>
                                    19 <span>Mon</span>
                                  </h5>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <h5>
                                    20 <span>Mon</span>
                                  </h5>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="available-date">
                                  <h5>
                                    21 <span>Tue</span>
                                  </h5>
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="available-date">
                                  <h5>
                                    22 <span>Wed</span>
                                  </h5>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <h5>
                                    23 <span>Thu</span>
                                  </h5>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <h5>
                                    24 <span>Fri</span>
                                  </h5>
                                </Link>
                              </li>
                              <li>
                                <Link to="#">
                                  <h5>
                                    25 <span>Sat</span>
                                  </h5>
                                </Link>
                              </li>
                            </Slider>
                          </ul>

                          <div className="appointment-dash-card">
                            <div className="doctor-fav-list">
                              <div className="doctor-info-profile">
                                <Link to="#" className="table-avatar">
                                  <img
                                    src={doctorprofileimg}
                                    alt="Img"
                                  />
                                </Link>
                                <div className="doctor-name-info">
                                  <h5>
                                    <Link to="#">Dr.Edalin Hendry</Link>
                                  </h5>
                                  <span>Dentist</span>
                                </div>
                              </div>
                              <Link to="#" className="cal-plus-icon">
                                <i className="fa-solid fa-hospital" />
                              </Link>
                            </div>
                            <div className="date-time">
                              <p>
                                <i className="fa-solid fa-clock" />
                                21 Mar 2025 - 10:30 PM{" "}
                              </p>
                            </div>
                            <div className="card-btns">
                              <Link to="/patient/patient-chat" className="btn btn-gray">
                                <i className="fa-solid fa-comment-dots" />
                                Chat Now
                              </Link>
                              <Link
                                to="/patient/patient-appointments"
                                className="btn btn-outline-primary"
                              >
                                <i className="fa-solid fa-calendar-check" />
                                Attend
                              </Link>
                            </div>
                          </div>
                          <div className="appointment-dash-card">
                            <div className="doctor-fav-list">
                              <div className="doctor-info-profile">
                                <Link to="#" className="table-avatar">
                                  <img
                                    src={doctor_17}
                                    alt="Img"
                                  />
                                </Link>
                                <div className="doctor-name-info">
                                  <h5>
                                    <Link to="#">Dr.Juliet Gabriel</Link>
                                  </h5>
                                  <span>Cardiologist</span>
                                </div>
                              </div>
                              <Link to="#" className="cal-plus-icon">
                                <i className="fa-solid fa-video" />
                              </Link>
                            </div>
                            <div className="date-time">
                              <p>
                                <i className="fa-solid fa-clock" />
                                22 Mar 2025 - 10:30 PM
                              </p>
                            </div>
                            <div className="card-btns">
                              <Link to="/patient/patient-chat" className="btn btn-gray">
                                <i className="fa-solid fa-comment-dots" />
                                Chat Now
                              </Link>
                              <Link
                                to="/patient/patient-appointments"
                                className="btn btn-outline-primary"
                              >
                                <i className="fa-solid fa-calendar-check" />
                                Attend
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                                      <span className="message-time">
                                        5 Days ago
                                      </span>
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
                                          Sent an amount of <span> $200 </span> for
                                          an Appointment by 01:20 PM{" "}
                                        </Link>
                                      </h6>
                                      <span className="message-time">
                                        2 Days ago
                                      </span>
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
                                      <span className="message-time">
                                        5 Days ago
                                      </span>
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
                </div>
                <div className="col-xl-7 d-flex">
                  <div className="dashboard-main-col w-100">
                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Analytics</h5>
                        </div>
                        <div className="dropdown-links d-flex align-items-center flex-wrap">
                          <div className="dropdown header-dropdown header-dropdown-two">
                            <Link
                              className="dropdown-toggle"
                              data-bs-toggle="dropdown"
                              to="#"
                            >
                              Mar 14 - Mar 21
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item">
                                This Week
                              </Link>
                              <Link to="#" className="dropdown-item">
                                This Month
                              </Link>
                              <Link to="#" className="dropdown-item">
                                This Year
                              </Link>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="dashboard-card-body">
                        <div className="chart-tabs">
                          <ul className="nav" role="tablist">
                            <li className="nav-item" role="presentation">
                              <Link
                                className="nav-link active"
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#heart-rate"
                                aria-selected="false"
                                role="tab"
                                tabIndex={-1}
                              >
                                Heart Rate
                              </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                              <Link
                                className="nav-link "
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#blood-pressure"
                                aria-selected="true"
                                role="tab"
                              >
                                Blood Pressure
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-content pt-0">
                          {/* Chart */}
                          <div
                            className="tab-pane fade active show"
                            id="heart-rate"
                            role="tabpanel"
                          >

                            <div ref={chartRef} id="heart-rate-chart" />
                          </div>
                          {/* /Chart */}
                          {/* Chart */}
                          <div
                            className="tab-pane fade"
                            id="blood-pressure"
                            role="tabpanel"
                          >
                            <div id="blood-pressure-chart" ref={chartContainerRef}>
                              {options1 && <Chart options={options1} series={options1.series} type="bar" height={350} />}
                            </div>

                          </div>
                          {/* /Chart */}
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card dashboard-slider flex-fill">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Past Appointments</h5>
                        </div>
                        <div className="card-view-link">
                          <div className="owl-nav slide-nav2 text-end nav-control" />
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="past-appointments-slider common-slider">
                          <Slider {...Pastappointment}>
                            <div className="appointment-dash-card past-appointment mt-0">
                              <div className="doctor-fav-list">
                                <div className="doctor-info-profile">
                                  <Link to="#" className="table-avatar">
                                    <ImageWithBasePath
                                      src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                                      alt="Img"
                                    />
                                  </Link>
                                  <div className="doctor-name-info">
                                    <h5>
                                      <Link to="#">Dr.Edalin Hendry</Link>
                                    </h5>
                                    <span>Dental Specialist</span>
                                  </div>
                                </div>
                                <span className="bg-orange badge">
                                  <i className="isax isax-video5 me-1" />
                                  30 Min
                                </span>
                              </div>
                              <div className="appointment-date-info">
                                <h6>Thursday, Mar 2025</h6>
                                <ul className='p-0'>
                                  <li>
                                    <span>
                                      <i className="isax isax-clock5" />
                                    </span>
                                    Time : 04:00 PM - 04:30 PM (30 Min)
                                  </li>
                                  <li>
                                    <span>
                                      <i className="isax isax-location5" />
                                    </span>
                                    Newyork, United States
                                  </li>
                                </ul>
                              </div>
                              <div className="card-btns">
                                <Link
                                  to="/patient/patient-appointments"
                                  className="btn btn-md btn-outline-primary ms-0 me-3 rounded-pill"
                                >
                                  Reschedule
                                </Link>
                                <Link
                                  to="/patient/upcoming-appointment"
                                  className="btn btn-md btn-primary-gradient rounded-pill"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                            <div className="appointment-dash-card past-appointment mt-0">
                              <div className="doctor-fav-list">
                                <div className="doctor-info-profile">
                                  <Link to="#" className="table-avatar">
                                    <ImageWithBasePath src="assets/img/doctors/doctor-17.jpg" alt="Img" />
                                  </Link>
                                  <div className="doctor-name-info">
                                    <h5>
                                      <Link to="#">Dr.Juliet Gabriel</Link>
                                    </h5>
                                    <span>Cardiologist</span>
                                  </div>
                                </div>
                                <span className="bg-orange badge">
                                  <i className="isax isax-video5 me-1" />
                                  30 Min
                                </span>
                              </div>
                              <div className="appointment-date-info">
                                <h6>Friday, Mar 2025</h6>
                                <ul className='p-0'>
                                  <li>
                                    <span>
                                      <i className="isax isax-clock5" />
                                    </span>
                                    Time : 03:00 PM - 03:30 PM (30 Min)
                                  </li>
                                  <li>
                                    <span>
                                      <i className="isax isax-location5" />
                                    </span>
                                    Newyork, United States
                                  </li>
                                </ul>
                              </div>
                              <div className="card-btns">
                                <Link
                                  to="/patient/patient-appointments"
                                  className="btn btn-md btn-outline-primary ms-0 me-3 rounded-pill"
                                >
                                  Reschedule
                                </Link>
                                <Link
                                  to="/patient/medicaldetails"
                                  className="btn btn-md btn-primary-gradient rounded-pill"
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </Slider>

                        </div>
                      </div>
                    </div>

                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Dependant</h5>
                        </div>
                        <div className="card-view-link">
                          <Link
                            to="#"
                            className="add-new"
                            data-bs-toggle="modal"
                            data-bs-target="#add_dependent"
                          >
                            <i className="fa-solid fa-circle-plus me-2" />
                            Add New
                          </Link>
                          <Link to="/patient/dependent">View All</Link>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="doctor-fav-list">
                          <div className="doctor-info-profile">
                            <Link to="#" className="table-avatar">
                              <img
                                src={patient20}
                                alt="Img"
                              />
                            </Link>
                            <div className="doctor-name-info">
                              <h5>
                                <Link to="#">Laura</Link>
                              </h5>
                              <span>Mother - 58 years 20 days</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="cal-plus-icon me-2">
                              <i className="isax isax-calendar5"></i>
                            </Link>
                            <Link to="/patient/dependent" className="cal-plus-icon">
                              <i className="isax isax-eye4"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="doctor-fav-list">
                          <div className="doctor-info-profile">
                            <Link to="#" className="table-avatar">
                              <img
                                src={patient21}
                                alt="Img"
                              />
                            </Link>
                            <div className="doctor-name-info">
                              <h5>
                                <Link to="#">Mathew</Link>
                              </h5>
                              <span>Father - 59 years 15 days</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="cal-plus-icon me-2">
                              <i className="isax isax-calendar5"></i>
                            </Link>
                            <Link to="/patient/dependent" className="cal-plus-icon">
                              <i className="isax isax-eye4"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 d-flex">
                  <div className="dashboard-card w-100">
                    <div className="dashboard-card-head">
                      <div className="header-title">
                        <h5>Reports</h5>
                      </div>
                      <div className="dropdown header-dropdown">
                        <Link
                          className="dropdown-toggle"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <img
                            src={doctordashboardprofile06}
                            className="avatar dropdown-avatar"
                            alt="Img"
                          />
                          Hendrita
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item">
                            <img
                              src={doctordashboardprofile06}
                              className="avatar dropdown-avatar"
                              alt="Img"
                            />
                            Hendrita
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <img
                              src={doctordashboardprofile08}
                              className="avatar dropdown-avatar"
                              alt="Img"
                            />
                            Laura
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <img
                              src={doctordashboardprofile07}
                              className="avatar dropdown-avatar"
                              alt="Img"
                            />
                            Mathew
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card-body">
                      <div className="account-detail-table">
                        {/* Tab Menu */}
                        <nav className="patient-dash-tab border-0 pb-0 mb-3 mt-3">
                          <ul className="nav nav-tabs-bottom">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                to="#appoint-tab"
                                data-bs-toggle="tab"
                              >
                                Appointments
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#medical-tab"
                                data-bs-toggle="tab"
                              >
                                Medical Records
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#prsc-tab"
                                data-bs-toggle="tab"
                              >
                                Prescriptions
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#invoice-tab"
                                data-bs-toggle="tab"
                              >
                                Invoices
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        {/* /Tab Menu */}
                        {/* Tab Content */}
                        <div className="tab-content pt-0">
                          {/* Appointments Tab */}
                          <div
                            id="appoint-tab"
                            className="tab-pane fade show active"
                          >
                            <div className="custom-new-table">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Doctor</th>
                                      <th>Date</th>
                                      <th>Type</th>
                                      <th>Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="link-primary">#AP1236</span>
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-24.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Dr. Robert Womack</Link>
                                        </h2>
                                      </td>
                                      <td>21 Mar 2025, 10:30 AM</td>
                                      <td>Video call</td>
                                      <td>
                                        <span className="badge badge-xs p-2 badge-soft-purple inline-flex align-items-center">
                                          <i className="fa-solid fa-circle me-1 fs-5" />
                                          Upcoming
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="link-primary">#AP3656</span>
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-23.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Dr. Patricia Cassidy</Link>
                                        </h2>
                                      </td>
                                      <td>28 Mar 2025, 11:40 AM</td>
                                      <td>Clinic Visit</td>
                                      <td>
                                        <span className="badge badge-xs p-2 badge-soft-purple inline-flex align-items-center">
                                          <i className="fa-solid fa-circle me-1 fs-5" />
                                          Completed
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="link-primary">#AP1246</span>
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-22.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Dr. Kevin Evans</Link>
                                        </h2>
                                      </td>
                                      <td>02 Apr 2025, 09:20 AM</td>
                                      <td>Audio Call</td>
                                      <td>
                                        <span className="badge badge-xs p-2 badge-soft-success inline-flex align-items-center">
                                          <i className="fa-solid fa-circle me-1 fs-5" />
                                          Completed
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="link-primary">#AP6985</span>
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-25.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Dr. Lisa Keating</Link>
                                        </h2>
                                      </td>
                                      <td>15 Apr 2025, 04:10 PM</td>
                                      <td>Clinic Visit</td>
                                      <td>
                                        <span className="badge badge-xs p-2 badge-soft-danger inline-flex align-items-center">
                                          <i className="fa-solid fa-circle me-1 fs-5" />
                                          Cancelled
                                        </span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="link-primary">#AP3659</span>
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-26.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Dr. John Hammer</Link>
                                        </h2>
                                      </td>
                                      <td>10 May 2025, 06:00 PM</td>
                                      <td>Video Call</td>
                                      <td>
                                        <span className="badge badge-xs p-2 badge-soft-purple inline-flex align-items-center">
                                          <i className="fa-solid fa-circle me-1 fs-5" />
                                          Upcoming
                                        </span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                          </div>
                          {/* /Appointments Tab */}
                          {/* Medical Records Tab */}
                          <div className="tab-pane fade" id="medical-tab">
                            <div className="custom-table">
                              <div className="table-responsive">
                                <table className="table table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Date</th>
                                      <th>Record For</th>
                                      <th>Comments</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link to="#" className="link-primary">
                                          #MR1236
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          Electro cardiography
                                        </Link>
                                      </td>
                                      <td>24 Mar 2025</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors-dashboard/profile-06.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/pages/patient-details">Hendrita Clark</Link>
                                        </h2>
                                      </td>
                                      <td>Take Good Rest</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_report"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#" className="link-primary">
                                          #MR3656
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          Complete Blood Count
                                        </Link>
                                      </td>
                                      <td>10 Apr 2025</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/dependent/dependent-01.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/pages/patient-details">Laura Stewart</Link>
                                        </h2>
                                      </td>
                                      <td>Stable, no change</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_report"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#" className="link-primary">
                                          #MR1246
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          Blood Glucose Test
                                        </Link>
                                      </td>
                                      <td>19 Apr 2025</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/dependent/dependent-02.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/pages/patient-details">Mathew Charles&nbsp;</Link>
                                        </h2>
                                      </td>
                                      <td>All Clear</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_report"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#" className="link-primary">
                                          #MR6985
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          Liver Function Tests
                                        </Link>
                                      </td>
                                      <td>27 Apr 2025</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/dependent/dependent-03.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/pages/patient-details">Christopher Joseph</Link>
                                        </h2>
                                      </td>
                                      <td>Stable, no change</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_report"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#" className="link-primary">
                                          #MR3659
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          Blood Cultures
                                        </Link>
                                      </td>
                                      <td>10 May 2025</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/dependent/dependent-04.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/pages/patient-details">Elisa Salcedo</Link>
                                        </h2>
                                      </td>
                                      <td>Take Good Rest</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_report"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                          </div>
                          {/* /Medical Records Tab */}
                          {/* Prescriptions Tab */}
                          <div className="tab-pane fade" id="prsc-tab">
                            <div className="custom-table">
                              <div className="table-responsive">
                                <table className="table table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Date</th>
                                      <th>Prescriped By</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="link-primary">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #P1236
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon prescription">
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>21 Mar 2025, 10:30 AM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-02.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Edalin Hendry</Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="link-primary">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #P3656
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon prescription">
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>28 Mar 2025, 11:40 AM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-05.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">John Homes</Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="link-primary">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #P1246
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon prescription">
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>11 Apr 2025, 09:00 AM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-03.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Shanta Neill</Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="link-primary">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #P6985
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon prescription">
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>15 Apr 2025, 02:30 PM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-08.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Anthony Tran</Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="link-primary">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #P3659
                                        </Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon prescription">
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>23 Apr 2025, 06:40 PM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-01.jpg"
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">Susan Lingo</Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link to="#">
                                            <i className="isax isax-import" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                          </div>
                          {/* Prescriptions Tab */}
                          {/*Invoices Tab */}
                          <div className="tab-pane fade" id="invoice-tab">
                            <div className="custom-table">
                              <div className="table-responsive">
                                <table className="table table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Doctor</th>
                                      <th>Appointment Date</th>
                                      <th>Booked on</th>
                                      <th>Amount</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                          className="link-primary"
                                        >
                                          #INV1236
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-21.jpg"
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
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                          className="link-primary"
                                        >
                                          #NV3656
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                            <ImageWithBasePath
                                              className="avatar-img rounded-3"
                                              src="assets/img/doctors/doctor-thumb-13.jpg"
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
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                          className="link-primary"
                                        >
                                          #INV1246
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
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
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                          className="link-primary"
                                        >
                                          #INV6985
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
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
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                          className="link-primary"
                                        >
                                          #INV3659
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
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
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="isax isax-link-2" />
                                          </Link>
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#delete_modal"
                                          >
                                            <i className="isax isax-trash" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>

                          </div>
                          {/* Invoices Tab */}
                        </div>
                        {/* Tab Content */}
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
      <PatientModal />
    </>
  );
};

export default Dashboard;
