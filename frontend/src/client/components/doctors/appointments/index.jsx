import React, { useState, useEffect } from "react";
import Header from "../../header";
import DoctorSidebar from "../sidebar";
import DoctorFooter from "../../common/doctorFooter";
import { Filter, initialSettings } from "../../common/filter";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { doctordashboardprofile06 } from "../../imagepath";
import apiService from "../../../../config/apiService";
import moment from "moment";

const Appointments = (props) => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [appointments, setAppointments] = useState({
    pending: [],
    upcoming: [],
    cancelled: [],
    completed: []
  });
  const [stats, setStats] = useState({
    pending: 0,
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
      const endpoints = {
        pending: { endpoint: "/appointments/doctor/pending", status: null },
        upcoming: { endpoint: "/appointments/doctor/appointments", status: "SCHEDULED" },
        cancelled: { endpoint: "/appointments/doctor/appointments", status: "CANCELLED" },
        completed: { endpoint: "/appointments/doctor/appointments", status: "COMPLETED" }
      };

      const counts = {};
      for (const [key, config] of Object.entries(endpoints)) {
        try {
          const params = { page: 0, size: 1 };
          if (config.status) params.status = config.status;

          const response = await apiService.get(config.endpoint, { params });
          counts[key] = response.data.data?.totalElements || 0;
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
      let endpoint = "";
      let params = {
        page: currentPage,
        size: 10
      };

      switch(tab) {
        case "pending":
          endpoint = "/appointments/doctor/pending";
          break;
        case "upcoming":
          endpoint = "/appointments/doctor/appointments";
          params.status = "SCHEDULED";
          break;
        case "cancelled":
          endpoint = "/appointments/doctor/appointments";
          params.status = "CANCELLED";
          break;
        case "completed":
          endpoint = "/appointments/doctor/appointments";
          params.status = "COMPLETED";
          break;
        default:
          endpoint = "/appointments/doctor/appointments";
      }

      console.log(`Loading ${tab} appointments:`, endpoint, params);

      const response = await apiService.get(endpoint, { params });

      console.log(`${tab} response:`, response.data);

      if (response.data.success) {
        const data = response.data.data;
        setAppointments(prev => ({
          ...prev,
          [tab]: data.content || []
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

  const handleApprove = async (appointmentId) => {
    if (!window.confirm("Are you sure you want to approve this appointment?")) {
      return;
    }

    try {
      const response = await apiService.put(`/appointments/${appointmentId}/approve`);
      if (response.data.success) {
        alert("Appointment approved successfully!");
        loadAppointments("pending");
        loadAppointments("upcoming");
        loadAllStats();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to approve appointment");
    }
  };

  const handleReject = async (appointmentId) => {
    const reason = prompt("Please enter the reason for rejection (optional):");

    try {
      const response = await apiService.put(`/appointments/${appointmentId}/reject`, null, {
        params: { reason: reason || "No reason provided" }
      });

      if (response.data.success) {
        alert("Appointment rejected successfully!");
        loadAppointments("pending");
        loadAllStats();
      }
    } catch (error) {
      alert(error.response?.data?.message || "Failed to reject appointment");
    }
  };

  const handleCancel = async (appointmentId) => {
    const reason = prompt("Please enter the reason for cancellation:");
    if (!reason) return;

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

  const getPatientName = (appointment) => {
    if (appointment.patientInfo) {
      return `${appointment.patientInfo.firstName || ''} ${appointment.patientInfo.lastName || ''}`.trim();
    }
    return "Unknown Patient";
  };

  const getPatientImage = (appointment) => {
    return appointment.patientInfo?.profileImage || doctordashboardprofile06;
  };

  const getPatientEmail = (appointment) => {
    return appointment.patientInfo?.email || "N/A";
  };

  const getPatientPhone = (appointment) => {
    return appointment.patientInfo?.phone || "N/A";
  };

  const filteredAppointments = appointments[activeTab].filter(apt => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const patientName = getPatientName(apt).toLowerCase();
    const appointmentId = apt.id?.toLowerCase() || '';
    return patientName.includes(query) || appointmentId.includes(query);
  });

  const renderPendingAppointment = (appointment) => (
    <div className="appointment-wrap" key={appointment.id}>
      <ul>
        <li>
          <div className="patinet-information">
            <Link to={`/doctor/doctor-upcoming-appointment/${appointment.id}`}>
              <img
                src={getPatientImage(appointment)}
                alt="User"
                onError={(e) => {
                  e.target.src = "assets/img/clients/client-15.jpg";
                }}
              />
            </Link>
            <div className="patient-info">
              <p>#{appointment.id?.substring(0, 8)}</p>
              <h6>
                <Link to={`/doctor/doctor-upcoming-appointment/${appointment.id}`}>
                  {getPatientName(appointment)}
                </Link>
                <span className="badge bg-warning ms-2">Pending</span>
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
            <li>{appointment.specialization || "General Visit"}</li>
            <li>{getAppointmentTypeLabel(appointment.type)}</li>
          </ul>
        </li>
        <li className="mail-info-patient">
          <ul>
            <li>
              <i className="fa-solid fa-envelope" />
              {getPatientEmail(appointment)}
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              {getPatientPhone(appointment)}
            </li>
          </ul>
        </li>
        <li className="appointment-action">
          <div className="d-flex gap-2">
            <button
              onClick={() => handleApprove(appointment.id)}
              className="btn btn-sm btn-success"
              title="Approve"
            >
              <i className="fa-solid fa-check" /> Approve
            </button>
            <button
              onClick={() => handleReject(appointment.id)}
              className="btn btn-sm btn-danger"
              title="Reject"
            >
              <i className="fa-solid fa-times" /> Reject
            </button>
          </div>
        </li>
      </ul>
      {appointment.reasonForVisit && (
        <div className="appointment-reason mt-2 ps-3">
          <p className="mb-0"><strong>Reason:</strong> {appointment.reasonForVisit}</p>
          {appointment.symptoms && (
            <p className="mb-0"><strong>Symptoms:</strong> {appointment.symptoms}</p>
          )}
        </div>
      )}
    </div>
  );

  const renderUpcomingAppointment = (appointment) => (
    <div className="appointment-wrap" key={appointment.id}>
      <ul>
        <li>
          <div className="patinet-information">
            <Link to={`/doctor/doctor-upcoming-appointment/${appointment.id}`}>
              <img
                src={getPatientImage(appointment)}
                alt="User"
                onError={(e) => {
                  e.target.src = "assets/img/clients/client-15.jpg";
                }}
              />
            </Link>
            <div className="patient-info">
              <p>#{appointment.id?.substring(0, 8)}</p>
              <h6>
                <Link to={`/doctor/doctor-upcoming-appointment/${appointment.id}`}>
                  {getPatientName(appointment)}
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
            <li>{appointment.specialization || "General Visit"}</li>
            <li>{getAppointmentTypeLabel(appointment.type)}</li>
          </ul>
        </li>
        <li className="mail-info-patient">
          <ul>
            <li>
              <i className="fa-solid fa-envelope" />
              {getPatientEmail(appointment)}
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              {getPatientPhone(appointment)}
            </li>
          </ul>
        </li>
        <li className="appointment-action">
          <ul>
            <li>
              <Link to={`/doctor/doctor-upcoming-appointment/${appointment.id}`}>
                <i className="fa-solid fa-eye" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="isax isax-messages-25" />
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleCancel(appointment.id)}
                className="btn btn-link p-0"
              >
                <i className="isax isax-close-circle5" />
              </button>
            </li>
          </ul>
        </li>
        <li className="appointment-start">
          <Link
            to={`/doctor/doctor-appointment-start/${appointment.id}`}
            className="start-link"
          >
            Start Now
          </Link>
        </li>
      </ul>
    </div>
  );

  const renderCancelledAppointment = (appointment) => (
    <div className="appointment-wrap" key={appointment.id}>
      <ul>
        <li>
          <div className="patinet-information">
            <Link to={`/doctor/doctor-cancelled-appointment/${appointment.id}`}>
              <img
                src={getPatientImage(appointment)}
                alt="User"
                onError={(e) => {
                  e.target.src = "assets/img/clients/client-15.jpg";
                }}
              />
            </Link>
            <div className="patient-info">
              <p>#{appointment.id?.substring(0, 8)}</p>
              <h6>
                <Link to={`/doctor/doctor-cancelled-appointment/${appointment.id}`}>
                  {getPatientName(appointment)}
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
            <li>{appointment.specialization || "General Visit"}</li>
            <li>{getAppointmentTypeLabel(appointment.type)}</li>
          </ul>
        </li>
        <li className="appointment-detail-btn">
          <Link
            to={`/doctor/doctor-cancelled-appointment/${appointment.id}`}
            className="start-link"
          >
            View Details
          </Link>
        </li>
      </ul>
    </div>
  );

  const renderCompletedAppointment = (appointment) => (
    <div className="appointment-wrap" key={appointment.id}>
      <ul>
        <li>
          <div className="patinet-information">
            <Link to={`/doctor/doctor-completed-appointment/${appointment.id}`}>
              <img
                src={getPatientImage(appointment)}
                alt="User"
                onError={(e) => {
                  e.target.src = "assets/img/clients/client-15.jpg";
                }}
              />
            </Link>
            <div className="patient-info">
              <p>#{appointment.id?.substring(0, 8)}</p>
              <h6>
                <Link to={`/doctor/doctor-completed-appointment/${appointment.id}`}>
                  {getPatientName(appointment)}
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
            <li>{appointment.specialization || "General Visit"}</li>
            <li>{getAppointmentTypeLabel(appointment.type)}</li>
          </ul>
        </li>
        <li className="appointment-detail-btn">
          <Link
            to={`/doctor/doctor-completed-appointment/${appointment.id}`}
            className="start-link"
          >
            View Details
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <Header {...props} />
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/home">
                      <i className="isax isax-home-15" />
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Doctor
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

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              <DoctorSidebar />
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
                      <Link to="/doctor/appointments" className="active">
                        <i className="isax isax-grid-7"></i>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view-icons">
                      <Link to="/doctor/doctor-appointments-grid">
                        <i className="fa-solid fa-th" />
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="view-icons">
                      <Link to="#">
                        <i className="isax isax-calendar-tick"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="appointment-tab-head">
                <div className="appointment-tabs">
                  <ul className="nav nav-pills inner-tab" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "pending" ? "active" : ""}`}
                        onClick={() => setActiveTab("pending")}
                        type="button"
                      >
                        Pending Approval
                        <span>{stats.pending}</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "upcoming" ? "active" : ""}`}
                        onClick={() => setActiveTab("upcoming")}
                        type="button"
                      >
                        Upcoming
                        <span>{stats.upcoming}</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "cancelled" ? "active" : ""}`}
                        onClick={() => setActiveTab("cancelled")}
                        type="button"
                      >
                        Cancelled
                        <span>{stats.cancelled}</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === "completed" ? "active" : ""}`}
                        onClick={() => setActiveTab("completed")}
                        type="button"
                      >
                        Completed
                        <span>{stats.completed}</span>
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
                    {activeTab === "pending" && filteredAppointments.map(renderPendingAppointment)}
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
      <DoctorFooter {...props} />
    </div>
  );
};

export default Appointments;