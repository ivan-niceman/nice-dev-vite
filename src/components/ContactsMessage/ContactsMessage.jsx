import PropTypes from 'prop-types';
import ok from '../../images/logo/good.svg';

ContactsMessage.propTypes = {
  formSubmitted: PropTypes.bool.isRequired,
};

export default function ContactsMessage({ formSubmitted }) {
  return (
    <div className={`contacts-block ${formSubmitted ? 'active-form' : ''}`}>
      <div className="contacts-message">
        <img src={ok} alt="Сообщение" />
        <h3 className="contacts-info">Ваша заявка принята!</h3>
      </div>
    </div>
  );
}
