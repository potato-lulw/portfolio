import React, { useRef } from 'react'
import SectionHeader from './section-header'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { useScroll } from 'framer-motion'
import Project  from './project'

export default function Projects() {
    return (
        <div>
            <SectionHeader>My Projects</SectionHeader>
            <div>
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






