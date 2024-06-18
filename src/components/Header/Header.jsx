import { useState, useEffect } from "react";
import { buttonAnimation } from "../../utils/buttonAnimation";
import Navigation from "../Navigation/Navigation";
import ContactsMessage from "../ContactsMessage/ContactsMessage";
import { Link } from "react-router-dom";

export default function Header() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Введите имя";
    }
    if (!formData.tel.trim()) {
      errors.tel = "Введите номер телефона";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.tel)) {
      errors.tel = "Не правильный формат. Пример: 7999999999";
    } else {
      formData.tel = formData.tel.replace(/\+/, '');
    }
    if (!formData.email.trim()) {
      errors.email = "Введите электронную почту";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Не правильный формат электронной почты";
    }
    if (!formData.message.trim()) {
      errors.message = "Введите текст";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
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
              tel: "",
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
    }
  };

  useEffect(() => {
    buttonAnimation(".form-btn", ".container-button");
  }, []);

  return (
    <header className="header">
      <span className="header__section-white" />
      <span className="header__section-yellow" />
      <div className="container">
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
              noValidate
            >
              <label className="popup-form-label">
                <input
                  type="text"
                  name="name"
                  className="form-contacts"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <span className="form-error">{formErrors.name}</span>
              </label>
              <label className="popup-form-label">
                <input
                  type="tel"
                  name="tel"
                  className="form-contacts"
                  placeholder="Телефон"
                  value={formData.tel}
                  onChange={handleInputChange}
                />
                <span className="form-error">{formErrors.tel}</span>
              </label>
              <label className="popup-form-label">
                <input
                  type="email"
                  name="email"
                  className="form-contacts"
                  placeholder="Эл. почта"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <span className="form-error">{formErrors.email}</span>
              </label>
              <label className="popup-form-label">
                <textarea
                  name="message"
                  id="message"
                  className="send-text"
                  placeholder="Ваши пожелания?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <span className="form-error">{formErrors.message}</span>
              </label>
              <div className="header__form-submit">
                <button
                  type="submit"
                  aria-label="отправить"
                  className="form-btn"
                >
                  <span className="container-button"></span>
                  <span>Отправить</span>
                </button>
                <p className="header__form-paragraph">
                  Отправляя сообщение вы соглашаетесь на&nbsp;
                  <Link
                    to="/privacy"
                    className="privacy"
                  >
                    обработку персональных данных
                  </Link>
                </p>
              </div>
            </form>
            <ContactsMessage formSubmitted={formSubmitted} />
          </section>
        </section>
      </div>
    </header>
  );
}
