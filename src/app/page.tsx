import Cover from '@/components/cover'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center">
      <Cover/>
      <div className='h-52 font-cover text-4xl'>Continua...</div>
    </main>
  )
}
