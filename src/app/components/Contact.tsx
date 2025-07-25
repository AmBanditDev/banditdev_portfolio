"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { CONTACTS } from '../constants/data/contact';
import { PROFILE } from '../constants/data/main';
import emailjs from '@emailjs/browser'
import toast, { Toaster } from "react-hot-toast"
import { usePathname } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Title from '@/components/shared/TitleComponent';
import { Loader2Icon, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

const nameSchema = z.string()
  .min(2, "Name must be at least 2 characters.")

const emailSchema = z.string()
  .email("Email is required")
  .min(2, "Email must be at least 2 characters.")

const messageSchema = z.string()
  .min(10, "Message must be at least 10 characters.")
  .max(1000, "Message must not be longer than 1,000 characters.")

const formSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
})


export default function Contact() {
  const t = useTranslations('contactme-section');
  const pathname = usePathname()
  const [isSending, setIsSending] = useState(false)

  useEffect(() => {
    form.reset()
  }, [pathname])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSending(true)

    /**
     * @params service_id : Email Services -> Service ID
     * @params template_id : Email Templates -> Select Template -> Settings -> Template ID
     * @params formData
     * @params public_key : Account -> API Keys
     */
    emailjs.send(
      "service_qxtgqug",
      "template_zqtoubl",
      values,
      "bLuPsrylU_BPaXByq",
    ).then((response) => {
      console.log("SUCCESS", response.status, response.text);
      toast.success(t('contact-form.alert-message.send.success'))
      form.reset();
    }).catch((error) => {
      console.error("FAILED...", error);
      toast.success(t('contact-form.alert-message.send.failed'))
    }).finally(() => {
      setIsSending(false)
    })
  }

  return (
    <section id='contact' className='scroll-mt-20'>
      <Toaster />
      <div className='contact flex flex-col gap-8'>
        <Title title={`💬 ${t('title')}`} />

        <div className='content flex flex-col md:flex-row justify-between gap-12 md:gap-8'>
          <div
            className='info flex flex-col gap-8 pl-4 border-l-4 border-sky-500/60 dark:border-white/50 max-h-fit'
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            {CONTACTS.map((contact, index) => {
              const ContactIcon = contact.icon
              return (
                <div key={index} className='email flex flex-col gap-4'>
                  <h3 className='text-base text-slate-950 dark:text-slate-200 font-semibold'>
                    {t(contact.title)}:
                  </h3>
                  <Link href={contact.link} target='_blank' className='text-gray-500 dark:text-white/50 dark:hover:text-slate-100 transition duration-300 flex items-center gap-1.5 hover-link'>
                    <ContactIcon size={20} /> {contact.subtitle}
                  </Link>
                </div>
              )
            })}
            <div>
              <div className='email flex flex-col gap-4'>
                <h3 className='text-base text-slate-950 dark:text-slate-200 font-semibold'>
                  {t('contact-form.social.label')}:
                </h3>
                {PROFILE.socials.map((social, index) => {
                  const SocialIcon = social.icon
                  return (
                    <Link href={social.link} target='_blank' key={index} className='text-gray-500 dark:text-white/50 dark:hover:text-slate-100 transition duration-300 flex items-center gap-1.5 dark:hover-link'>
                      <SocialIcon size={20} /> {social.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <div
            className='contact-form w-full flex flex-col gap-4' data-aos="fade-up"
            data-aos-duration={1200}
          >
            <h3 className='text-base text-slate-950 dark:text-slate-200 font-semibold'>
              {t('contact-form.message.label')}:
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type='text' id='name' placeholder={t('contact-form.message.input-form.name')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type='email' id='email' placeholder={t('contact-form.message.input-form.email')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder={t('contact-form.message.input-form.message')} {...field} className='min-h-40' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant='default'
                  disabled={isSending}
                  className={`w-full py-2 px-3 min-h-10 rounded-lg cursor-pointer hover:opacity-80 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}>
                  {isSending ? (
                    <span className='flex items-center gap-2 '>
                      <Loader2Icon className="animate-spin" />
                      {t('contact-form.message.button.label.sending')}
                    </span>
                  ) : (
                    <span className='flex items-center gap-2 '>
                      <Send />
                      {t('contact-form.message.button.label.send')}
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}