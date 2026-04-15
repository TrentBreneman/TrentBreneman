import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info"
          >
            <h3 className="contact-subtitle">Let's build something great.</h3>
            <p className="contact-text">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-methods">
              <a href="mailto:trentbreneman@icloud.com" className="contact-method glass">
                <div className="icon-box">
                  <Mail size={24} />
                </div>
                <div className="method-details">
                  <span>Email</span>
                  <strong>trentbreneman@icloud.com</strong>
                </div>
              </a>

              <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer" className="contact-method glass">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </div>
                <div className="method-details">
                  <span>LinkedIn</span>
                  <strong>Trent Breneman</strong>
                </div>
              </a>

              <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer" className="contact-method glass">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </div>
                <div className="method-details">
                  <span>GitHub</span>
                  <strong>TrentBreneman</strong>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-form-container glass"
          >
            <div className="contact-cta">
               <h3>Quick Contact</h3>
               <p>The best way to reach me is via email or LinkedIn.</p>
               <a href="mailto:tbreneman@icloud.com" className="btn btn-primary btn-lg">
                  <Send size={18} style={{ marginRight: '10px' }} /> Send Message
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
