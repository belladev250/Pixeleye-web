import React from 'react';
import Image from "next/image";
import {  HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';

const join = () => {
  return (
    <div>
      <div className="p-24 space-y-32 h-[430px] lg:h-[480px] relative flex items-center justify-center">

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/assets/illustration.svg" alt="eye" width={400} height={400} />
        </div>

        <div className="absolute left-8 lg:left-24 flex flex-col text-left space-y-4">
          <p className="font-Caslon text-4xl lg:text-8xl w-full lg:w-[40vw]">
            Join Us
          </p>
          <p className="font-Gothic text-lg lg:text-xl w-full lg:w-[45vw] mt-10">
            Talent lives here. And that’s where you belong, too.
          </p>
        </div>
      </div>

      <hr className="absolute left-0 w-full border-navBorder " />


      <div className='space-y-16 p-8 lg:p-24'>

        {/* ROLE ONE */}

        <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <Image src="/assets/girl.jpg" alt="eye" width={300} height={300} className='h-auto w-full object-cover' />
          </div>

          <div className="space-y-6 md:space-y-40 text-center md:text-left">
            <div className='space-y-3'>
              <p className="font-Gothic text-sm md:text-md">Full time</p>
              <p className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]">Senior Designer</p>
            </div>
            <div className='flex space-x-12'>
              <div className="space-y-4">
                <Link href='/roledetails'>
                  <div className="flex space-x-4 items-center">
                    <button className="font-Gothic font-semibold">Read More</button>
                    <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                  </div>
                </Link>
                <h1 className="border-b-2 border-gold w-32"></h1>
              </div>
              <button className="bg-gold w-40 md:w-[180px] h-12 md:h-[50px] text-menuBg font-Gothic font-semibold">Apply</button>
            </div>
          </div>
        </div>

        <hr className="w-full border-navBorder p" />

        {/* ROLE TWO */}

        <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <Image src="/assets/boy.jpg" alt="eye" width={300} height={300} className='h-auto w-full object-cover' />
          </div>

          <div className="space-y-6 md:space-y-40 text-center md:text-left">
            <div className='space-y-3'>
              <p className="font-Gothic text-sm md:text-md">Internship</p>
              <p className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]">Design Director</p>
            </div>
            <div className='flex space-x-12'>
              <div className="space-y-4">
                <Link href='/roledetails'>
                  <div className="flex space-x-4 items-center">
                    <button className="font-Gothic font-semibold">Read More</button>
                    <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                  </div>
                </Link>
                <h1 className="border-b-2 border-gold w-32"></h1>
              </div>
              <button className="bg-gold w-40 md:w-[180px] h-12 md:h-[50px] text-menuBg font-Gothic font-semibold">Apply</button>
            </div>
          </div>
        </div>


      </div>





    </div>
  );
}

export default join;
