// src/components/OurServices.js
import React from 'react';
import _ from 'lodash';
import { PiHandshakeBold } from "react-icons/pi";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";


const Our = () => {

    const liTagLine = (content = "", quality = "", icon = <></>) => {
        return (
            <div className="flex px-10 my-2 items-center justify-between">
                <li>{ content } <b>{ quality }</b></li>
                <div className="mx-10">{ icon }</div>
            </div>
        );
    };

    const values = [
        {
            content: "We value the",
            quality: "RELATIONS",
            icon: <PiHandshakeBold size={ 20 } />
        },
        {
            content: "We work with",
            quality: "INTEGRITY",
            icon: <MdOutlineSecurity size={ 20 } />
        },
        {
            content: "We value the",
            quality: "PEOPLE",
            icon: <BsPeopleFill size={ 20 } />
        },
        {
            content: "We add",
            quality: "VALUE",
            icon: <IoDiamondOutline size={ 20 } />
        },
        {
            content: "We act",
            quality: "RESPONSIBLY",
            icon: <FaAddressCard size={ 20 } />
        },
    ]

    const ourData = [
        {
            title: "OUR VISION",
            content: <>
                <p>
                    To be amongst the top notch consultancy firms and be a preferred choice as Business Advisor Happy Clients.
                </p>
                <br />
                <p>
                    Happy us
                </p>
            </>
        },
        {
            title: "OUR MISSION",
            content: <>
                <p>
                    To deliver consistent, customized and workable solutions to our clients backed with the highest level of efficiency and technology Work continuously to improve the quality of our services, investing in learning and development of our people and innovation.
                </p>
                <br />
                <p>
                    To deliver out-of-the-box solutions that are technically sound, innovative and actionable.
                </p>
            </>
        },
        {
            title: "OUR VALUES",
            content:  <>
                <ul className="list-disc pl-5">
                    {
                        _.map(values, value => {
                            return liTagLine(
                                value.content,
                                value.quality,
                                value.icon
                            );
                        })
                    }
                </ul>
                <div className="pt-2 flex justify-center">
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md">
                        More Details
                    </button>
                </div>
            </>
        }
    ];

    return (
        <div className="flex p-5">
            {
                _.map(ourData, (data, i) => {
                    const {
                        title = '',
                        content = ''
                    } = data;

                    return (
                        <div key={ title } className="p-5 flex-1">
                            <h2 className="flex justify-center font-medium text-3xl">
                                { title }
                            </h2>
                            <div className="my-3">
                                { content }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Our;
