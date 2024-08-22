"use client";

import { updatePupilAction } from "@/actions";
import { useRef, useState } from "react";

export function Problem({ problems, pupil }: { problems: any[]; pupil: any }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formLoading, setFormLoading] = useState(false);
  const currentProblem = problems.find(
    (problem) => !pupil.answers.includes(problem.id)
  );

  if (!currentProblem) return "Finished";

  function correctAnswer(formData: FormData) {
    setFormLoading(true);
    if ((formData.get("answer") as string) == currentProblem.solution) {
      setTimeout(() => {
        updatePupilAction(pupil.id, currentProblem.id);
        setFormLoading(false);
        formRef.current?.reset();
        return;
      }, 1000);
    }
  }

  return (
    <>
      <p className="text-justify text-black font-extrabold text-2xl py-8 lg:text-4-xl">
        {currentProblem.problem}
      </p>
      <form
        ref={formRef}
        action={async (formData) => {
          correctAnswer(formData);
        }}
        className="flex gap-2"
      >
        <input
          name="answer"
          type="number"
          placeholder="Answer"
          className="border border-black rounded-md p-2"
        />
        {formLoading ? (
          <button
            type="button"
            disabled
            className="bg-sky-200 hover:bg-sky-100 p-2 rounded-md"
          >
            Loading
          </button>
        ) : (
          <button
            type="submit"
            className="bg-sky-200 hover:bg-sky-100 p-2 rounded-md"
          >
            Check
          </button>
        )}
      </form>
    </>
  );
}
