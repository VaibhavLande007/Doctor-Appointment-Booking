import React, { useEffect } from "react";
import Home11Header from "./header";
import Home11Footer from "./footer";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home11 = () => {
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-nav ">
        <button type="button" role="presentation" className="owl-next" onClick={onClick}>
            <i className="fa-solid fa-chevron-right" />
        </button>
    </div>
);

const CustomPrevArrow = ({ className, onClick }) => (
    <div className="owl-nav ">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fa-solid fa-chevron-left " />
        </button>
    </div>
);
  const ourDoctor = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      const activeItems = document.querySelectorAll('.slick-active '); 
      if (activeItems) {
        activeItems.forEach((item, index) => {
          if (index === 3) {
            item.classList.add('activeset'); 
          } else {
            item.classList.remove('activeset');
          }
        });
      }
      // console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      // console.log("after change", currentSlide);
      const activeItems = document.querySelectorAll('.slick-active '); 
      if (activeItems) {
        activeItems.forEach((item, index) => {
          if (index === 3) {
            item.classList.add('activeset'); 
          } else {
            item.classList.remove('activeset');
          }
        });
      }
    }
  };
  const ourNew = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
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
  const ourTreatment = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
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
  const ourServices = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
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
                slidesToShow: 1,
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
  const ourExpert = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:   false,
    arrows: true,
    centerMode:true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
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
  const ourTestimonial = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
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
  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleT = (event) => {
    const activeItems = event?.currentTarget.querySelectorAll('.owl-item.active'); 
    if (activeItems) {
      activeItems.forEach((item, index) => {
        if (index === 2) {
          item.classList.add('activeset'); 
        } else {
          item.classList.remove('activeset');
        }
      });
    }
  }
  return (
      <div className="main-wrapper home-sixteen">
        <Home11Header />
        {/* Home Banner */}
        <section className="banner-section-sixteen">
          <div className="banner-slidersurgery">
            <Slider {...ourDoctor} className="owl-carousel banner-sliderssurgery owl-theme">
              <div className="item item-slidersurgery">
                <ImageWithBasePath
                  src="assets/img/cosmetic-banner-img.png"
                  className="img-fluid"
                  alt="Img"
                />
              </div>
              <div className="item item-slidersurgery">
                <ImageWithBasePath
                  src="assets/img/cosmetic-banner-img1.png"
                  className="img-fluid"
                  alt="Img"
                />
              </div>
              <div className="item item-slidersurgery">
                <ImageWithBasePath
                  src="assets/img/cosmetic-banner-img2.png"
                  className="img-fluid"
                  alt="Img"
                />
              </div>
              <div className="item item-slidersurgery">
                <ImageWithBasePath
                  src="assets/img/cosmetic-banner-img3.png"
                  className="img-fluid"
                  alt="Img"
                />
              </div>
              <div className="item item-slidersurgery">
                <ImageWithBasePath
                  src="assets/img/cosmetic-banner-img4.png"
                  className="img-fluid"
                  alt="Img"
                />
              </div>
            </Slider>
          </div>
          <div className="container">
            <div className="costomic-banner-content">
              <div className="row">
                <div className="col-lg-6">
                  <div
                    className="banner-content banner-content-sixteen aos"
                    data-aos="fade-up"
                  >
                    <h1>Perfect Face Surgery For Everyone</h1>
                    <p>
                      We enhance your natural beauty, boost your confidence
                      &amp; provide a positive and personalized experience
                      throughout your cosmetic surgery journey.
                    </p>
                    <div className="banner-btns-sixteen">
                      <Link to="/patient/booking2" className="btn btn-primary me-2">
                        Make an Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}
        {/* services Section */}
        <section className="services-section-sixteen">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header-sixteen text-center">
                  <p>Recapture the beauty of self-confidence</p>
                  <h2>Discover a New you</h2>
                </div>
              </div>
            </div>
            <Slider {...ourNew} className="owl-carousel slick-margins eye-dots custom-slide discover-slider owl-theme">
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-5.svg" alt="Body" />
                </div>
                <Link to="#">Body</Link>
                <p>Tailored Body Surgery Solutions for Timeless Beauty</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-4.svg" alt="Face" />
                </div>
                <Link to="#">Nose</Link>
                <p>Elevate Confidence with Precision Nose Surgery</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-3.svg" alt="Breast" />
                </div>
                <Link to="#">Breast</Link>
                <p>Customized Breast Surgery for Timeless Elegance.</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-2.svg" alt="Nose" />
                </div>
                <Link to="#">Face</Link>
                <p> Face Surgery Tailored to Your Unique Beauty.</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-1.svg" alt="Fillers" />
                </div>
                <Link to="#">Fillers</Link>
                <p>Expertly Crafted Fillers Surgery for Natural Radiance</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-2.svg" alt="Breast" />
                </div>
                <Link to="#">Face</Link>
                <p>Face Surgery Tailored to Your Unique Beauty.</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-5.svg" alt="Face" />
                </div>
                <Link to="#">Body</Link>
                <p>Tailored Body Surgery Solutions for Timeless Beauty</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-4.svg" alt="Breast" />
                </div>
                <Link to="#">Nose</Link>
                <p>Elevate Confidence with Precision Nose Surgery</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-1.svg" alt="Nose" />
                </div>
                <Link to="#">Fillers</Link>
                <p>Expertly Crafted Fillers Surgery for Natural Radiance</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-3.svg" alt="Face" />
                </div>
                <Link to="#">Breast</Link>
                <p>Customized Breast Surgery for Timeless Elegance.</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
              <div className="discover-you-main">
                <div className="discover-you-image">
                  <ImageWithBasePath src="assets/img/icons/discover-5.svg" alt="Nose" />
                </div>
                <Link to="#">Body</Link>
                <p>Tailored Body Surgery Solutions for Timeless Beauty</p>
                <Link to="#" className="discov-innner">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
              </div>
            </Slider>
          </div>
          <div className="service-sixteen-icon">
            <ImageWithBasePath
              src="assets/img/service-sixteen-icon.png"
              className="bg-img-top"
              alt="Section bg"
            />
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-03.png"
              className="bg-img-bottom"
              alt="Section bg"
            />
          </div>
        </section>
        {/* /services Section */}
        {/* Treatment Section */}
        <div className="treatment-section-sixteen">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header-sixteen text-center">
                  <p>TREATMENT OFFERED BY US</p>
                  <h2>Choose a treatment</h2>
                </div>
              </div>
            </div>
            <Slider {...ourTreatment} className="owl-carousel slick-margins eye-dots custom-slide treatment-sixteen-slider owl-theme">
              <div className="item item-sixteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-1.jpg"
                          className="img-fluid"
                          alt="Treatment"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>Face Lift</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile" className="img-avatar">
                          <ImageWithBasePath
                            src="assets/img/doctor-profiles/doc-profile-07.jpg"
                            alt="Img"
                          />
                        </Link>
                        <h5>
                          <Link to="/patient/doctor-profile">Dr. Barbara</Link>
                          <span>Aesthetic Surgery</span>
                        </h5>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" />
                        Kansas City, MO
                      </p>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item item-sixteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-2.jpg"
                          className="img-fluid"
                          alt="Treatment"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>Implant</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile" className="img-avatar">
                          <ImageWithBasePath
                            src="assets/img/doctor-profiles/doc-profile-08.jpg"
                            alt="Img"
                          />
                        </Link>
                        <h5>
                          <Link to="/patient/doctor-profile">Dr. Williams</Link>
                          <span>Implant Surgery</span>
                        </h5>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" />
                        Gloster, MS
                      </p>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item item-sixteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-3.jpg"
                          className="img-fluid"
                          alt="Treatment"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>Blearoplasty</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile" className="img-avatar">
                          <ImageWithBasePath
                            src="assets/img/doctor-profiles/doc-profile-09.jpg"
                            alt="Img"
                          />
                        </Link>
                        <h5>
                          <Link to="/patient/doctor-profile">Dr. Daniel</Link>
                          <span>Breast Surgery</span>
                        </h5>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" />
                        Raleigh, NC
                      </p>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item item-sixteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-4.jpg"
                          className="img-fluid"
                          alt="Treatment"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>Tummy Tuck</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile" className="img-avatar">
                          <ImageWithBasePath
                            src="assets/img/doctor-profiles/doc-profile-10.jpg"
                            alt="Img"
                          />
                        </Link>
                        <h5>
                          <Link to="/patient/doctor-profile">Dr. Fareeehna Davis</Link>
                          <span>Aesthetic Surgery</span>
                        </h5>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" />
                        Salt Lake City, UT
                      </p>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item item-sixteen">
                <div className="doctor-profile-widget">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/service/treatment-2.jpg"
                          className="img-fluid"
                          alt="Treatment"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>Blearoplasty</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile" className="img-avatar">
                          <ImageWithBasePath
                            src="assets/img/doctor-profiles/doc-profile-06.jpg"
                            alt="Img"
                          />
                        </Link>
                        <h5>
                          <Link to="/patient/doctor-profile">Dr. Barbara</Link>
                          <span>Aesthetic Surgery</span>
                        </h5>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" />
                        Kansas City, MO
                      </p>
                    </div>
                    <Link to="/patient/booking1" className="btn btn-primary">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="service-sixteen-icontwo">
            <ImageWithBasePath src="assets/img/service-sixteen-icon.png" alt="Section bg" />
          </div>
        </div>
        {/* /Treatment Section */}
        {/* Services Section */}
        <div className="features-section-sixteen">
          <div className="bg-img">
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-05.png"
              className="sec-vector"
              alt="Img"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header-sixteen text-center">
                  <p>OUr services</p>
                  <h2>Featured Services</h2>
                </div>
              </div>
            </div>
            <Slider {...ourServices} className="owl-carousel custom-slide slick-margins eye-dots features-slider-sixteen owl-theme">
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <ImageWithBasePath
                    src="assets/img/feature-service-1.jpg"
                    alt="Feature"
                    className="img-fluid"
                  />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>Mommy Makeover</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <ImageWithBasePath
                    src="assets/img/feature-service-3.jpg"
                    alt="Feature"
                    className="img-fluid"
                  />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>Face Makeover</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <ImageWithBasePath
                    src="assets/img/feature-service-2.jpg"
                    alt="Feature"
                    className="img-fluid"
                  />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>BodyTite</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <ImageWithBasePath
                    src="assets/img/feature-service-3.jpg"
                    alt="Feature"
                    className="img-fluid"
                  />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>BodyTite</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-sixteen-main">
                <div className="feature-six-img">
                  <ImageWithBasePath
                    src="assets/img/feature-service-1.jpg"
                    alt="Feature"
                    className="img-fluid"
                  />
                  <div className="feature-content-six">
                    <div className="feature-content-one">
                      <h5>BodyTite</h5>
                      <span>
                        <i className="fa-solid fa-angle-up" />
                      </span>
                    </div>
                    <div className="feature-content-two">
                      <p>
                        Facial procedures are popular because of their ability
                        to give patients a youthful appearance, reduce the signs
                        of aging and by improving existing features for more
                        aesthetically pleasing results. These methods are in two
                        separate categories and are commonly known as facial
                        rejuvenation and facial contouring. Facial rejuvenation
                        consists of facelift, eyelid lift, neck lift and brow
                        lift.
                      </p>
                      <span>
                        <i className="fa-solid fa-angle-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        {/* /Services Section */}
        {/* Facts Services */}
        <div className="facts-section-sixteen">
          <div className="bg-img">
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-06.png"
              className="sec-vector"
              alt="Img"
            />
          </div>
          <div className="container">
            <div className="facts-section-all">
              <div className="facts-main-sixteen">
                <span>OTHER TREATMENT</span>
                <h2>Facts You Need To Know Ahead</h2>
                <p>
                  Curated by board-certified surgeons, we offers expert insights
                  into the latest trends, innovations, and advancements in
                  cosmetic surgery, empowering users with accurate and
                  up-to-date knowledge. Featuring real-life experiences, our
                  patient success stories, impact of cosmetic surgery on
                  individuals' lives.
                </p>
                <Link to="/patient/booking1">
                  Read More
                  <i className="fa-solid fa-chevron-right ms-2" />
                </Link>
                <div className="bg-img">
                  <ImageWithBasePath src="assets/img/bg/vector-bg-04.png" alt="Img" />
                </div>
              </div>
              <div className="facts-content-all">
                <ul>
                  <li>
                    <div className="facts-sixteen-img">
                      <ImageWithBasePath src="assets/img/icons/facts-4.svg" alt="Facts" />
                      <div className="facts-content-sixteen">
                        <div className="facts-content-one">
                          <h5>
                            Consequences
                            <i className="fa-solid fa-angle-right ms-2" />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="facts-content-two facts-content-two-solid">
                      <p>
                        Gain insights into realistic expectations by , which
                        aims to provide a balanced perspective on potential
                        risks &amp; benefits to empower informed
                        decision-making.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="facts-sixteen-img">
                      <ImageWithBasePath src="assets/img/icons/facts-5.svg" alt="Facts" />
                      <div className="facts-content-sixteen">
                        <div className="facts-content-one">
                          <h5>
                            Privacy policy
                            <i className="fa-solid fa-angle-right ms-2" />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="facts-content-two facts-content-two-solid">
                      <p>
                        Gain insights into realistic expectations by , which
                        aims to provide a balanced perspective on potential
                        risks &amp; benefits to empower informed
                        decision-making.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="facts-sixteen-img">
                      <ImageWithBasePath src="assets/img/icons/facts-3.svg" alt="Facts" />
                      <div className="facts-content-sixteen">
                        <div className="facts-content-one">
                          <h5>
                            Surgery preparation
                            <i className="fa-solid fa-angle-right ms-2" />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="facts-content-two facts-content-two-solid">
                      <p>
                        Gain insights into realistic expectations by , which
                        aims to provide a balanced perspective on potential
                        risks &amp; benefits to empower informed
                        decision-making.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="facts-sixteen-img">
                      <ImageWithBasePath src="assets/img/icons/facts-2.svg" alt="Facts" />
                      <div className="facts-content-sixteen">
                        <div className="facts-content-one">
                          <h5>
                            Age limit
                            <i className="fa-solid fa-angle-right ms-2" />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="facts-content-two facts-content-two-solid">
                      <p>
                        Gain insights into realistic expectations by , which
                        aims to provide a balanced perspective on potential
                        risks &amp; benefits to empower informed
                        decision-making.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="facts-sixteen-img">
                      <ImageWithBasePath src="assets/img/icons/facts-1.svg" alt="Facts" />
                      <div className="facts-content-sixteen">
                        <div className="facts-content-one">
                          <h5>
                            After Surgery
                            <i className="fa-solid fa-angle-right ms-2" />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="facts-content-two facts-content-two-solid">
                      <p>
                        Gain insights into realistic expectations by , which
                        aims to provide a balanced perspective on potential
                        risks &amp; benefits to empower informed
                        decision-making.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="facts-sixteen-img">
                      <ImageWithBasePath src="assets/img/icons/facts-5.svg" alt="Facts" />
                      <div className="facts-content-sixteen">
                        <div className="facts-content-one">
                          <h5>
                            Consequences
                            <i className="fa-solid fa-angle-right ms-2" />
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="facts-content-two facts-content-two-solid">
                      <p>
                        Gain insights into realistic expectations by , which
                        aims to provide a balanced perspective on potential
                        risks &amp; benefits to empower informed
                        decision-making.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Facts Services */}
        {/* Experts Team */}
        <section className="experts-section-sixteen">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header-sixteen section-header-sixteentwo text-center">
                  <p>Our Team</p>
                  <h2>Our experts team</h2>
                </div>
              </div>
            </div>
            <div className="slider slider-sixteen aos" data-aos="zoom-in-up" id="slide-experts">
              <Slider {...ourExpert} className=" custome_slides" >
                <div className="test_imgs">
                  <div className="main-reviewimages">
                    <ImageWithBasePath
                      src="assets/img/experts-2.jpg"
                      alt="Leslie Alexander"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonal-contents">
                    <h5>Eric Hansley</h5>
                    <span>MBBS, MS - Surgeon</span>
                  </div>
                </div>
                <div className="test_imgs">
                  <div className="main-reviewimages">
                    <ImageWithBasePath
                      src="assets/img/experts-3.jpg"
                      alt="Leslie Alexander"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonal-contents">
                    <h5>Leslie Alexander</h5>
                    <span>Aesthetic Surgery</span>
                  </div>
                </div>
                <div className="test_imgs">
                  <div className="main-reviewimages">
                    <ImageWithBasePath
                      src="assets/img/experts-2.jpg"
                      alt="James George"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonal-contents">
                    <h5>James George</h5>
                    <span>Aesthetic Surgery</span>
                  </div>
                </div>
                <div className="test_imgs">
                  <div className="main-reviewimages">
                    <ImageWithBasePath
                      src="assets/img/experts-3.jpg"
                      alt="Leslie Alexander"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonal-contents">
                    <h5>Eric Hansley</h5>
                    <span>MBBS, MS - Surgeon</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* /Experts Team */}
        {/* Pricing Plan */}
        <div className="pricing-section-sixteen">
          <div className="bg-img">
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-06.png"
              className="sec-vector"
              alt="Img"
            />
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-06.png"
              className="sec-vector-two"
              alt="Img"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header-sixteen text-center">
                  <p>Choose our best plan</p>
                  <h2>Pricing Plan</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
                <div className="card pricing-card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-icon">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/price-icon1.svg"
                              alt="icon"
                            />
                          </span>
                        </div>
                        <div className="pricing-title">
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
                        <Link to="/pages/pricing-plan" className="btn">
                          Choose Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
                <div className="card pricing-card pricing-card-active">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-icon">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/price-icon2.svg"
                              alt="icon"
                            />
                          </span>
                        </div>
                        <div className="pricing-title">
                          <h4>Premium</h4>
                        </div>
                        <div className="pricing-tag">
                          <span>Popular</span>
                        </div>
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
                        <Link to="/pages/pricing-plan" className="btn">
                          Choose Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
                <div className="card pricing-card">
                  <div className="card-body">
                    <div className="pricing-header">
                      <div className="pricing-header-info">
                        <div className="pricing-icon">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/price-icon3.svg"
                              alt="icon"
                            />
                          </span>
                        </div>
                        <div className="pricing-title">
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
                        <Link to="/pages/pricing-plan" className="btn">
                          Choose Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Pricing Plan */}
        {/* Testimonal Section */}
        <div className="testimonal-section-sixteen">
          <div className="bg-img">
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-06.png"
              className="sec-vector"
              alt="Img"
            />
            <ImageWithBasePath
              src="assets/img/bg/vector-bg-06.png"
              className="sec-vector-two"
              alt="Img"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header-sixteen text-center">
                  <p>what our Patients say?</p>
                  <h2>Testimonial</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="testi-img">
                  <ImageWithBasePath
                    src="assets/img/testimonial-2.jpg"
                    alt="Testimonial"
                    className="img-fluid"
                  />
                  <span className="testi-icon">
                    <i className="fa-solid fa-quote-left" />
                  </span>
                  <span className="rounded-img">
                    <ImageWithBasePath src="assets/img/bg/rounded-circle-01.png" alt="Img" />
                  </span>
                </div>
              </div>
              <div className="col-md-7">
                <Slider {...ourTestimonial} className="owl-carousel eye-dots patient-review-slider">
                  <div className="testimonial-wrap">
                    <h4>Exceptional Care from Start to Finish</h4>
                    <p>
                      I recently had liposuction done at Doccure, and the care I
                      received was exceptional from start to finish. The staff
                      was friendly, and the surgeons were not only skilled but
                      also compassionate. They addressed all my concerns,
                      provided detailed pre and post-op instructions, and the
                      results are truly remarkable. I highly recommend Doccure
                      for anyone considering cosmetic procedures.
                    </p>
                    <div className="testimonial-user">
                      <h6>Elizabeth Forsyth</h6>
                      <p>Las Vegas, USA</p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <h4>Exceptional Care from Start to Finish</h4>
                    <p>
                      I recently had liposuction done at Doccure, and the care I
                      received was exceptional from start to finish. The staff
                      was friendly, and the surgeons were not only skilled but
                      also compassionate. They addressed all my concerns,
                      provided detailed pre and post-op instructions, and the
                      results are truly remarkable. I highly recommend Doccure
                      for anyone considering cosmetic procedures.
                    </p>
                    <div className="testimonial-user">
                      <h6>Elizabeth Forsyth</h6>
                      <p>Las Vegas, USA</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonal Section */}
        {/* Feedback */}
        <section className="feedback-section-sixteen">
          <div className="container">
            <div className="feedback-schedule-all">
              <span className="rounded-img">
                <ImageWithBasePath src="assets/img/bg/rounded-circle-02.png" alt="Img" />
              </span>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="feedback-fifteen-content text-center">
                    <h3>Focus On Your Own Body Shape</h3>
                    <p>
                      It's easy to list, simple to manage and, best of all, free
                      to list!
                    </p>
                    <div className="feedback-btns justify-content-center">
                      <Link to="/doctor/appointments" className="btn btn-primary">
                        Make An Appointment
                      </Link>
                      <Link to="/patient/booking2" className="btn btn-primarytwo">
                        <i className="feather icon-plus me-2" />
                        Get Free Check-up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Feedback */}
        <Home11Footer />
      </div>
  );
};

export default Home11;
