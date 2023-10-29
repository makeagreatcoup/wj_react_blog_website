'use client'

import { ThemeContext } from '@/context/ThemeContext'
import Image,{ ImageProps } from 'next/image'
import React, { useContext } from 'react'

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string
  srcDark: string
  className?: string
}
const ThemeImage = (props: Props) => {
  const { srcLight, srcDark,className, ...rest } = props
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <Image {...rest} src={srcLight} className={`${theme === 'dark' ? ' opacity-0 hidden' : ''} ${className} transition-opacity duration-500 ease-in-out `} />
      <Image {...rest} src={srcDark} className={`${theme === 'dark' ? '' : ' opacity-0 hidden'} ${className} transition-opacity duration-500 ease-in-out `} />
    </>
  )
}


export default ThemeImage