"use client";

import { SessionProvider } from "next-auth/react";
// import { ClerkProvider } from "@clerk/nextjs";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
