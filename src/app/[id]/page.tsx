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

  function correctAnswer(e: any) {
    e.preventDefault();
    if (e.target.answer.value == mockProblems[problem].solution) {
      return setProblem(problem + 1);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h1>{params.id}</h1>
      <h2>Questions</h2>
      <p className="text-lg">{mockProblems[problem].problem}</p>
      <form onSubmit={(e) => correctAnswer(e)} className="flex gap-2">
        <input
          name="answer"
          type="number"
          placeholder="Answer"
          className="border border-black rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white hover:bg-slate-600 p-2 rounded-md"
        >
          Check
        </button>
      </form>
    </div>
  );
}
