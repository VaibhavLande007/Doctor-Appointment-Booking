import React from 'react';
import ImageWithBasePath from '../../../../core/img/imagewithbasebath';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SectionSpeciality = () => {
    const CustomNextArrow = ({ className, onClick }) => (
        <div className="spciality-nav nav-bottom owl-nav">
            <button type="button" role="presentation" className="owl-next" onClick={onClick}>
                <i className="fa-solid fa-chevron-right" />
            </button>
        </div>
    );
    
    
    
    const CustomPrevArrow = ({ className, onClick }) => (
        <div className="spciality-nav nav-bottom owl-nav">
            <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
                <i className="fa-solid fa-chevron-left" />
            </button>
        </div>
    );
    const SpecialitySlider = {
        slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 8,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 0,
            settings: {
                vertical: false,
                slidesToShow: 1,
            },
        },
    ],
    };

    return (
        <>
            {/* Speciality Section */}
            <section className="speciality-section">
                <div className="container">
                    <div
                        className="section-header sec-header-one text-center aos"
                        data-aos="fade-up"
                    >
                        <span className="badge badge-primary">Top Specialties</span>
                        <h2>Highlighting the Care &amp; Support</h2>
                    </div>
                    <div className="spciality-slider slick-margins slick-arrow-center aos" data-aos="fade-up">
                        <Slider {...SpecialitySlider}>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-01.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-01.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Cardiology</Link>
                                </h6>
                                <p className="mb-0">254 Doctors</p>
                            </div>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-02.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-02.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Orthopedics</Link>
                                </h6>
                                <p className="mb-0">151 Doctors</p>
                            </div>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-03.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-03.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Neurology</Link>
                                </h6>
                                <p className="mb-0">176 Doctors</p>
                            </div>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-04.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-04.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Pediatrics</Link>
                                </h6>
                                <p className="mb-0">124 Doctors</p>
                            </div>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-05.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-05.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Psychiatry</Link>
                                </h6>
                                <p className="mb-0">112 Doctors</p>
                            </div>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-06.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-06.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Endocrinology</Link>
                                </h6>
                                <p className="mb-0">104 Doctors</p>
                            </div>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-07.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-07.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Pulmonology</Link>
                                </h6>
                                <p className="mb-0">41 Doctors</p>
                            </div>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-08.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-08.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Urology</Link>
                                </h6>
                                <p className="mb-0">39 Doctors</p>
                            </div>
                            <div className="spaciality-item">
                                <div className="spaciality-img">
                                    <ImageWithBasePath src="assets/img/specialities/speciality-03.jpg" alt="img" />
                                    <span className="spaciality-icon">
                                        <ImageWithBasePath
                                            src="assets/img/specialities/speciality-icon-03.svg"
                                            alt="img"
                                        />
                                    </span>
                                </div>
                                <h6>
                                    <Link to="/patient/doctor-grid">Neurology</Link>
                                </h6>
                                <p className="mb-0">176 Doctors</p>
                            </div>
                        </Slider>

                    </div>
                    <div className="spciality-nav nav-bottom owl-nav" />
                </div>
            </section>
            {/* /Speciality Section */}
        </>

    )
}

export default SectionSpeciality
