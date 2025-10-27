import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Content = ({ doctor }) => {
  if (!doctor) return null;

  return (
    <div>
      <div className="card">
        <div className="card-body pt-0">
          {/* Tab Menu */}
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="#doc_overview"
                  data-bs-toggle="tab">
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_locations"
                  data-bs-toggle="tab">
                  Locations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_reviews"
                  data-bs-toggle="tab">
                  Reviews
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#doc_business_hours"
                  data-bs-toggle="tab">
                  Business Hours
                </Link>
              </li>
            </ul>
          </nav>
          {/* /Tab Menu */}

          {/* Tab Content */}
          <div className="tab-content pt-0">
            {/* Overview Content */}
            <div
              role="tabpanel"
              id="doc_overview"
              className="tab-pane fade show active">
              <div className="row">
                <div className="col-md-12 col-lg-9">
                  {/* About Details */}
                  <div className="widget about-widget">
                    <h4 className="widget-title">About Me</h4>
                    <p>
                      {doctor.bio || 'No bio available'}
                    </p>
                  </div>
                  {/* /About Details */}

                  {/* Education Details */}
                  {doctor.educations && doctor.educations.length > 0 && (
                    <div className="widget education-widget">
                      <h4 className="widget-title">Education</h4>
                      <div className="experience-box">
                        <ul className="experience-list">
                          {doctor.educations.map((edu, index) => (
                            <li key={edu.id || index}>
                              <div className="experience-user">
                                <div className="before-circle" />
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <Link to="#/" className="name">
                                    {edu.institution}
                                  </Link>
                                  <div>{edu.course}</div>
                                  <span className="time">
                                    {edu.startDate} - {edu.endDate || 'Present'}
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* /Education Details */}

                  {/* Experience Details */}
                  {doctor.experiences && doctor.experiences.length > 0 && (
                    <div className="widget experience-widget">
                      <h4 className="widget-title">Work &amp; Experience</h4>
                      <div className="experience-box">
                        <ul className="experience-list">
                          {doctor.experiences.map((exp, index) => (
                            <li key={exp.id || index}>
                              <div className="experience-user">
                                <div className="before-circle" />
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <Link to="#/" className="name">
                                    {exp.hospital}
                                  </Link>
                                  <div>{exp.title}</div>
                                  <span className="time">
                                    {exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate}
                                    ({exp.yearsOfExperience} years)
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* /Experience Details */}

                  {/* Awards Details */}
                  {doctor.awards && doctor.awards.length > 0 && (
                    <div className="widget awards-widget">
                      <h4 className="widget-title">Awards</h4>
                      <div className="experience-box">
                        <ul className="experience-list">
                          {doctor.awards.map((award, index) => (
                            <li key={award.id || index}>
                              <div className="experience-user">
                                <div className="before-circle" />
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                                  <p className="exp-year">{award.year}</p>
                                  <h4 className="exp-title">{award.name}</h4>
                                  <p>{award.description}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* /Awards Details */}

                  {/* Services List */}
                  {doctor.services && doctor.services.length > 0 && (
                    <div className="service-list">
                      <h4>Services</h4>
                      <ul className="clearfix">
                        {doctor.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* /Services List */}

                  {/* Specializations List */}
                  {doctor.specializations && doctor.specializations.length > 0 && (
                    <div className="service-list">
                      <h4>Specializations</h4>
                      <ul className="clearfix">
                        {doctor.specializations.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* /Specializations List */}
                </div>
              </div>
            </div>
            {/* /Overview Content */}

            {/* Locations Content */}
            <div role="tabpanel" id="doc_locations" className="tab-pane fade">
              {/* Location List */}
              {doctor.clinics && doctor.clinics.length > 0 ? (
                doctor.clinics.map((clinic, index) => (
                  <div className="location-list" key={clinic.id || index}>
                    <div className="row">
                      {/* Clinic Content */}
                      <div className="col-md-6">
                        <div className="clinic-content">
                          <h4 className="clinic-name">
                            <Link to="#">{clinic.name}</Link>
                          </h4>
                          <p className="doc-speciality">
                            {doctor.qualification || 'Medical Professional'}
                          </p>
                          <div className="rating">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`fas fa-star ${i < Math.floor(doctor.rating || 0) ? 'filled' : ''}`}
                              />
                            ))}
                            <span className="d-inline-block average-rating ms-1">
                              ({doctor.totalReviews || 0})
                            </span>
                          </div>
                          <div className="clinic-details mb-0">
                            <h5 className="clinic-direction">
                              <i className="fas fa-map-marker-alt" /> {clinic.address}
                              <br />
                              <Link to="#">Get Directions</Link>
                            </h5>
                            {clinic.galleryImages && clinic.galleryImages.length > 0 && (
                              <ul>
                                {clinic.galleryImages.slice(0, 4).map((img, idx) => (
                                  <li key={idx}>
                                    <Link to="#" data-fancybox="gallery2">
                                      <img src={img} alt={`Clinic ${idx + 1}`} />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* /Clinic Content */}

                      {/* Clinic Timing */}
                      <div className="col-md-4">
                        <div className="clinic-timing">
                          {doctor.availability?.weekSchedule?.map((schedule, idx) => (
                            schedule.available && (
                              <div key={idx}>
                                <p className="timings-days">
                                  <span>{schedule.dayOfWeek}</span>
                                </p>
                                <p className="timings-times">
                                  <span>{schedule.startTime} - {schedule.endTime}</span>
                                  {schedule.breakStartTime && (
                                    <span>Break: {schedule.breakStartTime} - {schedule.breakEndTime}</span>
                                  )}
                                </p>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                      {/* /Clinic Timing */}

                      <div className="col-md-2">
                        <div className="consult-price">${doctor.consultationFee || 0}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="alert alert-info">No clinic locations available</div>
              )}
              {/* /Location List */}
            </div>
            {/* /Locations Content */}

            {/* Reviews Content */}
            <div role="tabpanel" id="doc_reviews" className="tab-pane fade">
              <div className="widget review-listing">
                <div className="alert alert-info text-center">
                  Reviews section coming soon
                </div>
              </div>
            </div>
            {/* /Reviews Content */}

            {/* Business Hours Content */}
            <div
              role="tabpanel"
              id="doc_business_hours"
              className="tab-pane fade">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  {/* Business Hours Widget */}
                  <div className="widget business-widget">
                    <div className="widget-content">
                      <div className="listing-hours">
                        {doctor.availability?.weekSchedule?.map((schedule, idx) => (
                          <div
                            key={idx}
                            className={`listing-day ${!schedule.available ? 'closed' : ''} ${idx === new Date().getDay() ? 'current' : ''}`}
                          >
                            <div className="day">
                              {schedule.dayOfWeek}
                              {idx === new Date().getDay() && (
                                <span> {new Date().toLocaleDateString()}</span>
                              )}
                            </div>
                            <div className="time-items">
                              {schedule.available ? (
                                <>
                                  {idx === new Date().getDay() && (
                                    <span className="open-status">
                                      <span className="badge bg-success-light">
                                        Open Now
                                      </span>
                                    </span>
                                  )}
                                  <span className="time">
                                    {schedule.startTime} - {schedule.endTime}
                                  </span>
                                </>
                              ) : (
                                <span className="time">
                                  <span className="badge bg-danger-light">
                                    Closed
                                  </span>
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* /Business Hours Widget */}
                </div>
              </div>
            </div>
            {/* /Business Hours Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;