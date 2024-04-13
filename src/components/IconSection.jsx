import React from 'react'

export default function IconSection() {
  return (
    <>
    <div className='px-5 md:px-14 lg:px-20 py-20 md:py-24'>
        <div className="icons grid grid-cols-12 gap-y-10 lg:gap-x-14">
            <div className="single-icon flex flex-col justify-center items-center col-span-12 md:col-span-6 lg:col-span-4">
            <ion-icon name="train-outline" style={{fontSize:"70px",color:"#FF4A52"}}></ion-icon>
            <p className='text-[22px] py-3'>Comfortable Journey</p>
            <p className='text-center text-sm text-gray-700'>A wonderful serenity has taken to the possession of my entire soul.</p>
            </div>
            <div className="single-icon flex flex-col justify-center items-center col-span-12 md:col-span-6 lg:col-span-4">
            <ion-icon name="restaurant-outline" style={{fontSize:"70px",color:"#FF4A52"}}></ion-icon>
            <p className='text-[22px] py-3'>Luxuries Hotel</p>
            <p className='text-center text-sm text-gray-700'>A wonderful serenity has taken to the possession of my entire soul.</p>
            </div>
            <div className="single-icon flex flex-col justify-center items-center col-span-12 md:col-span-6 lg:col-span-4">
            <ion-icon name="earth-outline" style={{fontSize:"70px",color:"#FF4A52"}}></ion-icon>
            <p className='text-[22px] py-3'>Travel Guide</p>
            <p className='text-center text-sm text-gray-700'>A wonderful serenity has taken to the possession of my entire soul.</p>
            </div>
        </div>
    </div> 
    </>
  )
}
