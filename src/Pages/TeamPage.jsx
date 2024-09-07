// src/components/Team.js
import React from 'react';
import _ from 'lodash';
import { MdFace, MdFace3 } from "react-icons/md";
import teamImage from '../assets/images/team.jpg';
import BannerImage from '../components/BannerImage';

const TeamCard = ({ data }) => {

  const {
    icon = <></>,
    title = '',
    content = ''
  } = data;

  return (
    <div className="flex bg-white shadow-lg mt-10 border w-96 mix-w-96 justify-center">
      <div className="p-5">
        <div className="mx-auto w-20 h-20 border-2 border-gray-500 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div className="mt-4">
          <h2 className="text-lg leading-tight font-medium text-center text-blue-900">
            {title}
          </h2>
          <p className="mt-2 text-gray-600 text-center">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      title: "Bhumika Gala",
      content: "CA, Bcom",
      icon: <MdFace3 size={40} />
    },
    {
      title: "Vinayak Kulkarni (Council Member, ICMA)",
      content: "CMA, CIMA(UK), Diploma in IFRS (UK), Advance Diploma in Management Accountant , Bcom",
      icon: <MdFace size={40} />
    },
    {
      title: "Sameer Negandhi",
      content: "CS, Bcom",
      icon: <MdFace size={40} />
    },
    {
      title: "Sadashiv Kashozal",
      content: "CS, Bcom, LLB",
      icon: <MdFace size={40} />
    }
  ];

  return (
    <div>
      <BannerImage
        image={ teamImage }
        title="TEAM"
        fromText="Home"
        fromLink="/"
        toText="Team"
      />
      <div className="flex py-2 text-xl font-medium border-b sm:border-dashed justify-center mt-5 mx-20 md:mx-40 lg:mx-60">
        OUR TEAM
      </div>
      <div className="text-lg font-light my-3 mx-20 md:mx-40 lg:mx-60">
        <div className="my-5">
          We  generate our strength from our team of professionals who have significant functional and industry expertise across services and are well-equipped to deliver outstanding results. Quality of our people is the foundation of our ability to serve our clients in the best way. From our newest staff members through senior staff, exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
        </div>
        <div className="my-5">
          Our team is a mix of motivated young professionals and experienced Chartered Accountants, Company Secretaries, Cost Accountants, Lawyers and CFAs who are specialised and has expertise in their respective areas . Expert professionals ensure that our clients receive prompt and personalized solutions at all times and also committed to add value and optimize benefits accruing to the clients.
        </div>
        <div className="my-5">
          Different together. At R J Gala & Associates, we‘re not all the same. And that‘s our greatest strength. It’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, deliver outstanding results and create better experiences for everyone.
        </div>
        <div className="my-5">
          <div className="my-2">
            Rahul J Gala is a young  Chartered Accountant and the founder of  R J Gala & Associates. He is a commerce graduate from HR College of Commerce and Economics (Mumbai University). He is certified in GST course held by Institute of Chartered Accountants of India and also availed professional training in the field of Securities & Financial Assets valuation conducted by a recognised institute.
          </div>
          <div className="my-2">
            In his professional lifespan, he has accumulated rich experience in several fields of professional services, different sectors and with diverse clients. He has considerable domain expertize in Direct & Indirect Taxation, Accounting, Audit and Advisory. His understanding of the intricacies of businesses enables him to provide clients with comprehensive, accurate and technology enabled solutions for their current and future business issues.  He has successfully represented various clients before tax authories on complex tax litigation matters.
          </div>
          <div className="my-2">
            Prior to founding R J Gala & Associates, he has headed the Accounting and Taxation department and also served in the capacity as a consultant in different professionally managed  corporate organisations. He has worked very closely with top companies and firms including Big Four on several occassions.
          </div>
          <div className="my-2">
            As a leader, he has always been a strong source of inspiration for the team and aspiring professionals within the organization. He is a strong believer of giving back to the society and hence is associated with various not-for-profit organizations. He strongly believes that exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
          </div>
        </div>
      </div>
      <div className="flex pt-5 py-2 text-xl font-medium border-b sm:border-dashed justify-center">
        TEAM OF PROFESSIONALS
      </div>
      <div className="flex justify-around flex-wrap">
        {
          _.map(teamMembers, (member, index) => <TeamCard key={index} data={member} />)
        }
      </div>
    </div>
  );
};

export default Team;