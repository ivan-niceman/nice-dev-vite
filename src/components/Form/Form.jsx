import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from 'react';
import FormContext from '../../contexts/FormContext';
import { buttonAnimation } from '../../utils/buttonAnimation';
import {
  handleFocus,
  handleBlur,
  handleInputChange,
  handleFormSubmit,
} from '../../utils/formUtils';
import Preloader from '../Preloader/Preloader';
import { Link } from 'react-router-dom';

export default function Form({ onClose }) {
  const setFormSubmitted = useContext(FormContext);

  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    buttonAnimation('.form-btn', '.container-button');
  }, []);

  return (
    <form
      className="form"
      onSubmit={(e) =>
        handleFormSubmit(
          e,
          formData,
          'header',
          setFormErrors,
          setFormSubmitted,
          setLoading,
          setFormData,
          onClose,
        )
      }
      noValidate
    >
      <label className="form-label">
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
      <label className="form-label">
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
      <label className="form-label">
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
      <label className="form-label">
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
      <div className="form-submit">
        <button type="submit" aria-label="отправить" className="form-btn">
          <span className="container-button"></span>
          {loading ? <Preloader /> : `Отправить`}
        </button>
        <p className="form-paragraph">
          Отправляя сообщение вы соглашаетесь на&nbsp;
          <Link to="/privacy" className="privacy">
            обработку персональных данных
          </Link>
        </p>
      </div>
    </form>
  );
}

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  setFormSubmitted: PropTypes.func.isRequired,
};
