// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import auditAssurance from '../assets/images/auditAssurance.jpg';
import BannerImage from '../components/BannerImage';

const AuditAssurance = () => {
  const servicesData = services({
    iconSize: 40,
  });

  return (
    <div>
      <BannerImage
        image={ auditAssurance }
        title={ _.upperCase(servicesData[6].name) }
        fromText="Services"
        fromLink="/services"
        toText={ servicesData[6].name }
      />
      <div className="p-20">
        { servicesData[6].content }
      </div>
    </div>
  );
};

export default AuditAssurance;