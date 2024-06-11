import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo/logo.png";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

import Telegram from "../SocialIcons/Telegram";
import Whatsapp from "../SocialIcons/Whatsapp";
import Mail from "../SocialIcons/Mail";
import Vkontakte from "../SocialIcons/Vkontakte";

const nav = [
  {
    link: "about",
    name: "о нас",
  },
  {
    link: "services",
    name: "услуги",
  },
  {
    link: "price",
    name: "цены",
  },
  {
    link: "portfolio",
    name: "портфолио",
  },
  {
    link: "feedback",
    name: "отзывы",
  },
];

const social = [
  {
    link: "https://t.me/ivan_niceman",
    icon: <Telegram />,
  },
  {
    link: "https://wa.me/+79067075235",
    icon: <Whatsapp />,
  },
  {
    link: "mailto:nice-dev@list.ru",
    icon: <Mail />,
  },
  {
    link: "https://vk.com/nicedevwebstudio",
    icon: <Vkontakte />,
  },
];

export default function Navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    const page = document.querySelector(".page");
    page.classList.add("page-hidden");
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    const page = document.querySelector(".page");
    page.classList.remove("page-hidden");
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg header__nav">
        <HashLink smooth className="navbar-brand header__logo" to="/">
          <img src={logo} alt="логотип" />
          <p>web-studio</p>
        </HashLink>
        <ul className="navbar-nav me-auto mb-lg-0 navbar-nav-scroll header__menu">
          {nav.map((nav, index) => (
            <li className={`menu-item ${location.pathname === "/" ? "menu-item-border-color" : "menu-item-border-color-yellow"}`} key={index}>
              <HashLink
                smooth
                className={`nav-link ${location.pathname === "/" ? "header__menu-text" : "header__menu-text-yellow"}`}
                to={`/#${nav.link}`}
              >
                {nav.name}
              </HashLink>
            </li>
          ))}
        </ul>
        <ul className="contacts-list">
          {social.map((social, index) => (
            <li className="contacts-item" key={index}>
              <Link to={social.link} className={`${location.pathname === "/" ? "contacts-link" : "contacts-link-yellow"}`} target="_blank">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
        <ToggleTheme id="dark" />
      </nav>

      <nav className="mobile-nav">
        <HashLink smooth className="header__logo" to="/">
          <img src={logo} alt="логотип" />
          <p>web-studio</p>
        </HashLink>
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
              {nav.map((nav, index) => (
                <li className="mobile-item" key={index}>
                  <HashLink
                    smooth
                    className="nav-link mobile-link"
                    to={`#${nav.link}`}
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
              <Link to={social.link} className="contacts-link" target="_blank">
                {social.icon}
              </Link>
            </li>
          ))}
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
