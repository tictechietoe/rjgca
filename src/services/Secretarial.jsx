// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import secretarialServices from '../assets/images/secretarialServices.jpg';
import BannerImage from '../components/BannerImage';

const Secretarial = () => {
  const servicesData = services({
    iconSize: 40,
  });

  return (
    <div>
      <BannerImage
        image={ secretarialServices }
        title={ _.upperCase(servicesData[8].name) }
        fromText="Services"
        fromLink="/services"
        toText={ servicesData[8].name }
      />
      <div className="p-20">
        { servicesData[8].content }
      </div>
    </div>
  );
};

export default Secretarial;