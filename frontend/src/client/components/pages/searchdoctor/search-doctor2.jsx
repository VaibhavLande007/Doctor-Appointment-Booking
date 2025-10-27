import React, { useEffect, useState } from "react";
import Header from "../../header";
// import Searchfilter from "./searchFilter";
import StickyBox from "react-sticky-box";
import Doctors from "./doctors";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import Searchfilter from "./searchfilter";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
// import Slider from "react-slider";

const SearchDoctor2 = (props) => {
  // let pathname = props.location.pathname;

  // if (props.location.pathname === "/patient/search-doctor2") {
  //   require("../../../assets/css/feather.css");
  // }
  const [minValue, setMinValue] = useState(10);
  const [maxValue, setMaxValue] = useState(5000);

  useEffect(() => {
    if (document.getElementById("price-range")) {
      setMinValue(10);
      setMaxValue(10000);

      const slider = document.getElementById("price-range");
      slider.addEventListener("input", handleSliderChange);

      return () => {
        slider.removeEventListener("input", handleSliderChange);
      };
    }
  }, []);

  const handleSliderChange = (event) => {
    const min = parseInt(event.target.value.split(",")[0]);
    const max = parseInt(event.target.value.split(",")[1]);

    setMinValue(min);
    setMaxValue(max);
  };
  return (
    <div className="main-wrapper">
      <Header {...props} />

      {/* Breadcrumb */}
      <div className="breadcrumb-bar overflow-visible">
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
                  <li className="breadcrumb-item">Doctor</li>
                  <li className="breadcrumb-item active">Doctor Grid</li>
                </ol>
                <h2 className="breadcrumb-title">Doctor Grid</h2>
              </nav>
            </div>
          </div>
          <div className="bg-primary-gradient rounded-pill doctors-search-box">
            <div className="search-box-one rounded-pill">
              <form>
                <div className="search-input search-line">
                  <i className="isax isax-hospital5 bficon" />
                  <div className=" mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for Doctors, Hospitals, Clinics"
                    />
                  </div>
                </div>
                <div className="search-input search-map-line">
                  <i className="isax isax-location5" />
                  <div className=" mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="search-input search-calendar-line">
                  <i className="isax isax-calendar-tick5" />
                  <div className=" mb-0">
                    <DatePicker
                      className="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                    />
                  </div>
                </div>
                <div className="form-search-btn">
                  <button
                    className="btn btn-primary d-inline-flex align-items-center rounded-pill"
                    type="submit"
                  >
                    <i className="isax isax-search-normal-15 me-2" />
                    Search
                  </button>
                </div>
              </form>
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

      <div className="doctor-content content">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 map-view">
              <div className="row">
                <div className="col-lg-3  theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                   <Searchfilter/>
                  </StickyBox>
                </div>

                <div className="col-lg-9">
                  <Doctors />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </div>
  );
};

export default SearchDoctor2;
