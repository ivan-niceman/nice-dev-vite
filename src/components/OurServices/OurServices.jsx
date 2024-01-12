import './OurServices.css';

export default function OurServices() {
  return (
    <section className="our-services" id="services">
        <h2 className="main__title">наши услуги</h2>
        <ul className="services-list">
          <li className="services-item">
            <h3 className="services-subtitle">разработка сайтов</h3>
            <h3 className="services-subtitle">любой сложности</h3>
          </li>
          <li className="services-item">
            <h3 className="services-subtitle">доработка</h3>
            <h3 className="services-subtitle">и обслуживание</h3>
            <h3 className="services-subtitle">существующих сайтов</h3>
          </li>
          <li className="services-item">
            <h3 className="services-subtitle">разработка логотипа,</h3>
            <h3 className="services-subtitle">фирменного стиля</h3>
          </li>
        </ul>
      </section>
  );
}
