// src/components/OurServices.js
import React from 'react';
import services from '../data/servicesData';
import servicesListing from '../assets/images/servicesListing.jpg';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';


const OurServices = () => {

  const navigate = useNavigate();
  const servicesData = services({
    iconSize: 24
  });

  return (
    <div className="relative bg-custom-primary py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header section - centered on all screens */}
        <div className="flex flex-row flex-wrap justify-center my-4 text-2xl md:text-3xl whitespace-nowrap">
          <h2 className="text-white font-semibold mr-2">
            SERVICES
          </h2>
          <h2 className="text-custom-secondary font-semibold">
            PROVIDED
          </h2>
        </div>
        
        {/* Subtitle section - centered on all screens */}
        <div className="text-base md:text-xl mx-auto text-center border-l-0 sm:border-l-4 border-custom-mark-color w-full sm:w-auto mb-8 px-4 sm:px-6">
          <div className="flex text-white">
            Help us to help you.
          </div>
          <div className="flex text-custom-secondary">
            At your service !
          </div>
        </div>
        
        {/* Main content section */}
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
          {/* Image section - hidden on mobile, visible on larger screens */}
          <div className="w-full lg:w-1/3 hidden sm:flex justify-center items-center mb-8 lg:mb-0">
            <img src={servicesListing} alt="service listing" className="w-full max-w-xs h-auto object-contain" />
          </div>

          {/* Services grid - using TeamPage-like implementation */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Image section - hidden on mobile, visible on larger screens */}
              

              {
                _.map(servicesData, data => (
                  <div 
                    key={data.id}
                    className="bg-custom-primary rounded-lg shadow-md border border-gray-800 overflow-hidden hover:bg-gray-900 transition-colors duration-300 h-full"
                    onClick={() => navigate(`/services/${data.id}`)}
                  >
                    <div className="p-4 h-full flex flex-col cursor-pointer">
                      <div className="flex flex-col items-center border-dashed border-b-2 border-b-custom-secondary pb-4 mb-4">
                        {/* Icon centered */}
                        <div className="w-14 h-14 border-2 border-black rounded-full flex justify-center bg-white mb-3">
                          <div className="relative right-1 bottom-1 w-14 h-14 border-2 border-black rounded-full flex items-center justify-center bg-custom-secondary z-10">
                            {data.icon}
                          </div>
                        </div>
                        {/* Service title */}
                        <div className="text-custom-secondary text-base font-semibold text-center w-full">
                          {data.name}
                        </div>
                      </div>
                      {/* Service description */}
                      <div className="text-white text-sm text-center flex-grow overflow-hidden text-ellipsis line-clamp-3">
                        {data.description}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
