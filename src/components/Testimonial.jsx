import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import testimonialImage1 from "../assets/images/testimonial-1.jpeg"

import { Pagination } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>

      <div className='pb-20 lg:pb-28'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper py-20"
      >
        <SwiperSlide>
            <div className=''>
                <div className=''>
                <img src={testimonialImage1} className='w-[100px] h-[100px] rounded-full mx-auto' />
                </div>
                <p className='text-center px-5 sm:px-20 md:px-24 pt-10 pb-3 lg:w-[800px] lg:text-lg mx-auto font-[400]'>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                <p className='text-center lg:text-[16px] text-gray-700 font-[450]'>- Tom Mouse</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=''>
                <img src={testimonialImage1} className='w-[100px] h-[100px] rounded-full flex justify-center mx-auto'  />
                <p className='text-center px-5 sm:px-20 md:px-24 pt-10 pb-3 lg:w-[800px] lg:text-lg mx-auto font-[400]'>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                <p className='text-center lg:text-[16px] text-gray-700 font-[450]'>- Tom Mouse</p>
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}
