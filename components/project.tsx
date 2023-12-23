"use client"

import { useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { projectsData } from "@/lib/data"
import { useInView } from "react-intersection-observer"
import { useActiveActiveSectonContext } from "@/context/active-section-context"

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const refer = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll(
        {
            target: refer,
            offset: ["0 1", "1.33 1"],
        }
    )

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])


    


    return (
        <motion.div ref={refer} 
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }} className="mb-3 sm:mb-8 last:mb-0">
            <section
                className=' group max-w-[42rem] border border-black/5 overflow-hidden rounded bg-gray-100 relative sm:pr-8  sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition '>
                <div className='pt-4 pb-8 px-5 w-1/2 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2 h-full flex flex-col'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                    <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li key={index} className='bg-black/[0.7] rounded-full px-3 py-1 text-white text-[0.7rem] uppercase'>{tag}</li>
                        ))}
                    </ul>
                </div>


                <Image src={imageUrl} alt={title} className='absolute  top-8 -right-48 sm:top-8 sm:-right-40 w-[28.25rem] rounded-lg shadow-2xl group-hover:-rotate-3 group-hover:scale-110 transition ' />

            </section>
        </motion.div>

    )

}

type ProjectProps = typeof projectsData[number]