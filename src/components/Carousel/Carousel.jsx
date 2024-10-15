import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

export default function Carousel({ content, renderItem, breakpoints }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [enableSwipe, setEnableSwipe] = useState(false);
  const [visibleCards, setVisibleCards] = useState(1);
  const [showPagination, setShowPagination] = useState(false);

  const listRef = useRef(null);
  const touchStartX = useRef(0);

  const activeIndex = (currentIndex - 1) % content.length;

  useEffect(() => {
    const updateCarouselSettings = () => {
      const width = window.innerWidth;
      let matchedBreakpoint = {
        enableSwipe: false,
        visibleCards: 1,
        showPagination: false
      };

      for (const breakpoint of breakpoints) {
        if (width <= breakpoint.maxWidth) {
          matchedBreakpoint = {
            enableSwipe: breakpoint.enableSwipe,
            visibleCards: breakpoint.visibleCards || 1,
            showPagination: breakpoint.showPagination || false,
          };
          break;
        }
      }

      setEnableSwipe(matchedBreakpoint.enableSwipe);
      setVisibleCards(matchedBreakpoint.visibleCards);
      setCurrentIndex(matchedBreakpoint.visibleCards);
      setShowPagination(matchedBreakpoint.showPagination);
    };

    updateCarouselSettings();
    window.addEventListener('resize', updateCarouselSettings);

    return () => window.removeEventListener('resize', updateCarouselSettings);
  }, [breakpoints]);

  const numberOfVisibleCards = visibleCards || 1;
  const totalItems = Math.ceil(content.length / numberOfVisibleCards);

  const extendedContent = [
    ...content.slice(-numberOfVisibleCards),
    ...content,
    ...content.slice(0, numberOfVisibleCards)
  ];

  const updateIndex = (newIndex) => {
    if (!isTransitioning) {
      setCurrentIndex(newIndex);
      setIsTransitioning(true);
      listRef.current.style.transition = 'transform .5s ease-out';
      listRef.current.style.transform = `translateX(-${newIndex * (100 / numberOfVisibleCards)}%)`;
    }
  };

  const handleTransitionEnd = () => {
    listRef.current.style.transition = 'none';
    setIsTransitioning(false);

    if (currentIndex <= 0) {
      setCurrentIndex(content.length);
      listRef.current.style.transform = `translateX(-${content.length * (100 / numberOfVisibleCards)}%)`;
    } else if (currentIndex > content.length ) {
      setCurrentIndex(1);
      listRef.current.style.transform = `translateX(-${100 / numberOfVisibleCards}%)`;
    }
  };

  // buttons & pagination control
  const nextSlide = () => {
    updateIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    updateIndex(currentIndex - 1);
  };

  const goToSlide = (pageIndex) => {
    const newIndex = pageIndex * visibleCards + 1;
    updateIndex(newIndex);
  };

  // touch control
  const handleTouchStart = (e) => {
    if (enableSwipe && !isTransitioning) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      touchStartX.current = clientX;
      setIsDragging(true);
      setDragOffset(0);
    }
  };

  const handleTouchMove = (e) => {
    if (enableSwipe && isDragging && !isTransitioning) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const dragDistance = clientX - touchStartX.current;
      setDragOffset(dragDistance);
      const minSwipeDistance = 50;

      if (dragDistance > minSwipeDistance) {
        prevSlide();
        setIsDragging(false);
      } else if (dragDistance < -minSwipeDistance) {
        nextSlide();
        setIsDragging(false);
      } else {
        listRef.current.style.transform = `translateX(calc(-${currentIndex * (100 / numberOfVisibleCards)}% + ${dragDistance}px))`;
      }
    }
  };

  const handleTouchEnd = () => {
    if (enableSwipe && isDragging && !isTransitioning) {
      setIsDragging(false);
      const swipeDistance = dragOffset;
      const minSwipeDistance = 50; // Minimum distance in pixels to consider as swipe

      if (swipeDistance > minSwipeDistance) {
        prevSlide();
      } else if (swipeDistance < -minSwipeDistance) {
        nextSlide();
      } else {
        listRef.current.style.transform = `translateX(-${currentIndex * (100 / numberOfVisibleCards)}%)`;
      }
      setDragOffset(0);
    }
  };

  return (
    <div
      className="carousel"
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='carousel__content'>
        <ul
          className="carousel__list"
          ref={listRef}
          onTransitionEnd={handleTransitionEnd}
          style={{ transform: `translateX(-${currentIndex * (100 / numberOfVisibleCards)}%)` }}
        >
          {extendedContent.map((item, index) => (
            <li
              className={`carousel__item${index === activeIndex + numberOfVisibleCards ? ' active' : ''}`}
              key={index}
              style={{ flex: `0 0 ${100 / numberOfVisibleCards}%` }}
            >
              {renderItem(item, index)}
            </li>
          ))}
        </ul>
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12L16 7M21 12L16 17M21 12H3"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12L16 7M21 12L16 17M21 12H3"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      {showPagination && (
        <div className="carousel__pagination">
        {Array.from({ length: totalItems }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            className={`carousel__pagination-dot${pageIndex === Math.floor((currentIndex - 1) / visibleCards) ? ' active' : ''}`}
            onClick={() => goToSlide(pageIndex)}
          />
        ))}
      </div>
      )}
    </div>
  );
}

Carousel.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderItem: PropTypes.func.isRequired,
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      maxWidth: PropTypes.number,
      enableSwipe: PropTypes.bool,
      visibleCards: PropTypes.number,
      showPagination: PropTypes.bool,
    })
  ).isRequired,
};
