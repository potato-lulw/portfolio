"use client"

import React from 'react'
import {motion} from "framer-motion"

export default function SectionDivider () {
  return (
    <motion.div className="bg-gray-200 rounded-full h-1 w-16 my-24 hidden sm:block"
        initial={{opacity: 0 , y: 100}} animate={{opacity:1, y: 0}} transition={{delay:0.5}}
        ></motion.div>
  )
}
