"use server";

import { getProblemsAction } from "@/actions";
import { Problem } from "../_components/problem";
import { getPupilById } from "@/queries";
import { redirect } from "next/navigation";

export default async function PupilPage({
  params,
}: {
  params: { id: string };
}) {
  const pupil = await getPupilById(params.id);
  if (!pupil) redirect("/");

  const problems = await getProblemsAction();

  return (
    <div className="w-full flex flex-col items-center">
      <h2>{pupil.name}</h2>
      <Problem problems={problems} pupil={pupil} />
    </div>
  );
}
