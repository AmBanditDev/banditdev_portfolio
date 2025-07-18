import React from 'react'
import { SKILLS } from '../constants/data/skills'
import TechStack from './Skill'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Title from '@/components/shared/TitleComponent'

export default function Skills() {
  const allSkills = [
    ...SKILLS["frontend"],
    ...SKILLS["backend_database"],
    ...SKILLS["devops"],
    ...SKILLS["design_tools"],
    ...SKILLS["other"],
  ]

  const commonClasses = `
    text-gray-700                                 
    dark:text-gray-300                             
    data-[state=active]:!text-sky-500              
    data-[state=active]:!bg-transparent            
    data-[state=active]:!shadow-none               
    data-[state=active]:!border-none               
    data-[state=inactive]:bg-transparent          
    data-[state=inactive]:border-none          
    hover:text-sky-500                           
    dark:hover:text-slate-100                      
    px-4 py-2 rounded-md
    font-semibold
    text-sm md:text-base
    cursor-pointer
    transition-colors duration-200
    focus-visible:ring-0 focus-visible:ring-offset-0
  `;

  return (
    <section id='skills' className='container py-15 scroll-mt-10'>
      <div className='flex flex-col gap-8'>
        <Title title='✨ Skills' />

        <Tabs defaultValue="all">
          <TabsList
            className='flex flex-row justify-stretch w-full overflow-x-scroll no-scrollbar rounded-full h-12 mb-4 border-2 bg-white dark:border-sky-300/10 dark:bg-sky-400/10'
            data-aos="fade-up"
          >
            <TabsTrigger value="all" className={commonClasses}>All</TabsTrigger>
            <TabsTrigger value="frontend" className={commonClasses}>Frontend</TabsTrigger>
            <TabsTrigger value="backend_database" className={commonClasses}>Backend</TabsTrigger>
            <TabsTrigger value="devops" className={commonClasses}>DevOps</TabsTrigger>
            <TabsTrigger value="mobile" className={commonClasses}>Mobile</TabsTrigger>
            <TabsTrigger value="design_tools" className={commonClasses}>Design Tools</TabsTrigger>
            <TabsTrigger value="other" className={commonClasses}>Other</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-4'>
              {allSkills.map((tech, index) => {
                return <TechStack key={index} icon={tech.icon} name={tech.name} animation='fade-up' delay={index * 50} />
              })}
            </div>
          </TabsContent>

          <TabsContent value="frontend">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-4'>
              {SKILLS["frontend"].map((tech, index) => {
                return <TechStack key={index} icon={tech.icon} name={tech.name} animation='fade-up' delay={index * 50} />
              })}
            </div>
          </TabsContent>

          <TabsContent value="backend_database">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-4'>
              {SKILLS["backend_database"].map((tech, index) => {
                return <TechStack key={index} icon={tech.icon} name={tech.name} animation='fade-up' delay={index * 50} />
              })}
            </div>
          </TabsContent>

          <TabsContent value="devops">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-4'>
              {SKILLS["devops"].map((tech, index) => {
                return <TechStack key={index} icon={tech.icon} name={tech.name} animation='fade-up' delay={index * 50} />
              })}
            </div>
          </TabsContent>

          <TabsContent value="mobile">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-4'>
              {SKILLS["mobile"].map((tech, index) => {
                return <TechStack key={index} icon={tech.icon} name={tech.name} animation='fade-up' delay={index * 50} />
              })}
            </div>
          </TabsContent>

          <TabsContent value="design_tools">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-4'>
              {SKILLS["design_tools"].map((tech, index) => {
                return <TechStack key={index} icon={tech.icon} name={tech.name} animation='fade-up' delay={index * 50} />
              })}
            </div>
          </TabsContent>

          <TabsContent value="other">
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-4'>
              {SKILLS["other"].map((tech, index) => {
                return <TechStack key={index} icon={tech.icon} name={tech.name} animation='fade-up' delay={index * 50} />
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}