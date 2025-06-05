import React from 'react';
import Header from './components/Header';
import About from './components/About'; 
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About /> 
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
    </div>
  );
};

export default App;