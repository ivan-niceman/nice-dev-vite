import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { buttonAnimation } from '../../utils/buttonAnimation';
import { handleFocus, handleBlur, handleInputChange, handleFormSubmit } from '../../utils/formUtils';
import ContactsMessage from '../ContactsMessage/ContactsMessage';
import Preloader from '../Preloader/Preloader';

export default function Popup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    buttonAnimation('.popup__button', '.container-popup-button');

    const handleEscKey = (event) => {
      if (isOpen && (event.key === 'Escape' || event.key === 'Esc')) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <section
      className={`popup${isOpen ? ' popup_opened' : ''}`}
      onClick={onClose}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
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
          className="popup__form"
          onSubmit={(e) => handleFormSubmit(e, formData, "popup", setFormErrors, setFormSubmitted, setLoading, setFormData, onClose)}
          noValidate
        >
          <label className="popup-form-label">
            <input
              type="text"
              name="name"
              autoComplete="on"
              placeholder="Ваше имя"
              className="popup__input"
              value={formData.name}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
            />
            <span className="form-error">{formErrors.name}</span>
          </label>
          <label className="popup-form-label">
            <input
              type="text"
              name="tel"
              autoComplete="on"
              placeholder="Номер телефона"
              className="popup__input"
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
              autoComplete="on"
              placeholder="Электронная почта"
              className="popup__input"
              value={formData.email}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
            />
            <span className="form-error">{formErrors.email}</span>
          </label>
          <label className="popup-form-label">
            <textarea
              name="message"
              placeholder="Какой у вас вопрос?"
              className="popup__input popup__textarea"
              autoComplete="on"
              value={formData.message}
              onChange={(e) => handleInputChange(e, formData, setFormData)}
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

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
