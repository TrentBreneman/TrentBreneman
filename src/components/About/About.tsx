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
    <section
      ref={aboutRef}
      aria-labelledby="about-heading"
      className={`about-section ${isVisible ? 'fade-in-slide-up' : ''}`}
      id="about"
    >
      <h2 id="about-heading">ABOUT ME</h2>
      <p>
        Hey there! I&apos;m Trent Breneman, a Software Engineer dedicated to crafting high-impact,
        intuitive web experiences. With several years of experience in the industry, I&apos;ve
        transitioned from building functional interfaces to architecting scalable,
        performance-driven applications that solve complex problems. My passion lies in bridging the
        gap between sophisticated backend logic and elegant, user-centric frontends.
      </p>
      <p>
        My professional journey is defined by a commitment to continuous growth and technical
        excellence. I thrive in collaborative environments where I can leverage my expertise in
        modern JavaScript frameworks, TypeScript, and cloud technologies to drive project success.
        I&apos;m a strong advocate for clean, maintainable code and modular architecture, ensuring that
        the solutions I build today are ready for the challenges of tomorrow.
      </p>
      <p>
        Beyond the terminal, I find inspiration in the outdoors—whether I&apos;m hiking through nature,
        capturing moments through photography, or diving into a thought-provoking book. These
        pursuits keep me grounded and provide the fresh perspectives that fuel my creativity and
        problem-solving at work.
      </p>
    </section>
  );
};

export default About;
