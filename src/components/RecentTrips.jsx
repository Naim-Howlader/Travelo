import React from 'react'


export default function RecentTrips({image,title,date}) {
  return (
    <>
     <div className="single-card col-span-12 md:col-span-6 lg:col-span-4 group">
        <div>
            <img src={image} alt="" className='rounded-lg md:h-[200px] lg:h-[250px]'/>
        </div>
        <div className='py-5'>
            <p className='text-[14px] text-gray-800 font-[500]'>{date}</p>
            <p className='text-[20px] font-[450] text-gray-800 group-hover:text-red-500 duration-300'>{title}</p>
        </div>
    </div>
    </>
  )
}
