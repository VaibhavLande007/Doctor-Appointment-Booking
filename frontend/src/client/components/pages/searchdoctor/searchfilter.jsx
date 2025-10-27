import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { DatePicker, Slider } from "antd";

const Searchfilter = () => {
    const formatter = (value) => `$${value}`;
  
    const [showMenu,setShowMenu] = useState(false)
      const [showMenu2,setShowMenu2] = useState(false)
      const [showMenu3,setShowMenu3] = useState(false)
      const [showMenu4,setShowMenu4] = useState(false)

  return (
    <div className="card filter-lists">
    <div className="card-header">
      <div className="d-flex align-items-center filter-head justify-content-between">
        <h4>Filter</h4>
        <Link to="#" className="text-secondary text-decoration-underline">
          Clear All
        </Link>
      </div>
      <div className="filter-input">
        <div className="position-relative input-icon">
          <input type="text" className="form-control" />
          <span>
            <i className="isax isax-search-normal-1" />
          </span>
        </div>
      </div>
    </div>
    <div className="card-body p-0">
      <div className="accordion-item border-bottom">
        <div className="accordion-header" id="heading1">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-controls="collapse1"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Specialities</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse1"
          className="accordion-collapse show"
          aria-labelledby="heading1"
        >
          <div className="accordion-body pt-3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm2"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm2"
                >
                  Urology
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm3"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm3"
                >
                  Psychiatry
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm4"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm4"
                >
                  Cardiology
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm5"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm5"
                >
                  Pediatrics
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm6"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm6"
                >
                  Urology
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm7"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm7"
                >
                  Neurology
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm8"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm8"
                >
                  Pulmonology
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
            <div className="view-content" >
              <div className="viewall-one" style={{ display: !showMenu ? 'none' : 'block' }}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm9"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkebox-sm9"
                    >
                      Orthopedics
                    </label>
                  </div>
                  <span className="filter-badge">21</span>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm10"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkebox-sm10"
                    >
                      Endocrinology
                    </label>
                  </div>
                  <span className="filter-badge">21</span>
                </div>
              </div>
              <div className="view-all">
                <Link
                  to="#" onClick={()=>{setShowMenu(!showMenu)}}
                  className="viewall-button-one text-secondary text-decoration-underline"
                >
                  {showMenu ?'View Less':'View More'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-bottom">
        <div className="accordion-header" id="heading2">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-controls="collapse2"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Gender</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse2"
          className="accordion-collapse show"
          aria-labelledby="heading2"
        >
          <div className="accordion-body pt-3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm11"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm11"
                >
                  Male
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm12"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm12"
                >
                  Female
                </label>
              </div>
              <span className="filter-badge">21</span>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-bottom">
        <div className="accordion-header" id="heading3">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse3"
            aria-controls="collapse3"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Availability</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse3"
          className="accordion-collapse show"
          aria-labelledby="heading3"
        >
          <div className="accordion-body pt-3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm13"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm13"
                >
                  Available Today
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm14"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm14"
                >
                  Available Tomorrow
                </label>
              </div>
            </div>
            <div className="view-content">
              <div className="viewall-two" style={{display: !showMenu2 ?'none':'block'}}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm15"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkebox-sm15"
                    >
                      Available in Next 7 Days
                    </label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm16"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkebox-sm16"
                    >
                      Available in Next 30 Days
                    </label>
                  </div>
                </div>
              </div>
              <div className="view-all">
                <Link
                  to="#" onClick={()=>{setShowMenu2(!showMenu2)}}
                  className="viewall-button-two text-secondary text-decoration-underline"
                >
                 {showMenu ?'View Less':'View More'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-bottom">
        <div className="accordion-header" id="heading4">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse4"
            aria-controls="collapse4"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Pricing</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse4"
          className="accordion-collapse show"
          aria-labelledby="heading4"
        >
          <div className="accordion-body pt-3">
            <div className="filter-range">
            <Slider range tooltip={{ formatter }}  min={200} max={5695} defaultValue={[500, 2000]}  />
            </div>
            <p className="mb-0">Range : $200 - $5695</p>
          </div>
        </div>
      </div>
      <div className="accordion-item border-bottom">
        <div className="accordion-header" id="heading5">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse5"
            aria-controls="collapse5"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Experience</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse5"
          className="accordion-collapse show"
          aria-labelledby="heading5"
        >
          <div className="accordion-body pt-3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm21"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm21"
                >
                  2+ Years
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm22"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm22"
                >
                  5+ Years
                </label>
              </div>
            </div>
            <div className="view-content">
              <div className="viewall-3" style={{display: !showMenu3 ?'none':'block'}}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm23"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkebox-sm23"
                    >
                      7+ Years
                    </label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm24"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkebox-sm24"
                    >
                      10+ Years
                    </label>
                  </div>
                </div>
              </div>
              <div className="view-all">
                <Link
                  to="#" onClick={()=>{setShowMenu3(!showMenu3)}}
                  className="viewall-button-3 text-secondary text-decoration-underline"
                >
                 {showMenu2 ?'View Less':'View All'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-bottom">
        <div className="accordion-header" id="heading6">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse6"
            aria-controls="collapse6"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Clinics</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse6"
          className="accordion-collapse show"
          aria-labelledby="heading6"
        >
          <div className="accordion-body pt-3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm25"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm25"
                >
                  Bright Smiles Dental Clinic
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm26"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm26"
                >
                  Family Care Clinic
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm27"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm27"
                >
                  Express Health Clinic
                </label>
              </div>
            </div>
            <div className="view-content">
              <div className="viewall-4" style={{ display: !showMenu4 ? 'none' : 'block' }}>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm28"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkebox-sm28"
                    >
                      Restore Physical Therapy
                    </label>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm29"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkebox-sm29"
                    >
                      Blossom Women’s Health Clinic
                    </label>
                  </div>
                </div>
              </div>
              <div className="view-all">
                <Link
                  to="#" onClick={()=>{setShowMenu4(!showMenu4)}}
                  className="viewall-button-4 text-secondary text-decoration-underline"
                >
                  {showMenu4 ?'View Less':'View More'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-bottom">
        <div className="accordion-header" id="heading7">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse7"
            aria-controls="collapse7"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Consultation type</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse7"
          className="accordion-collapse show"
          aria-labelledby="heading7"
        >
          <div className="accordion-body pt-3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm30"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm30"
                >
                  Audio Call
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm31"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm31"
                >
                  Video Call
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm32"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm32"
                >
                  Instant Counseling
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm33"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm33"
                >
                  Chat
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item border-bottom">
        <div className="accordion-header" id="heading8">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-controls="collapse8"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Languages</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse8"
          className="accordion-collapse show"
          aria-labelledby="heading8"
        >
          <div className="accordion-body pt-3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm34"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm34"
                >
                  English
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm35"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm35"
                >
                  French
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm36"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm36"
                >
                  Spanish
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm37"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm37"
                >
                  German
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header" id="heading9">
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse9"
            aria-controls="collapse9"
            role="button"
          >
            <div className="d-flex align-items-center w-100">
              <h5>Languages</h5>
              <div className="ms-auto">
                <span>
                  <i className="fas fa-chevron-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          id="collapse9"
          className="accordion-collapse show"
          aria-labelledby="heading9"
        >
          <div className="accordion-body pt-3">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm38"
                  defaultChecked=""
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm38"
                >
                  <span>
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                  </span>
                  5 Star
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm39"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm39"
                >
                  <span>
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                  </span>
                  4 Star
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm40"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm40"
                >
                  <span>
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                  </span>
                  3 Star
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm41"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm41"
                >
                  <span>
                    <i className="fa-solid fa-star text-orange me-1" />
                    <i className="fa-solid fa-star text-orange me-1" />
                  </span>
                  2 Star
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="checkebox-sm42"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkebox-sm42"
                >
                  <span>
                    <i className="fa-solid fa-star text-orange me-1" />
                  </span>
                  1 Star
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Searchfilter;
