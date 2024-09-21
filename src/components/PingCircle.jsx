import React from 'react';

const PingCircle = ({ size = 'md', color = 'red'}) => {
  const sizeClasses = {
    xs: 'w-1 h-1',
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  return (
    <span className="relative end-1.5 flex h-5 w-5">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${color} opacity-95`}></span>
      <span className={`relative inline-flex rounded-full ${sizeClasses[size]} bg-${color}`}></span>
    </span>
  );
};

export default PingCircle;