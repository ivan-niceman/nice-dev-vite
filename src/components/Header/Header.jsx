import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Form from '../Form/Form';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname === '/' ? (
        <>
          <span className="header__section-white" />
          <span className="header__section-yellow" />
          <div className="container">
            <Navigation />
            <div className="header__titles">
              <h1 className="header__title-left">
                СОБИРАЕМ И ЗАПУСКАЕМ
                <span className="header__title-left-color"> ПРОДАЮЩИЕ </span>
                САЙТЫ турфирм
              </h1>
              <h2 className="header__title-right">
                создаем
                <span className="header__title-right-color"> успешный </span> и
                узнаваемый бренд
              </h2>
            </div>

            <div className="header__bottom">
              <span className="header__image"></span>
              <div className="header__section-form">
                <h2 className="header__form-title">бесплатная консультация</h2>
                <Form />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <span className="header__section-white" />
          <span className="header__section-yellow" />
          <div className="container">
            <Navigation />
          </div>
        </>
      )}
    </header>
  );
}
