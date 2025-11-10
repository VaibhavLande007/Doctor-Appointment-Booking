import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import DoctorFooter from "../../common/doctorFooter";
import DoctorSidebar from "../sidebar";
import { initialSettings } from "../../common/filter";
import DateRangePicker from "react-bootstrap-daterangepicker/dist";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import apiService from "../../../../config/apiService";

const MyPatient = (props) => {
  const [patients, setPatients] = useState([]);
  const [statistics, setStatistics] = useState({
    active: 0,
    inactive: 0,
    total: 0
  });
  const [activeTab, setActiveTab] = useState('active');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch patient statistics
  const fetchStatistics = async () => {
    try {
      const response = await apiService.get('/patients/doctor/statistics');

      if (response.data.success) {
        setStatistics(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching statistics:', error);
      console.error('Error details:', error.response?.data);
    }
  };

  // Fetch patients based on active/inactive status
  const fetchPatients = async (isActive = null, page = 0) => {
    setLoading(true);
    try {
      const params = {
        page: page,
        size: 20
      };

      if (isActive !== null) {
        params.isActive = isActive;
      }

      if (searchTerm) {
        params.search = searchTerm;
      }

      const response = await apiService.get('/patients/doctor/my-patients', { params });

      if (response.data.success) {
        setPatients(response.data.data.content);
        setTotalPages(response.data.data.totalPages);
        setCurrentPage(response.data.data.page);
      }
    } catch (error) {
      console.error('Error fetching patients:', error);
      console.error('Error details:', error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchStatistics();
    fetchPatients(true, 0);
  }, []);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
    const isActive = tab === 'active' ? true : false;
    fetchPatients(isActive, 0);
  };

  // Handle search with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm !== undefined) {
        setCurrentPage(0);
        const isActive = activeTab === 'active' ? true : false;
        fetchPatients(isActive, 0);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle load more
  const handleLoadMore = () => {
    const isActive = activeTab === 'active' ? true : false;
    fetchPatients(isActive, currentPage + 1);
  };

  // Calculate age
  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return 'N/A';
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Get default profile image
  const getDefaultProfileImage = (gender) => {
    return gender === 'Female'
      ? 'assets/img/doctors-dashboard/profile-02.jpg'
      : 'assets/img/doctors-dashboard/profile-01.jpg';
  };

  return (
    <div>
      <Header {...props} />

      {/* Breadcrumb */}
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
                    Doctor
                  </li>
                  <li className="breadcrumb-item active">My Patients</li>
                </ol>
                <h2 className="breadcrumb-title">My Patients</h2>
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

      {/* Page Content */}
      <div className="content doctor-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              <DoctorSidebar />
            </div>

            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>My Patients</h3>
                <ul className="header-list-btns">
                  <li>
                    <div className="input-block dash-search-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name or email"
                        value={searchTerm}
                        onChange={handleSearch}
                      />
                      <span className="search-icon">
                        <i className="fa-solid fa-magnifying-glass" />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="appointment-tab-head">
                <div className="appointment-tabs">
                  <ul className="nav nav-pills inner-tab" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === 'active' ? 'active' : ''}`}
                        onClick={() => handleTabChange('active')}
                        type="button"
                      >
                        Active<span>{statistics.active}</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link ${activeTab === 'inactive' ? 'active' : ''}`}
                        onClick={() => handleTabChange('inactive')}
                        type="button"
                      >
                        Inactive<span>{statistics.inactive}</span>
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
                    <i className="isax isax-calendar-1 me-1" />
                  </div>

                  <div className="form-sorts dropdown">
                    <Link to="#" className="dropdown-toggle" id="table-filter">
                      <i className="fa-solid fa-filter me-2" />
                      Filter By
                    </Link>
                    <div className="filter-dropdown-menu">
                      <div className="filter-set-view">
                        <div className="accordion" id="accordionExample">
                          <div className="filter-set-content">
                            <div className="filter-set-content-head">
                              <Link
                                to="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Appointment Type
                                <i className="fa-solid fa-chevron-right" />
                              </Link>
                            </div>
                            <div
                              className="filter-set-contents accordion-collapse collapse show"
                              id="collapseOne"
                              data-bs-parent="#accordionExample"
                            >
                              <ul>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" defaultChecked />
                                      <span className="checkmarks" />
                                      <span className="check-title">All Type</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Video Call</span>
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="filter-checks">
                                    <label className="checkboxs">
                                      <input type="checkbox" />
                                      <span className="checkmarks" />
                                      <span className="check-title">Direct Visit</span>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="filter-reset-btns">
                          <Link to="#" className="btn btn-light">
                            Reset
                          </Link>
                          <Link to="#" className="btn btn-primary">
                            Filter Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-content appointment-tab-content grid-patient">
                {loading && patients.length === 0 ? (
                  <div className="text-center p-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : patients.length === 0 ? (
                  <div className="text-center p-5">
                    <p className="text-muted">No patients found</p>
                  </div>
                ) : (
                  <div className="row">
                    {patients.map((patient, index) => (
                      <div key={patient.id || index} className="col-xl-4 col-lg-6 col-md-6 d-flex">
                        <div className="appointment-wrap appointment-grid-wrap">
                          <ul>
                            <li>
                              <div className="appointment-grid-head">
                                <div className="patinet-information">
                                  <Link to={`/doctor/patient-profile/${patient.userId}`}>
                                    <img
                                      src={patient.profileImage || getDefaultProfileImage(patient.gender)}
                                      alt={`${patient.firstName} ${patient.lastName}`}
                                      onError={(e) => {
                                        e.target.src = getDefaultProfileImage(patient.gender);
                                      }}
                                    />
                                  </Link>
                                  <div className="patient-info">
                                    <p>#{patient.id?.substring(0, 8).toUpperCase()}</p>
                                    <h6>
                                      <Link to={`/doctor/patient-profile/${patient.userId}`}>
                                        {patient.firstName} {patient.lastName}
                                      </Link>
                                    </h6>
                                    <ul>
                                      <li>Age : {calculateAge(patient.dateOfBirth)}</li>
                                      <li>{patient.gender || 'N/A'}</li>
                                      <li>{patient.bloodGroup || 'N/A'}</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="appointment-info">
                              <p>
                                <i className="fa-solid fa-calendar" />
                                Total Appointments: {patient.totalAppointments || 0}
                              </p>
                              <p className="mb-0">
                                <i className="fa-solid fa-location-dot" />
                                {patient.city && patient.state
                                  ? `${patient.city}, ${patient.state}`
                                  : patient.city || patient.state || 'N/A'}
                              </p>
                            </li>
                            <li className="appointment-action">
                              <div className="patient-book">
                                <p>
                                  <i className="isax isax-calendar-1" />
                                  Last Booking{' '}
                                  <span>{formatDate(patient.lastBookingDate)}</span>
                                </p>
                              </div>
                              <div className="appointment-stats mt-2">
                                <small className="text-muted">
                                  Completed: {patient.completedAppointments || 0} |
                                  Cancelled: {patient.cancelledAppointments || 0}
                                </small>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}

                    {currentPage < totalPages - 1 && (
                      <div className="col-md-12">
                        <div className="loader-item text-center">
                          <button
                            onClick={handleLoadMore}
                            className="btn btn-load"
                            disabled={loading}
                          >
                            {loading ? 'Loading...' : 'Load More'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DoctorFooter />
    </div>
  );
};

export default MyPatient;