import React, { useState } from 'react'
import Header from '../../header'
import DoctorFooter from '../../common/doctorFooter'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'
import { Link } from "react-router-dom";
import Select from "react-select";

const Hospitals = (props) => {

    const type = [
        { value: 'United States Of America (USA)', label: 'United States Of America (USA)' },
        { value: 'United Kingdom (UK)', label: 'United Kingdom (UK)' },
    ];
    const [btnRadio, setBtnRadio] = useState('all-hospital');
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
                                            <Link to="/home">
                                                <i className="isax isax-home-15" />
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Hospitals</li>
                                    </ol>
                                    <h2 className="breadcrumb-title">Hospitals</h2>
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
                {/* Terms */}
                <div className="content doctor-content">
                    <div className="container">
                        {/* Hospital Tabs */}
                        <nav className="settings-tab hospital-tab">
                            <ul
                                className="nav nav-tabs-bottom justify-content-center "
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link active" to="/pages/hospitals">
                                        Hospitals
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" to="/pages/speciality">
                                        Specialities
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link" to="/pages/clinic">
                                        Clinics
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* /Hospital Tabs */}
                        {/* Show Result */}
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-between flex-wrap result-wrap gap-3">
                                    <h5>
                                        Showing <span className="text-secondary">450</span> Hospitals For
                                        You
                                    </h5>
                                    <div className="d-flex align-items-center flex-wrap gap-3 ">
                                        <Select
                                            className="select hospital-select"
                                            options={type}
                                            placeholder="Select"
                                            isClearable={true}
                                            isSearchable={true}
                                        />
                                        <div className="input-block dash-search-input">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Hospitals"
                                            />
                                            <span className="search-icon">
                                                <i className="isax isax-search-normal" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Show Result */}
                        <div className="d-flex align-items-center flex-wrap hospital-form">
                            <div className="form-check d-flex align-items-center">
                                <input
                                    className="form-check-input mt-0"
                                    type="radio"
                                    name="Radio"
                                    id="all-hospital"
                                    defaultValue="all-hospital"
                                    defaultChecked=""
                                    onClick={() => setBtnRadio('all-hospital')}
                                    checked={btnRadio === 'all-hospital' ? true : false}
                                />
                                <label
                                    className="form-check-label fs-14 fw-medium ms-2"
                                    htmlFor="all-hospital"
                                >
                                    All Hospitals
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input
                                    className="form-check-input mt-0"
                                    type="radio"
                                    name="Radio"
                                    id="virtual"
                                    defaultValue="virtual"
                                    onClick={() => setBtnRadio('virtual')}
                                    checked={btnRadio === 'virtual' ? true : false}
                                />
                                <label
                                    className="form-check-label fs-14 fw-medium ms-2"
                                    htmlFor="virtual"
                                >
                                    Virtual
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input
                                    className="form-check-input mt-0"
                                    type="radio"
                                    name="Radio"
                                    id="appointment"
                                    defaultValue="appointment"
                                    onClick={() => setBtnRadio('appointment')}
                                    checked={btnRadio === 'appointment' ? true : false}
                                />
                                <label
                                    className="form-check-label fs-14 fw-medium ms-2"
                                    htmlFor="appointment"
                                >
                                    Appointments
                                </label>
                            </div>
                            <div className="form-check d-flex align-items-center">
                                <input
                                    className="form-check-input mt-0"
                                    type="radio"
                                    name="Radio"
                                    id="clinic"
                                    defaultValue="clinic"
                                    onClick={() => setBtnRadio('clinic')}
                                    checked={btnRadio === 'clinic' ? true : false}
                                />
                                <label
                                    className="form-check-label fs-14 fw-medium ms-2"
                                    htmlFor="clinic"
                                >
                                    Hospitals / Clinics
                                </label>
                            </div>
                        </div>
                        {/* All Hospitals */}
                        <div className="all-hospital" style={{display : btnRadio === 'all-hospital' ? 'block': 'none'}}>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="javascript:void(0);" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-01.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="javascript:void(0);">Cleveland Clinic</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Minneapolis, MN
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-02.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">&nbsp;Apollo Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Philadelphia, PA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-03.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Asian Institute</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Piscataway, NJ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-04.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Manipal North Side</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Albuquerque, NM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-05.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Johns Hopkins Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Roswell, GA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-06.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Athol Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Chesterfield, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-07.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Austen Riggs Center</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Atlanta, GA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-08.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Baldpate Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Burbank, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-09.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Baystate Noble Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Lena, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-10.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Berkshire Medical Center</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Saginaw, MI
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-11.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Beverly Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Westchester, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-12.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Good Health City Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Santa Fe Springs, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loader-item text-center">
                                <Link
                                    to="#"
                                    className="btn btn-primary d-inline-flex align-items-center"
                                >
                                    <i className="isax isax-d-cube-scan me-2" />
                                    Load More 425 Hospitals
                                </Link>
                            </div>
                        </div>
                        {/* /All Hospitals */}
                        {/* Virtual Hospitals */}
                        <div className="virtual-hospital" style={{display : btnRadio === 'virtual' ? 'block': 'none'}}>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-02.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">&nbsp;Apollo Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Philadelphia, PA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-01.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Cleveland Clinic</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Minneapolis, MN
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-04.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Manipal North Side</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Albuquerque, NM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-03.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Asian Institute</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Piscataway, NJ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-06.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Athol Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Chesterfield, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-05.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Johns Hopkins Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Roswell, GA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-07.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Austen Riggs Center</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Atlanta, GA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-08.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Baldpate Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Burbank, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-10.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Berkshire Medical Center</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Saginaw, MI
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-11.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Beverly Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Westchester, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-09.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Baystate Noble Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Lena, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-12.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Good Health City Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Santa Fe Springs, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loader-item text-center">
                                <Link
                                    to="#"
                                    className="btn btn-primary d-inline-flex align-items-center"
                                >
                                    <i className="isax isax-d-cube-scan me-2" />
                                    Load More 425 Hospitals
                                </Link>
                            </div>
                        </div>
                        {/* /Virtual Hospitals */}
                        {/* Appointment Hospitals */}
                        <div className="appointment-hospital" style={{display : btnRadio === 'appointment' ? 'block': 'none'}}>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-03.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Asian Institute</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Piscataway, NJ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-02.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">&nbsp;Apollo Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Philadelphia, PA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-04.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Manipal North Side</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Albuquerque, NM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-05.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Johns Hopkins Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Roswell, GA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-01.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Cleveland Clinic</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Minneapolis, MN
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-07.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Austen Riggs Center</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Atlanta, GA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-08.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Baldpate Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Burbank, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-09.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Baystate Noble Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Lena, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-06.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Athol Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Chesterfield, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-10.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Berkshire Medical Center</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Saginaw, MI
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-11.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Beverly Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Westchester, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-12.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Good Health City Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Santa Fe Springs, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loader-item text-center">
                                <Link
                                    to="#"
                                    className="btn btn-primary d-inline-flex align-items-center"
                                >
                                    <i className="isax isax-d-cube-scan me-2" />
                                    Load More 425 Hospitals
                                </Link>
                            </div>
                        </div>
                        {/* /Appointment Hospitals */}
                        {/* All Hospitals */}
                        <div className="all-clinic" style={{display : btnRadio === 'clinic' ? 'block': 'none'}}>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-05.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Johns Hopkins Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Roswell, GA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-01.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Cleveland Clinic</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Minneapolis, MN
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-06.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Athol Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Chesterfield, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-07.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Austen Riggs Center</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Atlanta, GA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <div className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-08.svg" alt="img" />
                                            </div>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Baldpate Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Burbank, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-10.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Berkshire Medical Center</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Saginaw, MI
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-12.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Good Health City Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Santa Fe Springs, CA
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card hospital-item">
                                        <div className="card-body text-center">
                                            <Link to="/patient/doctor-grid" className="hospital-icon">
                                                <ImageWithBasePath src="assets/img/hospitals/hospital-11.svg" alt="img" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="/patient/doctor-grid">Beverly Hospital</Link>
                                            </h6>
                                            <p className="fs-14 mb-0">
                                                <i className="isax isax-location me-2" />
                                                Westchester, IL
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loader-item text-center">
                                <Link
                                    to="#"
                                    className="btn btn-primary d-inline-flex align-items-center"
                                >
                                    <i className="isax isax-d-cube-scan me-2" />
                                    Load More 425 Hospitals
                                </Link>
                            </div>
                        </div>
                        {/* /All Hospitals */}
                    </div>
                </div>
                {/* /Terms */}
            </>

            <DoctorFooter />
        </div>
    )
}

export default Hospitals
