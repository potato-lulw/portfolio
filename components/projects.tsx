"use client"

import React, { useEffect, useRef } from 'react'
import SectionHeader from './section-header'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll } from 'framer-motion'
import Project from './project'
import { useInView } from 'react-intersection-observer'
import { useActiveActiveSectonContext } from '@/context/active-section-context'

export default function Projects() {
    const [ref, inView] = useInView({
        threshold:0.50
      });
    const { setActiveSection } = useActiveActiveSectonContext();
    // console.log(inView)
    useEffect(() => {
        if (inView) {
            setActiveSection("Projects")
        }
    }, [inView, setActiveSection])

    return (
        <div id='projects' className='scroll-mt-28' ref={ref}>
            <SectionHeader>My Projects</SectionHeader>
            <div >
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}






