/* App.tsx */
import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTopButton from './components/BackToTop/BackToTopButton';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import './index.css';
import './App.css';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const About = lazy(() => import('./components/About/About'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Education = lazy(() => import('./components/Education/Education'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isTabbing, setIsTabbing] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing');
      setIsTabbing(true);
    }
  }, []);

  const handleMouseDownOnce = useCallback(() => {
    document.body.classList.remove('user-is-tabbing');
    setIsTabbing(false);
    window.removeEventListener('mousedown', handleMouseDownOnce);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDownOnce);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDownOnce);
    };
  }, [handleKeyDown, handleMouseDownOnce]);

  return (
    <Router>
      <div className="App">
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Suspense fallback={<div className="lazy-load-fallback" role="status" aria-live="polite">Loading content...</div>}>
          <Routes>
            <Route path="/TrentBreneman" element={
              <main tabIndex={-1} aria-label="Main content area">
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Contact />
                <BackToTopButton />
              </main>
            } />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;