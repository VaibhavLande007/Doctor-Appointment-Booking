import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { Dropdown } from 'primereact/dropdown';
import { ChevronDownIcon } from 'primereact/icons/chevrondown';
import { ChevronRightIcon } from 'primereact/icons/chevronright';
import NavLinks from "../../nav";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDataTheme } from "../../../../core/data/redux/themeSettingSlice";

const Home8Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleSearch, settoggleSearch] = useState(false);
  const countries = [
    { name: 'English', code: 'AU',img:"assets/img/flags/us.png" },
    { name: 'Japan', code: 'BR', img:"assets/img/flags/jp.png" },
    
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    const selectedCountryTemplate = (option, props) => {
      if (option) {
          return (
              <div className="d-flex align-items-center">
                   <ImageWithBasePath
                  src={option.img}
                  className='flag-width'
                  alt="Logo"
                />
                  <div>{option.name}</div>
              </div>
          );
      }

      return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
      return (
          <div className="d-flex align-items-center">
              <ImageWithBasePath
                  src={option.img}
                  className='flag-width'
                  alt="Logo"
                />
              <div>{option.name}</div>
          </div>
      );
  };
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


  return (
    <div>
      {" "}
      {/* Header */}
      <header className={`header header-fixed header-fourteen header-twelve header-thirteen header-prime 
      ${isScrolled ? 'header-fixed pharmacy-header' : ''}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#0" onClick={() => onHandleMobileMenu()}>
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
                  to="#0"
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
              <li className="flag-nav">
                {/* <select className="flag-img">
                  <option data-image="assets/img/flags/us.png"> English</option>
                  <option data-image="assets/img/flags/jp.png">Japanese</option>
                </select> */}
                <div className="flag-img card flex justify-content-center">
                  <Dropdown variant="filled" value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} 
                    dropdownIcon={(opts) => {
                        return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                    }}/>
        </div>
              </li>
              <li className="login-in">
                <Link to="/pages/login-email" className="btn sign-btn">
                  <i className="fa-solid fa-lock" />
                  Sign In
                </Link>
              </li>
              <li className="login-in">
                <Link to="/signup" className="btn reg-btn">
                  <i className="fa-solid fa-user" />
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

export default Home8Header;
