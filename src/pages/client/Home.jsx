import React, { useState } from 'react'
import Hero from './home/Hero'
import TextInput from '../../components/form/TextInput';
import NumberInput from '../../components/form/NumberInput';
import SelectInput from '../../components/form/SelectInput';
import PrimaryButton from '../../components/button/PrimaryButton';
import SecondaryButton from '../../components/button/SecondaryButton';
import PopularDestinationCard from './home/PopularDestinationCard';
import cardImage1 from '../../assets/images/travel-card-1.jpeg'
import cardImage2 from '../../assets/images/travel-card-2.jpeg'
import cardImage3 from '../../assets/images/travel-card-3.jpeg'
import cardImage4 from '../../assets/images/travel-card-4.jpeg'
import Newsletter from './home/Newsletter';
import PopularPlaceCard from './home/PopularPlaceCard';
import placeCardImg1 from "../../assets/images/place-card-1.jpg"
import placeCardImg2 from "../../assets/images/place-card-2.jpg"
import placeCardImg3 from "../../assets/images/place-card-3.jpg"
import placeCardImg4 from "../../assets/images/place-card-4.jpg"
import placeCardImg5 from "../../assets/images/place-card-5.jpg"
import placeCardImg6 from "../../assets/images/place-card-6.jpg"
import Video from '../../components/Video';
import IconSection from './../../components/IconSection';
import Testimonial from '../../components/Testimonial';
import RecentTrips from '../../components/RecentTrips';
import recentCard4 from "../../assets/images/recent-card-4.jpeg"
import recentCard2 from "../../assets/images/recent-card-2.jpeg"
import recentCard3 from "../../assets/images/recent-card-3.jpeg"
import DestinationSearch from '../../components/DestinationSearch';


export default function Home() {
  const [options,setOptions] = useState(['Business','Family','Couple','Adventure']);
  return (
    <>
      <section id='home' className='pt-24'>
        <section id='hero-section'>
        <Hero/>
        </section>

        <section id='destination-search'>
          <DestinationSearch options={options}/>
        </section>

        <section id='popular-destination' className='px-5 sm:px-20 pb-14 lg:pb-24'>
          <div className="text-section text-center pt-14 pb-10 md:pt-24 lg:pt-28 md:pb-14 lg:pb-16">
            <h2 className='text-[26px] md:text-[34px] font-[500] '>Popular Destination</h2>
            <p className='pt-3 text-gray-600 font-[400]'>Suffered alteration in some form, by injected humour or good day<br></br> randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="popular-card grid grid-cols-12 gap-y-5 md:gap-x-5 lg:gap-7">
            <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in" data-aos-duration="1500">
              <PopularDestinationCard img={cardImage1} place='Italy' placeNumber='07'/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in" data-aos-duration="1500">
              <PopularDestinationCard img={cardImage2}  place='Brazil' placeNumber='04'/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in" data-aos-duration="1500">
              <PopularDestinationCard img={cardImage3}  place='Mexico' placeNumber='05'/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in" data-aos-duration="1500">
              <PopularDestinationCard img={cardImage4}  place='Nepal' placeNumber='08'/>
            </div>
          </div>
        </section>

        <section id='newsletter-section'>
          <Newsletter/>
        </section>

        <section id='popular-place' className='bg-[#F7FAFD]'>
          <div className='px-5 sm:px-20 pb-14 lg:pb-24'>
          <div className="text-section text-center pt-14 pb-10 md:pt-24 lg:pt-28 md:pb-14 lg:pb-16">
            <h2 className='text-[26px] md:text-[34px] font-[500] animate__animated animate__pulse animate__infinite'>Popular Places</h2>
            <p className='pt-3 text-gray-600 font-[400]'>Suffered alteration in some form, by injected humour or good day<br></br> randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="popular-card grid grid-cols-12 gap-y-5 md:gap-x-5 lg:gap-7">

          <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in-right" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg1} name="California" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in-right" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg2} name="Korola Megna" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in-right" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg3} name="London" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in-right" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg4} name="Miami Beach" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in-right" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg5} name="California" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4" data-aos="zoom-in-right" data-aos-duration="1500">
            <PopularPlaceCard img={placeCardImg6} name="Saintmartine Iceland" location="United State of America"/>
          </div>

          </div>
          <div className="button-section flex justify-center pt-14 pb-2 md:pt-14 floating-button">
            <SecondaryButton name="More Places"/>
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
    </>
  )
}
