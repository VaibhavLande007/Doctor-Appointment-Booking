import React from 'react'
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/imagewithbasebath';

const SectionArtical = () => {
    return (
        <div>
            <>
                {/* Article Section */}
                <section className="article-section">
                    <div className="container">
                        <div
                            className="section-header sec-header-one text-center aos"
                            data-aos="fade-up"
                        >
                            <span className="badge badge-primary">Recent Blogs</span>
                            <h2>Stay Updated With Our Latest Articles</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="article-item aos" data-aos="fade-up">
                                    <div className="article-img">
                                        <Link to="/blog/blog-details">
                                            <ImageWithBasePath
                                                src="assets/img/blog/article-01.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </Link>
                                        <div className="date-icon">
                                            <span>15</span>May
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <span className="badge badge-cyan mb-2">Treatments</span>
                                        <h6 className="mb-2">
                                            <Link to="/blog/blog-details">
                                                Understanding and Preventing Glaucoma: A Detailed Guide
                                            </Link>
                                        </h6>
                                        <p>
                                            Glaucoma is a leading cause of blind worldwide, yet many....
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="article-item aos" data-aos="fade-up">
                                    <div className="article-img">
                                        <Link to="/blog/blog-details">
                                            <ImageWithBasePath
                                                src="assets/img/blog/article-02.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </Link>
                                        <div className="date-icon">
                                            <span>18</span>May
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <span className="badge badge-cyan mb-2">Neurology</span>
                                        <h6 className="mb-2">
                                            <Link to="/blog/blog-details">
                                                Understanding and Preventing Glaucoma: A Detailed Guide
                                            </Link>
                                        </h6>
                                        <p>
                                            Discover the intersection of technology and neurology,
                                            transforming....
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="article-item aos" data-aos="fade-up">
                                    <div className="article-img">
                                        <Link to="/blog/blog-details">
                                            <ImageWithBasePath
                                                src="assets/img/blog/article-03.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </Link>
                                        <div className="date-icon">
                                            <span>21</span>Apr
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <span className="badge badge-cyan mb-2">Dental</span>
                                        <h6 className="mb-2">
                                            <Link to="/blog/blog-details">
                                                5 Essential Tips for Maintaining Optimal Oral Health
                                            </Link>
                                        </h6>
                                        <p>Learn the top five daily practices to keep your teeth....</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="article-item aos" data-aos="fade-up">
                                    <div className="article-img">
                                        <Link to="/blog/blog-details">
                                            <ImageWithBasePath
                                                src="assets/img/blog/article-04.jpg"
                                                className="img-fluid"
                                                alt="img"
                                            />
                                        </Link>
                                        <div className="date-icon">
                                            <span>22</span>Jan
                                        </div>
                                    </div>
                                    <div className="article-info">
                                        <span className="badge badge-cyan mb-2">
                                            Care &amp; Treatment
                                        </span>
                                        <h6 className="mb-2">
                                            <Link to="/blog/blog-details">
                                                Beating Strong: The Digital Revol in Cardiac Care
                                            </Link>
                                        </h6>
                                        <p>
                                            Discover how digital advancements are transforming cardiac
                                            care...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center load-item aos" data-aos="fade-up">
                            <Link to="blog-grid.html" className="btn btn-dark">
                                View All Articles
                                <i className="isax isax-arrow-right-3 ms-2" />
                            </Link>
                        </div>
                    </div>
                </section>
                {/* /Article Section */}
                {/* Info Section */}
                <section className="info-section">
                    <div className="container">
                        <div className="contact-info">
                            <div className="d-lg-flex align-items-center justify-content-between w-100 gap-4">
                                <div className="mb-4 mb-lg-0 aos" data-aos="fade-up">
                                    <h6 className="display-6 text-white">
                                        Working for Your Better Health.
                                    </h6>
                                </div>
                                <div
                                    className="d-sm-flex align-items-center justify-content-lg-end gap-4 aos"
                                    data-aos="fade-up"
                                >
                                    <div className="con-info d-flex align-items-center mb-3 mb-sm-0">
                                        <span className="con-icon">
                                            <i className="isax isax-headphone" />
                                        </span>
                                        <div className="ms-2">
                                            <p className="text-white mb-1">Customer Support</p>
                                            <p className="text-white fw-medium mb-0">+1 56589 54598</p>
                                        </div>
                                    </div>
                                    <div className="con-info d-flex align-items-center">
                                        <span className="con-icon">
                                            <i className="isax isax-message-2" />
                                        </span>
                                        <div className="ms-2">
                                            <p className="text-white mb-1">Drop Us an Email</p>
                                            <p className="text-white fw-medium mb-0">
                                                info1256@example.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Info Section */}
            </>

        </div>
    )
}

export default SectionArtical
