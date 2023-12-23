"use client"

import React, { useEffect } from 'react'
import SectionHeader from './section-header'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveActiveSectonContext } from '@/context/active-section-context'

export default function About() {
  const[ref, inView] = useInView({
    threshold:0.75
  });
  const { setActiveSection}=useActiveActiveSectonContext();
  // console.log(inView)
  useEffect(()=>{
    if(inView){
      setActiveSection("About")
    }
  },[inView, setActiveSection])
  
  return (
    <motion.section 
    ref = {ref}
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay:0.15}}
    id='about'
    className="container mx-auto  max-w-[45rem] my-3 sm:my-0 leading-8 scroll-mt-28">
    <div className="px-8  flex-col justify-center">
        <SectionHeader>About Me</SectionHeader>
        <p className="text-gray-800 text-center">
            <span className="font-semibold">Pursuing an IB diploma</span>, I've embarked on a programming journey that led me to acquire knowledge primarily through the vast world of <span className="font-semibold">YouTube</span>. I thrive on the challenge and satisfaction of <span className="text-blue-900 px-2 rounded-md">problem-solving</span>, with a keen interest in <span className="text-green-700">web development</span>, especially on the <span className="font-semibold">frontend</span>.
        </p>
        <p className="text-gray-800 mt-4 text-center">
            Creativity flows through my veins, and I excel in translating imaginative ideas into compelling <span className="text-purple-900">frontend designs</span>. Beyond coding, you'll find me immersed in the world of <span className="text-blue-900">games</span>, expressing myself through <span className="text-pink-900">drawing</span>, strumming melodies on my <span className="text-yellow-900">guitar</span>, and indulging in my love for <span className="text-red-800">cats</span> and <span className="text-yellow-800">food</span>.
        </p>
    </div>
</motion.section>


  )
}
