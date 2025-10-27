import React from 'react'
import DoctorSidebar from '../sidebar'
import { doctordashboardprofile01, doctordashboardprofile02, doctordashboardprofile04, doctordashboardprofile05, doctordashboardprofile06, doctordashboardprofile07, doctordashboardprofile08, doctordashboardprofile3 } from '../../imagepath'
import DateRangePicker from "react-bootstrap-daterangepicker";
import { Filter, initialSettings } from '../../common/filter';
import Header from '../../header';
import DoctorFooter from '../../common/doctorFooter';
import { Link } from 'react-router-dom';

const DoctorAppointmentsGrid = (props) => {

    return (
        <div>
        <Header {...props} />
            {/* Breadcrumb */}
            <div className="breadcrumb-bar-two">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <h2 className="breadcrumb-title">Appointments</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home-1">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        Appointments
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
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
                                            <Link to="/doctor/appointments">
                                            <i className="isax isax-grid-7"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="view-icons">
                                            <Link to="/doctor/doctor-appointments-grid" className="active">
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
                                    <div className="row">
                                        {/* Appointment Grid */}
                                        <div className="col-xl-4 col-lg-6 col-md-12 d-flex">
                                            <div className="appointment-wrap appointment-grid-wrap">
                                                <ul>
                                                    <li>
                                                        <div className="appointment-grid-head">
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
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Adrian
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile02}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0002</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Kelly Stevens
                                                                        </Link>
                                                                        <span className="badge new-tag">New</span>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="hospital-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-hospital" />
                                                                    </Link>
                                                                </span>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile3}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0003</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Samuel James
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="telephone-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-phone" />
                                                                    </Link>
                                                                </span>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
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
                                                                            Catherine Gracey
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="hospital-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-hospital" />
                                                                    </Link>
                                                                </span>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile05}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0005</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Robert Miller
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile06}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0006</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Anderea Kearns
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile07}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0007</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Peter Anderson
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile08}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0008</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Emily Musick
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile01}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0009</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Darrell Tan
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="appointment-info">
                                                        <p>
                                                            <i className="fa-solid fa-clock" />
                                                            25 Aug 2025 10.45 AM
                                                        </p>
                                                        <ul className="d-flex apponitment-types">
                                                            <li>General Visit</li>
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
                                                        <div className="appointment-start">
                                                            <Link
                                                                to="/doctor/doctor-appointment-start"
                                                                className="start-link"
                                                            >
                                                                Start Now
                                                            </Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* /Appointment Grid */}
                                        <div className="col-md-12">
                                            <div className="loader-item text-center">
                                                <Link to="#" className="btn btn-load">
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
                                                                <Link to="/doctor-cancelled-appointment-2">
                                                                    <img
                                                                        src={doctordashboardprofile01}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0001</p>
                                                                    <h6>
                                                                        <Link to="/doctor-cancelled-appointment-2">
                                                                            Adrian
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor-cancelled-appointment-2"
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
                                                                <Link to="/doctor-cancelled-appointment-2">
                                                                    <img
                                                                        src={doctordashboardprofile02}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0002</p>
                                                                    <h6>
                                                                        <Link to="/doctor-cancelled-appointment-2">
                                                                            Kelly Stevens
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor-cancelled-appointment-2"
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
                                                                <Link to="/doctor/doctor-cancelled-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile3}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0003</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-cancelled-appointment">
                                                                            Samuel James
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-cancelled-appointment"
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
                                                <Link to="#" className="btn btn-load">
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile01}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0001</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Adrian
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-upcoming-appointment"
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile02}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0002</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Kelly Stevens
                                                                        </Link>
                                                                        <span className="badge new-tag">New</span>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="hospital-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-hospital" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-upcoming-appointment"
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile3}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0003</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Samuel James
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="telephone-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-phone" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-upcoming-appointment"
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
                                                                            Catherine Gracey
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="hospital-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-hospital" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-upcoming-appointment"
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile05}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0005</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Robert Miller
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-upcoming-appointment"
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
                                                                <Link to="/doctor/doctor-upcoming-appointment">
                                                                    <img
                                                                        src={doctordashboardprofile06}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0006</p>
                                                                    <h6>
                                                                        <Link to="/doctor/doctor-upcoming-appointment">
                                                                            Anderea Kearns
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-upcoming-appointment"
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
                                                                <Link to="/doctor/patient-profile">
                                                                    <img
                                                                        src={doctordashboardprofile07}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0007</p>
                                                                    <h6>
                                                                        <Link to="/doctor/patient-profile">
                                                                            Peter Anderson
                                                                        </Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-appointment-details"
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
                                                                <Link to="/doctor/patient-profile">
                                                                    <img
                                                                        src={doctordashboardprofile08}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0008</p>
                                                                    <h6>
                                                                        <Link to="/doctor/patient-profile">Emily Musick</Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
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
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-appointment-details"
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
                                                                <Link to="/doctor/patient-profile">
                                                                    <img
                                                                        src={doctordashboardprofile01}
                                                                        alt="User Image"
                                                                    />
                                                                </Link>
                                                                <div className="patient-info">
                                                                    <p>#Apt0009</p>
                                                                    <h6>
                                                                        <Link to="/doctor/patient-profile">Darrell Tan</Link>
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <div className="grid-user-msg">
                                                                <span className="video-icon">
                                                                    <Link to="#">
                                                                        <i className="fa-solid fa-video" />
                                                                    </Link>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="appointment-info">
                                                        <p>
                                                            <i className="fa-solid fa-clock" />
                                                            25 Aug 2025 10.45 AM
                                                        </p>
                                                        <ul className="d-flex apponitment-types">
                                                            <li>General Visit</li>
                                                        </ul>
                                                    </li>
                                                    <li className="appointment-detail-btn">
                                                        <Link
                                                            to="/doctor/doctor-appointment-details"
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
                                                <Link to="#" className="btn btn-load">
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
            {/* /Page Content */}
            <DoctorFooter {...props} />
        </div>

    )
}

export default DoctorAppointmentsGrid
