"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeMotion } from '@/app/constants/motion'
import { SlLocationPin } from "react-icons/sl";
import { EXPERIENCES } from '../constants/data/experience'
import Title from '@/components/shared/TitleComponent';

export default function Experience() {
  return (
    <section id='experience' className='container px-4 py-15 lg:px-0 scroll-mt-20'>
      <motion.div {...fadeMotion} className='flex flex-col gap-8'>
        <Title title='💼 Experience' />

        <div className='flex flex-col gap-12'>
          {EXPERIENCES["general"].map((experience, index) => (
            <div
              key={index}
              className='flex flex-col gap-8 pl-4 border-l-4 border-sky-500/60 dark:border-white/50'
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              data-aos-duration={800}
            >
              <div className="title">
                <div className="university flex flex-col gap-2">
                  <div className='location flex items-center justify-between gap-3 text-muted-paragraph'>
                    <div className='flex gap-1'>
                      <SlLocationPin size={16} />
                      <p className='text-[13px] sm:text-sm'>{experience.company} | {experience.location}</p>
                    </div>
                    <p className='text-[13px] sm:text-sm'>{experience.date}</p>
                  </div>

                  <h3 className='text-base font-semibold'>{experience.work}</h3>
                  <p className='text-sm text-muted-paragraph'>{experience.department}</p>
                </div>
              </div>

              <div className="description">
                <ul className='list-disc list-inside space-y-2'>
                  {experience.details.map((detail, index) => (
                    <li key={index} className='text-sm sm:text-base text-muted-paragraph'>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <Title title='💼 Other Experience' />

        <div className='flex flex-col gap-12'>
          {EXPERIENCES["other"].map((experience, index) => (
            <div
              key={index}
              className='flex flex-col gap-8 pl-4 border-l-4 border-sky-500/60 dark:border-white/50'
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              data-aos-duration={800}
            >
              <div className="title">
                <div className="university flex flex-col gap-2">
                  <div className='location flex items-center justify-between gap-3 text-muted-paragraph'>
                    <div className='flex gap-1'>
                      <SlLocationPin size={16} />
                      <p className='text-[13px] sm:text-sm'>{experience.company} | {experience.location}</p>
                    </div>
                    <p className='text-[13px] sm:text-sm'>{experience.date}</p>
                  </div>

                  <h3 className='text-base font-semibold'>{experience.work}</h3>
                  <p className='text-sm text-muted-paragraph'>{experience.department}</p>
                </div>
              </div>

              <div className="description">
                <ul className='list-disc list-inside space-y-2'>
                  {experience.details.map((detail, index) => (
                    <li key={index} className='text-sm sm:text-base text-muted-paragraph'>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}