// src/components/AboutUs.js
import React from 'react';
import _ from 'lodash';
import Slider from './Slider';

const AboutUs = () => {
    const data = [
        "R J Gala & Associates, Chartered Accountants is a multi-disciplinary professional firm adding value to the business of the clients in India and around the world by providing gamut of services ranging from Accounting, Taxation consultancy, Audit and Assurance,Valuation to Transaction advisory services and Business Support Services",
        " We recognise that Today's  Business World mandates quality professional services that are delivered in a timely and a cost effective manner and we at R J Gala & Associates strive to provide the same to our clients. We believe in putting our client’s requirements in fore front at all times, understanding the complexities of their business space and develop solutions in accordance thereof. Our differentiation is derived from a rapid performance-based, industry-tailored and technology-enabled services backed with the highest level of expertise.",
        "We are not just service providers to our clients, we are trusted business advisors – because we put our clients at the centre of our business. Our services are driven by quality and commitment to our clients, and responsive quality service is our primary focus. Close and continuous communication with clients is one of our top priorities. Apart from our people, our greatest assets are the networks and relationships we have nurtured over the years, that facilitates in rendering faster and effective solutions to attain maximum client satisfaction.",
        "Our purpose is to build trust and solve important problems. In an increasingly complex world, we help intricate systems function, adapt and evolve so they can benefit communities– whether they are tax systems or the economic systems within which business and society exist. We help our clients to make informed decisions and operate effectively within them."
    ];

    return (
        <div className="m-5 border-b pb-5">
            <h2 className="flex justify-center font-medium text-3xl">ABOUT US</h2>
            {
                <Slider data={ data } />
            }
        </div>
    );
};

export default AboutUs;
