import React, { useEffect, useRef } from 'react';
import './Skills.css';
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
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChartSimple,
  faDatabase,
  faServer,
  faCodeBranch,
  faBug,
  faPuzzlePiece,
  faBolt,
  faCogs,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

interface Skill {
  name: string;
  icon: any;
  type: 'frontend' | 'backend' | 'database' | 'tools' | 'soft skills';
}

const skillsData: Skill[] = [
  { name: 'HTML5', icon: faHtml5, type: 'frontend' },
  { name: 'CSS3', icon: faCss3Alt, type: 'frontend' },
  { name: 'JavaScript', icon: faJs, type: 'frontend' },
  { name: 'TypeScript', icon: faJs, type: 'frontend' },
  { name: 'React', icon: faReact, type: 'frontend' },
  { name: 'Next.js', icon: faReact, type: 'frontend' },
  { name: 'Tailwind CSS', icon: faCss3Alt, type: 'frontend' },
  { name: 'Node.js', icon: faNodeJs, type: 'backend' },
  { name: 'Express.js', icon: faServer, type: 'backend' },
  { name: 'Python', icon: faPython, type: 'backend' },
  { name: 'Flask', icon: faPython, type: 'backend' },
  { name: 'PostgreSQL', icon: faDatabase, type: 'database' },
  { name: 'MongoDB', icon: faDatabase, type: 'database' },
  { name: 'SQL', icon: faDatabase, type: 'database' },
  { name: 'Git', icon: faGitAlt, type: 'tools' },
  { name: 'GitHub', icon: faCodeBranch, type: 'tools' },
  { name: 'Docker', icon: faDocker, type: 'tools' },
  { name: 'AWS', icon: faAws, type: 'tools' },
  { name: 'Vite', icon: faBolt, type: 'tools' },
  { name: 'Webpack', icon: faCogs, type: 'tools' },
  { name: 'Jira', icon: faLayerGroup, type: 'tools' },
  { name: 'Figma', icon: faFigma, type: 'tools' },
  { name: 'Problem Solving', icon: faPuzzlePiece, type: 'soft skills' },
  { name: 'Data Visualization', icon: faChartSimple, type: 'soft skills' },
  { name: 'Debugging', icon: faBug, type: 'soft skills' },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-slide-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const categorizedSkills = skillsData.reduce((acc, skill) => {
    (acc[skill.type] = acc[skill.type] || []).push(skill);
    return acc;
  }, {} as { [key: string]: Skill[] });

  return (
    <section id="skills" className="skills-section" ref={sectionRef} aria-labelledby="skills-heading">
      <h2 id="skills-heading">MY SKILLS</h2>
      <div className="skills-categories">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="skills-category" role="region" aria-labelledby={`${category}-heading`}>
            <h3 id={`${category}-heading`}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-chip">
                  {skill.icon && <FontAwesomeIcon icon={skill.icon} className="skill-icon" aria-hidden="true" />}
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