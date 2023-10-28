import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-8">
      <h1 className="lg:text-[80px] md:text-[60px] text-[40px] font-[300]">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-16 items-center gap-12 block md:flex">
        <div className=" flex-1 h-[500px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
        <div className="flex-1 mt-16 md:mt-0 flex flex-col gap-5">
          <h1 className="text-[32px]">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit
          </h1>
          <p className="text-[16px] softTextColor">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="px-4 py-2 border-none w-max rounded-lg reverseBgColor reverseTextColor text-sm">更多</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
