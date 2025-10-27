import React from "react";
import { Link } from "react-router-dom";
// import Lightbox from 'react-image-lightbox';


import MyComponent from "./mycomponent";
import ImageWithBasePath from "../../../../../core/img/imagewithbasebath";

const SearchList = () => {
  return (
    <div className="row">
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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
      <div className="col-xxl-3 col-lg-4 col-md-6">
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

  );
};

export default SearchList;
