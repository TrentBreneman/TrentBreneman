import React, { useEffect, useRef, useState, useMemo } from 'react';

import './Projects.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

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

const Projects: React.FC = () => {
  const projectsData: Project[] = useMemo(() => [
    {
      id: 'reesa-ink',
      title: 'Reesa | Artist Portfolio',
      subtitle: 'React, TypeScript, CSS',
      date: 'March 2026 - Present',
      description:
        'A sleek, modern portfolio for a professional tattoo artist specializing in color realism, fine line, and black & grey work. The site emphasizes visual impact and clean execution to showcase intricate artistry.',
      techStack: ['React', 'TypeScript', 'CSS'],
      features: [
        'Developed a responsive, high-performance gallery for showcasing a diverse portfolio of tattoo designs.',
        "Designed a clean, minimalist UI that highlights the artist's work through intuitive navigation and large-scale imagery.",
        'Implemented smooth transitions and interactive elements to enhance the user experience.',
        'Optimized image loading and performance to ensure a fast, seamless browsing experience across all devices.',
      ],
      liveLink: 'https://reesa.ink',
      images: [`${import.meta.env.BASE_URL}TrentBreneman/reesa.ink.png`],
    },
    {
      id: 'business-homepage',
      title: 'Business Homepage',
      subtitle: 'PERN Stack (PostgreSQL, Express, React, Node.js)',
      date: 'October 2024 - Present',
      description:
        'A fully functional business homepage providing users with an interactive and informative experience, showcasing services and contact information.',
      techStack: ['PostgreSQL', 'Express.js', 'React', 'Node.js', 'TypeScript', 'CSS'],
      features: [
        "Built a responsive React frontend that showcases the company's services, values, and contact information.",
        'Created a robust backend with Node.js and Express, handling API routes and business logic.',
        'Integrated PostgreSQL to manage business data, including client information and service offerings.',
        'Implemented responsive design to ensure optimal user experience across devices',
      ],
      liveLink: 'https://isolvrisk.com',
      images: [`${import.meta.env.BASE_URL}TrentBreneman/iSolvRisk.png`],
    },
  ], []);

  const projectsRef = useRef<HTMLElement>(null);
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  // Removed uniqueSkills and filteredProjects memos as filtering is no longer needed

  return (
    <section
      ref={projectsRef}
      className={`projects-section ${isVisible ? 'fade-in-slide-up' : ''}`}
      id="projects"
    >
      <h2>PROJECTS</h2>
      {/* Removed the filter buttons div */}
      <div className="projects-grid">
        {/* Directly map over projectsData since there's no filtering */}
        {projectsData.map((project) => (
          <div
            key={project.id}
            aria-labelledby={`${project.id}-title`}
            className="project-card"
            role="article"
          >
            {project.images && project.images.length > 0 && (
              <ImageCarousel images={project.images} title={project.title} />
            )}
            <div className="project-card-content">
              <h3 id={`${project.id}-title`}>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-date">{project.date}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
              </div>
              <ul className="project-features">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <FontAwesomeIcon className="feature-check-icon" icon={ faCircleCheck } />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              {project.liveLink && (
                <a
                  aria-label={`View live demo of ${project.title}`}
                  href={project.liveLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  See Live
                </a>
              )}
              {project.githubLink && (
                <a
                  aria-label={`View GitHub repository for ${project.title}`}
                  href={project.githubLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
