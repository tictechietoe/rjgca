// src/components/ContactInfo.js
import React from 'react';
import contact from '../assets/images/contact.jpg';
import BannerImage from '../components/BannerImage';
import QuerySheet from '../components/QuerySheet';
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
        <QuerySheet />
        <div className="flex flex-col max-w-md my-14 mx-auto">
          <h2 className="flex justify-center text-2xl mb-6">CONTACT INFORMATION</h2>
          <SocialMedia />
          <div className="flex flex-col gap-6 mt-6">
            <div className="bg-custom-primary text-white p-6 rounded-lg shadow-lg text-center">
              <p className="font-bold text-lg mb-2">OFFICE</p>
              <div className="mb-4 border-b border-white/30 pb-4">
                <div className="font-semibold">1. R J Gala & Associates</div>
                <div className="text-sm">Chartered Accountants</div>
                <div className="text-xs mt-1">
                  Office no.3, Ground floor, Vadhan Niwas, Fanaswadi, Off. Dadisheth Agiary Lane, Near Sitaram Poddar School, Landmark: Shiv sena office, Marine Lines E, Mumbai 400002
                </div>
              </div>
              <div>
                <div className="font-semibold">2. R J Gala & Associates</div>
                <div className="text-xs mt-1">
                  301, 3rd Floor, Shreeniwas Building, Bandu Gokhale Path, Off. Khadilkar road, Girgaon, Mumbai 400004
                </div>
              </div>
            </div>
            <div className="bg-custom-secondary text-white p-6 rounded-lg shadow-lg text-center">
              <p className="font-bold text-lg mb-2">CONTACT NUMBER</p>
              <div className="space-y-1">
                <a href="tel:+919372597268" className="block underline hover:text-gray-200 transition">+91 9372597268</a>
                <a href="tel:+919022573304" className="block underline hover:text-gray-200 transition">+91 9022573304</a>
              </div>
            </div>
            <div className="bg-custom-mark-color text-white p-6 rounded-lg shadow-lg text-center">
              <p className="font-bold text-lg mb-2">EMAIL</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=connect@rjgca.in"
                target="_blank"
                rel="noreferrer"
                className="block underline hover:text-gray-200 transition"
              >
                connect@rjgca.in
              </a>
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="text-2xl mb-4 text-center">
            <h2 className="flex justify-center text-2xl mb-6">ADDRESS</h2>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-1/2 w-full p-2">
              <iframe
                title="Google Maps Location 1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.571156061196!2d72.8262854!3d18.9503669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf803b0096dd%3A0x106d4bbcd2616d42!2sR%20J%20Gala%20%26%20Associates%2C%20Chartered%20Accountants%20%7C%20CA%20Firm%20in%20Mumbai!5e0!3m2!1sen!2sin!4v1747973975033!5m2!1sen!2sin"
                width="100%"
                height="400"
                className="border rounded-lg shadow-lg shadow-gray-500"
                allowFullScreen=""
              />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <iframe
                title="Google Maps Location 2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.489760666192!2d72.8218251!3d18.9539659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce10ad1a4df9%3A0x2c0f62f324283466!2sGokhale%20Path%2C%20Swami%20Samarth%20Nagar%2C%20Mangal%20Wadi%2C%20Girgaon%2C%20Mumbai%2C%20Maharashtra%20400004!5e0!3m2!1sen!2sin!4v1747974149210!5m2!1sen!2sin"
                width="100%"
                height="400"
                className="border rounded-lg shadow-lg shadow-gray-500"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
