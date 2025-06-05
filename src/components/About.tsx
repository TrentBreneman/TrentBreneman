import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>ABOUT ME</h2>
      <p>
        Hi, I'm Trent Breneman! I'm a passionate Full Stack Developer with a knack for building robust and scalable web applications. My journey into tech started with The Odin Project and then as an intern at iSolvRisk.
      </p>
      <p>
        I specialize in React, Node.js, TypeScript, and PostgreSQL, and love tackling complex problems to deliver clean, efficient, and user-friendly solutions. I'm always eager to learn new technologies and improve my skills.
      </p>
      <p>
        Outside of coding, you can find me enjoying music, traveling, and more. I believe a balanced life fuels creativity and problem-solving.
      </p>
      <p>
        Feel free to explore my work in the projects section, or get in touch if you'd like to connect!
      </p>
    </section>
  );
};

export default About;