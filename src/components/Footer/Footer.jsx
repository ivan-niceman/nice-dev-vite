import "./Footer.css";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer">
      <div className="footer__nav">
        <HashLink smooth to="/" className="footer__logo" />
        <ul className="footer__list-menu">
          <li className="footer__item-menu">
            <HashLink smooth className="nav-link footer__link-menu" to="#about">
              о нас
            </HashLink>
          </li>
          <li className="footer__item-menu">
            <HashLink smooth className="nav-link footer__link-menu" to="#services">
              услуги
            </HashLink>
          </li>
          <li className="footer__item-menu">
            <HashLink smooth className="nav-link footer__link-menu" to="#price">
              цены
            </HashLink>
          </li>
          <li className="footer__item-menu">
            <HashLink smooth className="nav-link footer__link-menu" to="#portfolio">
              портфолио
            </HashLink>
          </li>
        </ul>
        <ul className="contacts-list">
          <li className="contacts-item">
            <a href="https://telegram.im/@NataChoco" className="contacts-link" target="_blank" rel="noreferrer"> </a>
          </li>
          <li className="contacts-item">
            <a href="https://wa.me/+79775784438" className="contacts-link" target="_blank" rel="noreferrer"> </a>
          </li>
          <li className="contacts-item">
            <a href="mailto:nice-dev@list.ru" className="contacts-link" target="_blank" rel="noreferrer"> </a>
          </li>
        </ul>
      </div>
      <HashLink smooth to="/" className="nice-dev">
        © Nice Dev Web-Studio 2020 - {getCurrentYear()}
      </HashLink>
    </footer>
  );
}
