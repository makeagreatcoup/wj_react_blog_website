'use client'

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import Image from 'next/image'

const ThemeToggle = () => {

  const {theme,switchTheme} = useContext(ThemeContext)

  return (
    <div
    className='w-10 h-5 border-none rounded-full px-0.5 flex items-center justify-between relative cursor-pointer'
    onClick={()=>switchTheme(theme==='dark'?'light':'dark')}
    style={
      theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
    }
  >
    <Image src="/moon.png" alt="" width={16} height={16} />
    <div
      className='w-4 h-4 absolute rounded-full border-none transition-all'
      style={
        theme === "dark"
          ? { left: 1, background: "#0f172a" }
          : { right: 1, background: "white" }
      }
    ></div>
    <Image src="/sun.png" alt="" width={16} height={16} />
  </div>
  )
}

export default ThemeToggle