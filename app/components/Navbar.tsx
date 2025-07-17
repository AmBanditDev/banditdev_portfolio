import React from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

export default function Navbar() {
  return (
    <nav className='sticky top-0 left-0 right-0 z-50 px-4 md:px-0 pt-3'>
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
                className=""
              >
                About
              </Link>
              <Link
                href="/#projects"
                className=""
              >
                Projects
              </Link>
              <Link
                href="/#experience"
                className=""

              >
                Experiences
              </Link>
              <Link
                href="/#education"
                className=""
              >
                Education
              </Link>
              <Link href="/#certs"
                className=""
              >
                Certs
              </Link>
              <Link
                href="/#stack"
                className=""
              >
                Skills
              </Link>
              <Link
                href="/#contact"
                className=""
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="ml-auto lg:hidden cursor-pointer rounded-full">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left">
                <SheetTitle>menu</SheetTitle>
                <div className="grid gap-2 px-6 py-6">
                  <Link href="/#intro" className="flex w-full items-center py-2 text-lg font-normal" >
                    Intro
                  </Link>
                  <Link href="/#about" className="flex w-full items-center py-2 text-lg font-normal" >
                    About
                  </Link>
                  <Link href="/#projects" className="flex w-full items-center py-2 text-lg font-normal" >
                    Projects
                  </Link>
                  <Link href="/#experience" className="flex w-full items-center py-2 text-lg font-normal" >
                    Experiences
                  </Link>
                  <Link href="/#education" className="flex w-full items-center py-2 text-lg font-normal" >
                    Education
                  </Link>
                  <Link href="/#certs" className="flex w-full items-center py-2 text-lg font-normal" >
                    Certs
                  </Link>
                  <Link href="/#stack" className="flex w-full items-center py-2 text-lg font-normal" >
                    Stack
                  </Link>
                  <Link href="/#contact" className="flex w-full items-center py-2 text-lg font-normal" >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}