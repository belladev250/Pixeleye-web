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
    <div className="p-8 max-w-4xl mx-auto">
      {project && project.items && project.items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.items.map((item: Project) => (
            <div key={item.id}>
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="rounded-md"
              />
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
          <Image
            src={project.image as string}
            alt={project.name}
            width={800}
            height={400}
            className="rounded-md"
          />
          <p className="mt-4 text-lg">{project.description}</p>
        </>
      )}

      <Link href="/portfolio" className="mt-6 inline-block text-blue-500 hover:underline">
        ← Back to Portfolio
      </Link>
    </div>
  );
};

export default ProjectPage;
