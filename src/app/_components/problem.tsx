"use client";

import { useState } from "react";

export function Problem({ problems }: { problems: any }) {
  const [problem, setProblem] = useState(0);

  function correctAnswer(e: any) {
    e.preventDefault();
    if (e.target.answer.value == problems[problem].solution) {
      return setProblem(problem + 1);
    }
  }

  return (
    <>
      <p className="text-lg">{problems[problem].problem}</p>
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
    </>
  );
}
