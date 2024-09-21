// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import corporateAdvisory from '../assets/images/corporateAdvisory.jpg';
import BannerImage from '../components/BannerImage';

const CorporateAdvisory = () => {
  const servicesData = services({
    iconSize: 40,
  });

  return (
    <div>
      <BannerImage
        image={ corporateAdvisory }
        title={ _.upperCase(servicesData[3].name) }
        fromText="Services"
        fromLink="/services"
        toText={ servicesData[3].name }
      />
      <div className="p-20">
        { servicesData[3].content }
      </div>
    </div>
  );
};

export default CorporateAdvisory;