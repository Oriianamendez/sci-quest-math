import ClerkButtons from "./clerk-buttons";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="px-4 flex justify-between align-middle">
      <Image
        className="m-0 size-12"
        src="/logo.png"
        priority
        width={50}
        height={50}
        alt="Logo of SciQuest Math"
      />
      <ClerkButtons />
    </nav>
  );
}
