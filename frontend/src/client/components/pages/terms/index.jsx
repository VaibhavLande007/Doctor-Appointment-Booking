import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Terms = (props) => {
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
                    <li className="breadcrumb-item active">Privacy Policy</li>
                  </ol>
                  <h2 className="breadcrumb-title">Privacy Policy</h2>
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
        {/* Terms */}
        <div className="terms-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="terms-text">
                  <h6>Introduction</h6>
                  <p>
                    Welcome to Doccure, a platform that allows you to book
                    appointments with healthcare professionals. By using our services,
                    you agree to these Terms &amp; Conditions. Please read them
                    carefully before proceeding.
                  </p>
                </div>
                <div className="terms-text terms-list">
                  <h6>Introduction</h6>
                  <ul>
                    <li>
                      You must be at least 18 years old to use this website or have
                      parental/guardian consent.
                    </li>
                    <li>
                      Ensure that all information provided is accurate and up-to-date.
                    </li>
                    <li>
                      You are responsible for maintaining the confidentiality of your
                      account and password.
                    </li>
                  </ul>
                </div>
                <div className="terms-text terms-list">
                  <h6>Booking Appointments</h6>
                  <ul>
                    <li>
                      Appointments are booked in real-time, subject to availability.
                    </li>
                    <li>
                      Users are responsible for attending the scheduled appointments
                      or canceling in a timely manner.
                    </li>
                    <li>
                      Cancellations should be made before the appointment to avoid any
                      penalties.
                    </li>
                  </ul>
                </div>
                <div className="terms-text terms-list">
                  <h6>Medical Disclaimer</h6>
                  <ul>
                    <li>
                      Doccure provides a platform for scheduling appointments and is
                      not responsible for the medical services provided.
                    </li>
                    <li>
                      Healthcare providers listed on the platform are independent
                      practitioners, and [Website Name] does not guarantee the quality
                      or accuracy of medical advice provided.
                    </li>
                  </ul>
                </div>
                <div className="terms-text terms-list">
                  <h6>Payment &amp; Fees</h6>
                  <ul>
                    <li>
                      Payment for appointments may be made through [Payment Method]
                      and is subject to [Insert Payment Terms].
                    </li>
                    <li>
                      Any additional fees, such as cancellation or no-show fees, will
                      be disclosed at the time of booking.
                    </li>
                  </ul>
                </div>
                <div className="terms-text terms-list">
                  <h6>Changes to Privacy Policy</h6>
                  <p>
                    Doccure may update these Privacy Policy periodically. Any changes
                    will be communicated through the website or via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Terms */}
      </>



      <Footer {...props} />
    </>
  );
};

export default Terms;
