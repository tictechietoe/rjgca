// src/components/Footer.js
import React from 'react';
import _ from 'lodash';
import { CgWebsite } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const navigate = useNavigate();

  const handleReadMoreDisclaimerClick = () => {
    navigate(`/disclaimer`);
  };

  const disclaimerSection = <>
    <div className="pl-10">
      <p>
        Your access to this website constitutes your agreement to be bound by all terms and conditions listed herein below.
      </p>
      <br />
      <p>
        If you do not agree to this, you may not access or otherwise use the website.
      </p>
      <button className="mt-3 rounded-md bg-custom-secondary text-custom-primary px-2 py-1 font-medium" onClick={handleReadMoreDisclaimerClick}>
        Read More
      </button>
    </div>
  </>;

  const linksMap = [
    {
      url: 'https://incometaxindia.gov.in/Pages/default.aspx',
      name: 'Income Tax Department'
    },
    {
      url: 'https://incometaxindia.gov.in/Pages/default.aspx',
      name: 'Central Board of Excise and Customs'
    },
    {
      url: 'https://incometaxindia.gov.in/Pages/default.aspx',
      name: 'E-Tax Information Network'
    },
    {
      url: 'https://incometaxindia.gov.in/Pages/default.aspx',
      name: 'Ministry of Corporate Affairs'
    },
    {
      url: 'https://www.epfindia.gov.in/site_en/index.php',
      name: 'Employees Provident Fund'
    }
  ];

  const sectionUsefulLinks = <>
    <ul className="list-disc pl-5">
      {
        _.map(linksMap, link => {
          const {
            url = '',
            name = ''
          } = link;

          return (
            <li key={name} className="flex flex-col pl-5 text-wrap items-start hover:ml-2 focus:ml-2 focus:shadow-lg transition-all duration-300 my-2 hover:font-bold hover:text-custom-secondary">
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </li>
          );
        })
      }
    </ul>
  </>;

  const linksData = [
    {
      symbol: <CgWebsite size={30} />,
      value: <>
        <a
          href="https://www.rjgca.in"
          target="_blank"
          rel="noreferrer"
        >
          www.rjgca.in
        </a>
      </>,
      key: "website"
    },
    {
      symbol: <FaPhoneAlt size={30} />,
      value: <>
        <div><a href="tel:9372597268">+91 9372597268</a></div>
      </>,
      key: "contact"
    },
    {
      symbol: <FaPhoneAlt size={30} />,
      value: <>
        <div><a href="tel:9022573304">+91 9022573304</a></div>
      </>,
      key: "contact"
    },
    {
      symbol: <MdOutlineMailOutline size={30} />,
      value: <>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=connect@rjgca.in"
          target="_blank"
          rel="noreferrer"
        >
          connect@rjgca.in
        </a>
      </>,
      key: "email"
    }
  ];

  const contactUsSection = <>
    <div>
      {
        _.map(linksData, link => {
          const {
            symbol = <></>,
            value = <></>,
            key = ""
          } = link;

          return (
            <div key={key} className="flex justify-start items-center pl-10 p-2 hover:ml-2 focus:ml-2 focus:shadow-lg transition-all duration-300 my-2 hover:font-bold hover:text-custom-secondary">
              <div className="px-2">{symbol}</div>
              <div className="px-2">{value}</div>
            </div>
          );
        })
      }
      <SocialMedia />
    </div>
  </>;

  const sectionDetails = [
    {
      title: 'DISCLAIMER',
      content: disclaimerSection
    },
    {
      title: 'USEFUL LINKS',
      content: sectionUsefulLinks
    },
    {
      title: 'CONTACT US',
      content: contactUsSection
    }
  ];

  const sectionContent = (section = {}) => {
    const {
      content = <></>
    } = section;

    return (
      <div className="text-md font-light my-3 basis-1/3">
        {content}
      </div>
    );
  };

  const sectionTitle = (section = {}) => {
    const {
      title = '',
    } = section;

    return (
      <div className="flex flex-wrap justify-start pl-10 py-2 text-2xl font-medium basis-1/3 pb-3">
        <div className="text-custom-secondary py-1">{title}</div>
      </div>
    );
  };

  const companyDetails = (
    <div>
      <div className="pb-5">
        R J Gala & Associate's purpose is to serve its clients through combined resources, information and expertise and ensure to achieve the highest standards of service to our clients.
      </div>
      <div>
        We are a young and dynamic firm equipped with an experienced team of chartered accountants and it is located at Mumbai.
      </div>
    </div>
  );

  return (
    <footer className="bg-custom-tertiary text-white border-t">
      <div className="flex p-10">
        <div className="flex flex-col basis-2/5 justify-start px-10 py-5">
          <Logo />
          <div className="pt-4 text-lg">{ companyDetails }</div>
        </div>
        <div className="flex basis-3/5">
          <div className="flex flex-col ">
            <div className="flex">
              {
                _.map(sectionDetails, section => sectionTitle(section))
              }
            </div>
            <div className="flex">
              {
                _.map(sectionDetails, section => sectionContent(section))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-b p-16">
        &copy; 2023 My React App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
