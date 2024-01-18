import "./Portfolio.css";
import { portfolioContent } from "../../utils/portfolioContent";

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
              ({ title, subtitle, image, description }, index) => (
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
                    <p className="portfolio__paragraph">{description}</p>
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
