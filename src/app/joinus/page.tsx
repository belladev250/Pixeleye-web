import React from 'react';
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
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


      <div className='space-y-20 p-8 lg:p-24'>
        <div className="flex flex-col space-y-4">
          <div className="font-Gothic text-lg lg:text-xl">
            <div className='space-y-6'>
              <p className="font-Caslon text-2xl lg:text-4xl text-gold">We're not hiring right now!</p>
              <p className="font-Gothic text-md md:text-md lg:text-md md:w-[80%] lg:w-[70%]">
                Thank you for your interest — while there are no current openings, we welcome passionate individuals and encourage you to check back or follow us on social media for future opportunities.
              </p>
            </div>
            <div className='pt-8'>
              <div className="space-y-4">
                <div className="flex space-x-4 items-center">
                  <a href="https://www.instagram.com/pixeleye_rw/" target="_blank">
                    <p className="relative font-regular">FOLLOW US</p>
                  </a>
                  <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                </div>
                <h1 className="border-b-2 border-gold w-40"></h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <p className="font-Gothic text-md lg:text-lg w-full lg:w-[50vw] mt-10">
            We're not hiring right now, but we welcome your interest and encourage you to check back soon or follow us on social media for
            future opportunities.
          </p> */}

      {/* <a href="https://www.instagram.com/pixeleye_rw/" target="_blank"><p className="relative text-gold font-semibold"> FOLLOW US</p></a> */}


      {/* ROLE ONE */}

      {/* <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <Image src="/assets/girl.jpg" alt="eye" width={300} height={300} className='h-auto w-full object-cover' />
          </div>

          <div className="space-y-6 md:space-y-40 text-center md:text-left">
            <div className='space-y-3'>
              <p className="font-Gothic text-sm md:text-md">Full-time</p>
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
        </div> */}

      {/* <hr className="w-full border-navBorder p" /> */}

      {/* ROLE TWO */}

      {/* <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
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
        </div> */}


    </div >
  );
}

export default join;
