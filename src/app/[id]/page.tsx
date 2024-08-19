"use client";

import { FormEvent, useState } from "react";

export default function PupilPage({ params }: { params: { id: string } }) {
  const [problem, setProblem] = useState(0);

  const mockProblems = [
    {
      problem: "1 + 1",
      solution: 2,
    },
    {
      problem: "2 + 2",
      solution: 4,
    },
  ];

  function correctAnswer(e: FormEvent) {
    e.preventDefault();
    if (e.target.answer.value == mockProblems[problem].solution) {
      return setProblem(problem + 1);
    }
  }

  return (
    <>
      <h1>{params.id}</h1>
      <h2>Questions</h2>
      <p>{mockProblems[problem].problem}</p>
      <form onSubmit={(e) => correctAnswer(e)}>
        <input name="answer" type="number" placeholder="Answer" />
        <button type="submit">Check</button>
      </form>
    </>
  );
}
