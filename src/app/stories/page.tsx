import React from 'react';
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';

const stories = () => {
  return (
    <div>
      <div className="p-24 space-y-32 h-[430px] lg:h-[480px] relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/igisoro.jpg')" }}>
        <div className="absolute left-8 lg:left-24 flex flex-col text-left space-y-4">
          <p className="font-Caslon text-3xl lg:text-6xl w-full lg:w-[60vw]">
            Pixeleye brings you the latest updates from the world of creative wizards.
          </p>
          <p className="font-Gothic text-md lg:text-lg w-full lg:w-[60vw] mt-10">
            Each production is made possible by our brilliant team and collaborators.
          </p>
        </div>
      </div>


      <hr className="absolute left-0 w-full border-navBorder " />

      {/* ONE STORY */}

      <div className='p-24 space-y-16'>
        <div className='space-y-4'>
          <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <Image src="/assets/files.jpg" alt="eye" width={300} height={300} className='h-auto w-full object-cover' />
            </div>

            <div className="space-y-6 md:space-y-40 text-center md:text-left">
              <div className='space-y-3'>
                <p className="font-Gothic text-sm md:text-md">24.01.2022</p>
                <p className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]">
                  How Creative Companies Create Human-Centric Brands
                </p>
              </div>
              <div className="space-y-4">
                <Link href='/storydetails'>
                  <div className="flex space-x-4 items-center">
                    <button className="font-Gothic font-semibold">Read More</button>
                    <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                  </div>
                </Link>
                <h1 className="border-b-2 border-gold w-32"></h1>
              </div>
            </div>
          </div>
        </div>

        <hr className="left-0 w-full border-navBorder " />

        <div className='space-y-4'>
          <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <Image src="/assets/trend.jpg" alt="eye" width={300} height={300} className='h-auto w-full object-cover' />
            </div>

            <div className="space-y-6 md:space-y-40 text-center md:text-left">
              <div className='space-y-3'>
                <p className="font-Gothic text-sm md:text-md">24.01.2022</p>
                <p className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]">
                Welcome to Trends Tense! 🚀 Let’s get into this week’s hottest topics and must-see trends!
                </p>
              </div>
              <div className="space-y-4">
                <Link href='/storydetails'>
                  <div className="flex space-x-4 items-center">
                    <button className="font-Gothic font-semibold">Read More</button>
                    <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                  </div>
                </Link>
                <h1 className="border-b-2 border-gold w-32"></h1>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default stories;
