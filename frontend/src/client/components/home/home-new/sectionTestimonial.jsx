import React from 'react'
import CountUp from "react-countup";
import ImageWithBasePath from '../../../../core/img/imagewithbasebath';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SectionTestimonial = () => {
    const CustomNextArrow = ({ className, onClick }) => (
        <div className="owl-nav slide-nav ">
            <button type="button" role="presentation" className="owl-next" onClick={onClick}>
                <i className="fa-solid fa-chevron-right" />
            </button>
        </div>
    );
    
    
    
    const CustomPrevArrow = ({ className, onClick }) => (
        <div className="owl-nav slide-nav">
            <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
                <i className="fa-solid fa-chevron-left" />
            </button>
        </div>
    );
    const TestimonialSlider = {
        slidesToShow:8,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 8,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 0,
            settings: {
                vertical: false,
                slidesToShow: 1,
            },
        },
    ],
    };
    const TestimonialSlider1 = {
        slidesToShow:3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div>
            {/* Testimonial Section */}
            <section className="testimonial-section-one">
                <div className="container">
                    <div className="section-header sec-header-one text-center aos" data-aos="fade-up">
                        <span className="badge badge-primary">Testimonials</span>
                        <h2>15k Users Trust Doccure Worldwide</h2>
                    </div>
                    {/* Testimonial Slider */}
                    <div className=" testimonials-slider slick-margins aos" data-aos="fade-up">
                    <Slider {...TestimonialSlider1}>
                        <div className="card shadow-none mb-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="rating d-flex">
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled" />
                                    </div>
                                    <span>
                                        <ImageWithBasePath src="assets/img/icons/quote-icon.svg" alt="img" />
                                    </span>
                                </div>
                                <h6 className="fs-16 fw-medium mb-2">Nice Treatment</h6>
                                <p>I had a wonderful experience the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.</p>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="avatar avatar-lg">
                                        <ImageWithBasePath src="assets/img/patients/patient22.jpg" className="rounded-circle" alt="img" />
                                    </a>
                                    <div className="ms-2">
                                        <h6 className="mb-1"><a href="#">Deny Hendrawan</a></h6>
                                        <p className="fs-14 mb-0">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-none mb-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="rating d-flex">
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled" />
                                    </div>
                                    <span>
                                        <ImageWithBasePath src="assets/img/icons/quote-icon.svg" alt="img" />
                                    </span>
                                </div>
                                <h6 className="fs-16 fw-medium mb-2">Good Hospitability</h6>
                                <p>Genuinely cares about his patients. He helped me understand my condition and worked with me to create a plan.</p>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="avatar avatar-lg">
                                        <ImageWithBasePath src="assets/img/patients/patient21.jpg" className="rounded-circle" alt="img" />
                                    </a>
                                    <div className="ms-2">
                                        <h6 className="mb-1"><a href="#">Johnson DWayne</a></h6>
                                        <p className="fs-14 mb-0">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-none mb-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="rating d-flex">
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled" />
                                    </div>
                                    <span>
                                        <ImageWithBasePath src="assets/img/icons/quote-icon.svg" alt="img" />
                                    </span>
                                </div>
                                <h6 className="fs-16 fw-medium mb-2">Nice Treatment</h6>
                                <p>I had a great experience with Dr. Chen. She was not only professional but also made me feel comfortable discussing.</p>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="avatar avatar-lg">
                                        <ImageWithBasePath src="assets/img/patients/patient.jpg" className="rounded-circle" alt="img" />
                                    </a>
                                    <div className="ms-2">
                                        <h6 className="mb-1"><a href="#">Rayan Smith</a></h6>
                                        <p className="fs-14 mb-0">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card shadow-none mb-0">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <div className="rating d-flex">
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled me-1" />
                                        <i className="fa-solid fa-star filled" />
                                    </div>
                                    <span>
                                        <ImageWithBasePath src="assets/img/icons/quote-icon.svg" alt="img" />
                                    </span>
                                </div>
                                <h6 className="fs-16 fw-medium mb-2">Excellent Service</h6>
                                <p>I had a wonderful experience the staff was friendly and attentive, and Dr. Smith took the time to explain everything clearly.</p>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="avatar avatar-lg">
                                        <ImageWithBasePath src="assets/img/patients/patient23.jpg" className="rounded-circle" alt="img" />
                                    </a>
                                    <div className="ms-2">
                                        <h6 className="mb-1"><a href="#">Sofia Doe</a></h6>
                                        <p className="fs-14 mb-0">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                    {/* /Testimonial Slider */}
                    {/* Counter */}
                    <div className="testimonial-counter">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-gap-4">
                            <div className="counter-item text-center aos" data-aos="fade-up">
                                <h6 className="display-6">
                                    <CountUp
                                        end={300}
                                        duration={5}
                                        className="counter animated fadeInDownBig"
                                    />+</h6>
                                <p>Doctors Available</p>
                            </div>
                            <div className="counter-item text-center aos" data-aos="fade-up" >
                                <h6 className="display-6 secondary-count">
                                    <CountUp
                                        end={18}
                                        duration={5}
                                        className="counter animated fadeInDownBig"
                                    />+</h6>
                                <p>Specialities</p>
                            </div>
                            <div className="counter-item text-center aos" data-aos="fade-up">
                                <h6 className="display-6 purple-count">
                                    <CountUp
                                        end={30}
                                        duration={5}
                                        className="counter animated fadeInDownBig"
                                    />K</h6>
                                <p>Bookings Done</p>
                            </div>
                            <div className="counter-item text-center aos" data-aos="fade-up">
                                <h6 className="display-6 pink-count">
                                    <CountUp
                                        end={97}
                                        duration={5}
                                        className="counter animated fadeInDownBig"
                                    />+</h6>
                                <p>Hospitals &amp; Clinic</p>
                            </div>
                            <div className="counter-item text-center  aos" data-aos="fade-up">
                                <h6 className="display-6 warning-count">
                                    <CountUp
                                        end={317}
                                        duration={5}
                                        className="counter animated fadeInDownBig"
                                    />+</h6>
                                <p>Lab Tests Available</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Counter */}
            </section>
            {/* /Testimonial Section */}

            <section className="company-section bg-dark aos" data-aos="fade-up">
                <div className="container">
                    <div className="section-header sec-header-one text-center">
                        <h6 className="text-light">
                            Trusted by 5+ million people at companies like
                        </h6>
                    </div>
                    <div className=" company-slider slick-margins">
                        <Slider {...TestimonialSlider}>
                            <div>
                                <ImageWithBasePath src="assets/img/company/company-01.svg" alt="img" />
                            </div>
                            <div>
                                <ImageWithBasePath src="assets/img/company/company-02.svg" alt="img" />
                            </div>
                            <div>
                                <ImageWithBasePath src="assets/img/company/company-03.svg" alt="img" />
                            </div>
                            <div>
                                <ImageWithBasePath src="assets/img/company/company-04.svg" alt="img" />
                            </div>
                            <div>
                                <ImageWithBasePath src="assets/img/company/company-05.svg" alt="img" />
                            </div>
                            <div>
                                <ImageWithBasePath src="assets/img/company/company-06.svg" alt="img" />
                            </div>
                            <div>
                                <ImageWithBasePath src="assets/img/company/company-07.svg" alt="img" />
                            </div>
                            <div>
                                <ImageWithBasePath src="assets/img/company/company-08.svg" alt="img" />
                            </div>
                        </Slider>

                    </div>
                </div>
            </section>

        </div >
    )
}

export default SectionTestimonial
