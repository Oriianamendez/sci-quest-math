"use server";
import { addPupilAction, getPupilsAction } from "@/actions";
import { Main } from "../_components/main";
import { HelpCounter } from "../_components/help-counter";

export default async function Dashboard() {
  const pupils = await getPupilsAction();

  // function helpCounter(help: number) {
  //   const time = new Date(Number(new Date()) - help);
  //   return time.getMinutes() + ":" + time.getSeconds();
  // }

  return (
    <main className="flex flex-col w-full items-center">
      <table className="p-4 w-2/5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Help</th>
          </tr>
        </thead>
        <tbody>
          {pupils.map((pupil) => (
            <tr key={pupil.id}>
              <td>{pupil.name}</td>
              <td>{pupil.points}</td>
              <td>
                {pupil.help == 0 ? "" : <HelpCounter help={pupil.help} />}
              </td>
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
