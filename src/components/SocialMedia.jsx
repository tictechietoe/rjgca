import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    url: 'http://www.linkedin.com/in/carahulgala',
    label: 'LinkedIn',
    color: '#0077b5'
  },
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/carahulgala/?igsh=MWprY2c2anhhZWg5eg%3D%3D',
    label: 'Instagram',
    color: '#E1306C'
  },
  {
    icon: <FaXTwitter />,
    url: 'https://x.com/carahulgala?t=vCarl6Hc3GeiB9Oy-msQbA&s=08',
    label: 'X',
    color: '#1DA1F2'
  },
  {
    icon: <FaWhatsapp />,
    url: 'https://wa.me/09022573304',
    label: 'WhatsApp',
    color: '#25D366'
  },
  {
    icon: <FaFacebookF />,
    url: 'https://facebook.com/',
    label: 'Facebook',
    color: '#4267B2'
  }
];

const SocialMedia = () => {
  return (
    <div className="hidden md:flex fixed top-1/3 right-0 z-50 flex-col items-center space-y-2">
      {socialLinks.map((item, idx) => (
        <a
          key={idx}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="group"
        >
          <div
            className="flex items-center justify-center w-12 h-12 mb-2 rounded-l-lg bg-white transition-all duration-200 shadow-2xl hover:bg-gray-100 group-hover:-translate-x-3 group-hover:scale-110 group-hover:shadow-3xl"
            style={{ color: item.color, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.18)' }}
          >
            <span className="text-2xl">{item.icon}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;