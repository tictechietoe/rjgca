// src/components/ServiceCard.js
import React from 'react';

const Card = ({ icon, name, padding }) => {

  return (
    <div className="flex flex-col hover:cursor-pointer p-2 hover:border-2 hover:border-custom-secondary hover:rounded-xl hover:shadow-2xl">
      <div className="flex">
        <div className="flex items-start justify-center text-custom-secondary p-1 rounded-xl z-10">
          { icon }
        </div>
        <div className="flex items-center text-gray-600 text-base mx-2 basis-7/8">
          { name }
        </div>
      </div>
    </div>
  );
};

export default Card;
