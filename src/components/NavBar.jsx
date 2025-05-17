// src/components/Navbar.js
import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { RiTeamFill, RiBillFill } from "react-icons/ri";
import { FaHome, FaWpforms, FaLink } from "react-icons/fa";
import { MdSupportAgent, MdClose } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import Logo from './Logo';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSections, setMobileExpandedSections] = useState({});
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsQuickLinksOpen(false);
        setMobileExpandedSections({});
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.mobile-menu-button')
      ) {
        setIsMobileMenuOpen(false);
        // Reset all expanded sections when closing mobile menu
        setIsQuickLinksOpen(false);
        setMobileExpandedSections({});
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Stable nav item width for Quick Links
  const navButtonClass =
    "flex items-center px-2 py-1 rounded-sm transition delay-100 duration-100 ease-in-out hover:shadow-xl text-custom-secondary font-medium text-sm hover:bg-custom-secondary hover:text-white bg-transparent focus:outline-none";

  const mobileNavButtonClass =
    "flex items-center px-4 py-3 w-full rounded-sm text-custom-secondary font-medium text-base hover:bg-custom-secondary hover:text-white transition-colors duration-200";

  const quickLinks = {
    title: "QUICK LINKS",
    icon: <FaLink size={16} />, // consistent icon size
    sections: [
      {
        title: "Income Tax",
        links: [
          { label: "E-payment of Taxes", href: "https://eportal.incometax.gov.in/iec/foservices/#/e-pay-tax-prelogin/user-details" },
          { label: "Income Tax Assessee Login", href: "https://eportal.incometax.gov.in/iec/foservices/#/login" },
          { label: "Verify PAN (from Name & DOB)", href: "https://incometaxindia.gov.in/Pages/tax-services/online-pan-verification.aspx" },
          { label: "Status of Tax Refund", href: "https://tin.tin.nsdl.com/oltas/refundstatuslogin.html" },
          { label: "ITR-V Receipt Status", href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/itrStatus" },
          { label: "Know Your AO", href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/knowYourAO" },
          { label: "Online New PAN Application/ Correction of PAN", href: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" },
          { label: "TAN Login", href: "https://www.tdscpc.gov.in/app/login.xhtml" },
          { label: "OLTAS Challan Status", href: "https://tin.tin.nsdl.com/oltas/index.html" },
          { label: "Verify Form 16A", href: "https://www.tdscpc.gov.in/app/tapn/tdstcscredit.xhtml" },
          { label: "Verify Form 16", href: "https://www.tdscpc.gov.in/app/tapn/tdstcscredit.xhtml" },
          { label: "Know TAN", href: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/knowYourTAN" },
          { label: "Online TAN Application", href: "https://tin.tin.nsdl.com/tan/form49B.html" },
          { label: "Online TAN Correction", href: "https://tin.tin.nsdl.com/tan/ChangeRequest.html" }
        ]
      },
      {
        title: "Services Tax / Excise",
        links: [
          { label: "E-payment of Service Tax/ Excise", href: "https://www.cbic.gov.in/" },
          { label: "Know Challan Status", href: "https://echallan.parivahan.gov.in/index/accused-challan" },
          { label: "Assessee Search (Code based)", href: "https://www.cbic.gov.in/entities/cbic-content-mst/NjU2MQ%3D%3D" },
          { label: "Assessee Login", href: "https://cbic-gst.gov.in/cbec-portal-ui/?sabs" }
        ]
      },
      {
        title: "Ministry of Corporate Affairs",
        links: [
          { label: "Verify Co. Master Data", href: "https://www.mca.gov.in/content/mca/global/en/mca/master-data/MDS.html" },
          { label: "Find CIN", href: "https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/findCinFinalSingleCom.html" },
          { label: "Check Co./LLP Name", href: "https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/company-llp-name-search.html" },
          { label: "View Public Documents", href: "http://www.mca.gov.in/mcafoportal/viewPublicDocumentsFilter.do" },
          { label: "Calculate Fee", href: "http://www.mca.gov.in/mcafoportal/enquireFeePreLogin.do" },
          { label: "Verify DIN-PAN Details of Directors", href: "https://www.mca.gov.in/content/mca/global/en/mca/fo-llp-services/verify-din-pan-details-of-director.html" }
        ]
      },
      {
        title: "Employees State Insurance",
        links: [
          { label: "Employer Login", href: "https://www.esic.in/ESICInsurance1/ESICInsurancePortal/Portal_Login.aspx" }
        ]
      },
      {
        title: "Provident Fund",
        links: [
          { label: "Employer Login", href: "https://unifiedportal-emp.epfindia.gov.in/epfo/?accesscheck=%2Femployer_home.php" },
          { label: "Know PF Claim Status", href: "https://passbook.epfindia.gov.in/MemberPassBook/login" },
          { label: "Know PF Balance", href: "https://passbook.epfindia.gov.in/MemberPassBook/Login.jsp" },
          { label: "Employee Registration", href: "https://unifiedportal-mem.epfindia.gov.in/memberinterface/" },
          { label: "Pensioners' Portal", href: "http://pensionersportal.gov.in/" }
        ]
      },
      {
        title: "Maharashtra VAT",
        links: [
          { label: "Dealer Login", href: "https://mahagst.gov.in/en/log-e-services" }
        ]
      },
      {
        title: "ICSI",
        links: [
          { label: "Member/ Student Login", href: "https://www.icsi.in/student/Login.aspx" },
          { label: "Search CS from Membership No.", href: "https://stimulate.icsi.edu/memTemp/MemberSearch" }
        ]
      },
      {
        title: "ICAI",
        links: [
          { label: "View CPE Hours", href: "http://www.cpeicai.org/" },
          { label: "Pay Membership Fee Online", href: "https://www.icai.org/post/now-pay-your-membership-fees-online" },
          { label: "Search CA from Membership No", href: "https://www.icai.org/post/list-of-members" },
          { label: "Download Firm Constitution Certificate", href: "https://www.icai.org/post/15755" }
        ]
      },
      {
        title: "ICAI (ICWAI)",
        links: [
          { label: "Member Login", href: "https://www.icaionlineregistration.org/Admin_Module/login.aspx" },
          { label: "Search Member from Membership No.", href: "https://eicmai.in/External/Utility/GeneralSearch/Member/General_Search.aspx" }
        ]
      },
      {
        title: "Property Registration",
        links: [
          { label: "E-Stamping - Verify Certificate", href: "https://www.shcilestamp.com/eStampIndia/VerifyCertificate.es?rDoAction=VerifyCert" },
          { label: "Property Registration (Delhi)", href: "https://doris.delhigovt.nic.in/" },
          { label: "Appointment for Property Registration (Delhi)", href: "https://dmnorthwest.delhi.gov.in/service/appointment-management-system-for-property-registration/" },
          { label: "Property Registration (Maharastra & Pune)", href: "https://efilingigr.maharashtra.gov.in/ereg/" }
        ]
      },
      {
        title: "Others",
        links: [
          { label: "Indian Courts", href: "https://ecourts.gov.in/ecourts_home/" },
          { label: "Online Registration Delhi Shops & Establishments", href: "https://labourcis.nic.in/" },
          { label: "E-SLA of Delhi Government", href: "http://esla.delhi.gov.in/" },
          { label: "Download Aadhar", href: "https://eaadhaar.uidai.gov.in/" },
          { label: "E-filing of Copyright Application", href: "http://copyright.gov.in/UserRegistration/frmLoginPage.aspx" },
          { label: "File online RTI Application", href: "https://services.india.gov.in/service/detail/file-your-rti-application-online-1" },
          { label: "Verify Birth/Death registered in Delhi", href: "https://mcdonline.nic.in/intramcd/web/admin/rbd/officer/rbdSearchCertificate" },
          { label: "Online Complaint to Delhi Police", href: "https://delhipolice.gov.in/" },
          { label: "GST", href: "https://www.gst.gov.in/" }
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
      className={`absolute right-full top-0 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100 ${visible ? '' : 'hidden'}`}
    >
      <div className="py-0.5">
        {section.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block px-3 py-1 text-sm text-gray-700 hover:bg-custom-secondary hover:text-white cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );

  // Mobile Submenu
  const MobileSubDropdownMenu = ({ section, visible }) => (
    <div
      className={`pl-4 bg-white ${visible ? 'block' : 'hidden'}`}
    >
      {section.links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-custom-secondary hover:text-white border-b border-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );

  // Wrapper for dropdown and subdropdown to handle mouse leave
  const DropdownWrapper = ({ visible, children }) => (
    <div
      onMouseLeave={() => {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        setIsDropdownOpen(false);
      }}
      style={{ position: 'absolute', top: '100%', left: 0, zIndex: 50 }}
    >
      {visible && children}
    </div>
  );

  const MainDropdownMenu = ({ visible }) => (
    <div
      className={`w-56 bg-white rounded-md shadow-lg border border-gray-100 ${visible ? '' : 'hidden'}`}
    >
      <div className="py-0.5 relative">
        {quickLinks.sections.map((section, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveSubDropdown(section.title)}
          >
            <div
              className={
                `block px-3 py-1 text-sm text-gray-700 cursor-pointer ` +
                (activeSubDropdown === section.title ? 'bg-custom-secondary text-white' : 'hover:bg-custom-secondary hover:text-white')
              }
            >
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
      <Link
        to={navigateUrl}
        key={title}
        className={navButtonClass}
        style={{margin: 0}}
        onMouseEnter={() => {
          // If hovering another navbar item, close Quick Links
          if (activeDropdown === 'quickLinks') {
            setActiveDropdown(null);
            setActiveSubDropdown(null);
            setIsDropdownOpen(false);
          }
        }}
      >
        <span className="mr-1">{icon}</span>
        <span>{title}</span>
      </Link>
    );
  };

  const mobileNavItem = (content = {}) => {
    const {
      title = '',
      to: navigateUrl = '/',
      icon = <></>
    } = content;
    return (
      <Link
        to={navigateUrl}
        key={title}
        className={mobileNavButtonClass}
        onClick={() => {
          setIsMobileMenuOpen(false);
          setIsQuickLinksOpen(false);
          setMobileExpandedSections({});
        }}
      >
        <span className="mr-3">{icon}</span>
        <span>{title}</span>
      </Link>
    );
  };

  // --- Quick Links Dropdown Logic ---
  const quickLinksParentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        quickLinksParentRef.current &&
        !quickLinksParentRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const quickLinksItem = () => {
    const handleClick = () => {
      setIsDropdownOpen(!isDropdownOpen);
      setActiveDropdown(isDropdownOpen ? null : 'quickLinks');
    };
    return (
      <div
        ref={quickLinksParentRef}
        style={{ position: 'relative', zIndex: 60, margin: 0, display: 'inline-block' }}
        onMouseEnter={() => setActiveDropdown('quickLinks')}
      >
        <div
          className={`${navButtonClass} cursor-pointer quick-links-button`}
          onClick={handleClick}
          tabIndex={0}
        >
          <span className="mr-1">{quickLinks.icon}</span>
          <span>{quickLinks.title}</span>
        </div>
        <DropdownWrapper visible={activeDropdown === 'quickLinks' || isDropdownOpen}>
          <MainDropdownMenu visible={activeDropdown === 'quickLinks' || isDropdownOpen} />
        </DropdownWrapper>
      </div>
    );
  };

  // Mobile Quick Links
  const mobileQuickLinksItem = () => {
    const toggleSection = (sectionTitle) => {
      setMobileExpandedSections(prev => ({
        ...prev,
        [sectionTitle]: !prev[sectionTitle]
      }));
    };

    return (
      <div className="w-full">
        <div 
          className={`${mobileNavButtonClass} justify-between bg-gray-50 quick-links-button`}
          onClick={() => {
            setIsQuickLinksOpen(!isQuickLinksOpen);
            setMobileExpandedSections({}); // Reset expanded sections
          }}
        >
          <div className="flex items-center">
            <span className="mr-3">{quickLinks.icon}</span>
            <span>{quickLinks.title}</span>
          </div>
          <span>{isQuickLinksOpen ? '−' : '+'}</span>
        </div>
        {isQuickLinksOpen && (
          <div className="bg-white">
            {quickLinks.sections.map((section, index) => (
              <div key={index} className="border-b border-gray-100">
                <div
                  className="px-4 py-2 flex justify-between items-center cursor-pointer bg-gray-100 hover:bg-gray-200"
                  onClick={() => toggleSection(section.title)}
                >
                  <span className="text-sm font-medium">{section.title}</span>
                  <span>{mobileExpandedSections[section.title] ? '−' : '+'}</span>
                </div>
                <MobileSubDropdownMenu
                  section={section}
                  visible={mobileExpandedSections[section.title]}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // --- Render ---
  return (
    <nav className="sticky top-0 z-50 bg-custom-nav-color drop-shadow-lg" style={{"--navbar-height": "60px"}}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex flex-1 font-medium text-sm flex-wrap gap-1">
            {_.map(navbarContent, content => (
              content.title === 'QUICK LINKS' ? quickLinksItem() : navItem(content)
            ))}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-custom-secondary focus:outline-none mobile-menu-button z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <MdClose size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden bg-white shadow-lg fixed top-[calc(var(--navbar-height,60px))] left-0 right-0 z-40 border-t border-gray-200 overflow-y-auto max-h-[calc(100vh-var(--navbar-height,60px))] px-2"
        >
          <div className="flex flex-col w-full py-2">
            {_.map(navbarContent, content => (
              content.title === 'QUICK LINKS' 
                ? mobileQuickLinksItem() 
                : mobileNavItem(content)
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
