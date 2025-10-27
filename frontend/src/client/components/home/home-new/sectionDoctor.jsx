import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import apiService from '../../../../config/apiService';

const SectionDoctor = () => {
    const history = useHistory();
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch doctors on component mount
    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            setLoading(true);
            const response = await apiService.get('/doctors', {
                params: {
                    page: 0,
                    size: 10,
                    sortBy: 'rating'
                }
            });

            if (response.data.success) {
                setDoctors(response.data.data.content || []);
            }
        } catch (err) {
            console.error('Error fetching doctors:', err);
            setError(err.response?.data?.message || 'Failed to load doctors');
        } finally {
            setLoading(false);
        }
    };

    // Handle Book Now click
    const handleBookNow = (doctorId) => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || '{}');

        if (!token) {
            // Not logged in - save return URL and redirect to login
            localStorage.setItem('returnUrl', `/booking/${doctorId}`);
            history.push('/login');
        } else if (user.role === 'PATIENT') {
            // Patient is logged in - go to booking
            history.push(`/booking/${doctorId}`);
        } else {
            // Logged in as doctor/admin - show error
            alert('Please login as a patient to book appointments');
        }
    };

    // Helper function to get specialization badge color
    const getSpecializationColor = (specialization) => {
        const colors = {
            'Psychologist': 'indigo',
            'Pediatrician': 'pink',
            'Neurologist': 'teal',
            'Cardiologist': 'info',
            'Dermatologist': 'purple',
            'Orthopedic': 'success'
        };
        return colors[specialization] || 'primary';
    };

    // Helper function to get active bar class
    const getActiveBarClass = (specialization) => {
        const classes = {
            'Psychologist': '',
            'Pediatrician': 'active-bar-pink',
            'Neurologist': 'active-bar-teal',
            'Cardiologist': 'active-bar-info',
            'Dermatologist': 'active-bar-purple',
            'Orthopedic': 'active-bar-success'
        };
        return classes[specialization] || '';
    };

    const CustomNextArrow = ({ className, onClick }) => (
        <div className="spciality-nav nav-bottom owl-nav ">
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

    const Doctoroptions = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        infinite: doctors.length > 4,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: Math.min(4, doctors.length),
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(3, doctors.length),
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: Math.min(2, doctors.length),
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

    // Render doctor card
    const renderDoctorCard = (doctor) => {
        const primarySpecialization = doctor.specializations?.[0] || 'General';
        const specializationColor = getSpecializationColor(primarySpecialization);
        const activeBarClass = getActiveBarClass(primarySpecialization);
        const fullName = `Dr. ${doctor.firstName} ${doctor.lastName}`;
        const location = doctor.address ? `${doctor.address.city}, ${doctor.address.state}` : 'Location not available';

        return (
            <div className="card" key={doctor.id}>
                <div className="card-img card-img-hover">
                    <Link to={`/patient/doctor-profile/${doctor.id}`}>
                        <ImageWithBasePath
                            src={doctor.profileImage || "assets/img/doctor-grid/doctor-grid-01.jpg"}
                            alt={fullName}
                        />
                    </Link>
                    <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                            <i className="fa-solid fa-star me-1" />
                            {doctor.rating?.toFixed(1) || '0.0'}
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                            <i className="fa fa-heart" />
                        </Link>
                    </div>
                </div>
                <div className="card-body p-0">
                    <div className={`d-flex active-bar ${activeBarClass} align-items-center justify-content-between p-3`}>
                        <Link to="#" className={`text-${specializationColor} fw-medium fs-14`}>
                            {primarySpecialization}
                        </Link>
                        <span className={`badge ${doctor.acceptingPatients ? 'bg-success-light' : 'bg-danger-light'} d-inline-flex align-items-center`}>
                            <i className="fa-solid fa-circle fs-5 me-1" />
                            {doctor.acceptingPatients ? 'Available' : 'Unavailable'}
                        </span>
                    </div>
                    <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                            <h3 className="mb-1">
                                <Link to={`/patient/doctor-profile/${doctor.id}`}>{fullName}</Link>
                            </h3>
                            <div className="d-flex align-items-center">
                                <p className="d-flex align-items-center mb-0 fs-14">
                                    <i className="isax isax-location me-2" />
                                    {location}
                                </p>
                                <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                                <span className="fs-14 fw-medium">
                                    {doctor.experienceYears || 0} Yrs Exp
                                </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="mb-1">Consultation Fees</p>
                                <h3 className="text-orange">${doctor.consultationFee || '0'}</h3>
                            </div>
                            <button
                                onClick={() => handleBookNow(doctor.id)}
                                className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                                type="button"
                            >
                                <i className="isax isax-calendar-1 me-2" />
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Doctor Section */}
            <section className="doctor-section">
                <div className="container">
                    <div
                        className="section-header sec-header-one text-center"
                    >
                        <span className="badge badge-primary">Featured Doctors</span>
                        <h2>Our Highlighted Doctors</h2>
                    </div>

                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3">Loading doctors...</p>
                        </div>
                    ) : error ? (
                        <div className="alert alert-danger text-center" role="alert">
                            {error}
                        </div>
                    ) : doctors.length === 0 ? (
                        <div className="alert alert-info text-center" role="alert">
                            No doctors available at the moment.
                        </div>
                    ) : (
                        <div className="doctors-slider slick-margins slick-arrow-center">
                            <Slider {...Doctoroptions}>
                                {doctors.map(doctor => renderDoctorCard(doctor))}
                            </Slider>
                        </div>
                    )}

                    <div className="doctor-nav nav-bottom owl-nav" />
                </div>
            </section>
            {/* /Doctor Section */}
        </>
    );
}

export default SectionDoctor