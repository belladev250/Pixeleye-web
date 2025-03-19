'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import groupedProjects from '../../../projects';
import Image from 'next/image';
import { Project } from "../../../projects";
import JoinUs from '@/components/JoinUs';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from "framer-motion";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    let foundProject = groupedProjects.find((p) => p.id === id);

    if (!foundProject) {
      for (let group of groupedProjects) {
        if (group.items) {
          const item = group.items.find((p) => p.id === id);
          if (item) {
            foundProject = item;
            break;
          }
        }
      }
    }

    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return <p className="text-center text-red-500 text-xl mt-20">Project not found</p>;
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.2 
      }
    })
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1,
        ease: "easeOut" 
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project && project.items && project.items.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {project.items.map((item: Project) => (
              <div key={item.id} className="">
                <motion.p 
                  className='text-2xl md:text-3xl text-gold font-Caslom mt-6'
                  variants={fadeIn}
                  custom={0}
                >
                  BRAND IDENTITY
                </motion.p>
                <motion.h2 
                  className="text-xl md:text-2xl font-bold my-2 md:mb-4"
                  variants={fadeIn}
                  custom={1}
                >
                  {item.name}
                </motion.h2>
                <motion.p 
                  className="text-base md:text-lg font-Gothic"
                  variants={fadeIn}
                  custom={2}
                >
                  {item.details}
                </motion.p>
 
                {item.video && (
                  <motion.div 
                    className="relative w-full mt-4 md:mt-6 lg:mt-10"
                    variants={imageVariants}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <video 
                      src={item.video}
                      muted
                      className="w-full object-cover"
                      autoPlay
                      playsInline
                      preload="auto"
                      controls
                    ></video>
                  </motion.div>
                )}

                <motion.div 
                  className="flex flex-col md:flex-row md:space-x-12 mt-8 md:mt-12 lg:mt-20"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div className="space-y-4 md:space-y-8 mb-6 md:mb-0" variants={fadeIn}>
                    <motion.p className="font-semibold font-Gothic text-lg md:text-xl" variants={fadeIn}>Market survey</motion.p>
                    <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{item.survey1}</motion.p>
                  </motion.div>

                  <motion.div className="space-y-4 md:space-y-8" variants={fadeIn}>
                    <motion.p className="font-semibold font-Gothic text-lg md:text-xl" variants={fadeIn}>Solution</motion.p>
                    <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{item.solution1}</motion.p>
                    <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{item.solution2}</motion.p>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="space-y-6 md:space-y-12"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-12 w-full mt-8 md:mt-12 lg:mt-20">
                    {item.subImage1 && (
                      <motion.div variants={imageVariants} className="w-full md:w-1/2 mb-4 md:mb-0">
                        <Image src={item.subImage1} width={800} height={700} alt="Project image" className="h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover w-full" />
                      </motion.div>
                    )}
                    {item.subImage2 && (
                      <motion.div variants={imageVariants} className="w-full md:w-1/2">
                        <Image src={item.subImage2} width={800} height={700} alt="Project image" className="h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover w-full" />
                      </motion.div>
                    )}
                  </motion.div>
                  {item.subImage3 && (
                    <motion.div variants={imageVariants}>
                      <Image src={item.subImage3} alt="Project image" width={1920} height={1000} className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover" />
                    </motion.div>
                  )}
                </motion.div>

                <motion.div 
                  className="flex flex-col md:flex-row md:justify-between mt-8 md:mt-12 lg:mt-20"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div className="mb-6 md:mb-0" variants={fadeIn}>
                    <motion.p className="font-semibold font-Caslon text-xl md:text-2xl lg:text-3xl" variants={fadeIn}>{item.projSubtitle1}</motion.p>
                    <motion.p className="font-semibold font-Caslon text-xl md:text-2xl lg:text-3xl" variants={fadeIn}>{item.projSubtitle2}</motion.p>
                  </motion.div>

                  <motion.div className="space-y-4 md:space-y-8 w-full md:w-1/2 md:mt-12 lg:mt-32" variants={fadeIn}>
                    <motion.p className="font-Gothic text-lg md:text-xl text-gold" variants={fadeIn}>PROJECT DESCRIPTION</motion.p>
                    <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{item.projDesc1}</motion.p>
                  </motion.div>
                </motion.div>

                {item.mainImage && (
                  <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-6 md:mt-12 lg:mt-16"
                  >
                    <Image
                      src={item.mainImage as string}
                      alt="Project main image"
                      width={1920}
                      height={1000}
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                )}

                {(item.projSubtitle1 || item.projSubtitle2 || item.projDesc1) && (
                  <>
                    <motion.div 
                      className="flex flex-col md:flex-row md:justify-between mt-8 md:mt-12 lg:mt-20"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.div className="mb-6 md:mb-0" variants={fadeIn}>
                        <motion.p className="font-semibold font-Caslon text-xl md:text-2xl lg:text-3xl" variants={fadeIn}>{item.proj2Subtitle1}</motion.p>
                        <motion.p className="font-semibold font-Caslon text-xl md:text-2xl lg:text-3xl" variants={fadeIn}>{item.proj2Subtitle2}</motion.p>
                      </motion.div>

                      <motion.div className="space-y-4 md:space-y-8 w-full md:w-1/2 md:mt-12 lg:mt-32" variants={fadeIn}>
                        <motion.p className="font-Gothic text-lg md:text-xl text-gold" variants={fadeIn}>PROJECT DESCRIPTION</motion.p>
                        <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{item.proj2Desc1}</motion.p>
                      </motion.div>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-6 md:space-y-12"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-12 w-full mt-8 md:mt-12 lg:mt-20">
                        {item.sub2Image1 && (
                          <motion.div variants={imageVariants} className="w-full md:w-1/2 mb-4 md:mb-0">
                            <Image src={item.sub2Image1} width={800} height={700} alt="Project image" className="h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover w-full" />
                          </motion.div>
                        )}
                        {item.sub2Image2 && (
                          <motion.div variants={imageVariants} className="w-full md:w-1/2">
                            <Image src={item.sub2Image2} width={800} height={700} alt="Project image" className="h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover w-full" />
                          </motion.div>
                        )}
                      </motion.div>
                      {item.sub2Image3 && (
                        <motion.div variants={imageVariants}>
                          <Image src={item.sub2Image3} alt="Project image" width={900} height={900} className="w-full h-[40vh] md:h-[60vh] lg:h-[90vh] object-cover" />
                        </motion.div>
                      )}
                    </motion.div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        ) : (
          <>
            <motion.div 
              className="space-y-6 md:space-y-8 p-4 md:p-8 lg:p-20 mt-32 lg:mt-0"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p className='text-lg md:text-xl text-gold font-Gothic' variants={fadeIn} custom={0}>BRAND IDENTITY</motion.p>
              <motion.p className="text-2xl md:text-3xl font-Caslon" variants={fadeIn} custom={1}>{project.name}</motion.p>
              <motion.p className="text-base md:text-lg font-Gothic" variants={fadeIn} custom={2}>{project.details}</motion.p>

              {project.video ? (
                <motion.div 
                  className="relative w-full h-[50vh] md:h-[70vh] lg:h-[93vh] mt-4 md:mt-6 lg:mt-10"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <video
                    src={project.video}
                    muted
                    className="w-full h-full object-cover"
                    autoPlay
                    playsInline
                    preload="auto"
                    controls
                  ></video>
                </motion.div>
              ) : project.mainImage && (
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Image 
                    src={project.mainImage} 
                    alt="Project cover image" 
                    width={1920} 
                    height={1000} 
                    className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover" 
                  />
                </motion.div>
              )}

              <motion.div 
                className="flex flex-col md:flex-row md:space-x-12"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div className="space-y-4 md:space-y-8 w-full md:w-1/2 mb-6 md:mb-0" variants={fadeIn}>
                  <motion.p className="font-semibold font-Gothic text-lg md:text-xl" variants={fadeIn}>Market survey</motion.p>
                  <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{project.survey1}</motion.p>
                </motion.div>

                <motion.div className="space-y-4 md:space-y-8 w-full md:w-1/2" variants={fadeIn}>
                  <motion.p className="font-semibold font-Gothic text-lg md:text-xl" variants={fadeIn}>Solution</motion.p>
                  <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{project.solution1}</motion.p>
                  <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{project.solution2}</motion.p>
                </motion.div>
              </motion.div>

              <motion.div 
                className="space-y-6 md:space-y-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-12 w-full mt-8 md:mt-12 lg:mt-20">
                  {project.subImage1 && (
                    <motion.div variants={imageVariants} className="w-full md:w-1/2 mb-4 md:mb-0">
                      <Image src={project.subImage1} width={800} height={700} alt="Project image" className="h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover w-full" />
                    </motion.div>
                  )}
                  {project.subImage2 && (
                    <motion.div variants={imageVariants} className="w-full md:w-1/2">
                      <Image src={project.subImage2} width={800} height={700} alt="Project image" className="h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover w-full" />
                    </motion.div>
                  )}
                </motion.div>
                {project.subImage3 && (
                  <motion.div variants={imageVariants}>
                    <Image src={project.subImage3} alt="Project image" width={1920} height={1000} className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover" />
                  </motion.div>
                )}
              </motion.div>

              <motion.div 
                className="flex flex-col md:flex-row md:justify-between mt-8 md:mt-12 lg:mt-20"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div className="mb-6 md:mb-0" variants={fadeIn}>
                  <motion.p className="font-semibold font-Caslon text-xl md:text-2xl lg:text-3xl" variants={fadeIn}>{project.projSubtitle1}</motion.p>
                  <motion.p className="font-semibold font-Caslon text-xl md:text-2xl lg:text-3xl" variants={fadeIn}>{project.projSubtitle2}</motion.p>
                </motion.div>

                <motion.div className="space-y-4 md:space-y-8 w-full md:w-1/2 md:mt-12 lg:mt-32" variants={fadeIn}>
                  {project.desc && <motion.p className="font-Gothic text-lg md:text-xl text-gold" variants={fadeIn}>{project.desc}</motion.p>}
                  <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{project.projDesc1}</motion.p>
                </motion.div>
              </motion.div>

              {project.mainImage && (
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-6 md:mt-12 lg:mt-16"
                >
                  <Image
                    src={project.mainImage as string}
                    alt="Project main image"
                    width={1920}
                    height={1000}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              )}

              {(project.projSubtitle1 || project.projSubtitle2 || project.projDesc1) && (
                <>
                  <motion.div 
                    className="flex flex-col md:flex-row md:justify-between mt-8 md:mt-12 lg:mt-20"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div className="mb-6 md:mb-0" variants={fadeIn}>
                      <motion.p className="font-semibold font-Caslon text-xl md:text-2xl lg:text-3xl" variants={fadeIn}>{project.proj2Subtitle1}</motion.p>
                      <motion.p className="font-semibold font-Caslon text-xl md:text-2xl lg:text-3xl" variants={fadeIn}>{project.proj2Subtitle2}</motion.p>
                    </motion.div>

                    <motion.div className="space-y-4 md:space-y-8 w-full md:w-1/2 md:mt-12 lg:mt-32" variants={fadeIn}>
                      {project.desc && <motion.p className="font-Gothic text-lg md:text-xl text-gold" variants={fadeIn}>{project.desc}</motion.p>}
                      <motion.p className="font-Gothic text-base md:text-lg" variants={fadeIn}>{project.proj2Desc1}</motion.p>
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-6 md:space-y-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <motion.div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-12 w-full mt-8 md:mt-12 lg:mt-20">
                      {project.sub2Image1 && (
                        <motion.div variants={imageVariants} className="w-full md:w-1/2 mb-4 md:mb-0">
                          <Image src={project.sub2Image1} width={800} height={700} alt="Project image" className="h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover w-full" />
                        </motion.div>
                      )}
                      {project.sub2Image2 && (
                        <motion.div variants={imageVariants} className="w-full md:w-1/2">
                          <Image src={project.sub2Image2} width={800} height={700} alt="Project image" className="h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover w-full" />
                        </motion.div>
                      )}
                    </motion.div>
                    {project.sub2Image3 && (
                      <motion.div variants={imageVariants}>
                        <Image src={project.sub2Image3} alt="Project image" width={1920} height={1000} className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover" />
                      </motion.div>
                    )}
                  </motion.div>
                </>
              )}
            </motion.div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <JoinUs/>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectPage;