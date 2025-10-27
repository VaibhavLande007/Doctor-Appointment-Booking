import React from "react";
import Header from "../../header";
import DoctorFooter from "../../common/doctorFooter";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import {
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_04,
  doctor_thumb_08,
  doctorprofileimg,
} from "../../imagepath";
import { doctor_thumb_06 } from "../../../../admin/components/imagepath";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Accounts = (props) => {
  return (
    <div>
      <div className="main-wrapper">
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
                      <li className="breadcrumb-item active">Accounts</li>
                    </ol>
                    <h2 className="breadcrumb-title">Accounts</h2>
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
                <div className="accunts-sec">
                  <div className="dashboard-header">
                    <div className="header-back">
                      <h3>Accounts</h3>
                    </div>
                  </div>
                  <div className="account-details-box">
                    <div className="row">
                      <div className="col-xxl-6 col-lg-7">
                        <div className="account-payment-info">
                          <h4>Statistics</h4>
                          <div className="row">
                            <div className="col-lg-4 col-md-6">
                              <div className="payment-amount">
                                <h6>
                                  <i className="fa-solid fa-file-invoice-dollar text-success" />
                                  Total Balance
                                </h6>
                                <span>$900</span>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="payment-amount">
                                <h6>
                                  <i className="fa-solid fa-money-bill-1 text-orange" />
                                  Earned
                                </h6>
                                <span>$906</span>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="payment-amount">
                                <h6>
                                  <i className="fa-solid fa-circle-question text-pink" />
                                  Requested
                                </h6>
                                <span>$50</span>
                              </div>
                            </div>
                          </div>
                          <div className="payment-request">
                            <span>Last Payment request : 24 Mar 2023</span>
                            <Link
                              to="#payment_request"
                              className="btn btn-primary prime-btn"
                              data-bs-toggle="modal"
                            >
                              Request Payment
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-1 d-lg-none d-xxl-block" />
                      <div className="col-lg-5">
                        <div className="bank-details-info">
                          <h3>Bank Details</h3>
                          <ul>
                            <li>
                              <h6>Bank Name</h6>
                              <h5>Citi Bank Inc</h5>
                            </li>
                            <li>
                              <h6>Account Number</h6>
                              <h5>5396 5250 1908 XXXX</h5>
                            </li>
                            <li>
                              <h6>Branch Name</h6>
                              <h5>London</h5>
                            </li>
                            <li>
                              <h6>Account Name</h6>
                              <h5>Darren</h5>
                            </li>
                          </ul>
                          <div className="edit-detail-link">
                            <Link to="#account_details" data-bs-toggle="modal">
                              Edit Details
                            </Link>
                            <Link to="#other_accounts" data-bs-toggle="modal">
                              Other Accounts
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="account-detail-table">
                      {/* Tab Menu */}
                      <nav className="accounts-tab">
                        <ul className="nav nav-tabs-bottom">
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              to="#pat_accounts"
                              data-bs-toggle="tab"
                            >
                              Accounts
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              to="#pat_refundrequest"
                              data-bs-toggle="tab"
                            >
                              Refund Request
                            </Link>
                          </li>
                        </ul>
                      </nav>
                      {/* /Tab Menu */}
                      {/* Tab Content */}
                      <div className="tab-content pt-0">
                        {/* Accounts Tab */}
                        <div
                          id="pat_accounts"
                          className="tab-pane fade show active"
                        >
                          <ul className="header-list-btns d-inline-block mb-4">
                            <li>
                              <div className="input-block dash-search-input">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search"
                                />
                                <span className="search-icon">
                                  <i className="fa-solid fa-magnifying-glass" />
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="custom-new-table">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>ID</th>
                                    <th>Requested Date</th>
                                    <th>Account No</th>
                                    <th>Credited On</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1234
                                        </span>
                                      </Link>
                                    </td>
                                    <td>24 Mar 2025</td>
                                    <td>5396 5250 1908 XXXX</td>
                                    <td>26 Mar 2025</td>
                                    <td>$300</td>
                                    <td>
                                      <span className="badge badge-success-bg">
                                        Completed
                                      </span>
                                    </td>
                                    <td>
                                      <Link
                                        to="#request_details_modal"
                                        className="account-action"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1235
                                        </span>
                                      </Link>
                                    </td>
                                    <td>28 Mar 2025</td>
                                    <td>8833 8942 9013 XXXX</td>
                                    <td>30 Mar 2025</td>
                                    <td>$400</td>
                                    <td>
                                      <span className="badge badge-success-bg">
                                        Completed
                                      </span>
                                    </td>
                                    <td>
                                      <Link
                                        to="#request_details_modal"
                                        className="account-action"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1236
                                        </span>
                                      </Link>
                                    </td>
                                    <td>02 Apr 2025</td>
                                    <td>8920 4041 4725 XXXX</td>
                                    <td>04 Apr 2025</td>
                                    <td>$350</td>
                                    <td>
                                      <span className="badge badge-danger-bg">
                                        Cancelled
                                      </span>
                                    </td>
                                    <td>
                                      <Link
                                        to="#request_cancel_modal"
                                        className="account-action"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1237
                                        </span>
                                      </Link>
                                    </td>
                                    <td>10 Apr 2025</td>
                                    <td>5730 4892 0492 XXXX</td>
                                    <td>12 Apr 2025</td>
                                    <td>$220</td>
                                    <td>
                                      <span className="badge badge-warning-bg">
                                        Pending
                                      </span>
                                    </td>
                                    <td>
                                      <Link to="#" className="account-action">
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1238
                                        </span>
                                      </Link>
                                    </td>
                                    <td>16 Apr 2025</td>
                                    <td>7922 9024 5824 XXXX</td>
                                    <td>18 Apr 2025</td>
                                    <td>$470</td>
                                    <td>
                                      <span className="badge badge-success-bg">
                                        Completed
                                      </span>
                                    </td>
                                    <td>
                                      <Link
                                        to="#request_details_modal"
                                        className="account-action"
                                        data-bs-toggle="modal"
                                      >
                                        <i className="isax isax-link-2" />
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
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
                        {/* /Accounts Tab */}
                        {/* Refund Request Tab */}
                        <div className="tab-pane fade" id="pat_refundrequest">
                          <ul className="header-list-btns d-inline-block mb-4">
                            <li>
                              <div className="input-block dash-search-input">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search"
                                />
                                <span className="search-icon">
                                  <i className="fa-solid fa-magnifying-glass" />
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="custom-new-table">
                            <div className="table-responsive">
                              <table className="table table-hover table-center mb-0">
                                <thead>
                                  <tr>
                                    <th>ID</th>
                                    <th>Patient</th>
                                    <th>Appointment Date</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1234
                                        </span>
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="table-avtatar">
                                        <Link to="/doctor/patient-profile">
                                          <img
                                            src={doctorprofileimg}
                                            alt="Img"
                                          />
                                          Edalin Hendry
                                        </Link>
                                      </div>
                                    </td>
                                    <td>24 Mar 2025 - 10:30 AM</td>
                                    <td>$300</td>
                                    <td>
                                      <span className="badge badge-success-bg">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="account-action me-2"
                                        >
                                          <i className="isax isax-link-2" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-success me-2"
                                        >
                                          <i className="fa-solid fa-check" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-danger me-2"
                                        >
                                          <i className="fa-solid fa-x" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1235
                                        </span>
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="table-avtatar">
                                        <Link to="/doctor/patient-profile">
                                          <img
                                            src={doctor_thumb_01}
                                            alt="Img"
                                          />
                                          Shanta Neill
                                        </Link>
                                      </div>
                                    </td>
                                    <td>28 Mar 2025 - 11:15 AM</td>
                                    <td>$250</td>
                                    <td>
                                      <span className="badge badge-success-bg">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="account-action me-2"
                                        >
                                          <i className="isax isax-link-2" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-success me-2"
                                        >
                                          <i className="fa-solid fa-check" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-danger me-2"
                                        >
                                          <i className="fa-solid fa-x" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1236
                                        </span>
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="table-avtatar">
                                        <Link to="/doctor/patient-profile">
                                          <img
                                            src={doctor_thumb_02}
                                            alt="Img"
                                          />
                                          Anthony Tran
                                        </Link>
                                      </div>
                                    </td>
                                    <td>02 Apr 2025 - 04:15 PM</td>
                                    <td>$380</td>
                                    <td>
                                      <span className="badge badge-success-bg">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="account-action me-2"
                                        >
                                          <i className="isax isax-link-2" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-success me-2"
                                        >
                                          <i className="fa-solid fa-check" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-danger me-2"
                                        >
                                          <i className="fa-solid fa-x" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1237
                                        </span>
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="table-avtatar">
                                        <Link to="/doctor/patient-profile">
                                          <img
                                            src={doctor_thumb_04}
                                            alt="Img"
                                          />
                                          Susan Lingo
                                        </Link>
                                      </div>
                                    </td>
                                    <td>13 Apr 2025 - 05:30 PM</td>
                                    <td>$400</td>
                                    <td>
                                      <span className="badge badge-warning-bg">
                                        Pending
                                      </span>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="account-action me-2"
                                        >
                                          <i className="isax isax-link-2" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-success me-2"
                                        >
                                          <i className="fa-solid fa-check" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-danger me-2"
                                        >
                                          <i className="fa-solid fa-x" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1238
                                        </span>
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="table-avtatar">
                                        <Link to="/doctor/patient-profile">
                                          <img
                                            src={doctor_thumb_08}
                                            alt="Img"
                                          />
                                          Joseph Boyd
                                        </Link>
                                      </div>
                                    </td>
                                    <td>21 Apr 2025 - 12:30 PM</td>
                                    <td>$320</td>
                                    <td>
                                      <span className="badge badge-success-bg">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="account-action me-2"
                                        >
                                          <i className="isax isax-link-2" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-success me-2"
                                        >
                                          <i className="fa-solid fa-check" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-danger me-2"
                                        >
                                          <i className="fa-solid fa-x" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <Link to="#">
                                        <span className="text-blue">
                                          #AC-1239
                                        </span>
                                      </Link>
                                    </td>
                                    <td>
                                      <div className="table-avtatar">
                                        <Link to="/doctor/patient-profile">
                                          <img
                                            src={doctor_thumb_06}
                                            alt="Img"
                                          />
                                          Juliet Grabriel
                                        </Link>
                                      </div>
                                    </td>
                                    <td>17 May 2025 - 09:20 AM</td>
                                    <td>$280</td>
                                    <td>
                                      <span className="badge badge-success-bg">
                                        Paid
                                      </span>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <Link
                                          to="#"
                                          className="account-action me-2"
                                        >
                                          <i className="isax isax-link-2" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-success me-2"
                                        >
                                          <i className="fa-solid fa-check" />
                                        </Link>
                                        <Link
                                          to="#"
                                          className="account-action text-danger me-2"
                                        >
                                          <i className="fa-solid fa-x" />
                                        </Link>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
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
                        {/* /Refund Request Tab */}
                      </div>
                      {/* Tab Content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* Payment Request Moodal */}
      <div className="modal fade custom-modal custom-modal-two " id="payment_request">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Payment Request <span className="text-danger request-id">Request ID : #RQ-1323</span></h5>
              <button type="button" data-bs-dismiss="modal" aria-label="Close">
                <span><i className="fa-solid fa-x" /></span>
              </button>
            </div>
            <div className="modal-body">
              <form action="/doctor/account">
                <div className="input-block input-block-new">
                  <label className="form-label">Request Amount</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block input-block-new">
                  <label className="form-label">Description</label>
                  <textarea rows={3} className="form-control" defaultValue={""} />
                </div>
                <div className="form-set-button">
                  <button className="btn btn-light" type="button">Cancel</button>
                  <button className="btn btn-primary" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Payment Request Moodal */}
      {/* Account Details Modal*/}
      <div
        className="modal fade custom-modal custom-modal-two "
        id="account_details"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Account Details</h5>
              <button type="button" data-bs-dismiss="modal" aria-label="Close">
                <span>
                  <i className="fa-solid fa-x" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block input-block-new">
                  <label className="form-label">Bank Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block input-block-new">
                  <label className="form-label">Branch Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block input-block-new">
                  <label className="form-label">Account Number</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block input-block-new">
                  <label className="form-label">Account Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-set-button">
                  <button className="btn btn-light" type="button">
                    Cancel
                  </button>
                  <button className="btn btn-primary" type="submit">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Account Details Modal*/}
      {/* Other Accounts Modal*/}
      <div
        className="modal fade custom-modal custom-modal-two "
        id="other_accounts"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Other Accounts</h5>
              <button type="button" data-bs-dismiss="modal" aria-label="Close">
                <span>
                  <i className="fa-solid fa-x" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="other-accounts-info">
                <ul>
                  <li>
                    <ul className="other-bank-info">
                      <li>
                        <h6>Name</h6>
                        <span>Citi Bank Inc</span>
                      </li>
                      <li>
                        <h6>Account No</h6>
                        <span>5396 5250 1908 XXXX</span>
                      </li>
                      <li>
                        <h6>Branch</h6>
                        <span>London</span>
                      </li>
                      <li>
                        <h6>Name on Bank Account</h6>
                        <span>Edalin Hendry</span>
                      </li>
                      <li>
                        <Link to="#">Current</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="other-bank-info">
                      <li>
                        <h6>Name</h6>
                        <span>HDFC Bank Inc</span>
                      </li>
                      <li>
                        <h6>Account No</h6>
                        <span>7382 4924 4924 XXXX</span>
                      </li>
                      <li>
                        <h6>Branch</h6>
                        <span>New York</span>
                      </li>
                      <li>
                        <h6>Name on Bank Account</h6>
                        <span>Edalin Hendry</span>
                      </li>
                      <li>
                        <Link to="#">Change to default</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="other-bank-info">
                      <li>
                        <h6>Name</h6>
                        <span>Union Bank Inc</span>
                      </li>
                      <li>
                        <h6>Account No</h6>
                        <span>8934 4902 9024 XXXX</span>
                      </li>
                      <li>
                        <h6>Branch</h6>
                        <span>Chicago</span>
                      </li>
                      <li>
                        <h6>Name on Bank Account</h6>
                        <span>Edalin Hendry</span>
                      </li>
                      <li>
                        <Link to="#">Change to default</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="other-bank-info">
                      <li>
                        <h6>Name</h6>
                        <span>KVB Bank Inc</span>
                      </li>
                      <li>
                        <h6>Account No</h6>
                        <span>5892 4920 4829 XXXX</span>
                      </li>
                      <li>
                        <h6>Branch</h6>
                        <span>Austin</span>
                      </li>
                      <li>
                        <h6>Name on Bank Account</h6>
                        <span>Edalin Hendry</span>
                      </li>
                      <li>
                        <Link to="#">Change to default</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <Link
                  to="#"
                  className="btn btn-primary prime-btn w-100 mt-2"
                  data-bs-dismiss="modal"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Other Accounts Modal*/}
      {/* Request Completed Modal*/}
      <div
        className="modal fade custom-modal custom-modal-two"
        id="request_details_modal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Request Details{" "}
                <span className="badge badge-success-bg">Completed</span>
              </h5>
              <button type="button" data-bs-dismiss="modal" aria-label="Close">
                <span>
                  <i className="fa-solid fa-x" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="completed-request">
                <ul>
                  <li>
                    <h6>ID</h6>
                    <span>#AC-1234</span>
                  </li>
                  <li>
                    <h6>Requested on</h6>
                    <span>24 Mar 2025</span>
                  </li>
                  <li>
                    <h6>Credited Date</h6>
                    <span>24 Mar 2025</span>
                  </li>
                  <li>
                    <h6>Amount</h6>
                    <span className="text-blue">$300</span>
                  </li>
                </ul>
                <div className="bank-detail">
                  <h4>Bank Details</h4>
                  <div className="accont-information">
                    <h6>Name</h6>
                    <span>Citi Bank Inc</span>
                  </div>
                  <div className="accont-information">
                    <h6>Account No</h6>
                    <span>5396 5250 1908 XXXX</span>
                  </div>
                  <div className="accont-information">
                    <h6>Branch</h6>
                    <span>London</span>
                  </div>
                </div>
                <div className="request-des">
                  <h4>Reqeust Description</h4>
                  <p>
                    I recently completed a series of dental treatments with
                    Dr.Edalin Hendry, and I couldn't be more pleased with the
                    results. From my very first appointment.
                  </p>
                </div>
                <a
                  href="#"
                  className="btn btn-primary prime-btn w-100"
                  data-bs-dismiss="modal"
                >
                  Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Request Completed Modal*/}
      <DoctorFooter {...props} />
    </div>
  );
};

export default Accounts;
