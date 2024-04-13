import React from 'react'
import  { useState } from 'react';
import videoImage from "../assets/images/video-1.png"
import VideoModal from "./VideoModal";

export default function Video() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div>
        <div className='w-full h-screen'>
            <div className='relative h-[60%] md:h-[80%] lg:h-screen w-full'>
                <img src={videoImage} className='w-full h-full object-cover' alt="" srcSet="" />
                <div className='absolute inset-0 bg-blue-300 opacity-20'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                    <p className='text-[50px] md:text-[70px] lg:text-[80px] text-center nothing-font text-white pb-14' >Enjoy&nbsp;Video</p>

                    <div className='flex justify-center' onClick={openModal}>
                        <div className="ripple-container">
                            <ion-icon name="play-circle" className="" style={{fontSize:"100px",color:"#1EC6B6"}}></ion-icon>
                            <div className="circles">
                                <div className="circle1"></div>
                                <div className="circle2"></div>
                                <div className="circle3"></div>
                            </div>
                        </div>
                    </div>

                    <VideoModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}
