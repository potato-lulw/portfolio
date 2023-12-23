'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import logo from "@/app/favicon.ico"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { useInView } from 'react-intersection-observer'
import { useActiveActiveSectonContext } from '@/context/active-section-context'

export default function Intro() {

  const[ref, inView] = useInView({
    threshold:0.75
  });
  const { setActiveSection}=useActiveActiveSectonContext();
  // console.log(inView)
  useEffect(()=>{
    if(inView){
      setActiveSection("Home")
    }
  },[inView, setActiveSection])
  
  return (
    <section id='home' className='scroll-mt-[100rem]' ref={ref}>
      <div className='px-5'>
        <div className='flex items-center justify-center'>
          <div className='relative'>
            {/* !PROFILE PICTURE */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'tween',
                duration: 0.15
              }}
            >
              <Image src={logo} alt="profile" width='500' height='500' quality='100' className='w-24 h-24 shadow-lg rounded-full border-[0.35rem] border-white' />
            </motion.div>
            {/* !END OF PROFILE IMAGE */}

            {/* !CAT EMOJI */}
            <motion.span className='absolute text-3xl bottom-0 right-0'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 0.2, duration: 0.7, stiffness: 125 }}
            >
              🐈
            </motion.span>
            {/* !END OF CAT SECTION */}
          </div>
        </div>
        {/* !INTRO SECTION */}
        <motion.div className="text-center py-8" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold sm:text-4xl">🚀 Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Om Patil</span>!</h1>
          <p className="mt-4 text-lg italic">Aspiring <span className="font-bold">3rd-year</span> student 🎓 passionate about <span className="font-bold">web development</span> and all things <span className="font-bold">programming 💻</span>.</p>
        </motion.div>

        <motion.section className="flex justify-center mb-8" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex flex-row justify-center flex-wrap gap-3 w-[80%] sm:flex-wrap sm:w-[40rem] text-[0.8rem] sm:text-[1rem] ">
            <div>
              <p className=" font-semibold mb-4">🌐<span className='underline font-bold'>Web Development</span> Enthusiast</p>
            </div>
            <div>
              <p className=" font-semibold mb-4">🚀 Focused on <span className="font-bold underline">React.js</span></p>

            </div>
            <div>
              <p className=" font-semibold mb-4">🤏 Decent at <span className="font-bold underline">DSA</span></p>

            </div>
          </div>
        </motion.section>
        {/* !END OF INTRO SECTION */}
      </div>

      {/* !BUTTONS */}
      <motion.div className='px-10 flex gap-2 items-center justify-center sm:flex-row sm:text-lg text-sm flex-col' initial={{opacity:0, y:100}} animate={{opacity: 1, y: 0}} transition={{delay:0.1}}>

        <Link href="#contact" className='group flex gap-2 rounded-full bg-black text-white items-center px-7 py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 transition' > Get in touch <BsArrowRight className='group-hover:translate-x-2 transition'/></Link>


        <a className='group flex gap-2 rounded-full bg-white items-center px-7 py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-50 transition' target="_blank" href="/CV.pdf" download>Download CV <HiDownload className='group-hover:translate-x-1 group-hover:rotate-180 transition'/></a>


        <div className='flex gap-2 text-gray-700'>
          <a className='flex gap-2 rounded-full bg-white items-center p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-50 transition hover:text-gray-950' target="_blank" href="https://www.linkedin.com/in/om-patil-5a83a9160/"><BsLinkedin /></a>
          <a className='flex gap-2 rounded-full bg-white items-center p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-50 transition hover:text-gray-950' target="_blank" href="https://github.com/potato-lulw"><BsGithub /></a>
        </div>

      </motion.div>
      {/* !END OF BUTTONS */}
    </section>
  )
}
