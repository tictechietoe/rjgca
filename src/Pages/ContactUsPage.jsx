// src/components/ContactInfo.js
import React from 'react';
import contact from '../assets/images/contact.jpg';
import BannerImage from '../components/BannerImage';
import QuerySheet from '../components/QuerySheet';
import Logo from '../components/Logo';
import SocialMedia from '../components/SocialMedia';

const ContactInfo = () => {
  return (
    <div>
      <BannerImage
        image={ contact }
        title="CONTACT US"
        fromText="Home"
        fromLink="/"
        toText="Contact"
      />
      <div className="flex">
        <QuerySheet />
        <div className="flex flex-col pt-16">
          <h2 className="flex justify-center text-2xl mb-10">CONTACT INFORMATION</h2>
          <SocialMedia />
          <div className="flex flex-col justify-center">
            <Logo />
          </div>
          <div className="flex flex-col justify-between p-10">
            <div className="bg-custom-primary text-white p-4 my-10 rounded-lg shadow-lg">
              <p className="font-bold">OFFICE</p>
              <p>170, Sitaram Podar Marg, Marine Lines East, Fanas Wadi, Kalbadevi, Mumbai, Maharashtra 400002.</p>
            </div>
            <div className="bg-custom-secondary text-white p-4 rounded-lg shadow-lg my-10">
              <p className="font-bold">CONTACT NUMBER</p>
              <div><a href="tel:9372597268">+91 9372597268</a></div>
              <div><a href="tel:9022573304">+91 9022573304</a></div>
            </div>
            <div className="bg-custom-mark-color text-white p-4 rounded-lg shadow-lg my-10">
              <p className="font-bold">EMAIL</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=connect@rjgca.in"
                target="_blank"
                rel="noreferrer"
              >
                connect@rjgca.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5687328262234!2d72.82348707690886!3d18.950474055897928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfbad044e6e3%3A0x5b2f8515f6b60f83!2sVadhan%20Niwas!5e0!3m2!1sen!2sin!4v1719416541890!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="border rounded-lg shadow-lg shadow-gray-500"
          allowFullScreen=""
        />
      </div>
    </div>
  );
};

export default ContactInfo;
