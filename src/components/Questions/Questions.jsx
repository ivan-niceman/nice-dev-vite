import { useState } from "react";
import Popup from "../Popup/Popup";
import Accordion from "../Accordion/Accordion";

export default function Questions() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopupForm = () => {
    setIsPopupOpen(true);
  };

  const closePopupForm = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="questions container">
      <h2 className="main__title">Часто задаваемые вопросы</h2>
      <div className="section-questions">
        <div className="question-section-left">
          <div>
            <Accordion />
          </div>
        </div>
        <div className="question-section-right">
          <button
            type="button"
            className="question-button"
            onClick={openPopupForm}
          >
            Хотите
            <br />
            посотрудничать?
          </button>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={closePopupForm} />
    </section>
  );
}
