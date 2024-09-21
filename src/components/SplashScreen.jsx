import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';

const SplashScreen = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowSplash(true);
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative w-full min-h-screen">
      <div className="w-full h-full">
        { children }
      </div>
      {
        showSplash &&
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 transition-opacity duration-500 ease-in-out"
          style={{ opacity: showSplash ? 1 : 0 }}
        >
          <div className="animate-bounce">
            <Logo />
          </div>
        </div>
      }
    </div>
  );
};

export default SplashScreen;