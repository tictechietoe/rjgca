// src/components/Home.js
import React from 'react';
import Services from '../components/Services';
import Our from '../components/Our';
import ImageCarousel from '../components/ImageCarousel.jsx';

import meeting from '../assets/images/meeting.jpg';
import skyscrapers from '../assets/images/skyscrapers.jpg';
import solutions from '../assets/images/solutions.jpg';
import difference from '../assets/images/difference.jpg';
import assets from '../assets/images/assets.jpg';
import helping from '../assets/images/helping.jpg';
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
      <div className="flex items-center justify-center p-10">
        <FaLightbulb size={ 50 } className="mx-10 text-yellow-400"/>
        <div className="font-bold text-xl text-blue-950">
          - "Every problem has a solution. You just have to be creative enough to find it."
        </div>
      </div>
      <Our />
      <Services />
    </div>
  );
};

export default Home;
