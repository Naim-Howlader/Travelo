import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import slider1 from '../../../assets/images/travel-1.jpeg'
import slider2 from '../../../assets/images/travel-2.jpeg'
import slider3 from '../../../assets/images/travel-3.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PrimaryButton from '../../../components/button/PrimaryButton';

export default function Hero() {
  return (
    <div>
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <div className='relative'>
                <img src={slider1} alt="" srcSet="" className='w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-screen'/>
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-[65px] lg:text-[100px] text-center nothing-font text-white'>Indonesia</p>
                    <p className='text-center text-white text-base lg:text-xl'>Pixel perfect design with awesome contents</p>
                    <div className='my-5 lg:my-10 flex justify-center'>
                    <PrimaryButton name="Explore Now" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img src={slider2} alt="" srcSet="" className='w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-screen'/>
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-[65px] lg:text-[100px] text-center nothing-font text-white'>Thailand</p>
                    <p className='text-center text-white text-base lg:text-xl'>Pixel perfect design with awesome contents</p>
                    <div className='my-5 lg:my-10 flex justify-center'>
                    <PrimaryButton name="Explore Now" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative'>
                <img src={slider3} alt="" srcSet="" className='w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-screen'/>
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-[65px] lg:text-[100px] text-center nothing-font text-white'>Maldives</p>
                    <p className='text-center text-white text-base lg:text-xl'>Pixel perfect design with awesome contents</p>
                    <div className='my-5 lg:my-10 flex justify-center'>
                    <PrimaryButton name="Explore Now" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}
