"use client";

import { pupilHelpAction } from "@/actions";
import Image from "next/image";

export function Help({ id }: { id: string }) {
  return (
    <button onClick={() => pupilHelpAction(id)}>
      <Image
        className="m-0"
        src="/help.png"
        priority
        width={50}
        height={50}
        alt=""
      />
    </button>
  );
}
