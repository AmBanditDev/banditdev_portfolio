import React from 'react'
import Image from 'next/image'

type Skills = {
    icon: string,
    name: string,
    animation?: string,
    delay?: number,
}

export default function Skill({ icon, name, animation, delay }: Skills) {
    return (
        <div className='group' data-aos={animation} data-aos-delay={delay}>
            <div
                className='flex flex-col items-center gap-4 border-2 border-sky-300 dark:border-sky-300/10 bg-slate-50 dark:bg-sky-400/10 shadow-lg p-4 rounded-xl transition-all duration-300 group-hover:border-sky-500 group-hover:dark:border-sky-500 group-hover:shadow-sky-500/50'>
                <Image
                    src={icon}
                    alt={name}
                    width={50}
                    height={50}
                    className='transition-all duration-300 group-hover:scale-[1.09]'
                />

                <div className='text-sky-700 dark:text-slate-300 text-center text-sm font-medium line-clamp-1 truncate cursor-default transition-all group-hover:dark:text-slate-100'
                    style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>{name}</div>
            </div>
        </div>
    )
}
