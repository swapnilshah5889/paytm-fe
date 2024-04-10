import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import { PrismaClient } from "@repo/db/client";

export default function Page(): JSX.Element {
  const client = new PrismaClient();
  return (
    <div className="text-2xl">
      Hi There
      <Button />
    </div>
  );
}
