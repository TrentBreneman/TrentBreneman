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

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? 'fade-in-slide-up' : ''}`} ref={aboutRef} aria-labelledby="about-heading">
      <h2 id="about-heading">ABOUT ME</h2>
      <p>
        Greetings! I'm Trent Breneman, a dedicated Front-End Developer with a fervent passion for crafting immersive and intuitive web experiences. My journey in development is fueled by a commitment to transforming complex ideas into elegant, user-friendly interfaces. I specialize in leveraging modern JavaScript frameworks and libraries to build dynamic, responsive, and high-performance web applications that not only look great but also provide exceptional usability.
      </p>
      <p>
        My professional philosophy centers on continuous learning and collaborative problem-solving. I thrive in environments where innovation is encouraged, and I am constantly exploring new technologies and best practices to refine my craft. I believe in writing clean, modular, and maintainable code, ensuring scalability and ease of future enhancements.
      </p>
      <p>
        Beyond the screen, I find joy in exploring nature's trails, capturing moments through photography, and delving into the depths of a good book. These pursuits not only offer a refreshing balance to my coding endeavors but also inspire creativity and a fresh perspective that I bring back to my development work.
      </p>
    </section>
  );
};

export default About;