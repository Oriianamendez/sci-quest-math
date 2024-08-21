"use server";

import { getProblemsByCategoryAction, getPupilByIdAction } from "@/actions";
import { Problem } from "../_components/problem";
import { redirect } from "next/navigation";
import { HelpButton } from "../_components/help-button";
import { PointsBar } from "../_components/points-bar";
import { CategoryMenu } from "../_components/category-menu";

export default async function PupilPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { category?: string };
}) {
  const categoryId = searchParams.category ? searchParams.category : "1";
  const pupil = await getPupilByIdAction(params.id);
  if (!pupil) redirect("/");
  const problems = await getProblemsByCategoryAction(categoryId);

  return (
    <div className="w-full flex flex-row justify-center gap-8 p-4">
      <div className="flex flex-col items-center">
        <h2>{pupil.name}</h2>

        <HelpButton id={params.id} />
        <PointsBar answers={pupil.answers} problems={problems} />
        <Problem problems={problems} pupil={pupil} />
      </div>

      <CategoryMenu />
    </div>
  );
}
