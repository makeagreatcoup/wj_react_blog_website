import CardList from '@/components/card/CardList';
import Menu from '@/components/menu/Menu';
import React from 'react'

const BlogPage = ({searchParams}:{searchParams:any}) => {
  
  const page = parseInt(searchParams.page) || 1 ;

  return (
    <div>
      <h1 className=' text-2xl bg-red-400 text-white px-2 py-[2px] items-center'>makeagreatcoup blog</h1>
      <div className='block lg:flex gap-2'>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage