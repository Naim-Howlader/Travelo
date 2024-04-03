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


export default function Home() {
  const [options,setOptions] = useState(['Business','Family','Couple','Adventure']);
  return (
    <>
      <section id='home' className='pt-24'>
        <section id='hero-section'>
        <Hero/>
        </section>

        <section id='where-to-go' className='bg-[#040E27] py-14 px-5 sm:px-20 md:px-10 lg:px-10 lg:flex lg:justify-center lg:items-center'>
            <h2 className='text-2xl  lg:pr-5 font-semibold text-white pb-5'>Where You want to go?</h2>
              <div className='md:grid md:grid-cols-12 md:gap-x-5'>
              <div className='md:col-span-3'>
              <TextInput variant='dark' fieldName='destination' fieldId='destination' fieldPlaceholder='Where to go?'/>
              </div>
              <div className='md:col-span-3'>
              <NumberInput variant='dark' fieldName='date' fieldId='date' fieldPlaceholder='Date'/>
              </div>
              <div className='md:col-span-3'>
              <SelectInput variant='dark' fieldPlaceholder="Travel type" options={options}/>
              </div>
              <div className='mt-5 md:mt-0 md:col-span-3'>
              <SecondaryButton name='Search' baseColor='#FF4A52' hoverColor='#1EC6B6'/>
              </div>
              </div>
        </section> 

        <section id='popular-destination' className='px-5 sm:px-20 pb-14 lg:pb-24'>
          <div className="text-section text-center pt-14 pb-10 md:pt-24 lg:pt-28 md:pb-14 lg:pb-16">
            <h2 className='text-[26px] md:text-[34px] font-[500] '>Popular Destination</h2>
            <p className='pt-3 text-gray-600 font-[400]'>Suffered alteration in some form, by injected humour or good day<br></br> randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="popular-card grid grid-cols-12 gap-y-5 md:gap-x-5 lg:gap-7">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <PopularDestinationCard img={cardImage1} place='Italy' placeNumber='07'/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <PopularDestinationCard img={cardImage2}  place='Brazil' placeNumber='04'/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <PopularDestinationCard img={cardImage3}  place='Mexico' placeNumber='05'/>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
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
            <h2 className='text-[26px] md:text-[34px] font-[500] '>Popular Places</h2>
            <p className='pt-3 text-gray-600 font-[400]'>Suffered alteration in some form, by injected humour or good day<br></br> randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="popular-card grid grid-cols-12 gap-y-5 md:gap-x-5 lg:gap-7">

          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <PopularPlaceCard img={placeCardImg1} name="California" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <PopularPlaceCard img={placeCardImg2} name="Korola Megna" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <PopularPlaceCard img={placeCardImg3} name="London" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <PopularPlaceCard img={placeCardImg4} name="Miami Beach" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <PopularPlaceCard img={placeCardImg5} name="California" location="United State of America"/>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <PopularPlaceCard img={placeCardImg6} name="Saintmartine Iceland" location="United State of America"/>
          </div>

          </div>
          <div className="button-section flex justify-center pt-10 md:pt-14">
            <SecondaryButton name="More Places"/>
          </div>
          </div>
        </section>

      </section>
    </>
  )
}
