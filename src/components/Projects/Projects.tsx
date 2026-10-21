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
    title: 'Reesa.ink – Artist Portfolio',
    subtitle: 'React, Vercel, Supabase',
    date: 'June 2020 – Present',
    description:
      'A production client portfolio and booking web application for an independent tattoo artist.',
    techStack: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel', 'Framer Motion', 'Resend'],
    features: [
      'Architected and deployed a production client portfolio and booking web application for an independent tattoo artist using Next.js 15 (App Router), TypeScript, and Tailwind CSS.',
      'Engineered an automated client inquiry pipeline with a Next.js server-side route handler and Resend API, processing multipart form submissions and binary reference image attachments directly into structured email notifications.',
      'Designed an interactive, media-rich gallery and custom lightbox modal, leveraging Next.js Image optimization and responsive grid layouts to preserve high visual fidelity while minimizing initial page load and layout shifts.',
      'Built accessible, fluid micro-interactions and animated UI components using Framer Motion, including collapsible FAQ accordions, scroll-aware navigation states, and dynamic entry animations.',
    ],
    liveLink: 'https://reesa.ink',
    images: [`${import.meta.env.BASE_URL}TrentBreneman/reesa.ink.png`],
  },
  {
    id: 'business-homepage',
    title: 'iSolvRisk – Business Homepage',
    subtitle: 'React 19, TypeScript, CSS Modules, Node.js, PostgreSQL',
    date: 'Feb. 2024 – Present',
    description:
      'A responsive business homepage for an enterprise gamified risk-management platform.',
    techStack: ['React 19', 'TypeScript', 'CSS Modules', 'Vite', 'Node.js', 'PostgreSQL', 'SVGR', 'Sharp', 'WebP'],
    features: [
      'Architected and developed a responsive business homepage using React 19, TypeScript, and CSS Modules, engineering 20+ reusable components to improve maintainability and ensure consistent layouts across devices.',
      'Implemented route-level code splitting and dynamic bundle loading with Vite, developing a custom lazyRetry recovery mechanism to handle stale asset references and prevent cache-mismatch errors.',
      'Optimized frontend asset delivery using SVGR, Sharp, and WebP compression, reducing image payload sizes by over 60%.',
      'Built interactive event showcases and lead-generation workflows, implementing validated contact forms, reusable stateful filtering hooks, and analytics tracking.',
      'Engineered backend functionality and PostgreSQL database integrations using Node.js to support core application workflows and reliable data access.',
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
