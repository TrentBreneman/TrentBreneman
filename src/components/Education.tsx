import React, { useEffect, useRef, useState } from 'react';
import './Education.css';

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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className={`education-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={educationRef}>
      <h2>EDUCATION</h2>
      <div className="education-entry">
        <h3>Bachelor of Science in Computer Science - University of North Carolina at Charlotte</h3>
        <p className="education-dates">Graduated: May 2023</p>
        <ul className="education-description">
          <li>Focused on Software Engineering, Data Structures, and Algorithms.</li>
          <li>Completed relevant coursework in Web Development, Database Management, and Object-Oriented Programming.</li>
          <li>Actively participated in coding challenges and collaborative projects.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;