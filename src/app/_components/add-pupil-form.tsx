"use client";

import { addPupilAction } from "@/actions";
import { useRef } from "react";

export function AddPupilForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex gap-4 w-fit"
      action={async (formData) => {
        addPupilAction(formData);
        inputRef.current!.value = "";
        inputRef.current!.focus;
      }}
    >
      <input
        ref={inputRef}
        className="border border-sky-400 rounded-md p-2"
        name="pupil"
        type="text"
        placeholder="Pupils name"
      />
      <button className="border border-sky-400 rounded-md py-2 px-4 bg-sky-300 hover:bg-sky-200">
        Add
      </button>
    </form>
  );
}
