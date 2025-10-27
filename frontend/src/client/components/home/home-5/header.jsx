import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDataTheme } from "../../../../core/data/redux/themeSettingSlice";
import NavLinks from "../../nav";
const Home5Header = () => {
  const [headerClass, setHeaderClass] = useState(
    "header header-custom header-fixed header-ten"
  );
  const history = useHistory();

  const directionPath = () => {
    history.push('/patient/search-doctor1')
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setHeaderClass("header header-custom header-fixed header-ten header-space pharmacy-header");
      } else {
        setHeaderClass("header header-custom header-fixed header-ten");
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
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#"  onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home-1" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo-01.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home-1" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                    <NavLinks />
                  </ul>
            </div>
            <ul className="nav header-navbar-rht">
            <li className="header-theme">
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
              <li className="register-btn">
                <Link to="/pages/login-email" className="btn log-btn">
                  <i className="feather icon-lock" />
                  Login
                </Link>
              </li>
              <li className="register-btn">
                <Link to="/signup" className="btn reg-btn">
                  <i className="feather icon-user" />
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </div>
  );
};

export default Home5Header;
