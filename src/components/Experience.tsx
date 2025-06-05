import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="experience-section"> 
      <h2>EXPERIENCE</h2>
      <div className="experience-entry">
        <h3>Software Developer - iSolvRisk Inc.</h3>
        <p className="experience-dates">February 2024 - Present | Remote</p>
        <ul className="experience-description">
          <li>Developed and maintained user-facing applications using React and TypeScript, ensuring high-quality, interactive user experiences. [cite: 6]</li>
          <li>Designed and implemented robust backends with PostgreSQL to manage complex data workflows efficiently. [cite: 7]</li>
          <li>Collaborated with a cross-functional team of developers, designers, and stakeholders to deliver scalable software solutions. [cite: 8]</li>
          <li>Analyzed and visualized data from various sources to support decision-making and enhance application functionality. [cite: 9]</li>
          <li>Streamlined team workflows by integrating Agile methodologies and using Git for version control and collaboration. [cite: 10]</li>
          <li>Built full-stack features using Flask, React, PostgreSQL, and Docker to improve team productivity and showcase GitHub collaboration trends. [cite: 11]</li>
          <li>Implemented secure user authentication and authorization using industry best practices. [cite: 12]</li>
        </ul>
      </div>

      <div className="experience-entry">
        <h3>Assistant Kitchen Manager - Charbar 7</h3>
        <p className="experience-dates">October 2018 - October 2021 | Charlotte, NC</p> 
        <ul className="experience-description"> {/* Apply description class to ul */}
          <li>Managed daily kitchen operations, including staff scheduling and inventory management. [cite: 13]</li>
          <li>Trained and mentored kitchen staff to ensure consistency in food preparation and quality. [cite: 14]</li>
          <li>Oversaw food safety and sanitation compliance in adherence to local health regulations. [cite: 15]</li>
          <li>Streamlined kitchen workflows to improve efficiency during peak hours.</li>
          <li>Collaborated with management to develop new menu items and specials, boosting customer satisfaction. [cite: 16]</li>
          <li>Maintained strong communication with front-of-house staff to ensure seamless service.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;