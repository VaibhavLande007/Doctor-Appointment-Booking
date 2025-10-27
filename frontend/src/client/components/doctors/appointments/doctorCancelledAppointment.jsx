import React from 'react'
import Header from '../../header'
import DoctorSidebar from '../sidebar'
import DoctorFooter from '../../common/doctorFooter'
import { doctordashboardprofile01, doctordashboardprofile02, doctordashboardprofile3 } from '../../imagepath'
import { Link } from 'react-router-dom'

const DoctorCancelledAppointment = (props) => {
    return (
        <>
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
                                                <span className="badge bg-red me-2">Cancelled</span>
                                                <Link
                                                    to="#reject_reason"
                                                    className="reject-popup"
                                                    data-bs-toggle="modal"
                                                >
                                                    Reason
                                                </Link>
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
                                            <h6>Visit Type</h6>
                                            <span>General</span>
                                        </li>
                                        <li>
                                            <div className="detail-badge-info">
                                                <span className="badge bg-soft-red me-2">
                                                    Status : Reschedule
                                                </span>
                                                <Link
                                                    to="/patient/booking2"
                                                    className="reschedule-btn btn-primary-border"
                                                >
                                                    Reschedule Appointment
                                                </Link>
                                            </div>
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
                <DoctorFooter />
            </div>
            {/* /Page Content */}
            </div>
              {/* Appointment Cancel Reason Modal */}
  <div className="modal fade custom-modal custom-modal-two" id="reject_reason">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Reject Reason</h5>
        <button type="button" data-bs-dismiss="modal" aria-label="Close">
          <span>
            <i className="fa-solid fa-x" />
          </span>
        </button>
      </div>
      <div className="modal-body">
        <div className="reason-of-rejection">
          <p>
            I have an urgent surgery, while our Appointment so i am rejecting
            appointment, you can book an reschedule by next week.
          </p>
          <span className="text-danger">
            Cancelled By You on 23 March 2023
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
{/* /Appointment Cancel Reason Modal */}
        </>

    )
}

export default DoctorCancelledAppointment
