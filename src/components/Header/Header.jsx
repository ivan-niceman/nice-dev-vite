import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { buttonAnimation } from "../../utils/buttonAnimation";
import Navigation from "../Navigation/Navigation";
import ContactsMessage from "../ContactsMessage/ContactsMessage";
import "./Header.css";

export default function Header() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("./php/send-form-header.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        }, 2000);
      } else {
        console.error("Ошибка отправки данных");
      }
    } catch (error) {
      console.error("Ошибка:", error.message);
    }
  };

  useEffect(() => {
    buttonAnimation(".form-btn", ".container-button");
  }, []);

  return (
    <header className="header">
      <span className="header__section-white"></span>
      <span className="header__section-yellow"></span>
      <Navigation />
      <section className="header__titles">
        <h1 className="header__title-left">
          СОБИРАЕМ И ЗАПУСКАЕМ
          <span className="header__title-left-color"> ПРОДАЮЩИЕ </span>
          САЙТЫ турфирм
        </h1>
        <h2 className="header__title-right">
          создаем
          <span className="header__title-right-color"> успешный </span> и
          узнаваемый бренд
        </h2>
      </section>

      <section className="header__bottom">
        <span className="header__image"></span>
        <section className="header__section-form">
          <h2 className="header__form-title">бесплатная консультация</h2>
          <form
            id="form-header"
            className="header__form"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              name="name"
              className="form-contacts"
              placeholder="Имя"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-contacts"
              placeholder="Эл. почта"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              id="message"
              className="send-text"
              placeholder="Ваши пожелания?"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <div className="header__form-submit">
              <button type="submit" aria-label="отправить" className="form-btn">
                <span className="container-button"></span>
                <span>Отправить</span>
              </button>
              <p className="header__form-paragraph">
                Отправляя сообщение вы соглашаетесь на&nbsp;
                <Link to="/privacy" className="privacy">
                  обработку персональных данных
                </Link>
              </p>
            </div>
          </form>
          <ContactsMessage formSubmitted={formSubmitted} />
        </section>
      </section>
    </header>
  );
}
