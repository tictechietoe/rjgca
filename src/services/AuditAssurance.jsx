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
  const service = _.find(servicesData, { id: 'audit_and_assurance' });

  return (
    <div>
      <BannerImage
        image={ auditAssurance }
        title={ _.upperCase(service.name) }
        fromText="Services"
        fromLink="/services"
        toText={ service.name }
      />
      <div className="p-3 sm:p-6 md:p-10 lg:p-16">
        { service.content }
      </div>
    </div>
  );
};

export default AuditAssurance;