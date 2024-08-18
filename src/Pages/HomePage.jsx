// src/components/Home.js
import React from 'react';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Our from '../components/Our';

const Home = () => {
  return (
    <div className="m-5">
      <AboutUs />
      <Services />
      <Our />
    </div>
  );
};

export default Home;
