const priceContent = [
  {
    work: `фирменный стиль, логотип`,
    price: `1-5к`,
    time: `до 1 месяца`,
    description: `Индивидуальная разработка вашего фирменного стиля, логотипа и
    торгового знака. Сделаем ваш бизнес запоминающимся и современным.
    Подготовим все необходимые гайдлайны для регистрации торговой
    марки.`,
  },
  {
    work: `индивидуальный дизайн сайта`,
    price: `от 4к`,
    time: `до 2 месяцев`,
    description: `Наш дизайнер создаст для вас современный и продающий визуал сайта,
    либо переработает дизайн старого сайта. Дизайнер хорошо разбирается
    в интернет-маркетинге, поэтому создаст максимально коммерческий
    дизайн, согласовывая с вашими пожеланиями и эстетикой.`,
  },
  {
    work: `обслуживание сайта`,
    price: `от 3к`,
    time: `срок не определен`,
    description: `Мы можем обслуживать ваш действующий сайт или созданный нами,
    исправлять ошибки или добавлять функционал. Стоимость каждой задачи
    индивидуальна.`,
  },
  {
    work: `посадочная страница`,
    price: `от 10к`,
    time: `до 1 месяца`,
    description: `Продаете конкретный товар или услугу? Тогда лучшим решением для
    вашего бизнеса будет - посадочная страница. Отличный способ
    продавать и рекламироваться, всегда дает хорошую конверсию.`,
  },
  {
    work: `многостраничный сайт`,
    price: `от 15к`,
    time: `от 2 недель`,
    description: `Если ваш бизнес предполагает продажу широкого спектра товаров или
    услуг, то вам необходим многостраничный сайт. Мы разрабатываем такие
    сайты, анализируя оптимальный путь пользователя, простоту навигации
    и мотивацию к покупке.`,
  },
];

export default function Price() {
  return (
    <section className="our-price container" id="price">
      <h2 className="main__title">сколько стоит?</h2>
      <ul className="price-list">
        {priceContent.map(({ work, price, time, description }, index) => (
          <li className="price-item" key={index}>
            <p className="price-works">{work}</p>
            <div className="price-block">
              <p className="price-coast">{price}</p>
              <p className="price-working-time">{time}</p>
            </div>
            <p className="price-about-works">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
