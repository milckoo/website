import React, { useEffect, useState } from 'react';
import './Styles/GlobalLoader.css';

const GlobalLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This will be controlled by the Hero component
    window.setGlobalLoaded = () => setIsLoading(false);
    
    // Fallback timeout in case something fails
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(fallbackTimeout);
  }, []);

  if (isLoading) {
    return (
      <div className="global-loader">
        <div className="spinner"></div>
        <div className="loading-text">Loading MILCKO...</div>
      </div>
    );
  }

  return children;
};

export default GlobalLoader;