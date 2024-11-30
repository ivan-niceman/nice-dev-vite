import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import AboutWork from '../AboutWork/AboutWork';
import OurServices from '../OurServices/OurServices';
import Price from '../Price/Price';
import Portfolio from '../Portfolio/Portfolio';
import Feedback from '../Feedback/Feedback';
import Questions from '../Questions/Questions';
import TemplatesInfo from '../TemplatesInfo/TemplatesInfo';
import TemplatesExample from '../TemplatesExample/TemplatesExample';
import WhyWe from '../WhyWe/WhyWe';
import Rules from '../Rules/Rules';
import TemplatesForm from '../TemplatesForm/TemplatesForm';
import Footer from '../Footer/Footer';
import Privacy from '../Privacy/Privacy';
import ScrollUp from '../ScrollUp/ScrollUp';
import { YMInitializer } from 'react-yandex-metrika';
import ContactsMessage from '../ContactsMessage/ContactsMessage';
import FormContext from '../../contexts/FormContext';

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <FormContext.Provider value={setFormSubmitted}>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Portfolio />
                  <About />
                  <AboutWork />
                  <OurServices />
                  <Price />
                  <Feedback />
                  <Questions />
                </>
              }
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route
              path="/templates"
              element={
                <>
                  <TemplatesInfo />
                  <TemplatesExample />
                  <WhyWe />
                  <Rules />
                  <TemplatesForm />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
        <ContactsMessage formSubmitted={formSubmitted} />
        <ScrollUp />
        <YMInitializer accounts={[91061480]} options={{ webvisor: true }} />
      </div>
    </FormContext.Provider>
  );
}
