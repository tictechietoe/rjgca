// src/components/OurServices.js
import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import valuesData from '../data/valuesData';
import { TiTick } from "react-icons/ti";
import vision from '../assets/images/vision.jpg';
import mission from '../assets/images/mission.jpg';
import values from '../assets/images/values.jpg';

const sectionStyles = [
  // Vision - subtle light background with custom-primary influence
  'bg-gradient-to-br from-gray-100 via-gray-50 to-white border-t-4 border-custom-primary',
  // Mission - subtle light background with custom-secondary influence
  'bg-gradient-to-br from-gray-100 via-gray-50 to-white border-t-4 border-custom-secondary',
  // Values - subtle light background with custom-mark-color influence
  'bg-gradient-to-br from-gray-100 via-gray-50 to-white border-t-4 border-custom-mark-color',
];

const sectionIcons = [
  '👁️', // Vision
  '🚀', // Mission
  '💎', // Values
];

const Our = () => {
  const navigate = useNavigate();

  const onMoreValuesClick = () => {
    navigate(`/values`);
  };

  // For values, align tick and text in a row
  const liTagLine = (content = "", quality = "", icon = <></>, key) => {
    return (
      <div key={key || quality} className="flex items-center mb-2">
        <span className="flex-shrink-0 text-custom-primary bg-custom-secondary rounded mr-3"><TiTick size={20} /></span>
        <span className="text-custom-primary text-base">{content} <span className="text-custom-secondary">{quality}</span></span>
      </div>
    );
  };

  const ourData = [
    {
      title: "VISION",
      icon: sectionIcons[0],
      style: sectionStyles[0],
      image: vision,
      content: (
        <div className="flex flex-col items-center text-center">
          <div className="text-2xl font-extrabold text-custom-primary flex items-center gap-2 font-sans tracking-tight justify-center">
            <span className="text-3xl">{sectionIcons[0]}</span> OUR VISION
          </div>
          <div className="my-3 p-5 font-semibold text-lg text-custom-secondary font-sans">
            <p>To be among the top-notch consulting firms and the preferred choice for business advisory services.</p>
            <p className="text-custom-primary">Happy Clients, Happy Us</p>
          </div>
        </div>
      )
    },
    {
      title: "MISSION",
      icon: sectionIcons[1],
      style: sectionStyles[1],
      image: mission,
      content: (
        <div className="flex flex-col items-center text-center">
          <div className="text-2xl font-extrabold text-custom-primary flex items-center gap-2 font-sans tracking-tight justify-center">
            <span className="text-3xl">{sectionIcons[1]}</span> OUR MISSION
          </div>
          <div className="my-3 p-5 font-semibold text-lg text-custom-secondary font-sans">
            <ul className="list-disc ml-5 text-left inline-block text-base">
              <li>Deliver customized solutions with highest efficiency and technology.</li>
              <li>Continuously improve through learning and innovation.</li>
              <li>Enhance team skills and knowledge.</li>
              <li>Provide innovative and actionable solutions.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "VALUES",
      icon: sectionIcons[2],
      style: sectionStyles[2],
      image: values,
      content: (
        <div className="flex flex-col items-center text-center">
          <div className="text-2xl font-extrabold text-custom-primary flex items-center gap-2 font-sans tracking-tight justify-center">
            <span className="text-3xl">{sectionIcons[2]}</span> OUR VALUES
          </div>
          <div className="my-3 p-5 font-semibold text-lg text-custom-secondary font-sans w-full max-w-3xl mx-auto text-left flex flex-col items-start">
            {
              _.map(valuesData, (value, idx) =>
                liTagLine(value.content, value.quality, value.icon, idx)
              )
            }
          </div>
          <div className="pt-2 flex justify-center w-full">
            <button className="bg-custom-primary text-white font-bold py-2 px-4 rounded-md text-base" onClick={onMoreValuesClick}>
              More Details
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 font-sans">
      {/* Use a wrapper with proper grid layout for small and large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        
        {/* For medium screens, create a special 2+1 layout with equal width blocks */}
        <div className="hidden md:grid lg:hidden grid-cols-2 col-span-full gap-6 sm:gap-8 md:gap-10">
          <div className={`
            relative ${sectionStyles[0]} shadow-lg rounded-lg 
            px-4 sm:px-6 md:px-8 py-6 sm:py-8 
            transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 
            flex flex-col items-center
          `}>
            <div className="flex justify-center mb-4 sm:mb-6 w-full">
              <img 
                src={vision} 
                alt="vision" 
                className="w-full max-w-[280px] h-44 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 mx-auto" 
              />
            </div>
            {ourData[0].content}
          </div>
          
          <div className={`
            relative ${sectionStyles[1]} shadow-lg rounded-lg 
            px-4 sm:px-6 md:px-8 py-6 sm:py-8 
            transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 
            flex flex-col items-center
          `}>
            <div className="flex justify-center mb-4 sm:mb-6 w-full">
              <img 
                src={mission} 
                alt="mission" 
                className="w-full max-w-[280px] h-44 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 mx-auto" 
              />
            </div>
            {ourData[1].content}
          </div>
        </div>
        
        {/* For medium screens, center the third block with exact same width */}
        <div className="hidden md:flex lg:hidden justify-center col-span-full">
          <div className={`
            relative ${sectionStyles[2]} shadow-lg rounded-lg 
            px-4 sm:px-6 md:px-8 py-6 sm:py-8 
            transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 
            flex flex-col items-center
            w-[calc(50%-1rem)]
          `}>
            <div className="flex justify-center mb-4 sm:mb-6 w-full">
              <img 
                src={values} 
                alt="values" 
                className="w-full max-w-[280px] h-44 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 mx-auto" 
              />
            </div>
            {ourData[2].content}
          </div>
        </div>
        
        {/* For mobile and large screens, use the original approach */}
        {ourData.map((section, i) => (
          <div
            key={section.title}
            className={`
              relative ${section.style} shadow-lg rounded-lg 
              px-4 sm:px-6 md:px-8 py-6 sm:py-8 
              transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 
              flex flex-col items-center
              md:hidden lg:flex
            `}
          >
            <div className="flex justify-center mb-4 sm:mb-6 w-full">
              <img 
                src={section.image} 
                alt={section.title.toLowerCase()} 
                className="w-full max-w-[280px] h-44 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105 mx-auto" 
              />
            </div>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Our;
