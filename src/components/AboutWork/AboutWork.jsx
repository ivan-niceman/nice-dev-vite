import "./AboutWork.css";

export default function AboutWork() {
  return (
    <section className="about-our-work">
      <h2 className="main__title">как мы работаем?</h2>
      <ul className="about-specialty">
        <li>
          <h2 className="about-specialty-title">исследование</h2>
          <p className="about-specialty-paragraph">
            Перед тем как приступить к созданию вашего сайта или фирменного
            стиля, мы проводим глубокий анализ рынка и ваших конкурентов, чтобы
            сделать ваш бизнес еще более успешным
          </p>
        </li>
        <li>
          <h2 className="about-specialty-title">проектирование</h2>
          <p className="about-specialty-paragraph">
            Мы проводим несколько этапов проектирования, учитывая поведение
            пользователей, их потребности и современные требования
          </p>
        </li>
        <li>
          <h2 className="about-specialty-title">дизайн</h2>
          <p className="about-specialty-paragraph">
            В дизайне мы учитываем современные концепции, функциональность и
            вашу эстетику. Все этапы согласовываем с клиентом
          </p>
        </li>
        <li>
          <h2 className="about-specialty-title">разработка</h2>
          <p className="about-specialty-paragraph">
            После согласования проекта и дизайна, мы переходим к разработке
            вашего сайта, чтобы добиться идеальной функциональности на пути
            пользователя
          </p>
        </li>
      </ul>
      <div
        id="carouselExampleInterval1"
        className="carousel slide about-specialty-carousel"
        data-ride="carousel"
        data-touch="true"
      >
        <ul className="carousel-inner about-specialty-carousel-inner">
          <li className="carousel-item active" data-interval="10000">
            <div className="about-specialty-card">
              <h2 className="about-specialty-title">исследование</h2>
              <p className="about-specialty-paragraph">
                Перед тем, как приступить к созданию вашего сайта или фирменного
                стиля, мы проводим глубокий анализ рынка и ваших конкурентов,
                чтобы сделать ваш бизнес еще более успешным.
              </p>
            </div>
          </li>
          <li className="carousel-item" data-interval="10000">
            <div className="about-specialty-card">
              <h2 className="about-specialty-title">проектирование</h2>
              <p className="about-specialty-paragraph">
                Мы проводим несколько этапов проектирования, учитывая поведение
                пользователей, их потребности и современные требования.
              </p>
            </div>
          </li>
          <li className="carousel-item" data-interval="10000">
            <div className="about-specialty-card">
              <h2 className="about-specialty-title">дизайн</h2>
              <p className="about-specialty-paragraph">
                В дизайне мы учитываем современные концепции, функциональность и
                вашу эстетику. Все этапы согласовываем с клиентом.
              </p>
            </div>
          </li>
          <li className="carousel-item" data-interval="10000">
            <div className="about-specialty-card">
              <h2 className="about-specialty-title">разработка</h2>
              <p className="about-specialty-paragraph">
                После согласования проекта и дизайна, мы переходим к разработке
                вашего сайта, чтобы добиться идеальной функциональности на пути
                пользователя.
              </p>
            </div>
          </li>
        </ul>
        <a
          className="carousel-control-prev carousel-button carousel-button-left"
          href="#carouselExampleInterval1"
          role="button"
          data-slide="prev"
        >r
          <span className="material-symbols-outlined">
            arrow_left_alt
          </span>
        </a>
        <a
          className="carousel-control-next carousel-button carousel-button-right"
          href="#carouselExampleInterval1"
          role="button"
          data-slide="next"
        >
          <span className="material-symbols-outlined">
            arrow_right_alt
          </span>
        </a>
      </div>
    </section>
  );
}
