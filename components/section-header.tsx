import React from 'react'

type SectionHeaderProps = {
    children: React.ReactNode
}

export default function SectionHeader({children}: SectionHeaderProps) {
  return (
    <h2 className="text-3xl font-semibold my-8 sm:my-0 sm:mb-4 text-center">{children}</h2>
  )
}






