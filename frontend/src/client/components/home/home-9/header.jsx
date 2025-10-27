import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import NavLinks from "../../nav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDataTheme } from "../../../../core/data/redux/themeSettingSlice";
const Home9Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleSearch, settoggleSearch] = useState(false);
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  const dataTheme = useSelector((state) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme) => {
    dispatch(setDataTheme(theme));
  };

  return (
    <div>
      {" "}
      {/* Header */}
      <header className={`header header-fixed header-fourteen ${isScrolled ? 'pharmacy-header' : ''}` }>
        <div className="container">
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
                    src="assets/img/logo-01.svg"
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
              <li className="login-in-fourteen">
                <Link to="/pages/login-email" className="btn reg-btnbtn btn-primary btn-md reg-btn">
                  <i className="isax isax-lock" />
                  Log In
                </Link>
              </li>
              <li className="login-in-fourteen">
                <Link
                  to="/signup"
                  className="btn btn-dark btn-md reg-btn reg-btn-fourteen"
                >
                  <i className="isax isax-user" />
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

export default Home9Header;
