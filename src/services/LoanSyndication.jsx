// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import loanService from '../assets/images/loanService.jpg';
import BannerImage from '../components/BannerImage';

const LoanSyndication = () => {
  const servicesData = services({
    iconSize: 40,
  });
  const service = _.find(servicesData, { id: 'loan_syndication_services' });

  return (
    <div>
      <BannerImage
        image={ loanService }
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

export default LoanSyndication;