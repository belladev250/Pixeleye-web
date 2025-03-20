'use client'
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from "framer-motion";

const StoryDetails = () => {
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

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
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

    const imageZoom = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };
    
    const lineExpand = {
        hidden: { width: 0 },
        visible: { 
            width: "100%", 
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    return (
        <div className="p-6 mt-24 lg:mt-0 md:p-12 lg:p-24 sm:p-12">
            <motion.div 
                className="flex flex-col text-left space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <motion.p 
                    className="font-Caslon text-xl md:text-3xl lg:text-5xl w-full"
                    variants={fadeInUp}
                >  
                    How To Organize Files In A Design Agency 
                </motion.p>
                <motion.div 
                    className="flex flex-wrap items-center space-x-2 text-sm md:text-md"
                    variants={fadeInUp}
                >
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic">3 mins read</p>
                    <div className="w-[0.7] h-4 bg-gold"></div>
                    <p className="font-Gothic">24.02.2025</p>
                </motion.div>
            </motion.div>

            <motion.div 
                className="w-full mt-6 md:mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={imageZoom}
            >
                <Image src="/assets/file.jpg" alt="camera" width={1500} height={200} layout="responsive" />
            </motion.div>

            <motion.div 
                className='space-y-6 mt-6 md:mt-12'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <motion.p 
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    In a lively design agency, the team was known for creating stunning designs and impressing clients. But behind the scenes, chaos ruled.
                    The agency's file system was a disaster. Files with names like "FinalFinal_3_V2.psd" and "LogoTest_JohnEdit.png" were scattered all over the server. It took forever to find the right documents, and important files
                    often got lost. This made deadlines stressful, and teamwork became harder every day.
                </motion.p>
                <motion.p 
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    One Friday afternoon, Ineza Bella Melissa, a junior designer with a sharp eye for detail, noticed how much time everyone wasted searching
                    for files. She realized that the agency needed an organized file system to work better. Ineza decided to take on the challenge, even though she wasn't sure where to start.
                </motion.p>
                <motion.p 
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    That weekend, armed with determination and a big cup of coffee, Ineza started organizing the files. She created clear folders for each
                    client and project. Inside each project folder, she added subfolders like "Designs," "References," and "Final Deliverables." It was a simple system, but it brought order to the chaos.
                </motion.p>
                <motion.p 
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    Ineza also introduced a naming rule to make files easier to find. Every file would now follow the same pattern: "ClientName_ProjectName_Date_Version.ext".
                    For example, instead of "LogoFinal.psd," a file would be named "GreenTech_Logo_20250115_V1.psd." This made it clear what the file was about, when it was created, and which version it was.
                </motion.p>
                <motion.p 
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    On Monday morning, Ineza showed the new system to her team. At first, they were surprised and a bit unsure about following the rules. But once they saw
                    how easy it was to find what they needed, everyone quickly got on board. The designers realized they could spend more time creating and less time searching for files.
                </motion.p>
                <motion.p 
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    The new system transformed the way the agency worked. Deadlines became easier to meet, teamwork improved, and even clients noticed how smoothly things
                    were delivered. The team felt less stressed, and their creativity flowed like never before. Ineza's small effort to organize the files had made a big difference.
                </motion.p>
                <motion.p 
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    From that day on, the agency thrived, not just because of their creativity but also because of the order Ineza Bella Melissa brought. It was a simple
                    reminder that sometimes, solving a small problem can lead to big success.
                </motion.p>
                <motion.hr 
                    className="left-0 w-full border-navBorder"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={lineExpand}
                />
            </motion.div>

            <motion.div 
                className='mt-16 space-y-8'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={staggerContainer}
            >
                <motion.h1 
                    className="text-gold text-md font-Gothic md:text-xl"
                    variants={fadeInUp}
                >
                    NEXT STORY
                </motion.h1>
                <motion.div 
                    className='space-y-4'
                    variants={staggerContainer}
                >
                    <motion.div 
                        className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16"
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="w-full md:w-1/3 flex justify-center md:justify-start"
                            variants={imageZoom}
                        >
                            <Image src="/assets/trend.jpg" alt="eye" width={300} height={300} className='h-auto w-full object-cover' />
                        </motion.div>

                        <motion.div 
                            className="space-y-6 md:space-y-40 text-center md:text-left"
                            variants={staggerContainer}
                        >
                            <motion.div 
                                className='space-y-3'
                                variants={fadeInUp}
                            >
                                <p className="font-Gothic text-sm md:text-md">24.01.2022</p>
                                <p className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]">
                                    Welcome to Trends Tense! 🚀 Let's get into this week's hottest topics and must-see trends!
                                </p>
                            </motion.div>
                            <motion.div 
                                className="space-y-4"
                                variants={fadeInUp}
                            >
                                <Link href='/storydetails'>
                                    <motion.div 
                                        className="flex space-x-4 items-center"
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <button className="font-Gothic font-semibold">Read More</button>
                                        <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                                    </motion.div>
                                </Link>
                                <motion.h1 
                                    className="border-b-2 border-gold w-32"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "8rem" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                ></motion.h1>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default StoryDetails;