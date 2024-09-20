// src/components/Services.js
import React from 'react';
import _ from 'lodash';
import services from '../data/servicesData';
import accountingServices from '../assets/images/accountingServices.jpg';
import BannerImage from '../components/BannerImage';

const Accounting = () => {
  const servicesData = services({
    iconSize: 40,
  });

  return (
    <div>
      <BannerImage
        image={ accountingServices }
        title={ _.upperCase(servicesData[1].name) }
        fromText="Services"
        fromLink="/services"
        toText={ servicesData[1].name }
      />
      <div className="p-20">
        { servicesData[1].content }
      </div>
    </div>
  );
};

export default Accounting;