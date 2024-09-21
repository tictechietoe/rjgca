// src/components/Team.js
import React, { useState } from 'react';
import _ from 'lodash';
import teamImage from '../assets/images/team.jpg';
import BannerImage from '../components/BannerImage.jsx';
import Quote from '../components/Quote.jsx';
import rahul from '../assets/faces/rahul.jpg';
import { FaPeopleGroup } from "react-icons/fa6";

const TeamCard = ({ data }) => {

  const {
    image,
    designation = '',
    name = '',
    expertise = <></>
  } = data;

  return (
    <div className="flex bg-white shadow-lg basis-1/4 h-1/2 p-5 mx-5 border">
      <div className="flex flex-col justify-center">
        <img alt="team pic" src={ image } />
        <h2 className="flex justify-center text-lg font-bold text-custom-primary">{ name }</h2>
        <div className="flex justify-center text-custom-secondary font-medium">{ designation }</div>
        <div className="flex flex-col">
          <div className="flex justify-center my-5 text-custom-primary font-bold">Expertise</div>
          { expertise }
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
      designation: "CA, Bcom",
      image: rahul,
      expertise: <>
        <ul className="list-disc ml-5 pb-5">
          <li>Corporate Advisory</li>
          <li>Business Support Services</li>
          <li>Fund Raising</li>
        </ul>
      </>
    },
    {
      name: "Vinayak Kulkarni (Council Member, ICMA)",
      designation: "CMA, CIMA(UK), Diploma in IFRS (UK), Advance Diploma in Management Accountant , Bcom",
      image: rahul,
      expertise: <>
        <ul className="list-disc ml-5 pb-5">
          <li>Audit</li>
          <li>Accounting and Business Support</li>
          <li>Corporate Advisory</li>
        </ul>
      </>
    },
    {
      name: "Sameer Negandhi",
      designation: "CS, Bcom",
      image: rahul,
      expertise: <>
        <ul className="list-disc ml-5 pb-5">
          <li>Secretarial</li>
          <li>FEMA Advisory</li>
          <li>Loan Syndication</li>
        </ul>
      </>
    },
    {
      name: "Sadashiv Kashozal",
      designation: "CS, Bcom, LLB",
      image: rahul,
      expertise: <>
        <ul className="list-disc ml-5 pb-5">
          <li>Add something</li>
        </ul>
      </>
    }
  ];

  const foundersProfile = (
    <div className="border pb-5">
      <h2 className="flex py-2 px-5 text-xl font-medium justify-start text-custom-secondary">FOUNDER'S PROFILE</h2>
      <div className="flex">
        <div className="flex px-5 flex-col basis-2/6 justify-center">
          <img alt="profile pic" src={ rahul } />
          <h2 className="flex justify-center text-lg font-bold text-custom-primary">RAHUL J GALA</h2>
        </div>
        <div className="base-1/6 pl-5 flex flex-col justify-center">
          <ul className="list-disc ml-5 pb-5">
            <li>Chartered Accountant (ICAI)</li>
            <li>Certified  in GST course (ICAI)</li>
            <li>Trained in Securities and Financial Assets Valuation (PVAI)</li>
            <li>Graduate (HR College)</li>
          </ul>
          <ul className="list-disc ml-5">
            <li>Phone : +91 12345678</li>
            <li>Email: rahulgala@gmail.com</li>
          </ul>
        </div>
        <div className="basis-3/6">
          <div className="my-2 text-sm">
            Rahul J Gala is a young  Chartered Accountant and the founder of  R J Gala and Associates. He is a commerce graduate from HR College of Commerce and Economics (Mumbai University). He is certified in GST course held by Institute of Chartered Accountants of India and also availed professional training in the field of Securities and Financial Assets valuation conducted by a recognised institute.
          </div>
          <div className="my-2 text-sm">
            In his professional lifespan, he has accumulated rich experience in several fields of professional services, different sectors and with diverse clients. He has considerable domain expertize in Direct and Indirect Taxation, Accounting, Audit and Advisory. His understanding of the intricacies of businesses enables him to provide clients with comprehensive, accurate and technology enabled solutions for their current and future business issues.  He has successfully represented various clients before tax authories on complex tax litigation matters.
          </div>
          {
            !showFounderMoreDetails &&
            <button
              className="rounded-lg bg-custom-secondary text-white font-medium p-1"
              onClick={ () => setShowFounderMoreDetails(true) }
            >
              More Details
            </button>
          }
        </div>
      </div>
      {
        showFounderMoreDetails &&
        <div className="px-5">
          <div className="my-2 text-sm">
            Prior to founding R J Gala and Associates, he has headed the Accounting and Taxation department and also served in the capacity as a consultant in different professionally managed  corporate organisations. He has worked very closely with top companies and firms including Big Four on several occassions.
          </div>
          <div className="my-2 text-sm">
            As a leader, he has always been a strong source of inspiration for the team and aspiring professionals within the organization. He is a strong believer of giving back to the society and hence is associated with various not-for-profit organizations. He strongly believes that exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
          </div>
          <button
            className="rounded-lg bg-custom-secondary text-white font-medium p-1"
            onClick={ () => setShowFounderMoreDetails(false) }
          >
            Hide Details
          </button>
        </div>
      }
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
        icon={ <FaPeopleGroup size={ 50 } /> }
        iconColor="custom-secondary"
        message="The strength of a team is each individual member, the strength of each member is the team"
      />
      <div className="px-10">
        <div className="my-5">
          We  generate our strength from our team of professionals who have significant functional and industry expertise across services and are well-equipped to deliver outstanding results. Quality of our people is the foundation of our ability to serve our clients in the best way. From our newest staff members through senior staff, exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
        </div>
        <div className="my-5">
          Our team is a mix of motivated young professionals and experienced Chartered Accountants, Company Secretaries, Cost Accountants, Lawyers and CFAs who are specialised and has expertise in their respective areas . Expert professionals ensure that our clients receive prompt and personalized solutions at all times and also committed to add value and optimize benefits accruing to the clients.
        </div>
        <div className="my-5">
          Different together. At R J Gala and Associates, we‘re not all the same. And that‘s our greatest strength. It’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, deliver outstanding results and create better experiences for everyone.
        </div>
        { foundersProfile }
        <div>
          <h2 className="flex py-5 px-5 text-xl font-medium justify-start text-custom-secondary">TEAM OF PROFESSIONALS</h2>
          <div className="flex mb-10">
            {
              _.map(teamMembers, (member, index) => <TeamCard key={index} data={member} />)
            }
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Team;