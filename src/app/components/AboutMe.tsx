"use client"

import React from 'react'
import { PROFILE, SOFTSKILLS } from '../constants/data/main'
import { motion } from 'framer-motion'
import { fadeMotion } from '@/src/app/constants/motion'
import Title from '@/components/shared/TitleComponent'
import { useTranslations } from 'next-intl'

export default function AboutMe() {
    const t = useTranslations('aboutme-section')

    return (
        <section id='about' className='container pt-20 pb-15 scroll-mt-5'>
            <motion.div {...fadeMotion} className='flex flex-col gap-8'>
                <Title title={`👋 ${t('title')}`} />

                <p className='text-muted-paragraph' data-aos="fade-up" data-aos-duration={800}>
                    {t(PROFILE.description_key)}
                </p>

                <div>
                    <h3 className='text-base md:text-lg text-slate-900 dark:text-slate-200 font-semibold mb-4 '
                        data-aos="fade-up">
                        🌟 Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {SOFTSKILLS.map((skill, index) => (
                            <span key={index} className='px-4 py-1.5 text-sky-700 dark:text-sky-500 shadow border border-sky-300 bg-sky-100 dark:border-sky-300/10 dark:bg-sky-400/10 rounded-full text-xs md:text-sm font-semibold cursor-default'
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                data-aos-duration={1000}
                            >
                                {t(skill)}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}