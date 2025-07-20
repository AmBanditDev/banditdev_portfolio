"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { PROFILE } from '../constants/data/main'
import LocaleSwitcher from './LocaleSwitcher'
import { useTranslations } from 'next-intl'

export default function Navbar() {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };


  return (
    <nav className='sticky top-0 left-0 right-0 z-50 pt-3'>
      <div className='relative z-20 max-w-screen-lg mx-auto bg-background px-2 rounded-full text-foreground border'>
        <div className="h-12 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-lg font-bold pl-4"
            >
              BANDITDEV
            </Link>
          </div>

          <div className="ml-2 hidden lg:block">
            <nav className='relative z-10 flex max-w-max flex-1 items-center justify gap-4 font-semibold'>
              <Link
                href="/#about"
                className="nav-link-underline"
              >
                {t('about')}
              </Link>
              <Link
                href="/#projects"
                className="nav-link-underline"
              >
                {t('projects')}
              </Link>
              <Link
                href="/#experience"
                className="nav-link-underline"

              >
                {t('experience')}
              </Link>
              <Link
                href="/#education"
                className="nav-link-underline"
              >
                {t('education')}
              </Link>
              <Link href="/#certs"
                className="nav-link-underline"
              >
                {t('certs')}
              </Link>
              <Link
                href="/#skills"
                className="nav-link-underline"
              >
                {t('skills')}
              </Link>
              <Link
                href="/#contact"
                className="nav-link-underline"
              >
                {t('contact')}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-1">
            <ModeToggle />

            <LocaleSwitcher />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="ml-auto lg:hidden cursor-pointer rounded-full">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <SheetTitle />
                </SheetHeader>

                <div className="grid gap-2 p-6 space-y-4">
                  <Link href="/#about" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    {t('about')}
                  </Link>
                  <Link href="/#projects" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    {t('projects')}
                  </Link>
                  <Link href="/#experience" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet} >
                    {t('experience')}
                  </Link>
                  <Link href="/#education" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    {t('education')}
                  </Link>
                  <Link href="/#certs" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    {t('certs')}
                  </Link>
                  <Link href="/#skills" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    {t('skills')}
                  </Link>
                  <Link href="/#contact" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    {t('contact')}
                  </Link>
                </div>

                <SheetFooter className='space-y-4'>
                  <Separator />
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
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav >
  )
}