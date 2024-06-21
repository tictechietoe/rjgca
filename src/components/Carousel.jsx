import React, { useState } from "react";
import _ from "lodash";
import {
    BsArrowLeftCircleFill,
    BsArrowRightCircleFill
} from "react-icons/bs";

import "../styles/Carousel.css";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
        <BsArrowLeftCircleFill
            onClick={ prevSlide }
            className="arrow arrow-left"
        />
        {
            _.map(data, (item, idx) => {
                return (
                    <img
                        src={ item.src }
                        alt={ item.alt }
                        key={ idx }
                        className={ slide === idx ? "slide" : "slide slide-hidden" }
                    />
                );
            })
        }
        <BsArrowRightCircleFill
            onClick={ nextSlide }
            className="arrow arrow-right"
        />
        <span className="indicators">
            {
                _.map(data, (_, idx) => {
                    return (
                        <button
                            key={ idx }
                            className={ slide === idx ? "indicator" : "indicator indicator-inactive" }
                            onClick={ () => setSlide(idx) }
                        />
                    );
                })
            }
        </span>
    </div>
  );
};

export default Carousel;