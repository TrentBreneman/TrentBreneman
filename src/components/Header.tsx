import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-section"> {/* Add this class here */}
      <h1 className="header-title">Trent Breneman</h1> {/* Add header-title class */}
      <p className="header-contact"> {/* Add header-contact class */}
        704-443-1864 | tbreneman@icloud.com | <a href="https://linkedin.com/in/TrentBreneman" target="_blank" rel="noopener noreferrer">linkedin.com/in/TrentBreneman</a> | <a href="https://github.com/TrentBreneman" target="_blank" rel="noopener noreferrer">github.com/TrentBreneman</a>
      </p>
      <p className="header-tagline"> {/* Add header-tagline class */}
        Versatile full-stack web developer with hands-on experience building and deploying robust applications using technologies such as React, Node.js, Express, SQL, and JavaScript.
        Skilled in designing intuitive user interfaces, developing efficient backends, and integrating databases for real-world applications.
        Proven ability to work on team-based projects and independently deliver results.
        Passionate about learning new technologies and solving challenging problems in web development.
      </p>
    </header>
  );
};

export default Header;