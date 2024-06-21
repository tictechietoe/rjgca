// src/components/OurServices.js
import React from 'react';
import Carousel from './Carousel';
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';

const OurServices = () => {
    const images = [
        {
            "src": image1,
            "alt": "Image1"
        },
        {
            "src": image2,
            "alt": "Image1"
        }
    ];

    return (
        <section>
            <h2>Our Services</h2>
            <p>This is the Our Services section.</p>
            <div className="m-2 p-2">
                <Carousel data={images}/>
            </div>
        </section>
    );
};

export default OurServices;
