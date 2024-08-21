"use server";

import { getProblemsAction } from "@/actions";
import { Problem } from "../_components/problem";
import { getPupilById } from "@/queries";
import { redirect } from "next/navigation";
import { HelpButton } from "../_components/help-button";
import { PointsBar } from "../_components/points-bar";
import { CategoryMenu } from "../_components/category-menu";

export default async function PupilPage({
  params,
}: {
  params: { id: string };
}) {
  const pupil = await getPupilById(params.id);
  if (!pupil) redirect("/");
  const problems = await getProblemsAction();

  return (
    <div className="w-full flex flex-row justify-center gap-8 p-4">
      <div className="flex flex-col items-center">
        <h2>{pupil.name}</h2>

        <HelpButton id={params.id} />
        <PointsBar points={pupil.points} problems={problems} />
        <Problem problems={problems} pupil={pupil} />
      </div>

      <CategoryMenu />
    </div>
  );
}
