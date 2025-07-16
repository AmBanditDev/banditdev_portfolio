"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { PROFILE } from "../constants/data/main"
import { SlLocationPin } from "react-icons/sl";
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
                <h2 className='text-muted-paragraph text-xl font-medium'>{PROFILE.department}</h2>
                <div className='text-muted-paragraph'>
                  <p className='text-sm md:max-w-96'>{PROFILE.represent}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button */}
          <div className='links'>
            <a href='/assets/mycv.pdf'
              rel='noopener noreferer'
              download
              className='flex items-center gap-x-2 rounded-full bg-gray-300 px-3 py-2 text-sm font-semibold tracking-tight text-slate-950'
            >
              <PiDownloadSimple size={20} />{" "}
              Download CV
            </a>
          </div>
        </div>

        <div className="links flex flex-col lg:flex-row items-center justify-between gap-4 pt-2 border-t border-[#363636]">
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
                <Link href={social.link} target='_blank' key={index} className='text-sm md:text-base text-muted-paragraph flex items-center gap-1.5 font-medium group'>
                  <SocialIcon className='h-5 w-5 group-hover:text-slate-950 group-hover:dark:text-slate-100' />
                  <span className='group-hover:text-slate-950 group-hover:dark:text-slate-100'>{social.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.header>
  )
}