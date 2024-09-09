// src/components/Home.js
import React from 'react';
import Services from '../components/Services.jsx';
import Our from '../components/Our.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';

import meeting from '../assets/images/meeting.jpg';
import skyscrapers from '../assets/images/skyscrapers.jpg';
import solutions from '../assets/images/solutions.jpg';
import difference from '../assets/images/difference.jpg';
import assets from '../assets/images/assets.jpg';
import helping from '../assets/images/helping.jpg';
import Quote from '../components/Quote.jsx';
import { FaLightbulb } from "react-icons/fa";

const Home = () => {
  const images = [
    meeting,
    skyscrapers,
    solutions,
    difference,
    assets,
    helping
  ];

  const textContent = [
    'Accessable. Approachable. Accountable',
    'We are here to help your bussiness',
    'Finding Solutions and not Execuses',
    'Making a Difference',
    'Surround yourself with Assets, Not Liabilities',
    'We Build Relations'
  ];

  return (
    <div>
      <ImageCarousel images={images} textContent={ textContent }/>
      <Quote
        icon={ <FaLightbulb size={ 50 } /> }
        iconColor="yellow-400"
        message="Every problem has a solution. You just have to be creative enough to find it"
      />
      <Our />
      <Services />
    </div>
  );
};

export default Home;
