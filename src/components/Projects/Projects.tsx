import React, { useState, useMemo, useEffect, useRef } from 'react';
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

const projectsData: Project[] = [
  {
    id: 'business-homepage',
    title: 'Business Homepage',
    subtitle: 'PERN Stack (PostgreSQL, Express, React, Node.js)',
    date: 'October 2024 - Present',
    description: 'A fully functional business homepage providing users with an interactive and informative experience, showcasing services and contact information.',
    techStack: ['PostgreSQL', 'Express.js', 'React', 'Node.js', 'TypeScript', 'CSS'],
    features: [
      'Built a responsive React frontend that showcases the company\'s services, values, and contact information.',
      'Created a robust backend with Node.js and Express, handling API routes and business logic.',
      'Integrated PostgreSQL to manage business data, including client information and service offerings.',
      'Implemented responsive design to ensure optimal user experience across devices',
    ],
    liveLink: 'https://isolvrisk.com',
    images: ['/isr.png', '/isr.rumble.png'], 
  },
  {
    id: 'rumble-quiz',
    title: 'Rumble | Interactive Quiz Platform',
    subtitle: 'MySQL, TypeScript, Node.js, React',
    date: 'February 2025 - Present',
    description: 'A dynamic, Kahoot-inspired interactive quiz platform enabling real-time engagement and competitive learning for multiple players.',
    techStack: ['MySQL', 'TypeScript', 'Node.js', 'Express.js', 'React', 'Socket.io', 'CSS'],
    features: [
      'Developed a real-time quiz engine using Socket.io, facilitating instant question delivery and answer processing for multiple players.',
      'Designed and implemented a robust backend with Node.js and Express, integrated with MySQL for efficient data management.',
      'Created an intuitive and responsive React frontend, allowing users to host, join, and participate in quizzes seamlessly.',
      'Incorporated features for creating custom quizzes, tracking scores, and displaying leaderboards to enhance the competitive experience.',
      'Focused on a modular architecture to allow for future feature expansion, such as diverse question types and user analytics.',
    ],
    images: ['/rumble.create.png', '/rumble.play.png'], 
  },
];

const Projects: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
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

  const uniqueSkills = useMemo(() => {
    const skills = new Set<string>();
    projectsData.forEach(project => {
      project.techStack.forEach(skill => skills.add(skill));
    });
    return Array.from(skills).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!selectedSkill) {
      return projectsData;
    }
    return projectsData.filter(project =>
      project.techStack.includes(selectedSkill)
    );
  }, [selectedSkill]);

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={projectsRef}>
      <h2>PROJECTS</h2>
      <div className="project-filter-buttons" role="group" aria-label="Filter projects by technology">
        <button
          onClick={() => setSelectedSkill(null)}
          className={!selectedSkill ? 'active' : ''}
          aria-pressed={!selectedSkill}
        >
          All
        </button>
        {uniqueSkills.map(skill => (
          <button
            key={skill}
            onClick={() => setSelectedSkill(skill)}
            className={selectedSkill === skill ? 'active' : ''}
            aria-pressed={selectedSkill === skill}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card" role="article" aria-labelledby={`${project.id}-title`}>
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
                    <FontAwesomeIcon icon={faCircleCheck} className="feature-check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                  See Live
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View GitHub repository for ${project.title}`}>
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