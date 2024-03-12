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
  return (
    <ul className="accordion" id="accordionExample">
      {accordionContent.map(({ title, content }, index) => (
        <li className="card accordion-item" key={index}>
          <h2 className="card-header">
            <button
              className="accordion-button accordion__button-image collapsed"
              type="button"
              data-toggle="collapse"
              data-target={`#collapse${index}`}
            >
              {title}
            </button>
              <svg
                className="accordion-icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3333 0L20.3333 40M0 19.6667H40"
                  strokeWidth="3"
                />
              </svg>
          </h2>
          <div
            id={`collapse${index}`}
            className="collapse"
            data-parent="#accordionExample"
          >
            <p className="card-body questions__paragraph">{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
