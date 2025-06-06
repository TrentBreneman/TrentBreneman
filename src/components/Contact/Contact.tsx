import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = contactRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="contact" className={`contact-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={contactRef} aria-labelledby="contact-heading">
      <h2 id="contact-heading">CONTACT ME</h2>
      <p className="contact-intro-text">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>

      <div className="contact-content-wrapper">
        <div className="contact-social-links">
          <h3>Or connect with me directly:</h3>
          <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Connect with Trent on LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
          <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="View Trent's GitHub Profile">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href="mailto:tbreneman@icloud.com" className="social-link" aria-label="Send an email to Trent">
            <FontAwesomeIcon icon={faPaperPlane} /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;