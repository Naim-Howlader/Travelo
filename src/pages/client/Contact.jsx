import React from 'react'
import contactImage from '../../assets/images/contact-3.jpeg'
import { Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import SecondaryButton from '../../components/button/SecondaryButton';
import PrimaryButton from '../../components/button/PrimaryButton';

export default function Contact() {
  return (
    <div className='overflow-x-hidden'>
      <section id='contact'>
      <div id='destination-bg' className='pt-24 h-full '>
      <div class="h-[400px] lg:h-[450px]  flex justify-center items-center relative">
        <img src={contactImage} alt="Your Image" class="h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className='absolute top-1/2  transform  -translate-y-1/2 px-5'>
        <p className='text-[45px] lg:text-[100px] text-center nothing-font text-white'>Contact Us</p>
        <p className='text-center text-white text-base lg:text-xl'>Pixel perfect design with awesome contents</p>
        </div>
      </div>
      </div>
      <section id='contact-us' className='px-5 py-14 sm:px-20 lg:px-24 sm:py-20 lg:grid lg:grid-cols-12 lg:py-28'>
        <div className="form-section space-y-5 md:space-y-8 lg:col-span-7">
        <h2 className='text-2xl font-bold pb-5 lg:text-3xl'>Get in Touch</h2>
            <div className="w-full">
                <Textarea  color="gray" label="Enter Message"/>
            </div>
            <div className='space-y-5 md:flex md:space-y-0 md:gap-x-5'>
            <div className="w-full">
                <Input size="lg" label="Enter your name" color="gray"/>
            </div>
            <div className="w-full">
                <Input size="lg" label="Enter email address" color="gray"/>
            </div>
            </div>
            <div className="w-full">
                <Input size="lg" label="Enter subject" color="gray"/>
            </div>
            <div className='pt-5'>
                <PrimaryButton name='Submit' width='half'/>
            </div>
        </div>
        <div className="icon-section pt-10 pb-10 lg:col-span-5 lg:justify-self-center lg:align-self-center">
            <div className="all-icon space-y-5">
                <div className="single-icon flex items-center gap-x-5">
                    <ion-icon name="home-outline" style={{fontSize:"30px",color:"grey",}}></ion-icon>
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <p className='text-[16px] font-[500]'>Buttonwood, California.</p>
                        <p className='text-gray-600 text-[14px] font-[500]'>Rosemead, CA 91770</p>
                    </div>
                </div>
                <div className="single-icon flex items-center gap-x-5">
                    <ion-icon name="call-outline" style={{fontSize:"30px",color:"grey",}}></ion-icon>
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <p className='text-[16px] font-[500]'>+1 253 565 2365</p>
                        <p className='text-gray-600 text-[14px] font-[500]'>Mon to Fri 9am to 6pm</p>
                    </div>
                </div>
                <div className="single-icon flex items-center gap-x-5">
                    <ion-icon name="mail-outline" style={{fontSize:"30px",color:"grey",}}></ion-icon>
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <p className='text-[16px] font-[500]'>support@colorlib.com</p>
                        <p className='text-gray-600 text-[14px] font-[500]'>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      </section>
    </div>
  )
}
