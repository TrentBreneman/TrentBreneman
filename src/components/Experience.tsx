import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className={`experience-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={experienceRef}>
      <h2>EXPERIENCE</h2>
      <div className="experience-entry">
        <h3>Software Developer - iSolvRisk Inc.</h3>
        <p className="experience-dates">February 2024 - Present | Remote</p>
        <ul className="experience-description">
          <li>Developed and maintained user-facing applications using React and TypeScript, ensuring high-quality, interactive user experiences. </li>
          <li>Designed and implemented robust backends with PostgreSQL to manage complex data workflows efficiently. </li>
          <li>Collaborated with a cross-functional team of developers, designers, and stakeholders to deliver scalable software solutions. </li>
          <li>Analyzed and visualized data from various sources to support decision-making and enhance application functionality. </li>
          <li>Streamlined team workflows by integrating Agile methodologies and using Git for version control and collaboration. </li>
          <li>Built full-stack features using Flask, React, PostgreSQL, and Docker to improve team productivity and showcase GitHub collaboration trends. </li>
          <li>Implemented secure user authentication and authorization using industry best practices.</li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>Assistant Kitchen Manager - Charbar 7</h3>
        <p className="experience-dates">October 2018 - October 2021 | Charlotte, NC</p>
        <ul className="experience-description">
          <li>Managed daily kitchen operations, including staff scheduling and inventory management. </li>
          <li>Trained and mentored kitchen staff to ensure consistency in food preparation and quality. </li>
          <li>Oversaw food safety and sanitation compliance in adherence to local health regulations. </li>
          <li>Streamlined kitchen workflows to improve efficiency during peak hours.</li>
          <li>Collaborated with management to develop new menu items and specials, boosting customer satisfaction.</li>
          <li>Maintained strong communication with front-of-house staff to ensure seamless service.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;