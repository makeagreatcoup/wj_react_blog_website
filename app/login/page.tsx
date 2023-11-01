"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  } else if (status === "loading") {
    return <div className="">Loading...</div>;
  }
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="darkBg px-[200px] py-[150px] flex flex-col gap-12 rounded-lg">
        <button
          className="p-5 rounded-md text-white font-bold cursor-pointer flex items-center justify-center bg-red-500"
          onClick={() => signIn("google")}
        >
          登录到google
        </button>
        <button
          className="p-5 rounded-md text-white font-bold cursor-pointer flex items-center justify-center bg-red-500"
          onClick={() => signIn("github")}
        >
          登录到github
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
