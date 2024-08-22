import { addPupilAction, getPupilsAction } from "@/actions";
import { Pupil } from "@/types";
import dynamic from "next/dynamic";

const PupilRow = dynamic(() => import("../_components/pupil-row"), {
  ssr: false,
});

export const revalidate = 5;

export default async function Dashboard() {
  const pupils = await getPupilsAction();

  pupils.sort((a: Pupil, b: Pupil) => {
    if (a.help == 0) return 1;
    if (b.help == 0) return -1;

    return a.help - b.help;
  });

  return (
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
      <form className="flex gap-4 w-fit" action={addPupilAction}>
        <input
          className="border border-sky-400 rounded-md p-2"
          name="pupil"
          type="text"
          placeholder="Pupils name"
        />
        <button className="border border-sky-400 rounded-md py-2 px-4 bg-sky-300 hover:bg-sky-200">
          Add
        </button>
      </form>
    </main>
  );
}
