import Cover from '@/components/cover'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center">
      <Cover />
      <Skills/>
      <Projects/>
    </main>
  )
}
