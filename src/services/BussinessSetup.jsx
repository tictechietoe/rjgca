// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import servicesShowcase from '../assets/images/servicesShowcase.jpg';
import BannerImage from '../components/BannerImage';

const BussinessSetup = () => {
  const servicesData = services({
    iconSize: 40,
  });

  return (
    <div>
      <BannerImage
        image={ servicesShowcase }
        title={ _.upperCase(servicesData[0].name) }
        fromText="Services"
        fromLink="/services"
        toText={ servicesData[0].name }
      />
      <div className="p-20">
        { servicesData[0].content }
      </div>
    </div>
  );
};

export default BussinessSetup;