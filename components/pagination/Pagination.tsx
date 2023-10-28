"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }:{page:number, hasPrev:boolean, hasNext:boolean}) => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <button
        className="w-20 border-none p-[10px] text-xs bg-red-500 text-white cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        上一页
      </button>
      <button
        disabled={!hasNext}
        className="w-20 border-none p-[10px] text-xs bg-red-500 text-white cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        下一页
      </button>
    </div>
  );
};

export default Pagination;
