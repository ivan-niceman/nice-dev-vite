import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo/logo.png";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0 header__nav">
        <HashLink smooth className="navbar-brand p-0 header__logo" to="/">
          <img src={logo} alt="логотип" />
          <p>web-studio</p>
        </HashLink>
        <ul className="navbar-nav me-auto mb-lg-0 navbar-nav-scroll header__menu">
          <li className="nav-item menu-item">
            <HashLink
              smooth
              className="nav-link active header__menu-text"
              aria-current="page"
              to="#about"
              replace
            >
              о нас
            </HashLink>
          </li>
          <li className="nav-item menu-item">
            <HashLink
              smooth
              className="nav-link active header__menu-text"
              aria-current="page"
              to="#services"
            >
              услуги
            </HashLink>
          </li>
          <li className="nav-item menu-item">
            <HashLink
              smooth
              className="nav-link active header__menu-text"
              aria-current="page"
              to="#price"
            >
              цены
            </HashLink>
          </li>
          <li className="nav-item menu-item">
            <HashLink
              smooth
              className="nav-link active header__menu-text"
              aria-current="page"
              to="#portfolio"
            >
              портфолио
            </HashLink>
          </li>
        </ul>
        <ul className="contacts-list">
          <li className="contacts-item">
            <a
              href="https://t.me/ivan_niceman"
              className="contacts-link"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                fill="transparent"
                xmlSpace="preserve"
              >
                <path
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  d="M43.361,7.242
	C42.077,7.758,5.633,23.389,5.633,23.389s-1.765,0.614-1.625,1.748s1.58,1.653,1.58,1.653l9.38,3.212c0,0,2.832,9.448,3.39,11.241
	c0.558,1.796,1.004,1.838,1.004,1.838c0.518,0.23,0.992-0.137,0.992-0.137l6.061-5.622l9.448,7.369
	c2.554,1.134,3.483-1.228,3.483-1.228l6.509-33.925C46.431,6.913,44.717,6.699,43.361,7.242z"
                />
                <polyline
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="15,30 39,14 22,34 "
                />
                <polyline
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="20,43 22,34 26,37 "
                />
              </svg>
            </a>
          </li>
          <li className="contacts-item">
            <a
              href="https://wa.me/+79775784438"
              className="contacts-link"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M19.102,15.022c-0.479-1.137-0.966-0.983-1.329-1.001C17.429,14.005,17.036,14,16.642,14c-0.394,0-1.033,0.146-1.575,0.73S13,16.724,13,19.594s2.116,5.641,2.411,6.031c0.296,0.389,4.164,6.278,10.087,8.804c1.409,0.6,2.509,0.959,3.366,1.228c1.414,0.444,2.702,0.381,3.72,0.231c1.134-0.167,3.494-1.411,3.986-2.772c0.492-1.362,0.492-2.529,0.344-2.772c-0.148-0.243-0.542-0.389-1.132-0.681c-0.59-0.292-3.494-1.703-4.036-1.896c-0.542-0.195-0.935-0.292-1.329,0.292c-0.394,0.584-1.525,1.896-1.869,2.286c-0.344,0.389-0.689,0.438-1.279,0.146c-0.59-0.292-2.494-0.907-4.748-2.894c-1.756-1.546-2.941-3.455-3.285-4.039s-0.037-0.899,0.259-1.19c0.266-0.262,0.59-0.681,0.886-1.022c0.296-0.341,0.394-0.584,0.59-0.973s0.098-0.73-0.05-1.022C20.775,19.059,19.594,16.19,19.102,15.022z"
                />
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M25,3C12.85,3,3,12.85,3,25c0,4.072,1.111,7.884,3.04,11.155L3,47l11.274-2.793C17.448,45.983,21.104,47,25,47c12.15,0,22-9.85,22-22S37.15,3,25,3z"
                />
              </svg>
            </a>
          </li>
          <li className="contacts-item">
            <a
              href="mailto:nice-dev@list.ru"
              className="contacts-link mail-icon"
              target="_blank"
              rel="noreferrer"
            >
              <svg
              className="svg-mail-icon"
              width="30"
                height="25"
                viewBox="0 0 40 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.9913 0.735294C40.0029 0.669551 40.0029 0.602508 39.9913 0.536764L39.9433 0.455882C39.9209 0.402512 39.8853 0.354676 39.8393 0.316177C39.8216 0.288976 39.7969 0.266236 39.7673 0.25C39.7221 0.209357 39.671 0.174709 39.6154 0.147059H39.5274C39.4295 0.0744442 39.3145 0.0240616 39.1915 0H0.801479C0.705567 0.00158459 0.610748 0.0190189 0.521552 0.0514704H0.433575C0.377961 0.0791206 0.326815 0.113769 0.281614 0.154412C0.253744 0.172593 0.22941 0.194966 0.209633 0.220588C0.165334 0.260429 0.130003 0.3079 0.10566 0.360294L0.0576729 0.441177C0.0131279 0.533531 -0.00609571 0.634521 0.00168731 0.735294V24.2647C0.00168731 24.4597 0.085951 24.6467 0.235941 24.7846C0.385931 24.9225 0.589361 25 0.801479 25H39.1915C39.4036 25 39.607 24.9225 39.757 24.7846C39.907 24.6467 39.9913 24.4597 39.9913 24.2647V0.735294ZM36.6801 1.47059L19.9965 12.3309L3.31282 1.47059H36.6801ZM1.60127 23.5294V2.15441L19.5326 13.8382C19.6681 13.9269 19.8302 13.9745 19.9965 13.9745C20.1628 13.9745 20.3249 13.9269 20.4604 13.8382L38.3917 2.15441V23.5294H1.60127Z"
                  fill="#000"
                />
              </svg>
            </a>
          </li>
        </ul>
        <ToggleTheme id="dark" />
      </nav>

      <nav className="mobile-nav">
        <HashLink smooth className="navbar-brand p-0 header__logo" to="/">
          <img src={logo} alt="логотип" />
          <p>web-studio</p>
        </HashLink>
        <div className="container-fluid burger-menu">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="burger"></span>
          </button>
        </div>
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "mobile-menu_visible" : ""
          }`}
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              onClick={closeMobileMenu}
            >
              <span></span>
              <span></span>
            </button>
            <ToggleTheme id="dark-mobile" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 mobile-list">
              <li className="nav-item mobile-item">
                <HashLink
                  smooth
                  className="nav-link mobile-link"
                  aria-current="page"
                  to="#about"
                >
                  о нас
                </HashLink>
              </li>
              <li className="nav-item mobile-item">
                <HashLink
                  smooth
                  className="nav-link mobile-link"
                  to="#services"
                >
                  услуги
                </HashLink>
              </li>
              <li className="nav-item mobile-item">
                <HashLink smooth className="nav-link mobile-link" to="#price">
                  цены
                </HashLink>
              </li>
              <li className="nav-item mobile-item">
                <HashLink
                  smooth
                  className="nav-link mobile-link"
                  to="#portfolio"
                >
                  портфолио
                </HashLink>
              </li>
            </ul>
          </div>
          <ul className="contacts-list mobile-contacts-list">
            <li className="contacts-item">
              <a
                href="https://t.me/ivan_niceman"
                className="contacts-link"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                fill="transparent"
                xmlSpace="preserve"
              >
                <path
                  stroke="#000"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  d="M43.361,7.242
	C42.077,7.758,5.633,23.389,5.633,23.389s-1.765,0.614-1.625,1.748s1.58,1.653,1.58,1.653l9.38,3.212c0,0,2.832,9.448,3.39,11.241
	c0.558,1.796,1.004,1.838,1.004,1.838c0.518,0.23,0.992-0.137,0.992-0.137l6.061-5.622l9.448,7.369
	c2.554,1.134,3.483-1.228,3.483-1.228l6.509-33.925C46.431,6.913,44.717,6.699,43.361,7.242z"
                />
                <polyline
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="15,30 39,14 22,34 "
                />
                <polyline
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="20,43 22,34 26,37 "
                />
              </svg>
              </a>
            </li>
            <li className="contacts-item">
              <a
                href="https://wa.me/+79775784438"
                className="contacts-link"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="25px"
                height="25px"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M19.102,15.022c-0.479-1.137-0.966-0.983-1.329-1.001C17.429,14.005,17.036,14,16.642,14c-0.394,0-1.033,0.146-1.575,0.73S13,16.724,13,19.594s2.116,5.641,2.411,6.031c0.296,0.389,4.164,6.278,10.087,8.804c1.409,0.6,2.509,0.959,3.366,1.228c1.414,0.444,2.702,0.381,3.72,0.231c1.134-0.167,3.494-1.411,3.986-2.772c0.492-1.362,0.492-2.529,0.344-2.772c-0.148-0.243-0.542-0.389-1.132-0.681c-0.59-0.292-3.494-1.703-4.036-1.896c-0.542-0.195-0.935-0.292-1.329,0.292c-0.394,0.584-1.525,1.896-1.869,2.286c-0.344,0.389-0.689,0.438-1.279,0.146c-0.59-0.292-2.494-0.907-4.748-2.894c-1.756-1.546-2.941-3.455-3.285-4.039s-0.037-0.899,0.259-1.19c0.266-0.262,0.59-0.681,0.886-1.022c0.296-0.341,0.394-0.584,0.59-0.973s0.098-0.73-0.05-1.022C20.775,19.059,19.594,16.19,19.102,15.022z"
                />
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M25,3C12.85,3,3,12.85,3,25c0,4.072,1.111,7.884,3.04,11.155L3,47l11.274-2.793C17.448,45.983,21.104,47,25,47c12.15,0,22-9.85,22-22S37.15,3,25,3z"
                />
              </svg>
              </a>
            </li>
            <li className="contacts-item">
              <a
                href="mailto:nice-dev@list.ru"
                className="contacts-link mail-icon"
                target="_blank"
                rel="noreferrer"
              >
                <svg
              className="svg-mail-icon"
                width="30"
                height="25"
                viewBox="0 0 40 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.9913 0.735294C40.0029 0.669551 40.0029 0.602508 39.9913 0.536764L39.9433 0.455882C39.9209 0.402512 39.8853 0.354676 39.8393 0.316177C39.8216 0.288976 39.7969 0.266236 39.7673 0.25C39.7221 0.209357 39.671 0.174709 39.6154 0.147059H39.5274C39.4295 0.0744442 39.3145 0.0240616 39.1915 0H0.801479C0.705567 0.00158459 0.610748 0.0190189 0.521552 0.0514704H0.433575C0.377961 0.0791206 0.326815 0.113769 0.281614 0.154412C0.253744 0.172593 0.22941 0.194966 0.209633 0.220588C0.165334 0.260429 0.130003 0.3079 0.10566 0.360294L0.0576729 0.441177C0.0131279 0.533531 -0.00609571 0.634521 0.00168731 0.735294V24.2647C0.00168731 24.4597 0.085951 24.6467 0.235941 24.7846C0.385931 24.9225 0.589361 25 0.801479 25H39.1915C39.4036 25 39.607 24.9225 39.757 24.7846C39.907 24.6467 39.9913 24.4597 39.9913 24.2647V0.735294ZM36.6801 1.47059L19.9965 12.3309L3.31282 1.47059H36.6801ZM1.60127 23.5294V2.15441L19.5326 13.8382C19.6681 13.9269 19.8302 13.9745 19.9965 13.9745C20.1628 13.9745 20.3249 13.9269 20.4604 13.8382L38.3917 2.15441V23.5294H1.60127Z"
                  fill="#000"
                />
              </svg>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`mobile-menu-section ${
            isMobileMenuOpen ? "mobile-menu_visible" : ""
          }`}
          onClick={closeMobileMenu}
        />
      </nav>
    </>
  );
}
