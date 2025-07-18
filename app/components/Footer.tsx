import React from 'react'
import Contact from './Contact'

export default function Footer() {
  return (
    <footer id='contact' className='container pt-15 pb-4' >
      <div className='flex flex-col gap-15'>
        <Contact />

        <div className='copyright flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 pt-4 border-t border-slate-200 dark:border-slate-800'>
          <p className='text-muted-paragraph text-xs md:text-sm'>Thanwabandit Yoschamlue Portfolio</p>
          <p className='text-muted-paragraph text-xs md:text-sm'>&copy; Copyright {new Date().getFullYear()} by Thanwabandit Yoschamlue</p>
        </div>
      </div>
    </footer>
  )
}