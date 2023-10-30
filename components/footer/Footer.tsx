import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-8 py-5 md:flex items-center justify-between softTextColor">
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="makeagreatcoup blog" width={50} height={50} />
          <h1 className="font-sm">makeagreatcoup blog</h1>
        </div>
        <p className=" font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="flex mt-2 gap-2">
          <Image src="/vercel.svg" alt="" width={30} height={30} />
          <Image src="/next.svg" alt="" width={30} height={30} />
        </div>
      </div>
      <div className="flex flex-1 w-full justify-center md:justify-end gap-20">
        <div className="flex flex-col gap-1 font-light">
          <span className=" font-bold">链接</span>
          <Link href="/">主页</Link>
          <Link href="/">博客</Link>
          <Link href="/">关于</Link>
          <Link href="/">项目</Link>
        </div>
        <div className="flex flex-col gap-1 font-light">
          <span className=" font-bold">标签</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-1 font-light">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
