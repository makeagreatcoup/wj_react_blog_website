import React from "react";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const PostIdPage = ({ params }: { params: { postId: string } }) => {
  const { postId } = params;

  const data = {
    title: "Post 1可惨了看错啦看出来萨",
    user: { name: "John Doe", image: "/moon.png" },
    img: "/culture.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
  };

  return (
    <div className="">
      <div className="md:flex items-center gap-10 mt-4 md:flex-row-reverse">
        {data?.img && (
          <div className="flex-1 h-[350px] relative">
            <Image src={data.img} alt="" fill className=" object-cover" />
          </div>
        )}
        <div className="flex-1 flex flex-col justify-around gap-4 mt-4">
          <h1 className=" text-6xl">{data?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            {data?.user?.image && (
              <div className="w-10 h-10 relative">
                <Image src={data.user.image} alt="" fill className=" rounded-full object-cover" />
              </div>
            )}
            <div className="flex flex-col justify-around softTextColor">
              <span className="text-lg">{data?.user.name}</span>
              <span className="">01.01.2024</span>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-4 md:flex gap-10">
        <div className="flex-[4_1] mt-16">
          <div className="text-lg font-light" dangerouslySetInnerHTML={{ __html: data?.desc }} />
          <div className="">
            <Comments postId={postId} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default PostIdPage;
