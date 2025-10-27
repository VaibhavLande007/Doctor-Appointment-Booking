import React from 'react'
import Header from '../../header'
import DoctorFooter from '../../common/doctorFooter'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'
import { Link } from "react-router-dom";
import Select from "react-select";


const ClinicNew = (props) => {

    const type = [
        { value: 'United States Of America (USA)', label: 'United States Of America (USA)' },
        { value: 'United Kingdom (UK)', label: 'United Kingdom (UK)' },
    ];
    const typeHospital = [
        { value: 'All Hospitals', label: 'All Hospitals' },
        { value: 'Jamesburg Clincs', label: 'Jamesburg Clincs' },
        { value: 'Medical Zone', label: 'Medical Zone' },
    ];


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
                                        <li className="breadcrumb-item active">Clinics </li>
                                    </ol>
                                    <h2 className="breadcrumb-title">Clinics </h2>
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
                                    <Link className="nav-link" to="/pages/speciality">
                                        Specialities
                                    </Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link className="nav-link active" to="/pages/clinic">
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
                                        Showing <span className="text-secondary">450</span> Clinics For
                                        You
                                    </h5>
                                    <div className="d-flex align-items-center flex-wrap gap-3">
                                    <Select
                                            className="select hospital-select"
                                            options={type}
                                            placeholder="Select"
                                            isClearable={true}
                                            isSearchable={true}
                                        />
                                         <Select
                                            className="select "
                                            options={typeHospital}
                                            placeholder="Select"
                                            isClearable={true}
                                            isSearchable={true}
                                        />
                                        <div className="input-block dash-search-input">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Clinics"
                                            />
                                            <span className="search-icon">
                                                <i className="feather-search" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Show Result */}
                        <div className="row">
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="javascript:void(0)" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-01.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="javascript:void(0)">Jamesburg Clincs</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        Santa Fe Springs
                                                    </p>
                                                    <p className="fs-14 mb-0">180 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient/doctor-grid" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-02.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="/patient/doctor-grid">Berkshire Medical Clinic</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        Indianapolis
                                                    </p>
                                                    <p className="fs-14 mb-0">60 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient/doctor-grid" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-03.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="/patient/doctor-grid">First Priority Clinics</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        Saginaw
                                                    </p>
                                                    <p className="fs-14 mb-0">90 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient/doctor-grid" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-04.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="/patient/doctor-grid">Medical Zone</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        Saint Louis
                                                    </p>
                                                    <p className="fs-14 mb-0">78 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient/doctor-grid" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-05.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="/patient/doctor-grid">Healing Helpers Medical</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        Jamesburg
                                                    </p>
                                                    <p className="fs-14 mb-0">96 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient/doctor-grid" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-06.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="/patient/doctor-grid">Body Regenerate</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        Piscataway
                                                    </p>
                                                    <p className="fs-14 mb-0">180 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient/doctor-grid" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-07.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="/patient/doctor-grid">Union Family Health Center</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        Moscow Mills
                                                    </p>
                                                    <p className="fs-14 mb-0">68 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient/doctor-grid" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-08.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="/patient/doctor-grid">Treatment Solutions</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        Hamburg
                                                    </p>
                                                    <p className="fs-14 mb-0">64 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                            {/* Clinic Item */}
                            <div className="col-lg-4 col-md-6">
                                <div className="card clinic-item">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <Link to="/patient/doctor-grid" className="clinic-icon">
                                                <ImageWithBasePath src="assets/img/clinic/clinic-09.svg" alt="img" />
                                            </Link>
                                            <div className="ms-3">
                                                <h6 className="mb-1">
                                                    <Link to="/patient/doctor-grid">The Vitality Visit</Link>
                                                </h6>
                                                <div className="d-flex align-items-center flex-wrap clinic-location gap-2">
                                                    <p className="fs-14 mb-0">
                                                        <i className="isax isax-location me-2" />
                                                        San Diego
                                                    </p>
                                                    <p className="fs-14 mb-0">89 Doctors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Clinic Item */}
                        </div>
                        <div className="loader-item text-center">
                            <Link
                                to="#"
                                className="btn btn-primary d-inline-flex align-items-center"
                            >
                                <i className="isax isax-d-cube-scan me-2" />
                                Load More 150 Clinics
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

export default ClinicNew
