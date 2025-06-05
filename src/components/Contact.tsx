import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>CONTACT ME</h2>
      <p>
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="contact-links">
        <a href="mailto:tbreneman@icloud.com" className="contact-link" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn Profile">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="GitHub Profile">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;