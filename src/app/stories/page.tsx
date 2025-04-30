'use client'
import React, { useEffect } from 'react';
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';
import Lenis from '@studio-freight/lenis';
import { motion } from "framer-motion";

const Stories = () => {
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageScale = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.9, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Fixed line animation that respects the w-32 width
  const lineAnimation = {
    hidden: { width: 0 },
    visible: { 
      width: "8rem", // w-32 is 8rem
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonHover = {
    hover: {
      x: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <motion.div 
        className="p-24 space-y-32 h-[430px] lg:h-[480px] relative flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/assets/igisoro.jpg')" }}
        variants={fadeIn}
      >
        <motion.div 
          className="absolute left-8 lg:left-24 flex flex-col text-left space-y-4"
          variants={staggerChildren}
        >
          <motion.p 
            className="font-Caslon text-3xl lg:text-6xl w-full lg:w-[60vw]"
            variants={fadeInUp}
          >
            Pixeleye brings you the latest updates from the world of creative wizards.
          </motion.p>
          <motion.p 
            className="font-Gothic text-md lg:text-lg w-full lg:w-[60vw] mt-10"
            variants={fadeInUp}
          >
            Each production is made possible by our brilliant team and collaborators.
          </motion.p>
        </motion.div>
      </motion.div>
      
      <motion.hr 
        className="absolute left-0 w-full border-navBorder"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* ONE STORY */}
      <div className='p-8 lg:p-24 space-y-16'>
        <motion.div 
          className='space-y-4'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
            <motion.div 
              className="w-full md:w-1/3 flex justify-center md:justify-start"
              variants={imageScale}
            >
              <Image 
                src="/assets/files.jpg" 
                alt="eye" 
                width={300} 
                height={300} 
                className='h-auto w-full object-cover' 
              />
            </motion.div>
            
            <motion.div 
              className="space-y-6 md:space-y-40 text-center md:text-left"
              variants={staggerChildren}
            >
              <motion.div 
                className='space-y-3'
                variants={staggerChildren}
              >
                <motion.p 
                  className="font-Gothic text-sm md:text-md"
                  variants={fadeInUp}
                >
                  24.01.2022
                </motion.p>
                <motion.p 
                  className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]"
                  variants={fadeInUp}
                >
                  Common Logo Mistakes That Clients Make
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                variants={staggerChildren}
              >
                <Link href='/storydetails'>
                  <motion.div 
                    className="flex space-x-4 items-center"
                    variants={fadeInUp}
                    whileHover="hover"
                  >
                    <motion.button className="font-Gothic font-semibold">
                      Read More
                    </motion.button>
                    <motion.div variants={buttonHover}>
                      <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                    </motion.div>
                  </motion.div>
                </Link>
                <motion.div 
                  className="border-b-2 border-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }} // w-32 equivalent
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.hr 
          className="left-0 w-full border-navBorder"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        <motion.div 
          className='space-y-4'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
            <motion.div 
              className="w-full md:w-1/3 flex justify-center md:justify-start"
              variants={imageScale}
            >
              <Image 
                src="/assets/trend.jpg" 
                alt="eye" 
                width={300} 
                height={300} 
                className='h-auto w-full object-cover' 
              />
            </motion.div>
            
            <motion.div 
              className="space-y-6 md:space-y-40 text-center md:text-left"
              variants={staggerChildren}
            >
              <motion.div 
                className='space-y-3'
                variants={staggerChildren}
              >
                <motion.p 
                  className="font-Gothic text-sm md:text-md"
                  variants={fadeInUp}
                >
                  24.01.2022
                </motion.p>
                <motion.p 
                  className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]"
                  variants={fadeInUp}
                >
                  Welcome to Trends Tense! 🚀 Let's get into this week's hottest topics and must-see trends!
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                variants={staggerChildren}
              >
                <Link href='/storydetails'>
                  <motion.div 
                    className="flex space-x-4 items-center"
                    variants={fadeInUp}
                    whileHover="hover"
                  >
                    <motion.button className="font-Gothic font-semibold">
                      Read More
                    </motion.button>
                    <motion.div variants={buttonHover}>
                      <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                    </motion.div>
                  </motion.div>
                </Link>
                <motion.div 
                  className="border-b-2 border-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: "8rem" }} // w-32 equivalent
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Stories;