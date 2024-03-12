import project1 from "../../images/portfolio/soltour.webp";
import project2 from "../../images/portfolio/logos2.webp";
import project3 from "../../images/portfolio/delivery.webp";
import project4 from "../../images/portfolio/marytour.webp";
import project5 from "../../images/portfolio/shop.webp";
import project6 from "../../images/portfolio/hotel.webp";
import project7 from "../../images/portfolio/stali.webp";
import project8 from "../../images/portfolio/logos.webp";
import project9 from "../../images/portfolio/mira-tur.webp";
import project10 from "../../images/portfolio/mobis.webp";
import project11 from "../../images/portfolio/roza.webp";
import project12 from "../../images/portfolio/merytour.webp";

const portfolioContent = [
  {
    title: `Создание сайта туристического агентства “Солнечный тур”.`,
    subtitle: `Задача: сделать современный сайт, который будет давать высокую конверсию при рекламе в интернете.`,
    // subtitle: `Сайт уже активно используется и приносит новых туристов благодаря удобному и приятному интерфейсу. Форма подбора тура привлекает внимание многих посетителей.`,
    image: project1,
    description: `Заказчица получила сайт, который соответствует всем современным тенденциям, понятен пользователю и выделяет ее фирму на фоне конкурентов.`,
    link:`https://www.soltur.ru/`,
    cite: `Солнечный тур`,
  },
  {
    title: `Редизайн логотипа для туристического агентства “Солнечный тур”`,
    subtitle: `Задача: создать логотип, который бы ассоциировался с радостью и отдыхом.`,
    image: project2,
    description: `Реализована задумка с солнцем и морем на логотипе. Логотип отражает название и ассоциируется с отдыхом.`,
    link:``,
    cite: ``,
  },
  {
    title: `Редизайн сайта по доставке готовых обедов в офисы, на стройплощадки и выездные мероприятия`,
    // title: `Сайт показывает высокое качество блюд , доступность доставки и удобство использования. Благодаря этому заказчик получит много новых крупных клиентов среди более высокого ценового сегмента`,
    subtitle: `Задача: современный дизайн и понятная навигация.`,
    image: project3,
    description: `Заказчик по итогу получил современный сайт, который будет показывать уровень качества продукции и понятен всем клиентам заказчика.`,
    link:``,
    cite: ``,
  },
  {
    title: `Сайт туристического агентства Москва, работающего с 2000 года.`,
    subtitle: `Задача: реализовать современный дизайн и функционал.`,
    image: project4,
    description: `Реализована система поиска туров с перелетами, поиск круизов и автобусных туров. Сайт сделан в современном дизайне с использованием анимации и интерактивных ссылок.`,
    link:``,
    cite: ``,
  },
  {
    title: `Сайт фирмы, которая продает мобильные аксессуары и компьютерную технику.`,
    // title: `Сайт хорошо приносит покупателей из поисковых систем , которые сразу находят нужный товар благодаря простоте функционала и удобному дизайну.`,
    subtitle: `Задача: создать ультра-современный сайт для целевой аудитории 18-30 лет.`,
    image: project5,
    description: `Сайт сделан с учетом маркетингового анализа, с понятным УТП, структура сайта ведет клиента по всей воронке продаж.`,
    link:``,
    cite: ``,
  },
  {
    title: `Сайт для нового туристического агентства, специализирующегося на продаже горящих туров.`,
    subtitle: `Задача: создать сайт, который поможет завоевать рынок.`,
    image: project6,
    description: `Реализовано несколько форм обратной связи для удобства туристов. А также яркие графические решения для легкой навигации по сайту.`,
    link:``,
    cite: ``,
  },
  {
    title: `Сайт производственной компании, работающей с изделиями из стали.`,
    subtitle: `Задача: сделать продающий сайт, демонстрирующий ассортимент и услуги компании.`,
    image: project7,
    description: `Современный интерактивный фотоальбом позволяет увидеть большинство готовых изделий. Также на каждой странице реализован фирменный стиль компании.`,
    link:``,
    cite: ``,
  },
  {
    title: `Разработка логотипа для магазина, который занимается продажей продуктов из разных уголков мира.`,
    subtitle: `Задача: создать логотип, который отображает характер магазина и привлекает внимание потенциальных покупателей.`,
    image: project8,
    description: `Создано много вариантов логотипа, который ассоциируется одновременно с едой, планетой и путешествиями.`,
    link:``,
    cite: ``,
  },
  {
    title: `Создание сайта для туристического агентства “МИРА”.`,
    subtitle: `Задача: создать сайт, который позволит поднять количество продаж, будет легко продвигаться в поисковых системах, иметь высокую конверсию лидов.`,
    image: project9,
    description: `На сайте установлено несколько поисковых модулей. Созданы формы обратной связи для каждого менеджера, поскольку одна из сильных сторон фирмы - высокая квалификация сотрудников и постоянная поддержка туристов.`,
    link:`https://mira-tur.ru/`,
    cite: `туристическое агентство “МИРА”`,
  },
  {
    title: `Сайт туристической компании Мобис-Т, работающий в России и Израиле.`,
    subtitle: `Задача: сделать современный сайт согласно фирменного стиля компании.`,
    image: project10,
    description: `Был создан многостраничный сайт очень понятный для любого пользователя. Все услуги фирмы хорошо раскрыты. На сайте установлено несколько поисковых модулей и форм обратной связи для хорошей конверсии.`,
    link:`https://mobistravel.ru/`,
    cite: `Мобис-Т`,
  },
  {
    // title: `Создание сайта для туристического агентства “МИРА”.`,
    subtitle: `Туроператор по внутреннему туризму и турагент по международному Роза-тур обратился к нам с задачей сделать современный сайт, который поможет в продвижении автобусных туров и других услуг компании.`,
    image: project11,
    description: `Был создан фирменный стиль в виде цветовых решений и логотипа. Был создан современный многостраничный сайт, особое внимание в котором уделялось собственному продукту фирмы, а также формам обратной связи для увеличения продаж.`,
    link:`https://roza-tour.ru/`,
    cite: `Роза-тур`,
  },
  {
    title: `Сайт туристического агентства Москва, работающего с 2000 года.`,
    subtitle: `Задача: реализовать современный дизайн и функционал.`,
    image: project12,
    description: `Реализована система поиска туров с перелетами, поиск круизов и автобусных туров. Сайт сделан в современном дизайне с использованием анимации и интерактивных ссылок.`,
    link:`https://merytour.ru/`,
    cite: `Мэритур`,
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="main__title">примеры работ</h2>
      <section>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade portfolio__carousel"
          data-ride="carousel"
          data-touch="true"
        >
          <ul className="carousel-inner portfolio__list">
            {portfolioContent.map(
              ({ title, subtitle, image, description, link, cite }, index) => (
                <li
                  className={`carousel-item portfolio__item ${
                    index === 0 ? "active" : ""
                  }`}
                  data-interval="10000"
                  key={index}
                >
                  <div className="card portfolio__card">
                    <p className="portfolio__paragraph">
                      {title}
                      <br />
                      {subtitle}
                    </p>
                    <img
                      src={image}
                      className="card-img-top portfolio__image"
                      alt={`проект ${index}`}
                    />
                    <span>
                      <p className="portfolio__paragraph">{description}</p>
                      <a href={link} className="portfolio__link" target="_blank" rel="noopener noreferrer">{cite}</a>
                    </span>
                  </div>
                </li>
              ),
            )}
          </ul>
          <button
            className="carousel-control-prev carousel-button portfolio__carousel-button portfolio__carousel-button-left"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="prev"
          >
            <span className="material-symbols-outlined">arrow_left_alt</span>
          </button>
          <button
            className="carousel-control-next carousel-button portfolio__carousel-button portfolio__carousel-button-right"
            type="button"
            data-target="#carouselExampleFade"
            data-slide="next"
          >
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </section>
    </section>
  );
}
