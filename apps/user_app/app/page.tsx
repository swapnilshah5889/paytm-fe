"use client"
import { Button } from "@repo/ui/button";
import { useBalance } from "@repo/store";

const Page = (): JSX.Element => {
  const balance = useBalance();
  console.log(balance)
  return (
    <div className="text-2xl">
      Hi There {balance}
      <Button />
    </div>
  );
}

export default Page;
