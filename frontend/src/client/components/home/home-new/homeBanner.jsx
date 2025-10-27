import React, { useState } from 'react'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'
import { Calendar } from 'primereact/calendar';

const HomeBanner = () => {
    const [date1, setDate1] = useState(null);


    
    return (

        <>
            {/* Home Banner */}
            <section className="banner-section banner-sec-one">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="banner-content aos" data-aos="fade-up">
                                <div className="rating-appointment d-inline-flex align-items-center gap-2">
                                    <div className="avatar-list-stacked avatar-group-lg">
                                        <span className="avatar avatar-rounded">
                                            <ImageWithBasePath
                                                className="border border-white"
                                                src="assets/img/doctors/doctor-thumb-22.jpg"
                                                alt="img"
                                            />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <ImageWithBasePath
                                                className="border border-white"
                                                src="assets/img/doctors/doctor-thumb-23.jpg"
                                                alt="img"
                                            />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <ImageWithBasePath src="assets/img/doctors/doctor-thumb-24.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <div className="me-2">
                                        <h6 className="mb-1">5K+ Appointments</h6>
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center">
                                                <i className="fa-solid fa-star text-orange me-1" />
                                                <i className="fa-solid fa-star text-orange me-1" />
                                                <i className="fa-solid fa-star text-orange me-1" />
                                                <i className="fa-solid fa-star text-orange me-1" />
                                                <i className="fa-solid fa-star text-orange me-1" />
                                            </div>
                                            <p>5.0 Ratings</p>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="display-5">
                                    Discover Health: Find Your Trusted{" "}
                                    <span className="banner-icon">
                                        <ImageWithBasePath src="assets/img/icons/video.svg" alt="img" />
                                    </span>{" "}
                                    <span className="text-gradient">Doctors</span> Today
                                </h1>
                                <div className="search-box-one aos" data-aos="fade-up">
                                    <form action="/patient/search-doctor1">
                                        <div className="search-input search-line">
                                            <i className="isax isax-hospital5 bficon" />
                                            <div className=" mb-0">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search doctors, clinics, hospitals, etc"
                                                />
                                            </div>
                                        </div>
                                        <div className="search-input search-map-line">
                                            <i className="isax isax-location5" />
                                            <div className=" mb-0">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Location"
                                                />
                                            </div>
                                        </div>
                                        <div className="search-input search-calendar-line">
                                            <i className="isax isax-calendar-tick5" style={{zIndex:99}}/>
                                            <div className=" mb-0">
                                                
                                                <Calendar
                                                    value={date1}
                                                    onChange={(e) => setDate1(e.value)}
                                                    placeholder="Date"
                                                    className="custom-date-picker"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-search-btn">
                                            <button className="btn btn-primary" type="submit">
                                                <i className="isax isax-search-normal5 me-2" />
                                                Search
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-img aos" data-aos="fade-up">
                                <ImageWithBasePath
                                    src="assets/img/banner/banner-doctor.svg"
                                    className="img-fluid"
                                    alt="patient-image"
                                />
                                <div className="banner-appointment">
                                    <h6>1K</h6>
                                    <p>
                                        Appointments <span className="d-block">Completed</span>
                                    </p>
                                </div>
                                <div className="banner-patient">
                                    <div className="avatar-list-stacked avatar-group-sm">
                                        <span className="avatar avatar-rounded">
                                            <ImageWithBasePath src="assets/img/patients/patient19.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <ImageWithBasePath src="assets/img/patients/patient16.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <ImageWithBasePath src="assets/img/patients/patient18.jpg" alt="img" />
                                        </span>
                                    </div>
                                    <p>15K+</p>
                                    <p>Satisfied Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-bg">
                    <ImageWithBasePath
                        src="assets/img/bg/banner-bg-02.png"
                        alt="img"
                        className="banner-bg-01"
                    />
                    <ImageWithBasePath
                        src="assets/img/bg/banner-bg-03.png"
                        alt="img"
                        className="banner-bg-02"
                    />
                    <ImageWithBasePath
                        src="assets/img/bg/banner-bg-04.png"
                        alt="img"
                        className="banner-bg-03"
                    />
                    <ImageWithBasePath
                        src="assets/img/bg/banner-bg-05.png"
                        alt="img"
                        className="banner-bg-04"
                    />
                    <ImageWithBasePath
                        src="assets/img/bg/banner-icon-01.svg"
                        alt="img"
                        className="banner-bg-05"
                    />
                    <ImageWithBasePath
                        src="assets/img/bg/banner-icon-01.svg"
                        alt="img"
                        className="banner-bg-06"
                    />
                </div>
            </section>
            {/* /Home Banner */}
        </>


    )
}

export default HomeBanner
