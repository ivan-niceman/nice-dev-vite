import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import nav from '../Nav/Nav';
import social from '../Social/Social';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__nav container">
        <Link smooth to="/" className="footer__logo">
          <img src={logo} alt="логотип" />
          <p>web-studio</p>
        </Link>

        <ul className="footer__list-menu">
          {nav.map((nav, index) => (
            <li className="footer__item-menu" key={index}>
              <HashLink smooth className="footer__link-menu" to={`${nav.link}`}>
                {nav.name}
              </HashLink>
            </li>
          ))}
        </ul>

        <ul className="contacts-list">
          {social.map((social, index) => (
            <li key={index}>
              <Link to={social.link} target="_blank">
                {social.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link smooth to="/" className="nice-dev">
        © Nice Dev Web-Studio 2020 - {currentYear}
      </Link>
    </footer>
  );
}
