import React, { useState } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { doctordashboardprofile06 } from "../../imagepath.jsx";
import DatePicker from "react-datepicker";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";

const MedicalDetails = (props) => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="main-wrapper">
        <Header {...props} />
        <>
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
                        Patient
                      </li>
                      <li className="breadcrumb-item active">Vitals</li>
                    </ol>
                    <h2 className="breadcrumb-title">Vitals</h2>
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
          {/* /Breadcrumb */}
        </>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <DashboardSidebar />
                </StickyBox>
              </div>
              <div className="col-lg-8 col-xl-9">
                <div className="dashboard-header">
                  <h3>Medical Details</h3>
                </div>
                <div className="dashboard-card w-100 medical-details-item">
                  <div className="dashboard-card-head medical-detail-head">
                    <div className="header-title">
                      <h6>Latest updated medical details</h6>
                    </div>
                    <div className="latest-update">
                      <p>
                        <i className="fa-solid fa-calendar-check me-2" />
                        Last update on : 24Mar 2023
                      </p>
                    </div>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="row">
                      <div className="col-xl-2 col-lg-4 col-md-6">
                        <div className="health-records icon-red">
                          <span>
                            <i className="fa-solid fa-syringe" />
                            Blood Pressure
                          </span>
                          <h3>100 mg/dl</h3>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-4 col-md-6">
                        <div className="health-records icon-orange">
                          <span>
                            <i className="fa-solid fa-heart" />
                            Heart Rate
                          </span>
                          <h3>140 Bpm</h3>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-4 col-md-6">
                        <div className="health-records icon-dark-blue">
                          <span>
                            <i className="fa-solid fa-notes-medical" />
                            Glucose Level
                          </span>
                          <h3>70 - 90</h3>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-4 col-md-6">
                        <div className="health-records icon-amber">
                          <span>
                            <i className="fa-solid fa-temperature-high" />
                            Body Temprature
                          </span>
                          <h3>37.5 C</h3>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-4 col-md-6">
                        <div className="health-records icon-purple">
                          <span>
                            <i className="fa-solid fa-user-pen" />
                            BMI{" "}
                          </span>
                          <h3>20.1 kg/m2</h3>
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-4 col-md-6">
                        <div className="health-records icon-blue">
                          <span>
                            <i className="fa-solid fa-highlighter" />
                            SPo2
                          </span>
                          <h3>96%</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="search-header">
                      <div className="search-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span className="search-icon">
                          <i className="fa-solid fa-magnifying-glass" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="add-med-record">
                      <Link
                        to="#add-med-record"
                        className="btn btn-primary prime-btn"
                        data-bs-toggle="modal"
                      >
                        Add Medical Details
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="custom-table">
                      <div className="table-responsive">
                        <table className="table table-center mb-0">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Patient Name</th>
                              <th>BMI</th>
                              <th>Heart Rate</th>
                              <th>FBC Status</th>
                              <th>Weight</th>
                              <th>Added on</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link
                                  className="text-blue-600"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#med-detail"
                                >
                                  #MD-123
                                </Link>
                              </td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link
                                    to="/doctor/patient-profile"
                                    className="avatar avatar-sm me-2"
                                  >
                                    <img
                                      className="avatar-img rounded-3"
                                      src={doctordashboardprofile06}
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">
                                    Hendrita Kearns
                                  </Link>
                                </h2>
                              </td>
                              <td>23.5</td>
                              <td>89</td>
                              <td>140</td>
                              <td>74Kg</td>
                              <td>22 Mar 2025</td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#med-detail"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-med-record"
                                  >
                                    <i className="fa-solid fa-pen-to-square" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <Footer {...props} />

      </div>
      {/* Add Medical Detail */}
      <div className="modal fade custom-modals" id="add-med-record">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Medical Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="timing-modal">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block input-block-new">
                        <label className="form-label">BMI</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block input-block-new">
                        <label className="form-label">Heart Rate</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block input-block-new">
                        <label className="form-label">Weight</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block input-block-new">
                        <label className="form-label">FBC</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block input-block-new">
                        <label className="col-form-label">
                          End Date <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <DatePicker
                            className="form-control datetimepicker"
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd-MM-yyyy"
                          />
                          <span className="icon cal-form-icon">
                            <i className="fa-regular fa-calendar-days" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <a
                    href="#"
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Medical Detail */}
      {/* Edit Medical Detail */}
      <div className="modal fade custom-modals" id="edit-med-record">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Medical Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="timing-modal">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block input-block-new">
                        <label className="form-label">BMI</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="20.1 kg/m2"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block input-block-new">
                        <label className="form-label">Heart Rate</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="140 Bpm"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block input-block-new">
                        <label className="form-label">Weight</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={300}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block input-block-new">
                        <label className="form-label">FBC</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="70 - 90"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block input-block-new">
                        <label className="col-form-label">
                          End Date <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <DatePicker
                            className="form-control datetimepicker"
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd-MM-yyyy"
                          />
                          <span className="icon cal-form-icon">
                            <i className="fa-regular fa-calendar-days" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <a
                    href="#"
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Medical Detail */}

      <div className="modal fade custom-modals" id="med-detail">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Medical Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="med-detail-patient">
                  <div className="med-patient">
                    <span>
                      <img src={doctordashboardprofile06} alt="Img" />
                    </span>
                    <div className="name-detail">
                      <h5>Hendrita Kearns</h5>
                      <ul>
                        <li>Age : 42 </li>
                        <li>Female</li>
                        <li>AB+ve</li>
                      </ul>
                    </div>
                  </div>
                  <div className="date-cal">
                    <p>
                      <span>
                        <i className="fa-solid fa-calendar-days me-2" />
                        Last Updated
                      </span>
                      24 Mar 2025
                    </p>
                  </div>
                </div>
                <div className="med-detail-item">
                  <div className="d-flex flex-wrap">
                    <div className="health-records icon-red">
                      <span>
                        <i className="fa-solid fa-syringe" />
                        Blood Pressure
                      </span>
                      <h3>100 mg/dl</h3>
                    </div>
                    <div className="health-records icon-orange">
                      <span>
                        <i className="fa-solid fa-heart" />
                        Heart Rate
                      </span>
                      <h3>140 Bpm</h3>
                    </div>
                    <div className="health-records icon-dark-blue">
                      <span>
                        <i className="fa-solid fa-notes-medical" />
                        Glucose Level
                      </span>
                      <h3>70 - 90</h3>
                    </div>
                    <div className="health-records icon-amber">
                      <span>
                        <i className="fa-solid fa-temperature-high" />
                        Body Temprature
                      </span>
                      <h3>37.5 C</h3>
                    </div>
                    <div className="health-records icon-purple">
                      <span>
                        <i className="fa-solid fa-user-pen" />
                        BMI{" "}
                      </span>
                      <h3>20.1 kg/m2</h3>
                    </div>
                    <div className="health-records icon-blue">
                      <span>
                        <i className="fa-solid fa-highlighter" />
                        SPo2
                      </span>
                      <h3>96%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <a
                    href="#"
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalDetails;
