'use client'
import React from 'react';
import projects from '../../../projects';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

const ProjectPage = ({ params }: Props) => {
  const { id } = React.use(params); 

  console.log("Project ID from URL:", id); 

  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <p className="text-center text-red-500 text-xl mt-20">Project not found</p>;
  }

  const imageSrc = project.image || null; // If the image is missing, fallback to `null`

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

      {imageSrc ? (
        <Image
          src={imageSrc as string} // Ensure `imageSrc` is a valid string
          alt="Project image"
          width={800}
          height={400}
          className="rounded-md"
        />
      ) : (
        <p>No image available</p> 
      )}

      <p className="mt-4 text-lg">{project.description}</p>

      <Link href="/portfolio" className="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Portfolio
      </Link>
    </div>
  );
};

export default ProjectPage;
