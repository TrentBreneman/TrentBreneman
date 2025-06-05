import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Material-UI', 'Redux', 'Zustand', 'React Router'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs', 'GraphQL (basic)', 'Flask (Python)'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Webpack', 'Vite', 'NPM', 'Yarn', 'Postman', 'Jira', 'Agile/Scrum'],
  },
  {
    category: 'Concepts',
    items: ['Responsive Design', 'API Design', 'Authentication & Authorization', 'State Management', 'Component-Based Architecture', 'Unit Testing', 'Deployment (Vercel, Netlify)'],
  },
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLElement>(null);
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={skillsRef}>
      <h2>MY SKILLS</h2>
      <div className="skills-grid">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skills-category-card">
            <h3>{skillCategory.category}</h3>
            <div className="skills-items">
              {skillCategory.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;