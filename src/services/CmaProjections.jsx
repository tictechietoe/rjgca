// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import cmaProjections from '../assets/images/cmaProjections.jpg';
import BannerImage from '../components/BannerImage';

const CmaProjections = () => {
  const servicesData = services({
    iconSize: 40,
  });
  const service = _.find(servicesData, { id: 'cma_projections' });

  return (
    <div>
      <BannerImage
        image={ cmaProjections }
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

export default CmaProjections;