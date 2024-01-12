
import './ScrollUp.css';
import { useState, useEffect } from 'react';

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button id="scrollUpButton" className={`scroll-up${isVisible ? ' scroll-up_visible' : ''}`} onClick={scrollToTop}>
      <span />
      <span />
    </button>
  );
}
