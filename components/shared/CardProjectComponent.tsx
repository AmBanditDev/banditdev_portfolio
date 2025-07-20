import Link from 'next/link'
import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import { MdArrowOutward } from 'react-icons/md'
import { Card, CardFooter, CardHeader } from '../ui/card'
import { ProjectProps } from '@/src/app/constants/data/projects'

type CardProjectProps = {
  index: number
  project: ProjectProps,
  effect?: string
  delay?: number
  duration?: number
}

const CardProjectComponent = ({ index, project, effect, delay, duration }: CardProjectProps) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <Card
        key={index}
        className='w-full p-0 gap-0 overflow-hidden rounded-[8px] border-2 border-slate-100 dark:border-sky-300/10 bg-slate-50 dark:bg-sky-400/10 shadow-lg transition duration-300 hover:dark:border-sky-500 hover:shadow-gray-400/50'
        data-aos={effect}
        data-aos-delay={index * (delay || 0)}
        data-aos-duration={duration}
      >
        <CardHeader className='p-0'>
          <AspectRatio ratio={16 / 9}>
            <Image src={project.project_image}
              alt={project.project_name}
              width={500}
              height={350}
              loading="lazy"
              className='w-full h-full rounded-md object-cover'
            />
          </AspectRatio>
        </CardHeader>

        <CardFooter className="content flex flex-col items-start p-4 gap-2 cursor-default">
          <div className="w-full">
            <div className='flex items-center justify-between gap-2'>
              <h3 className='text-base font-semibold'>
                {project.app_name}
              </h3>
              <MdArrowOutward size={18} />
            </div>
          </div>

          <p className='text-sm text-muted-paragraph'>
            {project.category_name}
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default CardProjectComponent