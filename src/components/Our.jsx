// src/components/OurServices.js
import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import valuesData from '../data/valuesData';
import { TiTick } from "react-icons/ti";

const Our = () => {

    const navigate = useNavigate();

    const onMoreValuesClick = () => {
        navigate(`/values`);
    };

    const liTagLine = (content = "", quality = "", icon = <></>) => {
        return (
            <div key={ quality } className="flex justify-between align-center">
                <div className="flex my-2">
                    <div className="mr-4">{ icon }</div>
                    <div>{ content } <b>{ quality }</b></div>
                </div>
                <div className="rounded bg-green-500 text-white my-2"><TiTick size={ 20 } /></div>
            </div>
        );
    };

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
                {
                    _.map(valuesData, value => {
                        return liTagLine(
                            value.content,
                            value.quality,
                            value.icon
                        );
                    })
                }
                <div className="pt-2 flex justify-center">
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-md" onClick={ onMoreValuesClick }>
                        More Details
                    </button>
                </div>
            </>
        }
    ];

    return (
        <div className="flex p-5 flex-wrap grid grid-cols-1 md:grid-cols-3">
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
