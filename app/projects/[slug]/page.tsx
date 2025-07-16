"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { MdArrowOutward } from 'react-icons/md'
import { FaArrowLeftLong } from "react-icons/fa6";
import { PROJECTS } from '@/app/constants/data/projects';
import { AspectRatio } from '@/components/ui/aspect-ratio';
// import { motion } from 'framer-motion'
// import { fadeMotion } from '@/app/constants/motion'
// import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'next/navigation'

export default function ProjectDetailPage() {
  const params = useParams()
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className='container px-4 lg:py-15 lg:px-0 text-center text-red-500'>
        <h1 className='text-3xl font-bold'>Project not found!</h1>
        <Link href="/" className='text-blue-500 hover:underline mt-4 inline-block'>
          Go back to projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <header id='projects' className='container px-4 lg:py-15 lg:px-0'>
        <div className='flex flex-col gap-8'>
          <Link href="/" className='text-light-gray flex items-center gap-1.5 hover-link'>
            <FaArrowLeftLong size={20} /> Projects
          </Link>
        </div>
      </header>

      <section className='space-y-10'>
        <div className='space-y-6'>
          <h1 className='text-[26px] text-title font-semibold'>
            {project.app_name}
          </h1>

          <p className="text-muted-paragraph indent-8">
            {project.descriptionEN}
          </p>

          <div className="flex h-10 items-center space-x-10 text-sm text-gray-500 dark:text-white/50">
            <div className='flex flex-col gap-1'>
              <div>Category</div>
              <div className='text-gray-700 dark:text-white font-semibold'>{project?.category_name}</div>
            </div>
            <Separator orientation="vertical" />
            <div className='flex flex-col gap-1'>
              <div>Year</div>
              <div className='text-gray-700 dark:text-white font-semibold'>2024</div>
            </div>
            <Separator orientation="vertical" />
            <div className='flex flex-col gap-1'>
              <div>Techs used</div>
              <div className='flex flex-row items-center space-x-4'>
                {project.SKILLS.map((skill, index) => (
                  <Image
                    key={index}
                    src={skill.icon}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className="rounded-sm"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <AspectRatio ratio={16 / 9}>
          <Image
            src={project.project_image}
            alt={project.app_name}
            width={1920}
            height={1080}
            loading='lazy'
            className='w-full h-full rounded-md object-cover' />
        </AspectRatio>
      </section>
    </>
  )
}