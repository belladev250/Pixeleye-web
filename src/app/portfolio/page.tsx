'use client';
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import projects from "../../projects";
import { motion } from "framer-motion";
import Lenis from '@studio-freight/lenis';

const Portfolio = () => {
  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
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

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7 }
    }
  };

  const imageHover = {
    rest: { scale: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.03, y: -5, transition: { duration: 0.4 } }
  };

  return (
    <motion.div 
      className="px-4 sm:px-8 md:px-12 p-24 lg:p-20 mt-10 md:mt-20 space-y-8 md:space-y-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.p 
        className="text-gold text-xl sm:text-2xl font-Gothic"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        PIXELEYE PROJECTS
      </motion.p>

      {projects.map((project) => (
        <motion.div 
          key={project.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren}
        >
          {/* Full Width Layout */}
          {project.layoutType === "full" && (
            <Link href={`/project/${project.id}`}>
              <motion.div 
                className="relative w-full mt-6 md:mt-10 cursor-pointer"
                variants={scaleUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <Image
                  src={project.image as string}
                  alt="project"
                  width={1920}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <motion.div 
                  className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4"
                  variants={textReveal}
                >
                  <motion.div 
                    className="flex items-center space-x-2 sm:space-x-4"
                    variants={fadeIn}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <p className="text-white text-lg sm:text-2xl font-Gothic">{project.name}</p>
                    <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl" />
                  </motion.div>
                  <motion.p 
                    className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon"
                    variants={textReveal}
                  >
                    {project.description}
                  </motion.p> 
                  <motion.p 
                    className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon"
                    variants={textReveal}
                  >
                    {project.description2}
                  </motion.p>
                </motion.div>
              </motion.div>
            </Link>
          )}

          {/* Two-Column Layout for Half Projects */}
          {project.layoutType === "half" && project.items && (
            <motion.div 
              className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12"
              variants={staggerChildren}
            >
              {project.items.map((item, itemIndex) => (
                <motion.div 
                  key={item.id} 
                  className="relative w-full lg:w-1/2"
                  variants={itemIndex % 2 === 0 ? fadeInLeft : fadeInRight}
                >
                  <Link href={`/project/${item.id}`}>
                    <motion.div
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                      variants={imageHover}
                      className="relative"
                    >
                      <Image
                        src={item.image as string}
                        alt={item.name}
                        width={800}
                        height={800}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-black opacity-50"></div>

                      <motion.div 
                        className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4"
                        variants={fadeIn}
                      >
                        <motion.div 
                          className="flex items-center space-x-2 sm:space-x-4"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <p className="text-white text-lg sm:text-2xl font-Gothic">{item.name}</p>
                          <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl" />
                        </motion.div>
                        <motion.p 
                          className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon"
                          variants={textReveal}
                        >
                          {item.description}
                        </motion.p>
                        <motion.p 
                          className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon"
                          variants={textReveal}
                        >
                          {item.description2}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Portfolio;