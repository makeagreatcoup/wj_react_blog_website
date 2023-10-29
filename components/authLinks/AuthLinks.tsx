"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const stauts = false;

  const [open, setOpen] = useState(false);

  return (
    <>
      {stauts ? <Link href="/">Logout</Link> : <Link href="/">Login</Link>}
      <div
        className="w-5 h-4 cursor-pointer flex md:hidden  justify-between flex-col"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-0.5 reverseBgColor"></div>
        <div className="w-full h-0.5 reverseBgColor"></div>
        <div className="w-full h-0.5 reverseBgColor"></div>
      </div>

      {open && (
        <div className=" bgColor  top-20 left-0 w-full flex flex-col items-center justify-center gap-16 z-999 h-full fixed">
          <Link href="/">首页</Link>
          <Link href="/">关于</Link>
          <Link href="/">项目</Link>
          {stauts ? <Link href="/">登出</Link> : <Link href="/">登录</Link>}
        </div>
      )}
    </>
  );
};

export default Navbar;
