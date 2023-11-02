// import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import prisma from "./connect";
import { getServerSession } from "next-auth";
import { ClerkProvider } from "@clerk/nextjs";

export const authOptions = {
  debug:true,
  providers: [
    // ClerkProvider({
    //   clientId: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    //   clientSecret: process.env.CLERK_SECRET_KEY,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions:{
        // timeout:50000,
      },
    }),
  ],

};

export const getAuthSession = () => getServerSession(authOptions);
