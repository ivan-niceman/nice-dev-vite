import Carousel from '../Carousel/Carousel';

import projectDesk_1 from '../../images/portfolio/soltur.webp';
import projectMob_1 from '../../images/portfolio/soltur-m.webp';
import projectDesk_2 from '../../images/portfolio/merytour.webp';
import projectMob_2 from '../../images/portfolio/merytour-m.webp';
import projectDesk_3 from '../../images/portfolio/exploraluxury.webp';
import projectMob_3 from '../../images/portfolio/exploraluxury-m.webp';
import projectDesk_4 from '../../images/portfolio/marytour.webp';
import projectMob_4 from '../../images/portfolio/marytour-m.webp';
import projectDesk_5 from '../../images/portfolio/mobistravel.webp';
import projectMob_5 from '../../images/portfolio/mobistravel-m.webp';
import projectDesk_6 from '../../images/portfolio/mira-tur.webp';
import projectMob_6 from '../../images/portfolio/mira-tur-m.webp';
import projectDesk_7 from '../../images/portfolio/roza-tour.webp';
import projectMob_7 from '../../images/portfolio/roza-tour-m.webp';
import projectDesk_8 from '../../images/portfolio/stali.webp';
import projectMob_8 from '../../images/portfolio/stali-m.webp';
import projectDesk_9 from '../../images/portfolio/tourfabrika.webp';
import projectMob_9 from '../../images/portfolio/tourfabrika-m.webp';
import projectDesk_10 from '../../images/portfolio/weareislands.webp';
import projectMob_10 from '../../images/portfolio/weareislands-m.webp';
import projectDesk_11 from '../../images/portfolio/dibtours.ru.webp';
import projectMob_11 from '../../images/portfolio/dibtours.ru-m.webp';

export default function Portfolio() {
  const portfolioContent = [
    {
      imageDesk: projectDesk_1,
      imageMob: projectMob_1,
      alt: `Солнечный тур`,
      link: `https://ivan-niceman.github.io/soltur-orel/`,
    },
    {
      imageDesk: projectDesk_2,
      imageMob: projectMob_2,
      alt: `Мэри тур`,
      link: `https://merytour.ru/`,
    },
    {
      imageDesk: projectDesk_3,
      imageMob: projectMob_3,
      alt: `exploraluxury`,
      link: `http://exploraluxury.ru/`,
    },
    {
      imageDesk: projectDesk_4,
      imageMob: projectMob_4,
      alt: `Мира тур`,
    },
    {
      imageDesk: projectDesk_5,
      imageMob: projectMob_5,
      alt: `Мобис-Т`,
      link: `https://mobistravel.ru/`,
    },
    {
      imageDesk: projectDesk_6,
      imageMob: projectMob_6,
      alt: `ТУРАГЕНТСТВО МИРА`,
      link: `https://mira-tur.ru/`,
    },
    {
      imageDesk: projectDesk_7,
      imageMob: projectMob_7,
      alt: `Роза-тур`,
      link: `https://www.roza-tour.ru/`,
    },
    {
      imageDesk: projectDesk_8,
      imageMob: projectMob_8,
      alt: `Бакор`,
      link: `https://stali.ru/`,
    },
    {
      imageDesk: projectDesk_9,
      imageMob: projectMob_9,
      alt: `Фабрика туров`,
      link: `https://tourfabrika.ru/`,
    },
    {
      imageDesk: projectDesk_10,
      imageMob: projectMob_10,
      alt: `Острова и мир`,
      link: `https://weareislands.ru/`,
    },
    {
      imageDesk: projectDesk_11,
      imageMob: projectMob_11,
      alt: `Далеко и близко`,
      link: `https://dibtours.ru/`,
    },
  ];

  return (
    <section className="portfolio container" id="portfolio">
      <h2 className="main__title">примеры работ</h2>
      <Carousel
        content={portfolioContent}
        breakpoints={[{ maxWidth: 768, enableSwipe: true }]}
        renderItem={(item) => (
          <div className="portfolio__content">
            <div className="portfolio__screens">
              <div className="portfolio__desktop">
                <img
                  src={item.imageDesk}
                  className="portfolio__image"
                  alt={`Проект: ${item.alt}`}
                />
              </div>
              <div className="portfolio__mobile">
                <img
                  src={item.imageMob}
                  className="portfolio__image"
                  alt={`Проект: ${item.alt}`}
                />
              </div>
            </div>
            {item.link && (
              <a
                href={item.link}
                className="portfolio__link"
                target="_blank"
                rel="noreferrer"
              >
                Посмотреть сайт
              </a>
            )}
          </div>
        )}
      />
    </section>
  );
}
