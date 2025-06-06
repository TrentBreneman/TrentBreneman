import React, { useEffect, useRef, useState } from 'react';
import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education: React.FC = () => {
  const educationRef = useRef<HTMLElement>(null);
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

    const currentRef = educationRef.current;
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
    <section id="education" className={`education-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={educationRef} aria-labelledby="education-heading">
      <h2 id="education-heading">EDUCATION & SELF-LEARNING</h2>
      <div className="education-entry">
        <h3>The Odin Project (Full-Stack Curriculum)</h3>
        <p className="education-dates">Ongoing / Self-Paced Learning</p>
        <ul className="education-description">
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="education-check-icon" />
            Completed a comprehensive full-stack curriculum, building a strong foundation in modern web development.
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="education-check-icon" />
            Gained hands-on expertise in foundational web technologies, including HTML, CSS, and vanilla JavaScript.
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="education-check-icon" />
            Developed proficiency in modern front-end development using React, Redux, and TypeScript.
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="education-check-icon" />
            Acquired practical back-end skills with Node.js, Express, and MongoDB/PostgreSQL for building server-side applications.
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="education-check-icon" />
            Applied learned concepts to build numerous practical projects, demonstrating a strong understanding of web development workflows, testing, and deployment.
          </li>
          <li>
            <FontAwesomeIcon icon={faGraduationCap} className="education-check-icon" />
            Cultivated problem-solving abilities and an independent learning mindset essential for continuous growth in tech.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;