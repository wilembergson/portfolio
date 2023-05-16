'use client';

import Cover from '@/components/cover'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <main className="flex min-h-screen h-full flex-col items-center">
      <Cover />
      <Skills />
      <Projects />
    </main>
  )
}
