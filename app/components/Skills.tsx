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

  return (
    <section id='stack' className='container px-4 py-15 lg:px-0 scroll-mt-20'>
      <div className='flex flex-col gap-8'>
        <Title title='✨ Skills' />

        <Tabs defaultValue="all">
          <TabsList
            className='w-full md:w-fit self-center mb-6 rounded-full overflow-x-scroll sm:overflow-auto'
            data-aos="fade-up"
          >
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend_database">Backend</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="design_tools">Design Tools</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
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