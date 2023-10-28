import Link from 'next/link'
import React from 'react'

const MenuCategories = () => {

  const items = [
    {
      id:"1",
      url:"/",
      label:'Home',
      color:'red',
    },{
      id:"2",
      url:"/",
      label:'Home',
      color:'red',
    }
    ,{
      id:"3",
      url:"/",
      label:'Home',
      color:'red',
    }
    ,{
      id:"4",
      url:"/",
      label:'Home',
      color:'red',
    }
  ]
  return (
    <div className='mt-4 flex flex-wrap gap-4'>
      {items?.map(item=>(
        <Link href={item.url} key={item.id} className=' px-4 py-2 rounded-lg text-sm textColor bg-slate-800 w-max'>
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default MenuCategories