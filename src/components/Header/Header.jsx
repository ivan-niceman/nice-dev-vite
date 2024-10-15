import { useState, useEffect } from "react";
import { buttonAnimation } from "../../utils/buttonAnimation";
import { handleFocus, handleBlur, handleInputChange, handleFormSubmit } from "../../utils/formUtils";
import Navigation from "../Navigation/Navigation";
import ContactsMessage from "../ContactsMessage/ContactsMessage";
import Preloader from "../Preloader/Preloader";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    buttonAnimation(".form-btn", ".container-button");
  }, []);

  return (
    <header className="header">
      <span className="header__section-white" />
      <span className="header__section-yellow" />
      <div className="container">
        <Navigation />
        <div className="header__titles">
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
        </div>

        <div className="header__bottom">
          <span className="header__image"></span>
          <div className="header__section-form">
            <h2 className="header__form-title">бесплатная консультация</h2>
            <form
              className="header__form"
              onSubmit={(e) => handleFormSubmit(e, formData, "header", setFormErrors, setFormSubmitted, setLoading, setFormData)}
              noValidate
            >
              <label className="popup-form-label">
                <input
                  type="text"
                  name="name"
                  autoComplete="on"
                  className="form-contacts"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
                <span className="form-error">{formErrors.name}</span>
              </label>
              <label className="popup-form-label">
                <input
                  type="text"
                  name="tel"
                  className="form-contacts"
                  autoComplete="on"
                  placeholder="Номер телефона"
                  value={formData.tel}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <span className="form-error">{formErrors.tel}</span>
              </label>
              <label className="popup-form-label">
                <input
                  type="email"
                  name="email"
                  className="form-contacts"
                  autoComplete="on"
                  placeholder="Электронная почта"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
                />
                <span className="form-error">{formErrors.email}</span>
              </label>
              <label className="popup-form-label">
                <textarea
                  name="message"
                  className="send-text"
                  autoComplete="on"
                  placeholder="Какой у вас вопрос?"
                  value={formData.message}
                  onChange={(e) => handleInputChange(e, formData, setFormData)}
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
                  {loading ? <Preloader /> : `Отправить`}
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
          </div>
        </div>
      </div>
    </header>
  );
}
