import Intro from '@/components/intro'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 h-[2000px]">
      <Intro/>
    </main>
  )
}
