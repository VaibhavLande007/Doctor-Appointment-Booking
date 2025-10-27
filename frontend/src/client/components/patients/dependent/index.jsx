/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Footer from "../../footer";
import "react-datepicker/src/stylesheets/datepicker.scss";
import Header from "../../header.jsx";

import {
  dependent1,
  dependent2,
  dependent3,
  dependent4,
} from "../../imagepath.jsx";
import { DatePicker } from "antd";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";

const Dependent = (props) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleChange = (date) => {
    setDate(date);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const gender = [
    { value: "Select", label: "Select" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const gender1 = [
    { value: "Select", label: "Select" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

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
                        Dependants
                      </li>
                      <li className="breadcrumb-item">Patient</li>
                    </ol>
                    <h2 className="breadcrumb-title active">Dependants</h2>
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
                  <h3>Dependants</h3>
                  <ul className="header-list-btns">
                    <li>
                      <div className="input-block dash-search-input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span className="search-icon">
                          <i className="fa-solid fa-magnifying-glass" />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="dashboard-header border-0 m-0">
                  <ul className="header-list-btns">
                    <li>
                      <div className="input-block dash-search-input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span className="search-icon">
                          <i className="fa-solid fa-magnifying-glass" />
                        </span>
                      </div>
                    </li>
                  </ul>
                  <Link
                    to="#"
                    className="btn btn-primary prime-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#add_dependent"
                  >
                    Add Dependants
                  </Link>
                </div>
                {/* Depeendent Item */}
                <div className="dependent-wrap">
                  <div className="dependent-info">
                    <div className="patinet-information">
                      <Link to="/doctor/patient-profile">
                        <img src={dependent1} alt="User Image" />
                      </Link>
                      <div className="patient-info">
                        <h5>Laura</h5>
                        <ul>
                          <li>Mother</li>
                          <li>Female</li>
                          <li>58 years 20 days</li>
                        </ul>
                      </div>
                    </div>
                    <div className="blood-info">
                      <p>Blood Group</p>
                      <h6>AB+ve</h6>
                    </div>
                  </div>
                  <div className="dependent-status">
                    <div className="status-toggle">
                      <span className="deactive">Deactivate</span>
                      <input
                        type="checkbox"
                        id="status_1"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_1" className="checktoggle">
                        checkbox
                      </label>
                      <span className="active">Activate</span>
                    </div>
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_dependent"
                    >
                      <i className="fa-solid fa-pen-to-square" />
                    </Link>
                  </div>
                </div>
                {/* /Depeendent Item */}
                {/* Depeendent Item */}
                <div className="dependent-wrap">
                  <div className="dependent-info">
                    <div className="patinet-information">
                      <Link to="/doctor/patient-profile">
                        <img src={dependent2} alt="User Image" />
                      </Link>
                      <div className="patient-info">
                        <h5>Mathew</h5>
                        <ul>
                          <li>Father</li>
                          <li>Male</li>
                          <li>59 years 15 days</li>
                        </ul>
                      </div>
                    </div>
                    <div className="blood-info">
                      <p>Blood Group</p>
                      <h6>AB+ve</h6>
                    </div>
                  </div>
                  <div className="dependent-status">
                    <div className="status-toggle">
                      <span className="deactive">Deactivate</span>
                      <input
                        type="checkbox"
                        id="status_2"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_2" className="checktoggle">
                        checkbox
                      </label>
                      <span className="active">Activate</span>
                    </div>
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_dependent"
                    >
                      <i className="fa-solid fa-pen-to-square" />
                    </Link>
                  </div>
                </div>
                {/* /Depeendent Item */}
                {/* Depeendent Item */}
                <div className="dependent-wrap">
                  <div className="dependent-info">
                    <div className="patinet-information">
                      <Link to="/doctor/patient-profile">
                        <img src={dependent3} alt="User Image" />
                      </Link>
                      <div className="patient-info">
                        <h5>Christopher</h5>
                        <ul>
                          <li>Brother</li>
                          <li>Male</li>
                          <li>32 years 6 Months</li>
                        </ul>
                      </div>
                    </div>
                    <div className="blood-info">
                      <p>Blood Group</p>
                      <h6>A+ve</h6>
                    </div>
                  </div>
                  <div className="dependent-status">
                    <div className="status-toggle">
                      <span className="deactive">Deactivate</span>
                      <input
                        type="checkbox"
                        id="status_3"
                        className="check"
                        defaultChecked=""
                      />
                      <label htmlFor="status_3" className="checktoggle">
                        checkbox
                      </label>
                      <span className="active">Activate</span>
                    </div>
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_dependent"
                    >
                      <i className="fa-solid fa-pen-to-square" />
                    </Link>
                  </div>
                </div>
                {/* /Depeendent Item */}
                {/* Depeendent Item */}
                <div className="dependent-wrap">
                  <div className="dependent-info">
                    <div className="patinet-information">
                      <Link to="/doctor/patient-profile">
                        <img src={dependent4} alt="User Image" />
                      </Link>
                      <div className="patient-info">
                        <h5>Elisa</h5>
                        <ul>
                          <li>Sister</li>
                          <li>Female</li>
                          <li>28 years 4 Months</li>
                        </ul>
                      </div>
                    </div>
                    <div className="blood-info">
                      <p>Blood Group</p>
                      <h6>B+ve</h6>
                    </div>
                  </div>
                  <div className="dependent-status">
                    <div className="status-toggle">
                      <span className="deactive">Deactivate</span>
                      <input type="checkbox" id="status_4" className="check" />
                      <label htmlFor="status_4" className="checktoggle">
                        checkbox
                      </label>
                      <span className="active">Activate</span>
                    </div>
                    <Link
                      to="#"
                      className="edit-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_dependent"
                    >
                      <i className="fa-solid fa-pen-to-square" />
                    </Link>
                  </div>
                </div>
                {/* /Depeendent Item */}
              </div>
            </div>
          </div>
        </div>


        <Footer {...props} />
      </div>
      <>
        <>
          {/* Add Dependent Modal*/}
          <div className="modal fade custom-modals" id="add_dependent">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title">Add Dependant</h3>
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
                  <div className="add-dependent">
                    <div className="modal-body pb-0">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-wrap pb-0">
                            <label className="form-label">Profile Photo </label>
                            <div className="change-avatar img-upload">
                              <div className="profile-img">
                                <i className="fa-solid fa-file-image" />
                              </div>
                              <div className="upload-img">
                                <div className="imgs-load d-flex align-items-center">
                                  <div className="change-photo">
                                    Upload New
                                    <input type="file" className="upload" />
                                  </div>
                                  <Link to="#" className="upload-remove">
                                    Remove
                                  </Link>
                                </div>
                                <p>
                                  Your Image should Below 4 MB, Accepted format
                                  jpg,png,svg
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="form-label">
                              Name <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="form-label">
                              Relationship <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="form-label">
                              Date of Birth <span className="text-danger">*</span>
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
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="form-label">
                              Select Gender <span className="text-danger">*</span>
                            </label>
                            <div className="radio-selection d-flex border">
                              <div className="flex-grow-1">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option1"
                                  autoComplete="off"
                                  defaultChecked=""
                                />
                                <label className="btn btn-white" htmlFor="option1">
                                  Male
                                </label>
                              </div>
                              <div className="flex-grow-1">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option2"
                                  autoComplete="off"
                                />
                                <label className="btn btn-white" htmlFor="option2">
                                  Female
                                </label>
                              </div>
                              <div className="flex-grow-1">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option3"
                                  autoComplete="off"
                                />
                                <label className="btn btn-white" htmlFor="option3">
                                  Others
                                </label>
                              </div>
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
                        Add Dependant
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Add Dependent Modal*/}
          {/* Edit Dependent Modal*/}
          <div className="modal fade custom-modals" id="edit_dependent">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title">Edit Dependant</h3>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                </div>
                <form action="#">
                  <div className="add-dependent">
                    <div className="modal-body pb-0">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-wrap pb-0">
                            <label className="form-label">Profile Photo </label>
                            <div className="change-avatar img-upload">
                              <div className="profile-img">
                                <i className="fa-solid fa-file-image" />
                              </div>
                              <div className="upload-img">
                                <div className="imgs-load d-flex align-items-center">
                                  <div className="change-photo">
                                    Upload New
                                    <input type="file" className="upload" />
                                  </div>
                                  <Link to="#" className="upload-remove">
                                    Remove
                                  </Link>
                                </div>
                                <p>
                                  Your Image should Below 4 MB, Accepted format
                                  jpg,png,svg
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="form-label">
                              Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Laura"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="form-label">
                              Relationship <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Mother"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="form-label">
                              DOB <span className="text-danger">*</span>
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
                        <div className="col-md-6">
                          <div className="form-wrap">
                            <label className="form-label">
                              Select Gender <span className="text-danger">*</span>
                            </label>
                            <div className="radio-selection d-flex border">
                              <div className="flex-grow-1">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option4"
                                  autoComplete="off"
                                  defaultChecked=""
                                />
                                <label className="btn btn-white" htmlFor="option4">
                                  Male
                                </label>
                              </div>
                              <div className="flex-grow-1">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option5"
                                  autoComplete="off"
                                />
                                <label className="btn btn-white" htmlFor="option5">
                                  Female
                                </label>
                              </div>
                              <div className="flex-grow-1">
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="options"
                                  id="option6"
                                  autoComplete="off"
                                />
                                <label className="btn btn-white" htmlFor="option6">
                                  Others
                                </label>
                              </div>
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
                      <button
                        type="submit"
                        className="btn btn-md btn-primary-gradient rounded-pill"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Edit Dependent Modal*/}
          {/* Delete */}
          <div className="modal fade custom-modals" id="delete_modal">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body p-4 text-center">
                  <form>
                    <span className="del-icon mb-2 mx-auto">
                      <i className="isax isax-trash" />
                    </span>
                    <h3 className="mb-2">Delete Dependent</h3>
                    <p className="mb-3">
                      Are you sure you want to delete this dependent?
                    </p>
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

      </>
    </>
  );
};

export default Dependent;
