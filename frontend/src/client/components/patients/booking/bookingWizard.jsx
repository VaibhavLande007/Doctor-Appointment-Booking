import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'
import { Link } from "react-router-dom";
import Select from "react-select";
import { Calendar, theme } from 'antd';
import moment from 'moment';
import apiService from '../../../../config/apiService';

const BookingWizard = () => {
    const { doctorId } = useParams();
    const history = useHistory();

    // State management
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(true);
    const [doctor, setDoctor] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Form data
    const [bookingData, setBookingData] = useState({
        selectedService: null,
        selectedServices: [],
        appointmentType: 'IN_PERSON',
        selectedClinic: null,
        patientInfo: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            symptoms: '',
            reasonForVisit: ''
        }
    });

    const { token } = theme.useToken();

    // Load doctor details and user info on mount
    useEffect(() => {
        if (doctorId) {
            loadDoctorDetails();
            loadUserInfo();
        }
    }, [doctorId]);

    // Load available slots when date is selected
    useEffect(() => {
        if (selectedDate && doctor) {
            loadAvailableSlots(selectedDate);
        }
    }, [selectedDate, doctor]);

    const loadDoctorDetails = async () => {
        try {
            setLoading(true);
            const response = await apiService.get(`/doctors/${doctorId}`);
            if (response.data.success) {
                setDoctor(response.data.data);
            }
        } catch (error) {
            console.error('Error loading doctor:', error);
            alert('Failed to load doctor details');
        } finally {
            setLoading(false);
        }
    };

    const loadUserInfo = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            if (user) {
                setBookingData(prev => ({
                    ...prev,
                    patientInfo: {
                        ...prev.patientInfo,
                        firstName: user.firstName || '',
                        lastName: user.lastName || '',
                        email: user.email || '',
                        phone: user.phoneNumber || ''
                    }
                }));
            }
        } catch (error) {
            console.error('Error loading user info:', error);
        }
    };

    const loadAvailableSlots = async (date) => {
        try {
            const formattedDate = moment(date).format('YYYY-MM-DD');
            const response = await apiService.get('/appointments/slots', {
                params: {
                    doctorId: doctorId,
                    date: formattedDate
                }
            });

            if (response.data.success) {
                setAvailableSlots(response.data.data || []);
            }
        } catch (error) {
            console.error('Error loading slots:', error);
            setAvailableSlots([]);
        }
    };

    const handleNext = () => {
        if (validateCurrentStep()) {
            // Skip step 5 (payment) - go directly from step 4 to booking
            if (currentStep === 4) {
                handleBookAppointment();
            } else {
                setCurrentStep(currentStep + 1);
            }
        }
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const validateCurrentStep = () => {
        switch (currentStep) {
            case 1:
                if (!bookingData.selectedService) {
                    alert('Please select a specialization');
                    return false;
                }
                return true;
            case 2:
                if (!bookingData.appointmentType) {
                    alert('Please select appointment type');
                    return false;
                }
                if (bookingData.appointmentType === 'IN_PERSON' && !bookingData.selectedClinic) {
                    alert('Please select a clinic');
                    return false;
                }
                return true;
            case 3:
                if (!selectedDate || !selectedSlot) {
                    alert('Please select date and time slot');
                    return false;
                }
                return true;
            case 4:
                const { firstName, lastName, phone, email, reasonForVisit } = bookingData.patientInfo;
                if (!firstName || !lastName || !phone || !email || !reasonForVisit) {
                    alert('Please fill all required fields');
                    return false;
                }
                return true;
            default:
                return true;
        }
    };

    const handleBookAppointment = async () => {
        try {
            setLoading(true);

            // Create appointment with PENDING status (payment will be integrated later)
            const appointmentRequest = {
                doctorId: doctorId,
                appointmentDate: moment(selectedDate).format('YYYY-MM-DD'),
                startTime: selectedSlot.startTime,
                type: bookingData.appointmentType,
                reasonForVisit: bookingData.patientInfo.reasonForVisit,
                symptoms: bookingData.patientInfo.symptoms,
                // When payment gateway is integrated, add:
                // paymentStatus: 'COMPLETED',
                // paymentId: paymentResponse.id,
                // transactionId: paymentResponse.transactionId
            };

            const response = await apiService.post('/appointments', appointmentRequest);

            if (response.data.success) {
                setCurrentStep(5); // Move to confirmation (now step 5 instead of 6)
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert(error.response?.data?.message || 'Failed to book appointment');
        } finally {
            setLoading(false);
        }
    };

    const handleServiceToggle = (serviceId) => {
        setBookingData(prev => {
            const services = prev.selectedServices.includes(serviceId)
                ? prev.selectedServices.filter(id => id !== serviceId)
                : [...prev.selectedServices, serviceId];
            return { ...prev, selectedServices: services };
        });
    };

    const onDateChange = (date) => {
        setSelectedDate(date.toDate());
        setSelectedSlot(null);
    };

    const disabledDate = (current) => {
        return current && current < moment().startOf('day');
    };

    const groupSlotsByTime = () => {
        const grouped = {
            morning: [],
            afternoon: [],
            evening: []
        };

        availableSlots.forEach(slot => {
            const hour = parseInt(slot.startTime.split(':')[0]);
            if (hour < 12) grouped.morning.push(slot);
            else if (hour < 17) grouped.afternoon.push(slot);
            else grouped.evening.push(slot);
        });

        return grouped;
    };

    if (loading && !doctor) {
        return (
            <div className="main-wrapper">
                <div className="doctor-content">
                    <div className="container">
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3">Loading doctor details...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!doctor) {
        return (
            <div className="main-wrapper">
                <div className="doctor-content">
                    <div className="container">
                        <div className="alert alert-danger text-center">
                            Doctor not found
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const fullName = `Dr. ${doctor.firstName} ${doctor.lastName}`;
    const location = doctor.address ? `${doctor.address.street}, ${doctor.address.city}, ${doctor.address.state}` : '';
    const primarySpecialization = doctor.specializations?.[0] || 'General';
    const groupedSlots = groupSlotsByTime();

    return (
        <div className="main-wrapper">
            <header className="header header-custom header-fixed inner-header relative">
                <div className="container">
                    <nav className="navbar navbar-expand-lg header-nav">
                        <div className="navbar-header">
                            <Link to="/home" className="navbar-brand logo">
                                <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="doctor-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <div className="booking-wizard">
                                {/* Updated progress bar - now 5 steps instead of 6 */}
                                <ul className="form-wizard-steps d-sm-flex align-items-center justify-content-center" id="progressbar2">
                                    {[1, 2, 3, 4, 5].map(step => (
                                        <li key={step} className={currentStep === step ? 'progress-active' : currentStep > step ? 'progress-activated' : ''}>
                                            <div className="profile-step">
                                                <span className="multi-steps">{step}</span>
                                                <div className="step-section">
                                                    <h6>
                                                        {step === 1 && 'Specialty'}
                                                        {step === 2 && 'Appointment Type'}
                                                        {step === 3 && 'Date & Time'}
                                                        {step === 4 && 'Basic Information'}
                                                        {step === 5 && 'Confirmation'}
                                                    </h6>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="booking-widget multistep-form mb-5">
                                {/* Doctor Header Card */}
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center flex-wrap row-gap-2">
                                            <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                                <ImageWithBasePath
                                                    src={doctor.profileImage || "assets/img/clients/client-15.jpg"}
                                                    alt={fullName}
                                                />
                                            </span>
                                            <div>
                                                <h4 className="mb-1">
                                                    {fullName}{" "}
                                                    <span className="badge bg-orange fs-12">
                                                        <i className="fa-solid fa-star me-1" />
                                                        {doctor.rating?.toFixed(1) || '0.0'}
                                                    </span>
                                                </h4>
                                                <p className="text-indigo mb-3 fw-medium">{primarySpecialization}</p>
                                                <p className="mb-0">
                                                    <i className="isax isax-location me-2" />
                                                    {location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 1: Specialty & Services */}
                                {currentStep === 1 && (
                                    <div className="card booking-card mt-3">
                                        <div className="card-body booking-body">
                                            <div className="card mb-0">
                                                <div className="card-body pb-1">
                                                    <div className="mb-4 pb-4 border-bottom">
                                                        <label className="form-label">Select Speciality</label>
                                                        <Select
                                                            className="select"
                                                            options={doctor.specializations?.map(spec => ({ value: spec, label: spec }))}
                                                            value={bookingData.selectedService ? { value: bookingData.selectedService, label: bookingData.selectedService } : null}
                                                            onChange={(option) => setBookingData(prev => ({ ...prev, selectedService: option?.value }))}
                                                            placeholder="Select Specialization"
                                                        />
                                                    </div>

                                                    {doctor.services && doctor.services.length > 0 && (
                                                        <>
                                                            <h6 className="mb-3">Available Services</h6>
                                                            <div className="row">
                                                                {doctor.services.map((service, index) => (
                                                                    <div className="col-lg-6 col-md-6" key={index}>
                                                                        <div className={`service-item ${bookingData.selectedServices.includes(service) ? 'active' : ''}`}>
                                                                            <input
                                                                                className="form-check-input ms-0 mt-0"
                                                                                type="checkbox"
                                                                                id={`service-${index}`}
                                                                                checked={bookingData.selectedServices.includes(service)}
                                                                                onChange={() => handleServiceToggle(service)}
                                                                            />
                                                                            <label className="form-check-label ms-2" htmlFor={`service-${index}`}>
                                                                                <span className="service-title d-block mb-1">{service}</span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link to="/patient/doctor-grid" className="btn btn-md btn-dark inline-flex align-items-center rounded-pill">
                                                    <i className="isax isax-arrow-left-2 me-1" />
                                                    Back
                                                </Link>
                                                <button onClick={handleNext} className="btn btn-md btn-primary-gradient inline-flex align-items-center rounded-pill">
                                                    Select Appointment Type
                                                    <i className="isax isax-arrow-right-3 ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Appointment Type */}
                                {currentStep === 2 && (
                                    <div className="card booking-card mt-3">
                                        <div className="card-body booking-body">
                                            <div className="card mb-0">
                                                <div className="card-body pb-1">
                                                    <h6 className="mb-3">Select Appointment Type</h6>
                                                    <div className="row">
                                                        <div className="col-xl col-md-3 col-sm-4">
                                                            <div className="radio-select text-center">
                                                                <input
                                                                    className="form-check-input ms-0 mt-0"
                                                                    name="appointmentType"
                                                                    type="radio"
                                                                    id="type-clinic"
                                                                    checked={bookingData.appointmentType === 'IN_PERSON'}
                                                                    onChange={() => setBookingData(prev => ({ ...prev, appointmentType: 'IN_PERSON' }))}
                                                                />
                                                                <label className="form-check-label" htmlFor="type-clinic">
                                                                    <i className="isax isax-hospital5" />
                                                                    <span className="service-title d-block">Clinic</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl col-md-3 col-sm-4">
                                                            <div className="radio-select text-center">
                                                                <input
                                                                    className="form-check-input ms-0 mt-0"
                                                                    name="appointmentType"
                                                                    type="radio"
                                                                    id="type-video"
                                                                    checked={bookingData.appointmentType === 'VIDEO'}
                                                                    onChange={() => setBookingData(prev => ({ ...prev, appointmentType: 'VIDEO' }))}
                                                                />
                                                                <label className="form-check-label" htmlFor="type-video">
                                                                    <i className="isax isax-video5" />
                                                                    <span className="service-title d-block">Video Call</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl col-md-3 col-sm-4">
                                                            <div className="radio-select text-center">
                                                                <input
                                                                    className="form-check-input ms-0 mt-0"
                                                                    name="appointmentType"
                                                                    type="radio"
                                                                    id="type-phone"
                                                                    checked={bookingData.appointmentType === 'PHONE'}
                                                                    onChange={() => setBookingData(prev => ({ ...prev, appointmentType: 'PHONE' }))}
                                                                />
                                                                <label className="form-check-label" htmlFor="type-phone">
                                                                    <i className="isax isax-call5" />
                                                                    <span className="service-title d-block">Audio Call</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {bookingData.appointmentType === 'IN_PERSON' && doctor.clinics && doctor.clinics.length > 0 && (
                                                        <>
                                                            <h6 className="mb-3 mt-4">Select Clinic</h6>
                                                            <div>
                                                                {doctor.clinics.map((clinic, index) => (
                                                                    <div className="service-item" key={clinic.id}>
                                                                        <input
                                                                            className="form-check-input ms-0 mt-0"
                                                                            name="clinic"
                                                                            type="radio"
                                                                            id={`clinic-${index}`}
                                                                            checked={bookingData.selectedClinic?.id === clinic.id}
                                                                            onChange={() => setBookingData(prev => ({ ...prev, selectedClinic: clinic }))}
                                                                        />
                                                                        <label className="form-check-label ms-2" htmlFor={`clinic-${index}`}>
                                                                            <span className="d-flex align-items-center">
                                                                                {clinic.logoUrl && (
                                                                                    <span className="d-inline-block me-2">
                                                                                        <img src={clinic.logoUrl} className="rounded-circle" style={{ width: 40, height: 40 }} alt="" />
                                                                                    </span>
                                                                                )}
                                                                                <span>
                                                                                    <span className="service-title d-block mb-1">{clinic.name}</span>
                                                                                    <span className="fs-14">{clinic.address}</span>
                                                                                </span>
                                                                            </span>
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <button onClick={handlePrev} className="btn btn-md btn-dark inline-flex align-items-center rounded-pill">
                                                    <i className="isax isax-arrow-left-2 me-1" />
                                                    Back
                                                </button>
                                                <button onClick={handleNext} className="btn btn-md btn-primary-gradient inline-flex align-items-center rounded-pill">
                                                    Select Date & Time
                                                    <i className="isax isax-arrow-right-3 ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Date & Time */}
                                {currentStep === 3 && (
                                    <div className="card booking-card mt-3">
                                        <div className="card-body booking-body">
                                            <div className="card mb-0">
                                                <div className="card-body pb-1">
                                                    <div className="row">
                                                        <div className="col-lg-5">
                                                            <div className="card">
                                                                <div className="card-body p-2 pt-3">
                                                                    <Calendar
                                                                        fullscreen={false}
                                                                        onChange={onDateChange}
                                                                        disabledDate={disabledDate}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="card booking-wizard-slots">
                                                                <div className="card-body">
                                                                    {!selectedDate ? (
                                                                        <p className="text-center text-muted">Please select a date to view available slots</p>
                                                                    ) : availableSlots.length === 0 ? (
                                                                        <p className="text-center text-danger">No slots available for selected date</p>
                                                                    ) : (
                                                                        <>
                                                                            {groupedSlots.morning.length > 0 && (
                                                                                <>
                                                                                    <div className="book-title">
                                                                                        <h6 className="fs-14 mb-2">Morning</h6>
                                                                                    </div>
                                                                                    <div className="token-slot mt-2 mb-3">
                                                                                        {groupedSlots.morning.map(slot => (
                                                                                            <div className="form-check-inline visits me-1" key={slot.id}>
                                                                                                <label className="visit-btns">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        className="form-check-input"
                                                                                                        name="timeSlot"
                                                                                                        checked={selectedSlot?.id === slot.id}
                                                                                                        onChange={() => setSelectedSlot(slot)}
                                                                                                    />
                                                                                                    <span className="visit-rsn">{slot.startTime}</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </>
                                                                            )}

                                                                            {groupedSlots.afternoon.length > 0 && (
                                                                                <>
                                                                                    <div className="book-title">
                                                                                        <h6 className="fs-14 mb-2">Afternoon</h6>
                                                                                    </div>
                                                                                    <div className="token-slot mt-2 mb-3">
                                                                                        {groupedSlots.afternoon.map(slot => (
                                                                                            <div className="form-check-inline visits me-1" key={slot.id}>
                                                                                                <label className="visit-btns">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        className="form-check-input"
                                                                                                        name="timeSlot"
                                                                                                        checked={selectedSlot?.id === slot.id}
                                                                                                        onChange={() => setSelectedSlot(slot)}
                                                                                                    />
                                                                                                    <span className="visit-rsn">{slot.startTime}</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </>
                                                                            )}

                                                                            {groupedSlots.evening.length > 0 && (
                                                                                <>
                                                                                    <div className="book-title">
                                                                                        <h6 className="fs-14 mb-2">Evening</h6>
                                                                                    </div>
                                                                                    <div className="token-slot mt-2 mb-2">
                                                                                        {groupedSlots.evening.map(slot => (
                                                                                            <div className="form-check-inline visits me-1" key={slot.id}>
                                                                                                <label className="visit-btns">
                                                                                                    <input
                                                                                                        type="radio"
                                                                                                        className="form-check-input"
                                                                                                        name="timeSlot"
                                                                                                        checked={selectedSlot?.id === slot.id}
                                                                                                        onChange={() => setSelectedSlot(slot)}
                                                                                                    />
                                                                                                    <span className="visit-rsn">{slot.startTime}</span>
                                                                                                </label>
                                                                                            </div>
                                                                                        ))}
                                                                                    </div>
                                                                                </>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <button onClick={handlePrev} className="btn btn-md btn-dark inline-flex align-items-center rounded-pill">
                                                    <i className="isax isax-arrow-left-2 me-1" />
                                                    Back
                                                </button>
                                                <button onClick={handleNext} className="btn btn-md btn-primary-gradient inline-flex align-items-center rounded-pill">
                                                    Add Basic Information
                                                    <i className="isax isax-arrow-right-3 ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Basic Information */}
                                {currentStep === 4 && (
                                    <div className="card booking-card mt-3">
                                        <div className="card-body booking-body">
                                            <div className="card mb-0">
                                                <div className="card-body pb-1">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">First Name *</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={bookingData.patientInfo.firstName}
                                                                    onChange={(e) => setBookingData(prev => ({
                                                                        ...prev,
                                                                        patientInfo: { ...prev.patientInfo, firstName: e.target.value }
                                                                    }))}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Last Name *</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={bookingData.patientInfo.lastName}
                                                                    onChange={(e) => setBookingData(prev => ({
                                                                        ...prev,
                                                                        patientInfo: { ...prev.patientInfo, lastName: e.target.value }
                                                                    }))}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Phone Number *</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={bookingData.patientInfo.phone}
                                                                    onChange={(e) => setBookingData(prev => ({
                                                                        ...prev,
                                                                        patientInfo: { ...prev.patientInfo, phone: e.target.value }
                                                                    }))}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Email Address *</label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    value={bookingData.patientInfo.email}
                                                                    onChange={(e) => setBookingData(prev => ({
                                                                        ...prev,
                                                                        patientInfo: { ...prev.patientInfo, email: e.target.value }
                                                                    }))}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Symptoms</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={bookingData.patientInfo.symptoms}
                                                                    onChange={(e) => setBookingData(prev => ({
                                                                        ...prev,
                                                                        patientInfo: { ...prev.patientInfo, symptoms: e.target.value }
                                                                    }))}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Reason for Visit *</label>
                                                                <textarea
                                                                    className="form-control"
                                                                    rows={3}
                                                                    value={bookingData.patientInfo.reasonForVisit}
                                                                    onChange={(e) => setBookingData(prev => ({
                                                                        ...prev,
                                                                        patientInfo: { ...prev.patientInfo, reasonForVisit: e.target.value }
                                                                    }))}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <button onClick={handlePrev} className="btn btn-md btn-dark inline-flex align-items-center rounded-pill">
                                                    <i className="isax isax-arrow-left-2 me-1" />
                                                    Back
                                                </button>
                                                <button
                                                    onClick={handleNext}
                                                    className="btn btn-md btn-primary-gradient inline-flex align-items-center rounded-pill"
                                                    disabled={loading}
                                                >
                                                    {loading ? (
                                                        <>
                                                            <span className="spinner-border spinner-border-sm me-2" />
                                                            Booking...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Confirm Booking
                                                            <i className="isax isax-arrow-right-3 ms-1" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* PAYMENT STEP (Step 5) - COMMENTED OUT */}
                                {/*
                                    TODO: Integrate Payment Gateway
                                    When integrating payment:
                                    1. Uncomment this section and update the step numbers in the progress bar (6 steps instead of 5)
                                    2. Update handleNext() in step 4 to go to step 5 (payment) instead of directly booking
                                    3. Move handleBookAppointment() call to payment confirmation
                                    4. Add payment processing logic:
                                       - Initialize payment gateway (Stripe/Razorpay/PayPal)
                                       - Handle payment form submission
                                       - Get payment response with transaction ID
                                    5. Update appointmentRequest in handleBookAppointment() to include:
                                       - paymentStatus: 'COMPLETED'
                                       - paymentId: paymentResponse.id
                                       - transactionId: paymentResponse.transactionId
                                       - amount: calculatedAmount
                                    6. Add error handling for failed payments
                                    7. Update backend to verify payment before confirming appointment
                                */}
                                {/*
                                {currentStep === 5 && (
                                    <div className="card booking-card mt-3">
                                        <div className="card-body booking-body">
                                            <div className="row">
                                                <div className="col-lg-6 d-flex">
                                                    <div className="card flex-fill mb-3 mb-lg-0">
                                                        <div className="card-body">
                                                            <h6 className="mb-3">Payment Gateway</h6>
                                                            // Add payment gateway integration here
                                                            // - Stripe Elements
                                                            // - Razorpay Checkout
                                                            // - PayPal SDK
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex">
                                                    <div className="card flex-fill mb-0">
                                                        <div className="card-body">
                                                            <h6 className="mb-3">Booking Summary</h6>
                                                            // Display booking details and amount
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <button onClick={handlePrev} className="btn btn-md btn-dark inline-flex align-items-center rounded-pill">
                                                    <i className="isax isax-arrow-left-2 me-1" />
                                                    Back
                                                </button>
                                                <button
                                                    onClick={handleBookAppointment}
                                                    className="btn btn-md btn-primary-gradient inline-flex align-items-center rounded-pill"
                                                    disabled={loading}
                                                >
                                                    {loading ? 'Processing...' : 'Confirm & Pay'}
                                                    <i className="isax isax-arrow-right-3 ms-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                */}

                                {/* Step 5: Confirmation (Previously Step 6) */}
                                {currentStep === 5 && (
                                    <div className="card booking-card mt-3">
                                        <div className="card-body booking-body pb-1">
                                            <div className="row">
                                                <div className="col-lg-8 d-flex">
                                                    <div className="flex-fill">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5 className="d-flex align-items-center">
                                                                    <i className="isax isax-tick-circle5 text-success me-2" />
                                                                    Booking Confirmed
                                                                </h5>
                                                            </div>
                                                            <div className="card-header d-flex align-items-center">
                                                                <span className="avatar avatar-lg avatar-rounded me-2 flex-shrink-0">
                                                                    <ImageWithBasePath src={doctor.profileImage || "assets/img/clients/client-16.jpg"} alt="" />
                                                                </span>
                                                                <p className="mb-0">
                                                                    Your Booking has been Confirmed with <span className="text-dark">{fullName}</span>. Please be on time, at least <span className="text-dark">15 minutes</span> before the appointment time.
                                                                </p>
                                                            </div>
                                                            <div className="card-body pb-1">
                                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                                    <h6>Booking Info</h6>
                                                                    <span className="badge bg-warning">Payment Pending</span>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Service</label>
                                                                            <div className="form-plain-text">{bookingData.selectedService || primarySpecialization}</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Date & Time</label>
                                                                            <div className="form-plain-text">
                                                                                {selectedSlot?.startTime} - {selectedSlot?.endTime}, {moment(selectedDate).format('DD MMM YYYY')}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Appointment type</label>
                                                                            <div className="form-plain-text">
                                                                                {bookingData.appointmentType === 'IN_PERSON' && 'Clinic'}
                                                                                {bookingData.appointmentType === 'VIDEO' && 'Video Call'}
                                                                                {bookingData.appointmentType === 'PHONE' && 'Phone Call'}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {bookingData.selectedClinic && (
                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Clinic Name & Location</label>
                                                                                <div className="form-plain-text">{bookingData.selectedClinic.name}</div>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="alert alert-info mt-3">
                                                                    <i className="fa fa-info-circle me-2" />
                                                                    Payment is pending. You can complete the payment from your appointments page or pay at the clinic.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card">
                                                            <div className="card-body d-flex align-items-center justify-content-between">
                                                                <div>
                                                                    <h6 className="mb-1">Need Our Assistance?</h6>
                                                                    <p className="mb-0">Call us in case you face any issue with booking or cancellation</p>
                                                                </div>
                                                                <Link to="#" className="btn btn-light rounded-pill">
                                                                    <i className="isax isax-call5 me-1" />
                                                                    Call Us
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 d-flex">
                                                    <div className="card flex-fill">
                                                        <div className="card-body d-flex flex-column justify-content-between">
                                                            <div className="text-center">
                                                                <h6 className="fs-14 mb-2">Booking Confirmed</h6>
                                                                <span className="booking-id-badge mb-3">Success</span>
                                                                <span className="d-block mb-3">
                                                                    <i className="fa fa-check-circle text-success" style={{ fontSize: '80px' }} />
                                                                </span>
                                                                <p>Your appointment has been successfully booked. Payment is pending.</p>
                                                            </div>
                                                            <div>
                                                                <Link to="/patient/appointments" className="btn w-100 mb-3 btn-md btn-dark inline-flex align-items-center rounded-pill justify-content-center">
                                                                    View My Appointments
                                                                </Link>
                                                                <Link to="/patient/doctor-grid" className="btn w-100 btn-md btn-primary-gradient inline-flex align-items-center rounded-pill justify-content-center">
                                                                    Book Another Appointment
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="text-center">
                                <p className="mb-0">Copyright © 2025. All Rights Reserved, Doccure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingWizard;