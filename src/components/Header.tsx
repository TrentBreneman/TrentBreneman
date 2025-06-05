import React from 'react';
import '../components/Header.css'; 

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <header className="header-section">
      <div className="theme-toggle-container">
        <button className="theme-toggle-button" onClick={toggleTheme}>
          {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
      <h1 className="header-title">Trent Breneman</h1>
      <p className="header-tagline">
        Versatile full-stack web developer with hands-on experience building and deploying robust applications.
      </p>
      <p className="header-contact">
        704-443-1864 | tbreneman@icloud.com |{' '}
        <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/TrentBreneman
        </a>{' '}
        |{' '}
        <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer">
          github.com/TrentBreneman
        </a>
      </p>
    </header>
  );
};

export default Header;