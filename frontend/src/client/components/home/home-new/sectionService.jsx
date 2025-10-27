import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SectionService = () => {

    useEffect(() => {
        const scrollers = document.querySelectorAll(".horizontal-slide");

        scrollers.forEach((scroller) => {
            const scrollerInner = scroller.querySelector(".slide-list");
            if (scrollerInner) {
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true); // No type assertion here
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            }
        });
    }, []);


    return (
        <>
            {/* Services Section */}
            <section className="services-section aos" data-aos="fade-up">
                <div
                    className="horizontal-slide d-flex"
                    data-direction="right"
                    data-speed="slow"
                >
                    <div className="slide-list d-flex gap-4">
                        <div className="services-slide">
                            <h6>
                                <Link to="#">
                                    Multi Speciality Treatments &amp; Doctors
                                </Link>
                            </h6>
                        </div>
                        <div className="services-slide">
                            <h6>
                                <Link to="#">Lab Testing Services</Link>
                            </h6>
                        </div>
                        <div className="services-slide">
                            <h6>
                                <Link to="#">Medecines &amp; Supplies</Link>
                            </h6>
                        </div>
                        <div className="services-slide">
                            <h6>
                                <Link to="#">Hospitals &amp; Clinics</Link>
                            </h6>
                        </div>
                        <div className="services-slide">
                            <h6>
                                <Link to="#">Health Care Services</Link>
                            </h6>
                        </div>
                        <div className="services-slide">
                            <h6>
                                <Link to="#">Talk to Doctors</Link>
                            </h6>
                        </div>
                        <div className="services-slide">
                            <h6>
                                <Link to="#">Home Care Services</Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Services Section */}
        </>

    )
}

export default SectionService
