import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import NavLinks from "../../nav";
import { Dropdown } from 'primereact/dropdown';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDataTheme } from "../../../../core/data/redux/themeSettingSlice";

const Home13Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleSearch, settoggleSearch] = useState(false);
  const cities = [
    { name: 'English', code: 'AU' },
    { name: 'Japanese', code: 'BR' },
  ];
  const [selectedCity, setSelectedCity] = useState(cities[0]);
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
      <header className={`header header-custom header-fixed header-ten home-care-header ${isScrolled ? ' header-space pharmacy-header' : ''}`}>
        <div className="header-top-wrap">
          <div className="container">
            <div className="header-top-bar">
              <ul className="header-contact m-0 p-0">
                <li>
                  <i className="fa-solid fa-envelope" />
                  doccure@example.com
                </li>
                <li>
                  <i className="fa-solid fa-location-dot" />
                  231 madison Street, NewYork, USA
                </li>
              </ul>
              <ul className="social-icon m-0 p-0">
                <li>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Language" className="select icon-select" />
                </li>
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
          </div>
        </div>
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
              <NavLinks/>
                <li className="login-link">
                  <Link to="/pages/login-email">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="searchbar">
                <Link to="#" onClick={()=>settoggleSearch(!toggleSearch)}>
                  <i className="feather icon-search" />
                </Link>
                <div className={`togglesearch ${toggleSearch ? 'd-block': ''}`}>
                  <form action="/patient/search-doctor">
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <button type="submit" className="btn btn-primary">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </li>
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

export default Home13Header;
