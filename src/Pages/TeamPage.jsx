// src/components/Team.js
import React, { useState } from 'react';
import _ from 'lodash';
import teamImage from '../assets/images/team.jpg';
import BannerImage from '../components/BannerImage.jsx';
import Quote from '../components/Quote.jsx';
import rahul from '../assets/faces/rahul.jpg';
import unknown_female from '../assets/faces/unknown_female.jpg';
import unknown_male from '../assets/faces/unknown_male.jpg';
import { FaPeopleGroup } from "react-icons/fa6";

const TeamCard = ({ data }) => {
  const {
    image,
    designation = [],
    name = '',
    expertise = []
  } = data;

  return (
    <div className="bg-white shadow-md w-full max-w-xs h-auto md:h-[450px] p-5 sm:p-6 mx-auto border rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px] min-h-[400px] flex flex-col items-center justify-between">
      <div className="flex justify-center">
        <img alt="team pic" src={image} className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full border-2 border-custom-secondary mb-4" />
      </div>
      <div className="flex justify-center">
        <h2 className="text-base sm:text-lg font-bold text-custom-primary text-center mb-2 overflow-hidden break-words w-full">
          {name}
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col items-center mb-1 w-full">
          {designation.map((cred, idx) => (
            <span key={idx} className="text-center text-sm sm:text-[1rem] font-semibold text-custom-secondary leading-tight w-full overflow-hidden break-words">{cred}</span>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full items-center flex-grow justify-center">
        <div className="flex justify-center text-black font-bold">Expertise</div>
        <div className="flex flex-col items-center">
          {Array.isArray(expertise) ? expertise.map((item, i) => (
            <span key={i} className="text-center text-sm sm:text-base text-black overflow-hidden break-words">{item}</span>
          )) : expertise}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [showFounderMoreDetails, setShowFounderMoreDetails] = useState(false);

  const teamMembers = [
    {
      name: "Bhumika Gala",
      designation: ["CA, Bcom"],
      image: unknown_female,
      expertise: [
        "CFO Services",
        "Corporate Advisory",
        "Buisness suport services",
        "Fund raising"
      ]
    },
    {
      name: "Vinayak Kulkarni\n(Council Member, ICAI)",
      designation: [
        "CMA, Diploma in IFRS (UK)",
        "CIMA Adv Dip MA (UK)",
        "Bcom",
      ],
      image: unknown_male,
      expertise: [
        "Audit and assurance",
        "Accounting & Business Support",
        "Regulatory compliances and Advisory"
      ]
    },
    {
      name: "Sameer Negandhi",
      designation: ["CS, Bcom"],
      image: unknown_male,
      expertise: [
        "FEMA Advisory",
        "Secretarial Services",
        "Corporate Finance"
      ]
    },
    {
      name: "Sadashiv Kashozal",
      designation: ["CS, Bcom", "LLB"],
      image: unknown_male,
      expertise: [
        "Due Diligence",
        "Corporate Advisory"
      ]
    }
  ];

  const foundersProfile = (
    <div className="border pb-8 rounded-lg bg-white shadow-lg my-10 flex flex-col items-center px-2 sm:px-4 md:px-8 max-w-2xl w-full mx-auto">
      <h2 className="py-5 px-5 text-xl font-semibold text-center text-custom-secondary">FOUNDER'S PROFILE</h2>
      <img alt="profile pic" src={rahul} className="w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-full border-2 border-custom-secondary mb-3" />
      <div className="flex flex-col items-center mb-3 w-full">
        <h2 className="text-lg font-bold text-custom-primary text-center">RAHUL J GALA</h2>
        <div className="flex flex-col items-center mt-1 mb-2 w-full">
          <span className="text-sm sm:text-[1rem] font-semibold text-black leading-tight text-center w-full">Chartered Accountant (ICAI)</span>
          <span className="text-sm sm:text-[1rem] font-semibold text-black leading-tight text-center w-full">Certified in GST course (ICAI)</span>
          <span className="text-sm sm:text-[1rem] font-semibold text-black leading-tight text-center w-full">Trained in Securities and Financial Assets Valuation (PVAI)</span>
          <span className="text-sm sm:text-[1rem] font-semibold text-black leading-tight text-center w-full">Graduate (HR College)</span>
        </div>
        <ul className="list-none text-center text-custom-secondary text-sm sm:text-[0.95rem] mb-2">
          <li>Email: rahul.gala@rjca.in</li>
        </ul>
      </div>
      <div className="w-full px-2 sm:px-5">
        <div className="my-2 text-xs sm:text-sm text-justify text-center sm:text-justify">
          Rahul J Gala is a young Chartered Accountant and the founder of R J GALA & ASSOCIATES. He is a commerce graduate from HR College of Commerce and Economics (Mumbai University). He is certified in GST course held by Institute of Chartered Accountants of India and also availed professional training in the field of Securities and Financial Assets valuation conducted by a recognised institute.
        </div>
        <div className="my-2 text-medium sm:text-sm text-justify text-center sm:text-justify">
          In his professional lifespan, he has accumulated rich experience in several fields of professional services, different sectors and with diverse clients. He has considerable domain expertise in Direct and Indirect Taxation, Accounting, Audit and Advisory. His understanding of the intricacies of businesses enables him to provide clients with comprehensive, accurate and technology-enabled solutions for their current and future business issues. He has successfully represented various clients before tax authorities on complex tax litigation matters.
        </div>
        {!showFounderMoreDetails && (
          <div className="flex justify-center">
            <button
              className="rounded-lg bg-custom-secondary text-white font-medium p-1 mt-2 mx-auto"
              onClick={() => setShowFounderMoreDetails(true)}
            >
              More Details
            </button>
          </div>
        )}
        {showFounderMoreDetails && (
          <div>
            <div className="my-2 text-xs sm:text-sm text-justify text-center sm:text-justify">
              Prior to founding R J GALA & ASSOCIATES, he has headed the Accounting and Taxation department and also served in the capacity as a consultant in different professionally managed corporate organisations. He has worked very closely with top companies and firms including Big Four on several occasions.
            </div>
            <div className="my-2 text-xs sm:text-sm text-justify text-center sm:text-justify">
              As a leader, he has always been a strong source of inspiration for the team and aspiring professionals within the organisation. He is a strong believer in giving back to society and hence is associated with various not-for-profit organisations. He strongly believes that exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
            </div>
            <div className="flex justify-center">
              <button
                className="rounded-lg bg-custom-secondary text-white font-medium p-1 mt-2 mx-auto"
                onClick={() => setShowFounderMoreDetails(false)}
              >
                Hide Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <BannerImage
        image={ teamImage }
        title="TEAM"
        fromText="Home"
        fromLink="/"
        toText="Team"
      />
      <Quote
        icon={<FaPeopleGroup size={50} />}
        iconColor="custom-secondary"
        message="The strength of a team is each individual member, the strength of each member is the team"
      />
      <div className="px-4 sm:px-6 md:px-10">
        <div className="my-3 sm:my-5 text-sm sm:text-base">
          We generate our strength from our team of professionals who have significant functional and industry expertise across services and are well-equipped to deliver outstanding results. Quality of our people is the foundation of our ability to serve our clients in the best way. From our newest staff members through senior staff, exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
        </div>
        <div className="my-3 sm:my-5 text-sm sm:text-base">
          Our team is a mix of motivated young professionals and experienced Chartered Accountants, Company Secretaries and Cost Accountants who are specialised and have expertise in their respective areas. Expert professionals ensure that our clients receive prompt and personalised solutions at all times and are also committed to adding value and optimising benefits accruing to the clients.
        </div>
        <div className="my-3 sm:my-5 text-sm sm:text-base">
          Different together. At R J GALA & ASSOCIATES, we're not all the same. And that's our greatest strength. It's important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, deliver outstanding results and create better experiences for everyone.
        </div>
        { foundersProfile }
        <div>
          <h2 className="py-3 sm:py-5 px-2 sm:px-5 text-lg sm:text-xl font-semibold text-center text-custom-secondary" style={{ fontSize: '1.25rem', fontWeight: '600', letterSpacing: '1px' }}>TEAM OF PROFESSIONALS</h2>
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8">
              {_.map(teamMembers, (member, index) => <TeamCard key={index} data={member} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
