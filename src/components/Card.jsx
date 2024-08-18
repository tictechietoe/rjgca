// src/components/ServiceCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {

  const navigate = useNavigate();

  const handleReadMoreDataClick = () => {
    navigate(`/services#${data.id}`);
  };

  const {
    icon = <></>,
    name = '',
    description = '',
  } = data;

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg overflow-hidden md:max-w-2xl mt-10">
      <div className="md:flex">
        <div className="p-4 flex flex-col items-center border">
          <div className="w-20 h-20 border-2 border-gray-500 rounded-full flex items-center justify-center bg-black">
            <div className="relative right-1 bottom-1 w-20 h-20 border-2 border-gray-500 rounded-full flex items-center justify-center bg-white z-10">
              {icon}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg leading-tight font-bold text-center text-blue-900">
              {name}
            </h2>
            <p className="mt-2 text-gray-600 text-center">
              {description}
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full" onClick={handleReadMoreDataClick}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
