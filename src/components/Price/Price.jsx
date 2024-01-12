import './Price.css';

export default function Price() {
  return (
    <section className="our-price" id="price">
        <h2 className="main__title">сколько стоит?</h2>
        <ul className="price-list">
          <li className="price-item">
            <p className="price-works">фирменный стиль, логотип</p>
            <div className="price-block">
              <p className="price-coast">1-5к</p>
              <p className="price-working-time">до 1 месяца</p>
            </div>
            <p className="price-about-works">
              Индивидуальная разработка вашего фирменного стиля, логотипа и
              торгового знака. Сделаем ваш бизнес запоминающимся и современным.
              Подготовим все необходимые гайдлайны для регистрации торговой
              марки.
            </p>
          </li>
          <li className="price-item">
            <p className="price-works">индивидуальный дизайн сайта</p>
            <div className="price-block">
              <p className="price-coast">4-15к</p>
              <p className="price-working-time">до 2 месяцев</p>
            </div>
            <p className="price-about-works">
              Наш дизайнер создаст для вас современный и продающий визуал сайта,
              либо переработает дизайн старого сайта. Дизайнер хорошо
              разбирается в интернет-маркетинге, поэтому создаст максимально
              коммерческий дизайн, согласовывая с вашими пожеланиями и
              эстетикой.
            </p>
          </li>
          <li className="price-item">
            <p className="price-works">обслуживание сайта</p>
            <div className="price-block">
              <p className="price-coast">от 3к</p>
              <p className="price-working-time">срок не определен</p>
            </div>
            <p className="price-about-works">
              Мы можем обслуживать ваш действующий сайт или созданный нами,
              исправлять ошибки или добавлять функционал. Стоимость каждой
              задачи индивидуальна.
            </p>
          </li>
          <li className="price-item">
            <p className="price-works">посадочная страница</p>
            <div className="price-block">
              <p className="price-coast">8-15к</p>
              <p className="price-working-time">до 1 месяца</p>
            </div>
            <p className="price-about-works">
              Продаете конкретный товар или услугу? Тогда лучшим решением для
              вашего бизнеса будет - посадочная страница. Отличный способ
              продавать и рекламироваться, всегда дает хорошую конверсию.
            </p>
          </li>
          <li className="price-item">
            <p className="price-works">многостраничный сайт</p>
            <div className="price-block">
              <p className="price-coast">15-45к</p>
              <p className="price-working-time">до 6 месяцев</p>
            </div>
            <p className="price-about-works">
              Если ваш бизнес предполагает продажу широкого спектра товаров или
              услуг, то вам необходим многостраничный сайт. Мы разрабатываем
              такие сайты, анализируя оптимальный путь пользователя, простоту
              навигации и мотивацию к покупке.
            </p>
          </li>
        </ul>
      </section>
  );
}
