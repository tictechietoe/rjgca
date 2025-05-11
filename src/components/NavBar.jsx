// src/components/Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { RiTeamFill, RiBillFill } from "react-icons/ri";
import { FaHome, FaWpforms, FaLink } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import Logo from './Logo';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const subDropdownRef = useRef(null);
  const mainDropdownScrollRef = useRef(null);
  const subDropdownScrollRef = useRef(null);
  const [mainDropdownScrollTop, setMainDropdownScrollTop] = useState(0);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('.quick-links-button')
      ) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Stable nav item width for Quick Links
  const navButtonClass =
    "flex items-center px-2 py-1 rounded-sm transition delay-100 duration-100 ease-in-out hover:shadow-xl text-custom-secondary font-medium text-sm hover:bg-custom-secondary hover:text-white bg-transparent focus:outline-none";

  const quickLinks = {
    title: "QUICK LINKS",
    icon: <FaLink size={16} />, // consistent icon size
    sections: [
      {
        title: "Income Tax",
        links: [
          { label: "E-payment of Taxes", href: "#" },
          { label: "Income Tax Assessee Login", href: "#" },
          { label: "Verify PAN (from Name & DOB)", href: "#" },
          { label: "Status of Tax Refund", href: "#" },
          { label: "ITR-V Receipt Status", href: "#" },
          { label: "Know Your AO", href: "#" },
          { label: "Online New PAN Application/ Correction of PAN", href: "#" },
          { label: "TAN Login", href: "#" },
          { label: "OLTAS Challan Status", href: "#" },
          { label: "Verify Form 16A", href: "#" },
          { label: "Verify Form 16", href: "#" },
          { label: "Know TAN", href: "#" },
          { label: "Online TAN Application", href: "#" },
          { label: "Online TAN Correction", href: "#" }
        ]
      },
      {
        title: "Services Tax / Excise",
        links: [
          { label: "E-payment of Service Tax/ Excise", href: "#" },
          { label: "Know Challan Status", href: "#" },
          { label: "Assessee Search (Code based)", href: "#" },
          { label: "Assessee Login", href: "#" }
        ]
      },
      {
        title: "Ministry of Corporate Affairs",
        links: [
          { label: "Verify Co. Master Data", href: "#" },
          { label: "Find CIN", href: "#" },
          { label: "Check Co./LLP Name", href: "#" },
          { label: "View Public Documents", href: "#" },
          { label: "Verify DIN-PAN Details of Directors", href: "#" }
        ]
      },
      {
        title: "Employees State Insurance",
        links: [
          { label: "Employer Login", href: "#" },
          { label: "Know PF Claim Status", href: "#" },
          { label: "Employee Registration", href: "#" }
        ]
      },
      {
        title: "Provident Fund",
        links: [
          { label: "Employer Login", href: "#" },
          { label: "Know PF Balance", href: "#" },
          { label: "Pensioners' Portal", href: "#" }
        ]
      },
      {
        title: "Maharashtra VAT",
        links: [
          { label: "Dealer Login", href: "#" }
        ]
      },
      {
        title: "ICSI",
        links: [
          { label: "Member/ Student Login", href: "#" },
          { label: "Search CS from Membership No.", href: "#" }
        ]
      },
      {
        title: "ICAI",
        links: [
          { label: "View CPE Hours", href: "#" },
          { label: "Pay Membership Fee Online", href: "#" },
          { label: "Search CA from Membership No", href: "#" }
        ]
      },
      {
        title: "ICAI (ICWAI)",
        links: [
          { label: "Member Login", href: "#" },
          { label: "Search Member from Membership No.", href: "#" }
        ]
      },
      {
        title: "Property Registration",
        links: [
          { label: "E-Stamping - Verify Certificate", href: "#" },
          { label: "Property Registration (Delhi)", href: "#" },
          { label: "Appointment for Property Registration (Delhi)", href: "#" },
          { label: "Property Registration (Maharastra & Pune)", href: "#" }
        ]
      },
      {
        title: "Others",
        links: [
          { label: "Indian Courts", href: "#" },
          { label: "Online Registration Delhi Shops & Establishments", href: "#" },
          { label: "E-SLA of Delhi Government", href: "#" },
          { label: "Download Aadhar", href: "#" },
          { label: "E-filing of Copyright Application", href: "#" },
          { label: "File online RTI Application", href: "#" },
          { label: "Verify Birth/Death registered in Delhi", href: "#" },
          { label: "Online Complaint to Delhi Police", href: "#" },
          { label: "GST", href: "#" }
        ]
      }
    ]
  };

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
      title: 'QUICK LINKS',
      to: '/quicklinks',
      icon: <FaLink size={20} />
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

  // --- Dropdown Components ---
  // Submenu always appears to the right of the parent dropdown for now (for debug)
  const SubDropdownMenu = ({ section, visible }) => (
    <div
      ref={subDropdownRef}
      className={`absolute right-full top-0 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100 ${visible ? '' : 'hidden'}`}
      style={{ maxHeight: '240px', overflowY: 'auto' }}
    >
      <div ref={subDropdownScrollRef} className="py-0.5">
        {section.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block px-3 py-1 text-sm text-gray-700 hover:bg-custom-secondary hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    if (activeDropdown === 'quickLinks' && mainDropdownScrollRef.current) {
      mainDropdownScrollRef.current.scrollTop = mainDropdownScrollTop;
    }
  }, [activeDropdown, mainDropdownScrollTop]);

  const handleMainDropdownScroll = () => {
    if (mainDropdownScrollRef.current) {
      setMainDropdownScrollTop(mainDropdownScrollRef.current.scrollTop);
    }
  };

  const MainDropdownMenu = ({ visible }) => (
    <div
      ref={dropdownRef}
      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100 ${visible ? '' : 'hidden'}`}
      style={{ maxHeight: '240px', overflowY: 'auto' }}
      onMouseEnter={() => setActiveDropdown('quickLinks')}
      onMouseLeave={() => {
        setTimeout(() => {
          if (!dropdownRef.current?.matches(':hover')) {
            setActiveDropdown(null);
            setActiveSubDropdown(null);
          }
        }, 200);
      }}
    >
      <div
        ref={mainDropdownScrollRef}
        className="py-0.5 relative"
        onScroll={handleMainDropdownScroll}
        style={{ maxHeight: '240px', overflowY: 'auto' }}
      >
        {quickLinks.sections.map((section, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveSubDropdown(section.title)}
            onMouseLeave={() => {
              setTimeout(() => {
                if (!dropdownRef.current?.matches(':hover') && !subDropdownRef.current?.matches(':hover')) {
                  setActiveSubDropdown(null);
                }
              }, 200);
            }}
          >
            <div className="block px-3 py-1 text-sm text-gray-700 hover:bg-custom-secondary hover:text-white cursor-pointer">
              {section.title}
            </div>
            <SubDropdownMenu section={section} visible={activeSubDropdown === section.title} />
          </div>
        ))}
      </div>
    </div>
  );

  // --- Nav Item Renderers ---
  const navItem = (content = {}) => {
    const {
      title = '',
      to: navigateUrl = '/',
      icon = <></>
    } = content;
    return (
      <Link to={navigateUrl} key={title} className={navButtonClass} style={{margin: 0}}>
        <span className="mr-1">{icon}</span>
        <span>{title}</span>
      </Link>
    );
  };

  const quickLinksItem = () => {
    const handleClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
      setActiveDropdown(isDropdownOpen ? null : 'quickLinks');
    };
    return (
      <div
        className={navButtonClass}
        style={{ position: 'relative', zIndex: 60, margin: 0 }}
        onMouseEnter={() => setActiveDropdown('quickLinks')}
        onMouseLeave={() => {
          if (!isDropdownOpen) {
            setTimeout(() => {
              if (!dropdownRef.current?.matches(':hover')) {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }
            }, 200);
          }
        }}
        onClick={handleClick}
        tabIndex={0}
      >
        <span className="mr-1">{quickLinks.icon}</span>
        <span>{quickLinks.title}</span>
        <MainDropdownMenu visible={activeDropdown === 'quickLinks' || isDropdownOpen} />
      </div>
    );
  };

  // --- Render ---
  return (
    <nav className="flex items-center justify-between sticky top-0 z-30 bg-custom-nav-color drop-shadow-lg">
      <Logo />
      <div className="flex flex-col items-center">
        <div className="flex flex-1 font-medium text-sm flex-wrap gap-1">
          {_.map(navbarContent, content => (
            content.title === 'QUICK LINKS' ? quickLinksItem() : navItem(content)
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;