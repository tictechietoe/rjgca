// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import regulatoryComplianceAdvisory from '../assets/images/regulatoryComplianceAdvisory.jpg';
import BannerImage from '../components/BannerImage';

const RegulatoryCompliance = () => {
  const servicesData = services({
    iconSize: 40,
  });

  return (
    <div>
      <BannerImage
        image={ regulatoryComplianceAdvisory }
        title={ _.upperCase(servicesData[2].name) }
        fromText="Services"
        fromLink="/services"
        toText={ servicesData[2].name }
      />
      <div className="p-3 sm:p-6 md:p-10 lg:p-16">
        { servicesData[2].content }
      </div>
    </div>
  );
};

export default RegulatoryCompliance;