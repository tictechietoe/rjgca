// src/components/ValuesPage.js
import React from 'react';
import _ from 'lodash';
import valuesData from '../data/valuesData';

const ValuesPage = () => {

  return (
    <div className="mx-5 md:mx-40 lg:mx-60">
      <h2 className="flex py-2 text-xl font-medium border-b sm:border-dashed justify-center mt-5">
        OUR VALUES
      </h2>
      <div className="my-5">
        {
          _.map(valuesData, value => {
            const {
              icon = <></>,
              quality = "",
              detail = "",
              content = ""
            } = value;

            return (
              <div key={quality} className="my-5">
                <div className="flex justify-start p-2 items-center">
                  <div className="flex items-center justify-center bg-white z-10">
                    {icon}
                  </div>
                  <div className="ml-5">
                    {content}
                  </div>
                  <h2 className="text-lg leading-tight font-medium text-center ml-2">
                    {_.upperCase(quality)}
                  </h2>
                </div>
                <div className="mx-10">
                  {detail}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default ValuesPage;