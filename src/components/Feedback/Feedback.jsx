import Carousel from '../Carousel/Carousel';

import client_1 from '../../images/feedback-logo/mobistravel-logo.svg';
import client_2 from '../../images/feedback-logo/rozatour-logo.svg';
import client_3 from '../../images/feedback-logo/mira-tur-logo.svg';
import client_4 from '../../images/feedback-logo/merytour.png';

export default function Feedback() {
  const feedback = [
    {
      image: client_1,
      description: `1. Каковы были ваши общие впечатления от сотрудничества с нашей веб-студией? - Все чудесно. Быстро, легко.
    2. Какой сайт вы получили в итоге? - Полностью отвечающий всем поставленным задачам
    3. Как бы вы оценили качество работы наших специалистов? - на 10 из 5ти`,
      name: `Мария`,
      date: `22.03.2024`,
      dateTime: `2024.03.22`,
      link: `https://vk.com/nicedevwebstudio?w=wall-225101044_9%2Fall`,
      website: `www.mobistravel.ru`,
    },
    {
      image: client_2,
      description: `1. Каковы были ваши общие впечатления от сотрудничества с нашей веб-студией? - Всё на очень высоком уровне: от момента запроса до окончания работы всегда на связи. При создании сайта все пожелания учтены. Впечатления от сотрудничества только положительные.`,
      name: `Инна`,
      date: `26.03.2024`,
      dateTime: `2024.03.26`,
      link: `https://vk.com/wall-225101044_13?z=photo-225101044_457239050%2Falbum-225101044_00%2Frev`,
      website: `www.roza-tour.ru`,
    },
    {
      image: client_3,
      description: `1. Каковы были ваши общие впечатления от сотрудничества с нашей веб-студией? - Очень приятные впечатления. Терпеливо объясняли, рассказывали, отвечали на вопросы.`,
      name: `Снежана`,
      date: `28.03.2024`,
      dateTime: `2024.03.28`,
      link: `https://vk.com/nicedevwebstudio?z=photo-225101044_457239052%2Falbum-225101044_00%2Frev`,
      website: `www.mira-tur.ru`,
    },
    {
      image: client_4,
      description: `1. Каковы были ваши общие впечатления от сотрудничества с нашей веб-студией? - Только положительные! 2. Какой сайт вы получили в итоге? - Работающий, и отвечающий всем моим желаниям. 3. Как бы вы оценили качество работы наших специалистов? - Очень высоко! Всегда на связи!`,
      name: `Ольга`,
      date: `02.04.2024`,
      dateTime: `2024.04.02`,
      link: `https://vk.com/nicedevwebstudio?z=photo-225101044_457239057%2Falbum-225101044_00%2Frev`,
      website: `www.merytour.ru`,
    },
  ];

  return (
    <section className="feedback" id="feedback">
      <h2 className="main__title">о нас говорят</h2>
      <div className="feedback-section">
        <div className="container">
          <Carousel
            content={feedback}
            breakpoints={[
              { maxWidth: 768, visibleCards: 1 },
              { maxWidth: 1024, visibleCards: 2 },
              { maxWidth: Infinity, visibleCards: 3 },
            ]}
            renderItem={(item) => (
              <a
                href={item.link}
                className="feedback-post"
                target="_blank"
                rel="noreferrer"
                title="нажмите чтобы посмотреть отзыв"
              >
                <div className="feedback-info">
                  <span
                    className="feedback-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <p className="feedback-client">{item.description}</p>
                </div>
                <span className="feedback-client-contact">
                  <span className="feedback-client-info">
                    <h2 className="client-name">{item.name}</h2>
                    <p className="feedback-cite">{item.website}</p>
                  </span>
                  <time dateTime={item.dateTime} className="feedback-date">
                    <i>{item.date}</i>
                  </time>
                </span>
                <svg
                  className="feedback-corner"
                  width="22.000000"
                  height="21.000000"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path id="Vector 4" d="M0 0L0 19L20 0L0 0Z" />
                  <path id="Vector 4" d="M0 19L20 0L0 0L0 19Z" />
                </svg>
              </a>
            )}
          />
        </div>
      </div>
    </section>
  );
}
