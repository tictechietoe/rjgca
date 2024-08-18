// src/components/Header.js
import React from 'react';
import companyLogo from '../assets/logo/companyLogo.png';

const Header = () => {
  return (
    <header className="flex justify-center my-3 px-5 items-center">
      <img width="75px" src={companyLogo} alt='company logo' />
      <h2 className="px-5 font-normal text-4xl text-sky-800 font-serif tracking-wide">R J GALA & ASSOCIATES</h2>
    </header>
  );
};

export default Header;
