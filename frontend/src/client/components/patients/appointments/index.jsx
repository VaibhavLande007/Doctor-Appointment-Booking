import React, { useState, useEffect } from "react";
import Header from "../../header";
import DashboardSidebar from "../dashboard/sidebar/sidebar";
import Footer from "../../footer";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { Filter, initialSettings } from "../../common/filter";
import DateRangePicker from "react-bootstrap-daterangepicker";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { doctorprofileimg } from "../../imagepath";
import apiService from "../../../../config/apiService";
import moment from "moment";

const PatientAppointments = (props) => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [appointments, setAppointments] = useState({
    upcoming: [],
    cancelled: [],
    completed: []
  });
  const [stats, setStats] = useState({
    upcoming: 0,
    cancelled: 0,
    completed: 0
  });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    loadAllStats();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
    loadAppointments(activeTab);
  }, [activeTab]);

  useEffect(() => {
    loadAppointments(activeTab);
  }, [currentPage]);

  const loadAllStats = async () => {
    try {
      const statuses = {
        upcoming: ["PENDING_APPROVAL", "SCHEDULED"],
        cancelled: "CANCELLED",
        completed: "COMPLETED"
      };

      const counts = {};
      for (const [key, status] of Object.entries(statuses)) {
        try {
          const response = await apiService.get("/appointments/my-appointments", {
            params: { page: 0, size: 1 }
          });

          // Filter by status client-side for now
          const allData = response.data.data?.content || [];
          if (key === "upcoming") {
            counts[key] = allData.filter(apt =>
              apt.status === "PENDING_APPROVAL" || apt.status === "SCHEDULED"
            ).length;
          } else {
            counts[key] = allData.filter(apt => apt.status === status).length;
          }
        } catch (error) {
          console.error(`Error loading ${key} count:`, error);
          counts[key] = 0;
        }
      }
      setStats(counts);
    } catch (error) {
      console.error("Error loading stats:", error);
    }
  };

  const loadAppointments = async (tab) => {
    try {
      setLoading(true);
      const params = {
        page: currentPage,
        size: 10
      };

      console.log(`Loading ${tab} appointments with params:`, params);

      const response = await apiService.get("/appointments/my-appointments", { params });

      console.log(`${tab} response:`, response.data);

      if (response.data.success) {
        const data = response.data.data;
        let filteredContent = data.content || [];

        // Filter by status based on tab
        switch(tab) {
          case "upcoming":
            filteredContent = filteredContent.filter(apt =>
              apt.status === "PENDING_APPROVAL" || apt.status === "SCHEDULED"
            );
            break;
          case "cancelled":
            filteredContent = filteredContent.filter(apt =>
              apt.status === "CANCELLED"
            );
            break;
          case "completed":
            filteredContent = filteredContent.filter(apt =>
              apt.status === "COMPLETED"
            );
            break;
        }

        setAppointments(prev => ({
          ...prev,
          [tab]: filteredContent
        }));
        setTotalPages(data.totalPages || 0);
      }
    } catch (error) {
      console.error(`Error loading ${tab} appointments:`, error);
      console.error("Error details:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelAppointment = async (appointmentId) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?")) {
      return;
    }

    try {
      const response = await apiService.put(`/appointments/${appointmentId}/cancel`);
      if (response.data.success) {
        alert("Appointment cancelled successfully!");
        loadAppointments(activeTab);
        loadAllStats();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to cancel appointment");
    }
  };

  const getAppointmentTypeLabel = (type) => {
    const types = {
      VIDEO: "Video Call",
      PHONE: "Audio Call",
      IN_PERSON: "Direct Visit"
    };
    return types[type] || type;
  };

  const getDoctorName = (appointment) => {
    if (appointment.doctorInfo) {
      return `Dr. ${appointment.doctorInfo.firstName || ''} ${appointment.doctorInfo.lastName || ''}`.trim();
    }
    return "Unknown Doctor";
  };

  const getDoctorImage = (appointment) => {
    return appointment.doctorInfo?.profileImage || doctorprofileimg;
  };

  const getDoctorEmail = (appointment) => {
    return appointment.doctorInfo?.email || "N/A";
  };

  const getDoctorPhone = (appointment) => {
    return appointment.doctorInfo?.phone || "N/A";
  };

  const getStatusBadge = (status) => {
    const badges = {
      PENDING_APPROVAL: <span className="badge bg-warning">Pending Approval</span>,
      SCHEDULED: <span className="badge bg-success">Scheduled</span>,
      CANCELLED: <span className="badge bg-danger">Cancelled</span>,
      COMPLETED: <span className="badge bg-info">Completed</span>
    };
    return badges[status] || null;
  };

  const filteredAppointments = appointments[activeTab].filter(apt => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const doctorName = getDoctorName(apt).toLowerCase();
    const appointmentId = apt.id?.toLowerCase() || '';
    return doctorName.includes(query) || appointmentId.includes(query);
  });

  const renderUpcomingAppointment = (appointment) => (
    <div className="appointment-wrap" key={appointment.id}>
      <ul>
        <li>
          <div className="patinet-information">
            <Link to="/patient/upcoming-appointment">
              <img
                src={getDoctorImage(appointment)}
                alt="Doctor"
                onError={(e) => {
                  e.target.src = "assets/img/doctors/doctor-thumb-02.jpg";
                }}
              />
            </Link>
            <div className="patient-info">
              <p>#{appointment.id?.substring(0, 8)}</p>
              <h6>
                <Link to="/patient/upcoming-appointment">
                  {getDoctorName(appointment)}
                </Link>
                {appointment.status === "PENDING_APPROVAL" && getStatusBadge(appointment.status)}
              </h6>
            </div>
          </div>
        </li>
        <li className="appointment-info">
          <p>
            <i className="fa-solid fa-clock" />
            {moment(appointment.appointmentDate).format("DD MMM YYYY")} {appointment.startTime}
          </p>
          <ul className="d-flex apponitment-types">
            <li>General Visit</li>
            <li>{getAppointmentTypeLabel(appointment.type)}</li>
          </ul>
        </li>
        <li className="mail-info-patient">
          <ul>
            <li>
              <i className="fa-solid fa-envelope" />
              {getDoctorEmail(appointment)}
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              {getDoctorPhone(appointment)}
            </li>
          </ul>
        </li>
        <li className="appointment-action">
          <ul>
            <li>
              <Link to="/patient/upcoming-appointment">
                <i className="fa-solid fa-eye" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-solid fa-comments" />
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleCancelAppointment(appointment.id)}
                className="btn btn-link p-0 text-danger"
                title="Cancel Appointment"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </li>
          </ul>
        </li>
        <li className="appointment-detail-btn">
          {appointment.status === "SCHEDULED" && appointment.type === "VIDEO" && (
            <a
              href={appointment.videoCallLink}
              target="_blank"
              rel="noopener noreferrer"
              className="start-link"
            >
              <i className="fa-solid fa-calendar-check me-1" />
              Attend
            </a>
          )}
          {appointment.status === "SCHEDULED" && appointment.type !== "VIDEO" && (
            <span className="start-link text-muted">
              <i className="fa-solid fa-calendar-check me-1" />
              Confirmed
            </span>
          )}
          {appointment.status === "PENDING_APPROVAL" && (
            <span className="start-link text-warning">
              <i className="fa-solid fa-clock me-1" />
              Awaiting Approval
            </span>
          )}
        </li>
      </ul>
      {appointment.reasonForVisit && (
        <div className="appointment-reason mt-2 ps-3">
          <p className="mb-0 text-muted">
            <strong>Reason:</strong> {appointment.reasonForVisit}
          </p>
        </div>
      )}
    </div>
  );

  const renderCancelledAppointment = (appointment) => (
    <div className="appointment-wrap" key={appointment.id}>
      <ul>
        <li>
          <div className="patinet-information">
            <Link to="/patient/patient-cancelled-appointment">
              <img
                src={getDoctorImage(appointment)}
                alt="Doctor"
                onError={(e) => {
                  e.target.src = "assets/img/doctors/doctor-thumb-02.jpg";
                }}
              />
            </Link>
            <div className="patient-info">
              <p>#{appointment.id?.substring(0, 8)}</p>
              <h6>
                <Link to="/patient/patient-cancelled-appointment">
                  {getDoctorName(appointment)}
                </Link>
              </h6>
            </div>
          </div>
        </li>
        <li className="appointment-info">
          <p>
            <i className="fa-solid fa-clock" />
            {moment(appointment.appointmentDate).format("DD MMM YYYY")} {appointment.startTime}
          </p>
          <ul className="d-flex apponitment-types">
            <li>General Visit</li>
            <li>{getAppointmentTypeLabel(appointment.type)}</li>
          </ul>
        </li>
        <li className="appointment-detail-btn">
          <Link
            to="/patient/patient-cancelled-appointment"
            className="start-link"
          >
            View Details
            <i className="fa-regular fa-circle-right ms-1" />
          </Link>
        </li>
      </ul>
      {appointment.rejectionReason && (
        <div className="appointment-reason mt-2 ps-3">
          <p className="mb-0 text-danger">
            <strong>Cancellation Reason:</strong> {appointment.rejectionReason}
          </p>
        </div>
      )}
    </div>
  );

  const renderCompletedAppointment = (appointment) => (
    <div className="appointment-wrap" key={appointment.id}>
      <ul>
        <li>
          <div className="patinet-information">
            <Link to="/patient/patient-completed-appointment">
              <img
                src={getDoctorImage(appointment)}
                alt="Doctor"
                onError={(e) => {
                  e.target.src = "assets/img/doctors/doctor-thumb-02.jpg";
                }}
              />
            </Link>
            <div className="patient-info">
              <p>#{appointment.id?.substring(0, 8)}</p>
              <h6>
                <Link to="/patient/patient-completed-appointment">
                  {getDoctorName(appointment)}
                </Link>
              </h6>
            </div>
          </div>
        </li>
        <li className="appointment-info">
          <p>
            <i className="fa-solid fa-clock" />
            {moment(appointment.appointmentDate).format("DD MMM YYYY")} {appointment.startTime}
          </p>
          <ul className="d-flex apponitment-types">
            <li>General Visit</li>
            <li>{getAppointmentTypeLabel(appointment.type)}</li>
          </ul>
        </li>
        <li className="appointment-detail-btn">
          <Link
            to="/patient/patient-completed-appointment"
            className="start-link"
          >
            View Details
            <i className="fa-regular fa-circle-right ms-1" />
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <Header {...props} />
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
                  <li className="breadcrumb-item" aria-current="page">
                    Patient
                  </li>
                  <li className="breadcrumb-item active">Appointments</li>
                </ol>
                <h2 className="breadcrumb-title">Appointments</h2>
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

      <div className="content doctor-content">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar />
              </StickyBox>
            </div>

            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>Appointments</h3>
                <ul className="header-list-btns">
                  <li>
                    <div className="input-block dash-search-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <span className="search-icon">
                        <i className="fa-solid fa-magnifying-glass" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="view-icons">
                      <Link to="/patient/patient-appointments" className="active">
                        <i className="fa-solid fa-list" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view-icons">
                      <Link to="/patient/appoinment-grid">
                        <i className="fa-solid fa-th" />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="appointment-tab-head">
                <div className="appointment-tabs">
                  <ul
                    className="nav nav-pills inner-tab"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "upcoming" ? "active" : ""}`}
                        onClick={() => setActiveTab("upcoming")}
                        type="button"
                      >
                        Upcoming<span>{stats.upcoming}</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "cancelled" ? "active" : ""}`}
                        onClick={() => setActiveTab("cancelled")}
                        type="button"
                      >
                        Cancelled<span>{stats.cancelled}</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
                        onClick={() => setActiveTab("completed")}
                        type="button"
                      >
                        Completed<span>{stats.completed}</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="filter-head">
                  <div className="position-relative daterange-wraper me-2">
                    <div className="input-groupicon calender-input">
                      <DateRangePicker initialSettings={initialSettings}>
                        <input
                          className="form-control date-range bookingrange"
                          type="text"
                        />
                      </DateRangePicker>
                    </div>
                    <i className="fa-solid fa-calendar-days" />
                  </div>
                  <Filter />
                </div>
              </div>

              <div className="tab-content appointment-tab-content">
                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : filteredAppointments.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">No appointments found</p>
                  </div>
                ) : (
                  <>
                    {activeTab === "upcoming" && filteredAppointments.map(renderUpcomingAppointment)}
                    {activeTab === "cancelled" && filteredAppointments.map(renderCancelledAppointment)}
                    {activeTab === "completed" && filteredAppointments.map(renderCompletedAppointment)}

                    {totalPages > 1 && (
                      <div className="pagination dashboard-pagination">
                        <ul>
                          <li>
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                              disabled={currentPage === 0}
                            >
                              <i className="fa-solid fa-chevron-left" />
                            </button>
                          </li>
                          {[...Array(totalPages)].map((_, i) => (
                            <li key={i}>
                              <button
                                className={`page-link ${currentPage === i ? "active" : ""}`}
                                onClick={() => setCurrentPage(i)}
                              >
                                {i + 1}
                              </button>
                            </li>
                          ))}
                          <li>
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                              disabled={currentPage === totalPages - 1}
                            >
                              <i className="fa-solid fa-chevron-right" />
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </>
  );
};

export default PatientAppointments;