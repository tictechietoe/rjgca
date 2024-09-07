// src/components/OurServices.js
import React from 'react';
import servicesData from '../data/servicesData';
import servicesProviding from '../assets/images/servicesProviding.jpg';
import servicesListing from '../assets/images/servicesListing.jpg';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';


const OurServices = () => {

  const navigate = useNavigate();

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
          <div className="w-full flex flex-col justify-around pr-10">
            <img src={ servicesListing } alt="service listing" width="500px" className="overflow-hidden my-10" />
            <img src={ servicesProviding } alt="service providing" width="500px" className="overflow-hidden" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {
              _.map(servicesData, data => {
                return (
                  <button className="flex col-span-1 items-center mt-10 p-3 border" onClick={ () => navigate(`/services#${data.id}`) }>
                    <div className="flex flex-col justify-between">
                      <div className="flex border-dashed border-b-2 border-b-custom-secondary pb-3 items-center">
                        <div className="w-16 h-16 border-2 border-black rounded-full flex items-center justify-center bg-white basis-1/8">
                          <div className="relative right-1 bottom-1 w-16 h-16 border-2 border-black rounded-full flex items-center justify-center bg-custom-secondary z-10">
                            {data.icon}
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
                  </button>
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
