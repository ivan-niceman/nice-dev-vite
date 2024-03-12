import partner1 from "../../images/partners/partner1.webp";
import partner2 from "../../images/partners/partner2.webp";
import partner3 from "../../images/partners/partner3.webp";

const aboutUsContent = [
  {
    image: partner1,
    profession: `Web-дизайнер`,
    name: `Наталья`,
    description: `Имею большой опыт работы не только в создании визуала, но также в маркетинге и туризме.`,
  },
  {
    image: partner2,
    profession: `Project-manager`,
    name: `Наталья`,
    description: `Живу туризмом уже больше 12 лет. Помогу вам сделать лучший выбор из нашего спектра услуг и дам много полезных советов :)`,
  },
  {
    image: partner3,
    profession: `Front-end developer`,
    name: `Иван`,
    description: `Качественно и внимательно напишу ваш сайт с учётом всех новинок мира web-разработки.`,
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="main__title">кто мы?</h2>
      <section className="about__us">
        <section>
          <p className="about__left-paragraph">
            Nicedev - креативная веб-студия, специалисты которой имеют опыт не
            только в дизайне и архитектуре сайтов, но и в туриндустрии. Именно
            поэтому мы решили посвятить себя созданию it-продуктов для
            работников сферы туризма.
          </p>
          <p className="about__left-paragraph">
            Мы отлично знаем потребности туристов, их мотивации и возражения,
            что позволяет нам сконструировать наиболее точный путь пользователя
            и создать на основании него сайт, соответствующий всем современным
            тенденциям.
          </p>
          <p className="about__left-paragraph">
            Если хотите получить по-настоящему продающий сайт, который будет
            давать конверсию при должной рекламе - то обращайтесь к нам!
          </p>
          <p className="about__left-paragraph">
            Помимо этого, наш графический дизайнер создаст для вас
            запоминающийся и красивый фирменный стиль, который выделит вас из
            массы конкурентов.
          </p>
        </section>
        <section className="about__right">
          <div
            id="carouselExampleInterval"
            className="carousel slide carousel-fade about__carousel"
            data-ride="carousel"
            data-touch="true"
          >
            <ul className="carousel-inner about__right-carousel">
              {aboutUsContent.map(
                ({ image, profession, name, description }, index) => (
                  <li
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    data-interval="10000"
                    key={index}
                  >
                    <div className="card about__card">
                      <img
                        src={image}
                        className="card__size"
                        alt="дизайнер Наталья"
                      />
                      <div className="card-body">
                        <h3 className="about__card-profession">{profession}</h3>
                        <h4 className="about__card-name">{name}</h4>
                        <p className="about__card-text">{description}</p>
                      </div>
                    </div>
                  </li>
                ),
              )}
            </ul>
            <a
              className="carousel-control-prev carousel-button"
              href="#carouselExampleInterval"
              role="button"
              data-slide="prev"
            >
              <span className="material-symbols-outlined">arrow_left_alt</span>
            </a>
            <a
              className="carousel-control-next carousel-button"
              href="#carouselExampleInterval"
              role="button"
              data-slide="next"
            >
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </div>
        </section>
      </section>
    </section>
  );
}
