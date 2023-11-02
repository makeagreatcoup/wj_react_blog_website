"use client";

// import { UserButton, useAuth } from "@clerk/nextjs";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { status } = useSession();

  const [open, setOpen] = useState(false);
  return (
    <>
      {/* {isSignedIn ? <UserButton afterSignOutUrl="/" />  : <Link href="/api/sign-in/" >登录</Link>} */}
      {status === "authenticated" ? <Link href={""} onClick={()=>signOut()}>登出</Link> : <Link href={""} onClick={()=>signIn()}>登录</Link>}
      <div
        className="w-5 h-4 cursor-pointer flex md:hidden  justify-between flex-col"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-0.5 reverseBgColor"></div>
        <div className="w-full h-0.5 reverseBgColor"></div>
        <div className="w-full h-0.5 reverseBgColor"></div>
      </div>

      {open && (
        <div className=" bgColor  top-20 left-0 w-full flex flex-col items-center justify-center gap-16 z-50 h-[calc(100%-80px)]  absolute text-lg">
          <Link href="/">首页</Link>
          <Link href="/">关于</Link>
          <Link href="/">项目</Link>
          {/* <UserButton afterSignOutUrl="/" /> */}
          {status === "authenticated" ? <Link href={""} onClick={()=>signOut()}>登出</Link> : <Link href={""} onClick={()=>signIn()}>登录</Link>}
        </div>
      )}
    </>
  );
};

export default Navbar;
