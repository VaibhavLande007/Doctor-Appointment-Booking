import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import Avatar from "./avatar";
import Alerts from "./alerts";
import Breadcrumbs from "./breadcrumbs";
import Buttons from "./buttons";
import Cards from "./cards";
import Dropdown from "./dropdown";
import Pagination from "./pagination";
import Progress from "./progress";
import Tabs from "./tabs";
import Typography from "./typography";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Components = (props) => {
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
                      <Link href="/home">
                        <i className="isax isax-home-15" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">Components</li>
                  </ol>
                  <h2 className="breadcrumb-title">Components</h2>
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
          <div className="comp-sec-wrapper">
            {/* Avatar */}
            <Avatar />

            {/* Alerts */}
            <Alerts />

            {/* Breadcrumbs */}
            <Breadcrumbs />

            {/* Buttons */}
            <Buttons />

            {/* Cards */}
            <Cards />

            {/* Dropdowns */}
            <Dropdown />

            {/* Pagination */}
            <Pagination />

            {/* Progress */}
            <Progress />

            {/* Tabs */}
            <Tabs />

            {/* Typography */}
            <Typography />
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <Footer {...props} />
    </>
  );
};

export default Components;
