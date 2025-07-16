"use client"

import React from 'react'
import { PROJECTS } from '../constants/data/projects'
import { MdArrowOutward } from "react-icons/md";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { fadeMotion } from '@/app/constants/motion'
import TitleComponent from '@/components/shared/TitleComponent';
import CardProjectComponent from '@/components/shared/CardProjectComponent';

export default function Work() {
  const someProjects = PROJECTS.slice(1, 5)
  return (
    <section id='projects' className='container px-4 lg:py-15 lg:px-0'>
      <motion.div {...fadeMotion} className='flex flex-col gap-8'>

        <TitleComponent title='🚀 Some of my projects' />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {someProjects.map((project, index) => (
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

        {PROJECTS.length > 4 ? (
          <div
            className="w-full flex justify-center"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <Link href="/projects">
              <Button variant="outline" className='flex items-center gap-2 cursor-pointer'>
                View all <MdArrowOutward size={20} />
              </Button>
            </Link>
          </div>
        ) : ""}
      </motion.div>
    </section >
  )
}