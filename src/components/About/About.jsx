import PropTypes from "prop-types";
import Slider from "react-slick";

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
    profession: `Front-end Team Lead`,
    name: `Иван`,
    description: `Качественно и внимательно напишу ваш сайт с учётом всех новинок мира web-разработки.`,
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

export default function About() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className="about container" id="about">
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
          <div className="about__carousel">
            <div className="about__right-carousel">
              <Slider {...settings}>
                {aboutUsContent.map(
                  ({ image, profession, name, description }, index) => (
                    <div key={index}>
                      <div className="about__card">
                        <img
                          src={image}
                          className="card-size"
                          alt="дизайнер Наталья"
                        />
                        <div className="about__card-body">
                          <h3 className="about__card-profession">
                            {profession}
                          </h3>
                          <h4 className="about__card-name">{name}</h4>
                          <p className="about__card-text">{description}</p>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </Slider>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
