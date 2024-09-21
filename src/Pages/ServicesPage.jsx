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
        image={ servicesShowcase }
        title="SERVICES"
        fromText="Home"
        fromLink="/"
        toText="Services"
      />
      <div className="grid grid-cols-3 gap-8 p-10">
        {
          _.map(servicesData, data => {
            return (
              <div
                className="flex col-span-1 items-center mt-10 p-3 hover:cursor-pointer hover:border-2 hover:border-custom-secondary hover:rounded-xl hover:shadow-2xl"
                onClick={ () => navigate(`/services/${data.id}`) }
              >
                <div className="flex flex-col">
                  <div className="flex border-dashed pb-3 items-center">
                    <div className="flex items-center justify-center text-custom-secondary p-1 rounded-xl z-10">
                      { data.icon }
                    </div>
                    <div className="text-custom-secondary text-base font-bol font-semibold mx-5 basis-7/8">
                      { _.upperCase(data.name) }
                    </div>
                  </div>
                  <div className="pt-2 text-sm text-pretty">
                    { data.description }
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