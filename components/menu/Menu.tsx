import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MenuPosts from './MenuPosts'
import MenuCategories from './MenuCategories'

const Menu = () => {
  return (
    <div className='flex-1 mt-8'>
      <h2 className='text-sm font-light softTextColor mt-4'>按热门发现</h2>
      <h1 className='text-lg font-bold'>热门</h1>
      <MenuPosts withImage={false} />
      <h2 className='text-sm font-light softTextColor mt-4'>按分类发现</h2>
      <h1 className='text-lg font-bold'>分类</h1>
      <MenuCategories />
      <h2 className='text-sm font-light softTextColor mt-4'>按时间发现</h2>
      <h1 className='text-lg font-bold'>最新</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu