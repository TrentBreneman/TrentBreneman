/* App.tsx */
import React, { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BackToTopButton from './components/BackToTop/BackToTopButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import './index.css';

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
        <Navbar currentTheme={ theme } toggleTheme={ toggleTheme } />
        <Header currentTheme={ theme } toggleTheme={ toggleTheme } />
        <Suspense
          fallback={
            (<div aria-live="polite" className="lazy-load-fallback" role="status">
              Loading content...
            </div>)
          }>
          <Routes>
            <Route
              element={
                <main aria-label="Main content area" tabIndex={-1}>
                  <About />
                  <Experience />
                  <Projects />
                  <Skills />
                  <Education />
                  <Contact />
                  <BackToTopButton />
                </main>
              }
              path="/TrentBreneman"
            />
            <Route element={ <NotFoundPage /> } path="*" />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
