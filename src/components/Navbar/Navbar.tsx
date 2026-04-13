import React, { useState, useEffect } from 'react';
import { Sun, Moon, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

interface NavbarProps {
  currentTheme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTheme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar-container ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-content glass">
        <div className="navbar-logo">
          <span className="logo-text">TB</span>
        </div>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <div className="navbar-socials">
             <a href="https://github.com/TrentBreneman" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
             <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
