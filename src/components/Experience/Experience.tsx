import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'iSolvRisk Inc',
      role: 'Software Developer',
      period: 'Feb. 2024 – Present',
      location: 'Remote',
      description: [
        'Architected and developed a responsive business homepage for an enterprise gamified risk-management platform using React 19, TypeScript, and CSS Modules, engineering 20+ reusable components to improve maintainability and ensure consistent layouts across devices.',
        'Implemented route-level code splitting and dynamic bundle loading with Vite, developing a custom lazyRetry recovery mechanism to handle stale asset references and prevent cache-mismatch errors following production deployments.',
        'Optimized frontend asset delivery using SVGR, Sharp, and WebP compression, reducing image payload sizes by over 60%.',
        'Built interactive event showcases and lead-generation workflows, implementing validated contact forms, reusable stateful filtering hooks, and analytics tracking to support user engagement and inbound business inquiries.',
        'Developed a custom Node.js deployment utility using concurrent SFTP streams, asset diffing, and stale-file cleanup to automate production releases and reduce deployment times to under 30 seconds.',
        'Performed hands-on QA testing and functional verification for ongoing Gauntlet updates, catching regressions and ensuring new features are solid before they go live.',
        'Engineered backend functionality and PostgreSQL database integrations using Node.js to support core application workflows and reliable data access.',
      ],
    },
    {
      company: 'Bonefish Grill',
      role: 'Assistant Culinary Manager',
      period: 'Aug. 2025 – Present',
      location: 'Lakewood, CO',
      description: [
        'Directed daily restaurant operations and cross-functional team execution while maintaining service quality and operational standards during high-volume shifts.',
        'Coordinated shift workflows and allocated resources across a 15+ person team to improve throughput and reduce ticket-to-table delays during peak service.',
        'Standardized operational procedures and quality-control workflows to maintain consistency and compliance with food safety regulations.',
      ],
    },
    {
      company: 'Charbar 7',
      role: 'Assistant Kitchen Manager',
      period: 'Oct. 2018 – Oct. 2022',
      location: 'Charlotte, NC',
      description: [
        'Managed daily kitchen operations, workforce scheduling, and inventory processes to reduce waste and improve resource utilization during high-volume service.',
        'Developed and implemented standardized staff training programs to improve onboarding, procedural consistency, and food quality.',
        'Maintained compliance documentation and quality-control procedures, successfully passing internal audits.',
        'Redesigned kitchen workflows to eliminate production bottlenecks and improve ticket turnaround times during peak demand.',
        'Collaborated with management to develop menu offerings and improve the customer dining experience.',
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

        <div className="experience-timeline-container">
          <div className="timeline-line"></div>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="experience-timeline-item"
              >
                <div className="timeline-node">
                  <div className="node-inner">
                    <Briefcase size={16} />
                  </div>
                </div>
                
                <div className="experience-item glass">
                  <div className="experience-header">
                    <div className="exp-role-info">
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <div className="exp-meta">
                        <span className="exp-company-name">{exp.company}</span>
                        <span className="exp-separator">•</span>
                        <span className="exp-location">
                          <MapPin size={13} style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'text-bottom' }} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="exp-period">
                      <Calendar size={13} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'text-bottom' }} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="exp-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
