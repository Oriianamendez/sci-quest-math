import { SignedIn } from "@clerk/nextjs";
import ClerkButtons from "./clerk-buttons";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="md:px-4 flex justify-between align-middle">
      <Link href={"/"}>
        <Image
          className="m-0 size-12"
          src="/logo.png"
          priority
          width={50}
          height={50}
          alt="Logo of SciQuest Math"
        />
      </Link>
      <div className="flex gap-10">
        <SignedIn>
          <Link
            href={"/dashboard"}
            className="flex w-24 items-center justify-center rounded-md border-[1px] border-black"
          >
            Teacher
          </Link>
        </SignedIn>
        <ClerkButtons />
      </div>
    </nav>
  );
}
