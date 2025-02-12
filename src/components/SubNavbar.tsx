import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SubNavbar = () => {
  return (
    <div className=" mx-auto  flex justify-between p-6 w-full border-b -2 border-navBorder">
        
    <div className="flex items-center space-x-8">
      
        <Link href='/'>
        <Image src='/assets/logo.svg' alt="logo" width={130} height={130} className='flex-shrink-0' />
        </Link>
        <Link href='/about' className='font-WorkSans font-light text-lg text-white'>About</Link>
        <Link href='/portfolio' className='font-WorkSans font-light text-md text-white'>Portofolio</Link>
        <Link href='/services' className='font-WorkSans font-light text-md text-white'>Services</Link>
        <Link href='/stories' className='font-WorkSans font-light text-md text-white'>Stories</Link>
    </div>  

    <div className="space-x-6">
    <Link href='/joinus' className='font-WorkSans font-light text-md text-white'>Join Us </Link>
    <Link href='/contact'>
    <button className='font-WorkSans text-black font-semibold bg-gold px-4 py-2 text-md cursor-pointer'>
     Contact Us </button>
     </Link>
    </div> 


    </div>
  );
}

export default SubNavbar;
