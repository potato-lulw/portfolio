import Intro from '@/components/intro'
import Image from 'next/image'
import SectionDivider from '@/components/section-divider'
import About from '@/components/about'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  px-4 h-[2000px]">
      <Intro/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Projects/>
    </main>
  )
}
