import Accordion from '../Accordion/Accordion';
import FormButton from '../FormButton/FormButton';

export default function Questions() {
  return (
    <section className="questions container">
      <h2 className="main__title">Часто задаваемые вопросы</h2>
      <div className="section-questions">
        <div className="question-section-left">
          <div>
            <Accordion />
          </div>
        </div>
        <FormButton />
      </div>
    </section>
  );
}
