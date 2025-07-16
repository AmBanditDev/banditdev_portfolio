"use client"

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AOSAnimate = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return null
}

export default AOSAnimate