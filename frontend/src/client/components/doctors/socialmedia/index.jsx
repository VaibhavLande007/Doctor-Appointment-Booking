import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import DoctorSidebar from "../sidebar";
import Select from "react-select";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const SocialMedia = (props) => {


  const options = [
    { value: 1, label: "Facebook" },
    { value: 2, label: "Linkedin" },
    { value: 3, label: "Twitter" },
    { value: 4, label: "Instagram" },
  ];
  const options1 = [
    { value: 1, label: "Facebook" },
    { value: 2, label: "Linkedin" },
    { value: 3, label: "Twitter" },
    { value: 4, label: "Instagram" },
  ];
  const options2 = [
    { value: 1, label: "Facebook" },
    { value: 2, label: "Linkedin" },
    { value: 3, label: "Twitter" },
    { value: 4, label: "Instagram" },
  ];
  const options3 = [
    { value: 1, label: "Facebook" },
    { value: 2, label: "Linkedin" },
    { value: 3, label: "Twitter" },
    { value: 4, label: "Instagram" },
  ];



  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  const addSocialMedia = () => {
    setSocialMediaLinks([...socialMediaLinks, { platform: '', url: '' }]);
  };



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
                      <a href="/home">
                        <i className="isax isax-home-15" />
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Doctor
                    </li>
                    <li className="breadcrumb-item active">Social Media</li>
                  </ol>
                  <h2 className="breadcrumb-title">Social Media</h2>
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
      <div className="content doctor">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorSidebar />
              {/* /Profile Sidebar */}
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>Social Media</h3>
              </div>
              <div className="add-btn text-end mb-4">
                <Link to="#" className="btn btn-primary prime-btn add-social-media" onClick={addSocialMedia}>
                  Add New Social Media
                </Link>
              </div>
              <form className="social-media-form">
                {socialMediaLinks.map((link, index) => (
                  <div className="social-media-links d-flex align-items-center" key={index}>
                    <div className="input-block input-block-new select-social-link">
                      <Select
                        className="select-social-img me-2"
                        defaultValue={options[0]}
                        options={options}
                        placeholder="Select Platform"
                        isSearchable={false}
                      />
                    </div>
                    <div className="input-block input-block-new flex-fill">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Add Url"
                      />
                    </div>
                  </div>
                ))}

                <div className="social-media-links d-flex align-items-center">
                  <div className="input-block input-block-new select-social-link">
                    <Select
                      className="select-social-img me-2"
                      defaultValue={options1[1]}
                      options={options1}
                      placeholder="English"
                      isSearchable={false}
                    />
                  </div>
                  <div className="input-block input-block-new flex-fill">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Add Url"
                    />
                  </div>
                </div>
                <div className="social-media-links d-flex align-items-center">
                  <div className="input-block input-block-new select-social-link">
                    <Select
                      className="select-social-img me-2"
                      defaultValue={options1[2]}
                      options={options1}
                      placeholder="English"
                      isSearchable={false}
                    />
                  </div>
                  <div className="input-block input-block-new flex-fill">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Add Url"
                    />
                  </div>
                </div>
                <div className="social-media-links d-flex align-items-center">
                  <div className="input-block input-block-new select-social-link">
                    <Select
                      className="select-social-img me-2"
                      defaultValue={options2[3]}
                      options={options2}
                      isSearchable={false}
                    />
                  </div>
                  <div className="input-block input-block-new flex-fill">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Add Url"
                    />
                  </div>
                </div>
                <div className="social-media-links d-flex align-items-center">
                  <div className="input-block input-block-new select-social-link">
                    <Select
                      className="select-social-img me-2"
                      defaultValue={options3[0]}
                      options={options3}
                      placeholder="English"
                      isSearchable={false}
                    />
                  </div>
                  <div className="input-block input-block-new flex-fill">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Add Url"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default SocialMedia;
