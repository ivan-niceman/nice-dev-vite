import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slider from "react-slick";

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
    subtitle: `Создание сайта туристического агентства “Солнечный тур”. Задача: сделать современный сайт, который будет давать высокую конверсию при рекламе в интернете.`,
    image: project1,
    description: `Заказчица получила сайт, который соответствует всем современным тенденциям, понятен пользователю и выделяет ее фирму на фоне конкурентов.`,
    link: `https://ivan-niceman.github.io/soltur-orel/`,
    cite: `Солнечный тур`,
  },
  {
    subtitle: `Редизайн логотипа для туристического агентства “Солнечный тур”. Задача: создать логотип, который бы ассоциировался с радостью и отдыхом.`,
    image: project2,
    description: `Реализована задумка с солнцем и морем на логотипе. Логотип отражает название и ассоциируется с отдыхом.`,
    // link: ``,
    cite: ``,
  },
  {
    subtitle: `Редизайн сайта по доставке готовых обедов в офисы, на стройплощадки и выездные мероприятия. Задача: современный дизайн и понятная навигация.`,
    image: project3,
    description: `Заказчик по итогу получил современный сайт, который будет показывать уровень качества продукции и понятен всем клиентам заказчика.`,
    // link:``,
    cite: ``,
  },
  {
    subtitle: `Сайт туристического агентства Москва, работающего с 2000 года. Задача: реализовать современный дизайн и функционал.`,
    image: project4,
    description: `Реализована система поиска туров с перелетами, поиск круизов и автобусных туров. Сайт сделан в современном дизайне с использованием анимации и интерактивных ссылок.`,
    // link:``,
    cite: ``,
  },
  {
    subtitle: `Сайт фирмы, которая продает мобильные аксессуары и компьютерную технику. Задача: создать ультра-современный сайт для целевой аудитории 18-30 лет.`,
    image: project5,
    description: `Сайт сделан с учетом маркетингового анализа, с понятным УТП, структура сайта ведет клиента по всей воронке продаж.`,
    // link:``,
    cite: ``,
  },
  {
    subtitle: `Сайт для нового туристического агентства, специализирующегося на продаже горящих туров. Задача: создать сайт, который поможет завоевать рынок.`,
    image: project6,
    description: `Реализовано несколько форм обратной связи для удобства туристов. А также яркие графические решения для легкой навигации по сайту.`,
    // link:``,
    cite: ``,
  },
  {
    subtitle: `Сайт производственной компании, работающей с изделиями из стали. Задача: сделать продающий сайт, демонстрирующий ассортимент и услуги компании.`,
    image: project7,
    description: `Современный интерактивный фотоальбом позволяет увидеть большинство готовых изделий. Также на каждой странице реализован фирменный стиль компании.`,
    // link:``,
    cite: ``,
  },
  {
    subtitle: `Разработка логотипа для магазина, который занимается продажей продуктов из разных уголков мира. Задача: создать логотип, который отображает характер магазина и привлекает внимание потенциальных покупателей.`,
    image: project8,
    description: `Создано много вариантов логотипа, который ассоциируется одновременно с едой, планетой и путешествиями.`,
    // link:``,
    cite: ``,
  },
  {
    subtitle: `Создание сайта для туристического агентства “МИРА”. Задача: создать сайт, который позволит поднять количество продаж, будет легко продвигаться в поисковых системах, иметь высокую конверсию лидов.`,
    image: project9,
    description: `На сайте установлено несколько поисковых модулей. Созданы формы обратной связи для каждого менеджера, поскольку одна из сильных сторон фирмы - высокая квалификация сотрудников и постоянная поддержка туристов.`,
    link: `https://ivan-niceman.github.io/mira-tur/`,
    cite: `туристическое агентство “МИРА”`,
  },
  {
    subtitle: `Сайт туристической компании Мобис-Т, работающий в России и Израиле. Задача: сделать современный сайт согласно фирменного стиля компании.`,
    image: project10,
    description: `Был создан многостраничный сайт очень понятный для любого пользователя. Все услуги фирмы хорошо раскрыты. На сайте установлено несколько поисковых модулей и форм обратной связи для хорошей конверсии.`,
    link: `https://mobistravel.ru/`,
    cite: `Мобис-Т`,
  },
  {
    subtitle: `Туроператор по внутреннему туризму и турагент по международному Роза-тур обратился к нам с задачей сделать современный сайт, который поможет в продвижении автобусных туров и других услуг компании.`,
    image: project11,
    description: `Был создан фирменный стиль в виде цветовых решений и логотипа. Был создан современный многостраничный сайт, особое внимание в котором уделялось собственному продукту фирмы, а также формам обратной связи для увеличения продаж.`,
    link: `https://roza-tour.ru/`,
    cite: `Роза-тур`,
  },
  {
    subtitle: `Сайт туристического агентства Москва, работающего с 2000 года. Задача: реализовать современный дизайн и функционал.`,
    image: project12,
    description: `Реализована система поиска туров с перелетами, поиск круизов и автобусных туров. Сайт сделан в современном дизайне с использованием анимации и интерактивных ссылок.`,
    link: `https://merytour.ru/`,
    cite: `Мэритур`,
  },
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrow next-arrow"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" fill="none"><path d="M21 12L16 7M21 12L16 17M21 12H3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="slick-arrow prev-arrow"
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24" fill="none"><path d="M21 12L16 7M21 12L16 17M21 12H3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </button>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function Portfolio() {
  const settings = {
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="portfolio container" id="portfolio">
      <h2 className="main__title">примеры работ</h2>
      <section>
        <div className="portfolio__carousel">
          <div>
            <Slider {...settings}>
              {portfolioContent.map(
                ({ subtitle, image, description, link, cite }, index) => (
                  <div key={index}>
                    <div className="portfolio__card">
                      <p className="portfolio__paragraph">
                        <Link
                          to={link}
                          className="portfolio__link"
                          target="_blank"
                        >
                          {cite}
                        </Link>
                        {subtitle}
                      </p>
                        <img
                          src={image}
                          className="portfolio__image portfolio__image-link"
                          alt={`проект ${index}`}
                        />
                      <p className="portfolio__paragraph">{description}</p>
                    </div>
                  </div>
                ),
              )}
            </Slider>
          </div>
        </div>
      </section>
    </section>
  );
}
