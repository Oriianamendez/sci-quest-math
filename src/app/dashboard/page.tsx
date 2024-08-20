"use server";
import { addPupilAction, getPupilsAction } from "@/actions";
import { Main } from "../_components/main";

export default async function Dashboard() {
  const pupils = await getPupilsAction();

  return (
    <main className="flex flex-col w-full items-center">
      <table className="p-4 w-2/5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {pupils.map((pupil) => (
            <tr key={pupil.id}>
              <td>{pupil.name}</td>
              <td>{pupil.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form className="flex items-center gap-4 w-fit" action={addPupilAction}>
        <input
          className="border border-black rounded-md p-2"
          name="pupil"
          type="text"
          placeholder="Pupils name"
        />
        <button className="border border-black rounded-md p-2">Add</button>
      </form>
    </main>
  );
}
