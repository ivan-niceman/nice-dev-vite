import yesIcon from '../../images/icons/yes.svg';
import noIcon from '../../images/icons/no.svg';

export default function WhyWe() {
  const tableRow = [
    {
      description: `Разработаны с акцентом на необходимые функции, обеспечивая высокую скорость работы и эффективность.`,
    },
    {
      description: `Минимальные требования к серверным ресурсам благодаря легкости кода, позволяющие экономить на хостинге.`,
    },
    {
      description: `Простота в поддержке и обновлении.`,
    },
    {
      description: `Разработаны для долгосрочной работы без необходимости постоянных обновлений.`,
    },
    {
      description: `Полная адаптивность под любые устройства, удобство чтения и использования без масштабирования.`,
    },
    {
      description: `Встроенная SEO-оптимизация с начальных этапов разработки для улучшения позиций в поисковых системах.`,
    },
    {
      description: `Уникальный дизайн`,
    },
    {
      description: `Бесплатная корректировка шаблона под ваш бренд в рамках установленных правил.`,
    },
    {
      description: `Три месяца бесплатной технической поддержки.`,
    },
    {
      description: `Помогаем в регистрации хостинга и домена, облегчая начало работы с вашим новым сайтом.`,
    },
    {
      description: `Бесплатная установка и консультация по Яндекс-Метрике.`,
    },
  ];

  return (
    <section className="our-advantages">
      <div className="container">
        <h2 className="our-advantages__title main__title">
          преимущества шаблонов от nice-dev
        </h2>
        <ul className="our-advantages__list">
          <li>
            <p></p>
            <p className="our-advantages__text">наши шаблоны</p>
            <p className="our-advantages__text">другие шаблоны</p>
          </li>
          {tableRow.map((tableRow, index) => (
            <li key={index}>
              <p className="our-advantages__description">
                {tableRow.description}
              </p>
              <img
                src={yesIcon}
                alt="иконка"
                className="our-advantages__icon"
              />
              <img src={noIcon} alt="иконка" className="our-advantages__icon" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
