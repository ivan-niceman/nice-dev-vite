import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { buttonAnimation } from "../../utils/buttonAnimation";
import ContactsMessage from "../ContactsMessage/ContactsMessage";
import Preloader from "../Preloader/Preloader";

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default function Popup({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const handleEscKey = (event) => {
    if (isOpen && (event.key === "Escape" || event.key === "Esc")) {
      onClose();
    }
  };

  document.addEventListener("keydown", handleEscKey);

  // send form

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
      setLoading(true);
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
              tel: "",
              email: "",
              message: "",
            });
            onClose();
          }, 2000);
        } else {
          console.error("Ошибка отправки данных");
        }
      } catch (error) {
        console.error("Ошибка:", error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    buttonAnimation(".popup__button", ".container-popup-button");
  }, []);

  return (
    <section
      className={`popup${isOpen ? " popup_opened" : ""}`}
      onClick={onClose}
      >
      <div 
        className="popup__container"
        onClick={e => e.stopPropagation()}
        >
        <button
          aria-label="закрыть"
          type="button"
          className="popup__button-close"
          onClick={onClose}
        >
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 28.8L19.2 16L32 3.2L28.8 0L16 12.8L3.2 0L0 3.2L12.8 16L0 28.8L3.2 32L16 19.2L28.8 32L32 28.8Z"
              fill="none"
            />
          </svg>
        </button>
        <h2 className="popup__title">Оставьте заявку</h2>
        <form
          id="form-popup"
          className="popup__form"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <label className="popup-form-label">
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
          <label className="popup-form-label">
            <input
              type="tel"
              name="tel"
              placeholder="Введите номер телефона"
              className="popup__input"
              id="image-link-input"
              value={formData.tel}
              onChange={handleInputChange}
            />
            <span className="form-error">{formErrors.tel}</span>
          </label>
          <label className="popup-form-label">
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
          <label className="popup-form-label">
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
            {loading ? <Preloader /> : `Отправить`}
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
