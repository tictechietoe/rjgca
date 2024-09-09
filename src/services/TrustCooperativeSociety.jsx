// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import servicesShowcase from '../assets/images/servicesShowcase.jpg';
import BannerImage from '../components/BannerImage';

const TrustCooperativeSociety = () => {
  const servicesData = services({
    iconSize: 40,
  });

  return (
    <div>
      <BannerImage
        image={ servicesShowcase }
        title={ _.upperCase(servicesData[5].name) }
        fromText="Services"
        fromLink="/services"
        toText={ servicesData[5].name }
      />
      <div className="p-20">
        { servicesData[5].content }
      </div>
    </div>
  );
};

export default TrustCooperativeSociety;