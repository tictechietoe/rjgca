// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import trustCooperativeSociety from '../assets/images/trustCooperativeSociety.jpg';
import BannerImage from '../components/BannerImage';

const TrustCooperativeSociety = () => {
  const servicesData = services({
    iconSize: 40,
  });
  const service = _.find(servicesData, { id: 'societies_trust_and_cooperative_society_regulations_and_advisory' });

  return (
    <div>
      <BannerImage
        image={ trustCooperativeSociety }
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

export default TrustCooperativeSociety;