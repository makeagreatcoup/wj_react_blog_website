import { SignIn } from "@clerk/nextjs";
 
export default function Page() {

  return <>
    登录
    <SignIn />
  </>;
}