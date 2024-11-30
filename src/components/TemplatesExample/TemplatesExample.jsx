import templateDesk1 from '../../images/templates/template-d-1.webp';
import templateMob1 from '../../images/templates/template-m-1.webp';
import templateDesk2 from '../../images/templates/template-d-2.webp';
import templateMob2 from '../../images/templates/template-m-2.webp';
import templateDesk3 from '../../images/templates/template-d-3.webp';
import templateMob3 from '../../images/templates/template-m-3.webp';

export default function TemplatesExample() {
  const templates = [
    {
      name: `Яркий`,
      imgDesk: templateDesk1,
      imgMob: templateMob1,
      description: `Сочный, интересный дизайн, понятная  структура. Этот сайт отличается дружелюбным, слегка неформальным текстовым оформлением. Идеально подойдет тем, чьи туристы - молодежь или просто веселые люди!`,
      link: `http://template-1dfkgjk.nice-dev.ru/`,
    },
    {
      name: `Спокойный`,
      imgDesk: templateDesk2,
      imgMob: templateMob2,
      description: `Если вы предпочитаете спокойный визуал сайта, чтобы акцентом было текстовое наполнение - этот вариант для Вас! Подходит абсолютно для всех туристов.`,
      link: `http://template-2msldlfsk.nice-dev.ru/`,
    },
    {
      name: `Премиум`,
      imgDesk: templateDesk3,
      imgMob: templateMob3,
      description: `Сайт, отражающий всю глубину VIP-туризма. Зайдя на сайт, ваши туристы сразу поймут уровень сервиса, оказываемый в агентстве. А вы, при этом, не потратите большие бюджеты на его разработку.`,
      link: `http://template-3skldjf.nice-dev.ru/`,
    },
  ];

  return (
    <section className="templates-examples container">
      <h2 className="main__title">выбери сайт по вкусу:</h2>
      <ul className="templates-examples__list">
        {templates.map((item, index) => (
          <li className="templates-examples__item" key={index}>
            <h3 className="templates-examples__name">
              <span>{index + 1}. &nbsp;</span>
              {item.name}
            </h3>
            <div className="templates-examples__card">
              <div className="templates-examples__card-img">
                <div className="templates-examples__img-desktop">
                  <img
                    src={item.imgDesk}
                    alt="Шаблон сайта компьютерной версии"
                    className="templates-examples__img"
                  />
                </div>
                <div className="templates-examples__img-mobile">
                  <img
                    src={item.imgMob}
                    alt="Шаблон сайта мобильной версии"
                    className="templates-examples__img"
                  />
                </div>
              </div>
              <div className="templates-examples__info">
                <p className="templates-examples__description">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="templates-examples__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Посмотреть сайт
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
