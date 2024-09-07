// src/components/AboutUs.js
import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import companyLogo from '../assets/logo/companyLogo.jpg';
import BannerImage from '../components/BannerImage';
import aboutus from '../assets/images/aboutus.jpg';

const AboutUsPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const aboutUsData = [
    {
      id: 'who_are_we',
      title: "WHO ARE WE",
      content: <>
        <div>
          <b>R J Gala & Associates</b>, Chartered Accountants is a multi-disciplinary professional firm adding value to the business of the clients in India and around the world.
        </div>
      </>,
      side: 'left'
    },
    {
      id: 'who_are_our_services',
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
      side: 'left'
    },
    {
      id: 'who_do_we_do',
      title: "WHAT DO WE DO",
      content: <>
        <ul className="list-disc ml-5">
          <li>We recognise that Today's Business World mandates quality professional services that are delivered in a timely and a cost effective manner.</li>
          <li>We at R J Gala & Associates strive to provide the same to our clients.</li>
        </ul>
      </>,
      side: 'left'
    },
    {
      id: 'what_is_our_belief',
      title: "WHAT IS OUR BELIEF",
      content: <>
        <ul className="list-disc ml-5">
          <li>We believe in putting our client's requirements in fore front at all times.</li>
          <li>understanding the complexities of their business space and develop solutions in accordance thereof.</li>
        </ul>
      </>,
      side: 'left'
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
      side: 'right'
    },
    {
      id: 'what_do_we_provide',
      title: "WHAT DO WE PROVIDE",
      content: <>
        <ul className="list-disc ml-5">
          <li>We are not just service providers to our clients, we are trusted business advisors – because we put our clients at the centre of our business.</li>
          <li>Our services are driven by quality and commitment to our clients, and responsive quality service is our primary focus.</li>
        </ul>
      </>,
      side: 'right'
    },
    {
      id: 'what_do_we_want',
      title: "WHAT DO WE WANT",
      content: <>
        <ul className="list-disc ml-5">
          <li>Close and continuous communication with clients is one of our top priorities.</li>
          <li>Apart from our people, our greatest assets are the networks and relationships we have nurtured over the years.</li>
          <li>It helps in facilitating and rendering faster effective solutions to attain <b>maximum client satisfaction</b></li>
        </ul>
      </>,
      side: 'right'
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
      side: 'right'
    }
  ];

  const handlOnTabClick = (uniqueId = '') => {
    const findContent = _.find(aboutUsData, data => data.id === uniqueId);
    setContent(findContent.content);
    setShowContent(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.7, // Trigger when 70% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div>
      <BannerImage
        image={ aboutus }
        title="ABOUT US"
        fromText="Home"
        fromLink="/"
        toText="About Us"
      />
      <div className="m-10 p-10 bg-custom-primary">
        <div className="flex flex-col items-center justify-center mb-20">
          <button className="flex p-5 border-b-2" onClick={ () => setShowContent(false) }>
            <h2 className="font-semibold text-custom-secondary text-7xl">ABOUT US</h2>
          </button>
        </div>
        <div className="flex justify-around h-96">
          <div ref={componentRef} className={`flex flex-col items-center justify-between transition-all duration-[5000ms] ease-in-out ${isVisible ?  'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {
              _.map(_.filter(aboutUsData, data => data.side === 'left'), data => (
                <button key={data.id} onClick={() => handlOnTabClick(data.id)} className="w-56 border-2 border-blue-950 bg-gray-100 hover:bg-yellow-400 hover:font-bold rounded-3xl">
                  <div className="p-5">
                    {data.title}
                  </div>
                </button>
              ))
            }
          </div>
          <div className="flex flex-col justify-center max-w-96">
            {
              !showContent &&
              <div className="flex flex-col items-center justify-center bg-white p-5 rounded-3xl">
                <img width="60px" src={companyLogo} alt='company logo'/>
                <h2 className="px-5 text-4xl text-blue-950 font-semibold">R J GALA</h2>
                <h2 className="px-5 text-4xl text-blue-950 font-semibold">&</h2>
                <h2 className="px-5 text-4xl text-yellow-400 font-semibold">ASSOCIATES</h2>
              </div>
            }
            {
              showContent &&
              <div className="text-pretty text-xl bg-gray-200 py-5 pl-10 pr-5 justify-center rounded-3xl">
                {content}
              </div>
            }
          </div>
          <div ref={componentRef} className={`flex flex-col items-center justify-between transition-all duration-[5000ms] ease-in-out ${isVisible ?  'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {
              _.map(_.filter(aboutUsData, data => data.side === 'right'), data => (
                <button key={data.id} onClick={() => handlOnTabClick(data.id)} className="w-56 border-2 border-blue-950 bg-gray-100 hover:bg-yellow-400 hover:font-bold rounded-3xl">
                  <div className="p-5">
                    {data.title}
                  </div>
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;