// src/components/OurServices.js
import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import servicesData from '../data/servicesData';


const OurServices = () => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
          setIsSmallScreen(window.innerWidth < 768); // 768px is Tailwind's 'md' breakpoint
        };
    
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
    
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div className="m-5 py-5 border-b">
            <h2 className="flex justify-center font-medium text-3xl">
                OUR SERVICES
            </h2>
            <div className="my-1">
                <Slider
                    data={ servicesData }
                    isServices={ true }
                    slidesNumber={ isSmallScreen ? 1 : 3 }
                />
            </div>
        </div>
    );
};

export default OurServices;
