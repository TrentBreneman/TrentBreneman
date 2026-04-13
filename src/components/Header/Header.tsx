import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header aria-label="Portfolio Hero" className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-badge"
        >
          <span>Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hero-title"
        >
          Building Digital <span className="gradient-text">Experiences</span> that Matter.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-subtitle"
        >
          Hi, I'm <span className="highlight">Trent Breneman</span>. A Software Engineer focused on 
          creating high-performance, user-centric applications with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero-cta"
        >
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </a>
          <a
            href={`${import.meta.env.BASE_URL}TrentBreneman.pdf`}
            download="TrentBreneman.pdf"
            className="btn btn-outline"
          >
            <FileDown size={18} style={{ marginRight: '8px' }} /> Resume
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="scroll-indicator"
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
