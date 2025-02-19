import React from 'react';
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from 'next/link';

const StoryDetails = () => {
    return (
        <div className="p-6 md:p-12 lg:p-24 sm:p-12">
            <div className="flex flex-col text-left space-y-4">
                <p className="font-Caslon text-xl md:text-3xl lg:text-5xl w-full">
                    How To Organize Files In A Design Agency
                </p>
                <div className="flex flex-wrap items-center space-x-2 text-sm md:text-md">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic">3 mins read</p>
                    <div className="w-[0.7] h-4 bg-gold"></div>
                    <p className="font-Gothic">24.02.2025</p>
                </div>
            </div>

            <div className="w-full mt-6 md:mt-12">
                <Image src="/assets/file.jpg" alt="camera" width={1500} height={200} layout="responsive" />
            </div>

            <div className='space-y-6 mt-6 md:mt-12'>
                <p className="font-Gothic text-sm md:text-md leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]">
                    In a lively design agency, the team was known for creating stunning designs and impressing clients. But behind the scenes, chaos ruled.
                    The agency’s file system was a disaster. Files with names like “FinalFinal_3_V2.psd” and “LogoTest_JohnEdit.png” were scattered all over the server. It took forever to find the right documents, and important files
                    often got lost. This made deadlines stressful, and teamwork became harder every day.
                </p>
                <p className="font-Gothic text-sm md:text-md leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]">
                    One Friday afternoon, Ineza Bella Melissa, a junior designer with a sharp eye for detail, noticed how much time everyone wasted searching
                    for files. She realized that the agency needed an organized file system to work better. Ineza decided to take on the challenge, even though she wasn’t sure where to start.
                </p>
                <p className="font-Gothic text-sm md:text-md leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]">
                    That weekend, armed with determination and a big cup of coffee, Ineza started organizing the files. She created clear folders for each
                    client and project. Inside each project folder, she added subfolders like “Designs,” “References,” and “Final Deliverables.” It was a simple system, but it brought order to the chaos.
                </p>
                <p className="font-Gothic text-sm md:text-md leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]">
                    Ineza also introduced a naming rule to make files easier to find. Every file would now follow the same pattern: “ClientName_ProjectName_Date_Version.ext”.
                    For example, instead of “LogoFinal.psd,” a file would be named “GreenTech_Logo_20250115_V1.psd.” This made it clear what the file was about, when it was created, and which version it was.
                </p>
                <p className="font-Gothic text-sm md:text-md leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]">
                    On Monday morning, Ineza showed the new system to her team. At first, they were surprised and a bit unsure about following the rules. But once they saw
                    how easy it was to find what they needed, everyone quickly got on board. The designers realized they could spend more time creating and less time searching for files.
                </p>
                <p className="font-Gothic text-sm md:text-md leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]">
                    The new system transformed the way the agency worked. Deadlines became easier to meet, teamwork improved, and even clients noticed how smoothly things
                    were delivered. The team felt less stressed, and their creativity flowed like never before. Ineza’s small effort to organize the files had made a big difference.
                </p>
                <p className="font-Gothic text-sm md:text-md leading-relaxed md:leading-[1.85] w-full lg:w-[85vw]">
                    From that day on, the agency thrived, not just because of their creativity but also because of the order Ineza Bella Melissa brought. It was a simple
                    reminder that sometimes, solving a small problem can lead to big success.
                </p>
                <hr className="left-0 w-full border-navBorder " />
            </div>

            <div className='mt-16 space-y-8'>
                <h1 className="text-gold text-md font-Gothic md:text-xl">NEXT STORY</h1>
                <div className='space-y-4'>
                    <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-8 lg:space-x-16">
                        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                            <Image src="/assets/trend.jpg" alt="eye" width={300} height={300} className='h-auto w-full object-cover' />
                        </div>

                        <div className="space-y-6 md:space-y-40 text-center md:text-left">
                            <div className='space-y-3'>
                                <p className="font-Gothic text-sm md:text-md">24.01.2022</p>
                                <p className="font-Caslon text-2xl md:text-4xl lg:text-4xl w-full lg:w-[40vw]">
                                    Welcome to Trends Tense! 🚀 Let’s get into this week’s hottest topics and must-see trends!
                                </p>
                            </div>
                            <div className="space-y-4">
                                <Link href='/storydetails'>
                                    <div className="flex space-x-4 items-center">
                                        <button className="font-Gothic font-semibold">Read More</button>
                                        <HiArrowLongRight fill="gold" className="text-xl md:text-2xl" />
                                    </div>
                                </Link>
                                <h1 className="border-b-2 border-gold w-32"></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryDetails;
