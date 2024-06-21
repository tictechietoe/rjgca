// src/components/Footer.js
import React from 'react';
import _ from 'lodash';

const Footer = () => {

    // const disclaimerSection = <>

    // </>;

    const sectionDetails = [
        {
            title: 'DISCLAIMER',
            content: <></>
        },
        {
            title: 'USEFUL LINKS',
            content: <></>
        },
        {
            title: 'CONTACT US',
            content: <></>
        }
    ];

    const sectionTitle = (section = {}, id = '') => {
        const {
            title = ''
        } = section;

        return (
            <div
                key={ id }
                className="my-2 mx-3 text-lg font-medium border-b sm:border-dashed"
            >
                { title }
            </div>
        );
    };

    return (
        <footer className="bg-gray-500 text-gray-200 m-2">
            <div className="flex justify-around">
                {
                    _.map(sectionDetails, (section, id) => sectionTitle(section, id))
                }
            </div>
            <div className="flex justify-center border-t border-b">
                &copy; 2023 My React App. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
