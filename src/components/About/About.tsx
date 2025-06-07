import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Fires when 10% of the element is visible
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
        Hey there! I'm Trent Breneman, and I'm a Front-End Developer who's truly passionate about building awesome, intuitive web experiences. For me, development is all about taking complex ideas and turning them into user-friendly interfaces that just work. I love diving into modern JavaScript frameworks and libraries to create web applications that aren't just fast and responsive, but also a joy to use.
      </p>
      <p>
        My approach to work really revolves around constantly learning and tackling challenges as a team. I thrive in places where new ideas are welcomed, and you'll often find me exploring the latest tech and best practices to keep my skills sharp. I'm a big believer in clean, modular code – the kind that makes projects easy to grow and maintain down the line.
      </p>
      <p>
        When I'm not coding, I'm usually out exploring nature, snapping photos, or getting lost in a good book. These hobbies aren't just a great way to unwind; they actually spark a lot of the creativity and fresh perspectives I bring back to my development work.
      </p>
    </section>
  );
};

export default About;