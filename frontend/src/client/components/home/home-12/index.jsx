import React, { useEffect, useState } from "react";
import Home12Header from "./header";
import Home12Footer from "./footer";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards, Mousewheel } from "swiper/core";
import {
  client01,
  client_02,
  client_03,
  labviewicon,
  sectionsmallicon01,
  sectionsmallicon02,
  swiperslideimag01,
  swiperslideimag02,
  swiperslideimag03,
} from "../../imagepath";
SwiperCore.use([EffectCards, Mousewheel]);
import { Dropdown } from "primereact/dropdown";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home12 = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const CustomNextArrow = ({ className, onClick }) => (
    <div className="owl-nav ">
        <button type="button" role="presentation" className="owl-next" onClick={onClick}>
            <i className="fa-solid fa-play" />
        </button>
    </div>
);

const CustomPrevArrow = ({ className, onClick }) => (
    <div className="owl-nav ">
        <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
            <i className="fa-solid fa-play " />
        </button>
    </div>
);
  const swiperParams = {
    effect: "cards",
    loop: false,
    grabCursor: true,
    slidesPerView: "auto",
    initialSlide: 2,
    mousewheel: {
      invert: false,
    },
  };
  const cardData = [
    {
      id: 1,
      imgSrc: swiperslideimag01,
      title: "Asthma Apply",
      parameters: "Includes 90 Parameters",
      price: "$350.25",
      discountedPrice: "$699.00",
    },
    {
      id: 2,
      imgSrc: swiperslideimag02,
      title: "Asthma Apply",
      parameters: "Includes 70 Parameters",
      price: "$250.49",
      discountedPrice: "$499.00",
    },
    {
      id: 3,
      imgSrc: swiperslideimag03,
      title: "Asthma Apply",
      parameters: "Includes 80 Parameters",
      price: "$150.49",
      discountedPrice: "$299.00",
    },
  ];
  const selectValue = [
    { name: "Cardiology" },
    { name: "Neurology" },
    { name: "Urology" },
  ];
  const selectValue2 = [
    { name: "Choose City" },
    { name: "UK" },
    { name: "USA" },
  ];
  const [selectedValue, setSelectedValue] = useState();
  const [selectedValue2, setSelectedValue2] = useState();
  const populartestslider = {
    slidesToShow: 4,
        slidesToScroll: 4,
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
                    slidesToShow: 1,
                },
            },
        ],
  };
  const consultingSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
  const featurepackageSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
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
  const bestpackageslider = {
   slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false,
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
                    slidesToShow: 1,
                },
            },
        ],
  };
  const labSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
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
  const popularchoice = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode:true
  };
  const data = [
    {
      image: client01,
      name: "Madeleine Jennifer",
      location: "Chennai, Tamilnadu",
      description:
        "After struggling with chronic sinus problems, I found relief at Doccure. The ENT specialists here are not only highly skilled but also genuinely caring. They took the time to understand my concerns, provided a detailed diagnosis, and guided me through a treatment plan that has greatly improved my quality of life.",
    },
    {
      image: client_02,
      name: "Madeleine Jennifer",
      location: "Chennai, Tamilnadu",
      description:
        "The team's commitment to finding the best solutions has had a positive impact on my life",
    },
    {
      image: client_03,
      name: "Madeleine Jennifer",
      location: "Chennai, Tamilnadu",
      description:
        "The staff was friendly and attentive, and Doctor performed the procedure with precision and care.",
    },
    {
      image: client_03,
      name: "Madeleine Jennifer",
      location: "Chennai, Tamilnadu",
      description:
      "After struggling with chronic sinus problems, I found relief at Doccure. The ENT specialists here are not only highly skilled but also genuinely caring. They took the time to understand my concerns, provided a detailed diagnosis, and guided me through a treatment plan that has greatly improved my quality of life.",
    },
  ];
  const variouslogoSlider = {
   slidesToShow:6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 6,
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

  return (
    <div className="main-wrapper home-labs">
      <Home12Header />
      {/* Home Banner */}
      <section className="banner-sec-twelve">
        <div className="section-small-imgs">
          <ImageWithBasePath
            src="assets/img/icons/section-small-icon-01.svg"
            className="small-icon-one"
            alt="Img"
          />
          <ImageWithBasePath
            src="assets/img/icons/section-small-icon-02.svg"
            className="small-icon-two"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="banner-content-twelve">
                <div
                  className="banner-title-twelve aos"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <h1>
                    Now Book Lab Tests <br /> at Home
                  </h1>
                  <p>Comprehensive Lab Testing for Informed Well-being</p>
                </div>
                <form action="/patient/search-doctor2">
                  <div className="input-box-twelve">
                    <div className="input-block">
                      <Dropdown
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.value)}
                        options={selectValue}
                        optionLabel="name"
                        placeholder="Select Speciality"
                        className="custom-prime-select"
                      />
                    </div>
                    <div className="input-block">
                      <Dropdown
                        value={selectedValue2}
                        onChange={(e) => setSelectedValue2(e.value)}
                        options={selectValue2}
                        optionLabel="name"
                        placeholder="Choose City"
                        className="custom-prime-select"
                      />
                    </div>
                    <div className="input-block">
                      <div className="search-btn-twelve">
                        <Link to="/patient/search-doctor2">Search Now</Link>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="banner-counter">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                      <div
                        className="counter-twelve bg-purple-color"
                        data-aos="fade-up"
                        data-aos-delay={400}
                      >
                        <span className="hexagon" />
                        <h3>
                          <span className="counter">
                            {" "}
                            <CountUp end={985} duration={6} />
                          </span>
                          +
                        </h3>
                        <h5>Collection points</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div
                        className="counter-twelve bg-violet-color"
                        data-aos="fade-up"
                        data-aos-delay={500}
                      >
                        <span className="hexagon" />
                        <h3>
                          <span className="counter">
                            <CountUp end={1} duration={6} />
                          </span>
                          M+
                        </h3>
                        <h5>Reports Delivered</h5>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div
                        className="counter-twelve bg-blue-color"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <span className="hexagon" />
                        <h3>
                          <span className="counter">
                            <CountUp end={150} duration={6} />
                          </span>
                          +
                        </h3>
                        <h5>Expert Specialists</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-all-lab" data-aos="fade-up">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/lab-view-icon.svg"
                      alt="Img"
                    />
                  </span>
                  <h5>View all Offers on Lab tests !!!</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-10">
              <div className="swiper swiper-slider-banner">
                <div
                  className="swiper-wrapper aos"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  {/* Swiper Slide */}
                  <Swiper effect={"cards"} {...swiperParams}>
                    {cardData.map((card) => (
                      <SwiperSlide key={card.id}>
                        <div className="swiper-slide">
                          <div className="img-swiper">
                            <Link to="/consultation">
                              <img
                                src={card.imgSrc}
                                className="img-fluid"
                                alt="Img"
                              />
                            </Link>
                          </div>
                          <div className="swiper-content-card">
                            <h4>
                              <Link to="/consultation">{card.title}</Link>
                            </h4>
                            <span className="badge">{card.parameters}</span>
                            <div className="cost-pay">
                              <h5>
                                {card.price}
                                <span>{card.discountedPrice}</span>
                              </h5>
                              <Link
                                to="/patient/booking2"
                                className="slider-buy-btn"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* /Swiper Slide */}
                </div>
                <div className="testimonial-bottom-nav">
                  <div className="slide-next-btn testimonial-next-pre">
                    <i className="fas fa-arrow-left" />
                  </div>
                  <div className="slide-prev-btn testimonial-next-pre">
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Popular Test Section */}
      <section className="popular-test-section">
        <div className="section-small-imgs">
          <ImageWithBasePath
            src="assets/img/bg/section-bg-01.jpg"
            className="bg-img-one"
            alt="Img"
          />
          <ImageWithBasePath
            src="assets/img/bg/section-bg-02.png"
            className="bg-img-two"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="section-head-twelve">
            <h2>Popular Tests</h2>
            <p>
              Discover Our Popular Lab Tests, Unlock Key Health Insights with
              Trusted Diagnostic Services.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="popular-test-slider slick-margins-15 eye-dots">
                <Slider {...populartestslider}>
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-01.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Diabeties</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon liver">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-02.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Liver</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon kidney">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-03.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Kidney</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon fever">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-04.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Fever</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-01.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Diabeties</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon liver">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-02.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Liver</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon kidney">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-03.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Kidney</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card" data-aos="fade-up">
                    <span className="hexagon fever">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-04.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Fever</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card">
                    <span className="hexagon">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-01.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Diabeties</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card">
                    <span className="hexagon liver">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-02.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Liver</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card">
                    <span className="hexagon kidney">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-03.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Kidney</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                  <div className="test-slider-card">
                    <span className="hexagon fever">
                      <ImageWithBasePath
                        src="assets/img/icons/test-icon-04.svg"
                        alt="Img"
                      />
                    </span>
                    <h4>
                      <Link to="/consultation">Fever</Link>
                    </h4>
                    <p>
                      A diabetic foot exam can help find problems that can lead
                      to serious infection and ...
                    </p>
                    <Link to="/consultation" className="read-more-test">
                      Read More
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="medical-emergency-booking">
            <div className="doctor-consulting-slider">
              <Slider {...consultingSlider}>
                <div className="medical-emergency-card">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="slider-img">
                        <ImageWithBasePath
                          src="assets/img/bg/slider-bg-img.png"
                          className="img-fluid"
                          alt="Img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="slider-content aos"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <h3>Chest Pain?</h3>
                        <span>Check if you are risk at a Heart Attack</span>
                        <p>
                          Get a test report in an Hour &amp; care your heart at
                          our Specialist Advice
                        </p>
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medical-emergency-card">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="slider-img">
                        <ImageWithBasePath
                          src="assets/img/bg/slider-bg-img.png"
                          className="img-fluid"
                          alt="Img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-content">
                        <h3>Chest Pain?</h3>
                        <span>Check if you are risk at a Heart Attack</span>
                        <p>
                          Get a test report in an Hour &amp; care your heart at
                          our Specialist Advice
                        </p>
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medical-emergency-card">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="slider-img">
                        <ImageWithBasePath
                          src="assets/img/bg/slider-bg-img.png"
                          className="img-fluid"
                          alt="Img"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="slider-content aos"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <h3>Chest Pain?</h3>
                        <span>Check if you are risk at a Heart Attack</span>
                        <p>
                          Get a test report in an Hour &amp; care your heart at
                          our Specialist Advice
                        </p>
                        <Link to="/patient/booking2">Book Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="medical-descriptions">
            <div className="row">
              <div
                className="col-xl-3 col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="description-item">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/medical-icon-01.svg"
                      alt="Img"
                    />
                  </span>
                  <h4>
                    <Link to="#">Health Packages</Link>
                  </h4>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={700}
              >
                <div className="description-item">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/medical-icon-02.svg"
                      alt="Img"
                    />
                  </span>
                  <h4>
                    <Link to="#">All Tests</Link>
                  </h4>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                <div className="description-item">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/medical-icon-03.svg"
                      alt="Img"
                    />
                  </span>
                  <h4>
                    <Link to="#">Book a Call</Link>
                  </h4>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay={900}
              >
                <div className="description-item">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/medical-icon-04.svg"
                      alt="Img"
                    />
                  </span>
                  <h4>
                    <Link to="#">Upload Prescription</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Popular Test Section */}
      {/* Lab Service Section */}
      <section className="lab-service-section">
        <div className="sec-bg">
          <ImageWithBasePath
            src="assets/img/icons/section-small-icon-02.svg"
            className="small-icon-two"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="lab-services">
            <div className="row">
              <div className="col-lg-6 d-flex"></div>
              <div className="col-lg-6 d-flex">
                <div className="servive-provider-content">
                  <div
                    className="lab-service-title"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <h2>Versatile Laboratory Service Provider</h2>
                    <h5>
                      Your full service lab for clinical trials. Our mission is
                      to ensure the generation of accurate and precise findings
                    </h5>
                    <p>
                      One of the most popular services Doccure offers is
                      diagnostic testing. People need to book pathological tests
                      for many reasons. But before booking, they wonder if the
                      diagnostic centre can be trusted to produce accurate
                      results...
                    </p>
                  </div>
                  <div className="lab-service-features">
                    <ul>
                      <li data-aos="fade-down" data-aos-delay={400}>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/lab-service-icon-01.svg"
                            alt="Img"
                          />
                        </span>
                        <h6>The Doccure - Easy Way To Book Lab Tests Online</h6>
                      </li>
                      <li data-aos="fade-down" data-aos-delay={500}>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/lab-service-icon-02.svg"
                            alt="Img"
                          />
                        </span>
                        <h6>Lab Test Booking Made Simple</h6>
                      </li>
                      <li data-aos="fade-down" data-aos-delay={600}>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/lab-service-icon-03.svg"
                            alt="Img"
                          />
                        </span>
                        <h6>World class Laboratory support</h6>
                      </li>
                    </ul>
                  </div>
                  <div className="sec-btn">
                    <Link to="/pages/voice-call" className="btn btn-primary">
                      Talk With Expert
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Lab Service Section */}
      {/* Feature Packages Section */}
      <section className="features-section-sixteen">
        <div className="container">
          <div className="section-head-twelve">
            <h2>Featured Packages</h2>
            <p>
              {" "}
              Explore Our Top-Tier Packages for Your Personalized Wellness
              Experience
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="feature-package-slider slick-margins-15">
                <Slider {...featurepackageSlider}>
                  <div
                    className="feature-package-card"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="feature-package-type">
                      <h3>Women's Health Check-up</h3>
                      <div className="package-cost">
                        <h6>15 Test Included</h6>
                        <h5>
                          $150.25 <span> $199.00</span>
                        </h5>
                      </div>
                      <Link to="/patient/booking2" className="package-book-btn">
                        Book Now
                      </Link>
                    </div>
                    <div className="package-img">
                      <ImageWithBasePath
                        src="assets/img/features/package-card-img-03.svg"
                        className="package-img-user"
                        alt="Img"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/package-card-bg-01.png"
                        className="package-img-bg"
                        alt="Img"
                      />
                    </div>
                  </div>
                  <div
                    className="feature-package-card family-pack"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="feature-package-type">
                      <h3>Family Package for 3 Members</h3>
                      <div className="package-cost">
                        <h6>15 Test Included - 55% off</h6>
                        <h5>
                          $870.25 <span> $999.00</span>
                        </h5>
                      </div>
                      <Link to="/patient/booking2" className="package-book-btn">
                        Book Now
                      </Link>
                    </div>
                    <div className="package-img">
                      <ImageWithBasePath
                        src="assets/img/features/package-card-img-02.svg"
                        className="package-img-user"
                        alt="Img"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/package-card-bg-03.png"
                        className="package-img-bg"
                        alt="Img"
                      />
                    </div>
                  </div>
                  <div
                    className="feature-package-card mens-health"
                    data-aos="fade-up"
                    data-aos-delay={700}
                  >
                    <div className="feature-package-type">
                      <h3>Men's Health Check-up</h3>
                      <div className="package-cost">
                        <h6>15 Test Included - 55% off</h6>
                        <h5>
                          $130.25 <span> $199.00</span>
                        </h5>
                      </div>
                      <Link to="/patient/booking2" className="package-book-btn">
                        Book Now
                      </Link>
                    </div>
                    <div className="package-img">
                      <ImageWithBasePath
                        src="assets/img/features/package-card-img-01.svg"
                        className="package-img-user"
                        alt="Img"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/package-card-bg-02.png"
                        className="package-img-bg"
                        alt="Img"
                      />
                    </div>
                  </div>
                  <div
                    className="feature-package-card family-pack"
                    data-aos="fade-up"
                    data-aos-delay={800}
                  >
                    <div className="feature-package-type">
                      <h3>Family Package for 3 Members</h3>
                      <div className="package-cost">
                        <h6>15 Test Included - 55% off</h6>
                        <h5>
                          $870.25 <span> $999.00</span>
                        </h5>
                      </div>
                      <Link to="/patient/booking2" className="package-book-btn">
                        Book Now
                      </Link>
                    </div>
                    <div className="package-img">
                      <ImageWithBasePath
                        src="assets/img/features/package-card-img-02.svg"
                        className="package-img-user"
                        alt="Img"
                      />
                      <ImageWithBasePath
                        src="assets/img/bg/package-card-bg-03.png"
                        className="package-img-bg"
                        alt="Img"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Feature Packages Section */}
      {/* Best Packages Section */}
      <section className="best-packages-section">
        <div className="section-bg">
          <ImageWithBasePath
            src="assets/img/bg/section-bg-03.png"
            className="best-pack-bg-one"
            alt="Img"
          />
          <ImageWithBasePath
            src="assets/img/bg/section-bg-04.png"
            className="best-pack-bg-two"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="section-head-twelve">
            <h2>Best Packages</h2>
            <p>
              {" "}
              Explore Our Top-Tier Packages for Your Personalized Wellness
              Experience
            </p>
          </div>
          <ul
            className="nav nav-pills inner-tab"
            id="pills-tab2"
            role="tablist"
            data-aos="fade-up"
           
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-all-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all"
                type="button"
                role="tab"
                aria-controls="pills-all"
                aria-selected="false"
              >
                All Packages
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-family-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-family"
                type="button"
                role="tab"
                aria-controls="pills-family"
                aria-selected="true"
              >
                Family Care
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-adult-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-adult"
                type="button"
                role="tab"
                aria-controls="pills-adult"
                aria-selected="false"
              >
                Adult Care
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-accident-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-accident"
                type="button"
                role="tab"
                aria-controls="pills-accident"
                aria-selected="false"
              >
                Accident Care
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-fitness-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-fitness"
                type="button"
                role="tab"
                aria-controls="pills-fitness"
                aria-selected="false"
              >
                Fitness Care
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-explore-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-explore"
                type="button"
                role="tab"
                aria-controls="pills-explore"
                aria-selected="false"
              >
                Explore More
              </button>
            </li>
          </ul>
          <div className="tab-content pt-0 dashboard-tab">
            <div
              className="tab-pane  show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="best-package-slider">
                    <Slider {...bestpackageslider}>
                      <div className="best-package-card" data-aos="fade-up">
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="best-package-card" data-aos="fade-up">
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="best-package-card" data-aos="fade-up">
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={800}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-family"
              role="tabpanel"
              aria-labelledby="pills-family-tab"
            >
              <div className="row">
                <div className="col-md-12">
                <div className="best-package-slider">
                  <Slider {...bestpackageslider}>
                      <div className="best-package-card" data-aos="fade-up">
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={700}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={800}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                  </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-adult"
              role="tabpanel"
              aria-labelledby="pills-adult-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="best-package-slider">
                    <Slider {...bestpackageslider}>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={500}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={700}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={800}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-accident"
              role="tabpanel"
              aria-labelledby="pills-accident-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="best-package-slider">
                    <Slider {...bestpackageslider}>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={500}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={700}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={800}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-fitness"
              role="tabpanel"
              aria-labelledby="pills-fitness-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="best-package-slider">
                    <Slider {...bestpackageslider}>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={500}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={700}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={800}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-explore"
              role="tabpanel"
              aria-labelledby="pills-explore-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="best-package-slider">
                    <Slider {...bestpackageslider}>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={500}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={600}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={700}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/sticker-icon.svg"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-01.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Full Body Checkup</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="best-package-card"
                        data-aos="fade-up"
                        data-aos-delay={800}
                      >
                        <div className="package-card-top">
                          <div className="card-img-right">
                            <ImageWithBasePath
                              src="assets/img/icons/medal-icon.svg"
                              className="medal-icon"
                              alt="Img"
                            />
                          </div>
                          <div className="package-icon">
                            <ImageWithBasePath
                              src="assets/img/icons/package-icon-02.svg"
                              alt="Img"
                            />
                          </div>
                          <h3>
                            <Link to="/consultation">Asthma Apply</Link>
                          </h3>
                          <p>
                            A diabetic foot exam can help find problems that can
                            lead to serious infection and ...
                          </p>
                          <ul className="feature-badge">
                            <li>Includes 90 Parameters</li>
                            <li>Includes 20 tests </li>
                          </ul>
                          <div className="package-footer d-flex justify-content-between align-items-center">
                            <div className="package-cost">
                              <h5>
                                $150.25 <span> $199.00</span>
                              </h5>
                            </div>
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                        <div
                          className="package-card-differ overlay-card"
                          data-aos="fade-up"
                          data-aos-delay={700}
                        >
                          <h3>
                            <Link to="/consultation">Urine Analysis</Link>
                          </h3>
                          <p>
                            Allergy testing can be useful at different stages of
                            life, like discovering that a family member...
                          </p>
                          <ul className="features-list">
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Upload Prescription
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Complete Blood Count{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Series Blood Tests{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Hormone Shots{" "}
                            </li>
                            <li>
                              <span>
                                <i className="fa-solid fa-check" />
                              </span>
                              Transactions Lists
                            </li>
                          </ul>
                          <div className="package-footer">
                            <div className="package-btn">
                              <Link to="/patient/booking2">Book Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="how-it-work">
            <div className="section-head-twelve">
              <h2>How It Works</h2>
              <p>
                {" "}
                Uncover the Seamless Process for Easy Navigation and Health
                Solutions.
              </p>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="work-box">
                  <div className="work-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/work-icon-07.svg"
                      alt="Img"
                    />
                  </div>
                  <h4>1. Request your test kit</h4>
                  <p>
                    Take the first step to better health – request your test
                    kit. Simple, convenient, and tailored to empower your
                    wellness journey.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={700}
              >
                <div className="work-box bg-green">
                  <div className="work-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/work-icon-06.svg"
                      alt="Img"
                    />
                  </div>
                  <h4>2. Collect Your Sample</h4>
                  <p>
                    {" "}
                    Collect your sample at your convenience with our
                    easy-to-follow instructions. Streamlined and hassle-free,
                    empowering your health from the comfort of home
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={800}
              >
                <div className="work-box bg-pink">
                  <div className="work-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/work-icon-05.svg"
                      alt="Img"
                    />
                  </div>
                  <h4>3. Receive results in days</h4>
                  <p>
                    Expect your test results within days, ensuring a prompt and
                    efficient turnaround. Stay informed and take control of your
                    health journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Best Packages Section */}
      {/* Booking Lab Test */}
      <section className="booking-lab-test-sec">
        <div className="section-bg">
          <ImageWithBasePath
            src="assets/img/icons/book-lab-bg-01.svg"
            className="best-pack-bg-one"
            alt="Img"
          />
          <ImageWithBasePath
            src="assets/img/icons/book-lab-bg-02.svg"
            className="best-pack-bg-two"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="section-head-twelve">
            <h2>Recent Booked Lab test</h2>
            <p>
              {" "}
              Uncover the Seamless Process for Easy Navigation and Health
              Solutions.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="booking-lab-test-slider slick-margins-15">
                <Slider {...labSlider}>
                  <div
                    className="booking-lab-grid"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="booking-lab-img">
                      <Link to="/consultation">
                        <ImageWithBasePath
                          src="assets/img/blog/book-lab-01.jpg"
                          className="img-fluid"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="ribbon-right">
                      <span className="lab-text-ribbon">25% Offer</span>
                    </div>
                    <div className="booking-lab-content">
                      <ul className="feature-badge">
                        <li>Includes 90 Parameters</li>
                        <li>Includes 20 tests </li>
                      </ul>
                      <h4>
                        <Link to="/consultation">Pregnancy Test</Link>
                      </h4>
                      <p>
                        Confidential Pregnancy Testing, Accurate and Timely
                        Results for Your Peace of Mind
                      </p>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            1499.25 <span> 1999.00</span>
                          </h5>
                        </div>
                        <div className="package-btn">
                          <Link to="/patient/booking2">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="booking-lab-grid"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="booking-lab-img">
                      <Link to="/consultation">
                        <ImageWithBasePath
                          src="assets/img/blog/book-lab-02.jpg"
                          className="img-fluid"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="booking-lab-content">
                      <ul className="feature-badge">
                        <li>Includes 90 Parameters</li>
                        <li>Includes 20 tests </li>
                      </ul>
                      <h4>
                        <Link to="/consultation">Thyroid</Link>
                      </h4>
                      <p>
                        Confidential Pregnancy Testing, Accurate and Timely
                        Results for Your Peace of Mind
                      </p>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            1299.25 <span> 1499.00</span>
                          </h5>
                        </div>
                        <div className="package-btn">
                          <Link to="/patient/booking2">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="booking-lab-grid"
                    data-aos="fade-up"
                    data-aos-delay={700}
                  >
                    <div className="booking-lab-img">
                      <Link to="/consultation">
                        <ImageWithBasePath
                          src="assets/img/blog/book-lab-03.jpg"
                          className="img-fluid"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="booking-lab-content">
                      <ul className="feature-badge">
                        <li>Includes 90 Parameters</li>
                        <li>Includes 20 tests </li>
                      </ul>
                      <h4>
                        <Link to="/consultation">Diabetes Test</Link>
                      </h4>
                      <p>
                        Confidential Pregnancy Testing, Accurate and Timely
                        Results for Your Peace of Mind
                      </p>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            1199.25 <span> 1299.00</span>
                          </h5>
                        </div>
                        <div className="package-btn">
                          <Link to="/patient/booking2">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="booking-lab-grid"
                    data-aos="fade-up"
                    data-aos-delay={800}
                  >
                    <div className="booking-lab-img">
                      <Link to="/consultation">
                        <ImageWithBasePath
                          src="assets/img/blog/book-lab-02.jpg"
                          className="img-fluid"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="booking-lab-content">
                      <ul className="feature-badge">
                        <li>Includes 90 Parameters</li>
                        <li>Includes 20 tests </li>
                      </ul>
                      <h4>
                        <Link to="/consultation">Thyroid</Link>
                      </h4>
                      <p>
                        Confidential Pregnancy Testing, Accurate and Timely
                        Results for Your Peace of Mind
                      </p>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            1299.25 <span> 1499.00</span>
                          </h5>
                        </div>
                        <div className="package-btn">
                          <Link to="/patient/booking2">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Booking Lab Test */}
      {/* Popular Choice */}
      <section className="populr-choice-sec">
        <div className="container">
          <div
            className="section-head-twelve"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <h2>Popular Choices</h2>
            <p>
              Explore Our Top-Tier Packages for Your Personalized Wellness
              Experience
            </p>
          </div>
          <div className="choice-slider-main">
            <div className="row">
              <div className="col-md-12">
                <div className="popular-choice-slider slick-margins-15">
                  <Slider {...popularchoice}>
                    <div
                      className="popular-choice-card"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <div className="choice-head">
                        <h4>
                          <Link to="#">Advanced Renal Package</Link>
                        </h4>
                        <h6>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/gem.svg"
                              alt="Img"
                            />
                          </span>
                          Booked 268 times
                        </h6>
                      </div>
                      <ul className="feature-badge">
                        <li>Includes 08 tests </li>
                      </ul>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            1500.25 <span> 1789.00</span>
                          </h5>
                        </div>
                        <div className="offer-price">
                          <span>60% OFF</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="popular-choice-card"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <div className="choice-head">
                        <h4>
                          <Link to="#">Vitamin D &amp; B12 Combo</Link>
                        </h4>
                        <h6>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/gem.svg"
                              alt="Img"
                            />
                          </span>
                          Booked 785 times
                        </h6>
                      </div>
                      <ul className="feature-badge">
                        <li>Includes 15 tests </li>
                      </ul>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            789.25 <span> 1600.00</span>
                          </h5>
                        </div>
                        <div className="offer-price">
                          <span>30% OFF</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="popular-choice-card"
                      data-aos="fade-up"
                      data-aos-delay={700}
                    >
                      <div className="choice-head">
                        <h4>
                          <Link to="#">Cancer Screening - Male</Link>
                        </h4>
                        <h6>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/gem.svg"
                              alt="Img"
                            />
                          </span>
                          Booked 658 times
                        </h6>
                      </div>
                      <ul className="feature-badge">
                        <li>Includes 20 tests </li>
                      </ul>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            5879.25 <span> 9990.00</span>
                          </h5>
                        </div>
                        <div className="offer-price">
                          <span>20% OFF</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="popular-choice-card"
                      data-aos="fade-up"
                      data-aos-delay={800}
                    >
                      <div className="choice-head">
                        <h4>
                          <Link to="#">Winter Care Health Ch...</Link>
                        </h4>
                        <h6>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/gem.svg"
                              alt="Img"
                            />
                          </span>
                          Booked 268 times
                        </h6>
                      </div>
                      <ul className="feature-badge">
                        <li>Includes 10 tests </li>
                      </ul>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            1499.25 <span> 1999.00</span>
                          </h5>
                        </div>
                        <div className="offer-price">
                          <span>40% OFF</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="popular-choice-card"
                      data-aos="fade-up"
                      data-aos-delay={900}
                    >
                      <div className="choice-head">
                        <h4>
                          <Link to="#">Advanced Renal Package</Link>
                        </h4>
                        <h6>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/gem.svg"
                              alt="Img"
                            />
                          </span>
                          Booked 268 times
                        </h6>
                      </div>
                      <ul className="feature-badge">
                        <li>Includes 08 tests </li>
                      </ul>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            1500.25 <span> 1789.00</span>
                          </h5>
                        </div>
                        <div className="offer-price">
                          <span>60% OFF</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="popular-choice-card"
                      data-aos="fade-up"
                      data-aos-delay={1000}
                    >
                      <div className="choice-head">
                        <h4>
                          <Link to="#">Vitamin D &amp; B12 Combo</Link>
                        </h4>
                        <h6>
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icons/gem.svg"
                              alt="Img"
                            />
                          </span>
                          Booked 785 times
                        </h6>
                      </div>
                      <ul className="feature-badge">
                        <li>Includes 15 tests </li>
                      </ul>
                      <div className="package-footer d-flex justify-content-between align-items-center">
                        <div className="package-cost">
                          <h5>
                            789.25 <span> 1600.00</span>
                          </h5>
                        </div>
                        <div className="offer-price">
                          <span>30% OFF</span>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="book-lab-phno">
              <span>
                Want to Book a Lab Visit,{" "}
                <Link to="#"> Call – +1 234 567 90</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* /Popular Choice */}
      {/* Faq Sec */}
      <section className="faq-sec-twelve">
        <div className="section-bg">
          <ImageWithBasePath
            src="assets/img/icons/faq-sec-bg-icon.svg"
            className="faq-bg-one"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex">
              <div className="faq-sec-col w-100">
                <div className="section-head-twelve">
                  <h2>Frequently Asked Qusetions </h2>
                  <p>Know the Questions from our Customers</p>
                </div>
                <div className="faq-main-cards" id="accordionExample">
                  <div className="faq-card aos" data-aos="fade-up">
                    <div className="faq-title">
                      <Link
                        data-bs-toggle="collapse"
                        to="#faqOne"
                        aria-expanded="false"
                      >
                        <span>What is an otolaryngologist?</span>
                        <div
                          id="faqOne"
                          className="card-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            An otolaryngologist is a doctor who specializes in
                            the diagnosis and treatment of ear, nose and throat
                            diseases as well as related structures of the head
                            and neck. Otolaryngologists are also referred to as
                            ENT doctors or physicians. For more information
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="faq-card aos" data-aos="fade-up">
                    <div className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqtwo"
                        aria-expanded="false"
                      >
                        <span>What is an otolaryngologist?</span>
                        <div
                          id="faqtwo"
                          className="card-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            An otolaryngologist is a doctor who specializes in
                            the diagnosis and treatment of ear, nose and throat
                            diseases as well as related structures of the head
                            and neck. Otolaryngologists are also referred to as
                            ENT doctors or physicians. For more information
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="faq-card aos" data-aos="fade-up">
                    <div className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqthree"
                        aria-expanded="false"
                      >
                        <span>What is an otolaryngologist?</span>
                        <div
                          id="faqthree"
                          className="card-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            An otolaryngologist is a doctor who specializes in
                            the diagnosis and treatment of ear, nose and throat
                            diseases as well as related structures of the head
                            and neck. Otolaryngologists are also referred to as
                            ENT doctors or physicians. For more information
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="faq-card aos" data-aos="fade-up">
                    <div className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqfour"
                        aria-expanded="false"
                      >
                        <span>What is an otolaryngologist?</span>
                        <div
                          id="faqfour"
                          className="card-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <p>
                            An otolaryngologist is a doctor who specializes in
                            the diagnosis and treatment of ear, nose and throat
                            diseases as well as related structures of the head
                            and neck. Otolaryngologists are also referred to as
                            ENT doctors or physicians. For more information
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-6 faq-absolute-col d-felx">
							<div class="faq-sec-bg-img w-100">
								<ImageWithBasePath src="assets/img/faq-sec-img.jpg" class="img-fluid" alt="Img">
							</div>
						</div> */}
          </div>
        </div>
      </section>
      {/* /Faq Sec*/}
      {/* Pricing Sec */}
      <section className="pricing-sec-twelve">
        <div className="container">
          <div className="section-head-twelve">
            <div className="title-head-twelve">
              <h2>Our Pricing </h2>
              <p> Choose the package that best suit you</p>
            </div>
            <ul
              className="nav nav-pills inner-tab "
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-monthly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-monthly"
                  type="button"
                  role="tab"
                  aria-controls="pills-monthly"
                  aria-selected="false"
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-yearly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-yearly"
                  type="button"
                  role="tab"
                  aria-controls="pills-yearly"
                  aria-selected="true"
                >
                  yearly
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content pt-0 dashboard-tab">
            <div
              className="tab-pane fade show active"
              id="pills-monthly"
              role="tabpanel"
              aria-labelledby="pills-monthly-tab"
            >
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 aos"
                  data-aos="flip-left"
                  data-aos-delay={400}
                >
                  <div className="pricing-card-twelve">
                    <div className="icon-price">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/price-icon-06.svg"
                          alt="Img"
                        />
                      </span>
                      <h5>Free</h5>
                    </div>
                    <div className="cost-price">
                      <span>$0</span>
                      <h6>per month</h6>
                    </div>
                    <ul className="price-feature-first">
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        500 Conversations p/m
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        50 Websites
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        20 GB Data Storage
                      </li>
                    </ul>
                    <ul className="price-features-second">
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Everything Off{" "}
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Chat Widget
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Real Time Support
                      </li>
                    </ul>
                    <div className="booking-button text-center">
                      <Link
                        to="/patient/booking1"
                        className="btn btn-primary w-100"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 aos"
                  data-aos="flip-left"
                  data-aos-delay={600}
                >
                  <div className="pricing-card-twelve active">
                    <div className="icon-price">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/price-icon-05.svg"
                          alt="Img"
                        />
                      </span>
                      <h5>Essential</h5>
                      <div className="sticker-ribbon">
                        <ImageWithBasePath
                          src="assets/img/icons/price-sticker-ribbon.svg"
                          alt="Img"
                        />
                      </div>
                    </div>
                    <div className="cost-price">
                      <span>$50</span>
                      <h6>per month</h6>
                    </div>
                    <ul className="price-feature-first">
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        500 Conversations p/m
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        80 Websites
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        25 GB Data Storage
                      </li>
                    </ul>
                    <ul className="price-features-second">
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Everything Off{" "}
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Chat Widget
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Real Time Support
                      </li>
                    </ul>
                    <div className="booking-button text-center">
                      <Link
                        to="/patient/booking1"
                        className="btn btn-primary w-100"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 aos"
                  data-aos="flip-left"
                  data-aos-delay={800}
                >
                  <div className="pricing-card-twelve">
                    <div className="icon-price">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/price-icon-04.svg"
                          alt="Img"
                        />
                      </span>
                      <h5>Team</h5>
                    </div>
                    <div className="cost-price">
                      <span>$200</span>
                      <h6>per month</h6>
                    </div>
                    <ul className="price-feature-first">
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        Unlimited Conversations p/m
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        100 Websites
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        30 GB Data Storage
                      </li>
                    </ul>
                    <ul className="price-features-second">
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Everything Off{" "}
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Chat Widget
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Real Time Support
                      </li>
                    </ul>
                    <div className="booking-button text-center">
                      <Link
                        to="/patient/booking1"
                        className="btn btn-primary w-100"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-yearly"
              role="tabpanel"
              aria-labelledby="pills-yearly-tab"
            >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card-twelve">
                    <div className="icon-price">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/price-icon-06.svg"
                          alt="Img"
                        />
                      </span>
                      <h5>Free</h5>
                    </div>
                    <div className="cost-price">
                      <span>$0</span>
                      <h6>per month</h6>
                    </div>
                    <ul className="price-feature-first">
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        500 Conversations p/m
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        50 Websites
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        20 GB Data Storage
                      </li>
                    </ul>
                    <ul className="price-features-second">
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Everything Off{" "}
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Chat Widget
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Real Time Support
                      </li>
                    </ul>
                    <div className="booking-button text-center">
                      <Link
                        to="/patient/booking1"
                        className="btn btn-primary w-100"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card-twelve active">
                    <div className="icon-price">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/price-icon-05.svg"
                          alt="Img"
                        />
                      </span>
                      <h5>Essential</h5>
                      <div className="sticker-ribbon">
                        <ImageWithBasePath
                          src="assets/img/icons/price-sticker-ribbon.svg"
                          alt="Img"
                        />
                      </div>
                    </div>
                    <div className="cost-price">
                      <span>$50</span>
                      <h6>per month</h6>
                    </div>
                    <ul className="price-feature-first">
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        500 Conversations p/m
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        80 Websites
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        25 GB Data Storage
                      </li>
                    </ul>
                    <ul className="price-features-second">
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Everything Off{" "}
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Chat Widget
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Real Time Support
                      </li>
                    </ul>
                    <div className="booking-button text-center">
                      <Link
                        to="/patient/booking1"
                        className="btn btn-primary w-100"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card-twelve">
                    <div className="icon-price">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/price-icon-04.svg"
                          alt="Img"
                        />
                      </span>
                      <h5>Team</h5>
                    </div>
                    <div className="cost-price">
                      <span>$200</span>
                      <h6>per month</h6>
                    </div>
                    <ul className="price-feature-first">
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        Unlimited Conversations p/m
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        100 Websites
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/heart-pulse.svg"
                            alt="Img"
                          />
                        </span>
                        30 GB Data Storage
                      </li>
                    </ul>
                    <ul className="price-features-second">
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Everything Off{" "}
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Chat Widget
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-plus" />
                        </span>
                        Real Time Support
                      </li>
                    </ul>
                    <div className="booking-button text-center">
                      <Link
                        to="/patient/booking1"
                        className="btn btn-primary w-100"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="various-logo-sec">
            <div className="row">
              <div className="col-md-12">
                <div className="various-logo-slider slick-margins">
                  <Slider {...variouslogoSlider}>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-01.svg"
                        alt="Img"
                      />
                    </div>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-01.svg"
                        alt="Img"
                      />
                    </div>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-02.svg"
                        alt="Img"
                      />
                    </div>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-03.svg"
                        alt="Img"
                      />
                    </div>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-04.svg"
                        alt="Img"
                      />
                    </div>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-05.svg"
                        alt="Img"
                      />
                    </div>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-06.svg"
                        alt="Img"
                      />
                    </div>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-05.svg"
                        alt="Img"
                      />
                    </div>
                    <div className="logo-img-slide">
                      <ImageWithBasePath
                        src="assets/img/icons/various-logo-03.svg"
                        alt="Img"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Sec */}
      {/* Patient About us */}
      <section className="about-us-section-fifteen client-review-twelve">
        <div className="sec-bg">
          <ImageWithBasePath
            src="assets/img/bg/blue-vector-bg-01.png"
            className="blue-shadow-one"
            alt="Img"
          />
          <ImageWithBasePath
            src="assets/img/bg/blue-vector-bg-02.png"
            className="blue-shadow-two"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="section-head-twelve">
            <h2>Popular Choices </h2>
            <p>
              {" "}
              Explore Our Top-Tier Packages for Your Personalized Wellness
              Experience
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aboutus-img-main">
                <ImageWithBasePath
                  src="assets/img/aboutus-fift-1.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div className="slider vertical-slider">
                <Slider {...settings}>
                  {data.map((item, index) => (
                    <div key={index} className="aboutus-fifteen-main">
                      <div className="aboutus-profile-left">
                        <div className="aboutus-image">
                          <img
                            src={item.image}
                            alt="Client"
                            className="img-fluid"
                          />
                        </div>
                        <div className="aboutus-contents">
                          <h6>{item.name}</h6>
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Patient About us */}
      {/* App Section */}
      <section className="app-section app-sec-twelve">
        <div className="container">
          <div className="app-twelve">
            <div className="app-bg">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                  <div className="mobile-img">
                    <ImageWithBasePath
                      src="assets/img/mobile-img.png"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="app-content">
                    <div className="app-header aos" data-aos="fade-up">
                      <h5>Working for Your Better Health.</h5>
                      <h2>Download the Doccure App today!</h2>
                    </div>
                    <div className="app-scan aos" data-aos="fade-up">
                      <p>Scan the QR code to get the app now</p>
                      <ImageWithBasePath
                        src="assets/img/scan-img.png"
                        alt="scan-image"
                      />
                    </div>
                    <div className="google-imgs aos" data-aos="fade-up">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/google-play.png"
                          alt="img"
                        />
                      </Link>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/app-store.png"
                          alt="img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /App Section */}
      <Home12Footer />
    </div>
  );
};

export default Home12;
