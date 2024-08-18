import React from 'react';

const Loader = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 p-5 border-4 border-t-transparent rounded-full animate-spin mr-5"></div>
      <div className="fb">{text}</div>
    </div>
  );
};

export default Loader;