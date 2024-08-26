"use client";

import { updatePupilAction } from "@/actions";
import { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export function Problem({ problems, pupil }: { problems: any[]; pupil: any }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formLoading, setFormLoading] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const currentProblem = problems.find(
    (problem) => !pupil.answers.includes(problem.id)
  );

  if (!currentProblem) return "Finished";

  function correctAnswer(formData: FormData) {
    setFormLoading(true);
    if ((formData.get("answer") as string) == currentProblem.solution) {
      updatePupilAction(pupil.id, currentProblem.id);
    } else {
      setWrongAnswer(true);
      return setTimeout(() => {
        setWrongAnswer(false);
        setFormLoading(false);
        formRef.current?.reset();
      }, 1500);
    }
    setFormLoading(false);
    formRef.current?.reset();
    return;
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
            className={`p-2 w-20 rounded-md ${
              wrongAnswer
                ? "bg-red-600 text-white hover:bg-red-600"
                : "bg-sky-200 hover:bg-sky-100 text-black"
            }`}
          >
            {wrongAnswer ? <CloseIcon /> : "Loading"}
          </button>
        ) : (
          <button
            type="submit"
            className="bg-sky-200 hover:bg-sky-100 text-black p-2 w-20   rounded-md"
          >
            Check
          </button>
        )}
      </form>
    </>
  );
}
