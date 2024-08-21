"use client";

import { updatePupilAction } from "@/actions";

export function Problem({ problems, pupil }: { problems: any[]; pupil: any }) {
  function correctAnswer(formData: FormData) {
    if ((formData.get("answer") as string) == problems[pupil.points].solution) {
      return updatePupilAction(pupil.id, pupil.points + 1);
    }
  }
  if (pupil.points >= problems.length) return <p>Finished.</p>;
  return (
    <>
      <p className="text-lg">{problems[pupil.points].problem}</p>
      <form action={correctAnswer} className="flex gap-2">
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
