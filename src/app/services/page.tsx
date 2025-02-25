import React from 'react';
import Image from 'next/image';
import { HiArrowLongRight } from 'react-icons/hi2';

const servicesPage = () => {

  return (
    <div>
      <div className="p-6 space-y-48 sm:mt-30">

        <div className="flex items-center justify-center mt-24">

          <div className=" relative">
            <Image src="/assets/illustration.svg" alt="eye" width={400} height={400} ></Image>
          </div>

          <div className="flex flex-col left-0 absolute p-8 lg:p-20 space-y-4">
            <div className="font-Caslon  text-3xl lg:text-6xl w-full lg:w-[60vw] space-y-4">
              <p>Pixel Eye stands ready to help you stand out. Discover a range of products and services we offer below.</p>
            </div>
            <div className="space-y-4 flex flex-col md:items-start">
              <div className="flex space-x-4">
                <button className="font-Gothic font-semibold">Email Us for Partnerships</button>
                <HiArrowLongRight fill="gold" className="text-2xl md:text-4xl" />
              </div>
              <h1 className="border-b-2 border-gold w-60"></h1>
            </div>

          </div>

        </div>

      </div>

      <div className="w-full overflow-x-auto">
        <div className="flex space-x-6 p-20 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {/* Image 1 */}
          <div className="shrink-0 snap-center w-[80vw] md:w-[50vw] lg:w-[40vw]">
            <Image
              src="/assets/branding.jpg"
              alt="Branding"
              width={800}
              height={500}
              className="w-full"
            />
            <div className='space-y-4 pt-4'>
              <p className="text-left mt-4 font-Caslon text-4xl">Branding</p>
              <p className="font-Gothic text-md w-[30vw]">What draws consumers to you is far from a polished, fancy logo and a verbose profile. </p>
            </div>

          </div>

          {/* Image 2 */}
          <div className="shrink-0 snap-center w-[80vw] md:w-[50vw] lg:w-[40vw]">
            <Image
              src="/assets/campaign.jpg"
              alt="Campaign Management"
              width={800}
              height={500}
              className="w-full"
            />
            <div className='space-y-4 pt-4'>
              <p className="text-left mt-4 font-Caslon text-4xl">Campaign Management</p>
              <p className="font-Gothic text-md w-[30vw]">Starting with a strategic plan tailored to your objectives and target audience.</p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="shrink-0 snap-center w-[80vw] md:w-[50vw] lg:w-[40vw]">
            <Image
              src="/assets/audio.jpg"
              alt="Caption 3"
              width={800}
              height={200}
              className="w-full"
            />
             <div className='space-y-4 pt-4'>
          <p className="text-left mt-4 font-Caslon text-4xl">Audio-visual Production</p>
          <p className="font-Gothic text-md w-[30vw]">What draws consumers to you is far from a polished, fancy logo and a verbose profile.</p>
          </div>
          </div>
        </div>
      </div>

    </div>



  );
}

export default servicesPage;
