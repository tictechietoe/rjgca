// src/components/Footer.js
import React from 'react';
import _ from 'lodash';
import { CgWebsite } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import FooterLogo from './FooterLogo';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const navigate = useNavigate();

  const handleReadMoreDisclaimerClick = () => {
    navigate(`/disclaimer`);
  };

  const linksMap = [
    {
      url: 'https://incometaxindia.gov.in/Pages/default.aspx',
      name: 'Income Tax Department'
    },
    {
      url: 'https://www.cbic.gov.in/',
      name: 'Central Board of Excise and Customs'
    },
    {
      url: 'https://services.india.gov.in/service/detail/website-of-tax-information-network',
      name: 'E-Tax Information Network'
    },
    {
      url: 'https://www.mca.gov.in/content/mca/global/en/home.html',
      name: 'Ministry of Corporate Affairs'
    },
    {
      url: 'https://www.epfindia.gov.in/site_en/index.php',
      name: 'Employees Provident Fund'
    }
  ];

  const linksData = [
    {
      symbol: <CgWebsite size={20} className="text-xl" />,
      value: <a href="https://www.rjgca.in" target="_blank" rel="noreferrer" className="text-sm md:text-base">
        www.rjgca.in
      </a>,
      key: "website"
    },
    {
      symbol: <FaPhoneAlt size={20} className="text-xl" />,
      value: <a href="tel:9372597268" className="text-sm md:text-base">+91 9372597268</a>,
      key: "contact1"
    },
    {
      symbol: <FaPhoneAlt size={20} className="text-xl" />,
      value: <a href="tel:9022573304" className="text-sm md:text-base">+91 9022573304</a>,
      key: "contact2"
    },
    {
      symbol: <MdOutlineMailOutline size={20} className="text-xl" />,
      value: <a
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=connect@rjgca.in"
        target="_blank"
        rel="noreferrer"
        className="text-sm md:text-base"
      >
        connect@rjgca.in
      </a>,
      key: "email"
    }
  ];

  // Common section styles for consistent spacing and alignment
  const sectionClass = "col-span-1 flex flex-col items-center text-center px-4 py-6";
  const headingClass = "text-xl font-medium text-custom-secondary mb-6";
  const contentClass = "text-sm md:text-base w-full";

  return (
    <footer className="bg-custom-tertiary text-white border-t">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {/* Company Info Section */}
        <div className={sectionClass}>
          <div className="mb-4">
            <FooterLogo />
          </div>
          <div className={contentClass}>
            <p className="mb-4">
              R J GALA & ASSOCIATES' purpose is to serve its clients through combined resources, information and expertise and ensure to achieve the highest standards of service to our clients.
            </p>
            <p>
              We are a young and dynamic firm equipped with an experienced team of chartered accountants and it is based in Mumbai.
            </p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className={sectionClass}>
          <h3 className={headingClass}>DISCLAIMER</h3>
          <div className={contentClass}>
            <p className="mb-4">
              Your access to this website constitutes your agreement to be bound by all terms and conditions listed below.
            </p>
            <p className="mb-4">
              If you do not agree to this, you may not access or otherwise use the website.
            </p>
            <button 
              className="mt-2 rounded-md bg-custom-secondary text-custom-primary px-4 py-2 text-sm font-medium transition-transform hover:scale-105" 
              onClick={handleReadMoreDisclaimerClick}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className={sectionClass}>
          <h3 className={headingClass}>USEFUL LINKS</h3>
          <ul className={`${contentClass} space-y-3`}>
            {_.map(linksMap, link => (
              <li key={link.name} className="transition-all duration-300 hover:scale-105">
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-sm md:text-base hover:text-custom-secondary hover:font-medium inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className={sectionClass}>
          <h3 className={headingClass}>CONTACT US</h3>
          <div className={`${contentClass} space-y-4`}>
            {_.map(linksData, link => (
              <div key={link.key} className="flex items-center justify-center transition-all duration-300 hover:scale-105 w-full">
                <div className="mr-3 text-custom-secondary">{link.symbol}</div>
                <div>{link.value}</div>
              </div>
            ))}
            <div className="mt-6 flex justify-center">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright footer */}
      <div className="border-t border-gray-800 py-4 text-center text-xs md:text-sm">
        &copy; {new Date().getFullYear()} R J GALA & ASSOCIATES. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
