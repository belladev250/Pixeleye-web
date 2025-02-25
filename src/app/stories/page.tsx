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

      <div className='space-y-4'>
        <div className="flex flex-col md:flex-row px-6 w-full lg:p-24 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="flex justify-center md:justify-start">
            <Image src="/assets/files.jpg" alt="eye" width={300} height={300} className=' h-auto w-full object-cover flex-shrink-0' />
          </div>

          <div className="space-y-16 md:space-y-28 md:text-left">
            <div className='space-y-2'>
              <p className="font-Gothic text-base md:text-lg lg:text-xl">24.01.2022</p>
              <p className="font-Caslon text-xl md:text-3xl lg:text-4xl w-full lg:w-[40vw]">How To Organize Files In A Design Agency</p>
            </div>

            <div className="space-y-4 md:space-x-16 flex flex-col md:flex-row  md:items-start">
              <div className="space-y-4 flex flex-col md:items-start">
                <Link href='/roledetails'>
                  <div className="flex space-x-4">
                    <button className="font-Gothic font-semibold">Read More</button>
                    <HiArrowLongRight fill="gold" className="text-2xl md:text-4xl" />
                  </div>
                </Link>
                <h1 className="border-b-2 border-gold w-32"></h1>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-24 pr-24">
          <hr className="w-auto border-navBorder p" />
        </div>
      </div>

      {/* ANOTHER STORY */}

      <div className='space-y-4'>
        <div className="flex flex-col md:flex-row px-6 w-full lg:p-24 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="flex justify-center md:justify-start">
            <Image src="/assets/trend.jpg" alt="eye" width={300} height={300} className=' h-auto w-full object-cover flex-shrink-0' />
          </div>

          <div className="space-y-16 md:space-y-28 md:text-left">
            <div className='space-y-2'>
              <p className="font-Gothic text-base md:text-lg lg:text-xl">17.02.2025</p>
              <p className="font-Caslon text-xl md:text-3xl lg:text-4xl w-full lg:w-[40vw]">Welcome to Trends Tense! 🚀 Let’s get into this week’s hottest topics and must-see trends!</p>
            </div>

            <div className="space-y-4 md:space-x-16 flex flex-col md:flex-row  md:items-start">
              <div className="space-y-4 flex flex-col md:items-start">
                <Link href='/roledetails'>
                  <div className="flex space-x-4">
                    <button className="font-Gothic font-semibold">Read More</button>
                    <HiArrowLongRight fill="gold" className="text-2xl md:text-4xl" />
                  </div>
                </Link>
                <h1 className="border-b-2 border-gold w-32"></h1>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="pl-24 pr-24">
          <hr className="w-auto border-navBorder p" />
        </div> */}

        {/* PARTNERSHIPS */}

        <div className="p-24 space-y-16 h-[430px] lg:h-[480px] relative flex items-center justify-center bg-menuBg">

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image src="/assets/17svg.svg" alt="eye" width={400} height={400} />
          </div>

          <div className="absolute left-12 lg:left-24 flex flex-col text-left space-y-6">
            <p className="font-Caslon font-regular text-3xl font-regular lg:text-6xl w-full lg:w-[55vw]">
              We are looking for dynamic and creative minds to join our team.
            </p>
            <button className="bg-white w-[200px] h-[50px] font-semibold text-menuBg font-Gothic">Join us today</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default stories;
