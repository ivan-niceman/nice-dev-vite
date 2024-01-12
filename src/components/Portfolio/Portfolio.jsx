import "./Portfolio.css";
import project1 from "../../images/portfolio/soltour.webp";
import project2 from "../../images/portfolio/logos2.webp";
import project3 from "../../images/portfolio/delivery.webp";
import project4 from "../../images/portfolio/marytour.webp";
import project5 from "../../images/portfolio/shop.webp";
import project6 from "../../images/portfolio/hotel.webp";
import project7 from "../../images/portfolio/stali.webp";
import project8 from "../../images/portfolio/logos.webp";
import project9 from "../../images/portfolio/mira-tur.webp";
// import project10 from "../../images/portfolio/embassy.webp";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="main__title">примеры работ</h2>
      <section>
        <div
          id="carouselExampleInterval2"
          className="carousel slide carousel-fade portfolio__carousel"
          data-ride="carousel"
          data-touch="true"
        >
          <ul className="carousel-inner portfolio__list">
            <li className="carousel-item active portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Создание сайта туристического агентства Солнечный тур.
                  <br />
                  Цель: сделать современный сайт, который будет давать высокую
                  конверсию при рекламе в интернете.
                  {/* Сайт уже активно используется и приносит новых туристов благодаря удобному и приятному интерфейсу. Форма подбора тура привлекает внимание многих посетителей */}
                </p>
                <br />
                <img
                  src={project1}
                  className="card-img-top portfolio__image"
                  alt="проект 1"
                />
                <p className="portfolio__paragraph">
                  Заказчица получила сайт, который соответствует всем
                  современным тенденциям, понятен пользователю и выделяет ее
                  фирму на фоне конкурентов.
                </p>
              </div>
            </li>
            <li className="carousel-item portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Редизайн логотипа для туристического агентства “Солнечный
                  тур”.
                  <br />
                  Задача: создать логотип, который бы ассоциировался с радостью
                  и отдыхом.
                </p>
                <br />
                <img
                  src={project2}
                  className="card-img-top portfolio__image"
                  alt="проект 2"
                />
                <p className="portfolio__paragraph">
                  Реализована задумка с солнцем и морем на логотипе. Логотип
                  отражает название и ассоциируется с отдыхом.
                </p>
              </div>
            </li>
            <li className="carousel-item portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Редизайн сайта по доставке готовых обедов в офисы, на
                  стройплощадки и выездные мероприятия.
                  {/* Сайт показывает высокое качество блюд , доступность доставки и удобство использования. Благодаря этому заказчик получит много новых крупных клиентов среди более высокого ценового сегмента. */}
                  <br />
                  Цель: современный дизайн и понятная навигация.
                </p>
                <br />
                <img
                  src={project3}
                  className="card-img-top portfolio__image"
                  alt="проект 3"
                />
                <p className="portfolio__paragraph">
                  Заказчик по итогу получил современный сайт, который будет
                  показывать уровень качества продукции и понятен всем клиентам
                  заказчика.
                </p>
              </div>
            </li>
            <li className="carousel-item portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Сайт туристического агентства Москва, работающего с 2000 года.
                  <br />
                  Задача: реализовать современный дизайн и функционал.
                </p>
                <br />
                <img
                  src={project4}
                  className="card-img-top portfolio__image"
                  alt="проект 4"
                />
                <p className="portfolio__paragraph">
                  Реализована система поиска туров с перелетами, поиск круизов и
                  автобусных туров. Сайт сделан в современном дизайне с
                  использованием анимации и интерактивных ссылок.
                </p>
              </div>
            </li>
            <li className="carousel-item portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Сайт фирмы, которая продает мобильные аксессуары и
                  компьютерную технику.
                  {/* Сайт хорошо приносит покупателей из поисковых систем , которые сразу находят нужный товар благодаря простоте функционала и удобному дизайну. */}
                  <br />
                  Задача: создать ультра-современный сайт для целевой аудитории
                  18-30 лет.
                </p>
                <br />
                <img
                  src={project5}
                  className="card-img-top portfolio__image"
                  alt="проект 5"
                />
                <p className="portfolio__paragraph">
                  Сайт сделан с учетом маркетингового анализа, с понятным УТП,
                  структура сайта ведет клиента по всей воронке продаж.
                </p>
              </div>
            </li>
            <li className="carousel-item portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Сайт для нового туристического агентства, специализирующегося
                  на продаже горящих туров.
                  <br />
                  Задача: создать сайт, который поможет завоевать рынок.
                </p>
                <br />
                <img
                  src={project6}
                  className="card-img-top portfolio__image"
                  alt="проект 6"
                />
                <p className="portfolio__paragraph">
                  Реализовано несколько форм обратной связи для удобства
                  туристов. А также яркие графические решения для легкой
                  навигации по сайту.
                </p>
              </div>
            </li>
            <li className="carousel-item portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Сайт производственной компании, работающей с изделиями из
                  стали.
                  <br />
                  Цель: сделать продающий сайт, демонстрирующий весь
                  ассортимент.
                </p>
                <br />
                <img
                  src={project7}
                  className="card-img-top portfolio__image"
                  alt="проект 7"
                />
                <p className="portfolio__paragraph">
                  Современный интерактивный фотоальбом позволяет увидеть
                  большинство готовых изделий. Также на каждой странице
                  реализован фирменный стиль компании.
                </p>
              </div>
            </li>
            <li className="carousel-item portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Разработка логотипа для магазина, который занимается продажей
                  продуктов из разных уголков мира.
                </p>
                <br />
                <img
                  src={project8}
                  className="card-img-top portfolio__image"
                  alt="проект 8"
                />
                <p className="portfolio__paragraph">
                  Создано много вариантов логотипа, который ассоциируется
                  одновременно с едой, планетой и путешествиями.
                </p>
              </div>
            </li>
            <li className="carousel-item portfolio__item">
              <div className="card portfolio__card">
                <p className="portfolio__paragraph">
                  Создание сайта для туристического агентства &quot;МИРА&quot;
                  <br />
                  Цель: создать сайт, который позволит поднять количество
                  продаж, будет легко продвигаться в поисковых системах, иметь
                  высокую конверсию лидов.
                </p>
                <br />
                <img
                  src={project9}
                  className="card-img-top portfolio__image"
                  alt="проект 9"
                />
                <p className="portfolio__paragraph">
                  Заказчица получила сайт, где используется несколько поисковых
                  модулей под разные запросы посетителя. А также большое
                  количество форм для обратной связи с менеджерами, поскольку
                  одна из сильных сторон фирмы - высокая квалификация
                  сотрудников и постоянная поддержка туристов.
                </p>
              </div>
            </li>
            {/* <li className="carousel-item portfolio__item">
                <div className="card portfolio__card">
                  <p className="portfolio__paragraph">
                    Создание сайта для туристического агентства "МИРА"
                    <br />
                    <br />
                    Цель: создать сайт, который позволит поднять количество
                    продаж, будет легко продвигаться в поисковых системах, иметь
                    высокую конверсию лидов.
                  </p>
                  <br />
                  <img
                    src={project10}
                    className="card-img-top portfolio__image"
                    alt="проект 10"
                  />
                  <p className="portfolio__paragraph">
                    Заказчица получила сайт, где используется несколько
                    поисковых модулей под разные запросы посетителя. А также
                    большое количество форм для обратной связи с менеджерами,
                    поскольку одна из сильных сторон фирмы - высокая
                    квалификация сотрудников и постоянная поддержка туристов.
                  </p>
                </div>
              </li> */}
          </ul>
          <a
            className="carousel-control-prev carousel-button carousel-button-left portfolio__carousel-button portfolio__carousel-button-left"
            href="#carouselExampleInterval2"
            role="button"
            data-slide="prev"
          >
            <span className="material-symbols-outlined">arrow_left_alt</span>
          </a>
          <a
            className="carousel-control-next carousel-button carousel-button-right portfolio__carousel-button portfolio__carousel-button-right"
            href="#carouselExampleInterval2"
            role="button"
            data-slide="next"
          >
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </section>
    </section>
  );
}
