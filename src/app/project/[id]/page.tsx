'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import groupedProjects from '../../../projects';
import Image from 'next/image';
import { Project } from "../../../projects";
import JoinUs from '@/components/JoinUs';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from 'next/router';

const ProjectPage = () => {

  const params = useParams();
  const id = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [instagramLoaded, setInstagramLoaded] = useState(false);



  // Load Instagram embed script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.instgrm) {
      const script = document.createElement('script');
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      script.onload = () => setInstagramLoaded(true);
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else if (window.instgrm) {
      setInstagramLoaded(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Re-process Instagram embeds when content changes
  useEffect(() => {
    if (instagramLoaded && project?.socialPosts && typeof window.instgrm?.Embeds?.process === 'function') {
      window.instgrm.Embeds.process();
    }
  }, [instagramLoaded, project]);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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

  useEffect(() => {
    let foundProject: Project | null = groupedProjects.find((p) => p.id === id) as Project | null;

    // If not found, look in the items of each group
    if (!foundProject) {
      for (let group of groupedProjects) {
        if (group.items) {
          const item = group.items.find((p) => p.id === id);
          if (item) {
            foundProject = item as Project;
            break;
          }
        }
      }
    }

    setProject(foundProject);
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
                    initial="hidden"
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
                    src={project.dupImage as string}
                    alt="Project main image"
                    width={1920} 
                    height={1000} 
                    className="w-full h-[40vh] md:h-[60vh] lg:h-[80vh] object-cover"
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

        <div className="flex flex-col">
          {/* Social Posts Section */}
          {project.socialTitle && (project.socialPosts?.length > 0 || project.socialYouTubeId?.length > 0) && (
            <motion.div
              className="social-posts-section mt-8 md:mt-12 lg:mt-20 p-4 md:p-8 lg:p-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h3
                className="text-2xl md:text-3xl font-Caslon mb-6 md:mb-10"
                variants={fadeIn}
              >
                {project.socialTitle}
              </motion.h3>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={fadeIn}
              >
                {(project.socialYouTubeId?.length > 0 ? project.socialYouTubeId : project.socialPosts)
                  .slice(0, 3)
                  .map((content, index) => (
                    <div
                      key={`social-post-${index}`}
                      className="w-full" // Removed fixed aspect ratio
                    >
                      {/* Height-adjustable container */}
                      <div className="relative pb-[125%] h-0 overflow-hidden rounded-lg bg-gray-100">
                        {project.socialYouTubeId?.length > 0 ? (
                          // YouTube Embed - full height
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${content}?rel=0&modestbranding=1`}
                            title={`YouTube video ${index + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        ) : (
                          // Instagram Embed - full height
                          <div
                            dangerouslySetInnerHTML={{ __html: content }}
                            className="absolute top-0 left-0 w-full h-full instagram-embed"
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}

          {/* Instagram script loader */}
          {!instagramLoaded && project.socialPosts?.length > 0 && (
            <script
              async
              src="//www.instagram.com/embed.js"
              onLoad={() => setInstagramLoaded(true)}
            />
          )}

          {/* Global styles for proper embed sizing */}
          <style jsx global>{`
    .instagram-embed iframe {
      width: 100% !important;
      height: 100% !important;
      min-width: auto !important;
      min-height: auto !important;
    }
    
    /* Adjust Instagram embed height */
    .instagram-embed {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }
    
    /* YouTube embed adjustments */
    iframe[src*="youtube.com"] {
      min-height: 400px; /* Minimum height */
    }
  `}</style>
        </div>



        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <JoinUs />
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectPage;