import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { EDUCATIONS } from '../constants/data/education'
import TitleComponent from '@/components/shared/TitleComponent';
import { useTranslations } from 'next-intl';

export default function Education() {
  const t = useTranslations('education-section');

  return (
    <section id='education' className='container py-15 scroll-mt-10'>
      <div className='flex flex-col gap-8'>
        <TitleComponent title={`🎓 ${t('title')}`} />

        <div className='flex flex-col gap-12'>
          {EDUCATIONS.map((edu, index) => (
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
                      <p className='text-sm'>{t(edu.institute_key)}</p>
                    </div>
                    <p className='text-sm'>{t(edu.date_key)}</p>
                  </div>

                  <h3 className='text-base font-semibold'>
                    {t(edu.field_of_study_key)}
                  </h3>
                  <p className='text-sm text-muted-paragraph'>
                    {t(edu.institute_key)}, <span className='text-white font-medium'>GPA: {t(edu.gpa_key)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}