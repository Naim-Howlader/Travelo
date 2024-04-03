import React from 'react'
import aboutImage from '../../assets/images/about-3.jpg'

export default function About() {
  return (
    <div>
      <section id='about' className='pt-24 h-screen'>
      <div class="h-[80%] lg:h-[90%] flex justify-center items-center relative">
        <img src={aboutImage} alt="Your Image" class="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p className='text-[45px] lg:text-[100px] text-center nothing-font text-white'>About Us</p>
        <p className='text-center text-white text-base lg:text-xl'>Pixel perfect design with awesome contents</p>
        </div>
      </div>

      </section>
    </div>
  )
}
