// src/components/ServiceCard.js
import React from 'react';

const Card = ({ data, buttonVisible = true }) => {
    const {
        icon = <></>,
        title = '',
        content = ''
    } = data;

    return (
        <div className="max-w-xs mx-auto bg-white shadow-lg overflow-hidden md:max-w-2xl mt-10">
            <div className="md:flex">
                <div className="p-4 flex flex-col items-center border">
                    <div className="w-20 h-20 border-2 border-gray-500 rounded-full flex items-center justify-center">
                        { icon }
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg leading-tight font-medium text-center text-blue-900">
                            { title }
                        </h2>
                        <p className="mt-2 text-gray-600 text-center">
                            { content }
                        </p>
                    </div>
                    {
                        buttonVisible &&
                        <div className="mt-6">
                            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full">
                                Read More
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
