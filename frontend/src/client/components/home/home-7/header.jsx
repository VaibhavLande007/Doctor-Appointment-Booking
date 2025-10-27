import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDataTheme } from "../../../../core/data/redux/themeSettingSlice";
import NavLinks from "../../nav";

const Home7Header = () => {
  const [searchField, setSearchField] = useState(false);

  const toggleSearch = () => {
    setSearchField(!searchField);
  };

  const [headerClass, setHeaderClass] = useState(
    "header header-fixed header-fourteen header-twelve veterinary-header"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setHeaderClass(
          "header header-fixed header-fourteen header-twelve veterinary-header pharmacy-header"
        );
      } else {
        setHeaderClass(
          "header header-fixed header-fourteen header-twelve veterinary-header"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  const dataTheme = useSelector((state) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme) => {
    dispatch(setDataTheme(theme));
  };
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  return (
    <div>
      {" "}
      {/* Header */}
      <header className={headerClass}>
        <div className="container">
          <div className="veterinary-top-head">
            <ul>
              <li>
                <i className="fa-solid fa-envelope me-2" />
                Doccure@example.com
              </li>
              <li>
                <i className="fa-solid fa-location-dot me-2" />
                231 madison Street, NewYork,USA
              </li>
            </ul>
            <ul>
              <li>Mon-Fri : 10:00 AM - 09:00PM</li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-instagram" />
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-twitter" />
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-facebook" />
                </Link>
                <Link to="#">
                  <i className="fa-brands fa-linkedin" />
                </Link>
              </li>
            </ul>
          </div>
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home-1" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/veterinary-home-logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home-1" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/veterinary-home-logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link id="menu_close" className="menu-close" to="#" onClick={() => onhandleCloseMenu()}>
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <NavLinks />
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="header-theme me-3">
                <Link
                  to="#"
                  id="dark-mode-toggle"
                  className={`theme-toggle ${dataTheme === 'light' && 'activate'}`}
                  onClick={() => handleDataThemeChange("dark-mode")}
                >
                  <i className="isax isax-sun-1" />
                </Link>
                <Link
                  to="#"
                  id="light-mode-toggle"
                  className={`theme-toggle ${dataTheme === 'dark-mode' && 'activate'}`}
                  onClick={() => handleDataThemeChange("light")}
                >
                  <i className="isax isax-moon" />
                </Link>
              </li>
              <li className="login-in-fourteen log-in-vet-head">
                <Link to="/register">
                  <i className="fa-regular fa-user me-2" />
                  Sign Up /{" "}
                </Link>{" "}
                <Link to="/login"> Sign In</Link>
              </li>
              <li className="searchbar searchbar-fourteen">
                <Link to="#" onClick={toggleSearch}>
                  <i className="feather icon-search" />
                </Link>
                <div className={searchField ? "togglesearch d-block" : "togglesearch d-none"}>
                  <form action="/patient/search-doctor2">
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </div>
  );
};

export default Home7Header;
