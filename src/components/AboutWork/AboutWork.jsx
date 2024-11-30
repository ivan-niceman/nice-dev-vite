export default function AboutWork() {
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

  return (
    <section className="about-our-work container">
      <h2 className="main__title">как мы работаем?</h2>
      <div className="about-specialty">
        {aboutOurWorkContent.map((item, index) => (
          <div key={index}>
            <div>
              <h2 className="about-specialty-title">{item.title}</h2>
              <p className="about-specialty-paragraph">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
