import { useState } from "react";

const accordionContent = [
  {
    title: `Что входит в создание сайта?`,
    content: `В создание сайта входит наш первичный маркетинговый анализ, разработка структуры сайта, дизайн сайта и верстка сайта по дизайн-макету.`,
  },
  {
    title: `Что, если мне не понравится дизайн?`,
    content: `Дизайн будет согласовываться с вами на всех этапах разработки.`,
  },
  {
    title: `Какие условия оплаты?`,
    content: `Предоплата 50%. Остальное по завершении работ.`,
  },
  {
    title: `Чем отличается шаблонный сайт от продающего сайта?`,
    content: `Продающий сайт создается с учетом текущего состояния рынка и запросов потребителя, и в связи с этим имеет более высокую конверсию.`,
  },
  {
    title: `Какие будут у меня дополнительные расходы?`,
    content: `Вам понадобится оплатить домен и ежегодно оплачивать хостинг. Также, если вы захотите заказать продвижение сайта, то у вас будут затраты на рекламу.`,
  },
  {
    title: `Какие гарантии вы предоставляете?`,
    content: `Даем гарантию 3 месяца. В течение этого срока, если на сайте произойдут какие-то неполадки, мы их устраним совершенно бесплатно.`,
  },
];

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  function clickHandler(index) {
    setOpenId(openId === index ? null : index);
  }

  return (
    <ul className="accordion">
      {accordionContent.map(({ title, content }, index) => (
        <li className="accordion-item" key={index}>
          <button
            className={`accordion-button ${openId === index ? "open" : ""}`}
            type="button"
            onClick={() => clickHandler(index)}
          >
            <p>{title}</p>
            <span>+</span>
          </button>
          <div className={`accordion-collapse ${openId === index ? "open" : ""}`}
          >
            <p className="questions__paragraph">{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
