export default function Dashboard() {
  const mockPupils = [
    {
      id: 1,
      name: "Harald",
      points: 3,
    },
    {
      id: 2,
      name: "Lukas",
      points: 3,
    },
    {
      id: 3,
      name: "Oriana",
      points: 3,
    },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Help</th>
          </tr>
        </thead>
        <tbody>
          {mockPupils.map((pupil) => (
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
