"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import { Separator } from '@/components/ui/separator'
import { PROFILE } from '../constants/data/main'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // เพิ่ม state เพื่อควบคุมการเปิด/ปิด Sheet

  const closeSheet = () => {
    setIsOpen(false); // ตั้งค่าให้ Sheet ปิด
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
                About
              </Link>
              <Link
                href="/#projects"
                className="nav-link-underline"
              >
                Projects
              </Link>
              <Link
                href="/#experience"
                className="nav-link-underline"

              >
                Experiences
              </Link>
              <Link
                href="/#education"
                className="nav-link-underline"
              >
                Education
              </Link>
              <Link href="/#certs"
                className="nav-link-underline"
              >
                Certs
              </Link>
              <Link
                href="/#stack"
                className="nav-link-underline"
              >
                Skills
              </Link>
              <Link
                href="/#contact"
                className="nav-link-underline"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />

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
                    About
                  </Link>
                  <Link href="/#projects" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    Projects
                  </Link>
                  <Link href="/#experience" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet} >
                    Experiences
                  </Link>
                  <Link href="/#education" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    Education
                  </Link>
                  <Link href="/#certs" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    Certs
                  </Link>
                  <Link href="/#skills" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    Skills
                  </Link>
                  <Link href="/#contact" className="w-fit text-2xl font-medium nav-link-underline" onClick={closeSheet}>
                    Contact
                  </Link>
                </div>

                <SheetFooter className='space-y-4'>
                  <Separator />
                  <p className='text-sm text-muted-paragraph'>{PROFILE.full_address}</p>
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