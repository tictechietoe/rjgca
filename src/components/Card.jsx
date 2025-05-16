// src/components/ServiceCard.js
import React from 'react';

const Card = ({ icon, name, padding }) => {

  return (
    <div className="flex flex-col hover:cursor-pointer p-3 hover:border-2 hover:border-custom-secondary hover:rounded-xl hover:shadow-2xl min-w-[150px] min-h-[80px] shadow-md rounded-lg transition-all duration-300 h-full justify-center">
      <div className="flex items-start">
        <div className="flex items-start justify-center text-custom-secondary p-1 rounded-xl z-10 flex-shrink-0">
          { icon }
        </div>
        <div className="flex items-center text-gray-600 text-base mx-2 overflow-hidden break-words w-full">
          <span className="line-clamp-3 py-1">{ name }</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
