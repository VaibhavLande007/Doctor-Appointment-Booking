import React, { useState } from "react";
import Header from "../../header";
import DoctorSidebar from "../sidebar";
import DoctorFooter from "../../common/doctorFooter";
import { TimePicker } from "antd";
import Select from "react-select";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const AvailableTimings = (props) => {
  const interval = [
    { label: "10 Minutes", value: "10 Minutes" },
    { label: "20 Minutes", value: "20 Minutes" },
    { label: "30 Minutes", value: "30 Minutes" },
  ];
  const duration = [
    { label: "30 Minutes", value: "30 Minutes" },
    { label: "1 hour", value: "1 hour" },
  ];
  const clinicList = [
    {
      label: "The Family Dentistry Clinic",
      value: "The Family Dentistry Clinic",
    },
    { label: "Dentistry Clinic", value: "Dentistry Clinic" },
  ];

  const [selectedTime, setSelectedTime] = useState();
  const handleTimeChange = (value) => {
    setSelectedTime(value);
  };
  const [selectedTimeEnd, setSelectedTimeEnd] = useState();
  const handleTimeChangeEnd = (value) => {
    setSelectedTimeEnd(value);
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
                        <a href="/home">
                          <i className="isax isax-home-15" />
                        </a>
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Doctor
                      </li>
                      <li className="breadcrumb-item active">Available Timings</li>
                    </ol>
                    <h2 className="breadcrumb-title">Available Timings</h2>
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

        {/* Page Content */}
        <div className="content doctor-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <DoctorSidebar />
                {/* /Profile Sidebar */}
              </div>
              <div className="col-lg-8 col-xl-9">
                <div className="dashboard-header">
                  <h3>Available Timings</h3>
                </div>
                <div className="appointment-tabs">
                  <ul className="nav">
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link active"
                        to="#"
                        data-bs-toggle="tab"
                        data-bs-target="#general-availability"
                      >
                        General Availability
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link"
                        to="#"
                        data-bs-toggle="tab"
                        data-bs-target="#clinic-availability"
                      >
                        Clinic Availability
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content pt-0">
                  {/* General Availability */}
                  <div
                    className="tab-pane fade show active"
                    id="general-availability"
                  >
                    <div className="card custom-card">
                      <div className="card-body">
                        <div className="card-header">
                          <h3>Select Available Slots</h3>
                        </div>
                        <div className="available-tab">
                          <label className="form-label">
                            Select Available days
                          </label>
                          <ul className="nav">
                            <li>
                              <Link
                                to="#"
                                className="active"
                                data-bs-toggle="tab"
                                data-bs-target="#monday"
                              >
                                Monday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#tuesday"
                              >
                                Tuesday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#wedneday"
                              >
                                Wedneday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#thursday"
                              >
                                Thursday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#friday"
                              >
                                Friday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#saturday"
                              >
                                Saturday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#sunday"
                              >
                                Sunday
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-content pt-0">
                          {/* Slot */}
                          <div className="tab-pane active show" id="monday">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Monday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <ul className="time-slots">
                                  <li>
                                    <i className="fa-regular fa-clock" />
                                    09:00 AM
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-clock" />
                                    09:30 AM
                                  </li>
                                  <li className="slot-space">Space : 2</li>
                                  <li>
                                    <i className="fa-regular fa-clock" />
                                    10:30 AM
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-clock" />
                                    11:00 AM
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="tuesday">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Tuesday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="wednesday">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Wednesday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="thursday">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Thursday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="friday">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Friday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="saturday">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Saturday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="sunday">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Sunday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Appointment Fees ($)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={254}
                            />
                          </div>
                          <div className="modal-btn text-end">
                            <Link to="#" className="btn btn-gray">
                              Cancel
                            </Link>
                            <button className="btn btn-primary prime-btn">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /General Availability */}
                  {/* Clinic Availability */}
                  <div className="tab-pane fade" id="clinic-availability">
                    <div className="clinic-wrap">
                      <h5>Select Clinic</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <Select options={clinicList} className="select-img" />
                        </div>
                      </div>
                    </div>
                    <div className="card custom-card">
                      <div className="card-body">
                        <div className="card-header">
                          <h3>Select Available Slots</h3>
                        </div>
                        <div className="available-tab">
                          <label className="form-label">
                            Select Available days
                          </label>
                          <ul className="nav">
                            <li>
                              <Link
                                to="#"
                                className="active"
                                data-bs-toggle="tab"
                                data-bs-target="#monday-slot"
                              >
                                Monday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#tuesday-slot"
                              >
                                Tuesday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#wedneday-slot"
                              >
                                Wedneday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#thursday-slot"
                              >
                                Thursday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#friday-slot"
                              >
                                Friday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#saturday-slot"
                              >
                                Saturday
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="tab"
                                data-bs-target="#sunday-slot"
                              >
                                Sunday
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-content pt-0">
                          {/* Slot */}
                          <div className="tab-pane active show" id="monday-slot">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Monday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <ul className="time-slots">
                                  <li>
                                    <i className="fa-regular fa-clock" />
                                    09:00 AM
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-clock" />
                                    09:30 AM
                                  </li>
                                  <li className="slot-space">Space : 2</li>
                                  <li>
                                    <i className="fa-regular fa-clock" />
                                    10:30 AM
                                  </li>
                                  <li>
                                    <i className="fa-regular fa-clock" />
                                    11:00 AM
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="tuesday-slot">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Tuesday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="wednesday-slot">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Wednesday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="thursday-slot">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Thursday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="friday-slot">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Friday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="saturday-slot">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Saturday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          {/* Slot */}
                          <div className="tab-pane fade" id="sunday-slot">
                            <div className="slot-box">
                              <div className="slot-header">
                                <h5>Sunday</h5>
                                <ul>
                                  <li>
                                    <Link
                                      to="#"
                                      className="add-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_slot"
                                    >
                                      Add Slots
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="del-slot"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_slot"
                                    >
                                      Delete All
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="slot-body">
                                <p>No Slots Available</p>
                              </div>
                            </div>
                          </div>
                          {/* /Slot */}
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Appointment Fees ($)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={254}
                            />
                          </div>
                          <div className="modal-btn text-end">
                            <Link
                              to="#"
                              className="btn btn-gray"
                              data-bs-toggle="modal"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </Link>
                            <button className="btn btn-primary prime-btn">
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Clinic Availability */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        <DoctorFooter />
      </div>
      {/* Add Slots */}
      <div className="modal fade custom-modals" id="add_slot">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Appointment Details</h5>
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
                      <div className="form-wrap">
                        <label className="col-form-label">Start Time</label>

                        <TimePicker
                          value={selectedTime}
                          onChange={handleTimeChange}
                          className="form-control timepicker1"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">End Time</label>
                        <TimePicker
                          value={selectedTimeEnd}
                          onChange={handleTimeChangeEnd}
                          className="form-control timepicker1"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          Appointment Intervals
                        </label>

                        <Select
                          options={interval}
                          className="select"
                          placeholder="10 Minutes"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          Appointment Durations
                        </label>

                        <Select
                          options={duration}
                          className="select"
                          placeholder="30 Minutes"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-wrap mb-0">
                        <label className="col-form-label d-block">
                          Assign Appointment Spaces
                        </label>
                        <div className="custom-control form-check custom-control-inline">
                          <input
                            type="radio"
                            id="space1"
                            name="rating_option"
                            className="form-check-input"
                            defaultValue="price_free"
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="space1">
                            Space 1
                          </label>
                        </div>
                        <div className="custom-control form-check custom-control-inline">
                          <input
                            type="radio"
                            id="space2"
                            name="rating_option"
                            className="form-check-input"
                            defaultValue="price_free"
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="space2">
                            Space 2
                          </label>
                        </div>
                        <div className="custom-control form-check custom-control-inline">
                          <input
                            type="radio"
                            id="space3"
                            name="rating_option"
                            className="form-check-input"
                            defaultValue="price_free"
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="space3">
                            Space 3
                          </label>
                        </div>
                        <div className="custom-control form-check custom-control-inline">
                          <input
                            type="radio"
                            id="space4"
                            name="rating_option"
                            className="form-check-input"
                            defaultValue="price_free"
                            defaultChecked=""
                          />
                          <label className="form-check-label" htmlFor="space4">
                            Space 4
                          </label>
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
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary prime-btn"
                    data-bs-dismiss="modal"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Slots */}
      {/* Remove Slots */}
      <div className="modal fade info-modal" id="delete_slot">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="success-wrap">
                <div className="success-info">
                  <div className="text-center">
                    <span className="icon-success bg-red">
                      <i className="fa-solid fa-xmark" />
                    </span>
                    <h3>Remove Slots</h3>
                    <p>Are you sure you want to remove this slots?</p>
                  </div>
                </div>
              </div>
              <div className="modal-btn text-center">
                <Link to="#" className="btn btn-gray" data-bs-dismiss="modal">
                  Yes, Remove
                </Link>
                <button
                  className="btn btn-primary prime-btn"
                  data-bs-dismiss="modal"
                >
                  No, i Changed my mind
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Remove Slots */}
    </>
  );
};

export default AvailableTimings;
