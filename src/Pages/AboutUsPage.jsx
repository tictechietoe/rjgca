// src/components/AboutUs.js
import React, { useRef, useState, useEffect } from 'react';
import _ from 'lodash';
import BannerImage from '../components/BannerImage';
import aboutus from '../assets/images/aboutus.jpg';
import DividedContainer from '../components/DividedContainer';

const AboutUsPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sectionRefs = {
    'who': useRef(null),
    'how': useRef(null),
    'what': useRef(null),
  };

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = sectionRefs[sectionId].current;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - (isMobile ? 80 : 100),
        behavior: 'smooth',
      });
    }
  };

  const aboutUsData = [
    {
      id: 'who_are_we',
      title: "WHO ARE WE",
      content: <>
        <div>
          <b>R J GALA & ASSOCIATES</b>, Chartered Accountants is a multi-disciplinary professional firm adding value to the business of the clients in India and around the world.
        </div>
      </>,
      side: 'left',
      type: 'who',
      color: 'custom-primary'
    },
    {
      id: 'what_do_we_do',
      title: "WHAT DO WE DO",
      content: <>
        <ul className="list-disc ml-5">
          <li>We recognise that Today's Business World mandates quality professional services that are delivered in a timely and cost-effective manner.</li>
          <li>We at R J GALA & ASSOCIATES strive to provide the same to our clients.</li>
        </ul>
      </>,
      side: 'right',
      color: 'custom-primary'
    },
    {
      id: 'how_are_we_different',
      title: "HOW ARE WE DIFFERENT",
      content: <>
        Our differentiation is derived from a
        <ul className="list-disc ml-5">
          <li>rapid performance-based</li>
          <li>industry-tailored</li>
          <li>technology-enabled services backed with the highest level of expertise</li>
        </ul>
      </>,
      side: 'left',
      type: 'how',
      color: 'custom-mark-color'
    },
    {
      id: 'what_are_our_services',
      title: "WHAT ARE OUR SERVICES",
      content: <>
        <div>
          We provide gamut of services ranging from
          <ul className="list-disc ml-5">
            <li><b>Accounting</b></li>
            <li><b>Taxation consultancy</b></li>
            <li><b>Audit</b></li>
            <li><b>Assurance with Valuation to Transaction advisory services</b></li>
            <li><b>Business Support Services</b></li>
          </ul>
        </div>
      </>,
      side: 'right',
      type: 'what',
      color: 'custom-secondary'
    },
    {
      id: 'what_is_our_belief',
      title: "WHAT IS OUR BELIEF",
      content: <>
        <ul className="list-disc ml-5">
          <li>We believe in putting our clients' requirements at the forefront at all times.</li>
          <li>Understanding the complexities of their business space and developing solutions in accordance therewith.</li>
        </ul>
      </>,
      side: 'left',
      color: 'custom-secondary'
    },
    {
      id: 'what_do_we_provide',
      title: "WHAT DO WE PROVIDE",
      content: <>
        <ul className="list-disc ml-5">
          <li>We are not just service providers to our clients, we are trusted business advisers – because we put our clients at the centre of our business.</li>
          <li>Our services are driven by quality and commitment to our clients, and responsive quality service is our primary focus.</li>
        </ul>
      </>,
      side: 'right',
      color: 'custom-secondary'
    },
    {
      id: 'what_do_we_want',
      title: "WHAT DO WE WANT",
      content: <>
        <ul className="list-disc ml-5">
          <li>Close and continuous communication with clients is one of our top priorities.</li>
          <li>Apart from our people, our greatest assets are the networks and relationships we have nurtured over the years.</li>
          <li>It helps in facilitating and rendering faster, effective solutions to attain <b>maximum client satisfaction</b></li>
        </ul>
      </>,
      side: 'left',
      color: 'custom-secondary'
    },
    {
      id: 'what_is_our_purpose',
      title: "WHAT IS OUR PURPOSE",
      content: <>
        <ul className="list-disc ml-5">
          <li>Our purpose is to build trust and solve important problems.</li>
          <li>In an increasingly complex world, we help intricate systems function, adapt and evolve so they can benefit communities– whether they are tax systems or the economic systems within which business and society exist.</li>
          <li>We help our clients to make informed decisions and operate effectively within them.</li>
        </ul>
      </>,
      side: 'right',
      color: 'custom-secondary'
    }
  ];

  return (
    <div>
      <BannerImage
        image={ aboutus }
        title="ABOUT US"
        fromText="Home"
        fromLink="/"
        toText="About Us"
      />
      <div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-xl text-custom-secondary border-b-2 border-b-custom-secondary">
            LET'S ANSWER SOME QUESTIONS
          </div>
          <div className="flex flex-row flex-nowrap justify-center w-full overflow-x-auto py-4 px-2 mt-6">
            <button className="text-custom-primary p-3 mx-2 shadow-xl border whitespace-nowrap min-w-[80px] flex-shrink-0 font-bold" onClick={(e) => handleScroll(e, 'who')}>WHO</button>
            <button className="text-custom-mark-color p-3 mx-2 shadow-xl border whitespace-nowrap min-w-[80px] flex-shrink-0 font-bold" onClick={(e) => handleScroll(e, 'how')}>HOW</button>
            <button className="text-custom-secondary p-3 mx-2 shadow-xl border whitespace-nowrap min-w-[80px] flex-shrink-0 font-bold" onClick={(e) => handleScroll(e, 'what')}>WHAT</button>
          </div>
        </div>
        <div className="flex flex-col my-10">
          {
            _.map(aboutUsData, data => {
              return (
                <div key={data.id} id={data.id} ref={data.type ? sectionRefs[data.type] : null}>
                  <DividedContainer
                    questionColor={data.color}
                    questionText={data.title}
                    questionSide={data.side}
                    answerContent={data.content}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
