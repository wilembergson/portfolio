'use client';
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Cover from '@/components/cover'

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
