import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Briefcase } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'iSolvRisk Inc.',
      role: 'Software Developer',
      period: 'February 2024 - Present',
      location: 'Remote',
      description: [
        'Lead the development and maintenance of high-traffic user-facing applications using React and TypeScript.',
        'Architected and implemented scalable backend solutions with PostgreSQL and Node.js.',
        'Mentor junior developers and lead cross-functional teams in a fast-paced Agile environment.',
        'Spearheaded the integration of Docker and CI/CD pipelines, reducing release cycles by 40%.',
        'Developed advanced data visualization tools for stakeholder insights.',
        'Implemented robust security protocols including OAuth2 and JWT-based authentication.',
      ],
    },
    {
      company: 'Charbar 7',
      role: 'Assistant Kitchen Manager',
      period: 'October 2018 - October 2021',
      location: 'Charlotte, NC',
      description: [
        'Managed daily kitchen operations, including staff scheduling and inventory management.',
        'Trained and mentored kitchen staff to ensure consistency in food preparation and quality.',
        'Oversaw food safety and sanitation compliance.',
        'Streamlined kitchen workflows to improve efficiency during peak hours.',
        'Collaborated with management to develop new menu items.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Professional Journey</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="experience-item glass"
            >
              <div className="experience-header">
                <div className="exp-role">
                  <Briefcase size={20} className="role-icon" />
                  <h3>{exp.role}</h3>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              
              <div className="exp-company">
                <h4>{exp.company}</h4>
                <span className="exp-location">{exp.location}</span>
              </div>

              <ul className="exp-description">
                {exp.description.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
