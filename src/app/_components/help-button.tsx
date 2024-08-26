"use client";

import { pupilHelpAction } from "@/actions";
import Image from "next/image";

export function HelpButton({ id, help }: { id: string; help: number }) {
  return (
    <button
      className="rounded-full p-4 bg-neutral-500 hover:bg-green-500"
      onClick={() => pupilHelpAction(id, help)}
    >
      <Image
        className="m-0"
        src="/help.png"
        priority
        width={150}
        height={150}
        alt="A hand to ask for help"
      />
    </button>
  );
}
