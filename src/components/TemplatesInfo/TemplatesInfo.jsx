import FormButton from '../FormButton/FormButton';

export default function TemplatesInfo() {
  return (
    <section className="templates-info container">
      <div>
        <h2 className="main__title">
          сайт для туристического агентства за 15к
        </h2>
        <p className="templates-info__text">
          Сайт-шаблон для туристического агентства, написанный с учетом SEO с
          кодом для поисковых роботов, по фиксированной цене за 3 дня
        </p>
        <p className="templates-info__text">Вам это подходит, если:</p>
        <ul className="templates-info__list">
          <li>
            Вы хотите проверить, насколько сайт может увеличить ваши продажи;
          </li>
          <li>Вам не нужен большой многостраничный сайт;</li>
          <li>
            Вам срочно нужен сайт, но пока нет финансов заказать индивидуальный
            вариант &#34;под себя&#34;.
          </li>
        </ul>
      </div>
      <FormButton />
    </section>
  );
}
