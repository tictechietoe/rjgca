import React, { useState } from 'react';
import _ from 'lodash';

const HoveringCard = ({ title, content, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <div
            className={`p-5 mx-10 border rounded-lg transform transition-all duration-300 ease-in-out flex-1 ${
                isHovered ? ' transform scale-125 z-10 bg-white' : 'transform scale-95'
            }`}
            onMouseEnter={ onMouseEnter }
            onMouseLeave={ onMouseLeave }
        >
            <h2 className="flex text-xl font-bold pb-2 mb-2 justify-center border-b">{ title }</h2>
            <div>{ content }</div>
        </div>
    );
};

const HoverCards = ({ data }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="flex justify-center m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                _.map(data, (card, index) => (
                    <HoveringCard
                        key={ index }
                        title={ card.title }
                        content={ card.content }
                        isHovered={ hoveredIndex === index }
                        onMouseEnter={ () => handleMouseEnter(index) }
                        onMouseLeave={ handleMouseLeave }
                    />
                ))
            }
        </div>
    );
};

export default HoverCards;
