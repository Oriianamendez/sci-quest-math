import { getPupilsAction } from "@/actions";
import { Pupil } from "@/types";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import dynamic from "next/dynamic";
import { AddPupilForm } from "../_components/add-pupil-form";
import Image from "next/image";
import Link from "next/link";

const PupilRow = dynamic(() => import("../_components/pupil-row"), {
  ssr: false,
});
const userId = auth();
console.log(userId);
export const revalidate = 5;

export default async function Dashboard() {
  const pupils = await getPupilsAction();

  pupils.sort((a: Pupil, b: Pupil) => {
    if (a.help == 0) return 1;
    if (b.help == 0) return -1;

    return a.help - b.help;
  });

  return (

    <>
      <nav className="bg-sky-100 p-4 flex justify-between align-middle">
        <Image
          className="m-0 size-12"
          src="/logo.png"
          priority
          width={50}
          height={50}
          alt=""

        />
        <SignedIn>
        <SignOutButton />
      </SignedIn>
      </nav>
      <main className="flex flex-col w-full items-center p-8 bg-sky-100">
        <table className="p-4 w-2/5">
          <thead className="text-xl">
            <tr>
              <th>Name</th>
              <th>Points</th>
              <th>Help</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {pupils.map((pupil) => (
              <PupilRow pupil={pupil} key={pupil.id} />
            ))}
          </tbody>
        </table>
        <AddPupilForm />
      </main>
    </>
  );
}
