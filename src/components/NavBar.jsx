// src/components/Navbar.js
import React, { useState } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { RiTeamFill, RiBillFill } from "react-icons/ri";
import { FaHome, FaWpforms } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { LuMenuSquare } from "react-icons/lu";


const Navbar = () => {
  const [showNavbarBlock, setShowNavBarBlock] = useState(false);

  const handleNavbarClick = () => {
    setShowNavBarBlock(!showNavbarBlock);
  };

  const navbarContent = [
    {
      title: 'HOME',
      to: '/',
      icon: <FaHome size={20} />
    },
    {
      title: 'TEAM',
      to: '/team',
      icon: <RiTeamFill size={20} />
    },
    {
      title: 'SERVICES',
      to: '/services',
      icon: <MdSupportAgent size={20} />
    },
    {
      title: 'QUERY',
      to: '/query',
      icon: <FaWpforms size={20} />
    },
    {
      title: 'APPLY HERE',
      to: '/apply',
      icon: <RiBillFill size={20} />
    },
    {
      title: 'CONTACT US',
      to: '/contact',
      icon: <PiPhoneCallFill size={20} />
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
        key={title}
        className="text-gray-900 hover:bg-gray-600 px-5 py-1 rounded-sm hover:text-gray-200 transition delay-100 duration-100 ease-in-out"
      >
        <Link to={navigateUrl}>
          <div className="flex items-center py-2">
            <div className="mx-1">{icon}</div>
            <div className="mx-1 text-base">{title}</div>
          </div>
        </Link>
      </button>
    );
  };

  return (
    <nav className="sticky top-0 bg-gray-200 border-black border-t border-b z-20 navbar">
      <div className="px-4 py-0.5 hidden md:block lg:block">
        <div className="flex items-center">
          <div className="flex flex-1 font-medium text-sm flex-wrap">
            {
              _.map(navbarContent, content => navItem(content))
            }
          </div>
        </div>
      </div>
      <div className="py-0.5 md:hidden lg:hidden">
        <div className="flex items-center">
          <button
            className="my-2 mx-4 p-1 hover:bg-gray-600 hover:text-gray-200 justify-center"
            onClick={handleNavbarClick}
          >
            <LuMenuSquare size={40} />
          </button>
          <p className="text-lg font-medium">Navigation Button</p>
        </div>
        {
          showNavbarBlock &&
          <div className="border-t border-black pt-1 px-1 grid grid-cols-2">
            {
              _.map(navbarContent, content => navItem(content))
            }
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;