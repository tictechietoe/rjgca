// src/components/ContactInfo.js
import React from 'react';

const ContactInfo = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6">CONTACT INFORMATION</h2>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="lg:w-1/2">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5687328262234!2d72.82348707690886!3d18.950474055897928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfbad044e6e3%3A0x5b2f8515f6b60f83!2sVadhan%20Niwas!5e0!3m2!1sen!2sin!4v1719416541890!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        className="border-0 rounded-lg shadow-lg"
                        allowFullScreen=""
                    />
                </div>
                <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-6 flex flex-col space-y-4">
                    <h3 className="text-xl font-bold">
                        R J GALA & ASSOCIATES
                    </h3>
                    <p className="text-gray-600">
                        CA CONSULTANTS
                    </p>
                    <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
                        <p className="font-bold">OFFICE</p>
                        <p>170, Sitaram Podar Marg, Marine Lines East, Fanas Wadi, Kalbadevi, Mumbai, Maharashtra 400002.</p>
                    </div>
                    <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
                        <p className="font-bold">CONTACT NUMBER</p>
                        <p>+91-123456789</p>
                    </div>
                    <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
                        <p className="font-bold">EMAIL</p>
                        <p>email1</p>
                        <p>email2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
