import React, { useRef } from 'react';
import _ from 'lodash';
import { Autoplay, A11y, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Slider.css';
import Card from './Card';

const Slider = ({ data, isServices, slidesNumber = 1 }) => {
  const swiperRef = useRef(null);

  return (
    <section
      className='bg-white mt-2 hover:cursor-pointer'
      onMouseEnter={() => swiperRef.current.autoplay.stop()}
      onMouseLeave={() => swiperRef.current.autoplay.start()}
    >
      <Swiper
        modules={[Autoplay, A11y, Pagination, Navigation]}
        spaceBetween={30} // Adjust the spacing as needed
        slidesPerView={slidesNumber} // Show only one slide by default
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {
          _.map(data, (d, index) => {
            return (
              <SwiperSlide key={index} className="px-5">
                {
                  !isServices
                    ? <div className="mx-10 pb-10 ">{d}</div>
                    : <div className="flex mx-10 pb-10">
                      <Card data={d} />
                    </div>
                }
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  );
};

export default Slider;
