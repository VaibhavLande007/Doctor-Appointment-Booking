import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDataTheme } from "../../../../core/data/redux/themeSettingSlice";
import NavLinks from "../../nav";
const Home2Header = () => {
  const [headerClass, setHeaderClass] = useState(
    "header header-trans header-two"
  );
  const dispatch = useDispatch();
  const dataTheme = useSelector((state) => state.themeSetting.dataTheme);
  const handleDataThemeChange = (theme) => {
    dispatch(setDataTheme(theme));
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setHeaderClass("header header-trans header-two pharmacy-header");
      } else {
        setHeaderClass("header header-trans header-two");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  return (
    <>
      {/* Header */}
      <header className={headerClass}>
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
                  src="assets/img/logo.png"
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
                <Link id="menu_close" className="menu-close" to="#" onClick={() => onhandleCloseMenu()}>
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
              <li className="nav-item">
                <Link className="nav-link header-login" to="/login">
                  login / Signup{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </>
  );
};

export default Home2Header;
