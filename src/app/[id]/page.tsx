"use client";

export default function PupilPage({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <>
      <h1>{params.id}</h1>
      <h2>Questions</h2>
      <p>{"problem"}</p>
      <form action="">
        <input type="number" placeholder="Answer" />
        <button type="submit">Check</button>
      </form>
    </>
  );
}
