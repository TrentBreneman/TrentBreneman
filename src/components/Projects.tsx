// src/components/Projects.tsx
import React from 'react';

// Define a type for your project data
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
}

const projectsData: Project[] = [
  {
    id: 'business-homepage',
    title: 'Business Homepage',
    subtitle: 'PERN Stack (PostgreSQL, Express, React, Node.js)',
    date: 'October 2024 - Present',
    description: 'A fully functional business homepage providing users with an interactive and informative experience.',
    techStack: ['PostgreSQL', 'Express.js', 'React', 'Node.js', 'TypeScript', 'CSS'],
    features: [
      'Built a responsive React frontend that showcases the company\'s services, values, and contact information.',
      'Created a robust backend with Node.js and Express, handling API routes and business logic.',
      'Integrated PostgreSQL to manage business data, including client information and service offerings.',
      'Implemented responsive design to ensure optimal user experience across devices.',
    ],
     liveLink: 'https://isolvrisk.com', 
  },
  {
    id: 'rumble-quiz',
    title: 'Rumble | Interactive Quiz Platform',
    subtitle: 'MySQL, TypeScript, Node.js, React',
    date: 'February 2025 - Present',
    description: 'A dynamic, Kahoot-inspired interactive quiz platform enabling real-time engagement and competitive learning.',
    techStack: ['MySQL', 'TypeScript', 'Node.js', 'React', 'Socket.IO', 'Express.js'],
    features: [
      'Engineered a dynamic, Kahoot-inspired interactive quiz platform enabling real-time engagement and competitive learning.',
      'Designed and implemented a robust data model and managed quiz content using MySQL for efficient storage and retrieval.',
      'Developed scalable backend APIs with Node.js and TypeScript, ensuring type safety and maintainability.',
      'Built a responsive and intuitive user interface using React, providing a seamless experience for both quiz hosts and participants.',
      'Implemented real-time features to synchronize game states and display live results during quiz sessions.',
      'Focused on a modular architecture to allow for future feature expansion, such as diverse question types and user analytics.',
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-date">{project.date}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-tech-stack">
              <strong>Tech Stack:</strong> {project.techStack.join(', ')}
            </div>
            <ul className="project-features">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  See Live
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
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