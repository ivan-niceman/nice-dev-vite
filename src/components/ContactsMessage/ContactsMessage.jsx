import { useEffect } from "react";
import PropTypes from "prop-types";
import "./ContactsMessage.css";
import ok from "../../images/logo/good.svg";

ContactsMessage.propTypes = {
  formSubmitted: PropTypes.bool.isRequired,
};

export default function ContactsMessage({ formSubmitted }) {
  useEffect(() => {
    const contactsBlock = document.querySelector(".contacts-block");
    if (formSubmitted) {
      contactsBlock.classList.add("active-form");

      setTimeout(() => {
        contactsBlock.classList.remove("active-form");
      }, 2000);
    }
  }, [formSubmitted]);

  return (
    <div className="contacts-block">
      <div className="contacts-message">
        <img src={ok} alt="Сообщение" />
        <h3 className="contacts-info">Ваша заявка принята!</h3>
      </div>
    </div>
  );
}
