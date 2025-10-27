import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
//images
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07 } from "./img.jsx";
//components
import BlogListSearch from "../search/search.jsx";
import LastestBlog from "../lastestblog";
import CategoryWidget from "../categoryWidget";
import TagsWidget from "../tagswidget";
import Header from "../../header.jsx";
import Footer from "../../footer.jsx";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";

const BlogDetails = (props) => {
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
                    <li className="breadcrumb-item">Blogs</li>
                    <li className="breadcrumb-item active">Blog Details</li>
                  </ol>
                  <h2 className="breadcrumb-title">Blog Details</h2>
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
            <div className="col-lg-8 col-md-12">
              <div className="blog-view">
                <h3 className="mb-3">
                  10 Tips for Maintaining a Healthy Lifestyle Year-Round
                </h3>
                <div className="blog blog-single-post">
                  <div className="blog-image">
                    <Link to="#">
                      <ImageWithBasePath
                        alt="blog-image"
                        src="assets/img/blog/blog-list-01.jpg"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="blog-info d-md-flex align-items-center justify-content-between flex-wrap">
                    <div className="post-left">
                      <ul>
                        <li>
                          <span className="badge badge-dark fs-14 fw-medium">
                            Health Tips
                          </span>
                        </li>
                        <li>
                          <i className="isax isax-calendar" />4 Dec 2023
                        </li>
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
                      </ul>
                    </div>
                    <div className="blog-views d-flex align-items-center justify-content-md-end">
                      <span className="badge badge-outline-dark me-2">
                        <i className="isax isax-message-text me-1" />
                        25
                      </span>
                      <span className="badge badge-outline-primary">
                        <i className="isax isax-eye me-1" />
                        90
                      </span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>
                      Maintaining a healthy lifestyle year-round is achievable with
                      consistent habits that support your physical and mental
                      well-being. One of the key pillars is staying hydrated, as
                      water is essential for digestion, nutrient absorption, and
                      overall bodily functions. Aim to drink at least eight glasses
                      of water daily, adjusting for factors like weather and
                      physical activity. A balanced diet is equally important, as it
                      fuels your body with the nutrients it needs for energy,
                      growth, and repair. Incorporate a variety of fruits,
                      vegetables, lean proteins, and whole grains to ensure you’re
                      getting a range of vitamins and minerals.
                    </p>
                    <p>
                      Regular physical activity is another cornerstone of a healthy
                      lifestyle. Engaging in at least 150 minutes of moderate
                      exercise per week, such as walking or cycling, can boost your
                      cardiovascular health, strengthen muscles, and improve mood.
                      Equally important is prioritizing sleep. Getting 7-9 hours of
                      quality sleep each night helps regulate your mood, enhances
                      mental clarity, and supports physical health. With these tips
                      in mind, you’ll be on your way to maintaining a healthy
                      lifestyle all year long.
                    </p>
                    <p className="content-block">
                      An extra important note to remember is that consistency is
                      key. Small, sustainable changes in your daily habits will have
                      a more lasting impact than short-term, extreme efforts.
                      Prioritize gradual improvements in your routine and be patient
                      with yourself - lasting health is a marathon, not a sprint.
                    </p>
                  </div>
                </div>
                <h4 className="mb-3">About Author</h4>
                <div className="about-author">
                  <div className="about-author-img">
                    <div className="author-img-wrap">
                      <Link to="/patient/doctor-profile">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Darren Elder"
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="author-details">
                    <p className="mb-0">
                      As a certified nutritionist and wellness coach, I’m passionate
                      about helping others achieve a balanced lifestyle and lasting
                      health. My journey into health started with my own desire to
                      feel better physically and mentally, and along the way, I’ve
                      learned the importance of consistency and small, sustainable
                      changes. I love exploring new ways to stay active,
                      experimenting with healthy meals, and sharing tips that are
                      practical and realistic for people with busy lives.
                    </p>
                  </div>
                </div>
                <h4 className="mb-3">Tags</h4>
                <div className="d-flex align-items-center flex-wrap blog-tags gap-3 mb-4">
                  <Link to="#" className="badge">
                    Health Tips
                  </Link>
                  <Link to="#" className="badge">
                    Awareness
                  </Link>
                  <Link to="#" className="badge">
                    Health
                  </Link>
                  <Link to="#" className="badge">
                    Wellness
                  </Link>
                </div>
              </div>
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <StickyBox>
                {/* Search */}
                <div className="card search-widget">
                  <div className="card-body">
                    <form className="search-form">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search..."
                          className="form-control"
                        />
                        <button type="submit" className="btn btn-primary">
                          <i className="isax isax-search-normal" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /Search */}
                {/* Categories */}
                <div className="card category-widget">
                  <div className="card-body">
                    <h5 className="mb-3">Categories</h5>
                    <ul className="categories">
                      <li>
                        <Link to="#">
                          Health Care <span>(2)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Nutritions <span>(4)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Health Tips <span>(5)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Medical Research <span>(4)</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          Health Treatment <span>(6)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Categories */}
                {/* Latest Posts */}
                <div className="card post-widget">
                  <div className="card-body">
                    <h5 className="mb-3">Latest News</h5>
                    <ul className="latest-posts">
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-thumb-11.jpg"
                              alt="blog-image"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <p>06 Nov 2025</p>
                          <h4>
                            <Link to="/blog/blog-details">
                              Managing Chronic Conditions: Expert Advice for Better
                              Living
                            </Link>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-thumb-12.jpg"
                              alt="blog-image"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <p>15 Nov 2025</p>
                          <h4>
                            <Link to="/blog/blog-details">
                              Understanding Common Symptoms: When to See a Doctor
                            </Link>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-thumb-13.jpg"
                              alt="blog-image"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <p>08 Dec 2025</p>
                          <h4>
                            <Link to="/blog/blog-details">
                              Nutrition and Wellness: A Guide to Balanced Eating
                            </Link>
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="post-thumb">
                          <Link to="/blog/blog-details">
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-thumb-14.jpg"
                              alt="blog-image"
                            />
                          </Link>
                        </div>
                        <div className="post-info">
                          <p>17 Dec 2025</p>
                          <h4>
                            <Link to="/blog/blog-details">
                              Top Preventive Health Measures Everyone Should Take
                            </Link>
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Latest Posts */}
                {/* Tags */}
                <div className="card tags-widget">
                  <div className="card-body">
                    <h5 className="mb-3">Tags</h5>
                    <ul className="tags">
                      <li>
                        <Link to="#" className="tag">
                          Health Tips
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Awareness
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Health
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Wellness
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Treatments
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Checkup
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="tag">
                          Prevention
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Tags */}
              </StickyBox>

            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}


      <Footer {...props} />
    </div>
  );
};

export default BlogDetails;
