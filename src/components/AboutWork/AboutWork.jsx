import PropTypes from "prop-types";
import Slider from "react-slick";

const aboutOurWorkContent = [
  {
    title: `исследование`,
    description: `Перед тем как приступить к созданию вашего сайта или фирменного стиля, мы проводим глубокий анализ рынка и ваших конкурентов, чтобы сделать ваш бизнес еще более успешным`,
  },
  {
    title: `проектирование`,
    description: `Мы проводим несколько этапов проектирования, учитывая поведение пользователей, их потребности и современные требования`,
  },
  {
    title: `дизайн`,
    description: `В дизайне мы учитываем современные концепции, функциональность и вашу эстетику. Все этапы согласовываем с клиентом`,
  },
  {
    title: `разработка`,
    description: `После согласования проекта и дизайна, мы переходим к разработке вашего сайта, чтобы добиться идеальной функциональности на пути пользователя`,
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

export default function AboutWork() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    swipe: false,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
        },
      },
    ],
  };
  return (
    <section className="about-our-work container">
      <h2 className="main__title">как мы работаем?</h2>
      <div className="about-specialty">
        <Slider {...settings}>
          {aboutOurWorkContent.map(({ title, description }, index) => (
            <div key={index}>
              <div className="about-specialty-card">
                <h2 className="about-specialty-title">{title}</h2>
                <p className="about-specialty-paragraph">{description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
