import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FileDown, ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Header.css';

interface HeaderProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Header: React.FC<HeaderProps> = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <header aria-label="Portfolio Hero" className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content"
      >
        <motion.div variants={itemVariants} className="hero-badge">
          <span>Available for new opportunities</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          Building Digital <span className="gradient-text">Experiences</span> that Matter.
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Hi, I'm <span className="highlight">Trent Breneman</span>. A Software Engineer focused on 
          creating high-performance, user-centric applications with modern technologies.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-cta">
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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
