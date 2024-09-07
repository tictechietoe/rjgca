// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import servicesData from '../data/servicesData';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import servicesShowcase from '../assets/images/servicesShowcase.jpg';
import BannerImage from '../components/BannerImage';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));

      if (element) {
        const navbarElement = document.querySelector('.navbar');

        // Adjust this value based on your header height
        const headerOffset = navbarElement ? navbarElement.getBoundingClientRect().height : 80;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <BannerImage
        image={ servicesShowcase }
        title="SERVICES"
        fromText="Home"
        fromLink="/"
        toText="Services"
      />
      <div className="mx-5 md:mx-40 lg:mx-60">
        <h2 className="flex py-2 text-xl font-medium border-b sm:border-dashed justify-center mt-5">
          SERVICES PROVIDED
        </h2>
        <div className="my-5">
          {
            _.map(servicesData, service => {
              const {
                icon = <></>,
                name = "",
                id = "",
                content= <></>
              } = service;

              return (
                <div key={id} id={id} className="my-5">
                  <div className="flex justify-start p-2 items-center">
                    <div className="w-14 h-14 border-2 border-gray-500 rounded-lg flex items-center justify-center bg-black">
                      <div className="relative right-0.5 bottom-0.5 w-14 h-14 border-2 border-gray-500 rounded-lg flex items-center justify-center bg-white z-10">
                        {icon}
                      </div>
                    </div>
                    <h2 className="text-lg leading-tight font-medium text-center mx-5 pb-5 border-b">
                      {_.upperCase(name)}
                    </h2>
                  </div>
                  <div className="mx-10">
                    {content}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;