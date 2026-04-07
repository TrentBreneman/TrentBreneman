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
    <section
      ref={experienceRef}
      aria-labelledby="experience-heading"
      className={`experience-section ${isVisible ? 'fade-in-slide-up' : ''}`}
      id="experience"
    >
      <h2 id="experience-heading">EXPERIENCE</h2>
      <div className="experience-entry">
        <h3>Software Developer - iSolvRisk Inc.</h3>
        <p className="experience-dates">February 2024 - Present | Remote</p>
        <ul className="experience-description">
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Lead the development and maintenance of high-traffic user-facing applications using
            React and TypeScript, driving a 30% increase in user engagement through performance
            optimizations.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Architected and implemented scalable backend solutions with PostgreSQL and Node.js,
            managing complex data workflows and ensuring 99.9% system uptime.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Mentor junior developers and lead cross-functional teams to deliver enterprise-grade
            software solutions in a fast-paced Agile environment.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Spearheaded the integration of Docker and CI/CD pipelines, streamlining the deployment
            process and reducing release cycles by 40%.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Developed advanced data visualization tools that provide stakeholders with actionable
            insights, directly influencing product strategy and roadmap.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Implemented robust security protocols, including OAuth2 and JWT-based authentication, to
            safeguard sensitive user data and ensure regulatory compliance.
          </li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>Assistant Kitchen Manager - Charbar 7</h3>
        <p className="experience-dates">October 2018 - October 2021 | Charlotte, NC</p>
        <ul className="experience-description">
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Managed daily kitchen operations, including staff scheduling and inventory management.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Trained and mentored kitchen staff to ensure consistency in food preparation and
            quality.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Oversaw food safety and sanitation compliance in adherence to local health regulations.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Streamlined kitchen workflows to improve efficiency during peak hours.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Collaborated with management to develop new menu items and specials, boosting customer
            satisfaction.
          </li>
          <li>
            <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
            Maintained strong communication with front-of-house staff to ensure seamless service.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
