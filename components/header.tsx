import React from 'react'

export default function Header() {
  return (
    <header className='z-[999] relative'>
        {/* <div className='w-full h-[4.5rem] fixed top-0 left-1/2 rounded-none bg-white bg-opacity-80 border border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'></div> */}
        <div className='w-full h-[4.5rem] fixed top-0 left-1/2 -translate-x-1/2 rounded-none bg-white bg-opacity-80 border border-white border-opacity-40 sm:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full shadow-lg shadow-black/[0.03]'></div>
    </header>
    
  )
}
