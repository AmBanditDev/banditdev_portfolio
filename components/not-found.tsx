import { icons } from '@/src/app/constants/icons'
import { MoveLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
import { fadeMotion } from '@/src/app/constants/motion'

const NotFound = () => {
    return (
        <motion.div {...fadeMotion} className="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                <Image src={icons.notFound} alt='404 Not Found' width={500} height={500} className='w-full h-full object-cover' />
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Project not found!</h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    The project you are looking for was not found.
                </p>

                <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                    <Link href="/" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                        <MoveLeft className='size-5' />
                        <span>Home</span>
                    </Link>

                    <Link href="/projects" className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-sky-500 rounded-lg shrink-0 sm:w-auto hover:bg-sky-400 dark:hover:bg-sky-400 dark:bg-sky-500">
                        View Projects
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default NotFound