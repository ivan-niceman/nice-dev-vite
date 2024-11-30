import { useState } from 'react';
import Popup from '../Popup/Popup';

export default function FormButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopupForm = () => {
    setIsPopupOpen(true);
  };

  const closePopupForm = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <button type="button" className="question-button" onClick={openPopupForm}>
        Получить
        <br />
        консультацию
      </button>
      <Popup isOpen={isPopupOpen} onClose={closePopupForm} />
    </>
  );
}
