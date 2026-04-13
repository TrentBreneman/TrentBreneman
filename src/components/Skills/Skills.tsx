import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
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
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  { name: 'GraphQL', icon: faCodeBranch, type: 'backend' },
  { name: 'PostgreSQL', icon: faDatabase, type: 'database' },
  { name: 'MongoDB', icon: faDatabase, type: 'database' },
  { name: 'SQL', icon: faDatabase, type: 'database' },
  { name: 'Git', icon: faGitAlt, type: 'tools' },
  { name: 'GitHub', icon: faCodeBranch, type: 'tools' },
  { name: 'Docker', icon: faDocker, type: 'tools' },
  { name: 'AWS', icon: faAws, type: 'tools' },
  { name: 'CI/CD', icon: faCogs, type: 'tools' },
  { name: 'Testing (Jest/Vitest)', icon: faBug, type: 'tools' },
  { name: 'Vite', icon: faBolt, type: 'tools' },
  { name: 'Jira', icon: faLayerGroup, type: 'tools' },
  { name: 'Figma', icon: faFigma, type: 'tools' },
  { name: 'Problem Solving', icon: faPuzzlePiece, type: 'soft skills' },
  { name: 'Data Visualization', icon: faChartSimple, type: 'soft skills' },
  { name: 'Debugging', icon: faBug, type: 'soft skills' },
];

const Skills: React.FC = () => {
  const categorizedSkills = skillsData.reduce(
    (acc, skill) => {
      (acc[skill.type] = acc[skill.type] || []).push(skill);
      return acc;
    },
    {} as { [key: string]: Skill[] }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">My Technical Arsenal</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-categories">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="skills-category glass"
            >
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="skill-chip"
                  >
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
