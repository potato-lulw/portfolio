"use client"
import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveActiveSectonContext } from '@/context/active-section-context'


export default function Header() {
    const{activeSection, setActiveSection} = useActiveActiveSectonContext()
    
    return (
        <header className='z-[999] relative'>

            <motion.div className='w-full h-[4.5rem] fixed top-0 left-1/2  rounded-none bg-white bg-opacity-80 border border-white border-opacity-40 sm:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full shadow-lg shadow-black/[0.03]'
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 100 }}
            ></motion.div>
            <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className='flex w-[22rem] flex-wrap  items-center justify-center text-gray-500 text-[0.9rem] font-medium sm:flex-nowrap sm:w-[initial] sm:gap-5'>

                    {links.map(link => (
                        <motion.li className='h-3/4 flex items-center justify-center relative' 
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 100 }}
                        >
                            <Link href={link.hash} className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition',{'text-gray-950':activeSection === link.name})} onClick={() => setActiveSection(link.name)}>
                                {link.name}

                                {link.name === activeSection &&
                                    <motion.span className='bg-gray-200 rounded-full absolute inset-0 -z-10' layoutId='activeSection' transition={{type: "spring", stiffness : 400, damping: 30}}></motion.span>
                                }
                                
                            </Link>
                        </motion.li>
                    ))}


                </ul>
            </nav>

        </header>

    )
}
