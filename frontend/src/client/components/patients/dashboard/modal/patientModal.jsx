import React, { useState } from 'react'
import ImageWithBasePath from '../../../../../core/img/imagewithbasebath'
import { Link } from "react-router-dom";
import Select from "react-select";
import "react-datepicker/src/stylesheets/datepicker.scss";
import { DatePicker } from 'antd';

const PatientModal = () => {

  const gender = [
    { value: "", label: "Select Gender" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  return (
    <div>
      <>
        {/* Add Dependent Modal*/}
        <div className="modal fade custom-modals" id="add_dependent">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Add Dependant</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <form action="#">
                <div className="add-dependent">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-wrap pb-0">
                          <div className="change-avatar img-upload">
                            <div className="profile-img">
                              <i className="fa-solid fa-file-image" />
                            </div>
                            <div className="upload-img">
                              <h5>Profile Image</h5>
                              <div className="imgs-load d-flex align-items-center">
                                <div className="change-photo">
                                  Upload New
                                  <input type="file" className="upload" />
                                </div>
                                <Link to="#" className="upload-remove">
                                  Remove
                                </Link>
                              </div>
                              <p>
                                Your Image should Below 4 MB, Accepted format
                                jpg,png,svg
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Name</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Relationship</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            DOB <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon">
                            <DatePicker
                              className="form-control datetimepicker"
                              placeholder="dd/mm/yyyy"
                            />
                            <span className="icon">
                              <i className="fa-regular fa-calendar-days" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Select Gender</label>
                          <Select
                            className="select"
                            options={gender}
                            placeholder="Select Gender"
                            isClearable={true}
                            isSearchable={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="modal-btn text-end">
                    <Link
                      to="#"
                      className="btn btn-gray"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <Link to="#" data-bs-dismiss="modal" className="btn btn-primary prime-btn">
                      Save Changes
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Dependent Modal*/}
        {/*View Invoice */}
        <div className="modal fade custom-modals" id="invoice_view">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">View Invoice</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body pb-0">
                <div className="prescribe-download">
                  <h5>21 Mar 2025</h5>
                  <ul>
                    <li>
                      <Link to="#" className="print-link">
                        <i className="isax isax-printer" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="btn btn-md btn-primary-gradient rounded-pill"
                      >
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="view-prescribe invoice-content mb-0">
                  <div className="invoice-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="invoice-logo">
                          <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="invoice-details">
                          Invoice No : <span> #INV005</span>
                          <br />
                          Issued: <span>21 Mar 2025</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Invoice Item */}
                  <div className="invoice-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="invoice-info">
                          <h6 className="customer-text">Billing From</h6>
                          <p className="invoice-details invoice-details-two">
                            Edalin Hendry <br />
                            806 Twin Willow Lane, <br />
                            Newyork, USA <br />
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="invoice-info">
                          <h6 className="customer-text">Billing To</h6>
                          <p className="invoice-details invoice-details-two">
                            Richard Wilson <br />
                            299 Star Trek Drive
                            <br />
                            Florida, 32405, USA
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="invoice-info invoice-info2">
                          <h6 className="customer-text">Payment Method</h6>
                          <p className="invoice-details">
                            Debit Card <br />
                            XXXXXXXXXXXX-2541
                            <br />
                            HDFC Bank
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  {/* Invoice Item */}
                  <div className="invoice-item invoice-table-wrap">
                    <div className="row">
                      <div className="col-md-12">
                        <h6>Invoice Details</h6>
                        <div className="invoice-table">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Description</th>
                                  <th>Quatity</th>
                                  <th>VAT</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-gray-9">
                                    General Consultation
                                  </td>
                                  <td>1</td>
                                  <td>$0</td>
                                  <td>$150</td>
                                </tr>
                                <tr>
                                  <td className="text-gray-9">Video Call</td>
                                  <td>1</td>
                                  <td>$0</td>
                                  <td>$100</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 ms-auto">
                        <div className="table-responsive">
                          <table className="invoice-table-two table">
                            <tbody>
                              <tr>
                                <th>Subtotal:</th>
                                <td>
                                  <span>$350</span>
                                </td>
                              </tr>
                              <tr>
                                <th>Discount:</th>
                                <td>
                                  <span>-10%</span>
                                </td>
                              </tr>
                              <tr>
                                <th>Total Amount:</th>
                                <td>
                                  <span>$315</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  {/* Invoice Information */}
                  <div className="other-info mb-0">
                    <h6 className="mb-2">Other information</h6>
                    <p className="text-gray-9 mb-0">
                      An account of the present illness, which includes the
                      circumstances surrounding the onset of recent health changes and
                      the chronology of subsequent events that have led the patient to
                      seek medicine
                    </p>
                  </div>
                  {/* /Invoice Information */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /View Invoice */}
        {/*View Report */}
        <div className="modal fade custom-modals" id="view_report">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">View Report</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body pb-0">
                <div className="prescribe-download gap-2">
                  <h5>21 Mar 2025</h5>
                  <ul>
                    <li>
                      <Link to="#" className="print-link">
                        <i className="isax isax-printer5" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="btn btn-md btn-primary-gradient rounded-pill"
                      >
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="view-prescribe-details p-0 border-0">
                  {/* Invoice Item */}
                  <div className="invoice-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="invoice-info d-flex align-items-center">
                          <div className="clinic-image d-inline-flex align-items-center justify-content-center">
                            <ImageWithBasePath src="assets/img/icons/vtaplus.svg" alt="img" />
                          </div>
                          <div>
                            <h6 className="fs-16 fw-semibold">Vitalplus Clinic</h6>
                            <p className="fs-14 fw-medium">Dr. Sandy Maria</p>
                            <p className="fs-14">MBLS,MS</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="invoice-info2">
                          <p>
                            <span>Test Type : </span>CBC
                          </p>
                          <p>
                            <span>Collected On : </span>20 Mar 2025, 10:00 AM
                          </p>
                          <p>
                            <span>Reported On :</span>21 Mar 2025, 11:00 AM
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="patient-infos d-flex align-items-center justify-content-between gap-3 flex-wrap">
                          <div className="d-flex align-items-center">
                            <span className="avatar me-2">
                              <ImageWithBasePath
                                src="assets/img/doctors-dashboard/profile-06.jpg"
                                className="rounded"
                                alt="img"
                              />
                            </span>
                            <div>
                              <h6 className="fs-14 fw-medium">Hendrita Kearns</h6>
                              <p>Patient ID : PT254654</p>
                            </div>
                          </div>
                          <div>
                            <h6 className="fs-14 fw-medium">Gender</h6>
                            <p>Female</p>
                          </div>
                          <div>
                            <h6 className="fs-14 fw-medium">Age</h6>
                            <p>32 years </p>
                          </div>
                          <div>
                            <h6 className="fs-14 fw-medium">Blood</h6>
                            <p>O+</p>
                          </div>
                          <div>
                            <h6 className="fs-14 fw-medium">Type</h6>
                            <p>Outpatient</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                    <h6>Complete Blood Count(CBC)</h6>
                    <p className="fs-14 mb-0">
                      <span className="text-gray-9">Primary Test Type :</span> Blood
                    </p>
                  </div>
                  {/* Invoice Item */}
                  <div className="invoice-item invoice-table-wrap">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive inv-table">
                          <table className="invoice-table table table-bordered">
                            <thead>
                              <tr>
                                <th>Investigation</th>
                                <th>Result</th>
                                <th>Reference Value</th>
                                <th>Unit</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="report-title" colSpan={4}>
                                  HEMOGLOBIN
                                </td>
                              </tr>
                              <tr>
                                <td>Hemoglobin (Hb)</td>
                                <td>
                                  12.5
                                  <span className="badge badge-info-transparent text-xs d-inline-block rounded-pill ms-1">
                                    Low
                                  </span>
                                </td>
                                <td>13.0 - 17.0</td>
                                <td>g/dL</td>
                              </tr>
                              <tr>
                                <td className="report-title" colSpan={4}>
                                  RBC COUNT
                                </td>
                              </tr>
                              <tr>
                                <td>Total RBC Count</td>
                                <td>5.2</td>
                                <td>4.5 - 5.5</td>
                                <td>million cells/µL</td>
                              </tr>
                              <tr>
                                <td className="report-title" colSpan={4}>
                                  BLOOD INDICES
                                </td>
                              </tr>
                              <tr>
                                <td>Packed Cell Volume (PCV)</td>
                                <td className="text-danger">
                                  57.5
                                  <span className="badge badge-danger-transparent text-xs d-inline-block rounded-pill ms-1">
                                    High
                                  </span>
                                </td>
                                <td>40 - 50</td>
                                <td>%</td>
                              </tr>
                              <tr>
                                <td>
                                  Mean Corpuscular Volume (MCV){" "}
                                  <span className="fs-10 text-gray-6">
                                    Calculated
                                  </span>
                                </td>
                                <td>87.75</td>
                                <td>83 - 101</td>
                                <td>fL</td>
                              </tr>
                              <tr>
                                <td>MCH Calculated</td>
                                <td>27.72</td>
                                <td>27 - 32</td>
                                <td>pg</td>
                              </tr>
                              <tr>
                                <td>MCHC Calculated</td>
                                <td>32.8</td>
                                <td>32.5 - 34.5</td>
                                <td>g/dL</td>
                              </tr>
                              <tr>
                                <td>RDW</td>
                                <td>13.6</td>
                                <td>11.6 - 14.0</td>
                                <td>%</td>
                              </tr>
                              <tr>
                                <td className="report-title" colSpan={4}>
                                  WBC COUNT
                                </td>
                              </tr>
                              <tr>
                                <td>Total WBC Count</td>
                                <td>9000</td>
                                <td>4000 - 11000</td>
                                <td>cells/µL</td>
                              </tr>
                              <tr>
                                <td className="report-title" colSpan={4}>
                                  DIFFERENTIAL WBC COUNT
                                </td>
                              </tr>
                              <tr>
                                <td>Neutrophils</td>
                                <td>60</td>
                                <td>50 - 62</td>
                                <td>%</td>
                              </tr>
                              <tr>
                                <td>Lymphocytes</td>
                                <td>31</td>
                                <td>20 - 40</td>
                                <td>%</td>
                              </tr>
                              <tr>
                                <td>Eosinophils</td>
                                <td>01</td>
                                <td>00 - 06</td>
                                <td>%</td>
                              </tr>
                              <tr>
                                <td>Monocytes</td>
                                <td>07</td>
                                <td>00 - 10</td>
                                <td>%</td>
                              </tr>
                              <tr>
                                <td>Basophils</td>
                                <td>01</td>
                                <td>00 - 02</td>
                                <td>%</td>
                              </tr>
                              <tr>
                                <td>Platelet Count</td>
                                <td>248157</td>
                                <td>150000 - 410000</td>
                                <td>µL</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  <p className="mb-2">
                    <span className="text-gray-9 fw-medium">Instruments :</span> Fully
                    Automated Cell Counter - Mindray 300
                  </p>
                  <p className="mb-3">
                    <span className="text-gray-9 fw-medium">Interpretation :</span>{" "}
                    Further confirm for Anemia
                  </p>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="scan-wrap">
                        <h6>Scan to download report</h6>
                        <ImageWithBasePath src="assets/img/scan.png" alt="scan" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="prescriber-info">
                        <h6>Dr. Edalin Hendry</h6>
                        <p>Dept of Cardiology</p>
                      </div>
                    </div>
                  </div>
                  <ul className="nav inv-paginate justify-content-center">
                    <li>
                      Page 01 of{" "}
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#view_prescription2"
                        data-bs-dismiss="modal"
                      >
                        02
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /View Report */}
        {/*View Prescription */}
        <div className="modal fade custom-modals" id="view_prescription">
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">View Prescription</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body pb-0">
                <div className="prescribe-download">
                  <h5>21 Mar 2025</h5>
                  <ul>
                    <li>
                      <Link to="#" className="print-link">
                        <i className="isax isax-printer" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn btn-primary-gradient rounded-pill">
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="view-prescribe invoice-content mb-0">
                  <div className="invoice-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="invoice-logo">
                          <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="invoice-details">
                          <strong>Prescription ID :</strong> #PR-123 <br />
                          <strong>Issued:</strong> 21 Mar 2025
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Invoice Item */}
                  <div className="invoice-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="invoice-info">
                          <h6 className="customer-text">Doctor Details</h6>
                          <p className="invoice-details invoice-details-two">
                            Edalin Hendry <br />
                            806 Twin Willow Lane, <br />
                            Newyork, USA <br />
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="invoice-info invoice-info2">
                          <h6 className="customer-text">Patient Details</h6>
                          <p className="invoice-details">
                            Adrian Marshall <br />
                            299 Star Trek Drive,
                            <br />
                            Florida, 32405, USA <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  {/* Invoice Item */}
                  <div className="invoice-item invoice-table-wrap">
                    <div className="row">
                      <div className="col-md-12">
                        <h6>Prescription Details</h6>
                        <div className="table-responsive">
                          <table className="invoice-table table table-bordered">
                            <thead>
                              <tr>
                                <th>Medicine Name</th>
                                <th>Dosage</th>
                                <th>Frequency</th>
                                <th>Duration</th>
                                <th>Timings</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Ecosprin 75MG [Asprin 75 MG Oral Tab]</td>
                                <td>
                                  75 mg <span>Oral Tab</span>
                                </td>
                                <td>1-0-0-1</td>
                                <td>1 month</td>
                                <td>Before Meal</td>
                              </tr>
                              <tr>
                                <td>Alexer 90MG Tab</td>
                                <td>
                                  90 mg <span>Oral Tab</span>
                                </td>
                                <td>1-0-0-1</td>
                                <td>1 month</td>
                                <td>Before Meal</td>
                              </tr>
                              <tr>
                                <td>Ramistar XL2.5</td>
                                <td>
                                  60 mg <span>Oral Tab</span>
                                </td>
                                <td>1-0-0-0</td>
                                <td>1 month</td>
                                <td>After Meal</td>
                              </tr>
                              <tr>
                                <td>Metscore</td>
                                <td>
                                  90 mg <span>Oral Tab</span>
                                </td>
                                <td>1-0-0-1</td>
                                <td>1 month</td>
                                <td>After Meal</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  {/* Invoice Information */}
                  <div className="other-info">
                    <h4>Other information</h4>
                    <p className="mb-0">
                      An account of the present illness, which includes the
                      circumstances surrounding the onset of recent health changes and
                      the chronology of subsequent events that have led the patient to
                      seek medicine
                    </p>
                  </div>
                  <div className="other-info">
                    <h4>Follow Up</h4>
                    <p className="mb-0">
                      Follow up after 3 months, Have to come on empty stomach
                    </p>
                  </div>
                  <div className="prescriber-info">
                    <h6>Dr. Edalin Hendry</h6>
                    <p>Dept of Cardiology</p>
                  </div>
                  {/* /Invoice Information */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /View Prescription */}
        {/* Delete */}
        <div className="modal fade custom-modals" id="delete_modal">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body p-4 text-center">
                <form action="/patient/dashboard">
                  <span className="del-icon mb-2 mx-auto">
                    <i className="isax isax-trash" />
                  </span>
                  <h3 className="mb-2">Delete Record</h3>
                  <p className="mb-3">Are you sure you want to delete this record?</p>
                  <div className="d-flex justify-content-center flex-wrap gap-3">
                    <Link
                      to="#"
                      className="btn btn-md btn-dark rounded-pill"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <Link to='#'
                      data-bs-dismiss="modal"
                      className="btn btn-md btn-primary-gradient rounded-pill"
                    >
                      Yes Delete
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete */}
      </>

    </div>
  )
}

export default PatientModal
