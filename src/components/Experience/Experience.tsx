import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLElement>(null);
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

    const currentRef = experienceRef.current;
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
    <section id="experience" className={`experience-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={experienceRef} aria-labelledby="experience-heading">
      <h2 id="experience-heading">EXPERIENCE</h2>
      <div className="experience-entry">
        <h3>Software Developer - iSolvRisk Inc.</h3>
        <p className="experience-dates">February 2024 - Present | Remote</p>
        <ul className="experience-description">
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Developed and maintained user-facing applications using React and TypeScript, ensuring high-quality, interactive user experiences.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Designed and implemented robust backends with PostgreSQL to manage complex data workflows efficiently.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Collaborated with a cross-functional team of developers, designers, and stakeholders to deliver scalable software solutions.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Analyzed and visualized data from various sources to support decision-making and enhance application functionality.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Streamlined team workflows by integrating Agile methodologies and using Git for version control and collaboration.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Built full-stack features using Flask, React, PostgreSQL, and Docker to improve team productivity and showcase GitHub collaboration trends.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Implemented secure user authentication and authorization using industry best practices.
          </li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>Assistant Kitchen Manager - Charbar 7</h3>
        <p className="experience-dates">October 2018 - October 2021 | Charlotte, NC</p>
        <ul className="experience-description">
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Managed daily kitchen operations, including staff scheduling and inventory management.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Trained and mentored kitchen staff to ensure consistency in food preparation and quality.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Oversaw food safety and sanitation compliance in adherence to local health regulations.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Streamlined kitchen workflows to improve efficiency during peak hours.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Collaborated with management to develop new menu items and specials, boosting customer satisfaction.
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
            Maintained strong communication with front-of-house staff to ensure seamless service.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;