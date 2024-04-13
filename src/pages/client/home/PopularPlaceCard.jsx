import React from 'react'


export default function PopularPlaceCard({img,name,location}) {
  return (
    <>
      <div className='place-card rounded-lg group cursor-default'>
        <div className='group-hover:shadow-lg group-hover:transition group-hover:duration-300 group-hover:ease-linear'>
        <div className='card-image relative'>
            <img src={img} alt="" srcSet="" className='rounded-t-lg w-full' />
            <div className='absolute top-5 left-5'>
                <div className='bg-[--primary-color] group-hover:bg-[--secondary-color] duration-300 rounded-3xl px-5 py-2'>
                    <p className='text-[16px] text-white font-[600]'>$500</p>
                </div>
            </div>
        </div>
        <div className='card-text bg-white rounded-b-lg'>
            <div className='px-5 py-7'>
            <h2 className='text-[22px] group-hover:text-[--secondary-color] group-hover:duration-300' style={{fontWeight:"450"}}>{name}</h2>
            <p className='text-sm text-gray-600 pt-2 pb-1' style={{fontWeight:"450"}}>{location}</p>
            <div className='flex items-center justify-between'>
                <div>
                    <ion-icon name="star" style={{fontSize:'13px',color:'#FDAE5C'}}></ion-icon>
                    <ion-icon name="star" style={{fontSize:'13px',color:'#FDAE5C'}}></ion-icon>
                    <ion-icon name="star" style={{fontSize:'13px',color:'#FDAE5C'}}></ion-icon>
                    <ion-icon name="star" style={{fontSize:'13px',color:'#FDAE5C'}}></ion-icon>
                    <ion-icon name="star" style={{fontSize:'13px',color:'#FDAE5C'}}></ion-icon>
                    <span className='text-[13px] text-gray-600 pl-2' style={{fontWeight:"450"}}>(20 Reviews)</span>
                </div>
                <div className='flex flex-row items-center'>
                <ion-icon name="time-outline" style={{fontSize:"18px"}}></ion-icon>
                <span className='text-[12px] font-[600] text-gray-600 pl-1'>5 Days</span>
                </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}
