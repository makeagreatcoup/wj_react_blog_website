import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ item, key }: { item: any; key: string }) => {
  return (
    <div key={key} className="my-5 block md:flex items-center gap-4">
      {item.url && (
        <div className="h-52 relative flex-1">
          <Image src={item.url} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 block md:flex flex-col gap-1">
        <div className="m-2 text-[10px]">
          <span className=" text-slate-400 mr-2">{item.time}</span>
          <span className=" text-red-500 font-bold">{item.category}</span>
        </div>
        <Link href={`/posts/${item.id}`}>
          <h1 className="text-base font-bold m-2">{item.title}</h1>
        </Link>
        <div className="text-sm softTextColor m-2"
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 30) }}
        ></div>
        <Link href={`/posts/${item.id}`} className="m-2 py-[1px] w-max border-b-2 border-b-red-500 text-sm">更多</Link>
      </div>
    </div>
  );
};

export default Card;
