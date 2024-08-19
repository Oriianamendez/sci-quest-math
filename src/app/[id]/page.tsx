"use server";

import { getProblemsAction } from "@/actions";
import { Problem } from "../_components/problem";

export default async function PupilPage() {
  const problems = await getProblemsAction();

  return (
    <div className="w-full flex flex-col items-center">
      <h2>Questions</h2>
      <Problem problems={problems} />
    </div>
  );
}
