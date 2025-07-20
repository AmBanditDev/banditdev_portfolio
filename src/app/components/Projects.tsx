"use client"

import React from 'react'
import { PROJECTS } from '../constants/data/projects'
import { MdArrowOutward } from "react-icons/md";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion'
import { fadeMotion } from '@/src/app/constants/motion'
import TitleComponent from '@/components/shared/TitleComponent';
import CardProjectComponent from '@/components/shared/CardProjectComponent';
import { useTranslations } from 'next-intl';

export default function Work() {
  const t = useTranslations('projects-section')

  const projects = PROJECTS.filter((p) => p.published !== false).reverse().slice(0, 4)

  return (
    <section id='projects' className='container py-15 scroll-mt-10'>
      <motion.div {...fadeMotion} className='flex flex-col gap-8'>

        <TitleComponent title={`🚀 ${t('title')}`} />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {projects.map((project, index) => (
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
                {t('button.view_all')} <MdArrowOutward size={20} />
              </Button>
            </Link>
          </div>
        ) : ""}
      </motion.div>
    </section >
  )
}