// src/components/OurServices.js
import React from 'react';
import services from '../data/servicesData';
import servicesListing from '../assets/images/servicesListing.jpg';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';


const OurServices = () => {

  const navigate = useNavigate();
  const servicesData = services({
    iconSize: 30
  });

  return (
    <div className="relative bg-custom-primary">
      <div className="flex flex-col items-start p-12">
        <div className="flex my-5 text-3xl">
          <h2 className="text-white font-semibold mr-5">
            SERVICES
          </h2>
          <h2 className="text-custom-secondary font-semibold">
            PROVIDED
          </h2>
        </div>
        <div className="text-xl px-10 border-l-4 border-custom-mark-color">
          <div className="text-white">
            Help us to help you.
          </div>
          <div className="text-custom-secondary">
            At your service !
          </div>
        </div>
        <div className="flex">
          <div className="w-full flex flex-col items-center justify-around m-10 basis-1/3">
            <img src={ servicesListing } alt="service listing" className="overflow-hidden" />
          </div>
          <div className="grid grid-cols-3 gap-8 basis-2/3">
            {
              _.map(servicesData, data => {
                return (
                  <div className="flex col-span-1 p-3 hover:cursor-pointer" onClick={ () => navigate(`/services/${data.id}`) }>
                    <div className="flex flex-col">
                      <div className="flex border-dashed border-b-2 border-b-custom-secondary items-center pb-3">
                        <div className="w-16 h-16 border-2 border-black rounded-full flex justify-center bg-white basis-1/8">
                          <div className="relative right-1 bottom-1 w-16 h-16 border-2 border-black rounded-full flex items-center justify-center bg-custom-secondary z-10">
                            { data.icon }
                          </div>
                        </div>
                        <div className="text-custom-secondary text-sm font-semibold mx-5 basis-7/8">
                          { data.name }
                        </div>
                      </div>
                      <div className="pt-2 text-white text-sm">
                        { data.description }
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
