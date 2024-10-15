import { useEffect } from 'react';

import About from "../About/About";
import AboutWork from "../AboutWork/AboutWork";
import OurServices from "../OurServices/OurServices";
import Price from "../Price/Price";
import Portfolio from "../Portfolio/Portfolio";
import Feedback from "../Feedback/Feedback";
import Questions from "../Questions/Questions";

export default function Main() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
      root: null, // Observe intersections with the viewport
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing after it's visible
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="main">
      <Portfolio />
      <About />
      <AboutWork />
      <OurServices />
      <Price />
      <Feedback />
      <Questions />
    </main>
  );
}
