import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTopButton.css';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <button
      className={`back-to-top ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top of the page"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default BackToTopButton;