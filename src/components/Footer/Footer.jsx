import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";

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
  ]

export default function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer">
      <div className="footer__nav container">
        <HashLink smooth to="/" className="footer__logo">
          <img src={logo} alt="логотип" />
          <p>web-studio</p>
        </HashLink>

        <ul className="footer__list-menu">
          {nav.map((nav, index) => (
            <li className="footer__item-menu" key={index}>
            <HashLink smooth className="footer__link-menu" to={`/#${nav.link}`}>
              {nav.name}
            </HashLink>
          </li>
          ))}
        </ul>

        <ul className="contacts-list">
          {social.map((social, index) => (
            <li key={index}>
            <Link
              to={social.link}
              className="footer-contacts-link"
              target="_blank"
            >
              {social.icon}
            </Link>
          </li>
          ))}
        </ul>
      </div>
      <HashLink smooth to="/" className="nice-dev">
        © Nice Dev Web-Studio 2020 - {getCurrentYear()}
      </HashLink>
    </footer>
  );
}
