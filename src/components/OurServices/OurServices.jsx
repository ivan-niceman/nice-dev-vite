export default function OurServices() {
  const services = [
    {
      title_1: `разработка сайтов`,
      title_2: `любой сложности`,
    },
    {
      title_1: `доработка`,
      title_2: `и обслуживание`,
      title_3: `существующих сайтов`,
    },
    {
      title_1: `разработка логотипа,`,
      title_2: `фирменного стиля`,
    },
    {
      title_1: `разработка telegram`,
      title_2: `ботов`,
    },
    {
      title_1: `сайт-шаблон`,
      title_2: `за 3 дня`,
    },
  ];
  return (
    <section className="our-services container" id="services">
      <h2 className="main__title">наши услуги</h2>
      <ul className="services-list">
        {services.map((service, index) => (
          <li className="services-item" key={index}>
            <h3 className="services-subtitle">{service.title_1}</h3>
            <h3 className="services-subtitle">{service.title_2}</h3>
            <h3 className="services-subtitle">{service.title_3}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
