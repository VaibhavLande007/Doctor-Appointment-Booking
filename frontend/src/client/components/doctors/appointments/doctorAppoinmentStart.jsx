/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import DoctorSidebar from '../sidebar'
import Header from '../../header'
import DoctorFooter from '../../common/doctorFooter'
import { doctordashboardprofile02 } from '../../imagepath'
import { Link } from 'react-router-dom'
import { TagsInput } from "react-tag-input-component";
import Select from "react-select";

const DoctorAppoinmentStart = (props) => {
    const [owner, setOwner] = useState(["Skin Allergy"]);
    const [lab, setLab] = useState(["Hemoglobin A1c (HbA1c) , Liver Function Tests (LFTs)"]);
    const handleLabChange = (value) => {
        setLab(value);
    };
    const labsArray = lab && lab[0] ? lab[0].split(' , ') : [];


    const [complaint, setComplaint] = useState(["Fever , Headache , Stomach Pain"]);
    const handleLabChange1 = (value) => {
        setComplaint(value);
    };
    // Splitting the string into separate items whenever a comma is encountered
    const complaintsArray = complaint && complaint[0] ? complaint[0].split(' , ') : [];

    const [medications, setMedications] = useState([{ id: 1 }]);
    const addMedication = () => {
        setMedications([...medications, { id: medications.length + 1 }]);
    };

    const removeMedication = (id) => {
        setMedications(medications.filter(medication => medication.id !== id));
    };
    const type = [
        { value: 'Direct Visit', label: 'Direct Visit' },
        { value: 'Video Call', label: 'Video Call' },
      ];
    const duration = [
        { value: 'Selectt', label: 'Select' },
        { value: 'Not Available', label: 'Not Available' },
      ];
     
      
    return (
        <div>
        <div className='main-wrapper'>
            <Header {...props} />
            {/* Breadcrumb */}
            <div className="breadcrumb-bar-two">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <h2 className="breadcrumb-title">Appointment Detail</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home-1">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        Appointment Detail
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
                            <div className='stickybar'>

                                {/* Profile Sidebar */}
                                <DoctorSidebar />
                                {/* /Profile Sidebar */}
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="dashboard-header">
                                <div className="header-back">
                                    <Link to="/doctor/appointments" className="back-arrow">
                                        <i className="fa-solid fa-arrow-left" />
                                    </Link>
                                    <h3>Appointment Details</h3>
                                </div>
                            </div>
                            <div className="appointment-details-wrap">
                                {/* Appointment Detail Card */}
                                <div className="appointment-wrap appointment-detail-card">
                                    <ul>
                                        <li>
                                            <div className="patinet-information">
                                                <Link to="/doctor/patient-profile">
                                                    <img
                                                        src={doctordashboardprofile02}
                                                        alt="User Image"
                                                    />
                                                </Link>
                                                <div className="patient-info">
                                                    <p>#Apt0001</p>
                                                    <h6>
                                                        <Link to="/doctor/patient-profile">Kelly Joseph </Link>
                                                    </h6>
                                                    <div className="mail-info-patient">
                                                        <ul>
                                                            <li>
                                                                <i className="fa-solid fa-envelope" />
                                                                kelly@example.com
                                                            </li>
                                                            <li>
                                                                <i className="fa-solid fa-phone" />
                                                                +1 504 368 6874
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="appointment-info">
                                            <div className="person-info">
                                                <p>Person with patient</p>
                                                <ul className="d-flex apponitment-types">
                                                    <li>Andrew (45)</li>
                                                </ul>
                                            </div>
                                            <div className="person-info">
                                                <p>Type of Appointment</p>
                                                <ul className="d-flex apponitment-types">
                                                    <li>
                                                        <i className="fa-solid fa-hospital text-green" />
                                                        Direct Visit
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="appointment-action">
                                            <div className="detail-badge-info">
                                                <span className="badge bg-yellow">Upcoming</span>
                                            </div>
                                            <div className="consult-fees">
                                                <h6>Consultation Fees : $200</h6>
                                            </div>
                                            <ul>
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
                                        </li>
                                    </ul>
                                    <ul className="detail-card-bottom-info">
                                        <li>
                                            <h6>Appointment Date &amp; Time</h6>
                                            <span>22 Jul 2023 - 12:00 pm</span>
                                        </li>
                                        <li>
                                            <h6>Clinic Location</h6>
                                            <span>Adrian’s Dentistry</span>
                                        </li>
                                        <li>
                                            <h6>Location</h6>
                                            <span>Newyork, United States</span>
                                        </li>
                                        <li>
                                            <h6>Visit Type</h6>
                                            <span>General</span>
                                        </li>
                                        <li>
                                            <div className="start-btn">
                                                <Link to="#" className="btn btn-secondary">
                                                    Inprogress
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* /Appointment Detail Card */}
                                <div className="create-appointment-details">
                                    <div className="session-end-head">
                                        <h6>
                                            <span>Session Ends in</span>08M:00S
                                        </h6>
                                    </div>
                                    <h5 className="head-text">Create Appointment Details</h5>
                                    <div className="create-details-card">
                                        <div className="create-details-card-head">
                                            <div className="card-title-text">
                                                <h5>Patient Information</h5>
                                            </div>
                                            <div className="patient-info-box">
                                                <div className="row">
                                                    <div className="col-xl-3 col-md-6">
                                                        <ul className="info-list">
                                                            <li>Age / Gender</li>
                                                            <li>
                                                                <h6>28 Years / Female</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <ul className="info-list">
                                                            <li>Address</li>
                                                            <li>
                                                                <h6>Newyork, United States</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <ul className="info-list">
                                                            <li>Blood Group</li>
                                                            <li>
                                                                <h6>O+ve</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <ul className="info-list">
                                                            <li>No of Visit</li>
                                                            <li>
                                                                <h6>0</h6>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="create-details-card-body">
                                            <form>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Vitals</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">Temprature</label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Eg : 97.8"
                                                                    />
                                                                    <span className="input-group-text">F</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">Pulse</label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder={454}
                                                                    />
                                                                    <span className="input-group-text">mmHg</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">
                                                                    Respiratory Rate
                                                                </label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Eg : 97.8"
                                                                    />
                                                                    <span className="input-group-text">rpm</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">SPO2</label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Eg :  98"
                                                                    />
                                                                    <span className="input-group-text">%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">Height</label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Eg : 97.8"
                                                                    />
                                                                    <span className="input-group-text">cm</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">Weight</label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Eg : 97.8"
                                                                    />
                                                                    <span className="input-group-text">Kg</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">Waist</label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Eg : 97.8	"
                                                                    />
                                                                    <span className="input-group-text">cm</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">BSA</label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Eg : 54"
                                                                    />
                                                                    <span className="input-group-text">M</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-md-6">
                                                            <div className="input-block input-block-new">
                                                                <label className="form-label">BMI</label>
                                                                <div className="input-text-field">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Eg : 454"
                                                                    />
                                                                    <span className="input-group-text">kg/cm</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Previous Medical History</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">
                                                                <textarea
                                                                    className="form-control"
                                                                    rows={3}
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Clinical Notes</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">
                                                                <textarea
                                                                    className="form-control"
                                                                    rows={3}
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Clinical Notes</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">

                                                                <TagsInput
                                                                    // className="input-tags form-control"
                                                                    value={owner}
                                                                    onChange={setOwner}
                                                                    placeHolder="Type New" // This sets the placeholder value

                                                                />
                                                                <Link to="#" className="input-text save-btn">
                                                                    Save
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Laboratory Tests</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">
                                                                <TagsInput
                                                                    // className="input-tags form-control"
                                                                    value={labsArray}
                                                                    onChange={handleLabChange}
                                                                // placeHolder="Type New" // This sets the placeholder value
                                                                />
                                                                <Link to="#" className="input-text save-btn">
                                                                    Save
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Complaints</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">

                                                                <TagsInput
                                                                    // className="input-tags form-control"
                                                                    value={complaintsArray}
                                                                    onChange={handleLabChange1}
                                                                    placeHolder="Type New" // This sets the placeholder value
                                                                />
                                                                <Link to="#" className="input-text save-btn">
                                                                    Save
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Diagonosis</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">
                                                                <div className="input-field-set">
                                                                    <label className="form-label">Fever</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Diagnosis"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">
                                                                <div className="input-field-set">
                                                                    <label className="form-label">Headache</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Diagnosis"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">
                                                                <div className="input-field-set">
                                                                    <label className="form-label">Stomach Pain</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Diagnosis"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Medications</h5>
                                                    </div>
                                                    <div className="row meditation-row">
                                                        <div className="col-md-12">
                                                            {medications.map((medication, index) => (
                                                                <div className="d-flex flex-wrap medication-wrap align-items-center">
                                                                    <div className="input-block input-block-new">
                                                                        <label className="form-label">Name</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                    <div className="input-block input-block-new">
                                                                        <label className="form-label">Type</label>
                                                                       
                                                                        <Select
                                                                        // className="select form-control"
                                                                        placeholder="Select"
                                                                        options={type}
                                                                      />
                                                                    </div>
                                                                    <div className="input-block input-block-new">
                                                                        <label className="form-label">Dosage</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                    <div className="input-block input-block-new">
                                                                        <label className="form-label">Duration</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="1-0-0"
                                                                        />
                                                                    </div>
                                                                    <div className="input-block input-block-new">
                                                                        <label className="form-label">Duration</label>
                                                                      
                                                                        <Select
                                                                        // className="select form-control"
                                                                        placeholder="Select"
                                                                        options={duration}
                                                                      />
                                                                    </div>
                                                                    <div className="input-block input-block-new">
                                                                        <label className="form-label">Instruction</label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                    <div className="delete-row">
                                                                        <Link
                                                                            to="#"
                                                                            className="delete-btn delete-medication trash text-danger"
                                                                            onClick={() => removeMedication(medication.id)}
                                                                        >
                                                                            <i className="isax isax-trash" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <div className="add-new-med text-end mb-4">
                                                                <Link to="#" className="add-medical more-item mb-0" onClick={addMedication}>
                                                                    Add New
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Advice</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">
                                                                <textarea
                                                                    className="form-control"
                                                                    rows={3}
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="start-appointment-set">
                                                    <div className="form-bg-title">
                                                        <h5>Follow Up</h5>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-block input-block-new">
                                                                <textarea
                                                                    className="form-control"
                                                                    rows={3}
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-set-button">
                                                        <button className="btn btn-light" type="button">
                                                            Cancel
                                                        </button>
                                                        <button
                                                            className="btn btn-primary"
                                                            type="button"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#end_session"
                                                        >
                                                            Save &amp; End Appointment
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
           
            <DoctorFooter />
        </div>
        <div className="modal fade info-modal" id="end_session">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="success-wrap">
                        <div className="success-info">
                            <div className="text-center">
                                <span className="icon-success bg-blue">
                                    <i className="fa-solid fa-calendar-check" />
                                </span>
                                <h3>Session Ended</h3>
                                <p>Your Appointment has been Ended</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-btn text-center">
                        <Link
                            to="#"
                            className="btn btn-gray me-1"
                            data-bs-dismiss="modal"
                        >
                            Go to Appointments
                        </Link>
                        <Link
                            to="#"
                            className="btn btn-primary prime-btn"
                            data-bs-dismiss="modal"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>

    )
}

export default DoctorAppoinmentStart
