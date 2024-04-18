import React,  { useState } from 'react'
import destiantionImage from '../../assets/images/destination-2.jpg'
import DestinationSearch from '../../components/DestinationSearch'
import PriceFilter from '../../components/PriceFilter';
import PopularPlaceCard from './home/PopularPlaceCard';
import placeCardImg1 from "../../assets/images/place-card-1.jpg"
import placeCardImg2 from "../../assets/images/place-card-2.jpg"
import placeCardImg3 from "../../assets/images/place-card-3.jpg"
import placeCardImg4 from "../../assets/images/place-card-4.jpg"
import placeCardImg5 from "../../assets/images/place-card-5.jpg"
import placeCardImg6 from "../../assets/images/place-card-6.jpg"
import SecondaryButton from '../../components/button/SecondaryButton';
import Newsletter from './home/Newsletter';
import RecentTrips from '../../components/RecentTrips';
import recentCard4 from "../../assets/images/recent-card-4.jpeg"
import recentCard2 from "../../assets/images/recent-card-2.jpeg"
import recentCard3 from "../../assets/images/recent-card-3.jpeg"

export default function Destination() {
  const [options,setOptions] = useState(['Business','Family','Couple','Adventure']);
  return (
    <div className='overflow-x-hidden'>
      

      <section id='destination'>
      <div id='destination-bg' className='pt-24 h-full '>
      <div className="h-[400px] lg:h-[450px]  flex justify-center items-center relative">
        <img src={destiantionImage} alt="Your Image" className="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className='absolute top-1/2  transform  -translate-y-1/2 px-5'>
        <p className='text-[45px] lg:text-[100px] text-center nothing-font text-white animate__animated animate__fadeInLeft'>Destination</p>
        <p className='text-center text-white text-base lg:text-xl'>Pixel perfect design with awesome contents</p>
        </div>
      </div>
      </div>
      </section>

      <section id='destination-search'>
        <DestinationSearch options={options}/>
      </section>

      <div className='bg-[#F7FAFD]'>
      <div className="price-popular-destination grid grid-cols-12 md:px-20 sm:pt-14">
      <section id='price-filter' className='col-span-12 lg:col-span-4 '>
        <PriceFilter/>
      </section>
      <section id='popular-place' className='bg-[#F7FAFD] col-span-12 lg:col-span-8'>
          <div className='px-5 sm:px-20 md:px-5 pb-14 lg:pb-24 md:pt-14'>
          <div className="popular-card grid grid-cols-12 gap-y-5 md:gap-x-5 lg:gap-7">

          <div className="col-span-12 md:col-span-6 lg:col-span-6" data-aos="zoom-out-up" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg1} name="California" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6" data-aos="zoom-out-up" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg2} name="Korola Megna" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6" data-aos="zoom-out-up" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg3} name="London" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6" data-aos="zoom-out-up" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg4} name="Miami Beach" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6" data-aos="zoom-out-up" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg5} name="California" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-6" data-aos="zoom-out-up" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg6} name="Saintmartine Iceland" location="United State of America"/>
          </div>

          </div>
          <div className="button-section flex justify-center pt-14 pb-2 md:pt-14 floating-button">
            <SecondaryButton name="More Places"/>
          </div>
          </div>
      </section>
      </div>
      </div>

      <section id='newsletter-section' className='pb-20 lg:pb-28'>
          <Newsletter/>
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


    </div>
  )
}
