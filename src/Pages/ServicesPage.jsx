// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import servicesShowcase from '../assets/images/servicesShowcase.jpg';
import BannerImage from '../components/BannerImage';

const ServicesPage = () => {
  const location = useLocation();
  const servicesData = services({
    iconSize: 50
  });

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
      <div className="grid grid-cols-3 gap-8 p-10">
        {
          _.map(servicesData, data => {
            return (
              <button className="flex col-span-1 items-center mt-10 p-3 hover:border-2 hover:border-custom-secondary hover:rounded-xl hover:shadow-2xl">
                <div className="flex flex-col">
                  <div className="flex border-dashed pb-3 items-center">
                    <div className="flex items-center justify-center text-custom-secondary border-2 border-custom-secondary p-1 rounded-xl z-10">
                      { data.icon }
                    </div>
                    <div className="text-custom-secondary text-base font-bol font-semibold mx-5 basis-7/8">
                      { _.upperCase(data.name) }
                    </div>
                  </div>
                  <div className="pt-2 text-sm">
                    { data.description }
                  </div>
                </div>
              </button>
            );
          })
        }
      </div>
    </div>
  );
};

export default ServicesPage;