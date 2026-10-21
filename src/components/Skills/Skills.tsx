import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCode,
  faBolt,
  faCloud,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Skill {
  name: string;
  icon: any;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: faJs },
      { name: 'TypeScript', icon: faCode },
      { name: 'SQL', icon: faDatabase },
      { name: 'HTML', icon: faHtml5 },
      { name: 'CSS', icon: faCss3Alt },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React', icon: faReact },
      { name: 'Next.js', icon: faLayerGroup },
      { name: 'Node.js', icon: faNodeJs },
      { name: 'Tailwind CSS', icon: faCss3Alt },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: faDatabase },
      { name: 'Supabase', icon: faBolt },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git', icon: faGitAlt },
      { name: 'GitHub', icon: faGithub },
      { name: 'Docker', icon: faDocker },
      { name: 'Vite', icon: faBolt },
      { name: 'Vercel', icon: faCloud },
    ],
  },
];

const Skills: React.FC = () => {
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
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="skills-categories">
          {skillsCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="skills-category glass"
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill) => (
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
