import "./AboutWork.css";
import { aboutOurWorkContent } from "../../utils/aboutOurWorkContent";

export default function AboutWork() {
  return (
    <section className="about-our-work">
      <h2 className="main__title">как мы работаем?</h2>
      <ul className="about-specialty">
        {aboutOurWorkContent.map(({ title, description }, index) => (
          <li
            className="carousel-item active"
            data-interval="10000"
            key={index}
          >
            <div className="about-specialty-card">
              <h2 className="about-specialty-title">{title}</h2>
              <p className="about-specialty-paragraph">{description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div
        id="carouselExampleInterval1"
        className="carousel slide about-specialty-carousel"
        data-ride="carousel"
        data-touch="true"
      >
        <ul className="carousel-inner about-specialty-carousel-inner">
          {aboutOurWorkContent.map(({ title, description }, index) => (
            <li
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-interval="10000"
              key={index}
            >
              <div className="about-specialty-card">
                <h2 className="about-specialty-title">{title}</h2>
                <p className="about-specialty-paragraph">{description}</p>
              </div>
            </li>
          ))}
        </ul>
        <a
          className="carousel-control-prev carousel-button carousel-button-left"
          href="#carouselExampleInterval1"
          role="button"
          data-slide="prev"
        >
          r<span className="material-symbols-outlined">arrow_left_alt</span>
        </a>
        <a
          className="carousel-control-next carousel-button carousel-button-right"
          href="#carouselExampleInterval1"
          role="button"
          data-slide="next"
        >
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </a>
      </div>
    </section>
  );
}
