import React from "react";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import Footer from "../../../footer";
import { Link } from "react-router-dom";
import Header from "../../../header.jsx";
import ImageWithBasePath from "../../../../../core/img/imagewithbasebath.jsx";

const DeleteAccount = (props) => {
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
                                            <Link to="/home">
                                                <i className="isax isax-home-15" />
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
                                            Patient
                                        </li>
                                        <li className="breadcrumb-item active">Settings</li>
                                    </ol>
                                    <h2 className="breadcrumb-title">Settings</h2>
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
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <DashboardSidebar />
                            </StickyBox>
                        </div>

                        <div className="col-lg-8 col-xl-9">
                            <div className="dashboard-header">
                                <h3>Change Password</h3>
                            </div>
                            <>
                                <nav className="settings-tab mb-1">
                                    <ul className="nav nav-tabs-bottom" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <Link className="nav-link" to='/patient/profile'>
                                                Profile
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link className="nav-link" to="/patient/change-password">
                                                Change Password
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link className="nav-link" to="/patient/two-factor-authentication">
                                                2 Factor Authentication
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link className="nav-link active" to="/patient/delete-account">
                                                Delete Account
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="border-bottom pb-3 mb-3">
                                            <h5>Delete Account</h5>
                                        </div>
                                        <h6 className="fs-16">Are you sure you want to delete your account?</h6>
                                        <p>
                                            Refers to the action of permanently removing a user's account and
                                            associated data from a system, service and platform.
                                        </p>
                                        <Link
                                            to="#"
                                            className="btn btn-md btn-primary-gradient rounded-pill"
                                            data-bs-toggle="modal"
                                            data-bs-target="#del-acc"
                                        >
                                            Delete Account
                                        </Link>
                                    </div>
                                </div>

                            </>
                        </div>
                    </div>
                </div>
            </div >
            <Footer {...props} />
            <>
                {/* Delete Account */}
                <div
                    className="modal fade custom-modals"
                    id="del-acc"
                    data-bs-backdrop="static"
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5>Delete Account</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="fa-solid fa-xmark" />
                                </button>
                            </div>
                            <form>
                                <div className="modal-body">
                                    <h6 className="FS-16 mb-1">Why Are You Deleting Your Account?</h6>
                                    <p className="mb-3">
                                        We're sorry to see you go! To help us improve, please let us know
                                        your reason for deleting your account
                                    </p>
                                    <div className="form-check d-flex mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="delete"
                                            id="del-acc1"
                                        />
                                        <label className="form-check-label fs-14 ms-2" htmlFor="del-acc1">
                                            <span className="text-gray-9 fw-medium">
                                                No longer using the service
                                            </span>
                                            <span className="d-block">
                                                I no longer need this service and won’t be using it in the
                                                future.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="delete"
                                            id="del-acc2"
                                        />
                                        <label className="form-check-label fs-14 ms-2" htmlFor="del-acc2">
                                            <span className="text-gray-9 fw-medium">Privacy concerns</span>
                                            <span className="d-block">
                                                I am concerned about how my data is handled and want to remove
                                                my information.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="delete"
                                            id="del-acc3"
                                        />
                                        <label className="form-check-label fs-14 ms-2" htmlFor="del-acc3">
                                            <span className="text-gray-9 fw-medium">
                                                Too many notifications/emails
                                            </span>
                                            <span className="d-block">
                                                I’m overwhelmed by the volume of notifications or emails and
                                                would like to reduce them.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="delete"
                                            id="del-acc4"
                                        />
                                        <label className="form-check-label fs-14 ms-2" htmlFor="del-acc4">
                                            <span className="text-gray-9 fw-medium">
                                                Poor user experience
                                            </span>
                                            <span className="d-block">
                                                I’ve had difficulty using the platform, and it didn’t meet my
                                                expectations.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-check d-flex mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="delete"
                                            id="del-acc5"
                                            defaultChecked=""
                                        />
                                        <label className="form-check-label fs-14 ms-2" htmlFor="del-acc5">
                                            <span className="text-gray-9 fw-medium">
                                                Other (Please specify)
                                            </span>
                                        </label>
                                    </div>
                                    <div className="ms-4">
                                        <textarea className="form-control" rows={3} defaultValue={""} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <div className="modal-btn text-end">
                                        <Link
                                            to="#"
                                            className="btn btn-md btn-dark rounded-pill"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </Link>
                                        <Link
                                            to='#'
                                            data-bs-dismiss="modal"
                                            className="btn btn-md btn-primary-gradient rounded-pill"
                                        >
                                            Delete Account
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /Delete Account */}
            </>

        </div >
    )
}

export default DeleteAccount
