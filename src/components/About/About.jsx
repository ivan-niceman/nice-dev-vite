import Carousel from '../Carousel/Carousel';

import partner1 from '../../images/partners/partner1.webp';
import partner2 from '../../images/partners/partner2.webp';
import partner3 from '../../images/partners/partner3.webp';

export default function About() {
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

  return (
    <section className="about container" id="about">
      <h2 className="main__title">кто мы?</h2>
      <div className="about__us">
        <div>
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
        </div>
        <div className="about__right">
          <div className="about__carousel">
            <div className="about__right-carousel">
              <Carousel
                content={aboutUsContent}
                breakpoints={[{ maxWidth: 768, enableSwipe: true }]}
                renderItem={(item) => (
                  <div className="about__card">
                    <img
                      src={item.image}
                      className="card-size"
                      alt="дизайнер Наталья"
                    />
                    <div className="about__card-body">
                      <h3 className="about__card-profession">
                        {item.profession}
                      </h3>
                      <h4 className="about__card-name">{item.name}</h4>
                      <p className="about__card-text">{item.description}</p>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
