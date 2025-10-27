import React, { useState } from "react";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import Footer from "../../../footer";
import { Link } from "react-router-dom";
import Header from "../../../header.jsx";
import { InputOtp } from 'primereact/inputotp';
import ImageWithBasePath from "../../../../../core/img/imagewithbasebath.jsx";

const TwoStepAuthentication = (props) => {


    const [token, setTokens] = useState();

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
                                            <Link className="nav-link active" to="/patient/two-factor-authentication">
                                                2 Factor Authentication
                                            </Link>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <Link className="nav-link" to="/patient/delete-account">
                                                Delete Account
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="border-bottom d-flex align-items-center justify-content-between gap-3 flex-wrap pb-3 mb-3">
                                            <h5>2 Factor Authentication</h5>
                                            <div className="status-toggle">
                                                <input type="checkbox" id="status_2" className="check" defaultChecked />
                                                <label htmlFor="status_2" className="checktoggle">checkbox</label>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-body">
                                                <form action="/patient/two-factor-authentication">
                                                    <div className="mb-3">
                                                        <h6 className="mb-1">Set up using an Email</h6>
                                                        <p className="fs-14">Enter your Email which we send you code</p>
                                                    </div>
                                                    <div className="mb-3 pb-3 border-bottom">
                                                        <label className="form-label">Email Address <span className="text-danger">*</span></label>
                                                        <div className="d-flex align-items-center w-100 gap-2">
                                                            <div className="flex-grow-1">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                            <div>
                                                                <button className="btn btn-md btn-primary-gradient rounded-pill">Continue</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label className="form-label">Enter the code generated by Email</label>
                                                    <div className="mb-2 two-step">
                                                        <InputOtp value={token} onChange={(e) => setTokens(e.value)} />
                                                    </div>

                                                    <button type="submit" className="btn btn-md btn-primary-gradient rounded-pill">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="card mb-0">
                                            <div className="card-body">
                                                <form action="/patient/two-factor-authentication">
                                                    <div className="mb-3">
                                                        <h6 className="mb-1">Set up using an SMS</h6>
                                                        <p className="fs-14">Enter your phone number which we send you code</p>
                                                    </div>
                                                    <div className="mb-3 pb-3 border-bottom">
                                                        <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                                                        <div className="d-flex align-items-center w-100 gap-2">
                                                            <div className="flex-grow-1">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                            <div>
                                                                <Link to="#" className="btn btn-md btn-primary-gradient rounded-pill" data-bs-target="#success-modal" data-bs-toggle="modal">Continue</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <label className="form-label">Enter the code generated by SMS</label>
                                                    <div className="mb-2">
                                                        <InputOtp value={token} onChange={(e) => setTokens(e.value)} />
                                                    </div>
                                                    <button type="submit" className="btn btn-md btn-primary-gradient rounded-pill">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div >
            <Footer {...props} />
        </div >
    )
}

export default TwoStepAuthentication
