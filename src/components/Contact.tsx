import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>CONTACT ME</h2>
      <p>
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="contact-links">
        <a href="mailto:tbreneman@icloud.com" className="contact-link">Email: tbreneman@icloud.com</a>
        <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
        <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;