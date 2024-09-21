// src/components/Navbar.js
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { RiTeamFill, RiBillFill } from "react-icons/ri";
import { FaHome, FaWpforms } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import Logo from './Logo';


const Navbar = () => {

  const navbarContent = [
    {
      title: 'HOME',
      to: '/',
      icon: <FaHome size={20} />
    },
    {
      title: 'ABOUT US',
      to: '/aboutus',
      icon: <FaWpforms size={20} />
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
      title: 'CAREERS',
      to: '/careers',
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
      <button key={title} className="text-custom-secondary mx-2 rounded-sm transition delay-100 duration-100 ease-in-out hover:shadow-xl">
        <Link to={navigateUrl}>
          <div className="flex items-center p-1 hover:bg-custom-secondary hover:text-white">
            <div className="mx-1">{icon}</div>
            <div className="mx-1 hover:text-lg">{title}</div>
          </div>
        </Link>
      </button>
    );
  };

  return (
    <nav className="flex items-center justify-between sticky top-0 z-30 bg-custom-nav-color drop-shadow-lg">
      <Logo />
      <div className="flex flex-col items-center">
        <div className="flex flex-1 font-medium text-sm flex-wrap">
          {
            _.map(navbarContent, content => navItem(content))
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;