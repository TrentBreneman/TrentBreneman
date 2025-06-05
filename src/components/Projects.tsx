// src/components/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="projects-section"> {/* Add projects-section class */}
      <h2>PROJECTS</h2>

      <div className="project-card"> {/* Wrap each project in a card */}
        <h3>Business Homepage | PERN Stack (PostgreSQL, Express, React, Node.js)</h3>
        <p className="project-duration">October 2024 - Present</p> {/* Add duration class */}
        <ul className="project-description"> {/* Apply description class to ul for consistent styling */}
          <li>Developed a fully functional business homepage using the PERN stack to provide users with an interactive and informative experience.</li>
          <li>Built a responsive React frontend that showcases the company's services, values, and contact information.</li>
          <li>Created a robust backend with Node.js and Express, handling API routes and business logic.</li>
          <li>Integrated PostgreSQL to manage business data, including client information and service offerings.</li>
          <li>Implemented responsive design to ensure optimal user experience across devices.</li>
        </ul>
        <div className="project-links"> {/* Group links */}
          {/* Add relevant links here. Example: */}
          <a href="#" target="_blank" rel="noopener noreferrer">View Live</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>

      {/* Remove the <br /> between projects, the margin on project-card will handle spacing */}

      <div className="project-card"> {/* Wrap each project in a card */}
        <h3>Rumble | Interactive Quiz Platform (MySQL, TypeScript, Node.js, React)</h3>
        <p className="project-duration">February 2025 - May 2025</p> {/* Add duration class */}
        <ul className="project-description"> {/* Apply description class to ul for consistent styling */}
          <li>Engineered a dynamic, Kahoot-inspired interactive quiz platform enabling real-time engagement and competitive learning.</li>
          <li>Designed and implemented a robust data model and managed quiz content using **MySQL** for efficient storage and retrieval.</li>
          <li>Developed scalable backend APIs with **Node.js** and **TypeScript**, ensuring type safety and maintainability.</li>
          <li>Built a responsive and intuitive user interface using **React**, providing a seamless experience for both quiz hosts and participants.</li>
          <li>Implemented real-time features to synchronize game states and display live results during quiz sessions.</li>
          <li>Focused on a modular architecture to allow for future feature expansion, such as diverse question types and user analytics.</li>
        </ul>
        <div className="project-links"> {/* Group links */}
          {/* Add relevant links here. Example: */}
          <a href="#" target="_blank" rel="noopener noreferrer">View Live</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;