/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
const Faq = (props) => {
  let pathname = props.location.pathname;

  if (props.location.pathname === "/pages/faq") {
    require("../../../assets/css/feather.css");
  }
  return (
    <>
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
                    <li className="breadcrumb-item active">FAQ</li>
                  </ol>
                  <h2 className="breadcrumb-title">FAQ</h2>
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
        {/* FAQ Section */}
        <section className="faq-inner-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h2>Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="faq-info faq-inner-info">
                  <div className="accordion" id="faq-details">
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          How do I book an appointment?
                        </Link>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Can i make an Appointment Online with White Plains Hospital
                          Kendi?
                        </Link>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Is my personal information secure?
                        </Link>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Can I cancel or reschedule my appointment?
                        </Link>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          How do I find a specific doctor or specialist?
                        </Link>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="faq-info faq-inner-info">
                  <div className="accordion" id="faq-details-info">
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSix">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Can I book appointments for family members through my
                          account?
                        </Link>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#faq-details-info"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingSeven">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          Is my payment information secure?
                        </Link>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#faq-details-info"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingEight">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          Can I use Doccure on my mobile device?
                        </Link>
                      </h2>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#faq-details-info"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingNine">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseNine"
                          aria-expanded="false"
                          aria-controls="collapseNine"
                        >
                          How can I change my password or update my account
                          information?
                        </Link>
                      </h2>
                      <div
                        id="collapseNine"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#faq-details-info"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTen">
                        <Link
                          to="javascript:void(0)"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTen"
                          aria-expanded="false"
                          aria-controls="collapseTen"
                        >
                          What happens if my chosen doctor is unavailable for the
                          selected time?
                        </Link>
                      </h2>
                      <div
                        id="collapseTen"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTen"
                        data-bs-parent="#faq-details-info"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Yes, simply visit our website and log in or create an
                              account. Search for a doctor based on specialization,
                              location, or availability &amp; confirm your booking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /FAQ Section */}
      </>


      <Footer {...props} />
    </>
  );
};

export default Faq;
