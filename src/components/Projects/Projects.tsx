import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Projects.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  techStack: string[];
  features: string[];
  liveLink?: string;
  githubLink?: string;
  images?: string[];
}

const projectsData: Project[] = [
  {
    id: 'reesa-ink',
    title: 'Reesa | Artist Portfolio',
    subtitle: 'React, TypeScript, CSS',
    date: 'March 2026 - Present',
    description:
      'A sleek, modern portfolio for a professional tattoo artist specializing in color realism, fine line, and black & grey work.',
    techStack: ['React', 'TypeScript', 'CSS'],
    features: [
      'Developed a responsive, high-performance gallery.',
      'Designed a clean, minimalist UI.',
      'Implemented smooth transitions and interactive elements.',
      'Optimized image loading and performance.',
    ],
    liveLink: 'https://reesa.ink',
    images: [`${import.meta.env.BASE_URL}TrentBreneman/reesa.ink.png`],
  },
  {
    id: 'business-homepage',
    title: 'iSolvRisk | Business Homepage',
    subtitle: 'PERN Stack (PostgreSQL, Express, React, Node.js)',
    date: 'October 2024 - Present',
    description:
      'A fully functional business homepage providing users with an interactive and informative experience.',
    techStack: ['PostgreSQL', 'Express.js', 'React', 'Node.js', 'TypeScript', 'CSS'],
    features: [
      'Built a responsive React frontend.',
      'Created a robust backend with Node.js and Express.',
      'Integrated PostgreSQL to manage business data.',
      'Implemented responsive design for all devices.',
    ],
    liveLink: 'https://isolvrisk.com',
    images: [`${import.meta.env.BASE_URL}TrentBreneman/iSolvRisk.png`],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Selected Projects</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="project-card glass"
            >
              <div className="project-image">
                {project.images && project.images.length > 0 && (
                  <ImageCarousel images={project.images} title={project.title} />
                )}
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
