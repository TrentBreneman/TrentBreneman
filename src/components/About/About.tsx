import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-image-container"
          >
             <div className="about-image glass">
                <img src={`${import.meta.env.BASE_URL}Trent.png`} alt="Trent Breneman" className="profile-img" />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-content"
          >
            <p>
              Hey there! I'm <span className="text-gradient" style={{ fontWeight: 800 }}>Trent Breneman</span>, a Software Engineer dedicated to crafting high-impact,
              intuitive web experiences. With several years of experience in the industry, I've
              transitioned from building functional interfaces to architecting scalable,
              performance-driven applications.
            </p>
            <p>
              My professional journey is defined by a commitment to continuous growth and technical
              excellence. I thrive in collaborative environments where I can leverage my expertise in
              modern JavaScript frameworks, TypeScript, and cloud technologies.
            </p>
            <p>
              I'm a strong advocate for clean, maintainable code and modular architecture, ensuring that
              the solutions I build today are ready for the challenges of tomorrow.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
