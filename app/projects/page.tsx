import React from 'react'
import { PROJECTS } from '../constants/data/projects'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6";
import CardProjectComponent from '@/components/shared/CardProjectComponent'

export default function ProjectsPage() {
  return (
    <section id='projects' className='container px-4 py-10 md:py-14 lg:px-0'>
      <div className='flex flex-col gap-8'>
        <Link href="/" className='text-sm md:text-base text-navigate flex items-center gap-1.5 hover-link'>
          <FaArrowLeftLong className='size-4 md:size-5' /> Home
        </Link>

        <div className='space-y-4 md:space-y-6'>
          <h1 className='text-[22px] md:text-[26px] text-title font-semibold'>📁 Projects</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {PROJECTS.map((project, index) => (
              <CardProjectComponent
                key={index}
                index={index}
                project={project}
                effect='fade-up'
                delay={100}
                duration={1000}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}