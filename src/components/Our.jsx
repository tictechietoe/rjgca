// src/components/OurServices.js
import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import valuesData from '../data/valuesData';
import { TiTick } from "react-icons/ti";
import AnimatedSection from './AnimatedSection';
import vision from '../assets/images/vision.jpg';
import mission from '../assets/images/mission.jpg';
import values from '../assets/images/values.jpg';

const Our = () => {

  const navigate = useNavigate();

  const onMoreValuesClick = () => {
    navigate(`/values`);
  };

  const liTagLine = (content = "", quality = "", icon = <></>) => {
    return (
      <div key={quality} className="flex justify-between text-center">
        <div className="flex mx-10 pr-20">
          <div className="mr-10 text-custom-primary">{icon}</div>
          <div className="text-custom-primary">{content} <span className="text-custom-secondary">{quality}</span></div>
        </div>
        <div className="rounded text-custom-primary bg-custom-secondary my-2"><TiTick size={20} /></div>
      </div>
    );
  };

  const ourData = [
    {
      title: "VISION",
      rightDiv: <>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-extrabold text-custom-primary">
            OUR VISION
          </div>
          <div className="my-3 p-5 font-extrabold text-xl border-2 border-gray-200 text-custom-secondary">
            <p>To be amongst the top notch consultancy firms and be a preferred choice as Business Advisor.</p>
            <p className="text-custom-primary">Happy Clients, Happy us</p>
          </div>
        </div>
      </>,
      leftDiv: <>
        <div className="overflow-hidden h-80 mr-10">
          <img width="400px" alt="out vision" src={ vision } />
        </div>
      </>,
      dominant: 'right'
    },
    {
      title: "MISSION",
      leftDiv: <>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-extrabold text-custom-primary">
            OUR MISSION
          </div>
          <div className="my-3 p-5 font-extrabold text-xl border-2 border-gray-200 text-custom-secondary">
            <p>
              To deliver consistent, customized and workable solutions to our clients backed with the highest level of efficiency and technology. Work continuously to improve the quality of our services, investing in learning and development of our people and innovation.
            </p>
            <p className="text-custom-primary mt-2">To deliver out-of-the-box solutions that are technically sound, innovative and actionable.</p>
          </div>
        </div>
      </>,
      rightDiv: <>
        <div className="overflow-hidden h-80 mr-10">
          <img width="700px" alt="our mission" src={ mission } />
        </div>
      </>,
      dominant: 'left'
    },
    {
      title: "VALUES",
      rightDiv: <>
        <div className="flex flex-col items-start" style={ { width: '700px' } }>
          <div className="text-2xl font-extrabold text-custom-primary">
            OUR VALUES
          </div>
          <div className="my-3 p-5 font-extrabold text-xl border-2 border-gray-200 text-custom-secondary">
            {
              _.map(valuesData, value => {
                return liTagLine(
                  value.content,
                  value.quality,
                  value.icon
                );
              })
            }
          </div>
          <div className="pt-2 flex justify-center">
            <button className="bg-custom-primary text-white font-bold py-2 px-4 rounded-md" onClick={onMoreValuesClick}>
              More Details
            </button>
          </div>
        </div>
      </>,
      leftDiv: <>
        <div className="overflow-hidden h-80 mr-10">
          <img width="400px" alt="our values" src={ values } />
        </div>
      </>,
      dominant: 'right'
    }
  ];

  return (
    <div className="flex flex-col p-10">
      {
        _.map(ourData, (data, i) => {
          const {
            title = '',
            leftDiv = <></>,
            rightDiv = <></>,
            dominant = 'right'
          } = data;

          return (
            <AnimatedSection
              key={ title }
              leftDiv={ leftDiv }
              rightDiv={ rightDiv }
              dominant={ dominant }
            />
          );
        })
      }
    </div>
  );
};

export default Our;
