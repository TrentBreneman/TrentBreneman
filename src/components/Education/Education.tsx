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
      <div className="education-entry">
      <h3>EDUCATION & SELF-LEARNING</h3>
        <p className="education-dates">Ongoing/Self-Paced Learning</p> 
        <ul className="education-description">
          <li>Completed a comprehensive full-stack curriculum through **The Odin Project**.</li>
          <li>Gained hands-on expertise in foundational web technologies, including HTML, CSS, and JavaScript.</li>
          <li>Developed proficiency in modern front-end development using React frameworks.</li>
          <li>Acquired practical back-end skills with Node.js for building server-side applications.</li>
          <li>Applied learned concepts to build practical projects, demonstrating a strong understanding of web development workflows.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;