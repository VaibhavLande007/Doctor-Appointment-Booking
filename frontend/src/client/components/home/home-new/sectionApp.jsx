import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/imagewithbasebath'

const SectionApp = () => {
    return (
        <div>
            <>
                {/* App Section */}
                <section className="app-section app-sec-one p-0">
                    <div className="container">
                        <div className="app-bg">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 d-flex">
                                    <div className="app-content d-flex flex-column justify-content-center">
                                        <div className="app-header aos" data-aos="fade-up">
                                            <h3 className="display-6 text-white">
                                                Download the Doccure App today!
                                            </h3>
                                            <p className="text-light">
                                                To download an app related to a doctor or medical services,
                                                you can typically visit the app store on your device.
                                            </p>
                                        </div>
                                        <div className="google-imgs aos" data-aos="fade-up">
                                            <Link to="#">
                                                <ImageWithBasePath src="assets/img/icons/app-store-01.svg" alt="img" />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath src="assets/img/icons/google-play-01.svg" alt="img" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                                    <div className="mobile-img">
                                        <ImageWithBasePath
                                            src="assets/img/mobile-img.png"
                                            className="img-fluid"
                                            alt="img"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="app-bgs">
                                <ImageWithBasePath
                                    src="assets/img/bg/app-bg-02.png"
                                    alt="img"
                                    className="app-bg-01"
                                />
                                <ImageWithBasePath
                                    src="assets/img/bg/app-bg-03.png"
                                    alt="img"
                                    className="app-bg-02"
                                />
                                <ImageWithBasePath
                                    src="assets/img/bg/app-bg-04.png"
                                    alt="img"
                                    className="app-bg-03"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="download-bg">
                        <ImageWithBasePath src="assets/img/bg/download-bg.png" alt="img" />
                    </div>
                </section>
                {/* /App Section */}
            </>

        </div>
    )
}

export default SectionApp
