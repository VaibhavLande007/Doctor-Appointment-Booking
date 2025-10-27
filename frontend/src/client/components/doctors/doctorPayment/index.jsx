import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../header'
import DoctorFooter from '../../common/doctorFooter'
import DoctorSidebar from '../sidebar'
import { paypal, stripe } from '../../imagepath'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'

const DoctorPayment = (props) => {

    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index) => {
        setActiveIndex(index);
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
                                        <li className="breadcrumb-item active">Payout Settings</li>
                                    </ol>
                                    <h2 className="breadcrumb-title">Payout Settings</h2>
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
            <div className="content doctor-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                            {/* Profile Sidebar */}
                            <DoctorSidebar />
                            {/* /Profile Sidebar */}
                        </div>
                        {/* Payouts */}
                        <div className="col-lg-8 col-xl-9">
                            <div className="payout-wrap">
                                <div className="payout-title">
                                    <h4>Settings</h4>
                                    <p>
                                        All the earning will be sent to below selected payout method
                                    </p>
                                </div>
                                <div className="stripe-wrapper">
                                    <div className={activeIndex === 0 ? "stripe-box active" : "stripe-box"} onClick={() => handleClick(0)}>
                                        <div className="stripe-img">
                                            <img src={stripe} alt="img" />
                                        </div>
                                        <Link to="#" className="btn">
                                            <i className="fa-solid fa-gear" />
                                            Configure
                                        </Link>
                                    </div>
                                    <div className={activeIndex === 1 ? "stripe-box active" : "stripe-box"} onClick={() => handleClick(1)}>
                                        <div className="stripe-img">
                                            <img src={paypal} alt="img" />
                                        </div>
                                        <Link
                                            to="#"
                                            className="btn"
                                            data-bs-toggle="modal"
                                            data-bs-target="#add_configure"
                                        >
                                            <i className="fa-solid fa-gear" />
                                            Configure
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="dashboard-header">
                                <h3>Payouts</h3>
                            </div>
                            <div className="search-header">
                                <div className="search-field">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                    />
                                    <span className="search-icon">
                                        <i className="fa-solid fa-magnifying-glass" />
                                    </span>
                                </div>
                            </div>
                            <div className="custom-table">
                                <div className="table-responsive">
                                    <table className="table table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Payment Method</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>24 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$300</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$200</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>25 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$300</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$300</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$300</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$300</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>27 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$200</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>29 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$350</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>24 Mar 2025</td>
                                                <td>Paypal</td>
                                                <td>$100</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>04 Apr 2025</td>
                                                <td>Paypal</td>
                                                <td>$180</td>
                                                <td>
                                                    <span className="badge badge-green status-badge">
                                                        Completed
                                                    </span>
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
                        {/* /Payouts */}
                    </div>
                </div>
            </div>
            {/* /Page Content */}
            <DoctorFooter {...props} />
            {/* Configuration */}
            <div className="modal fade custom-modals" id="add_configure">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Configuration</h5>
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
                                <div className="timing-modal">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-wrap mb-0">
                                                <label className="col-form-label">Email Address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="modal-btn text-end">
                                    <a
                                        href="#"
                                        className="btn btn-gray"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancel
                                    </a>
                                    <Link to="#" className="btn btn-primary prime-btn" data-bs-dismiss="modal">
                                        Save Changes
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Configuration */}
        </div>
    )
}

export default DoctorPayment
