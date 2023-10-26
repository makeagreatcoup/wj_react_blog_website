import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between h-20'>
      <div className='md:flex gap-2 flex-1 hidden'>
        <Image src="/next.svg" alt='next' width={24} height={24}/>
      </div>
      <div className='font-bold flex-1 md:text-xl lg:text-2xl'>makeagreatcoup blog</div>
      <div className='flex items-center gap-5 '>
        <ThemeToggle />
        <Link href='/' className='hidden md:block'>主页</Link>
        <Link href='/' className='hidden md:block'>项目</Link>
        <Link href='/' className='hidden md:block'>关于</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar