import React from "react";
//images
import { IMG02, img_1, img_2, img_3 } from "./img.jsx";
//components
import Footer from "../../footer.jsx";
import Header from "../../header.jsx";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";
import { Link } from "react-router-dom";
import { Select } from "antd";

const Doctoreditblog = (props) => {

  const Availability = [
    { value: 'I am Available Now', label: 'I am Available Now' },
    { value: 'Not Available', label: 'Not Available' },
  ];
  const Category = [
    { value: 'Automobile', label: 'Automobile' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Interior', label: 'Interior' },
    { value: 'Cleaning', label: 'Cleaning' },
    { value: 'Electrical', label: 'Electrical' },
    { value: 'Carpentry', label: 'Carpentry' },
    { value: 'Computer', label: 'Computer' },
    { value: 'Painting', label: 'Painting' },
    { value: 'Car Wash', label: 'Car Wash' },
    { value: 'Category Test', label: 'Category Test' },
    { value: 'dfdf', label: 'dfdf' },
    { value: 'Equipment', label: 'Equipment' },
    { value: 'Test category1', label: 'Test category1' },
    { value: 'Farming', label: 'Farming' },
    { value: 'Test Category02', label: 'Test Category02' },
    { value: 'Laundry', label: 'Laundry' },
  ];
  const SubCategory = [
    { value: 'Others', label: 'Others' },
    { value: 'Others', label: 'Others' },
    { value: 'Others', label: 'Others' },
    { value: 'Others', label: 'Others' },
    { value: 'Others', label: 'Others' },
    { value: 'House cleaning', label: 'House cleaning' },
    { value: 'Others', label: 'Others' },
    { value: 'Others', label: 'Others' },
    { value: 'Others', label: 'Others' },
    { value: 'Others', label: 'Others' },
    { value: 'Full Car Wash', label: 'Full Car Wash' },
    { value: 'Testing category', label: 'Testing category' },
    { value: 'Test category1', label: 'Test category1' },
    { value: 'Harvesting pine', label: 'Harvesting pine' },
    { value: 'Test Sub category name', label: 'Test Sub category name' },
    { value: 'Test Sub category name', label: 'Test Sub category name' },
  ];


  return (
    <div>
      <Header {...props} />
      <>
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
                      <li className="breadcrumb-item active">Edit Blog</li>
                    </ol>
                    <h2 className="breadcrumb-title">Edit Blog</h2>
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


        <>
          {/* Page Content */}
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                  {/* Profile Sidebar */}
                  <div className="profile-sidebar doctor-sidebar profile-sidebar-new">
                    <div className="widget-profile pro-widget-content">
                      <div className="profile-info-widget">
                        <Link to="/patient/doctor-profile" className="booking-doc-img">
                          <ImageWithBasePath
                            src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                            alt="User Image"
                          />
                        </Link>
                        <div className="profile-det-info">
                          <h3>
                            <Link to="/patient/doctor-profile">Dr Edalin Hendry</Link>
                          </h3>
                          <div className="patient-details">
                            <h5 className="mb-0">
                              BDS, MDS - Oral &amp; Maxillofacial Surgery
                            </h5>
                          </div>
                          <span className="badge doctor-role-badge">
                            <i className="fa-solid fa-circle" />
                            Dentist
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="doctor-available-head">
                      <div className="input-block input-block-new">
                        <label className="form-label">
                          Availability <span className="text-danger">*</span>
                        </label>
                        <Select
                          className="select form-control"
                          placeholder="Select"
                          options={Availability}
                        />
                      </div>
                    </div>
                    <div className="dashboard-widget">
                      <nav className="dashboard-menu">
                        <ul>
                          <li>
                            <Link to="/doctor/doctor-dashboard">
                              <i className="fa-solid fa-shapes" />
                              <span>Dashboard</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/doctor-request">
                              <i className="fa-solid fa-calendar-check" />
                              <span>Requests</span>
                              <small className="unread-msg">2</small>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/appointments">
                              <i className="fa-solid fa-calendar-days" />
                              <span>Appointments</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/available-timings">
                              <i className="fa-solid fa-calendar-day" />
                              <span>Available Timings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/my-patients">
                              <i className="fa-solid fa-user-injured" />
                              <span>My Patients</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/doctor-specialities">
                              <i className="fa-solid fa-clock" />
                              <span>Specialties &amp; Services</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/review">
                              <i className="fas fa-star" />
                              <span>Reviews</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/account">
                              <i className="fa-solid fa-file-contract" />
                              <span>Accounts</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/invoices">
                              <i className="fa-solid fa-file-lines" />
                              <span>Invoices</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/doctor-payment">
                              <i className="fa-solid fa-money-bill-1" />
                              <span>Payout Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/chat-doctor">
                              <i className="fa-solid fa-comments" />
                              <span>Message</span>
                              <small className="unread-msg">7</small>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/profile-setting">
                              <i className="fa-solid fa-user-pen" />
                              <span>Profile Settings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/social-media">
                              <i className="fa-solid fa-shield-halved" />
                              <span>Social Media</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/doctor/doctor-change-password">
                              <i className="fa-solid fa-key" />
                              <span>Change Password</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/login">
                              <i className="isax isax-logout" />
                              <span>Logout</span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* /Profile Sidebar */}
                </div>
                <div className="col-lg-8 col-xl-9">
                  <div className="doc-review review-listing custom-edit-service">
                    <div className="row mb-5">
                      <div className="col">
                        <ul className="nav nav-tabs nav-tabs-solid">
                          <li className="nav-item">
                            <Link className="nav-link" to="/doctor-blog">
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
                    {/* Edit Blog */}
                    <div className="card">
                      <div className="card-body">
                        <h3 className="pb-3">Edit Blog</h3>
                        <form
                          method="post"
                          encType="multipart/form-data"
                          autoComplete="off"
                          id="update_service"
                          
                        >
                          <input
                            type="hidden"
                            name="csrf_token_name"
                            defaultValue="0146f123a4c7ae94253b39bca6bd5a5e"
                          />
                          <div className="service-fields mb-3">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="mb-2">
                                    Blog Title <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="hidden"
                                    name="service_id"
                                    id="service_id"
                                    defaultValue={18}
                                  />
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="service_title"
                                    id="service_title"
                                    defaultValue="Doccure – Making your clinic painless visit?"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="service-fields mb-3">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label className="mb-2">
                                    Category <span className="text-danger">*</span>
                                  </label>
                                  <Select
                                    className="select form-control"
                                    placeholder="Select"
                                    options={Category}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="mb-3">
                                  <label className="mb-2">
                                    Sub Category <span className="text-danger">*</span>
                                  </label>
                                  <Select
                                    className="select form-control"
                                    placeholder="Select"
                                    options={SubCategory}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="service-fields mb-3">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="mb-2">
                                    Descriptions <span className="text-danger">*</span>
                                  </label>
                                  <textarea
                                    id="about"
                                    className="form-control service-desc"
                                    name="about"
                                    defaultValue={"note."}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="service-fields mb-3">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="service-upload">
                                  <i className="fas fa-cloud-upload-alt" />
                                  <span>Upload Blog Images *</span>
                                  <input
                                    type="file"
                                    name="images[]"
                                    id="images"
                                    multiple=""
                                    accept="image/jpeg, image/png, image/gif"
                                  />
                                </div>
                                <div id="uploadPreview">
                                  <ul className="upload-wrap">
                                    <li>
                                      <div className=" upload-images">
                                        <ImageWithBasePath
                                          alt="Blog Image"
                                          src="assets/img/img-01.jpg"
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className=" upload-images">
                                        <ImageWithBasePath
                                          alt="Blog Image"
                                          src="assets/img/img-02.jpg"
                                        />
                                      </div>
                                    </li>
                                    <li>
                                      <div className=" upload-images">
                                        <ImageWithBasePath
                                          alt="Blog Image"
                                          src="assets/img/img-03.jpg"
                                        />
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="service-fields mb-3">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="mb-3">
                                  <label className="mb-2">
                                    Video id <span className="text-danger">*</span>
                                  </label>
                                  <input
                                    type="hidden"
                                    name="video_id"
                                    id="video_id"
                                    defaultValue={18}
                                  />
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="video_id1"
                                    id="video_id1"
                                    defaultValue="Rf34rhkWW1"
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="submit-section">
                            <button
                              className="btn btn-primary submit-btn"
                              type="submit"
                              name="form_submit"
                              value="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* /Edit Blog */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}
        </>

      </>

      <Footer {...props} />
    </div>
  );
};

export default Doctoreditblog;
