import "./Questions.css";
import { useState } from "react";
import Popup from "../Popup/Popup";

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
            <ul className="accordion" id="accordionExample">
              <li className="card accordion-item">
                <h2 className="card-header">
                  <button
                    className="accordion-button accordion__button-image collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                  >
                    Что входит в создание сайта?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <p className="card-body questions__paragraph">
                    В создание сайта входит наш первичный маркетинговый анализ,
                    разработка структуры сайта, дизайн сайта и верстка сайта по
                    дизайн-макету.
                  </p>
                </div>
              </li>
              <li className="card accordion-item">
                <h2 className="card-header">
                  <button
                    className="accordion-button accordion__button-image collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne2"
                  >
                    Что, если мне не понравится дизайн?
                  </button>
                </h2>
                <div
                  id="collapseOne2"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <p className="card-body questions__paragraph">
                    Дизайн будет согласовываться с вами на всех этапах
                    разработки.
                  </p>
                </div>
              </li>
              <li className="card accordion-item">
                <h2 className="card-header">
                  <button
                    className="accordion-button accordion__button-image collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne3"
                  >
                    Какие условия оплаты?
                  </button>
                </h2>
                <div
                  id="collapseOne3"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <p className="card-body questions__paragraph">
                    Предоплата 50%. Остальное по завершении работ.
                  </p>
                </div>
              </li>
              <li className="card accordion-item">
                <h2 className="card-header">
                  <button
                    className="accordion-button accordion__button-image collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne4"
                  >
                    чем отличается шаблонный сайт от продающего сайта?
                  </button>
                </h2>
                <div
                  id="collapseOne4"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <p className="card-body questions__paragraph">
                    Продающий сайт создается с учетом текущего состояния рынка и
                    запросов потребителя, и в связи с этим имеет более высокую
                    конверсию.
                  </p>
                </div>
              </li>
              <li className="card accordion-item">
                <h2 className="card-header">
                  <button
                    className="accordion-button accordion__button-image collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne5"
                  >
                    какие будут у меня дополнительные расходы?
                  </button>
                </h2>
                <div
                  id="collapseOne5"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <p className="card-body questions__paragraph">
                    Вам понадобится оплатить домен и ежегодно оплачивать
                    хостинг. Также, если вы захотите заказать продвижение сайта,
                    то у вас будут затраты на рекламу.
                  </p>
                </div>
              </li>
              <li className="card accordion-item">
                <h2 className="card-header">
                  <button
                    className="accordion-button accordion__button-image collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne6"
                  >
                    какие гарантии вы предоставляете?
                  </button>
                </h2>
                <div
                  id="collapseOne6"
                  className="collapse"
                  data-parent="#accordionExample"
                >
                  <p className="card-body questions__paragraph">
                    Даем гарантию 3 месяца. В течение этого срока, если на сайте
                    произойдут какие-то неполадки, мы их устраним совершенно
                    бесплатно.
                  </p>
                </div>
              </li>
            </ul>
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
