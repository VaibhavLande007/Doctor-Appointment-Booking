import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";
import { useLocation } from "react-router-dom";

const NavLinks = () => {
  const [menu, setMenu] = useState(false);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideDoctor, setSideDoctor] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const [isSideMenuthree, setSideMenuthree] = useState("");
  const [isSideMenufour, setSideMenufour] = useState("");
  const [sideMenufive, setSideMenufive] = useState("");
  const [isSideSearch, setSideSearch] = useState("");
  const [isSidebooking, setSideBooking] = useState("");
  // Rest of your code that uses pathnames
  const Location = useLocation()
  const pathnames = Location.pathname;

  const url = pathnames.split("/").slice(0, -1).join("/");
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  const toggleSidebarbooking = (value) => {
    setSideBooking(value);
  };
  const toggleSidebarDoctor = (value) => {
    setSideDoctor(value);
  };
  const toggleSidebarthree = (value) => {
    setSideMenuthree(value);
  };
  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebarfour = (value) => {
    setSideMenufour(value);
  };
  const toggleSidebarfive = (value) => {
    setSideMenufive(value);
  };
  const toggleSidebarone = (value) => {
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };
  const toggleSidebarsearch = (value) => {
    setSideSearch(value);
  };
  return (
    <>
      <li
        className={`has-submenu megamenu  ${
          pathnames.includes("index")
            ? "active"
            : "" || pathnames.includes("home")
            ? "active"
            : ""
        }`}
      >
        <Link
          to="#"
          onClick={() => setMenu(!menu)}
          className={`${menu === true ? "submenu " : ""}`}
        >
          Home <i className="fas fa-chevron-down" />
        </Link>
        <ul
          className={`${
            menu === true
              ? "submenu mega-submenu d-block"
              : "submenu mega-submenu"
          }`}
        >
          <li>
            <div className="megamenu-wrapper">
              <div className="row">
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home" className="inner-demo-img">
                        General Home 1
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-1'? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-1" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-01.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-1" className="inner-demo-img">
                        General Home 2
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-2' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-3" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-02.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-2" className="inner-demo-img">
                        General Home 3
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-3' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-3" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-03.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-3" className="inner-demo-img">
                        General Home 4
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-5' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-5" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-04.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-5" className="inner-demo-img">
                        Cardiology
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-6' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-6" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-05.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-6" className="inner-demo-img">
                        Eyecare
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-7' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-7" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-06.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-7" className="inner-demo-img">
                        Veterinary
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-8' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-8" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-07.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-8" className="inner-demo-img">
                        Pediatric
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-9' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-9" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-08.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-9" className="inner-demo-img">
                        Fertility
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-10 ' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-10" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-09.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-10" className="inner-demo-img">
                        ENT
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-11' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-11" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-10.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-11" className="inner-demo-img">
                        Cosmetics
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-12 ' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-12" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-11.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-12" className="inner-demo-img">
                        Lab Test
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames.includes("/Pharmacy-index") ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link
                        to="/Pharmacy/Pharmacy-index"
                        className="inner-demo-img"
                      >
                        <ImageWithBasePath
                          src="assets/img/home/home-12.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-12" className="inner-demo-img">
                        Pharmacy
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-13' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-13" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-13.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-13" className="inner-demo-img">
                        Home Care
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div
                    className={`single-demo ${
                      pathnames === '/home-14' ? "active" : ""
                    }`}
                  >
                    <div className="demo-img">
                      <Link to="/home-14" className="inner-demo-img">
                        <ImageWithBasePath
                          src="assets/img/home/home-14.jpg"
                          className="img-fluid "
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="demo-info">
                      <Link to="/home-14" className="inner-demo-img">
                        Dentists
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>

      <li className={`has-submenu ${url.includes("/doctor") ? "active" : ""}`}>
        <Link
          to="#"
          className={isSideMenu == "doctors" ? "subdrop " : ""}
          onClick={() =>
            toggleSidebar(isSideMenu == "doctors" ? "submenu" : "doctors")
          }
          onMouseEnter={() =>
            toggleSidebar(isSideMenu == "doctors" ? "submenu" : "doctors")
          }
        >
          Doctors <i className="fas fa-chevron-down" />
        </Link>
        {isSideMenu == "doctors" ? (
          <ul
            className={`${
              isSideMenu == "doctors" ? "submenu d-block" : "submenu"
            }`}
          >
            <li
              className={
                pathnames.includes("doctor-dashboard") ||
                pathnames.includes("doctor-specialities")
                  ? "active"
                  : ""
              }
            >
              <Link
                to="/doctor/doctor-dashboard"
                onClick={() => onhandleCloseMenu()}
              >
                Doctor Dashboard
              </Link>
            </li>
            <li
              className={
                pathnames.includes("appointments") ||
                pathnames.includes("doctor-request")
                  ? "active"
                  : ""
              }
            >
              <Link
                to="/doctor/appointments"
                onClick={() => onhandleCloseMenu()}
              >
                Appointments
              </Link>
            </li>
            <li
              className={
                pathnames.includes("available-timings") ? "active" : ""
              }
            >
              <Link
                to="/doctor/available-timings"
                onClick={() => onhandleCloseMenu()}
              >
                Available Timing
              </Link>
            </li>
            <li className={pathnames.includes("my-patients") ? "active" : ""}>
              <Link
                to="/doctor/my-patients"
                onClick={() => onhandleCloseMenu()}
              >
                Patients List
              </Link>
            </li>
            <li
              className={pathnames.includes("patient-profile") ? "active" : ""}
            >
              <Link
                to="/doctor/patient-profile"
                onClick={() => onhandleCloseMenu()}
              >
                Patients Profile
              </Link>
            </li>
            <li className={pathnames.includes("chat-doctor") ? "active" : ""}>
              <Link
                to="/doctor/chat-doctor"
                onClick={() => onhandleCloseMenu()}
              >
                Chat
              </Link>
            </li>
            <li className={pathnames.includes("invoices") ? "active" : ""}>
              <Link to="/doctor/invoices" onClick={() => onhandleCloseMenu()}>
                Invoices
              </Link>
            </li>
            <li
              className={pathnames.includes("profile-setting") ? "active" : ""}
            >
              <Link
                to="/doctor/profile-setting"
                onClick={() => onhandleCloseMenu()}
              >
                Profile Settings
              </Link>
            </li>
            <li className={pathnames.includes("review") ? "active" : ""}>
              <Link to="/doctor/review" onClick={() => onhandleCloseMenu()}>
                Reviews
              </Link>
            </li>
            <li
              className={pathnames.includes("doctor-register") ? "active" : ""}
            >
              <Link
                to="/doctor/doctor-register"
                onClick={() => onhandleCloseMenu()}
              >
                Doctor Register
              </Link>
            </li>
            <li
              className={`has-submenu ${
                pathnames.includes("doctor-blog") ? "active" : ""
              }`}
            >
              <Link to="/doctor-blog" onClick={() => onhandleCloseMenu()}>
                Blog
              </Link>
              <ul className="submenu">
                <li>
                  <Link to="/doctor-blog" onClick={() => onhandleCloseMenu()}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/blog-details"
                    onClick={() => onhandleCloseMenu()}
                  >
                    Blog view
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/doctor-add-blog"
                    onClick={() => onhandleCloseMenu()}
                  >
                    Add Blog
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
      <li className={`has-submenu ${url.includes("/patient") ? "active" : ""}`}>
        <Link
          to="#"
          className={isSideMenu == "patients" ? "subdrop" : ""}
          onMouseEnter={() =>
            toggleSidebar(isSideMenu == "patients" ? "submenu" : "patients")
          }
        >
          Patients <i className="fas fa-chevron-down" />
        </Link>
        {isSideMenu == "patients" ? (
          <ul
            className={`${
              isSideMenu == "patients" ? "submenu d-block" : "submenu"
            }`}
          >
           <li className={pathnames.includes("dashboard") ? "active" : ""}>
              <Link to="/patient/dashboard" onClick={() => onhandleCloseMenu()}>
                Patient Dashboard
              </Link>
            </li>
            <li
              className={`has-submenu ${
                pathnames.includes("doctor") &&
                !pathnames.includes("doctor-profile") &&
                !pathnames.includes("search-doctor")
                  ? "active"
                  : ""
              }`}
            >
              <Link
                to="#0"
                className={isSideMenutwo == "doctor" ? "subdrop" : ""}
                onClick={() =>
                  toggleSidebartwo(isSideMenutwo == "doctor" ? "" : "doctor")
                }
                onMouseEnter={() =>
                  toggleSidebartwo(isSideMenutwo == "doctor" ? "" : "doctor")
                }
              >
                Doctors{" "}
              </Link>
              {isSideMenutwo == "doctor" ? (
                <ul
                  className={
                    isSideMenutwo == "doctor" ? "submenu d-block" : "submenu"
                  }
                >
                  <li
                    className={
                      pathnames.includes("doctor-grid") ? "active" : ""
                    }
                  >
                    <Link
                      to="/patient/doctor-grid"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Map Grid
                    </Link>
                  </li>
                  <li
                    className={
                      pathnames.includes("doctor-list") ? "active" : ""
                    }
                  >
                    <Link
                      to="/patient/doctor-list"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Map List
                    </Link>
                  </li>
                  <li
                    className={
                      pathnames.includes("doctor-map-list-availability") ? "active" : ""
                    }
                  >
                    <Link
                      to="/patient/doctor-map-list-availability"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Map With Availability
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
            <li
              className={`has-submenu ${
                pathnames.includes("search-doctor") &&
                !pathnames.includes("doctor-profile") &&
                !pathnames.includes("search-doctor")
                  ? "active"
                  : ""
              }`}
            >
              <Link
                to="#0"
                className={isSideSearch == "search-doctor" ? "subdrop" : ""}
                onClick={() =>
                  toggleSidebarsearch(
                    isSideSearch == "search-doctor" ? "" : "search-doctor"
                  )
                }
                onMouseEnter={() =>
                  toggleSidebarsearch(
                    isSideSearch == "search-doctor" ? "" : "search-doctor"
                  )
                }
              >
                Search Doctor{" "}
              </Link>
              {isSideSearch == "search-doctor" ? (
                <ul
                  className={
                    isSideSearch == "search-doctor"
                      ? "submenu d-block"
                      : "submenu"
                  }
                >
                  <li
                    className={
                      pathnames.includes("search-doctor1") ? "active" : ""
                    }
                  >
                    <Link
                      to="/patient/search-doctor1"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Search Doctor 1
                    </Link>
                  </li>
                  <li
                    className={
                      pathnames.includes("search-doctor2") ? "active" : ""
                    }
                  >
                    <Link
                      to="/patient/search-doctor2"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Search Doctor 2
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
            <li
              className={`has-submenu ${(pathnames.includes("doctor-profile") || 
              pathnames.includes("doctor-profile2")) ? "active" : ""}`}
            >
              <Link
                to="#"
                className={isSideDoctor == "docprofile" ? "subdrop" : ""}
                onClick={() =>
                  toggleSidebarDoctor(
                    isSideDoctor == "docprofile" ? "" : "docprofile"
                  )
                }
                onMouseEnter={() =>
                  toggleSidebarDoctor(
                    isSideDoctor == "docprofile" ? "" : "docprofile"
                  )
                }
              >
                Doctor Profile
              </Link>
              {isSideDoctor == "docprofile" ? (
                <ul
                  className={
                    isSideDoctor == "docprofile" ? "submenu d-block" : "submenu"
                  }
                >
                  <li
                    className={pathnames.includes("doctor-profile") ? "active" : ""}
                  >
                    <Link
                      to="/patient/doctor-profile"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Doctor Profile 1
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("doctor-profile2") ? "active" : ""}
                  >
                    <Link
                      to="/patient/doctor-profile2"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Doctor Profile 2
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
            <li
              className={`has-submenu ${
                pathnames.includes("booking") &&
                !pathnames.includes("booking-success")
                  ? "active"
                  : ""
              }`}
            >
              <Link
                to="#0"
                className={isSidebooking == "booking" ? "subdrop" : ""}
                onClick={() =>
                  toggleSidebarbooking(
                    isSidebooking == "booking" ? "" : "booking"
                  )
                }
                onMouseEnter={() =>
                  toggleSidebarbooking(
                    isSidebooking == "booking" ? "" : "booking"
                  )
                }
              >
                Booking
              </Link>
              {isSidebooking == "booking" ? (
                <ul
                  className={
                    isSidebooking == "booking" ? "submenu d-block" : "submenu"
                  }
                >
                  <li
                    className={pathnames === '/booking' ? "active" : ""}
                  >
                    <Link
                      to="/booking"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Booking
                    </Link>
                  </li>
                  <li
                    className={pathnames === '/patient/booking1' ? "active" : ""}
                  >
                    <Link
                      to="/patient/booking1"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Booking 1
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("booking2") ? "active" : ""}
                  >
                    <Link
                      to="/patient/booking2"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Booking 2
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("booking-popup") ? "active" : ""}
                  >
                    <Link
                      to="/booking-popup"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Booking Popup
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
            {/* <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
                          <Link to="/patient/booking1" onClick={() => onhandleCloseMenu()}>Booking</Link>
                        </li> */}
            <li className={pathnames.includes("checkout") ? "active" : ""}>
              <Link to="/patient/checkout" onClick={() => onhandleCloseMenu()}>
                Checkout
              </Link>
            </li>
            <li
              className={pathnames.includes("booking-success") ? "active" : ""}
            >
              <Link
                to="/patient/booking-success"
                onClick={() => onhandleCloseMenu()}
              >
                Booking Success
              </Link>
            </li>
           
            <li className={pathnames.includes("favourites") ? "active" : ""}>
              <Link
                to="/patient/favourites"
                onClick={() => onhandleCloseMenu()}
              >
                Favourites
              </Link>
            </li>
            <li className={pathnames.includes("patient-chat") ? "active" : ""}>
              <Link
                to="/patient/patient-chat"
                onClick={() => onhandleCloseMenu()}
              >
                Chat
              </Link>
            </li>
            <li
              className={
                pathnames.includes("profile") &&
                !pathnames.includes("doctor-profile")
                  ? "active"
                  : ""
              }
            >
              <Link to="/patient/profile" onClick={() => onhandleCloseMenu()}>
                Profile Settings
              </Link>
            </li>
            <li
              className={pathnames.includes("change-password") ? "active" : ""}
            >
              <Link
                to="/patient/change-password"
                onClick={() => onhandleCloseMenu()}
              >
                Change Password
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
      <li
        className={`has-submenu ${url.includes("/Pharmacy") ? "active" : ""}`}
      >
        <Link
          to="#"
          className={isSideMenu == "pharmacy" ? "subdrop" : ""}
          onMouseEnter={() =>
            toggleSidebar(isSideMenu == "pharmacy" ? "submenu" : "pharmacy")
          }
        >
          Pharmacy <i className="fas fa-chevron-down" />
        </Link>
        {isSideMenu == "pharmacy" ? (
          <ul
            className={`${
              isSideMenu == "pharmacy" ? "submenu d-block" : "submenu"
            }`}
          >
            <li
              className={pathnames.includes("Pharmacy-index") ? "active" : ""}
            >
              <Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link>
            </li>
            <li
              className={pathnames.includes("Pharmacy-details") ? "active" : ""}
            >
              <Link to="/Pharmacy/Pharmacy-details">Pharmacy Details</Link>
            </li>
            <li
              className={pathnames.includes("pharmacy-search") ? "active" : ""}
            >
              <Link to="/Pharmacy/pharmacy-search">Pharmacy Search</Link>
            </li>
            <li className={pathnames.includes("product-all") ? "active" : ""}>
              <Link to="/Pharmacy/product-all">Product</Link>
            </li>
            <li
              className={
                pathnames.includes("product-description") ? "active" : ""
              }
            >
              <Link to="/Pharmacy/product-description">
                Product Description
              </Link>
            </li>
            <li className={pathnames.includes("cart") ? "active" : ""}>
              <Link to="/Pharmacy/cart">Cart</Link>
            </li>
            <li
              className={pathnames.includes("product-checkout") ? "active" : ""}
            >
              <Link to="/Pharmacy/product-checkout">Product Checkout</Link>
            </li>
            <li
              className={pathnames.includes("payment-success") ? "active" : ""}
            >
              <Link to="/Pharmacy/payment-success">Payment Success</Link>
            </li>
            <li
              className={
                pathnames.includes("pharmacy-register") ? "active" : ""
              }
            >
              <Link to="/Pharmacy/pharmacy-register">Pharmacy Register</Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
      <li className={`has-submenu ${url.includes("/pages") ? "active" : ""}`}>
        <Link
          to="#"
          className={isSideMenu == "pages" ? "subdrop" : ""}
          onMouseEnter={() =>
            toggleSidebar(isSideMenu == "pages" ? "submenu" : "pages")
          }
        >
          Pages <i className="fas fa-chevron-down" />
        </Link>
        {isSideMenu == "pages" ? (
          <ul
            className={`${
              isSideMenu == "pages" ? "submenu d-block" : "submenu"
            }`}
          >
            <li
              className={`${pathnames.includes("/aboutus") ? "active" : ""}`}
            >
              <Link to="/pages/aboutus" onClick={() => onhandleCloseMenu()}>
                About Us
              </Link>
            </li>
            <li
              className={`${pathnames.includes("/contactus") ? "active" : ""}`}
            >
              <Link to="/pages/contactus" onClick={() => onhandleCloseMenu()}>
                Contact Us
              </Link>
            </li>
            <li
              className={`${pathnames.includes("/hospitals") ? "active" : ""}`}
            >
              <Link to="/pages/hospitals" onClick={() => onhandleCloseMenu()}>
                Hospitals
              </Link>
            </li>
            <li
              className={`${pathnames.includes("/speciality") ? "active" : ""}`}
            >
              <Link to="/pages/speciality" onClick={() => onhandleCloseMenu()}>
              Speciality
              </Link>
            </li>
            <li
              className={`${pathnames.includes("/clinics") ? "active" : ""}`}
            >
              <Link to="/pages/clinics" onClick={() => onhandleCloseMenu()}>
                Clinic
              </Link>
            </li>
            <li
              className={`has-submenu ${
                pathnames.includes("/call") ? "active" : ""
              }`}
            >
              <Link
                to="#"
                className={isSideMenuthree == "call" ? "subdrop" : ""}
                onClick={() =>
                  toggleSidebarthree(isSideMenuthree == "call" ? "" : "call")
                }
              >
                Call{" "}
              </Link>
              {isSideMenuthree == "call" ? (
                <ul
                  className={
                    isSideMenuthree == "call" ? "submenu d-block" : "submenu"
                  }
                >
                  <li
                    className={pathnames.includes("voice-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/voice-call"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Voice Call
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("video-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/video-call"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Video Call
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li
              className={`has-submenu ${
                pathnames.includes("/invoice-view") ? "active" : ""
              }`}
            >
              <Link
                to="#0"
                className={isSideMenuone == "invoices" ? "subdrop" : ""}
                onMouseEnter={() =>
                  toggleSidebarone(
                    isSideMenuone == "invoices" ? "" : "invoices"
                  )
                }
              >
                Invoices{" "}
              </Link>
              {isSideMenuone == "invoices" ? (
                <ul
                  className={
                    isSideMenuone == "invoices" ? "submenu d-block" : "submenu"
                  }
                >
                  <li className={pathnames.includes("invoice") ? "active" : ""}>
                    <Link
                      to="/pages/invoice"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Invoices
                    </Link>
                  </li>
                  <li className={pathnames.includes("-view") ? "active" : ""}>
                    <Link
                      to="/pages/invoice-view"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Invoice View
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li
              className={`has-submenu ${
                pathnames.includes("/authentication") ? "active" : ""
              }`}
            >
              <Link
                to="#0"
                className={isSideMenufour == "authentication" ? "subdrop" : ""}
                onClick={() =>
                  toggleSidebarfour(
                    isSideMenufour == "authentication" ? "" : "authentication"
                  )
                }
              >
                Authentication{" "}
              </Link>
              {isSideMenufour == "authentication" ? (
                <ul
                  className={
                    isSideMenufour == "authentication"
                      ? "submenu d-block"
                      : "submenu"
                  }
                >
                  <li
                    className={pathnames.includes("voice-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/login-email"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Login Email
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("video-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/login-phone"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Login Phone
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("video-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/doctor-signup"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Doctor Signup
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("video-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/patient-signup"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Patient Signup
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("video-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/forgot-password"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Forgot Password 1
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("video-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/forgot-password2"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Forgot Password 2
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("video-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/email-otp"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Email OTP
                    </Link>
                  </li>
                  <li
                    className={pathnames.includes("video-call") ? "active" : ""}
                  >
                    <Link
                      to="/pages/phone-otp"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Phone OTP
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li
              className={`has-submenu ${
                pathnames.includes("/error") ? "active" : ""
              }`}
            >
              <Link
                to="#0"
                className={sideMenufive == "error" ? "subdrop" : ""}
                onClick={() =>
                  toggleSidebarfive(sideMenufive == "error" ? "" : "error")
                }
              >
                Error{" "}
              </Link>
              {sideMenufive == "error" ? (
                <ul
                  className={
                    sideMenufive == "error" ? "submenu d-block" : "submenu"
                  }
                >
                  <li className={pathnames.includes("invoice") ? "active" : ""}>
                    <Link
                      to="/pages/error-404"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Error 404
                    </Link>
                  </li>
                  <li className={pathnames.includes("-view") ? "active" : ""}>
                    <Link
                      to="/pages/error-500"
                      onClick={() => onhandleCloseMenu()}
                    >
                      Error 500
                    </Link>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>

            <li
              className={`${pathnames.includes("/blank-page") ? "active" : ""}`}
            >
              <Link to="/pages/blank-page" onClick={() => onhandleCloseMenu()}>
                Starter Page
              </Link>
            </li>
            <li className={pathnames.includes("/pricing-plan") ? "active" : ""}>
              <Link
                to="/pages/pricing-plan"
                onClick={() => onhandleCloseMenu()}
              >
                Pricing Plan
              </Link>
            </li>
            <li className={pathnames.includes("/contactus") ? "active" : ""}>
              <Link to="/pages/faq" onClick={() => onhandleCloseMenu()}>
                FAQ
              </Link>
            </li>

            <li className={pathnames.includes("maintenance") ? "active" : ""}>
              <Link to="/pages/maintenance" onClick={() => onhandleCloseMenu()}>
                Maintenance
              </Link>
            </li>
            <li className={pathnames.includes("login") ? "active" : ""}>
              <Link to="/pages/comingsoon" onClick={() => onhandleCloseMenu()}>
                Coming Soon
              </Link>
            </li>
            <li className={pathnames.includes("/register") ? "active" : ""}>
              <Link to="/pages/terms" onClick={() => onhandleCloseMenu()}>
                Terms & Condition
              </Link>
            </li>
            <li
              className={`${pathnames === "/forgot-password" ? "active" : ""}`}
            >
              <Link
                to="/pages/privacy-policy"
                onClick={() => onhandleCloseMenu()}
              >
                Privacy Policy
              </Link>
            </li>
            <li
              className={`${pathnames.includes("/component") ? "active" : ""}`}
            >
              <Link to="/pages/component" onClick={() => onhandleCloseMenu()}>
                Components
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>

      <li className={`has-submenu ${url.includes("/blog") ? "active" : ""}`}>
        <Link
          to="#"
          className={isSideMenu == "blog" ? "subdrop" : ""}
          onMouseEnter={() =>
            toggleSidebar(isSideMenu == "blog" ? "submenu" : "blog")
          }
        >
          Blog <i className="fas fa-chevron-down" />
        </Link>
        {isSideMenu == "blog" ? (
          <ul
            className={`${
              isSideMenu == "blog" ? "submenu d-block" : "submenu"
            }`}
          >
            <li className={pathnames.includes("blog-list") ? "active" : ""}>
              <Link to="/blog/blog-list" onClick={() => onhandleCloseMenu()}>
                Blog List
              </Link>
            </li>
            <li className={pathnames.includes("blog-grid") ? "active" : ""}>
              <Link to="/blog/blog-grid" onClick={() => onhandleCloseMenu()}>
                Blog Grid
              </Link>
            </li>
            <li className={pathnames.includes("blog-details") ? "active" : ""}>
              <Link to="/blog/blog-details" onClick={() => onhandleCloseMenu()}>
                Blog Details
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
      <li className="has-submenu">
        <Link
          to="#"
          // target="_blank"
          className={isSideMenu == "admin" ? "subdrop" : ""}
          onMouseEnter={() =>
            toggleSidebar(isSideMenu == "admin" ? "submenu" : "admin")
          }
        >
          Admin
          <i className="fas fa-chevron-down" />
        </Link>
        {isSideMenu == "admin" ? (
          <ul
            className={`${
              isSideMenu == "admin" ? "submenu d-block" : "submenu"
            }`}
          >
            <li>
              <Link to="/admin" target="_blank">
                Admin
              </Link>
            </li>

            <li>
              <Link to="/pharmacyadmin" target="_blank">
                Pharmacy Admin
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default NavLinks;
