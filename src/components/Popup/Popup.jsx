import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { buttonAnimation } from '../../utils/buttonAnimation';
import Form from '../Form/Form';

export default function Popup({ isOpen, onClose }) {
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
    <div className={`popup${isOpen ? ' popup_opened' : ''}`} onClick={onClose}>
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
        <Form onClose={onClose} />
      </div>
    </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
