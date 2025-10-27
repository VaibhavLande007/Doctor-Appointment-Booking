import React from 'react'
import Header from '../../header'
import DoctorSidebar from '../sidebar'
import DoctorFooter from '../../common/doctorFooter'
import { doctordashboardprofile01, doctordashboardprofile02, doctordashboardprofile3, logo, scan } from '../../imagepath'
import { Link } from 'react-router-dom'

const CompletedAppointment = (props) => {
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
                                {/* Profile Sidebar */}
                                <DoctorSidebar />
                                {/* /Profile Sidebar */}
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
                                                    <Link to="#">
                                                        <img
                                                            src={doctordashboardprofile02}
                                                            alt="User Image"
                                                        />
                                                    </Link>
                                                    <div className="patient-info">
                                                        <p>#Apt0001</p>
                                                        <h6>
                                                            <Link to="#">Kelly Joseph </Link>
                                                            <span className="badge new-tag">New</span>
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
                                                        <li>Andrew</li>
                                                    </ul>
                                                </div>
                                                <div className="person-info">
                                                    <p>Type of Appointment</p>
                                                    <ul className="d-flex apponitment-types">
                                                        <li>
                                                            <i className="fa-solid fa-video text-indigo" />
                                                            Video Call
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="appointment-action">
                                                <div className="detail-badge-info">
                                                    <span className="badge bg-green">Completed</span>
                                                </div>
                                                <div className="consult-fees">
                                                    <h6>Consultation Fees : $200</h6>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa-solid fa-comments" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#">
                                                            <i className="fa-solid fa-xmark" />
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
                                                <h6>Visit Type</h6>
                                                <span>General</span>
                                            </li>
                                            <li className="appointment-detail-btn">
                                                <Link to="#view_prescription" data-bs-toggle="modal">
                                                    View Details
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /Appointment Detail Card */}
                                    <div className="recent-appointments">
                                        <h5 className="head-text">Recent Appointments</h5>
                                        {/* Appointment List */}
                                        <div className="appointment-wrap">
                                            <ul>
                                                <li>
                                                    <div className="patinet-information">
                                                        <Link to="#">
                                                            <img
                                                                src={doctordashboardprofile01}
                                                                alt="User Image"
                                                            />
                                                        </Link>
                                                        <div className="patient-info">
                                                            <p>#Apt0001</p>
                                                            <h6>
                                                                <Link to="#">Adrian</Link>
                                                            </h6>
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
                                                        <li>Chat</li>
                                                    </ul>
                                                </li>
                                                <li className="mail-info-patient">
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-envelope" />
                                                            adran@example.com
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-phone" />
                                                            +1 504 368 6874
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="appointment-action">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa-solid fa-eye" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /Appointment List */}
                                        {/* Appointment List */}
                                        <div className="appointment-wrap">
                                            <ul>
                                                <li>
                                                    <div className="patinet-information">
                                                        <Link to="#">
                                                            <img
                                                                src={doctordashboardprofile3}
                                                                alt="User Image"
                                                            />
                                                        </Link>
                                                        <div className="patient-info">
                                                            <p>#Apt0003</p>
                                                            <h6>
                                                                <Link to="#">Samuel</Link>
                                                            </h6>
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
                                                        <li>Video Call</li>
                                                    </ul>
                                                </li>
                                                <li className="mail-info-patient">
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-envelope" />
                                                            samuel@example.com
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-phone" />
                                                            &nbsp;+1 749 104 6291
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="appointment-action">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <i className="fa-solid fa-eye" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* /Appointment List */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Page Content */}
                <DoctorFooter />

            </div>
            {/*View Prescription */}
            <div className="modal fade custom-modals" id="view_prescription">
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">View Prescription</h3>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>
                        <div className="modal-body pb-0">
                            <div className="prescribe-download">
                                <h5>21 Mar 2025</h5>
                                <ul>
                                    <li>
                                        <a href="#" className="print-link">
                                            <i className="isax isax-printer5" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn btn-primary prime-btn">
                                            Download
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="view-prescribe-details">
                                <div className="hospital-addr">
                                    <div className="invoice-logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <h5>
                                        16, Wardlow, Buxton, Derbyshire, SK17 8RW. Phone : 01298 872268{" "}
                                    </h5>
                                    <p>Monday to Sunday - 09:30am to 12:00pm</p>
                                </div>
                                {/* Invoice Item */}
                                <div className="invoice-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="invoice-info">
                                                <h6 className="customer-text">Dr Edalin Hendry</h6>
                                                <p>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="invoice-info2">
                                                <p>
                                                    <span>Date : </span>25 Jan 2025, 07:00
                                                </p>
                                                <p>
                                                    <span>Appointment Type :</span>Video
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="patient-id">
                                                <h6>Patient Details</h6>
                                                <div className="patient-det">
                                                    <h6>Kelly Joseph</h6>
                                                    <ul>
                                                        <li>28Y / Male</li>
                                                        <li>Blood : O+ve</li>
                                                        <li>Patient / Consult ID : OP1245654 / C243546566 </li>
                                                        <li>Type : Outpatient</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Invoice Item */}
                                <div className="appointment-notes">
                                    <h3>Appointment Note</h3>
                                </div>
                                <div className="appoint-wrap">
                                    <h5>Vitals</h5>
                                    <ul>
                                        <li>
                                            <span>Pulse : </span> 64 Bpm
                                        </li>
                                        <li>
                                            <span>Systolic BP : </span>100mmHg
                                        </li>
                                        <li>
                                            <span>Diastolic : </span>60mmHg
                                        </li>
                                        <li>
                                            <span>Spo2 : </span>100%
                                        </li>
                                        <li>
                                            <span>BSA : </span>1.68
                                        </li>
                                        <li>
                                            <span>Height :</span>159 cm
                                        </li>
                                        <li>
                                            <span>Weight : </span>64 Kg
                                        </li>
                                        <li>
                                            <span>Patient Direct from : </span>Walk in / OPD
                                        </li>
                                        <li>
                                            <span>Body Mass Index : </span>25.16 BMI
                                        </li>
                                        <li>
                                            <span>Allergies : </span>Pain near left chest, Pelvic salinity
                                        </li>
                                    </ul>
                                </div>
                                <div className="appoint-wrap">
                                    <h5>Previous Medical History</h5>
                                    <p>
                                        The patient has a history of type 2 diabetes mellitus diagnosed
                                        in 2018, well-controlled on metformin. Additionally, the patient
                                        underwent appendectomy in 2020 without postoperative
                                        complications.
                                    </p>
                                </div>
                                <div className="appoint-wrap">
                                    <h5>Clinical Notes</h5>
                                    <p>
                                        The patient presents with a 3-day history of worsening cough and
                                        fever, peaking at 38.5°C, noted for decreased appetite. Physical
                                        examination reveals bilateral wheezing and crackles on lung
                                        auscultation, suggestive of a respiratory infection.
                                    </p>
                                </div>
                                <div className="appoint-wrap">
                                    <h5>Complaint</h5>
                                    <p>
                                        An account of the present illness, which includes the
                                        circumstances surrounding the onset of recent health changes and
                                        the chronology of subsequent events that have led the patient to
                                        seek medi
                                    </p>
                                </div>
                                <div className="appoint-wrap">
                                    <h5>Medications</h5>
                                    <p>
                                        The patient has a history of type 2 diabetes mellitus diagnosed
                                        in 2018, well-controlled on metformin. Additionally, the patient
                                        underwent appendectomy in 2020 without postoperative
                                        complications.
                                    </p>
                                </div>
                                {/* Invoice Item */}
                                <div className="invoice-item invoice-table-wrap">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive inv-table">
                                                <table className="invoice-table table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>SNO</th>
                                                            <th>Medecine Name</th>
                                                            <th>Dosage</th>
                                                            <th>Frequency</th>
                                                            <th>Duration</th>
                                                            <th>Timings</th>
                                                            <th>Instruction</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Ecosprin 75MG [Asprin 75 MG Oral Tab]</td>
                                                            <td>
                                                                75 mg <span>Oral Tab</span>
                                                            </td>
                                                            <td>1-0-0-1</td>
                                                            <td>1 month</td>
                                                            <td>Before Meal</td>
                                                            <td>Take in alternate das, with hot water</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Alexer 90MG Tab</td>
                                                            <td>
                                                                90 mg <span>Oral Tab</span>
                                                            </td>
                                                            <td>1-0-0-1</td>
                                                            <td>1 month</td>
                                                            <td>Before Meal</td>
                                                            <td>Take in alternate das, with hot water</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Ramistar XL2.5</td>
                                                            <td>
                                                                60 mg <span>Oral Tab</span>
                                                            </td>
                                                            <td>1-0-0-0</td>
                                                            <td>1 month</td>
                                                            <td>After Meal</td>
                                                            <td>Take in alternate das, with hot water</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>Metscore</td>
                                                            <td>
                                                                90 mg <span>Oral Tab</span>
                                                            </td>
                                                            <td>1-0-0-1</td>
                                                            <td>1 month</td>
                                                            <td>After Meal</td>
                                                            <td>Take in alternate das, with hot water</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Invoice Item */}
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="scan-wrap">
                                            <h6>Scan to download report</h6>
                                            <img src={scan} alt="scan" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="prescriber-info">
                                            <h6>Dr. Edalin Hendry</h6>
                                            <p>Dept of Cardiology</p>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav inv-paginate justify-content-center">
                                    <li>
                                        Page 01 of{" "}
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription2"
                                            data-bs-dismiss="modal"
                                        >
                                            02
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /View Prescription */}
        </div>

    )
}

export default CompletedAppointment
