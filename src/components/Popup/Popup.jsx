import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { buttonAnimation } from "../../utils/buttonAnimation";
import ContactsMessage from "../ContactsMessage/ContactsMessage";

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function Popup({ isOpen, onClose }) {
  const closePopup = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleOverlayClick = (event) => {
      if (isOpen && event.target.classList.contains("popup_opened")) {
        closePopup();
      }
    };

    const handleEscKey = (event) => {
      if (isOpen && (event.key === "Escape" || event.key === "Esc")) {
        closePopup();
      }
    };

    document.addEventListener("click", handleOverlayClick);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("click", handleOverlayClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [closePopup, isOpen]);

  // send form

  const [formData, setFormData] = useState({
    name: "",
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
        const response = await fetch("./php/form-popup.php", {
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
            closePopup();
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
    buttonAnimation(".popup__button", ".container-popup-button");
  }, []);

  return (
    <section className={`popup${isOpen ? " popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          aria-label="закрыть"
          type="button"
          className="popup__button-close"
          onClick={closePopup}
        />
        <h2 className="popup__title">Оставьте заявку</h2>
        <form
          id="form-popup"
          className="popup__form"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <label className="popup__form-label">
            <input
              type="text"
              name="name"
              placeholder="Введите ваше имя"
              className="popup__input"
              id="name-image-input"
              value={formData.name}
              onChange={handleInputChange}
            />
            <span className="form-error">{formErrors.name}</span>
          </label>
          <label className="popup__form-label">
            <input
              type="email"
              name="email"
              placeholder="Введите электронную почту"
              className="popup__input"
              id="image-link-input"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="form-error">{formErrors.email}</span>
          </label>
          <label className="popup__form-label">
            <textarea
              name="message"
              placeholder="Какой у вас вопрос?"
              className="popup__input popup__textarea"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <span className="form-error">{formErrors.message}</span>
          </label>
          <button
            type="submit"
            aria-label="отправить"
            className="popup__button"
          >
            <span className="container-popup-button"></span>
            <span>Отправить</span>
          </button>
          <p className="popup__form-paragraph">
            Отправляя сообщение вы соглашаетесь на&nbsp;
            <Link to="/privacy" className="privacy-popup">
              обработку персональных данных
            </Link>
          </p>
        </form>
        <ContactsMessage formSubmitted={formSubmitted} />
      </div>
    </section>
  );
}
