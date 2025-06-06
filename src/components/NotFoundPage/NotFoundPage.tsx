import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-container" role="main" aria-labelledby="not-found-title">
      <h1 id="not-found-title" className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="not-found-home-link" aria-label="Go to Homepage">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;