import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo/logo.png";
import "./Navigation.css";

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
              href="https://telegram.im/@NataChoco"
              className="contacts-link"
              target="_blank"
              rel="noreferrer"
            > </a>
          </li>
          <li className="contacts-item">
            <a
              href="https://wa.me/+79775784438"
              className="contacts-link"
              target="_blank"
              rel="noreferrer"
            > </a>
          </li>
          <li className="contacts-item">
            <a
              href="mailto:nice-dev@list.ru"
              className="contacts-link"
              target="_blank"
              rel="noreferrer"
            > </a>
          </li>
        </ul>
      </nav>

      <nav className="mobile-nav">
        <HashLink smooth className="navbar-brand p-0 header__logo" to="/">
          <img src={logo} alt="логотип" width="130" height="50" />
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
                href="https://telegram.im/@NataChoco"
                className="contacts-link"
                target="_blank"
                rel="noreferrer"
              > </a>
            </li>
            <li className="contacts-item">
              <a
                href="https://wa.me/+79775784438"
                className="contacts-link"
                target="_blank"
                rel="noreferrer"
              > </a>
            </li>
            <li className="contacts-item">
              <a
                href="mailto:nice-dev@list.ru"
                className="contacts-link"
                target="_blank"
                rel="noreferrer"
              > </a>
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
