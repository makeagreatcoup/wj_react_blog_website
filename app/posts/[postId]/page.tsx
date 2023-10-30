import React from 'react'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/Comments'

const PostIdPage = ({ params }: { params: { postId: string } }) => {
  const {postId} = params

  const data = {title: 'Post 1', user: {name: 'John Doe', image: '/moon.png'}, img: '/image.png', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam'}

  return (
        <div className="">
      <div className="">
        <div className="">
          <h1 className="">{data?.title}</h1>
          <div className="">
            {data?.user?.image && (
              <div className="">
                <Image src={data.user.image} alt="" fill className="" />
              </div>
            )}
            <div className="">
              <span className="">{data?.user.name}</span>
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="">
            <Image src={data.img} alt="" fill className="" />
          </div>
        )}
      </div>
      <div className="">
        <div className="">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className="">
            <Comments postId={postId}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default PostIdPage