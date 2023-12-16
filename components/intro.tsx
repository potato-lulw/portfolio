'use client'

import React from 'react'
import Image from 'next/image'
import logo from "@/app/favicon.ico"
import { motion } from "framer-motion"
export default function Intro() {
  return (
    <section>
      <div>
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
        <motion.div className="text-center py-8" initial={{opacity:0, y:100}} animate={{opacity:1, y: 0}}>
          <h1 className="text-2xl font-bold sm:text-4xl">🚀 Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Om Patil</span>!</h1>
          <p className="mt-4 text-lg italic">Aspiring <span className="font-bold">3rd-year</span> student 🎓 passionate about <span className="font-bold">web development</span> and all things <span className="font-bold">programming 💻</span>.</p>
        </motion.div>

        <motion.section className="flex justify-center mb-8" initial={{opacity:0, x:-100}} animate={{opacity:1, x: 0}}>
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

    </section>
  )
}
