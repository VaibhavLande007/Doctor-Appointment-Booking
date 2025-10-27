import React, { useState } from "react";
import Footer from "../../../footer";
import Header from "../../../header.jsx";
import {
  doctor_thumb_13,
  doctor_thumb_14,
  doctor_thumb_15,
  doctor_thumb_16,
  doctor_thumb_17,
  doctor_thumb_18,
  doctor_thumb_19,
  doctor_thumb_20,
  doctor_thumb_21,
} from "../../../imagepath.jsx";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ImageWithBasePath from "../../../../../core/img/imagewithbasebath.jsx";

const Favourites = (props) => {
  const [isFavourite, setIsFavourite] = useState([
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const toggleFavourite = (index) => {
    setIsFavourite((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };

  return (
    <div>
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
                    <li className="breadcrumb-item active">Favourites</li>
                  </ol>
                  <h2 className="breadcrumb-title">Favourites</h2>
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
                <h3>Favourites</h3>
                <ul className="header-list-btns">
                  <li>
                    <div className="input-block dash-search-input">
                      <input type="text" className="form-control" placeholder="Search" />
                      <span className="search-icon">
                        <i className="isax isax-search-normal" />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Favourites */}
              <div className="row">
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-21.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.Edalin Hendry</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">MD - Cardiology</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span className="d-inline-block average-rating">5.0</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span> 23 Mar 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> Newyork, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 21 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Details
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-13.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.Shanta Nesmith</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">DO - Oncology</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">(35)</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span> 27 Mar 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> Los Angeles, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 18 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-14.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.John Ewel</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">MD - Orthopedics</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">5.0</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span> 02 Apr 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> Dallas, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 28 Jan 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-15.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.Susan Fenimore</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">DO - Dermatology</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">4.0</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span> 11 Apr 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> Chicago, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 08 Feb 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-16.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.Juliet Rios</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">MD - Neurology</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">5.0</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span>18 Apr 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> Detroit, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 16 Feb 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-17.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.Joseph Engels</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">MD - Pediatrics</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">4.0</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span> 10 May 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> Las Vegas, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 08 Mar 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-18.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.Victoria Selzer</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">DO - Anesthesiology</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">5.0</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span> 20 May 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> Denver, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 18 Mar 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-19.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.Benjamin Hedge</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">DO - Endocrinology</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">4.0</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span> 24 May 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> Miami, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 21 Mar 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 d-flex">
                  <div className="profile-widget patient-favour flex-fill">
                    <div className="fav-head">
                      <Link to="#" className="fav-btn favourite-btn">
                        <span className="favourite-icon favourite">
                          <i className="isax isax-heart5" />
                        </span>
                      </Link>
                      <div className="doc-img">
                        <Link to="/patient/doctor-profile">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-20.jpg"
                          />
                        </Link>
                      </div>
                      <div className="pro-content">
                        <h3 className="title">
                          <Link to="/patient/doctor-profile">Dr.Kristina Lepley</Link>
                          <i className="isax isax-tick-circle5 verified" />
                        </h3>
                        <p className="speciality">MD - Urology</p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">5.0</span>
                        </div>
                        <ul className="available-info">
                          <li>
                            <i className="isax isax-calendar5 me-1" />
                            <span>Next Availability :</span> 13 Jun 2025
                          </li>
                          <li>
                            <i className="isax isax-location5 me-1" />
                            <span>Location :</span> San Jose, USA
                          </li>
                        </ul>
                        <div className="last-book">
                          <p>Last Book on 10 Apr 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="fav-footer">
                      <div className="row row-sm">
                        <div className="col-6">
                          <Link
                            to="/patient/doctor-profile"
                            className="btn btn-md btn-light w-100"
                          >
                            View Profile
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="/booking"
                            className="btn btn-md btn-outline-primary w-100"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Favourites */}
              <div className="col-md-12">
                <div className="loader-item text-center mt-0">
                  <Link
                    to="#;"
                    className="btn btn-outline-primary rounded-pill"
                  >
                    Load More
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Favourites;
