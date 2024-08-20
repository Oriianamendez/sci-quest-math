"use server";
import { getPupilsAction } from "@/actions";

export default async function Dashboard() {
  const pupils = await getPupilsAction();

  return (
    <>
      <table>
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
      <form action="">
        <input type="text" placeholder="Pupils name" />
        <button>Add</button>
      </form>
    </>
  );
}
