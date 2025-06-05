// src/components/Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="experience-section"> {/* Add section class */}
      <h2>EXPERIENCE</h2>
      <div className="experience-entry"> {/* Apply class to this div */}
        <h3>Software Developer - <a href="https://isolvrisk.com" target="_blank" rel="noopener noreferrer">iSolvRisk Inc.</a></h3>
        <p className="experience-dates">February 2024 - Present | Remote</p> {/* Add dates class */}
        <ul className="experience-description"> {/* Apply description class to ul */}
          <li>Developed and maintained user-facing applications using React and TypeScript, ensuring high-quality, interactive user experiences.</li>
          <li>Designed and implemented robust backends with PostgreSQL to manage complex data workflows efficiently.</li>
          {/* ... other list items */}
        </ul>
      </div>

      <div className="experience-entry"> {/* Apply class to this div */}
        <h3>Assistant Kitchen Manager - Charbar 7</h3>
        <p className="experience-dates">October 2018 - October 2021 | Charlotte, NC</p> {/* Add dates class */}
        <ul className="experience-description"> {/* Apply description class to ul */}
          <li>Managed daily kitchen operations, including staff scheduling and inventory management.</li>
          {/* ... other list items */}
        </ul>
      </div>
    </section>
  );
};

export default Experience;