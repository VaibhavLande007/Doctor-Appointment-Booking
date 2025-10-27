import React from 'react'
import Header from '../../header'
import DoctorFooter from '../../common/doctorFooter'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'
import { Link } from "react-router-dom";

const Speciality = (props) => {
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
                                        <li className="breadcrumb-item active">Specialties</li>
                                    </ol>
                                    <h2 className="breadcrumb-title">Specialties</h2>
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
                {/* Specialties */}
                <div className="content doctor-content">
                    <div className="container">
                        {/* Hospital Tabs */}
                        <nav className="settings-tab hospital-tab">
                            <ul
                                className="nav nav-tabs-bottom justify-content-center "
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link " to="/pages/hospitals">
                                        Hospitals
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link active" to="/pages/speciality">
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
                                        Showing <span className="text-secondary">124</span> Specialities
                                        For You
                                    </h5>
                                    <div className="d-flex align-items-center flex-wrap gap-3">
                                        <div className="input-block dash-search-input">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Specialities"
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
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-01.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Orthopedics</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">151 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-02.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Neurology</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">25 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-03.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Psychiatry</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">121 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-04.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Endocrinology</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">104 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-05.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Pulmonology</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">41 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-06.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Urology</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">39 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-07.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Cardiology</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">254 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-08.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Adult Endocrinology</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">99 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-09.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">General Medicine</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">41 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-10.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">ENT</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">37 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-11.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Fertility</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">547 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="card speciality-item">
                                    <div className="card-body p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <Link to="/patient/doctor-grid" className="speciality-icon">
                                                    <ImageWithBasePath
                                                        src="assets/img/specialities/speciality-12.svg"
                                                        alt="img"
                                                    />
                                                </Link>
                                                <div className="ms-3">
                                                    <h6 className="mb-1">
                                                        <Link to="/patient/doctor-grid">Family Medicine</Link>
                                                    </h6>
                                                    <p className="fs-14 mb-0">121 Doctors</p>
                                                </div>
                                            </div>
                                            <Link to="/patient/doctor-grid" className="link-icon">
                                                <i className="isax isax-arrow-right-3" />
                                            </Link>
                                        </div>
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
                                Load More 15 Specialities
                            </Link>
                        </div>
                    </div>
                </div>
                {/* /Specialties */}
            </>


            <DoctorFooter />
        </div>
    )
}

export default Speciality
