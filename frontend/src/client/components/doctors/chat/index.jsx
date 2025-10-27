/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
// import { Modal } from 'react-bootstrap';

import Header from "../../header";
import Slider from "react-slick";
import {
  doctordashboardprofile01,
  doctordashboardprofile02,
  doctordashboardprofile04,
  doctordashboardprofile05,
  doctordashboardprofile06,
  doctordashboardprofile07,
  doctordashboardprofile08,
  doctordashboardprofile3,
  doctorprofileimg,
  emoj1,
  emoj2,
  emoj3,
  emoj4,
  emoj5,
  heart,
  like,
  media1,
  media2,
  media3,
  play1,
  send,
  voice1,
} from "../../imagepath";
import DoctorFooter from "../../common/doctorFooter";

const DoctorChat = (props) => {
  useEffect(() => {
    document.body.classList.add("main-chat-blk");

    return () => document.body.classList.remove("main-chat-blk");
  }, []);
  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    margin: 12,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const [visible, setVisible] = useState(false);
  const [searchChat, setSearchChat] = useState(false);
  return (
    <div className="main-wrapper">
      <Header {...props} />
      <div className="page-wrapper chat-page-wrapper">
        <div className="container">
          <div className="content">
            <div className="dashboard-header">
              <h3>
                <Link to="/doctor/doctor-dashboard">
                  <i className="fa-solid fa-arrow-left" /> Message
                </Link>
              </h3>
            </div>
            <div className="chat-sec">
              {/* sidebar group */}
              <div className="sidebar-group left-sidebar chat_sidebar">
                {/* Chats sidebar */}
                <div
                  id="chats"
                  className="left-sidebar-wrap sidebar active slimscroll"
                >
                  <div className="slimscroll-active-sidebar">
                    {/* Left Chat Title */}
                    <div className="left-chat-title all-chats">
                      <div className="setting-title-head">
                        <h4> All Chats</h4>
                      </div>
                      <div className="add-section">
                        {/* Chat Search */}
                        <form>
                          <div className="user-chat-search">
                            <span className="form-control-feedback">
                              <i className="fa-solid fa-magnifying-glass" />
                            </span>
                            <input
                              type="text"
                              name="chat-search"
                              placeholder="Search"
                              className="form-control"
                            />
                          </div>
                        </form>
                        {/* /Chat Search */}
                      </div>
                    </div>
                    {/* /Left Chat Title */}
                    {/* Top Online Contacts */}
                    <div className="top-online-contacts">
                      <div className="fav-title">
                        <h6>Online Now</h6>
                        <Link to="#">View All</Link>
                      </div>
                      <div className="swiper-container chat-button">
                        <div className="swiper-wrapper">
                          <Slider {...settings} className="swiper-wrapper ">
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <img
                                    src={doctordashboardprofile01}
                                    alt="Img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <img
                                    src={doctordashboardprofile04}
                                    alt="Img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <img
                                    src={doctordashboardprofile3}
                                    alt="Img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <img
                                    src={doctordashboardprofile08}
                                    alt="Img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <img
                                    src={doctordashboardprofile06}
                                    alt="Img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="top-contacts-box">
                                <div className="profile-img online">
                                  <img
                                    src={doctordashboardprofile07}
                                    alt="Img"
                                  />
                                </div>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                    </div>
                    {/* /Top Online Contacts */}
                    <div className="sidebar-body chat-body" id="chatsidebar">
                      {/* Left Chat Title */}
                      <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                        <div className="fav-title pin-chat">
                          <h6>Pinned Chat</h6>
                        </div>
                      </div>
                      {/* /Left Chat Title */}
                      <ul className="user-list">
                        <li className="user-list-item">
                          <Link to="#">
                            <div className="avatar avatar-online">
                              <img src={doctordashboardprofile01} alt="image" />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Adrian Marshall</h5>
                                <p>Have you called them?</p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Just Now</small>
                                <div className="chat-pin">
                                  <i className="fa-solid fa-thumbtack me-2" />
                                  <i className="fa-solid fa-check-double green-check" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="user-list-item">
                          <Link to="#">
                            <div className="avatar ">
                              <img src={doctorprofileimg} alt="image" />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Dr Joseph Boyd</h5>
                                <p>
                                  <i className="fa-solid fa-video me-1" />
                                  Video
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Yesterday</small>
                                <div className="chat-pin">
                                  <i className="fa-solid fa-thumbtack" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="user-list-item">
                          <Link to="#">
                            <div className="avatar avatar-online">
                              <img src={doctordashboardprofile04} alt="image" />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Dr Edalin Hendry</h5>
                                <p>
                                  <i className="fa-solid fa-file-lines me-1" />
                                  Prescription.doc
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">10:20 PM</small>
                                <div className="chat-pin">
                                  <i className="fa-solid fa-thumbtack me-2" />
                                  <i className="fa-solid fa-check-double green-check" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                      {/* Left Chat Title */}
                      <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                        <div className="fav-title pin-chat">
                          <h6>Recent Chat</h6>
                        </div>
                      </div>
                      {/* /Left Chat Title */}
                      <ul className="user-list">
                        <li className="user-list-item">
                          <Link to="#">
                            <div className="avatar avatar-online">
                              <img src={doctordashboardprofile02} alt="image" />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Kelly Stevens</h5>
                                <p>Have you called them?</p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Just Now</small>
                                <div className="new-message-count">2</div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="user-list-item">
                          <Link to="#">
                            <div>
                              <div className="avatar avatar-online">
                                <img
                                  src={doctordashboardprofile05}
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Robert Miller</h5>
                                <p>
                                  <i className="fa-solid fa-video me-1" />
                                  Video
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Yesterday</small>
                                <div className="chat-pin">
                                  <i className="fa-solid fa-check" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="user-list-item">
                          <Link to="#">
                            <div className="avatar">
                              <img src={doctordashboardprofile08} alt="image" />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Emily Musick</h5>
                                <p>
                                  <i className="fa-solid fa-file-lines me-1" />
                                  Project Tools.doc
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">10:20 PM</small>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="user-list-item">
                          <Link to="#">
                            <div>
                              <div className="avatar avatar-online">
                                <img
                                  src={doctordashboardprofile3}
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Samuel James</h5>
                                <p>
                                  <i className="fa-solid fa-microphone me-1" />
                                  Audio
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">12:30 PM</small>
                                <div className="chat-pin">
                                  <i className="fa-solid fa-check-double green-check" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="user-list-item">
                          <Link to="#">
                            <div>
                              <div className="avatar ">
                                <img
                                  src={doctordashboardprofile02}
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Dr Shanta Neill</h5>
                                <p className="missed-call-col">
                                  <i className="fa-solid fa-phone-flip me-1" />
                                  Missed Call
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">Yesterday</small>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="user-list-item">
                          <Link to="#">
                            <div>
                              <div className="avatar avatar-online">
                                <img
                                  src={doctordashboardprofile07}
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Peter Anderson</h5>
                                <p>Have you called them?</p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">23/03/24</small>
                                <div className="chat-pin">
                                  <i className="fa-solid fa-check" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li className="user-list-item">
                          <Link to="#">
                            <div>
                              <div className="avatar">
                                <img
                                  src={doctordashboardprofile06}
                                  alt="image"
                                />
                              </div>
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>Catherine Gracey</h5>
                                <p>
                                  <i className="fa-solid fa-image me-1" />
                                  Photo
                                </p>
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">20/03/24</small>
                                <div className="chat-pin">
                                  <i className="fa-solid fa-check-double" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* / Chats sidebar */}
              </div>
              {/* /Sidebar group */}
              <div className="chat chat-messages" id="middle">
                <div className="slimscroll">
                  <div className="chat-inner-header">
                    <div className="chat-header">
                      <div className="user-details">
                        <div className="d-lg-none">
                          <ul className="list-inline mt-2 me-2">
                            <li className="list-inline-item">
                              <Link
                                className="text-muted px-0 left_sides"
                                to="#"
                                data-chat="open"
                              >
                                <i className="fas fa-arrow-left" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <figure className="avatar ms-1 avatar-online">
                          <img src={doctordashboardprofile06} alt="image" />
                        </figure>
                        <div className="mt-1">
                          <h5>Dr Edalin Hendry</h5>
                          <small className="last-seen">Online</small>
                        </div>
                      </div>
                      <div className="chat-options ">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="btn btn-outline-light chat-search-btn"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Search"
                            >
                              <i className="fa-solid fa-magnifying-glass" />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              className="btn btn-outline-light no-bg"
                              to="#"
                              data-bs-toggle="dropdown"
                            >
                              <i className="fa-solid fa-ellipsis-vertical" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item ">
                                Close Chat{" "}
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#mute-notification"
                              >
                                Mute Notification
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#disappearing-messages"
                              >
                                Disappearing Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#clear-chat"
                              >
                                Clear Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#change-chat"
                              >
                                Delete Chat
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#report-user"
                              >
                                Report
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#block-user"
                              >
                                Block
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* Chat Search */}
                      <div className="chat-search">
                        <form>
                          <span className="form-control-feedback">
                            <i className="fa-solid fa-magnifying-glass" />
                          </span>
                          <input
                            type="text"
                            name="chat-search"
                            placeholder="Search Chats"
                            className="form-control"
                          />
                          <div className="close-btn-chat">
                            <i className="fa fa-close" />
                          </div>
                        </form>
                      </div>
                      {/* /Chat Search */}
                    </div>
                  </div>
                  <div className="chat-body">
                    <div className="messages">
                      <div className="chats chats-right">
                        <div className="chat-avatar">
                          <img
                            src={doctordashboardprofile06}
                            className="dreams_chat"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name text-end justify-content-end">
                            <h6>
                              Andrea Kearns<span>8:16 PM</span>
                            </h6>
                            <div className="chat-action-btns ms-3">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis" />
                                </Link>
                                <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item message-info-left"
                                  >
                                    Message Info{" "}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Reply
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    React
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Forward
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-content">
                            <Link to="#">Hello Doctor, </Link> could you tell a
                            diet plan that suits for me?
                            <div className="emoj-group  right-emoji-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#">
                                    <i className="fa-regular fa-face-smile" />
                                  </Link>
                                  <div className="emoj-group-list">
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj1} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj2} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj3} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj4} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src="emoj5" alt="Icon" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forward-message"
                                  >
                                    <i className="fa-solid fa-share" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chat-line">
                        <span className="chat-date">Today, March 25</span>
                      </div>
                      <div className="chats">
                        <div className="chat-avatar">
                          <img
                            src={doctorprofileimg}
                            className="dreams_chat"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name">
                            <h6>
                              Edalin Hendry
                              <span>
                                9:45 AM{" "}
                                <i className="fa-solid fa-check-double green-check" />
                              </span>
                            </h6>
                            <div className="chat-action-btns ms-3">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis" />
                                </Link>
                                <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item message-info-left"
                                  >
                                    Message Info{" "}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Reply
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    React
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Forward
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-content ">
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#">
                                    <i className="fa-regular fa-face-smile" />
                                  </Link>
                                  <div className="emoj-group-list">
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj1} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj2} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj3} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj4} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj5} alt="Icon" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forward-message"
                                  >
                                    <i className="fa-solid fa-share" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="chat-voice-group">
                              <ul>
                                <li>
                                  <Link to="#">
                                    <span>
                                      <img src={play1} alt="image" />
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <img src={voice1} alt="image" />
                                </li>
                                <li>0:05</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-avatar">
                          <img
                            src={doctordashboardprofile06}
                            className="dreams_chat"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name text-end justify-content-end">
                            <h6>
                              Andrea Kearns<span>9:47 AM</span>
                            </h6>
                            <div className="chat-action-btns ms-2">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis" />
                                </Link>
                                <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item message-info-left"
                                  >
                                    Message Info{" "}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Reply
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    React
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Forward
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-content award-link chat-award-link">
                            <Link to="#" className="mb-1">
                              https://www.youtube.com/watch?v=GCmL3mS0Psk
                            </Link>
                            <img src={send} />
                            <div className="emoj-group right-emoji-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#">
                                    <i className="fa-regular fa-face-smile" />
                                  </Link>
                                  <div className="emoj-group-list">
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj1} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj2} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj3} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj4} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj5} alt="Icon" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forward-message"
                                  >
                                    <i className="fa-solid fa-share" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chats">
                        <div className="chat-avatar">
                          <img
                            src={doctorprofileimg}
                            className="dreams_chat"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name">
                            <h6>
                              Edalin Hendry
                              <span>
                                9:50 AM{" "}
                                <i className="fa-solid fa-check-double green-check" />
                              </span>
                            </h6>
                            <div className="chat-action-btns ms-3">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis" />
                                </Link>
                                <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item message-info-left"
                                  >
                                    Message Info{" "}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Reply
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    React
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Forward
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-content fancy-msg-box">
                            <div className="emoj-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#">
                                    <i className="fa-regular fa-face-smile" />
                                  </Link>
                                  <div className="emoj-group-list">
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj1} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj2} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj3} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj4} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj5} alt="Icon" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forward-message"
                                  >
                                    <i className="fa-solid fa-share" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="download-col">
                              <ul className="nav mb-0">
                                <li>
                                  <div className="image-download-col">
                                    <Link
                                      to={media2}
                                      data-fancybox="gallery"
                                      className="fancybox"
                                    >
                                      <img src={media2} alt="Img" />
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <div className="image-download-col ">
                                    <Link
                                      to={media3}
                                      data-fancybox="gallery"
                                      className="fancybox"
                                    >
                                      <img src={media3} alt="Img" />
                                    </Link>
                                  </div>
                                </li>
                                <li>
                                  <div className="image-download-col image-not-download">
                                    <Link
                                      to={media1}
                                      data-fancybox="gallery"
                                      className="fancybox"
                                    >
                                      <img src={media1} alt="Img" />
                                      <span>10+</span>
                                    </Link>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-avatar">
                          <img
                            src={doctordashboardprofile06}
                            className="dreams_chat"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name text-end justify-content-end">
                            <h6>
                              Andrea Kearns<span>9:47 AM</span>
                            </h6>
                            <div className="chat-action-btns ms-2">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis" />
                                </Link>
                                <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item message-info-left"
                                  >
                                    Message Info{" "}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Reply
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    React
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Forward
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-content award-link chat-award-link">
                            <Link to="#" className="mb-1">
                              https://www.youtube.com/watch?v=GCmL3mS0Psk
                            </Link>
                            <img src={send} />
                            <div className="emoj-group right-emoji-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#">
                                    <i className="fa-regular fa-face-smile" />
                                  </Link>
                                  <div className="emoj-group-list">
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj1} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj2} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj3} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj4} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj5} alt="Icon" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forward-message"
                                  >
                                    <i className="fa-solid fa-share" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-avatar">
                          <img
                            src={doctordashboardprofile06}
                            className="dreams_chat"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name text-end justify-content-end">
                            <h6>
                              Andrea Kearns<span>9:47 AM</span>
                            </h6>
                            <div className="chat-action-btns ms-2">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis" />
                                </Link>
                                <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item message-info-left"
                                  >
                                    Message Info{" "}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Reply
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    React
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Forward
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-content award-link chat-award-link">
                            <Link to="#" className="mb-1">
                              https://www.youtube.com/watch?v=GCmL3mS0Psk
                            </Link>
                            <img src={send} />
                            <div className="emoj-group right-emoji-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#">
                                    <i className="fa-regular fa-face-smile" />
                                  </Link>
                                  <div className="emoj-group-list">
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj1} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj2} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj3} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj4} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj5} alt="Icon" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forward-message"
                                  >
                                    <i className="fa-solid fa-share" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chats chats-right">
                        <div className="chat-avatar">
                          <img
                            src={doctordashboardprofile06}
                            className="dreams_chat"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name text-end justify-content-end">
                            <h6>
                              Andrea Kearns<span>9:47 AM</span>
                            </h6>
                            <div className="chat-action-btns ms-2">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis" />
                                </Link>
                                <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item message-info-left"
                                  >
                                    Message Info{" "}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Reply
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    React
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Forward
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-content award-link chat-award-link">
                            <Link to="#" className="mb-1">
                              https://www.youtube.com/watch?v=GCmL3mS0Psk
                            </Link>
                            <img src={send} />
                            <div className="emoj-group right-emoji-group">
                              <ul>
                                <li className="emoj-action">
                                  <Link to="#">
                                    <i className="fa-regular fa-face-smile" />
                                  </Link>
                                  <div className="emoj-group-list">
                                    <ul>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj1} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj2} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj3} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj4} alt="Icon" />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="#">
                                          <img src={emoj5} alt="Icon" />
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#forward-message"
                                  >
                                    <i className="fa-solid fa-share" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="chats forward-chat-msg">
                        <div className="chat-avatar">
                          <img
                            src={doctordashboardprofile06}
                            className="dreams_chat"
                            alt="image"
                          />
                        </div>
                        <div className="chat-content">
                          <div className="chat-profile-name">
                            <h6>
                              Andrea Kearns<span>8:16 PM</span>
                            </h6>
                            <div className="chat-action-btns ms-3">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="fa-solid fa-ellipsis" />
                                </Link>
                                <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item message-info-left"
                                  >
                                    Message Info{" "}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Reply
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    React
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Forward
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    Delete
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="message-content">
                            Thank you for your support
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-footer">
                  <form>
                    <div className="smile-foot">
                      <div className="chat-action-btns">
                        <div className="chat-action-col">
                          <Link
                            className="action-circle"
                            to="#"
                            data-bs-toggle="dropdown"
                          >
                            <i className="fa-solid fa-ellipsis-vertical" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            <Link to="#" className="dropdown-item ">
                              <span>
                                <i className="fa-solid fa-file-lines" />
                              </span>
                              Document
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <span>
                                <i className="fa-solid fa-camera" />
                              </span>
                              Camera
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <span>
                                <i className="fa-solid fa-image" />
                              </span>
                              Gallery
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <span>
                                <i className="fa-solid fa-volume-high" />
                              </span>
                              Audio
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <span>
                                <i className="fa-solid fa-location-dot" />
                              </span>
                              Location
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <span>
                                <i className="fa-solid fa-user" />
                              </span>
                              Contact
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="smile-foot emoj-action-foot">
                      <Link to="#" className="action-circle">
                        <i className="fa-regular fa-face-smile" />
                      </Link>
                      <div className="emoj-group-list-foot down-emoji-circle">
                        <ul>
                          <li>
                            <Link to="#">
                              <img src={emoj1} alt="Icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={emoj2} alt="Icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={emoj3} alt="Icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={emoj4} alt="Icon" />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <img src={emoj5} alt="Icon" />
                            </Link>
                          </li>
                          <li className="add-emoj">
                            <Link to="#">
                              <i className="fa-solid fa-plus" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="smile-foot">
                      <Link to="#" className="action-circle">
                        <i className="fa-solid fa-microphone" />
                      </Link>
                    </div>
                    <input
                      type="text"
                      className="form-control chat_form"
                      placeholder="Type your message here..."
                    />
                    <div className="form-buttons">
                      <button className="btn send-btn" type="submit">
                        <i className="fa-solid fa-paper-plane" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DoctorFooter {...props} />
    </div>
  );
};

export default DoctorChat;
