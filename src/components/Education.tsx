import React from 'react';

const Education: React.FC = () => {
  return (
    <section className="education-section"> {/* Add section class */}
      <h2>EDUCATION</h2>      <div className="education-entry"> {/* Apply class to this div */}
        <h3>The Odin Project</h3>
        <p className="education-certificate">Full Stack Web Development Certificate</p>
        <p className="education-dates">November 2022 - May 2023</p>
        <p className="education-description">Mastered technologies such as React, Node.js, JavaScript, SQL, and PostgreSQL through hands-on projects.</p>
      </div>
    </section>
  );
};

export default Education;