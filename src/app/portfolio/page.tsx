'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import projects from "../../projects";

const Portfolio = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 p-24 lg:p-20 mt-10 md:mt-20 space-y-8 md:space-y-16">
      <p className="text-gold text-xl sm:text-2xl font-Gothic">PIXELEYE PROJECTS</p>

      {projects.map((project) => (
        <div key={project.id}>
          {/* Full Width Layout */}
          {project.layoutType === "full" && (
            <Link href={`/project/${project.id}`} className="relative block group">
              <div className="relative w-full mt-6 md:mt-10">
                <Image
                  src={project.image as string}
                  alt="ddd"
                  width={1920}
                  height={1000}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <p className="text-white text-lg sm:text-2xl font-Gothic">{project.name}</p>
                    <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl" />
                  </div>
                  <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">{project.description}</p> 
                  <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">{project.description2}</p>
                  

                </div>
              </div>
            </Link>
          )}

          {/* Two-Column Layout for Half Projects */}
          {project.layoutType === "half" && project.items && (
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12">
              {project.items.map((item) => (
                <div key={item.id} className="relative w-full lg:w-1/2">
                  <Link href={`/project/${item.id}`} className="block">
                    <Image
                      src={item.image as string}
                      alt={item.name}
                      width={800}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="absolute bottom-0 p-3 sm:p-4 lg:p-8 space-y-2 md:space-y-4">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <p className="text-white text-lg sm:text-2xl font-Gothic">{item.name}</p>
                        <HiArrowLongRight fill="gold" className="text-2xl sm:text-4xl" />
                      </div>
                      <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">{item.description}</p>
                      <p className="text-white text-xl sm:text-2xl md:text-4xl font-Caslon">{item.description2}</p>

                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
