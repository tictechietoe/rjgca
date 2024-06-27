// src/components/Navbar.js
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { RiTeamFill, RiBillFill } from "react-icons/ri";
import { FaHome, FaWpforms } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";


const Navbar = () => {

    const navbarContent = [
        {
            title: 'HOME',
            to: '/',
            icon: <FaHome size={ 20 }/>
        },
        {
            title: 'TEAM',
            to: '/team',
            icon: <RiTeamFill size={ 20 }/>
        },
        {
            title: 'SERVICES',
            to: '/services',
            icon: <MdSupportAgent size={ 20 }/>
        },
        {
            title: 'QUERY',
            to: '/query',
            icon: <FaWpforms size={ 20 }/>
        },
        {
            title: 'CONTACT US',
            to: '/contact',
            icon: <PiPhoneCallFill size={ 20 }/>
        },
        {
            title: 'APPLY HERE',
            to: '/apply',
            icon: <RiBillFill size={ 20 } />
        }
    ];

    const navItem = (content = {}) => {
        const {
            title = '',
            to: navigateUrl = '/',
            icon = <></>
        } = content;

        return (
            <button
                key={ title }
                className="text-gray-900 hover:bg-gray-600 px-5 py-1 rounded-sm hover:text-gray-200 transition delay-150 duration-100 ease-in-out"
            >
                <Link to={ navigateUrl }>
                    <div className="flex items-center py-2">
                        <div className="mx-1">{ icon }</div>
                        <div className="mx-1 text-base">{ title }</div>
                    </div>
                </Link>
            </button>
        );
    };

    return (
        <nav className="sticky top-0 bg-gray-200 border-black border-t border-b border-1 z-10">
            <div className="max-w-screen-xl px-4 py-0.5">
                <div className="flex items-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        {
                            _.map(navbarContent, content => navItem(content))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;