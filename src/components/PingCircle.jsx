import React from 'react';

const PingCircle = ({ size = 'md', color = 'red', position = 'center' }) => {
  const sizeClasses = {
    xs: 'w-1 h-1',
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const positionClasses = {
    left: 'start-1.5',
    center: '',
    right: 'end-1.5'
  };

  return (
    <span className={`relative ${positionClasses[position]} flex h-5 w-5 z-30`}>
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${color} opacity-100`}></span>
      <span className={`relative inline-flex rounded-full ${sizeClasses[size]} bg-${color}`}></span>
    </span>
  );
};

export default PingCircle;