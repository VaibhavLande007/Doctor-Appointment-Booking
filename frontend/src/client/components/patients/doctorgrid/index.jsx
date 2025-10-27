import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Header from "../../header";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { DatePicker, Slider } from "antd";



const DoctorGrid = (props) => {
  useEffect(() => {
    document.body.classList.add("map-page");

    return () => document.body.classList.remove("map-page");
  }, []);


  const specialities = [
    { value: 'Specialities', label: 'Specialities' },
    { value: 'Urology', label: 'Urology' },
    { value: 'Psychiatry', label: 'Psychiatry' },
    { value: 'Psychiatry', label: 'Psychiatry' },
    { value: 'Cardiology', label: 'Cardiology' },
  ];
  const reviews = [
    { value: 'Reviews', label: 'Reviews' },
    { value: '5 Star', label: '5 Star' },
    { value: '4 Star', label: '4 Star' },
    { value: '3 Star', label: '3 Star' },
  ];
  const clinic = [
    { value: 'Bright Smiles Dental Clinic', label: 'Bright Smiles Dental Clinic' },
    { value: 'Family Care Clinic', label: 'Family Care Clinic' },
    { value: 'Express Health Clinic', label: 'Express Health Clinic' },
  ];


  const formatter = (value) => `$${value}`;

  const [showMenu,setShowMenu] = useState(false)
    const [showMenu2,setShowMenu2] = useState(false)
    const [showMenu3,setShowMenu3] = useState(false)
    const [showMenu4,setShowMenu4] = useState(false)

  return (
    <>
      <Header {...props} />
      {/* Breadcrumb */}
      <div className="breadcrumb-bar overflow-visible">
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
                  <li className="breadcrumb-item">Doctor</li>
                  <li className="breadcrumb-item active">Doctor Grid</li>
                </ol>
                <h2 className="breadcrumb-title">Doctor Grid</h2>
              </nav>
            </div>
          </div>
          <div className="bg-primary-gradient rounded-pill doctors-search-box">
            <div className="search-box-one rounded-pill">
              <form>
                <div className="search-input search-line">
                  <i className="isax isax-hospital5 bficon" />
                  <div className=" mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for Doctors, Hospitals, Clinics"
                    />
                  </div>
                </div>
                <div className="search-input search-map-line">
                  <i className="isax isax-location5" />
                  <div className=" mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="search-input search-calendar-line">
                  <i className="isax isax-calendar-tick5" />
                  <div className=" mb-0">
                    <DatePicker
                      className="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
                <div className="form-search-btn">
                  <button
                    className="btn btn-primary d-inline-flex align-items-center rounded-pill"
                    type="submit"
                  >
                    <i className="isax isax-search-normal-15 me-2" />
                    Search
                  </button>
                </div>
              </form>
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

      <div className="content mt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="card filter-lists">
                <div className="card-header">
                  <div className="d-flex align-items-center filter-head justify-content-between">
                    <h4>Filter</h4>
                    <Link to="#" className="text-secondary text-decoration-underline">
                      Clear All
                    </Link>
                  </div>
                  <div className="filter-input">
                    <div className="position-relative input-icon">
                      <input type="text" className="form-control" />
                      <span>
                        <i className="isax isax-search-normal-1" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="accordion-item border-bottom">
                    <div className="accordion-header" id="heading1">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-controls="collapse1"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Specialities</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse1"
                      className="accordion-collapse show"
                      aria-labelledby="heading1"
                    >
                      <div className="accordion-body pt-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm2"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm2"
                            >
                              Urology
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm3"
                            >
                              Psychiatry
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm4"
                            >
                              Cardiology
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm5"
                            >
                              Pediatrics
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm6"
                            >
                              Urology
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm7"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm7"
                            >
                              Neurology
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm8"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm8"
                            >
                              Pulmonology
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                        <div className="view-content" >
                          <div className="viewall-one" style={{ display: !showMenu ? 'none' : 'block' }}>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="checkebox-sm9"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkebox-sm9"
                                >
                                  Orthopedics
                                </label>
                              </div>
                              <span className="filter-badge">21</span>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="checkebox-sm10"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkebox-sm10"
                                >
                                  Endocrinology
                                </label>
                              </div>
                              <span className="filter-badge">21</span>
                            </div>
                          </div>
                          <div className="view-all">
                            <Link
                              to="#" onClick={()=>{setShowMenu(!showMenu)}}
                              className="viewall-button-one text-secondary text-decoration-underline"
                            >
                              {showMenu ?'View Less':'View More'}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom">
                    <div className="accordion-header" id="heading2">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-controls="collapse2"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Gender</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse2"
                      className="accordion-collapse show"
                      aria-labelledby="heading2"
                    >
                      <div className="accordion-body pt-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm11"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm11"
                            >
                              Male
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm12"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm12"
                            >
                              Female
                            </label>
                          </div>
                          <span className="filter-badge">21</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom">
                    <div className="accordion-header" id="heading3">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-controls="collapse3"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Availability</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse3"
                      className="accordion-collapse show"
                      aria-labelledby="heading3"
                    >
                      <div className="accordion-body pt-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm13"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm13"
                            >
                              Available Today
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm14"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm14"
                            >
                              Available Tomorrow
                            </label>
                          </div>
                        </div>
                        <div className="view-content">
                          <div className="viewall-two" style={{display: !showMenu2 ?'none':'block'}}>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="checkebox-sm15"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkebox-sm15"
                                >
                                  Available in Next 7 Days
                                </label>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="checkebox-sm16"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkebox-sm16"
                                >
                                  Available in Next 30 Days
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="view-all">
                            <Link
                              to="#" onClick={()=>{setShowMenu2(!showMenu2)}}
                              className="viewall-button-two text-secondary text-decoration-underline"
                            >
                             {showMenu ?'View Less':'View More'}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom">
                    <div className="accordion-header" id="heading4">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-controls="collapse4"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Pricing</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse4"
                      className="accordion-collapse show"
                      aria-labelledby="heading4"
                    >
                      <div className="accordion-body pt-3">
                        <div className="filter-range">
                        <Slider range tooltip={{ formatter }}  min={200} max={5695} defaultValue={[500, 2000]}  />
                        </div>
                        <p className="mb-0">Range : $200 - $5695</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom">
                    <div className="accordion-header" id="heading5">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse5"
                        aria-controls="collapse5"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Experience</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse5"
                      className="accordion-collapse show"
                      aria-labelledby="heading5"
                    >
                      <div className="accordion-body pt-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm21"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm21"
                            >
                              2+ Years
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm22"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm22"
                            >
                              5+ Years
                            </label>
                          </div>
                        </div>
                        <div className="view-content">
                          <div className="viewall-3" style={{display: !showMenu3 ?'none':'block'}}>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="checkebox-sm23"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkebox-sm23"
                                >
                                  7+ Years
                                </label>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="checkebox-sm24"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkebox-sm24"
                                >
                                  10+ Years
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="view-all">
                            <Link
                              to="#" onClick={()=>{setShowMenu3(!showMenu3)}}
                              className="viewall-button-3 text-secondary text-decoration-underline"
                            >
                             {showMenu2 ?'View Less':'View All'}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom">
                    <div className="accordion-header" id="heading6">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse6"
                        aria-controls="collapse6"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Clinics</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse6"
                      className="accordion-collapse show"
                      aria-labelledby="heading6"
                    >
                      <div className="accordion-body pt-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm25"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm25"
                            >
                              Bright Smiles Dental Clinic
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm26"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm26"
                            >
                              Family Care Clinic
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm27"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm27"
                            >
                              Express Health Clinic
                            </label>
                          </div>
                        </div>
                        <div className="view-content">
                          <div className="viewall-4" style={{ display: !showMenu4 ? 'none' : 'block' }}>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="checkebox-sm28"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkebox-sm28"
                                >
                                  Restore Physical Therapy
                                </label>
                              </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue=""
                                  id="checkebox-sm29"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="checkebox-sm29"
                                >
                                  Blossom Women’s Health Clinic
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="view-all">
                            <Link
                              to="#" onClick={()=>{setShowMenu4(!showMenu4)}}
                              className="viewall-button-4 text-secondary text-decoration-underline"
                            >
                              {showMenu4 ?'View Less':'View More'}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom">
                    <div className="accordion-header" id="heading7">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse7"
                        aria-controls="collapse7"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Consultation type</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse7"
                      className="accordion-collapse show"
                      aria-labelledby="heading7"
                    >
                      <div className="accordion-body pt-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm30"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm30"
                            >
                              Audio Call
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm31"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm31"
                            >
                              Video Call
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm32"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm32"
                            >
                              Instant Counseling
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm33"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm33"
                            >
                              Chat
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-bottom">
                    <div className="accordion-header" id="heading8">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse8"
                        aria-controls="collapse8"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Languages</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse8"
                      className="accordion-collapse show"
                      aria-labelledby="heading8"
                    >
                      <div className="accordion-body pt-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm34"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm34"
                            >
                              English
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm35"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm35"
                            >
                              French
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm36"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm36"
                            >
                              Spanish
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm37"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm37"
                            >
                              German
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="heading9">
                      <div
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse9"
                        aria-controls="collapse9"
                        role="button"
                      >
                        <div className="d-flex align-items-center w-100">
                          <h5>Languages</h5>
                          <div className="ms-auto">
                            <span>
                              <i className="fas fa-chevron-down" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapse9"
                      className="accordion-collapse show"
                      aria-labelledby="heading9"
                    >
                      <div className="accordion-body pt-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm38"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm38"
                            >
                              <span>
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                              </span>
                              5 Star
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm39"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm39"
                            >
                              <span>
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                              </span>
                              4 Star
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm40"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm40"
                            >
                              <span>
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                              </span>
                              3 Star
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm41"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm41"
                            >
                              <span>
                                <i className="fa-solid fa-star text-orange me-1" />
                                <i className="fa-solid fa-star text-orange me-1" />
                              </span>
                              2 Star
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="checkebox-sm42"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkebox-sm42"
                            >
                              <span>
                                <i className="fa-solid fa-star text-orange me-1" />
                              </span>
                              1 Star
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="mb-4">
                    <h3>
                      Showing <span className="text-secondary">450</span> Doctors For
                      You
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center justify-content-end mb-4">
                    <div className="doctor-filter-availability me-2">
                      <p>Availability</p>
                      <div className="status-toggle status-tog">
                        <input type="checkbox" id="status_6" className="check" />
                        <label htmlFor="status_6" className="checktoggle">
                          checkbox
                        </label>
                      </div>
                    </div>
                    <div className="dropdown header-dropdown me-2">
                      <Link
                        className="dropdown-toggle sort-dropdown"
                        data-bs-toggle="dropdown"
                        to="#"
                        aria-expanded="false"
                      >
                        <span>Sort By</span>Price (Low to High)
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item">
                          Price (Low to High)
                        </Link>
                        <Link to="#" className="dropdown-item">
                          Price (High to Low)
                        </Link>
                      </div>
                    </div>
                    <Link
                      to="/patient/doctor-grid"
                      className="btn btn-sm head-icon active me-2"
                    >
                      <i className="isax isax-grid-7" />
                    </Link>
                    <Link to="/patient/search-doctor2" className="btn btn-sm head-icon me-2">
                      <i className="isax isax-row-vertical" />
                    </Link>
                    <Link to="/patient/doctor-list" className="btn btn-sm head-icon">
                      <i className="isax isax-location" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-01.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          5.0
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar align-items-center justify-content-between p-3">
                        <Link to="#" className="text-indigo fw-medium fs-14">
                          Psychologist
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Michael Brown</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Minneapolis, MN
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$650</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-02.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.6
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-pink align-items-center justify-content-between p-3">
                        <Link to="#" className="text-pink fw-medium fs-14">
                          Pediatrician
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Nicholas Tello</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Ogden, IA
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">60 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$400</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-03.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.8
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-teal align-items-center justify-content-between p-3">
                        <Link to="#" className="text-teal fw-medium fs-14">
                          Neurologist
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Harold Bryant</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Winona, MS
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$500</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-04.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.8
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-info align-items-center justify-content-between p-3">
                        <Link to="#" className="text-info fw-medium fs-14">
                          Cardiologist
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Sandra Jones</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Beckley, WV
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$550</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-05.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.2
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-teal align-items-center justify-content-between p-3">
                        <Link to="#" className="text-teal fw-medium fs-14">
                          Neurologist
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Charles Scott</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Hamshire, TX
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$600</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-06.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.2
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-info align-items-center justify-content-between p-3">
                        <Link to="#" className="text-info fw-medium fs-14">
                          Cardiologist
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Robert Thomas</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Oakland, CA
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$450</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-07.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.7
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-indigo align-items-center justify-content-between p-3">
                        <Link to="#" className="text-indigo fw-medium fs-14">
                          Psychologist
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Margaret Koller</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Killeen, TX
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$450</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-08.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.7
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-pink align-items-center justify-content-between p-3">
                        <Link to="#" className="text-pink fw-medium fs-14">
                          Pediatrician
                        </Link>
                        <span className="badge bg-danger-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Unavailable
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Cath Busick</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Schenectady, NY
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$750</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-09.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.9
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-indigo align-items-center justify-content-between p-3">
                        <Link to="#" className="text-indigo fw-medium fs-14">
                          Psychologist
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Travis Barton</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Metairie, LA
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">60 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$480</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-10.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          5.0
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-danger align-items-center justify-content-between p-3">
                        <Link to="#" className="text-danger fw-medium fs-14">
                          Gastroenterology
                        </Link>
                        <span className="badge bg-success-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Available
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Daisy Malcolm</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Lexington, KY
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">60 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$520</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-11.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.4
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-info align-items-center justify-content-between p-3">
                        <Link to="#" className="text-info fw-medium fs-14">
                          Cardiologist
                        </Link>
                        <span className="badge bg-danger-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Unavailable
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Tyrone Patrick</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Clark Fork, ID
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$360</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-6">
                  <div className="card">
                    <div className="card-img card-img-hover">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath src="assets/img/doctor-grid/doctor-grid-12.jpg" alt="" />
                      </Link>
                      <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                        <span className="badge bg-orange">
                          <i className="fa-solid fa-star me-1" />
                          4.2
                        </span>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="fa fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="card-body p-0">
                      <div className="d-flex active-bar active-bar-pink align-items-center justify-content-between p-3">
                        <Link to="#" className="text-pink fw-medium fs-14">
                          Pediatrician
                        </Link>
                        <span className="badge bg-danger-light d-inline-flex align-items-center">
                          <i className="fa-solid fa-circle fs-5 me-1" />
                          Unavailable
                        </span>
                      </div>
                      <div className="p-3 pt-0">
                        <div className="doctor-info-detail mb-3 pb-3">
                          <h3 className="mb-1">
                            <Link to="/patient/doctor-profile">Dr. Ann Bell</Link>
                          </h3>
                          <div className="d-flex align-items-center">
                            <p className="d-flex align-items-center mb-0 fs-14">
                              <i className="isax isax-location me-2" />
                              Minneapolis, MN
                            </p>
                            <i className="fa-solid fa-circle fs-5 text-primary mx-2 me-1" />
                            <span className="fs-14 fw-medium">30 Min</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-1">Consultation Fees</p>
                            <h3 className="text-orange">$630</h3>
                          </div>
                          <Link
                            to="/booking"
                            className="btn btn-md btn-dark d-inline-flex align-items-center rounded-pill"
                          >
                            <i className="isax isax-calendar-1 me-2" />
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="text-center mb-4">
                    <Link
                      to="/login"
                      className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                    >
                      <i className="isax isax-d-cube-scan5 me-2" />
                      Load More 425 Doctors
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default DoctorGrid;
