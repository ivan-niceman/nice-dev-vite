import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo/logo.png';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import nav from '../Nav/Nav';
import social from '../Social/Social';

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    const page = document.querySelector('.page');
    page.classList.add('page-hidden');
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    const page = document.querySelector('.page');
    page.classList.remove('page-hidden');
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg header__nav">
        <Link smooth className="header__logo" to="/">
          <img src={logo} alt="логотип" />
          <p>web-studio</p>
        </Link>
        <ul className="header__menu">
          {nav.map((nav, index) => (
            <li
              className={`menu-item ${
                location.pathname === '/privacy'
                  ? 'menu-item-border-color-yellow'
                  : 'menu-item-border-color'
              }`}
              key={index}
            >
              <HashLink
                smooth
                className={`nav-link ${
                  location.pathname === '/privacy'
                    ? 'header__menu-text-yellow'
                    : 'header__menu-text'
                }`}
                to={`${nav.link}`}
              >
                {nav.name}
              </HashLink>
            </li>
          ))}
        </ul>
        <ul className="contacts-list">
          {social.map((social, index) => (
            <li className="contacts-item" key={index}>
              <Link
                to={social.link}
                className={`${
                  location.pathname === '/privacy'
                    ? 'contacts-link-yellow'
                    : 'contacts-link'
                }`}
                target="_blank"
              >
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
        <ToggleTheme id="dark" />
      </nav>

      <nav className="mobile-nav">
        <Link smooth className="header__logo" to="/">
          <img src={logo} alt="логотип" />
          <p>web-studio</p>
        </Link>
        <div className="burger-menu">
          <button
            className="burger-button"
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="burger"></span>
          </button>
        </div>
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? 'mobile-menu_visible' : ''
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
            <ul className="mobile-list">
              {nav.map((nav, index) => (
                <li className="mobile-item" key={index}>
                  <HashLink
                    smooth
                    className="nav-link mobile-link"
                    to={`${nav.link}`}
                    onClick={closeMobileMenu}
                  >
                    {nav.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          <ul className="contacts-list mobile-contacts-list">
            {social.map((social, index) => (
              <li className="contacts-item" key={index}>
                <Link
                  to={social.link}
                  className="contacts-link"
                  target="_blank"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`mobile-menu-section ${
            isMobileMenuOpen ? 'mobile-menu_visible' : ''
          }`}
          onClick={closeMobileMenu}
        />
      </nav>
    </>
  );
}
