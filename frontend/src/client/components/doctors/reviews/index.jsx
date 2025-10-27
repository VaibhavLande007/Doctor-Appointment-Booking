import React from "react";
import Header from "../../header";
import DoctorSidebar from "../sidebar";
import DoctorFooter from "../../common/doctorFooter";
import { doctordashboardprofile01, doctordashboardprofile02, doctordashboardprofile3, doctorprofileimg } from "../../imagepath";
import { Link } from "react-router-dom";
import { initialSettings } from "../../common/filter";
import DateRangePicker from "react-bootstrap-daterangepicker/dist";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Review = (props) => {
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
                      <a href="/home">
                        <i className="isax isax-home-15" />
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Doctor
                    </li>
                    <li className="breadcrumb-item active">Reviews</li>
                  </ol>
                  <h2 className="breadcrumb-title">Reviews</h2>
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
              <div className="doc-review">
                <div className="dashboard-header">
                  <div className="header-back">
                    <h3>Reviews</h3>
                  </div>
                </div>
                {/* Review Listing */}
                <ul className="comments-list">
                  <li className="over-all-review">
                    <div className="review-content">
                      <div className="review-rate">
                        <h5>Overall Rating</h5>
                        <div className="star-rated">
                          <span>4.0</span>
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                      <div className="position-relative daterange-wraper">
                        <div className="input-groupicon calender-input">
                          <DateRangePicker initialSettings={initialSettings}>
                            <input
                              className="form-control  date-range bookingrange"
                              type="text"
                            />
                          </DateRangePicker>
                        </div>
                        <i className="fa-solid fa-calendar-days" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="comments">
                      <div className="comment-head">
                        <div className="patinet-information">
                          <Link to="#">
                            <img
                              src={doctordashboardprofile01}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <h6>
                              <Link to="#">Adrian</Link>
                            </h6>
                            <span>15 Mar 2025</span>
                          </div>
                        </div>
                        <div className="star-rated">
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                      <div className="review-info">
                        <p>
                          {" "}
                          Dr. Edalin Hendry has been my family's trusted doctor for years.
                          Their genuine care and thorough approach to our health concerns
                          make every visit reassuring. Dr. Edalin Hendry's ability to listen
                          and explain complex health issues in understandable terms is
                          exceptional. We are grateful to have such a dedicated physician by
                          our side
                        </p>
                        <div className="comment-reply">
                          <Link to="#" className="d-inline-flex align-items-center">
                            <i className="fa-solid fa-reply me-2" /> Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="comments">
                      <div className="comment-head">
                        <div className="patinet-information">
                          <Link to="#">
                            <img
                              src={doctordashboardprofile02}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <h6>
                              <Link to="#">Kelly</Link>
                            </h6>
                            <span>11 Mar 2025</span>
                          </div>
                        </div>
                        <div className="star-rated">
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                      <div className="review-info">
                        <p>
                          I recently completed a series of dental treatments with Dr.Edalin
                          Hendry, and I couldn't be more pleased with the results. From my
                          very first appointment, Dr. Edalin Hendry and their team made me
                          feel completely at ease, addressing all of my concerns with
                          patience and understanding. Their state-of-the-art office and the
                          staff's attention to comfort and cleanliness were beyond
                          impressive.
                        </p>
                        <div className="comment-reply">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center replied-text"
                          >
                            <i className="fa-solid fa-reply me-2" /> Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <div className="replied-comment">
                          <div className="patinet-information">
                            <Link to="#">
                              <img
                                src={doctorprofileimg}
                                alt="User Image"
                              />
                            </Link>
                            <div className="patient-info">
                              <h6>
                                <Link to="#">Dr Edalin Hendry</Link>
                              </h6>
                              <span>2 days ago</span>
                            </div>
                          </div>
                          <div className="review-info">
                            <p>
                              Thank you so much for taking the time to share your experience
                              at our dental clinic. We are deeply touched by your kind words
                              and thrilled to hear about the positive impact of your
                              treatment. Our team strives to provide a comfortable,
                              welcoming environment for all our patients, and it’s
                              heartening to know we achieved this for you.
                            </p>
                            <div className="comment-reply">
                              <Link to="#" className="d-inline-flex align-items-center">
                                <i className="fa-solid fa-reply me-2" /> Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="comments">
                      <div className="comment-head">
                        <div className="patinet-information">
                          <Link to="#">
                            <img
                              src={doctordashboardprofile3}
                              alt="User Image"
                            />
                          </Link>
                          <div className="patient-info">
                            <h6>
                              <Link to="#">Samuel</Link>
                            </h6>
                            <span>05 Mar 2025</span>
                          </div>
                        </div>
                        <div className="star-rated">
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star filled" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                      <div className="review-info">
                        <p>
                          From my first consultation through to the completion of my
                          treatment, Dr. Edalin Hendry, my dentist, has been nothing short
                          of extraordinary. Dental visits have always been a source of
                          anxiety for me, but Dr. Edalin Hendry's office provided an
                          atmosphere of calm and reassurance that I had not experienced
                          elsewhere. Highly Recommended!
                        </p>
                        <div className="comment-reply">
                          <Link to="#" className="d-inline-flex align-items-center">
                            <i className="fa-solid fa-reply me-2" /> Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* /Comment List */}
                {/* Pagination */}
                <div className="pagination dashboard-pagination">
                  <ul>
                    <li>
                      <Link to="#" className="page-link">
                        <i className="fa-solid fa-chevron-left" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="page-link">
                        1
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="page-link active">
                        2
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="page-link">
                        3
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="page-link">
                        4
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="page-link">
                        ...
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="page-link">
                        <i className="fa-solid fa-chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* /Pagination */}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* /Page Content */}
      <DoctorFooter {...props} />
    </>
  );
};

export default Review;
