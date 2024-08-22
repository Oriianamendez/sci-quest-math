"use client";

import { updatePupilAction } from "@/actions";

export function Problem({ problems, pupil }: { problems: any[]; pupil: any }) {
  const currentProblem = problems.find(
    (problem) => !pupil.answers.includes(problem.id)
  );

  if (!currentProblem) return "Finished";

  function correctAnswer(formData: FormData) {
    if ((formData.get("answer") as string) == currentProblem.solution) {
      return updatePupilAction(pupil.id, currentProblem.id);
    }
  }
  //if (pupil.points >= problems.length) return <p>Finished.</p>;
  return (
    <>
      <p className="text-justify text-black font-extrabold text-7xl">
        {currentProblem.problem}
      </p>
      <form action={correctAnswer} className="flex gap-2">
        <input
          name="answer"
          type="number"
          placeholder="Answer"
          className="border border-black rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-sky-200 hover:bg-sky-100 p-2 rounded-md"
        >
          Check
        </button>
      </form>
    </>
  );
}
