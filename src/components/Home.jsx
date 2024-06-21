// src/components/Home.js
import React from 'react';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import NewsSection from './NewsSection';

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <AboutUs />
            <OurServices />
            <NewsSection />
        </div>
    );
};

export default Home;
