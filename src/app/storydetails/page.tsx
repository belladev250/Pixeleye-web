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
                    Common Logo Mistakes That Clients Make
                </motion.p>
                <motion.div
                    className="flex flex-wrap items-center space-x-2 text-sm md:text-md"
                    variants={fadeInUp}
                >
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic">3 mins read</p>
                    <div className="w-[0.7] h-4 bg-gold"></div>
                    <p className="font-Gothic">30.04.2025</p>
                </motion.div>
            </motion.div>

            <motion.div
                className="w-full mt-6 md:mt-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={imageZoom}
            >
                <Image src="/assets/logo-m.jpg" alt="camera" width={1500} height={200} layout="responsive" />
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
                    As a creative communication company specializing in branding and design, we encounter various challenges when collaborating
                    with clients. Oftentimes, we receive logos of subpar quality, shared in inappropriate formats, or even asked to search for
                    them online.
                </motion.p>
                <motion.p
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    Logos serve as visual representations of a company's identity, establishing brand recognition and visibility. Therefore, distorted,
                    or outdated logos hinder compelling designs that truly represent their organizations.
                </motion.p>
                <motion.p
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    Moreover, some clients share logos in improper formats, such as low-resolution images or incompatible file types. This not only
                    affects the visual appeal of branding materials but also causes difficulties when adapting the logo for various mediums and
                    marketing channels.
                </motion.p>
                <motion.p
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    Additionally, clients occasionally ask us to search for their logos on the internet. Although this may seem like a simple task,
                    locating the right logo among countless variations online becomes an overwhelming and time-consuming task for the team.
                </motion.p>
                <motion.p
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    To address these issues, we urge organizations to maintain a comprehensive repository of their logos in standard formats.
                    The most common logo formats include:
                </motion.p>

                <motion.div className='md:ml-16 sm:ml-2 space-y-4' >

                    <motion.div className="flex space-x-2">
                        <motion.div className="w-2 h-2 bg-gold rounded-full mt-4" variants={fadeInUp} ></motion.div>
                        <motion.p
                            className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                            variants={fadeInUp}
                        > PNG (Portable Network Graphic): Ideal for web graphics, PNG files support transparency and offer high-quality <br />  images suitable for digital platforms.
                        </motion.p>
                    </motion.div>

                    <motion.div className="flex space-x-2">
                        <motion.div className="w-2 h-2 bg-gold rounded-full mt-4" variants={fadeInUp} ></motion.div>
                        <motion.p
                            className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                            variants={fadeInUp}
                        > SVG (Scalable Vector Graphic): Well-suited for logos displayed on websites or apps, SVG  files are resolution-independent <br />  and maintain clarity on any screen size.
                        </motion.p>
                    </motion.div>

                    <motion.div className="flex space-x-2">
                        <motion.div className="w-2 h-2 bg-gold rounded-full mt-4" variants={fadeInUp} ></motion.div>
                        <motion.p
                            className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                            variants={fadeInUp}
                        > EPS (Encapsulated PostScript): Widely used by designers and printers, EPS files are scalable and retain quality in both small <br />  and large formats, making them suitable for diverse printing needs.
                        </motion.p>
                    </motion.div>

                    <motion.div className="flex space-x-2">
                        <motion.div className="w-2 h-2 bg-gold rounded-full mt-4" variants={fadeInUp} ></motion.div>
                        <motion.p
                            className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                            variants={fadeInUp}
                        > PDF (Portable Document Format): Besides being a universal file format for sharing documents, PDF is an excellent choice <br /> for logo storage, maintaining vector quality and easy accessibility.
                        </motion.p>
                    </motion.div>

                </motion.div>

                <motion.p
                    className="font-Gothic text-md md:text-lg leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]"
                    variants={fadeInUp}
                >
                    Organizations can streamline collaboration with branding experts by storing logos in standard formats. In order to maintain brand consistency across marketing materials, a centralized logo library
                    should include all logo variations, color versions, and formats.
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
                            <Image src="/assets/bleeding.jpg" alt="eye" width={300} height={300} className='h-auto w-full object-cover' />
                        </motion.div>

                        <motion.div
                            className="space-y-6 md:space-y-40 text-center md:text-left"
                            variants={staggerContainer}
                        >
                            <motion.div
                                className='space-y-3'
                                variants={fadeInUp}
                            >
                                <p className="font-Gothic text-sm md:text-md">Coming Soon!</p>
                                <p className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]">
                                Why is bleeding important in graphic design?
                                </p>
                            </motion.div>
                            <motion.div
                                className="space-y-4"
                                variants={fadeInUp}
                            >
                                <Link href='/'>
                                    <motion.div
                                        className="flex space-x-4 items-center"
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <button className="font-Gothic font-semibold">Currently Cooking It</button>
                                        {/* <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" /> */}
                                    </motion.div>
                                </Link>
                                <motion.h1
                                    className="border-b-2 border-gold w-32"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "10rem" }}
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