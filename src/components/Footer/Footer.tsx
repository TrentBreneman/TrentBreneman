import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer aria-label="Website Footer" className="footer-section">
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; { currentYear } Trent Breneman. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            aria-label="View Trent's GitHub Profile"
            className="footer-icon-link"
            href="https://github.com/TrentBreneman"
            rel="noopener noreferrer"
            target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            aria-label="Connect with Trent on LinkedIn"
            className="footer-icon-link"
            href="https://linkedin.com/in/TrentBreneman"
            rel="noopener noreferrer"
            target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p className="footer-built-with">Built with React, TypeScript, and Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
