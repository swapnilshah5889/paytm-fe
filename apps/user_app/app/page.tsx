"use client"
import { useBalance } from "@repo/store";
import { Appbar } from '../../../packages/ui/src/appBar';
import { signIn, signOut, useSession } from "next-auth/react";
const Page = (): JSX.Element => {
  const balance = useBalance();
  console.log(balance)
  const session = useSession();
  return (
    <div>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
    </div>
  );
}

export default Page;
