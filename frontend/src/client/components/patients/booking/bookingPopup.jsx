import React, { useState } from 'react'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'
import { Link } from "react-router-dom"; 
import Select from "react-select";
import { Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const BookingPopup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(true);
  const [selectedService1, setSelectedService1] = useState(false);
  const [selectedService2, setSelectedService2] = useState(false);
  const [selectedService3, setSelectedService3] = useState(false);
  const [selectedService4, setSelectedService4] = useState(false);
  const [selectedService5, setSelectedService5] = useState(false);
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: '100%',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const Patient = [
      { value: "", label: "Select" },
      { value: "1", label: "Andrew Fletcher" },
      { value: "Newyork", label: "Newyork" },
    ];
  const Speciality = [
      { value: "", label: "Select" },
      { value: "1", label: "Cardiology" },
      { value: "2", label: "Neurology" },
      { value: "2", label: "Urology" },
    ];
  return (
    <>

    <div
      className="modal booking-modal show"
      data-bs-backdrop="static"
      id="reschedule-book-modal"
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Booking Apointment</h5>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-12 mx-auto">
              <div className="booking-wizard">
                <ul
                  className="form-wizard-steps d-sm-flex align-items-center justify-content-center"
                  id="progressbar2"
                >
                  <li className={
                          currentStep === 1
                            ? 'progress-active'
                            : currentStep > 1
                            ? 'progress-activated'
                            : ''
                        }>
                    <div className="profile-step">
                      <span className="multi-steps">1</span>
                      <div className="step-section">
                        <h6>Specialty</h6>
                      </div>
                    </div>
                  </li>
                  <li className={
                          currentStep === 2
                            ? 'progress-active'
                            : currentStep > 2
                            ? 'progress-activated'
                            : ''
                        }>
                    <div className="profile-step">
                      <span className="multi-steps">2</span>
                      <div className="step-section">
                        <h6>Appointment Type</h6>
                      </div>
                    </div>
                  </li>
                  <li className={
                          currentStep === 3
                            ? 'progress-active'
                            : currentStep > 3
                            ? 'progress-activated'
                            : ''
                        }>
                    <div className="profile-step">
                      <span className="multi-steps">3</span>
                      <div className="step-section">
                        <h6>Date &amp; Time</h6>
                      </div>
                    </div>
                  </li>
                  <li className={
                          currentStep === 4
                            ? 'progress-active'
                            : currentStep > 4
                            ? 'progress-activated'
                            : ''
                        }>
                    <div className="profile-step">
                      <span className="multi-steps">4</span>
                      <div className="step-section">
                        <h6>Basic Information</h6>
                      </div>
                    </div>
                  </li>
                  <li className={
                          currentStep === 5
                            ? 'progress-active'
                            : currentStep > 5
                            ? 'progress-activated'
                            : ''
                        }>
                    <div className="profile-step">
                      <span className="multi-steps">5</span>
                      <div className="step-section">
                        <h6>Payment</h6>
                      </div>
                    </div>
                  </li>
                  <li className={
                          currentStep === 6
                            ? 'progress-active'
                            : currentStep > 6
                            ? 'progress-activated'
                            : ''
                        }>
                    <div className="profile-step">
                      <span className="multi-steps">6</span>
                      <div className="step-section">
                        <h6>Confirmation</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="booking-widget multistep-form mb-5">
              {currentStep === 1 && (
                <fieldset id="first">
                  <div className="card booking-card mb-0">
                    <div className="card-header">
                      <div className="booking-header pb-0">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="d-flex align-items-center flex-wrap rpw-gap-2 flex-wrap row-gap-2">
                              <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/clients/client-15.jpg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <h4 className="mb-1">
                                  Dr. Michael Brown{" "}
                                  <span className="badge bg-orange fs-12">
                                    <i className="fa-solid fa-star me-1" />
                                    5.0
                                  </span>
                                </h4>
                                <p className="text-indigo mb-3 fw-medium">
                                  Psychologist
                                </p>
                                <p className="mb-0">
                                  <i className="isax isax-location me-2" />
                                  5th Street - 1011 W 5th St, Suite 120, Austin, TX
                                  78703
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body booking-body">
                      <div className="card mb-0">
                        <div className="card-body pb-1">
                          <div className="mb-4 pb-4 border-bottom">
                            <label className="form-label">Select Speciality</label>
                            
                            <Select
                            className="select"
                            options={Speciality}
                            placeholder="Select"
                            isClearable={true}
                            isSearchable={true}
                          />
                            
                          </div>
                          <h6 className="mb-3">Services</h6>
                          <div className="row">
                            <div className="col-lg-4 col-md-6">
                              <div className={`service-item ${selectedService  ?'active':''}`}>
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service1"
                                  type="checkbox"
                                  id="service1"
                                  onChange={()=>setSelectedService(!selectedService)}
                                  checked={selectedService ? true:false}
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service1"
                                >
                                  <span className="service-title d-block mb-1">
                                    Echocardiograms
                                  </span>
                                  <span className="fs-14 d-block">$310</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className={`service-item ${selectedService1  ?'active':''}`}>
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service1"
                                  type="checkbox"
                                  id="service2"
                                  onChange={()=>setSelectedService1(!selectedService1)}
                                  checked={selectedService1 ? true:false}
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service2"
                                >
                                  <span className="service-title d-block mb-1">
                                    Stress tests
                                  </span>
                                  <span className="fs-14 d-block">$754</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className={`service-item ${selectedService2  ?'active':''}`}>
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service1"
                                  type="checkbox"
                                  id="service3"
                                  onChange={()=>setSelectedService2(!selectedService2)}
                                  checked={selectedService2 ? true:false}
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service3"
                                >
                                  <span className="service-title d-block mb-1">
                                    Stress tests
                                  </span>
                                  <span className="fs-14 d-block">$754</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className={`service-item ${selectedService3 ?'active':''}`}>
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service1"
                                  type="checkbox"
                                  id="service4"
                                  onChange={()=>setSelectedService3(!selectedService3)}
                                  checked={selectedService3 ? true:false}
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service4"
                                >
                                  <span className="service-title d-block mb-1">
                                    Heart Catheterization
                                  </span>
                                  <span className="fs-14 d-block">$150</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className={`service-item ${selectedService4  ?'active':''}`}>
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service1"
                                  type="checkbox"
                                  id="service5"
                                  onChange={()=>setSelectedService4(!selectedService4)}
                                  checked={selectedService4 ? true:false}
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service5"
                                >
                                  <span className="service-title d-block mb-1">
                                    Echocardiograms
                                  </span>
                                  <span className="fs-14 d-block">$200</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className={`service-item ${selectedService5 ?'active':''}`}>
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service1"
                                  type="checkbox"
                                  id="service6"
                                  onChange={()=>setSelectedService5(!selectedService5)}
                                  checked={selectedService5 ? true:false}
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor="service6"
                                >
                                  <span className="service-title d-block mb-1">
                                    Echocardiograms
                                  </span>
                                  <span className="fs-14 d-block">$200</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                        <Link
                          to="#"
                          className="btn btn-md btn-dark inline-flex align-items-center rounded-pill"
                        >
                          <i className="isax isax-arrow-left-2 me-1" />
                          Back
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                          onClick={handleNext}
                        >
                          Select Appointment Type
                          <i className="isax isax-arrow-right-3 ms-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </fieldset>
              )}
              {currentStep === 2 && (
                <fieldset style={{display:'block'}}>
                  <div className="card booking-card mb-0">
                    <div className="card-header">
                      <div className="booking-header pb-0">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="d-flex align-items-center flex-wrap rpw-gap-2 flex-wrap row-gap-2">
                              <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/clients/client-15.jpg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <h4 className="mb-1">
                                  Dr. Michael Brown{" "}
                                  <span className="badge bg-orange fs-12">
                                    <i className="fa-solid fa-star me-1" />
                                    5.0
                                  </span>
                                </h4>
                                <p className="text-indigo mb-3 fw-medium">
                                  Psychologist
                                </p>
                                <p className="mb-0">
                                  <i className="isax isax-location me-2" />
                                  5th Street - 1011 W 5th St, Suite 120, Austin, TX
                                  78703
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body booking-body">
                      <div className="card mb-0">
                        <div className="card-body pb-1">
                          <h6 className="mb-3">Select Appointment Type</h6>
                          <div className="row">
                            <div className="col-xl col-md-3 col-sm-4">
                              <div className="radio-select text-center">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service2"
                                  type="radio"
                                  id="service7"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="service7"
                                >
                                  <i className="isax isax-hospital5" />
                                  <span className="service-title d-block">
                                    Clinic
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-xl col-md-3 col-sm-4">
                              <div className="radio-select text-center">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service2"
                                  type="radio"
                                  id="service8"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="service8"
                                >
                                  <i className="isax isax-video5" />
                                  <span className="service-title d-block">
                                    Video Call
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-xl col-md-3 col-sm-4">
                              <div className="radio-select text-center">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service2"
                                  type="radio"
                                  id="service9"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="service9"
                                >
                                  <i className="isax isax-call5" />
                                  <span className="service-title d-block">
                                    Audio Call
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-xl col-md-3 col-sm-4">
                              <div className="radio-select text-center">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service2"
                                  type="radio"
                                  id="service10"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="service10"
                                >
                                  <i className="isax isax-messages-15" />
                                  <span className="service-title d-block">
                                    Chat
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-xl col-md-3 col-sm-4">
                              <div className="radio-select text-center">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="service2"
                                  type="radio"
                                  id="service11"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="service11"
                                >
                                  <i className="isax isax-messages-15" />
                                  <span className="service-title d-block">
                                    Home Visit
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <h6 className="mb-3">Select Clinics</h6>
                          <div>
                            <div className="service-item">
                              <input
                                className="form-check-input ms-0 mt-0"
                                name="service2"
                                type="checkbox"
                                id="service12"
                              />
                              <label
                                className="form-check-label ms-2"
                                htmlFor="service12"
                              >
                                <span className="d-flex align-items-center flex-wrap rpw-gap-2">
                                  <span className="d-inline-block me-2">
                                    <ImageWithBasePath
                                      src="assets/img/icons/clinic-icon-01.svg"
                                      className="rounded-circle"
                                      alt=""
                                    />
                                  </span>
                                  <span>
                                    <span className="service-title d-block mb-1">
                                      AllCare Family Medicine
                                    </span>
                                    <span className="fs-14">
                                      3343 Private Lane, Valdosta
                                    </span>
                                    <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                                    <span className="fs-14">500 Meters</span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div className="service-item">
                              <input
                                className="form-check-input ms-0 mt-0"
                                name="service2"
                                type="checkbox"
                                id="service13"
                              />
                              <label
                                className="form-check-label ms-2"
                                htmlFor="service13"
                              >
                                <span className="d-flex align-items-center flex-wrap rpw-gap-2">
                                  <span className="d-inline-block me-2">
                                    <ImageWithBasePath
                                      src="assets/img/icons/clinic-icon-02.svg"
                                      className="rounded-circle"
                                      alt=""
                                    />
                                  </span>
                                  <span>
                                    <span className="service-title d-block mb-1">
                                      Vitalplus Clinic
                                    </span>
                                    <span className="fs-14">
                                      4223 Pleasant Hill Road, Miami, FL 33169
                                    </span>
                                    <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                                    <span className="fs-14">12 KM </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div className="service-item">
                              <input
                                className="form-check-input ms-0 mt-0"
                                name="service2"
                                type="checkbox"
                                id="service13"
                              />
                              <label
                                className="form-check-label ms-2"
                                htmlFor="service13"
                              >
                                <span className="d-flex align-items-center flex-wrap rpw-gap-2">
                                  <span className="d-inline-block me-2">
                                    <ImageWithBasePath
                                      src="assets/img/icons/clinic-icon-03.svg"
                                      className="rounded-circle"
                                      alt=""
                                    />
                                  </span>
                                  <span>
                                    <span className="service-title d-block mb-1">
                                      Wellness Path Chiropractic
                                    </span>
                                    <span className="fs-14">
                                      418 Patton Lane, Garner, NC 27529, FL 33169
                                    </span>
                                    <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                                    <span className="fs-14">16 KM </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                        <Link
                          to="#"
                          className="btn btn-md btn-dark prev_btns inline-flex align-items-center rounded-pill"
                          onClick={handlePrev}
                        >
                          <i className="isax isax-arrow-left-2 me-1" />
                          Back
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                          onClick={handleNext}
                        >
                          Select Date &amp; Time
                          <i className="isax isax-arrow-right-3 ms-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </fieldset>
            )}
                {currentStep === 3 && (
                <fieldset style={{display:'block'}}>
                  <div className="card booking-card mb-0">
                    <div className="card-header">
                      <div className="booking-header pb-0">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="d-flex align-items-center flex-wrap rpw-gap-2 mb-4 flex-wrap row-gap-2">
                              <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/clients/client-15.jpg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <h4 className="mb-1">
                                  Dr. Michael Brown{" "}
                                  <span className="badge bg-orange fs-12">
                                    <i className="fa-solid fa-star me-1" />
                                    5.0
                                  </span>
                                </h4>
                                <p className="text-indigo mb-3 fw-medium">
                                  Psychologist
                                </p>
                                <p className="mb-0">
                                  <i className="isax isax-location me-2" />
                                  5th Street - 1011 W 5th St, Suite 120, Austin, TX
                                  78703
                                </p>
                              </div>
                            </div>
                            <h6 className="mb-2">Booking Info</h6>
                            <div className="row gx-2 gy-3">
                              <div className="col-lg-3 col-sm-6">
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">Service</h6>
                                  <p className="mb-0">Cardiology (30 Mins)</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">Service</h6>
                                  <p className="mb-0">Echocardiograms</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">
                                    Date &amp; Time
                                  </h6>
                                  <p className="mb-0">10:00 - 11:00 AM, 15, Oct</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">
                                    Appointment type
                                  </h6>
                                  <p className="mb-0">Clinic (Wellness Path)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body booking-body">
                      <div className="card mb-0">
                        <div className="card-body pb-1">
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="card">
                                <div className="card-body p-2 pt-3">
                                <div style={wrapperStyle}>
                                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                                </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7">
                              <div className="card booking-wizard-slots">
                                <div className="card-body">
                                  <div className="book-title">
                                    <h6 className="fs-14 mb-2">Morning</h6>
                                  </div>
                                  <div className="token-slot mt-2 mb-2">
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                          defaultChecked
                                        />
                                        <span className="visit-rsn">09:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">-</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">-</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">09:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">-</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="book-title">
                                    <h6 className="fs-14 mb-2">Afternoon</h6>
                                  </div>
                                  <div className="token-slot mt-2 mb-2">
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                          defaultChecked
                                        />
                                        <span className="visit-rsn">09:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">-</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="book-title">
                                    <h6 className="fs-14 mb-2">Evening</h6>
                                  </div>
                                  <div className="token-slot mt-2 mb-2">
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                          defaultChecked
                                        />
                                        <span className="visit-rsn">09:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">-</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">-</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">09:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">-</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">10:45</span>
                                      </label>
                                    </div>
                                    <div className="form-check-inline visits me-1">
                                      <label className="visit-btns">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          name="appintment"
                                        />
                                        <span className="visit-rsn">-</span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                        <Link
                          to="#"
                          className="btn btn-md btn-dark prev_btns inline-flex align-items-center rounded-pill"
                          onClick={handlePrev}
                        >
                          <i className="isax isax-arrow-left-2 me-1" />
                          Back
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                          onClick={handleNext}
                        >
                          Add Basic Information
                          <i className="isax isax-arrow-right-3 ms-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </fieldset>
            )}
                {currentStep === 4 && (
                <fieldset style={{display:'block'}}>
                  <div className="card booking-card mb-0">
                    <div className="card-header">
                      <div className="booking-header pb-0">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="d-flex align-items-center flex-wrap rpw-gap-2 mb-4 flex-wrap row-gap-2">
                              <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/clients/client-15.jpg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <h4 className="mb-1">
                                  Dr. Michael Brown{" "}
                                  <span className="badge bg-orange fs-12">
                                    <i className="fa-solid fa-star me-1" />
                                    5.0
                                  </span>
                                </h4>
                                <p className="text-indigo mb-3 fw-medium">
                                  Psychologist
                                </p>
                                <p className="mb-0">
                                  <i className="isax isax-location me-2" />
                                  5th Street - 1011 W 5th St, Suite 120, Austin, TX
                                  78703
                                </p>
                              </div>
                            </div>
                            <h6 className="mb-2">Booking Info</h6>
                            <div className="row gx-2 gy-3">
                              <div className="col-lg-3 col-sm-6">
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">Service</h6>
                                  <p className="mb-0">Cardiology (30 Mins)</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">Service</h6>
                                  <p className="mb-0">Echocardiograms</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">
                                    Date &amp; Time
                                  </h6>
                                  <p className="mb-0">10:00 - 11:00 AM, 15, Oct</p>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div>
                                  <h6 className="fs-14 fw-medium mb-1">
                                    Appointment type
                                  </h6>
                                  <p className="mb-0">Clinic (Wellness Path)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body booking-body">
                      <div className="card mb-0">
                        <div className="card-body pb-1">
                          <div className="row">
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Phone Number</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Select Patient</label>
                                
                                <Select
                            className="select"
                            options={Patient}
                            placeholder="Select"
                            isClearable={true}
                            isSearchable={true}
                          />
                                
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Symptoms</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label className="form-label">Attachment</label>
                                <input type="file" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label className="form-label">
                                  Reason for Visit
                                </label>
                                <textarea
                                  className="form-control"
                                  rows={3}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                        <Link
                          to="#"
                          className="btn btn-md btn-dark prev_btns inline-flex align-items-center rounded-pill"
                          onClick={handlePrev}
                        >
                          <i className="isax isax-arrow-left-2 me-1" />
                          Back
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                          onClick={handleNext}
                        >
                          Select Payment
                          <i className="isax isax-arrow-right-3 ms-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </fieldset>
            )}
                {currentStep === 5 && (
                <fieldset style={{display:'block'}}>
                  <div className="card booking-card mb-0">
                    <div className="card-header">
                      <div className="booking-header pb-0">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="d-flex align-items-center flex-wrap rpw-gap-2 flex-wrap row-gap-2">
                              <span className="avatar avatar-xxxl avatar-rounded me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/clients/client-15.jpg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <h4 className="mb-1">
                                  Dr. Michael Brown{" "}
                                  <span className="badge bg-orange fs-12">
                                    <i className="fa-solid fa-star me-1" />
                                    5.0
                                  </span>
                                </h4>
                                <p className="text-indigo mb-3 fw-medium">
                                  Psychologist
                                </p>
                                <p className="mb-0">
                                  <i className="isax isax-location me-2" />
                                  5th Street - 1011 W 5th St, Suite 120, Austin, TX
                                  78703
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body booking-body">
                      <div className="row">
                        <div className="col-lg-6 d-flex">
                          <div className="card flex-fill mb-3 mb-lg-0">
                            <div className="card-body">
                              <h6 className="mb-3">Payment Gateway</h6>
                              <div className="payment-tabs">
                                <ul
                                  className="nav nav-pills mb-3 row"
                                  id="pills-tab"
                                  role="tablist"
                                >
                                  <li
                                    className="nav-item col-sm-4"
                                    role="presentation"
                                  >
                                    <button
                                      className="nav-link active"
                                      id="pills-home-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#pills-home"
                                      type="button"
                                      role="tab"
                                      aria-selected="true"
                                    >
                                      <ImageWithBasePath
                                        src="assets/img/icons/payment-icon-05.svg"
                                        className="me-2"
                                        alt=""
                                      />
                                      Credit Card
                                    </button>
                                  </li>
                                  <li
                                    className="nav-item col-sm-4"
                                    role="presentation"
                                  >
                                    <button
                                      className="nav-link"
                                      id="pills-profile-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#pills-profile"
                                      type="button"
                                      role="tab"
                                      aria-selected="false"
                                      tabIndex={-1}
                                    >
                                      <ImageWithBasePath
                                        src="assets/img/icons/payment-icon-06.svg"
                                        className="me-2"
                                        alt=""
                                      />
                                      Paypal
                                    </button>
                                  </li>
                                  <li
                                    className="nav-item col-sm-4"
                                    role="presentation"
                                  >
                                    <button
                                      className="nav-link"
                                      id="pills-contact-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#pills-contact"
                                      type="button"
                                      role="tab"
                                      aria-selected="false"
                                      tabIndex={-1}
                                    >
                                      <ImageWithBasePath
                                        src="assets/img/icons/payment-icon-07.svg"
                                        className="me-2"
                                        alt=""
                                      />
                                      Stripe
                                    </button>
                                  </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                  <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                  >
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Card Holder Name
                                      </label>
                                      <div className="position-relative input-icon">
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                        <span>
                                          <i className="isax isax-user" />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Card Number
                                      </label>
                                      <div className="position-relative input-icon">
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                        <span>
                                          <i className="isax isax-card-tick" />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Expire Date
                                      </label>
                                      <div className="position-relative input-icon">
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                        <span>
                                          <i className="isax isax-calendar-2" />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="mb-0">
                                      <label className="form-label">CVV</label>
                                      <div className="position-relative input-icon">
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                        <span>
                                          <i className="isax isax-check" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                  >
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Email Address
                                      </label>
                                      <div className="position-relative input-icon">
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                        <span>
                                          <i className="isax isax-sms" />
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="form-label">Password</label>
                                      <div className="pass-group">
                                        <input
                                          type="password"
                                          className="form-control pass-input"
                                        />
                                        <span className="feather-eye-off toggle-password" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade"
                                    id="pills-contact"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                  >
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Email Address
                                      </label>
                                      <div className="position-relative input-icon">
                                        <input
                                          type="text"
                                          className="form-control"
                                        />
                                        <span>
                                          <i className="isax isax-sms" />
                                        </span>
                                      </div>
                                    </div>
                                    <div>
                                      <label className="form-label">Password</label>
                                      <div className="pass-group">
                                        <input
                                          type="password"
                                          className="form-control pass-input-sub"
                                        />
                                        <span className="feather-eye-off toggle-password-sub" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="card flex-fill mb-0">
                            <div className="card-body">
                              <h6 className="mb-3">Booking Info</h6>
                              <div className="mb-3">
                                <label className="form-label">
                                  Date &amp; Time
                                </label>
                                <div className="form-plain-text">
                                  10:00 - 11:00 AM, 15, Oct 2025{" "}
                                </div>
                              </div>
                              <div className="mb-3">
                                <label className="form-label">
                                  Appointment type
                                </label>
                                <div className="form-plain-text">
                                  Clinic (Wellness Path){" "}
                                </div>
                              </div>
                              <div className="pt-3 border-top booking-more-info">
                                <h6 className="mb-3">Payment Info</h6>
                                <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between mb-2">
                                  <p className="mb-0">Echocardiograms</p>
                                  <span className="fw-medium d-block">$200</span>
                                </div>
                                <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between mb-2">
                                  <p className="mb-0">Booking Fees</p>
                                  <span className="fw-medium d-block">$20</span>
                                </div>
                                <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between mb-2">
                                  <p className="mb-0">Tax</p>
                                  <span className="fw-medium d-block">$18</span>
                                </div>
                                <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between mb-2">
                                  <p className="mb-0">Discount</p>
                                  <span className="fw-medium text-danger d-block">
                                    -$15
                                  </span>
                                </div>
                              </div>
                              <div className="bg-primary d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between p-3 rounded">
                                <h6 className="text-white">Total</h6>
                                <h6 className="text-white">$320</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                        <Link
                          to="#"
                          className="btn btn-md btn-dark prev_btns inline-flex align-items-center rounded-pill"
                          onClick={handlePrev}
                        >
                          <i className="isax isax-arrow-left-2 me-1" />
                          Back
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                          onClick={handleNext}
                        >
                          Confirm &amp; Pay
                          <i className="isax isax-arrow-right-3 ms-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </fieldset>
            )}
                {currentStep === 6 && (
                <fieldset style={{display:'block'}}>
                  <div className="card booking-card">
                    <div className="card-body booking-body pb-1">
                      <div className="row">
                        <div className="col-lg-8 d-flex">
                          <div className="flex-fill">
                            <div className="card ">
                              <div className="card-header">
                                <h5 className="d-flex align-items-center flex-wrap rpw-gap-2">
                                  <i className="isax isax-tick-circle5 text-success me-2" />
                                  Booking Confirmed
                                </h5>
                              </div>
                              <div className="card-header d-flex align-items-center flex-wrap rpw-gap-2">
                                <span className="avatar avatar-lg avatar-rounded me-2 flex-shrink-0">
                                  <ImageWithBasePath
                                    src="assets/img/clients/client-16.jpg"
                                    alt=""
                                  />
                                </span>
                                <p className="mb-0">
                                  Your Booking has been Confirmed with{" "}
                                  <span className="text-dark">
                                    Dr. Michael Brown{" "}
                                  </span>{" "}
                                  be on time before{" "}
                                  <span className="text-dark">15 Mins </span> From
                                  the appointment Time
                                </p>
                              </div>
                              <div className="card-body pb-1">
                                <div className="d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between mb-3">
                                  <h6>Booking Info</h6>
                                  <Link
                                    to="#"
                                    className="btn btn-light rounded-pill"
                                  >
                                    <i className="isax isax-calendar me-1" />
                                    Reschedule
                                  </Link>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">Service</label>
                                      <div className="form-plain-text">
                                        Cardiology (30 Mins)
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Additional Service
                                      </label>
                                      <div className="form-plain-text">
                                        Echocardiograms
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Date &amp; Time
                                      </label>
                                      <div className="form-plain-text">
                                        10:00 - 11:00 AM, 15, Oct 2025{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Appointment type
                                      </label>
                                      <div className="form-plain-text">Clinic </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Clinic Name &amp; Location
                                      </label>
                                      <div className="form-plain-text">
                                        Wellness Path{" "}
                                        <Link
                                          to="#"
                                          className="text-primary"
                                        >
                                          View Location
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-body d-flex align-items-center flex-wrap rpw-gap-2 justify-content-between">
                                <div>
                                  <h6 className="mb-1">Need Our Assistance</h6>
                                  <p className="mb-0">
                                    Call us in case you face any Issue on Booking /
                                    Cancellation
                                  </p>
                                </div>
                                <Link
                                  to="#"
                                  className="btn btn-light rounded-pill"
                                >
                                  <i className="isax isax-call5 me-1" />
                                  Call Us
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 d-flex">
                          <div className="card flex-fill">
                            <div className="card-body d-flex flex-column justify-content-between">
                              <div className="text-center">
                                <h6 className="fs-14 mb-2">Booking Number</h6>
                                <span className="booking-id-badge mb-3">
                                  DCRA12565
                                </span>
                                <span className="d-block mb-3">
                                  <ImageWithBasePath
                                    src="assets/img/icons/payment-qr.svg"
                                    alt=""
                                  />
                                </span>
                                <p>
                                  Scan this QR Code to Download the details of
                                  Appointment
                                </p>
                              </div>
                              <div>
                                <Link
                                  to="#"
                                  className="btn w-100 mb-3 btn-md btn-dark prev_btns inline-flex align-items-center rounded-pill"
                                >
                                  Add To Calendar
                                </Link>
                                <Link
                                  to="/patient/doctor-grid"
                                  className="btn w-100 btn-md btn-primary-gradient next_btns inline-flex align-items-center rounded-pill"
                                >
                                  Start New Booking
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link to="#" className="" onClick={()=>setCurrentStep(1)}>
                      <i className="isax isax-arrow-left-2 me-1" />
                      Back to Bookings
                    </Link>
                  </div>
                </fieldset>
            )}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='modal-backdrop show'></div>
    </>

  )
}

export default BookingPopup