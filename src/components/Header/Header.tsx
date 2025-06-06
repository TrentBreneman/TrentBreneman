import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const [taglineText, setTaglineText] = useState('');
  const fullTagline = 'Passionate Front-End Developer | Crafting immersive web experiences with clean code and innovative design.';
  const [currentIndex, setCurrentIndex] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (currentIndex < fullTagline.length) {
      const timeout = setTimeout(() => {
        setTaglineText((prevText) => prevText + fullTagline[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullTagline]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (headerRef.current) {
      const { clientX, clientY } = event;
      const { left, top, width, height } = headerRef.current.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) / (width / 2);
      const y = (clientY - (top + height / 2)) / (height / 2);
      setMousePosition({ x, y });
    }
  }, []);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (headerElement) {
      headerElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (headerElement) {
        headerElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [handleMouseMove]);

  const getParallaxStyle = (depth: number) => ({
    transform: `translate(${mousePosition.x * depth}px, ${mousePosition.y * depth}px)`,
  });

  return (
    <header className="header-section" ref={headerRef} aria-label="Portfolio Header">
      <div className="theme-toggle-container">
        <button
          className="theme-toggle-button"
          onClick={toggleTheme}
          aria-label={`Toggle theme to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
        >
          {currentTheme === 'light' ? (
            <span role="img" aria-label="Moon emoji">🌙 Dark Mode</span>
          ) : (
            <span role="img" aria-label="Sun emoji">☀️ Light Mode</span>
          )}
        </button>
      </div>
      <div className="header-content-wrapper">
        <h1 className="header-title" style={getParallaxStyle(10)}>Trent Breneman</h1>
        <p className="header-tagline" style={getParallaxStyle(7)}>
          {taglineText}
          <span className="typing-cursor" aria-hidden="true">|</span>
        </p>
        <nav className="header-social-links" style={getParallaxStyle(5)} aria-label="Social Links">
          <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer" aria-label="Visit Trent's LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer" aria-label="Visit Trent's GitHub Profile">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:tbreneman@icloud.com" aria-label="Send an email to Trent">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </nav>
        <p className="header-call-to-action" style={getParallaxStyle(3)}>Let's build something amazing together!</p>
        <a href="/TrentBreneman.pdf" target="_blank" rel="noopener noreferrer" className="resume-download-button" aria-label="Download Trent's Resume">
            <FontAwesomeIcon icon={faFileArrowDown} /> Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;