import React from 'react'
import { doctordashboardprofile06 } from '../../imagepath'

const PatientSidebar = () => {
    return (
        <div>
            <div className="profile-sidebar patient-sidebar profile-sidebar-new">
                <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                        <a href="/patient/profile" className="booking-doc-img">
                            <img
                                src={doctordashboardprofile06}
                                alt="User Image"
                            />
                        </a>
                        <div className="profile-det-info">
                            <h3>
                                <a href="/patient/profile">Hendrita</a>
                            </h3>
                            <div className="patient-details">
                                <h5 className="mb-0">Patient ID : PT254654</h5>
                            </div>
                            <span>
                                Female <i className="fa-solid fa-circle" /> 32 years 03
                                Months
                            </span>
                        </div>
                    </div>
                </div>
                <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                        <ul>
                            <li className="active">
                                <a href="/patient/dashboard">
                                    <i className="fa-solid fa-shapes" />
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/patient-appointments">
                                    <i className="fa-solid fa-calendar-days" />
                                    <span>My Appointments</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/favourites">
                                    <i className="fa-solid fa-user-doctor" />
                                    <span>Favourites</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/dependent">
                                    <i className="fa-solid fa-user-plus" />
                                    <span>Dependants</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/medicalrecords">
                                    <i className="fa-solid fa-money-bill-1" />
                                    <span>Add Medical Records</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/accounts">
                                    <i className="fa-solid fa-file-contract" />
                                    <span>Accounts</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/patient-invoice">
                                    <i className="fa-solid fa-file-lines" />
                                    <span>Invoices</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/patient-chat">
                                    <i className="fa-solid fa-comments" />
                                    <span>Message</span>
                                    <small className="unread-msg">7</small>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/profile">
                                    <i className="fa-solid fa-user-pen" />
                                    <span>Profile Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/medicaldetails">
                                    <i className="fa-solid fa-shield-halved" />
                                    <span>Medical Details</span>
                                </a>
                            </li>
                            <li>
                                <a href="/patient/change-password">
                                    <i className="fa-solid fa-key" />
                                    <span>Change Password</span>
                                </a>
                            </li>
                            <li>
                                <a href="/login">
                                    <i className="fa-solid fa-calendar-check" />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default PatientSidebar
