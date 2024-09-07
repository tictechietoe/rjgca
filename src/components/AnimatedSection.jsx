import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ leftDiv, rightDiv, dominant }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex justify-between items-center relative p-5">
      <div
        className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-10 opacity-100' : '-translate-x-full opacity-0'} ${dominant === 'left' ? 'z-10' : 'z-0'}`}
      >
        { leftDiv }
      </div>
      <div
        className={` transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${dominant === 'right' ? 'z-10' : 'z-0'}`}
      >
        { rightDiv }
      </div>
    </div>
  );
};

export default AnimatedSection;