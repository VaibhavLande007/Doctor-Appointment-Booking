import React from 'react'
import { Link  } from "react-router-dom";
import ImageWithBasePath from '../../../../core/img/imagewithbasebath';

const SectionList = () => {
  return (
    <>
      {/* List */}
      <div className="list-section">
        <div className="container">
          <div className="list-card card mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center justify-content-xl-between flex-wrap gap-4 list-wraps">
                <Link to="/booking" className="list-item aos" data-aos="fade-up">
                  <div className="list-icon bg-secondary" >
                    <ImageWithBasePath src="assets/img/icons/list-icon-01.svg" alt="img" />
                  </div>
                  <h6>Book Appointment</h6>
                </Link>
                <Link
                  to="/patient/doctor-grid"
                  className="list-item aos"
                  data-aos="fade-up"
                >
                  <div className="list-icon bg-primary">
                    <ImageWithBasePath src="assets/img/icons/list-icon-02.svg" alt="img" />
                  </div>
                  <h6>Talk to Doctors</h6>
                </Link>
                <Link
                  to="/pages/hospitals"
                  className="list-item aos"
                  data-aos="fade-up"
                >
                  <div className="list-icon bg-pink">
                    <ImageWithBasePath src="assets/img/icons/list-icon-03.svg" alt="img" />
                  </div>
                  <h6>Hospitals &amp; Clinics</h6>
                </Link>
                <Link to="/home-3" className="list-item aos" data-aos="fade-up">
                  <div className="list-icon bg-cyan">
                    <ImageWithBasePath src="assets/img/icons/list-icon-04.svg" alt="img" />
                  </div>
                  <h6>Healthcare</h6>
                </Link>
                <Link
                  to="#"
                  className="list-item aos"
                  data-aos="fade-up"
                >
                  <div className="list-icon bg-purple">
                    <ImageWithBasePath src="assets/img/icons/list-icon-05.svg" alt="img" />
                  </div>
                  <h6>Medicine &amp; Supplies</h6>
                </Link>
                <Link
                  to="index-12.html"
                  className="list-item aos"
                  data-aos="fade-up"
                >
                  <div className="list-icon bg-orange">
                    <ImageWithBasePath src="assets/img/icons/list-icon-06.svg" alt="img" />
                  </div>
                  <h6>Lab Testing</h6>
                </Link>
                <Link
                  to="#"
                  className="list-item aos"
                  data-aos="fade-up"
                >
                  <div className="list-icon bg-teal">
                    <ImageWithBasePath src="assets/img/icons/list-icon-07.svg" alt="img" />
                  </div>
                  <h6>Home Care</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /List */}
    </>

  )
}

export default SectionList
