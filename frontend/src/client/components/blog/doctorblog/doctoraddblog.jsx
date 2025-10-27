import React from "react";
import { Link } from "react-router-dom";
//images
import { IMG02, img_1, img_2, img_3 } from "./img.jsx";
//components
import Footer from "../../footer.jsx";
import Header from "../../header.jsx";
import StickyBox from "react-sticky-box";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";
import DoctorSidebar from "../../doctors/sidebar/index.jsx";

const Doctoraddblog = (props) => {
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
                    <li className="breadcrumb-item active">Add Blog</li>
                  </ol>
                  <h2 className="breadcrumb-title">Add Blog</h2>
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
                  {/* Add Blog */}
                  <div className="card">
                    <div className="card-body">
                      <h3 className="pb-3">Add Blog</h3>
                      <form
                        method="post"
                        encType="multipart/form-data"
                        autoComplete="off"
                        id="update_service"
                        action="/doctor-blog"
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
                                <select
                                  className="form-select form-control"
                                  name="category"
                                  required=""
                                >
                                  <option value="">Automobile</option>
                                  <option value={2} selected="selected">
                                    Construction
                                  </option>
                                  <option value={3}>Interior</option>
                                  <option value={4}>Cleaning</option>
                                  <option value={5}>Electrical</option>
                                  <option value={6}>Carpentry</option>
                                  <option value={7}>Computer</option>
                                  <option value={8}>Painting</option>
                                  <option value={9}>Car Wash</option>
                                  <option value={10}>Category Test</option>
                                  <option value={11}>dfdf</option>
                                  <option value={12}>Equipment</option>
                                  <option value={13}>Test category1</option>
                                  <option value={14}>Farming</option>
                                  <option value={15}>Test Category02</option>
                                  <option value={16}>Laundry</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label className="mb-2">
                                  Sub Category <span className="text-danger">*</span>
                                </label>
                                <select
                                  className="form-select form-control"
                                  name="subcategory"
                                >
                                  <option value={5}>Others</option>
                                  <option value={6}>Others</option>
                                  <option value={7}>Others</option>
                                  <option value={8}>House cleaning</option>
                                  <option value={9}>Others</option>
                                  <option value={10}>Others</option>
                                  <option value={11}>Others</option>
                                  <option value={12}>Others</option>
                                  <option value={13}>Full Car Wash</option>
                                  <option value={14} selected="selected">
                                    Testing category
                                  </option>
                                  <option value={15}>Test Sub category</option>
                                  <option value={16}>Harvesting pine</option>
                                  <option value={17}>Test Sub category name</option>
                                  <option value={18}>Test Sub category name</option>
                                </select>
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
                  {/* /Add Blog */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>


      <Footer {...props} />
    </div>
  );
};

export default Doctoraddblog;
