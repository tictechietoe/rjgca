import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import _ from 'lodash'

const SLIDE_DURATION = 7000;
const TRANSITION_DURATION = 300;
const TYPING_SPEED = 100; // milliseconds per character
const START_TYPING_DELAY = 500;

const ImageCarousel = ({ images, textContent }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const delayPromise = new Promise(resolve => setTimeout(resolve, START_TYPING_DELAY));
  const slideIntervalRef = useRef(null); // To keep track of the slide interval

  // Function to reset the slide interval when manually changing slides
  const resetSlideInterval = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current); // Clear any existing interval
    }
    slideIntervalRef.current = setInterval(nextSlide, SLIDE_DURATION); // Start new interval
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setDisplayedText('');
    resetSlideInterval();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setDisplayedText('');
    resetSlideInterval();
  };

  useEffect(() => {
    slideIntervalRef.current = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(slideIntervalRef.current); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const text = textContent[currentIndex];
    let charIndex = 0;
    let typingIntervalId = '';

    delayPromise.then(() => {
      typingIntervalId = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingIntervalId);
        }
      }, TYPING_SPEED);
    });
  
    return () => clearInterval(typingIntervalId);
  }, [currentIndex, textContent]);

  return (
    <div className="w-full h-[75vh] relative overflow-hidden">
      <div 
        className="flex h-full transition-transform ease-in-out will-change-transform"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transitionDuration: `${TRANSITION_DURATION}ms`,
        }}
      >
        {
          _.map(images, (image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <img
                src={image}
                alt={`Carousel Image ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-8">
                <div className="text-white text-5xl font-bold">
                  {
                    index === currentIndex ? displayedText : textContent[index]
                  }
                  <span className="animate-blink">|</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 transition-all"
      >
        <FaChevronLeft size={ 50 } />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-95 transition-all"
      >
        <FaChevronRight size={ 50 } />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {
          _.map(images, (_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setDisplayedText('');
                resetSlideInterval();
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ImageCarousel;
