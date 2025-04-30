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
      desc: "We provide step-by-step guidance to nail this philosophy; connecting with your current and future customers. Together, we define your brand personality, strengthen positioning and stay ahead of competition.",
      desc2: "Whether in need of a brand launch or makeover, bring our expertise to take care of the following:",
      servicesList: [
        "Brand Strategy",
        "Brand Purpose",
        "Visual Identities",
        "Brand Marketing",
        "Audio-visual production"
      ],
      subtitle: "PIXEL AT SERVICE"
    },
    {
      image: "/assets/campaign.jpg",
      title: "Campaign Management",
      desc: "We create movement-specific content, including compelling images, videos, and persuasive ad copy. We provide regular performance reports, offering insights into key metrics that drive any campaign to success.",
      desc2: "We curate your online presence on a range of social media platforms by creating content, engaging with the audience, and developing trend-bound campaigns that boost your recognition across the digital networks.",
      servicesList: [

      ],
      subtitle: "SOCIAL MEDIA MANAGEMENT"
    },
    {
      image: "/assets/audio.jpg",
      title: "Audio-visual Production",
      desc: "Our team delivers visual content that is guided by compelling scripts and engaging plotlines. We capture crucial moments, apply professional editing techniques, and focus on authentic storytelling within condensed formats.",
      desc2: "From concept to final edit, we ensure your message is delivered with impact and clarity.",
      servicesList: [
        "TV & Radio Commercials",
        "Documentaries",
        "Animated Videos",
        "Highlight Videos"
      ],
      subtitle: "Our segments include but not limited to:"
    }
  ];

  const handleServiceClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@pixeleye.rw?subject=Partnership%20Inquiry&body=Hello,%20I'd%20like%20to%20discuss%20a%20potential%20partnership.";
  };

  return (
    <div className="overflow-x-hidden">
      <div className="p-6 space-y-48 sm:mt-30">
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
                <button className="font-Gothic font-semibold" onClick={handleEmailClick}>Email us for partnerships</button>
                <HiArrowLongRight fill="gold" className="text-4xl" />
              </div>
              <h1 className="border-b-2 border-gold w-60"></h1>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="w-full mb-24">
        {/* Custom styles */}
        <style jsx global>{`
          .hidden-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hidden-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
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

        {/* Scroll container with items */}
        <div className="flex space-x-6 p-20 pt-0 overflow-x-auto snap-x snap-mandatory hidden-scrollbar">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`service-item shrink-0 snap-center w-4/5 md:w-1/2 lg:w-2/5 cursor-pointer transition-all duration-300 ${index === activeIndex ? 'active shadow-lg scale-105' : ''
                }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={500}
                className="w-full"
                priority
              />

              {/* Hover overlay */}
              <div className="service-overlay">
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                  Click to view details
                </div>
              </div>

              {/* Selected indicator */}
              <div className="service-selected mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Animated border when hovered */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 border-2 border-gold" style={{
                  backgroundImage: 'linear-gradient(90deg, transparent 50%, gold 50%)',
                  backgroundSize: '10px 1px',
                  backgroundRepeat: 'repeat-x',
                  height: '100%',
                  animation: 'slide 20s linear infinite'
                }}></div>
              )}
            </div>
          ))}
        </div>

        {/* Service details section */}
        <div className="px-20 -mt-12">
          <div key={activeIndex} className="space-y-4 transition-all duration-500 leading-relaxed">
            <p className="text-left font-Caslon text-4xl">{services[activeIndex].title}</p>
            <h1 className="border-b-2 border-gold w-16"></h1>
            {/* <p className="font-Gothic text-md max-w-md">{services[activeIndex].description}</p> */}

            {/* Flex container for descriptions */}
            <div className="flex flex-col md:flex-row gap-16 mt-8">
              <div className="flex-1">
                <p className="font-Gothic text-md">{services[activeIndex].desc}</p>
              </div>
              <div className="flex-1 mt-32">
                <p className="font-Gothic text-md tracking-widest text-gold font-bold mb-4 uppercase">
                  {services[activeIndex].subtitle}
                </p>
                <p className="font-Gothic text-md">{services[activeIndex].desc2}</p>
                {/* Subtitle and services list */}
                <div className="mt-8">
                  <ul className="font-Gothic text-md space-y-3">
                    {services[activeIndex].servicesList.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold mr-2">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="left-0 w-full border-navBorder " />
    </div>
  );
};

export default ServicesPage;