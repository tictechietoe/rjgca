// src/components/Team.js
import React from 'react';
import _ from 'lodash';
import Card from '../components/Card';

const Team = () => {
    const teamMembers = [
        {
            title: "Bhumika Gala",
            content: "CA, Bcom"
        },
        {
            title: "Vinayak Kulkarni (Council Member, ICMA)",
            content: "CMA, CIMA(UK), Diploma in IFRS (UK), Advance Diploma in Management Accountant , Bcom"
        },
        {
            title: "Sameer Negandhi",
            content: "CS, Bcom"
        },
        {
            title: "Bhumika Gala",
            content: "CS, Bcom, LLB"
        }
    ];

    return (
        <div className="mx-3 flex-1 min-w-[400px] justify-center">
            <div className="flex py-2 text-lg font-medium border-b sm:border-dashed justify-center">
                OUR TEAM
            </div>
            <div className="text-sm font-light my-3">
                <div>
                    We  generate our strength from our team of professionals who have significant functional and industry expertise across services and are well-equipped to deliver outstanding results. Quality of our people is the foundation of our ability to serve our clients in the best way. From our newest staff members through senior staff, exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
                </div>
                <div>
                    Our team is a mix of motivated young professionals and experienced Chartered Accountants, Company Secretaries, Cost Accountants, Lawyers and CFAs who are specialised and has expertise in their respective areas . Expert professionals ensure that our clients receive prompt and personalized solutions at all times and also committed to add value and optimize benefits accruing to the clients.
                </div>
                <div>
                    Different together. At R J Gala & Associates, we‘re not all the same. And that‘s our greatest strength. It’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, deliver outstanding results and create better experiences for everyone.
                </div>
                <div>
                    Rahul J Gala is a young  Chartered Accountant and the founder of  R J Gala & Associates. He is a commerce graduate from HR College of Commerce and Economics (Mumbai University). He is certified in GST course held by Institute of Chartered Accountants of India and also availed professional training in the field of Securities & Financial Assets valuation conducted by a recognised institute.
                    <br />
                    In his professional lifespan, he has accumulated rich experience in several fields of professional services, different sectors and with diverse clients. He has considerable domain expertize in Direct & Indirect Taxation, Accounting, Audit and Advisory. His understanding of the intricacies of businesses enables him to provide clients with comprehensive, accurate and technology enabled solutions for their current and future business issues.  He has successfully represented various clients before tax authories on complex tax litigation matters.
                    <br />
                    Prior to founding R J Gala & Associates, he has headed the Accounting and Taxation department and also served in the capacity as a consultant in different professionally managed  corporate organisations. He has worked very closely with top companies and firms including Big Four on several occassions.
                    <br />
                    As a leader, he has always been a strong source of inspiration for the team and aspiring professionals within the organization. He is a strong believer of giving back to the society and hence is associated with various not-for-profit organizations. He strongly believes that exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
                </div>
            </div>
            <div className="flex pt-5 py-2 text-lg font-medium border-b sm:border-dashed justify-center">
                OUR TEAM OF PROFESSIONALS
            </div>
            <div className="flex">
                {
                    _.map(teamMembers, (member, index) => <Card key={ index } data={ member } buttonVisible={ false } /> )
                }
            </div>
        </div>
    );
};

export default Team;