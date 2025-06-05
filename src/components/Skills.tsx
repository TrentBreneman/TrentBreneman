import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2>TECHNICAL SKILLS</h2>
      <div className="skills-category">
        <h3>Languages:</h3><p>JavaScript, TypeScript, Python, SQL</p>
      </div>
      <div className="skills-category">
        <h3>Frameworks/Libraries:</h3><p>React, Node.js, Express.js, Next.js</p>
      </div>
      <div className="skills-category">
        <h3>Databases:</h3><p>PostgreSQL, MySQL, Firebase</p>
      </div>
      <div className="skills-category">
        <h3>Developer Tools:</h3><p>Git, GitHub, Docker, Postman</p>
      </div>
      <div className="skills-category">
        <h3>Other Tools/Technologies:</h3><p>Webpack, Tailwind CSS, REST APIs, CI/CD</p>
      </div>
    </section>
  );
};

export default Skills;