import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Om Patil | Peronal Portfolio",
  description: 'Unraveling the artistry of code, project by project.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className='bg-[#ffd3f7] absolute top-[-6rem] right-[11rem] -z-10 h-[30rem] w-[30rem] rounded-full blur-[10rem] sm:w-[70rem]'></div>
        <div className='bg-[#cdcaff] absolute top-[-1rem] left-[-35rem] -z-10 h-[30rem] w-[50rem] rounded-full blur-[10rem] sm:w-[70rem]  md:left-[-33rem]  lg:left-[-28rem]  xl:left[-15rem] 2xl:left-[-5rem] '></div>
        {children}  
      </body>
    </html>
  )
}
