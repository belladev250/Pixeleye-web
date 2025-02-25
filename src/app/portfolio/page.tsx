import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowLongRight } from 'react-icons/hi2';

const portfolio = () => {
  return (
    <div className='p-20 mt-20 space-y-16 '>
     
  <p className='text-gold font-Gothic'>Pixeleye Projects </p>

  <div className="relative w-full mt-10 text-xl ">
  <Image
      src="/assets/landscape.jpg"
      alt=""
      width={700}
      height={700}
      className="w-full h-auto object-cover"
    />
 <div className=" absolute inset-0  bg-black opacity-50 "></div>

<div className=" absolute bottom-0 lg:bottom-8  p-4 lg:p-8 space-y-4">
 <div className="flex space-x-4">
  <p className=" text-white text-2xl md:text-2xl font-Gothic">RWANDAFOAM </p>
   <HiArrowLongRight fill="gold" className="text-4xl"/>
   </div>
   <div>
   <p className="text-white text-3xl md:text-4xl font-Caslon ">Re-establishing a reputable brand name </p>
   <p className="text-white text-3xl md:text-4xl font-Caslon "> for across all marketing platforms.</p>
   </div>

   </div>

  </div>
     
  <div className="flex flex-col lg:flex-row   space-y-8 lg:space-y-0 lg:space-x-12">

{/* pic 1 */}
  <div className="relative w-full lg:w-1/2">
  <Image
      src="/assets/flag.jpg"
      alt=""
   
      width={500}
      height={500}
      className="w-full h-auto object-cover"
    />
 <div className=" absolute inset-0  bg-black opacity-50 "></div>

<div className=" absolute bottom-0 lg:bottom-8  p-4 lg:p-8 space-y-4">
 <div className="flex space-x-4">
  <p className=" text-white text-2xl md:text-2xl font-Gothic">YOUTHCONNEKT AFRICA 2024 </p>
   <HiArrowLongRight fill="gold" className="text-4xl"/>
   </div>
   <div>
   <p className="text-white text-3xl md:text-4xl font-Caslon ">Campaign creative </p>
   <p className="text-white text-3xl md:text-4xl font-Caslon "> direction</p>
   </div>

   </div>

  </div>

{/* pic 2 */}
  <div className="relative w-full lg:w-1/2">
  <Image src="/assets/group.jpg" alt="" 
      width={500}
      height={500}
      className="w-full h-auto object-cover"
    />
  <div className=" absolute inset-0  bg-black opacity-50 "></div>

  <div className=" absolute bottom-8 p-4 lg:p-8 space-y-4">
 <div className="flex space-x-4">
  <p className=" text-white text-2xl md:text-2xl font-Gothic">250 PODCAST </p>
   <HiArrowLongRight fill="gold" className="text-4xl"/>
   </div>
   <div>
   <p className="text-white text-3xl md:text-4xl font-Caslon ">Campaign creative </p>
   <p className="text-white text-3xl md:text-4xl font-Caslon "> direction</p>
   </div>

   </div>

   </div>

  </div>
    </div>
  );
}

export default portfolio;
