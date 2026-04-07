import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  return (
    <div aria-labelledby="not-found-title" className="not-found-container" role="main">
      <h1 className="not-found-title" id="not-found-title">
        404
      </h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <Link aria-label="Go to Homepage" className="not-found-home-link" to="/">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
