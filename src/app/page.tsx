'use client';
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Cover from '@/components/cover'
import LearningSection from '@/components/learning-section';
import Footer from '@/components/footer';
import MainHeader from '@/components/main-header';

export default function Home() {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 })
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollThreshold = windowHeight - 50; // Defina o ponto de rolagem após o qual o cabeçalho aparecerá

      if (scrollPosition > scrollThreshold) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <main className="flex min-h-screen w-full h-full flex-col items-center">
      {showHeader && <MainHeader/>}
      <Cover />
      <Skills />
      <Projects />
      <LearningSection />
      <Footer />
    </main>
  )
}
