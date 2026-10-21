import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import './Education.css';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Arapahoe Community College',
      degree: 'Associate of Science in Computer Science',
      period: 'Sep 2026 – Present',
      location: 'Lakewood, CO',
      description: [
        'Pursuing an Associate of Science in Computer Science with coursework focused on software development foundations, data structures, and algorithms.',
        'Building a rigorous theoretical and mathematical foundation to complement hands-on engineering experience in modern full-stack web applications.',
      ],
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="education-card glass"
            >
              <div className="edu-card-top">
                <div className="edu-icon-box">
                  <GraduationCap size={32} />
                </div>
                <div className="edu-header-info">
                  <h3 className="edu-title">{edu.degree}</h3>
                  <div className="edu-meta">
                    <span className="edu-institution">{edu.institution}</span>
                    <span className="edu-separator">•</span>
                    <span className="edu-location">
                      <MapPin size={13} style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'text-bottom' }} />
                      {edu.location}
                    </span>
                  </div>
                </div>
                <span className="edu-period">
                  <Calendar size={13} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'text-bottom' }} />
                  {edu.period}
                </span>
              </div>
              
              <div className="edu-content">
                <ul className="edu-description">
                  {edu.description.map((item, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="edu-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
