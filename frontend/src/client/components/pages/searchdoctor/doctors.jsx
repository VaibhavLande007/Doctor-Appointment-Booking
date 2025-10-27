import React from "react";
// import { Doctor01, Doctor2, Doctor3 } from "../../home/image";
// import { doctor04, doctor05 } from "../aboutus/img";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";


const Doctors = () => {

  return (
    <>
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="mb-4">
          <h3>
            Showing <span className="text-secondary">450</span> Doctors For You
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
          <Link to="/patient/doctor-grid" className="btn btn-sm head-icon me-2">
            <i className="isax isax-grid-7" />
          </Link>
          <Link to="/patient/search-doctor2" className="btn btn-sm head-icon active me-2">
            <i className="isax isax-row-vertical" />
          </Link>
          <Link to="/patient/doctor-list" className="btn btn-sm head-icon">
            <i className="isax isax-location" />
          </Link>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="card doctor-list-card">
          <div className="d-md-flex align-items-center">
            <div className="card-img card-img-hover">
              <Link to="/patient/doctor-profile">
                <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-01.jpg" alt="" />
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
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#" className="text-teal fw-medium fs-14">
                  Neurologist
                </Link>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1" />
                  Available
                </span>
              </div>
              <div className="p-3">
                <div className="doctor-info-detail pb-3">
                  <div className="row align-items-center gy-3">
                    <div className="col-sm-6">
                      <div>
                        <h6 className="d-flex align-items-center mb-1">
                          <Link to="/patient/doctor-profile">Dr. Charles Scott</Link>
                          <i className="isax isax-tick-circle5 text-success ms-2" />
                        </h6>
                        <p className="mb-2">MBBS, DNB - Neurology</p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-location me-2" />
                          Hamshire, TX
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline ms-2"
                          >
                            Get Direction
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-language-circle text-dark me-2" />
                          English, French
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-like-1 text-dark me-2" />
                          98% (252 / 287 Votes)
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-archive-14 text-dark me-2" />
                          20 Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="me-3">
                      <p className="mb-1">Consultation Fees</p>
                      <h3 className="text-orange">$600</h3>
                    </div>
                    <p className="mb-0">
                      Next available at <br />
                      10:00 AM - 15 Oct, Tue
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="card doctor-list-card">
          <div className="d-md-flex align-items-center">
            <div className="card-img card-img-hover">
              <Link to="/patient/doctor-profile">
                <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-02.jpg" alt="" />
              </Link>
              <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                <span className="badge bg-orange">
                  <i className="fa-solid fa-star me-1" />
                  4.3
                </span>
                <Link to="javascript:void(0)" className="fav-icon">
                  <i className="fa fa-heart" />
                </Link>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#" className="text-info fw-medium fs-14">
                  Cardiologist
                </Link>
                <span className="badge bg-danger-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1" />
                  Unavailable
                </span>
              </div>
              <div className="p-3">
                <div className="doctor-info-detail pb-3">
                  <div className="row align-items-center gy-3">
                    <div className="col-sm-6">
                      <div>
                        <h6 className="d-flex align-items-center mb-1">
                          <Link to="/patient/doctor-profile">Dr. Robert Thomas</Link>
                          <i className="isax isax-tick-circle5 text-success ms-2" />
                        </h6>
                        <p className="mb-2">MBBS, MD - Cardialogy</p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-location me-2" />
                          Oakland, CA
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline ms-2"
                          >
                            Get Direction
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-language-circle text-dark me-2" />
                          English, Spanish
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-like-1 text-dark me-2" />
                          92% (270 / 300 Votes)
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-archive-14 text-dark me-2" />
                          30 Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="me-3">
                      <p className="mb-1">Consultation Fees</p>
                      <h3 className="text-orange">$450</h3>
                    </div>
                    <p className="mb-0">
                      Next available at <br />
                      11.00 AM - 19 Oct, Sat
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="card doctor-list-card">
          <div className="d-md-flex align-items-center">
            <div className="card-img card-img-hover">
              <Link to="/patient/doctor-profile">
                <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-03.jpg" alt="" />
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
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#" className="text-indigo fw-medium fs-14">
                  Psychologist
                </Link>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1" />
                  Available
                </span>
              </div>
              <div className="p-3">
                <div className="doctor-info-detail pb-3">
                  <div className="row align-items-center gy-3">
                    <div className="col-sm-6">
                      <div>
                        <h6 className="d-flex align-items-center mb-1">
                          <Link to="/patient/doctor-profile">Dr. Margaret Koller</Link>
                          <i className="isax isax-tick-circle5 text-success ms-2" />
                        </h6>
                        <p className="mb-2"> B.S, M.S - Psychology</p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-location me-2" />
                          Killeen, TX
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline ms-2"
                          >
                            Get Direction
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-language-circle text-dark me-2" />
                          English, Portuguese
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-like-1 text-dark me-2" />
                          94% (268 / 312 Votes)
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-archive-14 text-dark me-2" />
                          15 Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="me-3">
                      <p className="mb-1">Consultation Fees</p>
                      <h3 className="text-orange">$700</h3>
                    </div>
                    <p className="mb-0">
                      Next available at <br />
                      10.30 AM - 29 Oct, Tue
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="card doctor-list-card">
          <div className="d-md-flex align-items-center">
            <div className="card-img card-img-hover">
              <Link to="/patient/doctor-profile">
                <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-04.jpg" alt="" />
              </Link>
              <div className="grid-overlay-item d-flex align-items-center justify-content-between">
                <span className="badge bg-orange">
                  <i className="fa-solid fa-star me-1" />
                  4.5
                </span>
                <Link to="javascript:void(0)" className="fav-icon">
                  <i className="fa fa-heart" />
                </Link>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#" className="text-pink fw-medium fs-14">
                  Pediatrician
                </Link>
                <span className="badge bg-danger-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1" />
                  Unavailable
                </span>
              </div>
              <div className="p-3">
                <div className="doctor-info-detail pb-3">
                  <div className="row align-items-center gy-3">
                    <div className="col-sm-6">
                      <div>
                        <h6 className="d-flex align-items-center mb-1">
                          <Link to="/patient/doctor-profile">Dr. Cath Busick</Link>
                          <i className="isax isax-tick-circle5 text-success ms-2" />
                        </h6>
                        <p className="mb-2">MBBS, MD - Pediatrics</p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-location me-2" />
                          Schenectady, NY
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline ms-2"
                          >
                            Get Direction
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-language-circle text-dark me-2" />
                          English, Arabic
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-like-1 text-dark me-2" />
                          87% (237 / 250 Votes)
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-archive-14 text-dark me-2" />
                          12 Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="me-3">
                      <p className="mb-1">Consultation Fees</p>
                      <h3 className="text-orange">$750</h3>
                    </div>
                    <p className="mb-0">
                      Next available at <br />
                      02:00 PM - 04 Nov, Mon
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="card doctor-list-card">
          <div className="d-md-flex align-items-center">
            <div className="card-img card-img-hover">
              <Link to="/patient/doctor-profile">
                <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-05.jpg" alt="" />
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
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#" className="text-indigo fw-medium fs-14">
                  Psychologist
                </Link>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1" />
                  Available
                </span>
              </div>
              <div className="p-3">
                <div className="doctor-info-detail pb-3">
                  <div className="row align-items-center gy-3">
                    <div className="col-sm-6">
                      <div>
                        <h6 className="d-flex align-items-center mb-1">
                          <Link to="/patient/doctor-profile">Dr. Michael Brown</Link>
                          <i className="isax isax-tick-circle5 text-success ms-2" />
                        </h6>
                        <p className="mb-2"> B.S, M.S - Psychology</p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-location me-2" />
                          Minneapolis, MN
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline ms-2"
                          >
                            Get Direction
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-language-circle text-dark me-2" />
                          English, German
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-like-1 text-dark me-2" />
                          90% (228 / 240 Votes)
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-archive-14 text-dark me-2" />
                          18 Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="me-3">
                      <p className="mb-1">Consultation Fees</p>
                      <h3 className="text-orange">$400</h3>
                    </div>
                    <p className="mb-0">
                      Next available at <br />
                      04:00 PM - 20 Nov, Wed
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="card doctor-list-card">
          <div className="d-md-flex align-items-center">
            <div className="card-img card-img-hover">
              <Link to="/patient/doctor-profile">
                <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-06.jpg" alt="" />
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
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#" className="text-pink fw-medium fs-14">
                  Pediatrician
                </Link>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1" />
                  Available
                </span>
              </div>
              <div className="p-3">
                <div className="doctor-info-detail pb-3">
                  <div className="row align-items-center gy-3">
                    <div className="col-sm-6">
                      <div>
                        <h6 className="d-flex align-items-center mb-1">
                          <Link to="/patient/doctor-profile">Dr. Nicholas Tello</Link>
                          <i className="isax isax-tick-circle5 text-success ms-2" />
                        </h6>
                        <p className="mb-2">MBBS, MD - Pediatrics</p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-location me-2" />
                          Ogden, IA
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline ms-2"
                          >
                            Get Direction
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-language-circle text-dark me-2" />
                          English, Korean
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-like-1 text-dark me-2" />
                          95% (200 / 220 Votes)
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-archive-14 text-dark me-2" />
                          15 Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="me-3">
                      <p className="mb-1">Consultation Fees</p>
                      <h3 className="text-orange">$400</h3>
                    </div>
                    <p className="mb-0">
                      Next available at <br />
                      11:00 AM - 14 Nov, Thu
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="card doctor-list-card">
          <div className="d-md-flex align-items-center">
            <div className="card-img card-img-hover">
              <Link to="/patient/doctor-profile">
                <ImageWithBasePath src="assets/img/doctor-grid/doctor-list-07.jpg" alt="" />
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
              <div className="d-flex align-items-center justify-content-between border-bottom p-3">
                <Link to="#" className="text-info fw-medium fs-14">
                  Cardiologist
                </Link>
                <span className="badge bg-success-light d-inline-flex align-items-center">
                  <i className="fa-solid fa-circle fs-5 me-1" />
                  Available
                </span>
              </div>
              <div className="p-3">
                <div className="doctor-info-detail pb-3">
                  <div className="row align-items-center gy-3">
                    <div className="col-sm-6">
                      <div>
                        <h6 className="d-flex align-items-center mb-1">
                          <Link to="/patient/doctor-profile">Dr. Tyrone Patrick</Link>
                          <i className="isax isax-tick-circle5 text-success ms-2" />
                        </h6>
                        <p className="mb-2">MBBS, MD - Cardialogy</p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-location me-2" />
                          Clark Fork, ID
                          <Link
                            to="#"
                            className="text-primary text-decoration-underline ms-2"
                          >
                            Get Direction
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-language-circle text-dark me-2" />
                          English, Russian
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14 mb-2">
                          <i className="isax isax-like-1 text-dark me-2" />
                          97% (232 / 248 Votes)
                        </p>
                        <p className="d-flex align-items-center mb-0 fs-14">
                          <i className="isax isax-archive-14 text-dark me-2" />
                          22 Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mt-3">
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="me-3">
                      <p className="mb-1">Consultation Fees</p>
                      <h3 className="text-orange">$400</h3>
                    </div>
                    <p className="mb-0">
                      Next available at <br />
                      06:00 PM - 29 Nov, Fri
                    </p>
                  </div>
                  <Link
                    to="/booking"
                    className="btn btn-md btn-primary-gradient d-inline-flex align-items-center rounded-pill"
                  >
                    <i className="isax isax-calendar-1 me-2" />
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="pagination dashboard-pagination mt-md-3 mt-0 mb-4">
          <ul>
            <li>
              <Link to="#" className="page-link prev">
                Prev
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
              <Link to="#" className="page-link next">
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default Doctors;
