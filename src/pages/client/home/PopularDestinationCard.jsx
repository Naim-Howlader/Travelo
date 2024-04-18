import React from 'react'

export default function PopularDestinationCard({img,place,placeNumber}) {
  return (
    <div>
      <div className='relative group bg-transparent'>
        <div className='transition-transform transform group-hover:-translate-y-5 duration-300 group-hover:cursor-default'>
        <div className="bg-transparent !important">
        <img src={img} alt=""  className='rounded-lg object-cover  ' />
        </div>
        <div className='bg-black absolute inset-0 opacity-20'></div>
        <div className='absolute bottom-5 left-5'>
          <div className="flex items-center gap-x-3">
          <p className='text-2xl text-white group-hover:text-[--secondary-color] duration-300 font-[500]'>{place}</p>
          <div className='bg-[--primary-color] group-hover:bg-[--secondary-color] duration-300 rounded-xl px-2 py-1'>
            <p className='text-[12px] text-white font-[600]'>{placeNumber} Places</p>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
