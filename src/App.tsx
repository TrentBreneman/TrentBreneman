import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import NotFoundPage from './components/NotFoundPage';

import './index.css';
import './App.css';

import '@fortawesome/fontawesome-svg-core/styles.css';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="App">
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Routes>
          <Route path="/" element={
            <main>
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
        <Footer />
      </div>
    </Router>
  );
};

export default App;