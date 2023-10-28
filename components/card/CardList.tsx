import React from 'react'
import Pagination from '../pagination/Pagination'
import Card from './Card'

const CardList = ({page}:{page:number}) => {

  const posts= [{id:'1',url:"/coding.png",category:"类型",title:'标题',desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',content:'内容',time:'2020-01-01'},

  {id:'2',url:"/coding.png",category:"类型",title:'标题',desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',content:'内容',time:'2020-01-01'},   

  {id:'3',url:"/coding.png",category:"类型",title:'标题',desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',content:'内容',time:'2020-01-01'},
  {id:'4',url:"/coding.png",category:"类型",title:'标题',desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',content:'内容',time:'2020-01-01'},
  {id:'5',url:"/coding.png",category:"类型",title:'标题',desc:'描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',content:'内容',time:'2020-01-01'},
  ]
  const count = 10

  const prepage = 5
  const hasPrev = prepage * (page-1)>0
  const hasNext = page * prepage < count

  return (
    <div className='flex-[2_1_0%] mt-8'>
      <h1 className='text-lg font-bold'>近期博客</h1>
      <div>
        {posts.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList