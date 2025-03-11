'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import groupedProjects from '../../../projects';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from "../../../projects";
import JoinUs from '@/components/JoinUs';

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
    <div className=" ">
      {project && project.items && project.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.items.map((item: Project) => (
            <div key={item.id}>
              <p className='text-3xl text-gold font-Caslon' >BRAND IDENTITY</p>
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="text-lg font-Gothic">{item.details}</p>
 
              <div className="relative w-full mt-6 md:mt-10">
 
<video 
                
                src={item.video}
                muted
                className="w-full h-full object-cover"
                autoPlay
                preload="auto"
                controls
            
              ></video>

        {/* TEXT SECTION */}

    <div className="flex space-x-12 mt-20">
      <div className="space-y-8">
        <p className="font-semibold font-Gothic text-xl">Market survey </p>
        <p className=" font-Gothic text-lg">{item.survey1}</p>

      </div>

      <div className="space-y-8">
         <p className="font-semibold font-Gothic text-xl" >Solution</p>

         <p className=" font-Gothic text-lg">{item.solution1}</p>

          <p className=" font-Gothic text-lg">{item.solution2}</p>
      </div>
    </div>


    {/* IMAGES SECTION */}

    <div className="space-y-12">
      <div className="flex space-x-12  w-full  mt-20">
        <Image  src={item.subImage1} width={800} height={700} alt="fggg" className="w-1/2 h-[80vh] object-cover" />
        <Image  src={item.subImage2} width={800} height={700} alt="fggg" className="w-1/2 h-[80vh] object-cover" />
      </div>

      <Image
      src={item.subImage3}
      alt="ddd"
      width={1920} 
      height={1000} 
      className="w-full h-[80vh] object-cover"
    />
    </div>

    {/* SUB PROJECT SECTION */}
    <div className="flex w-full justify-between  mt-20">
    
        <div className="">
        <p className="font-semibold font-Caslon text-3xl">{item.projSubtitle1} </p>
        <p className="font-semibold font-Caslon text-3xl">{item.projSubtitle2}</p>
        </div>

       
      

      <div className="space-y-8 w-1/2 mt-32">
         <p className=" font-Gothic text-xl text-gold" >PROJECT DESCRIPTION</p>

         <p className=" font-Gothic text-lg">{item.projDesc1}</p>

          
      </div>
    </div>

    {/* VIDEO SECTION */}
    <Image
      src={item.mainImage as string}
      alt="ddd"
      width={1920} 
      height={1000}
      className="w-full h-auto  mt-16 object-cover"
    />



<div className="flex w-full justify-between  mt-20">
    
        <div className="">
        <p className="font-semibold font-Caslon text-3xl">{item.proj2Subtitle1}</p>
        <p className="font-semibold font-Caslon text-3xl">{item.proj2Subtitle2}</p>
        </div>

       

      <div className="space-y-8 w-1/2 mt-32">
         <p className=" font-Gothic text-xl text-gold" >PROJECT DESCRIPTION</p>

         <p className=" font-Gothic text-lg">{item.proj2Desc1}</p>

          
      </div>
    </div>


     {/* IMAGES SECTION */}

     <div className="space-y-12">
      <div className="flex space-x-12  w-full  mt-20">
        <Image  src={item.sub2Image1} width={800} height={700} alt="fggg" className="w-1/2 h-[80vh] object-cover" />
        <Image  src={item.sub2Image2} width={800} height={700} alt="fggg" className="w-1/2 h-[80vh]  object-cover" />
      </div>

      <Image
      src={item.sub2Image3}
      alt="ddd"
      width={900} 
      height={900} 
      className="w-full h-[90vh] object-cover"
    />
    </div>

    {/* NETWORK SECTION */}



  </div>
            
            
            </div>
          ))}
        </div>
      ) : (
        <>
                     
   <div className="space-y-6 p-20">
  <p className='text-xl text-gold font-Gothic'>BRAND IDENTITY</p>
  <p className="text-2xl font-Caslon">{project.name}</p>
  <p className="text-lg font-Gothic">{project.details}</p>

  <div className="relative w-full mt-6 md:mt-10">
 
<video
                
                src={project.video}
                muted
                className="w-full h-full object-cover"
                autoPlay
                preload="auto"
                controls
            
              ></video>

        {/* TEXT SECTION */}

    <div className="flex space-x-12 mt-20">
      <div className="space-y-8">
        <p className="font-semibold font-Gothic text-xl">Market survey </p>
        <p className=" font-Gothic text-lg">{project.survey1}</p>

      </div>

      <div className="space-y-8">
         <p className="font-semibold font-Gothic text-xl" >Solution</p>

         <p className=" font-Gothic text-lg">{project.solution1}</p>

          <p className=" font-Gothic text-lg">{project.solution2}</p>
      </div>
    </div>


    {/* IMAGES SECTION */}

    <div className="space-y-12">
      <div className="flex space-x-12  w-full  mt-20">
        <Image  src={project.subImage1} width={800} height={700} alt="fggg" className="w-1/2 h-[80vh] object-cover" />
        <Image  src={project.subImage2} width={800} height={700} alt="fggg" className="w-1/2 h-[80vh] object-cover" />
      </div>

      <Image
      src={project.subImage3}
      alt="ddd"
      width={1920} 
      height={1000} 
      className="w-full h-[80vh] object-cover"
    />
    </div>

    {/* SUB PROJECT SECTION */}
    <div className="flex w-full justify-between  mt-20">
    
        <div className="">
        <p className="font-semibold font-Caslon text-3xl">{project.projSubtitle1} </p>
        <p className="font-semibold font-Caslon text-3xl">{project.projSubtitle2}</p>
        </div>

       
      

      <div className="space-y-8 w-1/2 mt-32">
         <p className=" font-Gothic text-xl text-gold" >PROJECT DESCRIPTION</p>

         <p className=" font-Gothic text-lg">{project.projDesc1}</p>

          
      </div>
    </div>

    {/* VIDEO SECTION */}
    <Image
      src={project.mainImage as string}
      alt="ddd"
      width={1920} 
      height={1000}
      className="w-full h-auto  mt-16 object-cover"
    />



<div className="flex w-full justify-between  mt-20">
    
        <div className="">
        <p className="font-semibold font-Caslon text-3xl">{project.proj2Subtitle1}</p>
        <p className="font-semibold font-Caslon text-3xl">{project.proj2Subtitle2}</p>
        </div>

       
      

      <div className="space-y-8 w-1/2 mt-32">
         <p className=" font-Gothic text-xl text-gold" >PROJECT DESCRIPTION</p>

         <p className=" font-Gothic text-lg">{project.proj2Desc1}</p>

          
      </div>
    </div>


     {/* IMAGES SECTION */}

     <div className="space-y-12">
      <div className="flex space-x-12  w-full  mt-20">
        <Image  src={project.sub2Image1} width={800} height={700} alt="fggg" className="w-1/2 h-[80vh] object-cover" />
        <Image  src={project.sub2Image2} width={800} height={700} alt="fggg" className="w-1/2 h-[80vh]  object-cover" />
      </div>

      <Image
      src={project.sub2Image3}
      alt="ddd"
      width={900} 
      height={900} 
      className="w-full h-[90vh] object-cover"
    />
    </div>

    {/* NETWORK SECTION */}


    {/* FOOTER SECTION  */}





  </div>
  
</div>




<JoinUs/>

        </>
      )}

    </div>
  );
};

export default ProjectPage;
