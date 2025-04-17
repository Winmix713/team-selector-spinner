
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-liga-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-liga-accent">404</h1>
        <p className="text-xl text-liga-text mb-6">Oops! Page not found</p>
        <Link 
          to="/" 
          className="text-liga-blue hover:text-liga-accent underline transition-colors"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
