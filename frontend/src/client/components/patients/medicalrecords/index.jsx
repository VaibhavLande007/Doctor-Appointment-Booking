/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import { TagsInput } from "react-tag-input-component";
import Header from "../../header";
import Footer from "../../footer";
import Select from "react-select";

import {
  doctor_thumb_01,
  doctor_thumb_03,
  doctor_thumb_05,
  doctor_thumb_08,
  doctorthumb02,
  logo,
} from "../../imagepath.jsx";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";
import { DatePicker } from "antd";

const MedicalRecords = (props) => {

  const patients = [
    { value: "Select Patient", label: "Select Patient" },
    { value: "Adrian Marshall", label: "Adrian Marshall" },
    { value: "Kelly Stevens", label: "Kelly Stevens" },
    { value: "Catherine Gracey", label: "Catherine Gracey" },
  ];
  const [records, setRecords] = useState(["Fever", "Headache", "Stomach Pain"]);

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
                      <li className="breadcrumb-item active">Medical Records</li>
                    </ol>
                    <h2 className="breadcrumb-title">Medical Records</h2>
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
                  <DashboardSidebar />{" "}
                </StickyBox>
              </div>
              <div className="col-lg-8 col-xl-9">
                <div className="dashboard-header">
                  <h3>Records</h3>
                  <div className="appointment-tabs">
                    <ul className="nav">
                      <li>
                        <Link
                          to="#"
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#medical"
                        >
                          Medical Records
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#prescription"
                        >
                          Prescriptions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content pt-0">
                  {/* Prescription Tab */}
                  <div className="tab-pane fade" id="prescription">
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
                    <div className="custom-table">
                      <div className="table-responsive">
                        <table className="table table-center mb-0">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Created Date</th>
                              <th>Prescriped By</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_prescription"
                                >
                                  #P1236
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon prescription">
                                  Prescription
                                </Link>
                              </td>
                              <td>24 Mar 2025, 10:30 AM</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors/doctor-thumb-02.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">Edalin Hendry</Link>
                                </h2>
                              </td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_prescription"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_prescription"
                                >
                                  #P3656
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon prescription">
                                  Prescription
                                </Link>
                              </td>
                              <td>27 Mar 2025, 11:15 AM</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors/doctor-thumb-05.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">John Homes</Link>
                                </h2>
                              </td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_prescription"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_prescription"
                                >
                                  #P1246
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon prescription">
                                  Prescription
                                </Link>
                              </td>
                              <td>11 Apr 2025, 09:00 AM</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors/doctor-thumb-03.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">Shanta Neill</Link>
                                </h2>
                              </td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_prescription"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_prescription"
                                >
                                  #P6985
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon prescription">
                                  Prescription
                                </Link>
                              </td>
                              <td>15 Apr 2025, 02:30 PM</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors/doctor-thumb-08.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">Anthony Tran</Link>
                                </h2>
                              </td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_prescription"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_prescription"
                                >
                                  #P3659
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon prescription">
                                  Prescription
                                </Link>
                              </td>
                              <td>23 Apr 2025, 06:40 PM</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/patient/doctor-profile" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/patient/doctor-profile">Susan Lingo</Link>
                                </h2>
                              </td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_prescription"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Pagination */}
                    <div className="pagination dashboard-pagination">
                      <ul>
                        <li>
                          <Link to="#" className="page-link">
                            <i className="fa-solid fa-chevron-left" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            1
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link active">
                            2
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            3
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            4
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            ...
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            <i className="fa-solid fa-chevron-right" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Pagination */}
                  </div>
                  {/* /Prescription Tab */}
                  {/* Medical Records Tab */}
                  <div className="tab-pane fade show active" id="medical">
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
                      <div>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add_medical_records"
                          className="btn btn-md btn-primary-gradient rounded-pill"
                        >
                          Add Medical Record
                        </Link>
                      </div>
                    </div>
                    <div className="custom-table">
                      <div className="table-responsive">
                        <table className="table table-center mb-0">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Record For</th>
                              <th>Comments</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_report"
                                >
                                  #MR1236
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon">
                                  Electro cardiography
                                </Link>
                              </td>
                              <td>24 Mar 2025</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors-dashboard/profile-06.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/pages/patient-details">Hendrita Clark</Link>
                                </h2>
                              </td>
                              <td>Take Good Rest</td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_report"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_medical_records"
                                  >
                                    <i className="isax isax-edit-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_report"
                                >
                                  #MR3656
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon">
                                  Complete Blood Count{" "}
                                </Link>
                              </td>
                              <td>27 Mar 2025</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors-dashboard/profile-05.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/pages/patient-details">Laura Stewart</Link>
                                </h2>
                              </td>
                              <td>Stable, no change</td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_report"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_medical_records"
                                  >
                                    <i className="isax isax-edit-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_report"
                                >
                                  #MR1246
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon">
                                  Blood Glucose Test
                                </Link>
                              </td>
                              <td>10 Apr 2025</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors-dashboard/profile-02.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/pages/patient-details">Mathew Charles&nbsp;</Link>
                                </h2>
                              </td>
                              <td>All Clear</td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_report"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_medical_records"
                                  >
                                    <i className="isax isax-edit-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_report"
                                >
                                  #MR6985
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon">
                                  Liver Function Tests
                                </Link>
                              </td>
                              <td>19 Apr 2025</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors-dashboard/profile-03.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/pages/patient-details">Christopher Joseph</Link>
                                </h2>
                              </td>
                              <td>Stable, no change</td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_report"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_medical_records"
                                  >
                                    <i className="isax isax-edit-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  className="link-primary"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#view_report"
                                >
                                  #MR3659
                                </Link>
                              </td>
                              <td>
                                <Link to="#" className="lab-icon">
                                  Blood Cultures
                                </Link>
                              </td>
                              <td>27 Apr 2025</td>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/pages/patient-details" className="avatar avatar-sm me-2">
                                    <ImageWithBasePath
                                      className="avatar-img rounded-3"
                                      src="assets/img/doctors-dashboard/profile-08.jpg"
                                      alt="User Image"
                                    />
                                  </Link>
                                  <Link to="/pages/patient-details">Elisa Salcedo</Link>
                                </h2>
                              </td>
                              <td>Take Good Rest</td>
                              <td>
                                <div className="action-item">
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#view_report"
                                  >
                                    <i className="isax isax-link-2" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_medical_records"
                                  >
                                    <i className="isax isax-edit-2" />
                                  </Link>
                                  <Link to="#">
                                    <i className="isax isax-import" />
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_modal"
                                  >
                                    <i className="isax isax-trash" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Pagination */}
                    <div className="pagination dashboard-pagination">
                      <ul>
                        <li>
                          <Link to="#" className="page-link">
                            <i className="fa-solid fa-chevron-left" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            1
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link active">
                            2
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            3
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            4
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            ...
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="page-link">
                            <i className="fa-solid fa-chevron-right" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* /Pagination */}
                  </div>
                  {/* /Medical Records Tab */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer {...props} />

      </div>


      {/* Add Medical Records Modal */}
      <div className="modal fade custom-modals" id="add_medical_records">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add Medical Record</h3>
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
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Title <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Record For <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Date <span className="text-danger">*</span>
                      </label>
                      <div className="form-icon">
                        <DatePicker
                          className="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span className="icon">
                          <i className="isax isax-calendar-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Comments <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Record <span className="text-danger">*</span>
                      </label>
                      <div>
                        <div className="file-upload">
                          <input type="file" />
                          <p>
                            <i className="isax isax-document-upload me-1" />
                            Upload File
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <Link
                    to="#"
                    className="btn btn-md btn-dark rounded-pill"

                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link to='#'
                    data-bs-dismiss="modal"
                    className="btn btn-md btn-primary-gradient rounded-pill"
                  >
                    Add Medical Records
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Medical Records Modal */}

      {/* Edit Medical Records Modal */}
      <div className="modal fade custom-modals" id="edit_medical_records">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Edit Medical Record</h3>
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
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="mb-3">
                    <label className="col-form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Glucose Test V12"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Record For <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Hendrita Clark"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Date <span className="text-danger">*</span>
                      </label>
                      <div className="form-icon">
                        <DatePicker
                          className="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span className="icon">
                          <i className="isax isax-calendar-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Comments <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={"Take Good Rest"}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="col-form-label">
                        Record <span className="text-danger">*</span>
                      </label>
                      <div>
                        <div className="file-upload">
                          <input type="file" />
                          <p>
                            <i className="isax isax-document-upload me-1" />
                            Upload File
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <Link
                    to="#"
                    className="btn btn-md btn-dark rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link to='#'
                    data-bs-dismiss="modal"
                    className="btn btn-md btn-primary-gradient rounded-pill"
                  >
                    Save Medical Records
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Medical Records Modal */}
      {/*View Report */}
      <div className="modal fade custom-modals" id="view_report">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">View Report</h3>
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
              <div className="prescribe-download gap-2">
                <h5>21 Mar 2025</h5>
                <ul>
                  <li>
                    <Link to="#" className="print-link">
                      <i className="isax isax-printer5" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="btn btn-md btn-primary-gradient rounded-pill"
                    >
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="view-prescribe-details p-0 border-0">
                {/* Invoice Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info d-flex align-items-center">
                        <div className="clinic-image d-inline-flex align-items-center justify-content-center">
                          <ImageWithBasePath src="assets/img/icons/vtaplus.svg" alt="img" />
                        </div>
                        <div>
                          <h6 className="fs-16 fw-semibold">Vitalplus Clinic</h6>
                          <p className="fs-14 fw-medium">Dr. Sandy Maria</p>
                          <p className="fs-14">MBLS,MS</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info2">
                        <p>
                          <span>Test Type : </span>CBC
                        </p>
                        <p>
                          <span>Collected On : </span>20 Mar 2025, 10:00 AM
                        </p>
                        <p>
                          <span>Reported On :</span>21 Mar 2025, 11:00 AM
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="patient-infos d-flex align-items-center justify-content-between gap-3 flex-wrap">
                        <div className="d-flex align-items-center">
                          <span className="avatar me-2">
                            <ImageWithBasePath
                              src="assets/img/doctors-dashboard/profile-06.jpg"
                              className="rounded"
                              alt="img"
                            />
                          </span>
                          <div>
                            <h6 className="fs-14 fw-medium">Hendrita Kearns</h6>
                            <p>Patient ID : PT254654</p>
                          </div>
                        </div>
                        <div>
                          <h6 className="fs-14 fw-medium">Gender</h6>
                          <p>Female</p>
                        </div>
                        <div>
                          <h6 className="fs-14 fw-medium">Age</h6>
                          <p>32 years </p>
                        </div>
                        <div>
                          <h6 className="fs-14 fw-medium">Blood</h6>
                          <p>O+</p>
                        </div>
                        <div>
                          <h6 className="fs-14 fw-medium">Type</h6>
                          <p>Outpatient</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                  <h6>Complete Blood Count(CBC)</h6>
                  <p className="fs-14 mb-0">
                    <span className="text-gray-9">Primary Test Type :</span> Blood
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
                              <th>Investigation</th>
                              <th>Result</th>
                              <th>Reference Value</th>
                              <th>Unit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="report-title" colSpan={4}>
                                HEMOGLOBIN
                              </td>
                            </tr>
                            <tr>
                              <td>Hemoglobin (Hb)</td>
                              <td>
                                12.5
                                <span className="badge badge-info-transparent text-xs d-inline-block rounded-pill ms-1">
                                  Low
                                </span>
                              </td>
                              <td>13.0 - 17.0</td>
                              <td>g/dL</td>
                            </tr>
                            <tr>
                              <td className="report-title" colSpan={4}>
                                RBC COUNT
                              </td>
                            </tr>
                            <tr>
                              <td>Total RBC Count</td>
                              <td>5.2</td>
                              <td>4.5 - 5.5</td>
                              <td>million cells/µL</td>
                            </tr>
                            <tr>
                              <td className="report-title" colSpan={4}>
                                BLOOD INDICES
                              </td>
                            </tr>
                            <tr>
                              <td>Packed Cell Volume (PCV)</td>
                              <td className="text-danger">
                                57.5
                                <span className="badge badge-danger-transparent text-xs d-inline-block rounded-pill ms-1">
                                  High
                                </span>
                              </td>
                              <td>40 - 50</td>
                              <td>%</td>
                            </tr>
                            <tr>
                              <td>
                                Mean Corpuscular Volume (MCV){" "}
                                <span className="fs-10 text-gray-6">
                                  Calculated
                                </span>
                              </td>
                              <td>87.75</td>
                              <td>83 - 101</td>
                              <td>fL</td>
                            </tr>
                            <tr>
                              <td>MCH Calculated</td>
                              <td>27.72</td>
                              <td>27 - 32</td>
                              <td>pg</td>
                            </tr>
                            <tr>
                              <td>MCHC Calculated</td>
                              <td>32.8</td>
                              <td>32.5 - 34.5</td>
                              <td>g/dL</td>
                            </tr>
                            <tr>
                              <td>RDW</td>
                              <td>13.6</td>
                              <td>11.6 - 14.0</td>
                              <td>%</td>
                            </tr>
                            <tr>
                              <td className="report-title" colSpan={4}>
                                WBC COUNT
                              </td>
                            </tr>
                            <tr>
                              <td>Total WBC Count</td>
                              <td>9000</td>
                              <td>4000 - 11000</td>
                              <td>cells/µL</td>
                            </tr>
                            <tr>
                              <td className="report-title" colSpan={4}>
                                DIFFERENTIAL WBC COUNT
                              </td>
                            </tr>
                            <tr>
                              <td>Neutrophils</td>
                              <td>60</td>
                              <td>50 - 62</td>
                              <td>%</td>
                            </tr>
                            <tr>
                              <td>Lymphocytes</td>
                              <td>31</td>
                              <td>20 - 40</td>
                              <td>%</td>
                            </tr>
                            <tr>
                              <td>Eosinophils</td>
                              <td>01</td>
                              <td>00 - 06</td>
                              <td>%</td>
                            </tr>
                            <tr>
                              <td>Monocytes</td>
                              <td>07</td>
                              <td>00 - 10</td>
                              <td>%</td>
                            </tr>
                            <tr>
                              <td>Basophils</td>
                              <td>01</td>
                              <td>00 - 02</td>
                              <td>%</td>
                            </tr>
                            <tr>
                              <td>Platelet Count</td>
                              <td>248157</td>
                              <td>150000 - 410000</td>
                              <td>µL</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                <p className="mb-2">
                  <span className="text-gray-9 fw-medium">Instruments :</span> Fully
                  Automated Cell Counter - Mindray 300
                </p>
                <p className="mb-3">
                  <span className="text-gray-9 fw-medium">Interpretation :</span>{" "}
                  Further confirm for Anemia
                </p>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="scan-wrap">
                      <h6>Scan to download report</h6>
                      <ImageWithBasePath src="assets/img/scan.png" alt="scan" />
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
                    <Link
                      to="#"
                      data-bs-target="#view_prescription2"
                      data-bs-dismiss="modal"
                    >
                      02
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Report */}



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
                    <Link to="#" className="print-link">
                      <i className="isax isax-printer" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="btn btn-primary-gradient rounded-pill">
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="view-prescribe invoice-content mb-0">
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="invoice-details">
                        <strong>Prescription ID :</strong> #PR-123 <br />
                        <strong>Issued:</strong> 21 Mar 2025
                      </p>
                    </div>
                  </div>
                </div>
                {/* Invoice Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <h6 className="customer-text">Doctor Details</h6>
                        <p className="invoice-details invoice-details-two">
                          Edalin Hendry <br />
                          806 Twin Willow Lane, <br />
                          Newyork, USA <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info invoice-info2">
                        <h6 className="customer-text">Patient Details</h6>
                        <p className="invoice-details">
                          Adrian Marshall <br />
                          299 Star Trek Drive,
                          <br />
                          Florida, 32405, USA <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Item */}
                <div className="invoice-item invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <h6>Prescription Details</h6>
                      <div className="table-responsive">
                        <table className="invoice-table table table-bordered">
                          <thead>
                            <tr>
                              <th>Medicine Name</th>
                              <th>Dosage</th>
                              <th>Frequency</th>
                              <th>Duration</th>
                              <th>Timings</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Ecosprin 75MG [Asprin 75 MG Oral Tab]</td>
                              <td>
                                75 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>Before Meal</td>
                            </tr>
                            <tr>
                              <td>Alexer 90MG Tab</td>
                              <td>
                                90 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>Before Meal</td>
                            </tr>
                            <tr>
                              <td>Ramistar XL2.5</td>
                              <td>
                                60 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-0</td>
                              <td>1 month</td>
                              <td>After Meal</td>
                            </tr>
                            <tr>
                              <td>Metscore</td>
                              <td>
                                90 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>After Meal</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Information */}
                <div className="other-info">
                  <h4>Other information</h4>
                  <p className="mb-0">
                    An account of the present illness, which includes the
                    circumstances surrounding the onset of recent health changes and
                    the chronology of subsequent events that have led the patient to
                    seek medicine
                  </p>
                </div>
                <div className="other-info">
                  <h4>Follow Up</h4>
                  <p className="mb-0">
                    Follow up after 3 months, Have to come on empty stomach
                  </p>
                </div>
                <div className="prescriber-info">
                  <h6>Dr. Edalin Hendry</h6>
                  <p>Dept of Cardiology</p>
                </div>
                {/* /Invoice Information */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Prescription */}


      {/* Delete */}
      <div className="modal fade custom-modals" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body p-4 text-center">
              <form action="/patient/medicalrecords">
                <span className="del-icon mb-2 mx-auto">
                  <i className="isax isax-trash" />
                </span>
                <h3 className="mb-2">Delete Record</h3>
                <p className="mb-3">Are you sure you want to delete this record?</p>
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <Link
                    to="#"
                    className="btn btn-md btn-dark rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="btn btn-md btn-primary-gradient rounded-pill"
                  >
                    Yes Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}






    </>

  );
};

export default MedicalRecords;
