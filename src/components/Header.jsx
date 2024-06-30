// src/components/Header.js
import React from 'react';
import companyLogo from '../assets/companyLogo.png';

const Header = () => {
    return (
        <header className="flex justify-center my-5 px-5">
            <img width="100px" src={ companyLogo } />
            <h2 className="px-10 font-medium text-5xl text-sky-800">R J GALA & ASSOCIATES</h2>
        </header>
    );
};

export default Header;
