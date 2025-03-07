'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import groupedProjects from '../../../projects';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from "../../../projects";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

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

  return (
    <div className="p-20 ">
      {project && project.items && project.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.items.map((item: Project) => (
            <div key={item.id}>
              <p className='text-3xl text-gold font-Caslon' >BRAND IDENTITY</p>
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            
            
            </div>
          ))}
        </div>
      ) : (
        <>
                     
                     <div className="space-y-6">
  <p className='text-xl text-gold font-Gothic'>BRAND IDENTITY</p>
  <p className="text-2xl font-Caslon">{project.name}</p>
  <p className="text-lg font-Gothic">{project.details}</p>

  <div className="relative w-full mt-6 md:mt-10">
    <Image
      src={project.mainImage as string}
      alt="ddd"
      width={1920} // Large width to ensure full coverage
      height={1000} // Adjust height proportionally
      className="w-full h-auto object-cover"
    />

        {/* TEXT SECTION */}

    <div className="flex space-x-12 mt-20">
      <div className="space-y-8">
        <p className="font-semibold font-Gothic text-xl">Market survey </p>
        <p className=" font-Gothic text-lg">Pixel Eye was keen on finding out challenges that RwandaFoam was facing. At the beginning
           of the project, we conducted a thorough market survey to identify areas of improvement. 
           Pixel Eye analysed the data, and 
          provided hands-on guidance on elevating their image through various initiatives.</p>

      </div>

      <div className="space-y-8">
         <p className="font-semibold font-Gothic text-xl" >Solution</p>

         <p className=" font-Gothic text-lg">Pixel Eye was keen on finding out challenges that RwandaFoam was facing. 
          At the beginning of the project, we conducted a thorough market survey to identify areas of improvement. Pixel Eye analysed the data, and provided hands-on 
          guidance on elevating their image through various initiatives.</p>

          <p className=" font-Gothic text-lg">Activating creative strategies for RwandaFoam has boosted the company's outreach on and offline. 
            Together with the Client, we told stories that turned users into comfortable customers. One mattress at a time.</p>
      </div>
    </div>


    {/* IMAGES SECTION */}

    <div className="space-y-6">
      <div className="flex space-x-12  w-full  mt-20">
        <Image  src="/assets/foam1.jpg" width={200} height={200} alt="fggg" className="w-1/2 h-auto object-cover" />
        <Image  src="/assets/foam1.jpg" width={200} height={200} alt="fggg" className="w-1/2 h-auto object-cover" />
      </div>

      <Image
      src="/assets/landscape.jpg"
      alt="ddd"
      width={1920} // Large width to ensure full coverage
      height={1000} // Adjust height proportionally
      className="w-full h-auto object-cover"
    />
    </div>



  </div>
</div>




        </>
      )}

      <Link href="/portfolio" className="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Portfolio
      </Link>
    </div>
  );
};

export default ProjectPage;
