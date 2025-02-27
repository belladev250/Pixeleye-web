import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowLongRight } from 'react-icons/hi2';

const Portfolio = () => {
  return (
    <div className='px-4 sm:px-8 md:px-12 lg:p-20 mt-10 md:mt-20 space-y-8 md:space-y-16'>
     
      <p className='text-gold text-xl sm:text-2xl font-Gothic'>PIXELEYE PROJECTS</p>

      {/* Full width project - RWANDAFOAM */}
      <div className="relative w-full mt-6 md:mt-10">
        <Image
          src="/assets/landscape.jpg"
          alt="RWANDAFOAM"
          width={700}
          height={700}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <p className="text-white text-lg sm:text-2xl font-Gothic">RWANDAFOAM</p>
            <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
          </div>
          <div>
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Re-establishing a reputable brand name</p>
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">for across all marketing platforms.</p>
          </div>
        </div>
      </div>
     
      {/* Two column layout - AEGIS and 250 PODCAST */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
        {/* AEGIS */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/assets/paper.jpg"
            alt="AEGIS"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <p className="text-white text-lg sm:text-2xl font-Gothic">AEGIS</p>
              <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
            </div>
            <div>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">The stories of</p>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">peace books</p>
            </div>
          </div>
        </div>

        {/* 250 PODCAST */}
        <div className="relative w-full lg:w-1/2">
          <Image 
            src="/assets/group.jpg" 
            alt="250 PODCAST" 
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <p className="text-white text-lg sm:text-2xl font-Gothic">250 PODCAST</p>
              <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
            </div>
            <div>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Campaign creative</p>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">direction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full width project - YOUTH CONNEKT AFRICA 2024 */}
      <div className="relative w-full mt-6 md:mt-10">
        <Image
          src="/assets/meeting.png"
          alt="YOUTH CONNEKT AFRICA 2024"
          width={700}
          height={700}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <p className="text-white text-lg sm:text-2xl font-Gothic">YOUTH CONNEKT AFRICA 2024</p>
            <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
          </div>
          <div>
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Re-establishing a reputable brand name</p>
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">for across all marketing platforms.</p>
          </div>
        </div>
      </div>

      {/* Two column layout - WTDC and JIBU */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
        {/* WTDC */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/assets/pk.jpg"
            alt="WTDC"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <p className="text-white text-lg sm:text-2xl font-Gothic">WTDC</p>
              <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
            </div>
            <div>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Campaign creative</p>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">direction</p>
            </div>
          </div>
        </div>

        {/* JIBU */}
        <div className="relative w-full lg:w-1/2">
          <Image 
            src="/assets/kr 1.jpg" 
            alt="JIBU" 
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <p className="text-white text-lg sm:text-2xl font-Gothic">JIBU</p>
              <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
            </div>
            <div>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Driving change through</p>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">communication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full width project - HANGA PITCHFEST */}
      <div className="relative w-full mt-6 md:mt-10">
        <Image
          src="/assets/winner.jpg"
          alt="HANGA PITCHFEST"
          width={1200}
          height={1200}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <p className="text-white text-lg sm:text-2xl font-Gothic">HANGA PITCHFEST</p>
            <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
          </div>
          <div>
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Re-establishing a reputable brand name</p>
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">for across all marketing platforms.</p>
          </div>
        </div>
      </div>

      {/* Two column layout - TRENDS TENSE and IMIVUGO SERIES */}
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
        {/* TRENDS TENSE */}
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/assets/trends.jpg"
            alt="TRENDS TENSE"
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <p className="text-white text-lg sm:text-2xl font-Gothic">TRENDS TENSE</p>
              <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
            </div>
            <div>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Campaign creative</p>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">direction</p>
            </div>
          </div>
        </div>

        {/* IMIVUGO SERIES */}
        <div className="relative w-full lg:w-1/2">
          <Image 
            src="/assets/imivugo.jpg" 
            alt="IMIVUGO SERIES" 
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <p className="text-white text-lg sm:text-2xl font-Gothic">IMIVUGO SERIES</p>
              <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
            </div>
            <div>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Driving change through</p>
              <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">communication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full width project - TEKANA ONLINE */}
      <div className="relative w-full mt-6 md:mt-10">
        <Image
          src="/assets/campain.jpg"
          alt="TEKANA ONLINE"
          width={1200}
          height={1200}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <p className="text-white text-lg sm:text-2xl font-Gothic">TEKANA ONLINE</p>
            <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl"/>
          </div>
          <div>
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">Re-establishing a reputable brand name</p>
            <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">for across all marketing platforms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;