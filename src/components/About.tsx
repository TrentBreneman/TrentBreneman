import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={aboutRef}>
      <h2>ABOUT ME</h2>
      <p>
        I am a passionate Front-End Developer with a strong foundation in building responsive, user-friendly, and highly interactive web applications. My expertise lies in crafting engaging user interfaces and seamless user experiences using modern JavaScript frameworks and libraries, particularly React and TypeScript.
      </p>
      <p>
        I thrive in collaborative environments, continuously seeking to learn new technologies and improve my skills to deliver innovative and efficient solutions. I am committed to writing clean, maintainable code and am always eager to tackle new challenges that push the boundaries of web development.
      </p>
      <p>
        Outside of coding, I enjoy exploring new hiking trails, experimenting with photography, and diving into a good book.
      </p>
    </section>
  );
};

export default About;