"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";

const Comments = ({ postId }: { postId: string }) => {
  const { status } = useSession();

  const [desc, setDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const data = [
    {
      id: "1",
      desc: "描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述",
      time: "2020-01-01",
      user: { name: "John Doe", image: "/coding.png" },
      image: "/coding.png",
    },
  ];
  // const { data, mutate, isLoading } = useSWR(
  //   `http://localhost:3000/api/comments?postSlug=${postId}`,
  //   fetcher
  // );
  return (
    <div className="mt-10">
      <h1 className="mb-8 softTextColor text-lg">当前评论</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-8">
          <textarea
            placeholder="请输入评论"
            className="w-full p-5"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="px-5 py-4 bg-green-600 text-white font-bold border-none rounded-md cursor-pointer">
            发送
          </button>
        </div>
      ) : (
        <Link href={""}  className="px-4 py-2 w-max rounded-2xl border-2">请先登录</Link>
      )}
      <div className="mt-10">
        {isLoading
          ? "loading"
          : data?.map((item) => (
              <div key={item.id} className="">
                <div className="flex gap-4 mb-3 items-center">
                  {item?.user?.image && (
                    <div className="w-12 h-12 relative">
                      <Image
                        src={item.user.image}
                        alt=""
                        fill
                        className=" rounded-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-1 softTextColor">
                    <span>{item.user.name}</span>
                    <span>{item.time}</span>
                  </div>
                </div>
                <p className=" text-sm font-light">{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
