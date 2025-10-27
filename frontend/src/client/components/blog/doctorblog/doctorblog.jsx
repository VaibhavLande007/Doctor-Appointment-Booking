import React from "react";
import { Link } from "react-router-dom";
//images
import {
  IMG01,
  IMG02,
  IMG08,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  blog10,
  doctorthumb3,
  doctorthumb4,
  doctorthumb5,
  doctorthumb6,
  doctorthumb7,
  doctorthumb8,
  doctorthumb9,
  doctorthumb10,
} from "./img.jsx";
//components

import Footer from "../../footer.jsx";
import Header from "../../header.jsx";
import StickyBox from "react-sticky-box";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";
import DoctorSidebar from "../../doctors/sidebar/index.jsx";

const Doctorblog = (props) => {
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
                      Doctor
                    </li>
                    <li className="breadcrumb-item active">Doctor Blog</li>
                  </ol>
                  <h2 className="breadcrumb-title">Doctor Blog</h2>
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
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <DoctorSidebar />
                {/* /Profile Sidebar */}
              </div>
              <div className="col-lg-8 col-xl-9">
                <div className="doc-review review-listing">
                  <div className="row mb-5">
                    <div className="col">
                      <ul className="nav nav-tabs nav-tabs-solid">
                        <li className="nav-item">
                          <Link className="nav-link active" to="/doctor-blog">
                            Acitive Blog
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/blog/doctor-pending-blog">
                            Pending Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-auto">
                      <Link
                        className="btn btn-primary btn-sm"
                        to="/blog/doctor-add-blog"
                      >
                        <i className="fas fa-plus me-1" /> Add Blog
                      </Link>
                    </div>
                  </div>
                  {/* Blog */}
                  <div className="row blog-grid-row">
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-01.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-01.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Ruby Perrin</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 4 Dec 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Doccure – Making your clinic painless visit?
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-02.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-02.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Darren Elder</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 3 Dec 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              What are the benefits of Online Doctor Booking?
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-03.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-03.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Deborah Angel</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 3 Dec 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Benefits of consulting with an Online Doctor
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-04.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-04.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Sofia Brient</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 2 Dec 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              5 Great reasons to use an Online Doctor
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-05.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-05.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Marvin Campbell</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 1 Dec 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Online Doctor Appointment Scheduling
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-06.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-06.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Katharine Berthold</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 30 Nov 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Simple steps to make your doctor visits exceptional!
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-07.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-07.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Linda Tobin</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 28 Nov 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Choose your own Online Doctor Appointment
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-08.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-08.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Paul Richard </span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 25 Nov 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              Simple steps to visit your doctor today
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-09.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-09.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. John Gibbs</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 24 Nov 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">
                              5 Great reasons to use an Online Doctor
                            </Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                    <div className="col-md-6 col-xl-4 col-sm-12">
                      {/* Blog Post */}
                      <div className="blog grid-blog">
                        <div className="blog-image">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-10.jpg"
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="blog-content">
                          <ul className="entry-meta meta-item">
                            <li>
                              <div className="post-author">
                                <Link to="/patient/doctor-profile">
                                  <ImageWithBasePath
                                    src="assets/img/doctors/doctor-thumb-10.jpg"
                                    alt="Post Author"
                                  />{" "}
                                  <span>Dr. Olga Barlow</span>
                                </Link>
                              </div>
                            </li>
                            <li>
                              <i className="isax isax-clock" /> 23 Nov 2023
                            </li>
                          </ul>
                          <h3 className="blog-title">
                            <Link to="/blog/blog-details">Online Doctoral Programs</Link>
                          </h3>
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur em adipiscing
                            elit, sed do eiusmod tempor.
                          </p>
                        </div>
                        <div className="row pt-3">
                          <div className="col">
                            <Link to="/blog/doctor-edit-blog" className="text-success">
                              <i className="isax isax-edit" /> Edit
                            </Link>
                          </div>
                          <div className="col text-end">
                            <Link
                              to="#"
                              className="text-danger"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteNotConfirmModal"
                            >
                              <i className="isax isax-trash" /> Inactive
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* /Blog Post */}
                    </div>
                  </div>
                  {/* Blog Pagination */}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="blog-pagination">
                        <nav>
                          <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                              <Link className="page-link" to="#" tabIndex={-1}>
                                <i className="fas fa-angle-double-left" />
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item active">
                              <Link className="page-link" to="#">
                                2 <span className="visually-hidden">(current)</span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                <i className="fas fa-angle-double-right" />
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* /Blog Pagination */}
                  {/* /Blog */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>


      <Footer {...props} />

      {/* Model */}
      <div
        className="modal fade"
        id="deleteConfirmModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="deleteConfirmModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p id="acc_msg" />
            </div>
            <div className="modal-footer">
              <Link to="#" className="btn btn-success si_accept_confirm">
                Yes
              </Link>
              <button
                type="button"
                className="btn btn-danger si_accept_cancel"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteNotConfirmModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="deleteNotConfirmModal"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="acc_title">
                Inactive Service?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p id="acc_msg1">Service is Booked and Inprogress..</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger si_accept_cancel"
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Model */}
    </div>
  );
};

export default Doctorblog;
