import React from 'react';
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

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


      <div className='space-y-4'>
        <div className="flex flex-col md:flex-row px-6 w-full lg:p-24 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="flex justify-center md:justify-start">
            <Image src="/assets/girl.jpg" alt="eye" width={300} height={300} className=' h-auto w-full object-cover flex-shrink-0' />
          </div>

          <div className="space-y-16 md:space-y-28 md:text-left">
            <div>
              <p className="font-Gothic text-base md:text-lg lg:text-xl">Full Time</p>
              <p className="font-Caslon text-xl md:text-3xl lg:text-4xl">Senior Designer</p>
            </div>

            <div className="space-y-4 md:space-x-16 flex flex-col md:flex-row  md:items-start">
              <div className="space-y-4 flex flex-col md:items-start">
                <div className="flex space-x-4">
                  <button className="font-Gothic font-semibold">Read More</button>
                  <HiArrowLongRight fill="gold" className="text-2xl md:text-4xl" />
                </div>
                <h1 className="border-b-2 border-gold w-32"></h1>
              </div>
              <button className="bg-gold w-40 md:w-[200px] h-12 md:h-[50px] text-menuBg font-Gothic font-semibold">Apply</button>
            </div>
          </div>
        </div>

        <div className="pl-24 pr-24">
        <hr className="w-auto border-navBorder p"  />
        </div>

       


        <div className="flex flex-col md:flex-row px-6 w-full lg:p-24 space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
          <div className="flex justify-center md:justify-start">
            <Image src="/assets/girl.jpg" alt="eye" width={300} height={300} className=' h-auto w-full object-cover flex-shrink-0' />
          </div>

          <div className="space-y-16 md:space-y-28 md:text-left">
            <div>
              <p className="font-Gothic text-base md:text-lg lg:text-xl">Full Time</p>
              <p className="font-Caslon text-xl md:text-3xl lg:text-4xl">Senior Designer</p>
            </div>

            <div className="space-y-4 md:space-x-16 flex flex-col md:flex-row  md:items-start">
              <div className="space-y-4 flex flex-col md:items-start">
                <div className="flex space-x-4">
                  <button className="font-Gothic font-semibold">Read More</button>
                  <HiArrowLongRight fill="gold" className="text-2xl md:text-4xl" />
                </div>
                <h1 className="border-b-2 border-gold w-32"></h1>
              </div>
              <button className="bg-gold w-40 md:w-[200px] h-12 md:h-[50px] text-menuBg font-Gothic font-semibold">Apply</button>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
}

export default join;
