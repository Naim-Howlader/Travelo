import React, { useState, useEffect } from 'react';
import aboutImage from '../../assets/images/about-3.jpg'
import image1 from "../../assets/images/man-travelling-1.jpeg"
import image2 from "../../assets/images/man-travelling-2.jpeg"
import Video from '../../components/Video';
import IconSection from './../../components/IconSection';
import Testimonial from '../../components/Testimonial';
import RecentTrips from '../../components/RecentTrips';
import recentCard4 from "../../assets/images/recent-card-4.jpeg"
import recentCard2 from "../../assets/images/recent-card-2.jpeg"
import recentCard3 from "../../assets/images/recent-card-3.jpeg"
import Counter from '../../components/Counter';

export default function About() {
  return (
    <div className='overflow-x-hidden'>
      <section id='about' >
      <div id='about-bg' className='pt-24 h-full lg:h-screen'>
      <div class="h-[400px] lg:h-[85%] flex justify-center items-center relative">
        <img src={aboutImage} alt="Your Image" class="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className='absolute top-1/2  transform  -translate-y-1/2 px-5'>
        <p className='text-[45px] lg:text-[100px] text-center nothing-font text-white '>About Us</p>
        <p className='text-center text-white text-base lg:text-xl'>Pixel perfect design with awesome contents</p>
        </div>
      </div>
      </div>

      <div className="our-story">
        <h2 className='text-[34px] font-[500] px-5 py-10  lg:py-0 lg:pb-10 sm:px-20 lg:px-36'>Our Story</h2>
        <div className='px-5 text-gray-600 pb-14 sm:px-20 lg:px-10 lg:w-[900px] lg:mx-auto'>
          <p>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
          <p className='pt-7'>
          Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.
          </p>
        </div>
      </div>
      <div className="image-section px-5 sm:px-20">
        <div className='all-images grid grid-cols-12 gap-y-5 md:gap-x-10 lg:px-10 lg:w-[900px] lg:mx-auto'>
          <div className="single-image col-span-12 md:col-span-4" >
            <div data-aos="zoom-out-up" data-aos-duration="1500">
            <img src={image1} className='w-full  md:h-full rounded-md' alt="" />
            </div>
          </div>
          <div className="single-image col-span-12 md:col-span-8" >
            <div data-aos="zoom-out-up" data-aos-duration="1500">
            <img src={image2} className='w-full md:h-full rounded-md' alt=""  />
            </div>
          </div>
        </div>
      </div>
      <section id='counter' className='py-20 md:px-20 lg:px-0 lg:w-[900px] lg:mx-auto'>
        <div className='grid grid-cols-12 gap-y-5'>
          <div className="single-counter col-span-12 md:col-span-4">
          <Counter start={0} end={378} time={10000} title="Tour has done successfully"/>
          </div>
          <div className="single-counter col-span-12 md:col-span-4">
          <Counter start={0} end={30} time={10000} title="Yearly tour arrange"/>
          </div>
          <div className="single-counter col-span-12 md:col-span-4">
          <Counter start={0} end={2263} time={10000} title="Happy Clients"/>
          </div>
        </div>
      </section>





      <section id='video-section'>
          <Video/>
        </section>

        <section id='icon-section'>
          <IconSection/>
        </section>

        <section id='testimonial-section'>
          <Testimonial/>
        </section>

        <section id='recent-trips'>
          <div className='px-5 sm:px-20 pb-10 md:pb-20 lg:pb-32'>
            <div className="text">
                <h2 className='text-[28px] md:text-[34px] font-[500] text-center pb-10 md:pb-14'>Recent Trips</h2>
            </div>
            <div className="recent-cards grid grid-cols-12 gap-y-5 md:gap-x-7">
                <div data-aos="fade-up" data-aos-duration="1500" className='col-span-12 md:col-span-6 lg:col-span-4'>
                <RecentTrips image={recentCard2} title="Journeys Are Best Measured In New Friends" date="Oct 12, 2019"/>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className='col-span-12 md:col-span-6 lg:col-span-4'>
                <RecentTrips image={recentCard4} title="Journeys Are Best Measured In New Friends" date="Oct 12, 2019"/>
                </div>
                <div data-aos="fade-up" data-aos-duration="1500" className='col-span-12 md:col-span-6 lg:col-span-4'>
                <RecentTrips image={recentCard3} title="Journeys Are Best Measured In New Friends" date="Oct 12, 2019"/>
                </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  )
}
