import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education: React.FC = () => {
  const education = [
    {
      title: 'Full-Stack Curriculum Completion (The Odin Project)',
      period: 'Completed 2024',
      description: [
        'Mastered a comprehensive full-stack curriculum, establishing a robust foundation in HTML, CSS, JavaScript, and React.',
        'Developed and deployed numerous production-ready applications, demonstrating proficiency in both frontend and backend architectures.',
      ],
    },
    {
      title: 'Advanced Technical Specialization',
      period: '2024 - Present',
      description: [
        'Deep-diving into system design, cloud architecture (AWS/GCP), and advanced DevOps practices.',
        'Continuous exploration of emerging technologies including Next.js 14+, GraphQL, and high-performance database indexing.',
        'Cultivated a mindset of lifelong learning and open-source contribution.',
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
          <h2 className="section-title">Education & Specialization</h2>
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
              <div className="edu-icon-box">
                {index === 0 ? <GraduationCap size={32} /> : <Award size={32} />}
              </div>
              
              <div className="edu-content">
                <h3 className="edu-title">{edu.title}</h3>
                <span className="edu-period">{edu.period}</span>
                
                <ul className="edu-description">
                  {edu.description.map((item, i) => (
                    <li key={i}>{item}</li>
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
