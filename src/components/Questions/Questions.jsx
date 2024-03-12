import { useState } from "react";
import Popup from "../Popup/Popup";
import Accordion from "../Accordion/Accordion";

export default function Questions() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section className="questions">
      <h2 className="main__title">Часто задаваемые вопросы</h2>
      <section className="section-questions">
        <section className="question-section-left">
          <div>
            <Accordion />
          </div>
        </section>
        <section className="question-section-right">
          <button
            type="button"
            className="question-button"
            onClick={togglePopup}
          >
            Хотите
            <br />
            посотрудничать?
          </button>
        </section>
      </section>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  );
}
