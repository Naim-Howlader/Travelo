import React from 'react'
import instagram1 from "../../../assets/images/place-card-1.jpg"
import instagram2 from "../../../assets/images/place-card-2.jpg"
import instagram3 from "../../../assets/images/place-card-3.jpg"
import instagram4 from "../../../assets/images/place-card-4.jpg"
import instagram5 from "../../../assets/images/place-card-5.jpg"
import instagram6 from "../../../assets/images/place-card-6.jpg"

export default function Footer() {
  return (
    <div className='bg-[#040E27] text-gray-400'>
      <footer>
        <div className='px-5 sm:px-10 md:px-14 lg:px-20 py-10 md:py-20  space-y-10 md:space-y-0 grid grid-cols-12'>
          <div className="section-1 col-span-12 md:col-span-6 lg:col-span-4">
            <div className="logo flex items-center">
              <span className='text-5xl text-red-500 mr-1'>
                <ion-icon name="compass-outline"></ion-icon>
              </span>
              <span className='text-2xl text-white'>Travelo</span>
            </div>
            <div className="text-section text-sm pt-3 pb-7">
              <ul className='list-none space-y-2'>
              <li>5th flora, 700/D kings road, green</li>
              <li>lane New York-1782</li>
              <li>+10 367 826 2567</li>
              <li>contact@carpenter.com</li>
              </ul>
            </div>
            <div className="social-media-icons space-x-4">
            <span className='text-xl hover:text-red-500 duration-300'><ion-icon name="logo-facebook"></ion-icon></span>
            <span className='text-xl hover:text-red-500 duration-300'><ion-icon name="logo-linkedin"></ion-icon></span>
            <span className='text-xl hover:text-red-500 duration-300'><ion-icon name="logo-twitter"></ion-icon></span>
            <span className='text-xl hover:text-red-500 duration-300'><ion-icon name="logo-instagram"></ion-icon></span>
            </div>
          </div>
          <div className="section-2 col-span-12 md:col-span-6 lg:col-span-2">
            <p className='text-white text-[20px]'>Company</p>
            <ul className='pt-5 space-y-3'>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Price</li>
              <li className='text-[15px] hover:text-red-500 duration-300 cursor-pointer'>Italy</li>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Canada</li>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Switzerland</li>
            </ul>
          </div>
          <div className="section-3 col-span-12 md:col-span-6 lg:col-span-3  md:pt-14 lg:pt-0">
          <p className='text-white text-[20px]'>Popular Destination</p>
            <div className='flex'>
            <ul className='pt-5 space-y-3'>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Indonesia</li>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Thailand</li>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Maxico</li>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>England</li>
            </ul>
            <ul className='pt-5 space-y-3 pl-32'>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Nepal</li>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Italy</li>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Canada</li>
              <li className='text-[14px] hover:text-red-500 duration-300 cursor-pointer'>Switzerland</li>
            </ul>
            </div>
          </div>
          <div className="section-4 col-span-12 md:col-span-6 lg:col-span-3 md:pt-14 lg:pt-0 lg:pl-14">
          <p className='text-white text-[20px]'>Instagram</p>
          <div className='all-images grid grid-cols-12 gap-x-5 gap-y-5 pt-10'>
            <div className="single-image col-span-4">
              <img src={instagram1} alt="" srcset="" className='rounded-lg h-[100px] sm:h-[150px] md:h-[100px] lg:h-[70px]'/>
            </div>
            <div className="single-image col-span-4">
              <img src={instagram2} alt="" srcset="" className='rounded-lg h-[100px] sm:h-[150px] md:h-[100px] lg:h-[70px]'/>
            </div>
            <div className="single-image col-span-4">
              <img src={instagram3} alt="" srcset="" className='rounded-lg h-[100px] sm:h-[150px] md:h-[100px] lg:h-[70px]'/>
            </div>
            <div className="single-image col-span-4">
              <img src={instagram4} alt="" srcset="" className='rounded-lg h-[100px] sm:h-[150px] md:h-[100px] lg:h-[70px]'/>
            </div>
            <div className="single-image col-span-4">
              <img src={instagram5} alt="" srcset="" className='rounded-lg h-[100px] sm:h-[150px] md:h-[100px] lg:h-[70px]'/>
            </div>
            <div className="single-image col-span-4">
              <img src={instagram6} alt="" srcset="" className='rounded-lg h-[100px] sm:h-[150px] md:h-[100px] lg:h-[70px]'/>
            </div>
          </div>
          </div>
        </div>
        <div className='px-5 sm:px-10'>
        <div className='h-[1px] w-full bg-gray-700'></div>
        </div>
        <div className='px-5 sm:px-10 md:px-14 lg:px-20 py-10'>
          
          <p className='text-[12px] text-gray-500 text-center'>
          Copyright ©2024 All rights reserved | This template is made by <span className='text-red-500'>Naim Howlader</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
