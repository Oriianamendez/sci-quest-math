import {
  SignedOut,
  SignInButton,
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";

export default function ClerkButtons() {
  return (
    <div className="flex  border p-2 w-24 items-center justify-center border-sky-400 rounded-md bg-sky-300 hover:bg-sky-200">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
}
