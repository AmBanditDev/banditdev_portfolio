import React from 'react'
import Contact from './Contact'

export default function Footer() {
  return (
    <footer id='contact' className='container pt-15 pb-4 px-4 lg:px-0' >
      <div className='flex flex-col gap-15'>
        <Contact />

        <div className='copyright flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 pt-4 border-t border-slate-200 dark:border-slate-800'>
          <p className='text-light-gray text-sm'>Created By Next.JS 15.3</p>
          <p className='text-light-gray text-sm'>BanditDev &copy; Copyright {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}