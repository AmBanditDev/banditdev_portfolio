"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeMotion } from '@/src/app/constants/motion'
import { SlLocationPin } from "react-icons/sl";
import { EXPERIENCES } from '../constants/data/experience'
import Title from '@/components/shared/TitleComponent';
import { useTranslations } from 'next-intl';

export default function Experience() {
  const t = useTranslations('experience-section')

  const experienceGeneralData = [...EXPERIENCES["general"]].reverse()
  const experienceOtherData = [...EXPERIENCES["other"]].reverse()

  return (
    <section id='experience' className='container py-15 scroll-mt-10'>
      <motion.div {...fadeMotion} className='flex flex-col gap-8'>
        <Title title={`💼 ${t('experiences.general.title')}`} />

        <div className='flex flex-col gap-12'>
          {experienceGeneralData.map((experience, index) => (
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
                      <p className='text-[13px] sm:text-sm'>{t(experience.company_key)} | {t(experience.location_key)}</p>
                    </div>
                    <p className='text-[13px] sm:text-sm'>{t(experience.date_key)}</p>
                  </div>

                  <h3 className='text-base font-semibold'>{t(experience.work_key)}</h3>
                  <p className='text-sm text-muted-paragraph'>{t(experience.department_key)}</p>
                </div>
              </div>

              <div className="description">
                <ul className='list-disc list-inside space-y-2'>
                  {experience.details_key.map((detail, index) => (
                    <li key={index} className='text-sm sm:text-base text-muted-paragraph'>
                      {t(detail)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <Title title={`💼 ${t('experiences.other.title')}`} />

        <div className='flex flex-col gap-12'>
          {experienceOtherData.map((experience, index) => (
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
                      <p className='text-[13px] sm:text-sm'>{t(experience.company_key)} | {t(experience.location_key)}</p>
                    </div>
                    <p className='text-[13px] sm:text-sm'>{t(experience.date_key)}</p>
                  </div>

                  <h3 className='text-base font-semibold'>{t(experience.work_key)}</h3>
                  <p className='text-sm text-muted-paragraph'>{t(experience.department_key)}</p>
                </div>
              </div>

              <div className="description">
                <ul className='list-disc list-inside space-y-2'>
                  {experience.details_key.map((detail, index) => (
                    <li key={index} className='text-sm sm:text-base text-muted-paragraph'>
                      {t(detail)}
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