import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const PricingPlan = (props) => {
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
                    <li className="breadcrumb-item active">Pricing Plan</li>
                  </ol>
                  <h2 className="breadcrumb-title">Pricing Plan</h2>
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
        {/* Pricing */}
        <section className="pricing-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-inner-header pricing-inner-header">
                  <h2>Our Pricing Plan</h2>
                  <div className="plan-choose-info">
                    <label className="monthly-plan">Monthly</label>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        defaultChecked=""
                      />
                    </div>
                    <label className="yearly-plan">Yearly</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="card pricing-card w-100">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-icon">
                          <span>
                            <ImageWithBasePath src="assets/img/icons/price-icon1.svg" alt="icon" />
                          </span>
                        </div>
                        <div className="pricing-title">
                          <p>For individuals</p>
                          <h4>Basic</h4>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-info">
                      <div className="pricing-amount">
                        <h2>
                          $99 <span>/monthly</span>
                        </h2>
                        <h6>What’s included</h6>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li>Profile Creation</li>
                          <li>Appointment Booking</li>
                          <li>Notification Alerts</li>
                          <li>Limited Telemedicine Access</li>
                        </ul>
                      </div>
                      <div className="pricing-btn">
                        <Link to="login-email.html" className="btn btn-primary">
                          Choose Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card pricing-card active w-100">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-icon">
                          <span>
                            <ImageWithBasePath src="assets/img/icons/price-icon2.svg" alt="icon" />
                          </span>
                        </div>
                        <div className="pricing-title">
                          <p>For startups</p>
                          <h4>Premium</h4>
                        </div>
                      </div>
                      <div>
                        <span className="badge">Popular</span>
                      </div>
                    </div>
                    <div className="pricing-info">
                      <div className="pricing-amount">
                        <h2>
                          $199 <span>/monthly</span>
                        </h2>
                        <h6>What’s included</h6>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li>Profile Creation</li>
                          <li>Appointment Booking</li>
                          <li>Notification Alerts</li>
                          <li>Extended Telemedicine Access</li>
                          <li>Exclusive Discounts</li>
                          <li>Appointment History</li>
                          <li>Priority Customer Support</li>
                        </ul>
                      </div>
                      <div className="pricing-btn">
                        <Link to="login-email.html" className="btn btn-primary">
                          Choose Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card pricing-card w-100">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-icon">
                          <span>
                            <ImageWithBasePath src="assets/img/icons/price-icon3.svg" alt="icon" />
                          </span>
                        </div>
                        <div className="pricing-title">
                          <p>For big companies</p>
                          <h4>Enterprise</h4>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-info">
                      <div className="pricing-amount">
                        <h2>
                          $399 <span>/monthly</span>
                        </h2>
                        <h6>What’s included</h6>
                      </div>
                      <div className="pricing-list">
                        <ul>
                          <li>All Basic plan features</li>
                          <li>All Premium plan features</li>
                          <li>Personalized Health Insights</li>
                          <li>Family Account Management</li>
                        </ul>
                      </div>
                      <div className="pricing-btn">
                        <Link to="login-email.html" className="btn btn-primary">
                          Choose Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Pricing */}
      </>

      <Footer {...props} />
    </>
  );
};

export default PricingPlan;
