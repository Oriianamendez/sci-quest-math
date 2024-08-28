"use client";

import { pupilHelpAction } from "@/actions";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";

export function HelpButton({ id, help }: { id: string; help: number }) {
  return (
    <button
      className={`rounded-full p-2 md:p-4 ${
        help != 0
          ? "hover:bg-green-400 bg-green-500"
          : "hover:bg-neutral-400 bg-neutral-500 "
      } transition-colors`}
      onClick={() => {
        pupilHelpAction(id, help),
          toast({
            description:
              help == 0 ? "Help is on the way!" : "Good job, keep practicing!",
          });
      }}
    >
      <Image
        className="m-0 size-10 md:size-16 lg:size-28"
        src="/help.png"
        priority
        width={150}
        height={150}
        alt="A hand to ask for help"
      />
    </button>
  );
}
