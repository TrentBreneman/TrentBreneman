// src/components/Skills/Skills.tsx
import React, { useEffect, useRef } from 'react';
import './Skills.css'; // Don't forget your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faGitAlt,
  faAws,
  faDocker, 
} from '@fortawesome/free-brands-svg-icons'; // For brand icons like HTML, CSS, JS, React, Node.js, Python, Git, AWS, Docker
import {
  faChartSimple,
  faCogs,
  faDatabase,
    faDatabase as faDatabaseSolid, faLaptopCode, // Example of aliasing if you have a name clash
    faServer
} from '@fortawesome/free-solid-svg-icons';

// Define your skills data with associated icons
const skillsData = [
  { name: 'HTML5', icon: faHtml5, type: 'frontend' },
  { name: 'CSS3', icon: faCss3Alt, type: 'frontend' },
  { name: 'JavaScript', icon: faJs, type: 'frontend' },
  { name: 'React', icon: faReact, type: 'frontend' },
  { name: 'TypeScript', icon: faJs, type: 'frontend' }, // Using JS icon for TypeScript as well
  { name: 'Node.js', icon: faNodeJs, type: 'backend' },
  { name: 'Python', icon: faPython, type: 'backend' },
  { name: 'Express.js', icon: faServer, type: 'backend' }, // Generic server icon for Express 
  { name: 'SQL', icon: faDatabase, type: 'database' },
  { name: 'NoSQL', icon: faDatabaseSolid, type: 'database' }, // Using the solid database icon
  { name: 'Git', icon: faGitAlt, type: 'tools' },
  { name: 'GitHub', icon: faGitAlt, type: 'tools' }, // Using Git icon for GitHub
  { name: 'AWS', icon: faAws, type: 'cloud' },
  { name: 'Docker', icon: faDocker, type: 'devops' },
  { name: 'RESTful APIs', icon: faCogs, type: 'backend' }, // Generic cogs icon
  { name: 'Data Structures', icon: faChartSimple, type: 'cs-fundamentals' },
  { name: 'Algorithms', icon: faLaptopCode, type: 'cs-fundamentals' }, 
  // Add more skills as needed
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // You might want to categorize your skills for better presentation
  const categorizedSkills = skillsData.reduce((acc, skill) => {
    (acc[skill.type] = acc[skill.type] || []).push(skill);
    return acc;
  }, {} as { [key: string]: typeof skillsData });

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2>My Skills</h2>
      <div className="skills-categories">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3> {/* Capitalize category name */}
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-chip">
                  {skill.icon && <FontAwesomeIcon icon={skill.icon} className="skill-icon" />}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;