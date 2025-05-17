// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import servicesShowcase from '../assets/images/servicesShowcase.jpg';
import BannerImage from '../components/BannerImage';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();
  const servicesData = services({
    iconSize: 50
  });

  return (
    <div>
      <BannerImage
        image={servicesShowcase}
        title="SERVICES"
        fromText="Home"
        fromLink="/"
        toText="Services"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 p-2 sm:p-4 lg:p-6">
        {
          _.map(servicesData, data => {
            return (
              <div
                className="flex col-span-1 items-center mt-2 sm:mt-4 p-3 sm:p-4 hover:cursor-pointer hover:border-2 hover:border-custom-secondary hover:rounded-xl hover:shadow-2xl shadow-md rounded-lg transition-all duration-300 h-full bg-white"
                onClick={() => navigate(`/services/${data.id}`)}
              >
                <div className="flex flex-col w-full">
                  <div className="flex border-dashed pb-2 sm:pb-4 items-center">
                    <div className="flex items-center justify-center text-custom-secondary rounded-xl z-10 flex-shrink-0">
                      {data.icon}
                    </div>
                    <div className="text-custom-secondary text-sm sm:text-base font-semibold ml-2 sm:ml-4 overflow-hidden break-words">
                      {_.upperCase(data.name)}
                    </div>
                  </div>
                  <div className="mb-5 sm:text-sm text-pretty">
                    {data.description}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ServicesPage;
