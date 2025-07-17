"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { PROFILE } from "../constants/data/main"
import { PiDownloadSimple } from "react-icons/pi";
import Link from 'next/link';
import { motion } from 'framer-motion'
import { fadeMotion } from '@/app/constants/motion'
import { Copy } from 'lucide-react';

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = () => {
    setIsCopied(false)
    if (PROFILE.email) {
      navigator.clipboard.writeText(PROFILE.email)
        .then(() => {
          setIsCopied(true)
        })
        .then(() => {
          setTimeout(() => {
            setIsCopied(false)
          }, 1000)
        })
        .catch((err) => {
          console.error('Failed to copy email: ', err);
        });
    }
  };

  return (
    <motion.header
      {...fadeMotion}
      id='intro'
      className='pt-16 md:pt-25 px-4 lg:px-0'
    >
      <div className="container flex flex-col gap-8">
        <div className='header flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4'>
          <div className='info flex flex-col lg:flex-row items-center gap-6'>
            {/* Profile Image */}
            <Image
              src={PROFILE.profile_image}
              alt={PROFILE.aka}
              width={120}
              height={120}
              className='rounded-lg'
            />

            {/* Information */}
            <div className='flex flex-col'>
              <div className='flex flex-col text-center lg:text-start space-y-2'>
                <h1 className='text-title text-xl md:text-2xl font-semibold'>
                  {PROFILE.firstname} {PROFILE.lastname}
                </h1>

                <div className='flex justify-center md:justify-start'>
                  <div className="max-w-max">
                    <h2 className="animate-typing overflow-hidden whitespace-nowrap w-max border-r-2 border-r-gray-900 dark:border-r-white pr-5 text-base md:text-lg text-muted-paragraph text-center font-medium">
                      {PROFILE.department.join(' | ')}
                    </h2>
                  </div>
                </div>

                <p className='md:max-w-96 text-sm text-muted-paragraph'>{PROFILE.represent}</p>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <a
            href={PROFILE.cv_resume_link}
            target='_blank'
            rel='noopener noreferer'
            className="my-3 px-3 py-2 flex items-center justify-center gap-x-2 rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-sky-500 before:to-sky-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-sm font-semibold text-sky-500 hover:text-white hover:dark:text-white border-2 border-sky-500 dark:border-sky-300/10 hover:dark:border-sky-500 dark:bg-sky-400/10">
            <PiDownloadSimple size={20} />{" "}
            Download CV
          </a>
        </div>

        <div className="links flex flex-col lg:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-200 dark:border-slate-800">
          <div
            onClick={handleCopyEmail}
            className='email flex items-center gap-2 cursor-pointer group'>
            <Copy className={`h-5 w-5 text-muted-paragraph group-hover:text-slate-950 group-hover:dark:text-slate-100 ${isCopied ? "text-slate-950 dark:text-slate-100" : ""}`} />
            <p className={`text-sm md:text-base text-muted-paragraph font-medium group-hover:text-slate-950 group-hover:dark:text-slate-100 ${isCopied ? "text-slate-950 dark:text-slate-100" : ""}`}>
              {isCopied ? "Copied!" : PROFILE.email}
            </p>
          </div>

          <div className="socials flex gap-4">
            {PROFILE.socials.map((social, index) => {
              const SocialIcon = social.icon
              return (
                <Link
                  key={index}
                  href={social.link}
                  target='_blank'
                  className='text-sm md:text-base text-muted-paragraph flex items-center gap-1.5 font-medium group'>
                  <SocialIcon className='size-6 group-hover:text-slate-950 group-hover:dark:text-slate-100' />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.header>
  )
}