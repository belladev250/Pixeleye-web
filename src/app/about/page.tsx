'use client'

import React, { useEffect } from 'react';
import Image from "next/image";
import Lenis from '@studio-freight/lenis';
import { motion } from "framer-motion";

const About = () => {
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
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const imageReveal = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="p-6 lg:p-24 space-y-16"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      {/* Hero Section with Background Illustration */}
      <div className="relative flex items-center justify-center mt-32 lg:mt-10 min-h-[60vh]">
        {/* Background Illustration */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0"
          variants={imageReveal}
        >
          <Image 
            src="/assets/illustration.svg" 
            alt="eye" 
            width={400} 
            height={400} 
            className="opacity-90"
          />
        </motion.div>

        {/* Content overlay */}
        <div className="relative z-10 flex flex-col lg:flex-row p-2 lg:p-12 lg:space-x-32 space-y-6 lg:space-y-0">
          <motion.div
            className="font-Caslon text-3xl lg:text-6xl w-full lg:w-1/3 space-y-4"
            variants={staggerChildren}
          >
            <motion.p variants={fadeInUp}>The Creative</motion.p>
            <motion.p variants={fadeInUp}>Impact</motion.p>
          </motion.div>

          <motion.div
            className="font-Gothic text-lg leading-[1.75] lg:text-md w-full lg:w-1/2 space-y-6"
            variants={staggerChildren}
          >
            <motion.p variants={fadeInUp}>
              Since 2015, we have been a go-to creative agency for entities that seek to craft narratives that move, inspire and transform. Our vision is clear: Helping businesses build impact through innovative storytelling.
              At Pixel Eye, we give life to creative projects that amplify the client&apos;s vision and mission. Through our services - branding, audio-visual production and campaign management – we shape brand images and build customer relationships that last a lifetime.
            </motion.p>
            <motion.h1
              className="relative text-gold font-semibold"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              WHAT&apos;S YOUR STORY?
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        className="w-full"
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/assets/about.jpg"
          alt="camera"
          width={1500}
          height={800}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;