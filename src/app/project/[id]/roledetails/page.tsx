import React from 'react';
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const roledetails = () => {
    return (
        <div className="p-24">
            <div className="flex flex-col text-left space-y-4">
                <p className="font-Caslon text-lg lg:text-5xl w-full">
                    Job Title : <span className="font-Caslon text-md lg:text-5xl w-full text-gold ">Senior Designer</span>
                </p>
                <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic text-lg lg:text-md w-full lg:w-[45vw]">Deadline : 24.02.2025</p>
                </div>
                <hr className="w-full border-navBorder" />
            </div>

            <div>
                <p className="font-Gothic font-semibold text-lg lg:text-xl w-full lg:w-[45vw] mt-10">Role Overview</p>
                <p className="font-Gothic text-md lg:text-md w-full lg:w-[80vw] mt-2">We are seeking a highly skilled Senior Designer to lead our design efforts, from concept to execution. The ideal candidate will bring fresh ideas, mentor junior designers, and collaborate cross-functionally to elevate our design standards and deliver top-tier results.</p>
            </div>
            <div className="space-y-6">
                <p className="font-Gothic font-semibold text-lg lg:text-xl w-full lg:w-[45vw] mt-10">Key Responsibilities</p>
                <div className="flex space-x-2 items-center ">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic text-md lg:text-md w-full lg:w-[80vw]">Lead the design process for projects across digital, print, and product platforms.</p>
                </div>
                <div className="flex space-x-2 items-center ">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic text-md lg:text-md w-full lg:w-[80vw]">Collaborate with marketing, product, and development teams to ensure cohesive design strategies.</p>
                </div>
                <div className="flex space-x-2 items-center ">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic text-md lg:text-md w-full lg:w-[80vw]">Oversee and contribute to the creation of branding, visual assets, and campaign materials.</p>
                </div>
                <div className="flex space-x-2 items-center ">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic text-md lg:text-md w-full lg:w-[80vw]">Mentor and provide feedback to junior designers, fostering a culture of continuous learning.</p>
                </div>
                <div className="flex space-x-2 items-center ">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic text-md lg:text-md w-full lg:w-[80vw]">Conduct user research and leverage insights to inform design decisions.</p>
                </div>
                <div className="flex space-x-2 items-center ">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <p className="font-Gothic text-md lg:text-md w-full lg:w-[80vw]">Stay updated with design trends, tools, and best practices to keep our brand competitive.</p>
                </div>

            </div>

            <button className="bg-gold w-40 md:w-[200px] h-12 md:h-[50px] text-menuBg font-Gothic font-semibold mt-10">Apply Here</button>

        </div>
    );
}

export default roledetails;
