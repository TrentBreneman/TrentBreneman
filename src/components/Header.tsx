import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  const [taglineText, setTaglineText] = useState('');
  const fullTagline = "Passionate Front-End Developer | Crafting immersive web experiences with clean code and innovative design.";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullTagline.length) {
      const timeout = setTimeout(() => {
        setTaglineText(prevText => prevText + fullTagline[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullTagline]);

  return (
    <header className="header-section">
      <div className="theme-toggle-container">
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      <div className="header-content-wrapper">
        <h1 className="header-title">Trent Breneman</h1>
        <p className="header-tagline">
          {taglineText}
          <span className="typing-cursor">|</span>
        </p>
        <div className="header-social-links">
          <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:tbreneman@icloud.com" aria-label="Email Trent">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <p className="header-call-to-action">Let's build something amazing together!</p>
      </div>
    </header>
  );
};

export default Header;