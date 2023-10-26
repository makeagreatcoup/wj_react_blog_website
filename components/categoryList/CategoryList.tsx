import Link from 'next/link'
import React from 'react'

const CategoryList = () => {

  const data = [
    { id: 1, name: 'React' }
    , { id: 2, name: 'Vue' }
    , { id: 3, name: 'Angular' }
    , { id: 4, name: 'Node' }
    , { id: 5, name: 'MongoDB' }
    , { id: 6, name: 'MySQL' }
    , { id: 7, name: 'Redis' }
    , { id: 8, name: 'PostgreSQL' }
    , { id: 9, name: 'MongoDB' }]

  return (
    <div className='mt-8'>
      <h1 >热门分类</h1>
      <div className='flex flex-wrap justify-between gap-5'>
        {data?.map(item=>(
          <Link className='mt-4 px-5 h-16 w-max flex items-center justify-center rounded-lg bg-slate-700' href="/blog?category=" key={item.id}>
          {item.name}
        </Link>
        ))

        }

      </div>
    </div>
  )
}

export default CategoryList