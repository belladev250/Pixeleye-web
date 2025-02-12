import React, { useEffect, useState } from 'react'
import { IoIosClose} from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";

import Image from 'next/image';
import Link from 'next/link';


const MainNavbar = () => {


const [isOpen ,setIsOpen] = useState(false);
const toogleMenu =()=>{

  setIsOpen(!isOpen)
}

const handleClick=()=>{
  setIsOpen(false)
}

  return (
    <div>
      <div className=" z-50 absolute top-0 left-0 right-0 mx-auto flex  justify-between p-8 lg:p-10 w-full">
        <Link href='/' onClick={handleClick}>
        <Image src="/assets/logo.svg" alt="logo" width={130} height={130} className='cursor-pointer flex-shrink-0'/>
        </Link>
        {isOpen ? (<Image  alt="" src="/assets/cross.svg"  width={30} height={30} className='cursor-pointer'  onClick={toogleMenu} aria-label="Open Menu" aria-expanded={isOpen}/>):
        <Image src='/assets/menu.svg' alt='menu' height={40} width={40} onClick={toogleMenu} className='cursor-pointer'/>}
      </div>

    {/*menu icons */}
    { isOpen && (
    
     <nav className='z-30 absolute flex items-center justify-center bg-menuBg  h-screen w-full '>

      <ul className=' text-4xl lg:text-5xl font-Caslon text-center  space-y-10  mt-4 lg:mt-24  '  >

        {['About','Portfolio','Services','Stories','Contact','Join Us'].map((item,index)=>(
          <li key={index} onClick={handleClick}>
              <Link href={`/${item.toLowerCase().replace(' ','')}`}>{item}</Link>
          </li>
        ))

        }

             
        <div className=" flex text-lg space-x-4 -ml-4 font-light cursor-pointer">
        
        <a href='https://www.instagram.com/pixeleye_rw/ ' target='_blank' className='border rounded-full p-2'><FaInstagram/> </a> 
        <a href="https://www.linkedin.com/company/pixeleye-ltd/" target='_blank' className='border rounded-full p-2' > <SlSocialLinkedin/> </a>
        <a href="https://x.com/PixelEye_rw" target='_blank' className='border rounded-full p-2' ><FaXTwitter/> </a>
        <a href="https://www.youtube.com/@pixeleye." target='_blank' className='border rounded-full p-2' ><SlSocialYoutube/></a>

        </div>

      </ul>

     
        
      </nav>

    
    )}



    </div>
  )
}

export default MainNavbar;
