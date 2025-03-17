'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { HiArrowLongRight } from 'react-icons/hi2';

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      image: "/assets/branding.jpg",
      title: "Branding",
      description: "What draws consumers to you is far from a polished, fancy logo and a verbose profile."
    },
    {
      image: "/assets/campaign.jpg",
      title: "Campaign Management",
      description: "Starting with a strategic plan tailored to your objectives and target audience."
    },
    {
      image: "/assets/audio.jpg",
      title: "Audio-visual Production",
      description: "What draws consumers to you is far from a polished, fancy logo and a verbose profile."
    }
  ];

  // Handle click on service item
  const handleServiceClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="p-6 space-y-24 sm:mt-30">
        <div className="flex items-center justify-center mt-24">
          <div className="relative">
            <Image src="/assets/illustration.svg" alt="eye" width={400} height={400} />
          </div>
          <div className="flex flex-col left-0 absolute p-8 lg:p-20 space-y-4">
            <div className="font-Caslon text-3xl lg:text-6xl w-full lg:w-3/5 space-y-4">
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

      {/* Services section */}
      <div className="w-full px-4 py-10">
        {/* Custom styles */}
        <style jsx global>{`
          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 1; }
            100% { opacity: 0.6; }
          }
          
          .click-instruction {
            animation: pulse 2s infinite;
          }
          
          .service-item {
            position: relative;
            overflow: hidden;
          }
          
          .service-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .service-item:hover .service-overlay {
            opacity: 1;
          }
          
          .service-selected {
            position: absolute;
            top: 12px;
            right: 12px;
            background: gold;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: scale(0);
            transition: transform 0.3s ease;
          }
          
          .service-item.active .service-selected {
            transform: scale(1);
          }
        `}</style>

        {/* Service selection tabs */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex justify-center gap-4 mb-6">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`px-4 py-2 ${
                  index === activeIndex 
                    ? 'border-b-2 border-gold font-bold' 
                    : 'text-gray-600 hover:text-black'
                } transition-all duration-300 font-Gothic`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

      
        

        {/* Centered active service */}
        <div className="p-16 ">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Service image */}
            <div 
              className="service-item w-full lg:w-1/2 cursor-pointer transition-all duration-300 active shadow-lg"
              onMouseEnter={() => setHoveredIndex(activeIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                width={1920}
                height={1080}
                className="w-full h-[60vh] rounded-lg object-cover"
                priority
              />
              
              {/* Hover overlay */}
              <div className="service-overlay rounded-lg">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                  {services[activeIndex].title}
                </div>
              </div>
              
              {/* Selected indicator */}
              <div className="service-selected">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            {/* Service description */}
            <div className="w-full lg:w-1/2">
              <div key={activeIndex} className="space-y-4 transition-all duration-500">
                <p className="font-Caslon text-4xl">{services[activeIndex].title}</p>
                <h1 className="border-b-2 border-gold w-16"></h1>
                <p className="font-Gothic text-md">{services[activeIndex].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service thumbnails */}
        <div className=" mt-12">
          <div className="flex justify-center gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                onClick={() => handleServiceClick(index)}
                className={`w-20 h-20 cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'ring-2 ring-gold' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;