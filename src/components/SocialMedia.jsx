import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

import {
  UilInstagramAlt,
  UilLinkedin,
  UilYoutube
} from '@iconscout/react-unicons'

const SocialMedia = () => {
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: 'linkedin',
      icon: <UilInstagramAlt />,
      to: '/'
    },
    {
      name: 'youtube',
      icon: <UilYoutube />,
      to: '/'
    },
    {
      name: 'instagram',
      icon: <UilLinkedin />,
      to: '/'
    }
  ];

  return (
    <div className="flex justify-around hover:cursor-pointer">
      {
        _.map(socialLinks, link => {
          return (
            <div
              onClick={ () => navigate(link.to) }
              className="m-5 hover:text-custom-secondary"
            >
              { link.icon }
            </div>
          );
        })
      }
    </div>
  );
};

export default SocialMedia;