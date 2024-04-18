
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {
  let Links =[
    {name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Destination",link:"/destination"},
    {name:"Contact",link:"/contact"},
  ];
  let [open,setOpen]=useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
    setOpen(!open);
  };
  const navStyle =({isActive})=>{
    return{
      color : isActive ? 'black':'grey',
    }
  }

  return (
    <div className='shadow-md w-full fixed top-0 left-0 h-24 z-[100]'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className=' text-3xl cursor-pointer flex items-center  
    text-gray-800'>
      <span className='text-5xl text-red-500 mr-1 pt-2'>
      <ion-icon name="compass-outline"></ion-icon>
      </span>
      Travelo
    
    
    {/* <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div> */}




    <section className="ham-body md:hidden absolute right-8 top-6">
      <button
        className={`menu ${isOpened ? 'opened' : ''}`}
        onClick={handleClick}
        aria-expanded={isOpened}
        aria-label="Main Menu"
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
    </section>










    <ul className={`md:flex md:items-center glass-bg md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full text-center md:w-auto md:pl-20  transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`} >
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-sm font-[500] md:my-0 my-7'>
            <NavLink onClick={handleClick} to={link.link} style={navStyle} className='text-gray-800 hover:text-[#1EC6B6] duration-500'>{link.name}</NavLink>
          </li>
        ))
      }
    </ul>
    </div>

    <div className='hidden md:flex items-center'>
      <div className='flex items-center'>
        <div className=" text-red-500">
        <ion-icon name="call" ></ion-icon>
        </div>
        <div className='text-sm pl-2 pr-5'>10(256)-928 256</div>
      </div>
      <div className="h-8 border-l border-gray-500 "></div>
      <div className="icon-section flex gap-x-5 pl-5">
      <span className='text-xl text-gray-500 hover:text-red-500 duration-300'><ion-icon name="logo-instagram"></ion-icon></span>
      <span className='text-xl text-gray-500 hover:text-red-500 duration-300'><ion-icon name="logo-facebook"></ion-icon></span>
      <span className='text-xl text-gray-500 hover:text-red-500 duration-300'><ion-icon name="logo-google"></ion-icon></span>
      </div>
    </div>
    </div>
  </div>
  )
}
