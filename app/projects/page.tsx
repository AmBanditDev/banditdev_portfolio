import React from 'react'
import { PROJECTS } from '../constants/data/projects'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6";
import CardProjectComponent from '@/components/shared/CardProjectComponent'

export default function ProjectsPage() {
  return (
    <section id='projects' className='container px-4 py-15 lg:px-0'>
      <div className='flex flex-col gap-8'>
        <Link href="/" className='text-light-gray flex items-center gap-1.5 hover-link'>
          <FaArrowLeftLong size={20} /> Home
        </Link>

        <h1 className='text-[26px] text-slate-200 font-semibold'>Projects</h1>

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
    </section>
  )
}