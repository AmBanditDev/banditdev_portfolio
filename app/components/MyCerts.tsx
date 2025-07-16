"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

import { CERTS } from '../constants/data/certs'
import TitleComponent from '@/components/shared/TitleComponent'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import LightGallery from 'lightgallery/react';
import type { LightGallery as LightGalleryInstance } from 'lightgallery/lightgallery';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function MyCerts() {
  const lightGalleryRef = useRef<LightGalleryInstance | null>(null);

  return (
    <section id='certs' className='container px-4 py-15 lg:px-0'>
      <div className='flex flex-col gap-8'>
        <TitleComponent title="🏆 Certifications" />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {CERTS.map((cert, index) => (
            <Card
              key={index}
              className='w-full p-0 gap-0 overflow-hidden rounded-[8px] border-2 border-slate-100 dark:border-sky-300/10 bg-slate-50 dark:bg-sky-400/10 shadow-lg transition-all duration-300 hover:dark:border-sky-500 hover:shadow-gray-400/50'
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration={1000}
            >
              <LightGallery
                onInit={(detail) => {
                  if (detail) {
                    lightGalleryRef.current = detail.instance;
                  }
                }}
                speed={500}
                plugins={[lgZoom, lgThumbnail]}
                elementClassNames="lightgallery-item-wrapper"
              >
                <a
                  href={cert.image.src}
                  data-lg-size="500-300"
                  className='block cursor-zoom-in'
                  data-sub-html={`<h4>${cert.name}</h4><p>${cert.organizer}</p>`}
                >
                  <CardHeader className='p-0'>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={cert.image.src}
                        alt={cert.name}
                        width={500}
                        height={300}
                        loading="lazy"
                        className='w-full h-full rounded-md object-cover'
                      />
                    </AspectRatio>
                  </CardHeader>
                </a>
              </LightGallery>

              <CardFooter className="content flex flex-col items-start p-4 gap-2 cursor-default">
                <div className="title">
                  <div className='flex flex-col gap-2'>
                    <h3 className='text-base font-semibold line-clamp-2'>
                      {cert.name}
                    </h3>
                    <p className='text-sm text-muted-paragraph'>{cert.organizer}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}