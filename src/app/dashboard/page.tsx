"use server";
import { getPupilsAction } from "@/actions";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { AddPupilForm } from "../_components/add-pupil-form";
import Image from "next/image";
import PupilsTable from "../_components/pupils-table";

export default async function Dashboard() {
  const pupils = await getPupilsAction();

  return (
    <>
      <nav className="bg-sky-100 p-4 flex justify-between align-middle">
        <Image
          className="m-0 size-12"
          src="/logo.png"
          priority
          width={50}
          height={50}
          alt="Logo of SciQuest Math"
        />
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </nav>
      <div className="flex flex-col items-center p-8 bg-sky-100">
        <PupilsTable />
        <AddPupilForm />
      </div>
    </>
  );
}
