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
    <section
      ref={educationRef}
      aria-labelledby="education-heading"
      className={`education-section ${isVisible ? 'fade-in-slide-up' : ''}`}
      id="education"
    >
      <h2 id="education-heading">EDUCATION & SPECIALIZATION</h2>
      <div className="education-entry">
        <h3>Full-Stack Curriculum Completion (The Odin Project)</h3>
        <p className="education-dates">Completed 2024</p>
        <ul className="education-description">
          <li>
            <FontAwesomeIcon className="education-check-icon" icon={ faGraduationCap } />
            Mastered a comprehensive full-stack curriculum, establishing a robust foundation in
            HTML, CSS, JavaScript, and React.
          </li>
          <li>
            <FontAwesomeIcon className="education-check-icon" icon={ faGraduationCap } />
            Developed and deployed numerous production-ready applications, demonstrating proficiency
            in both frontend and backend architectures.
          </li>
        </ul>
      </div>

      <div className="education-entry">
        <h3>Advanced Technical Specialization</h3>
        <p className="education-dates">2024 - Present</p>
        <ul className="education-description">
          <li>
            <FontAwesomeIcon className="education-check-icon" icon={ faGraduationCap } />
            Deep-diving into system design, cloud architecture (AWS/GCP), and advanced DevOps
            practices to build more resilient applications.
          </li>
          <li>
            <FontAwesomeIcon className="education-check-icon" icon={ faGraduationCap } />
            Continuous exploration of emerging technologies including Next.js 14+, GraphQL, and
            high-performance database indexing.
          </li>
          <li>
            <FontAwesomeIcon className="education-check-icon" icon={ faGraduationCap } />
            Cultivated a mindset of lifelong learning, regularly participating in technical
            workshops and contributing to open-source discussions.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
