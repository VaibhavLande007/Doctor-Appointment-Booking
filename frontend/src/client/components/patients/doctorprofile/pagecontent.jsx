import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Pagecontent = ({ doctor, onBookNow }) => {
  if (!doctor) return null;

  const fullName = `Dr. ${doctor.firstName} ${doctor.lastName}`;
  const primarySpecialization = doctor.specializations?.[0] || 'General';
  const location = doctor.address
    ? `${doctor.address.city}, ${doctor.address.state}`
    : 'Location not available';

  return (
    <>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="doctor-widget">
              <div className="doc-info-left">
                <div className="doctor-img">
                  <ImageWithBasePath
                    src={doctor.profileImage || "assets/img/doctors/doctor-thumb-02.jpg"}
                    className="img-fluid"
                    alt={fullName}
                  />
                </div>
                <div className="doc-info-cont">
                  <h4 className="doc-name">{fullName}</h4>
                  <p className="doc-speciality">
                    {doctor.qualification || 'BDS, MDS - Oral & Maxillofacial Surgery'}
                  </p>
                  <p className="doc-department">
                    <ImageWithBasePath
                      src="assets/img/specialities/specialities-01.png"
                      className="img-fluid"
                      alt="Speciality"
                    />
                    {primarySpecialization}
                  </p>
                  <div className="rating">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`fas fa-star ${index < Math.floor(doctor.rating || 0) ? 'filled' : ''}`}
                      />
                    ))}
                    <span className="d-inline-block average-rating ms-1">
                      ({doctor.totalReviews || 0})
                    </span>
                  </div>
                  <div className="clinic-details">
                    <p className="doc-location">
                      <i className="fas fa-map-marker-alt"></i> {location}
                    </p>
                  </div>
                  <div className="clinic-services">
                    {doctor.services?.slice(0, 2).map((service, idx) => (
                      <span key={idx}>{service}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="doc-info-right">
                <div className="clini-infos">
                  <ul>
                    <li>
                      <i className="far fa-thumbs-up" /> {doctor.rating ? (doctor.rating * 20).toFixed(0) : 0}%
                    </li>
                    <li>
                      <i className="far fa-comment" /> {doctor.totalReviews || 0} Feedback
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" /> {location}
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt" /> ${doctor.consultationFee || 100} per hour
                    </li>
                  </ul>
                </div>
                <div className="doctor-action">
                  <Link to="#" className="btn btn-white fav-btn">
                    <i className="far fa-bookmark" />
                  </Link>
                  <Link
                    to="/doctor/chat-doctor"
                    className="btn btn-white msg-btn"
                  >
                    <i className="far fa-comment-alt" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-white call-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#voice_call"
                  >
                    <i className="fas fa-phone" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-white call-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#video_call"
                  >
                    <i className="fas fa-video" />
                  </Link>
                </div>
                <div className="clinic-booking">
                  <button
                    className="apt-btn"
                    onClick={onBookNow}
                    type="button"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Call Modal */}
      <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <ImageWithBasePath
                        alt="User Image"
                        src={doctor.profileImage || "assets/img/doctors/doctor-thumb-02.jpg"}
                        className="call-avatar"
                      />
                      <h4>{fullName}</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/pages/voice-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">call</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Call Modal */}
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <ImageWithBasePath
                        className="call-avatar"
                        src={doctor.profileImage || "assets/img/doctors/doctor-thumb-02.jpg"}
                        alt="User Image"
                      />
                      <h4>{fullName}</h4>
                      <span>Calling ...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/pages/video-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">videocam</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagecontent;