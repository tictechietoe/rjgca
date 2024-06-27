// src/components/Footer.js
import React from 'react';
import _ from 'lodash';
import { CgWebsite } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {

    const disclaimerSection = <>
        <p>
            Your access to this website constitutes your agreement to be bound by all terms and conditions listed herein below. 
            If you do not agree to this, you may not access or otherwise use the website.
        </p>
        <br />
        <p>
            The material displayed on this website may be downloaded for non-commercial..
        </p>
        <button className="mt-3 rounded-full bg-white text-slate-500 px-2 py-1 font-medium">
            Read More
        </button>
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
                        <li key={ name } className="hover:ml-2 focus:ml-2 focus:shadow-lg transition-all duration-300 my-2 hover:font-medium">
                            <a href={ url } target="_blank">
                                { name }
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    </>;

    const linksData = [
        {
            symbol: <CgWebsite size={ 25 } />,
            value: <>www.rgjgala.com</>,
            key: "website"
        },
        {
            symbol: <FaPhoneAlt size={ 25 } />,
            value: <>
                <p>12345678</p>
                <p>Help us to help you !</p>
            </>,
            key: "contact"
        },
        {
            symbol: <MdOutlineMailOutline size={ 25 } />,
            value: <>
                <p>email 1</p>
                <p>email 2</p>
            </>,
            key: "email"
        }
    ];

    const contactUsSection = <>
        {
            _.map(linksData, link => {
                const {
                    symbol = <></>,
                    value = <></>,
                    key = ""
                } = link;

                return (
                    <div key={ key } className="flex justify-normal items-center p-2">
                        <div className="px-2">{ symbol }</div>
                        <div className="px-2">{ value }</div>
                    </div>
                );
            })
        }
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

    const sectionTitle = (section = {}) => {
        const {
            title = '',
            content = <></>
        } = section;

        return (
            <div key={ title } className="mx-3 flex-1 min-w-[400px] justify-center">
                <div className="flex justify-center py-2 text-2xl font-medium border-b sm:border-dashed">
                    { title }
                </div>
                <div className="text-md font-light my-3">
                    { content }
                </div>
            </div>
        );
    };

    return (
        <footer className="bg-gray-500 text-gray-200 m-5">
            <div className="flex flex-wrap mx-2">
                {
                    _.map(sectionDetails, section => sectionTitle(section))
                }
            </div>
            <div className="flex justify-center border-t border-b py-2">
                &copy; 2023 My React App. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
