import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <p>&copy; {currentYear} Trent Breneman. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>Built with React, TypeScript, and Vite.</p>
    </footer>
  );
};

export default Footer;