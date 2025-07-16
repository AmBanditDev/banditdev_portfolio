import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { EDUCATIONS } from '../constants/data/education'
import TitleComponent from '@/components/shared/TitleComponent';

export default function Education() {
  return (
    <section id='education' className='container px-4 py-15 lg:px-0'>
      <div className='flex flex-col gap-8'>
        <TitleComponent title='🎓 Education' />

        <div className='flex flex-col gap-12'>
          {EDUCATIONS.map((education, index) => (
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
                      <p className='text-sm'>{education.location}</p>
                    </div>
                    <p className='text-sm'>{education.date}</p>
                  </div>

                  <h3 className='text-base font-semibold'>{education.field_of_study}</h3>
                  <p className='text-sm text-muted-paragraph'>{education.institute}, GPA: {education.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}