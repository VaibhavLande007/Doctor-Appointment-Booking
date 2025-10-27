import React, { useEffect } from "react";
import { IMG01, IMG02 } from "./img";
// import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../header";
import { PhoneOff } from "feather-icons-react/build/IconComponents";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import Footer from "../../footer";

const VideoCall = (props) => {
  useEffect(() => {
    document.body.classList.add("call-page");

    return () => document.body.classList.remove("call-page");
  }, []);

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
                    <li className="breadcrumb-item active">Video Call</li>
                  </ol>
                  <h2 className="breadcrumb-title">Video Call</h2>
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
              <div className="col-lg-10 mx-auto">
                {/* Call Wrapper */}
                <div className="call-wrapper">
                  <div className="call-main-row">
                    <div className="call-main-wrapper">
                      <div className="call-view">
                        <div className="call-window">
                          {/* Call Header */}
                          <div className="fixed-header">
                            <div className="navbar">
                              <div className="user-details">
                                <div className="float-start user-img">
                                  <Link
                                    className="avatar avatar-sm me-2"
                                    to="/patient/profile"
                                    title="Charlene Reed"
                                  >
                                    <ImageWithBasePath
                                      src="assets/img/patients/patient1.jpg"
                                      alt="User Image"
                                      className="rounded-circle"
                                    />
                                    <span className="status online" />
                                  </Link>
                                </div>
                                <div className="user-info float-start">
                                  <Link to="/patient/profile">
                                    <span>Charlene Reed</span>
                                  </Link>
                                  <span className="last-seen">Online</span>
                                </div>
                              </div>
                              <ul className="nav float-end custom-menu">
                                <li className="nav-item dropdown dropdown-action">
                                  <Link to="#" className="user-icon">
                                    <i className="isax isax-user-add" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* /Call Header */}
                          {/* Call Contents */}
                          <div className="call-contents">
                            <div className="call-content-wrap">
                              <div className="user-video">
                                <ImageWithBasePath
                                  src="assets/img/video-call.jpg"
                                  alt="User Image"
                                />
                              </div>
                              <div className="my-video">
                                <ul>
                                  <li>
                                    <ImageWithBasePath
                                      src="assets/img/patients/patient1.jpg"
                                      className="img-fluid"
                                      alt="User Image"
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* Call Contents */}
                          {/* Call Footer */}
                          <div className="call-footer">
                            <div className="call-icons">
                              <ul className="call-items">
                                <li className="call-item">
                                  <Link
                                    to="javascript:void(0)"
                                    className="mute-video"
                                    title="Enable Video"
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                  >
                                    <i className="isax isax-video" />
                                  </Link>
                                </li>
                                <li className="call-item">
                                  <Link to="javascript:void(0)" className="call-end">
                                    <i className="isax isax-call" />
                                  </Link>
                                </li>
                                <li className="call-item">
                                  <Link
                                    to="javascript:void(0)"
                                    className="mute-bt"
                                    title="Mute"
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                  >
                                    <i className="isax isax-microphone-2" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* /Call Footer */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Call Wrapper */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>
      <Footer {...props} />
    </>
  );
};

export default VideoCall;
