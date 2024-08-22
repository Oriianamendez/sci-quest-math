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
    <>
      <div className="w-full flex flex-row gap-8">
        <div className="flex flex-col items-start bg-sky-100 m-0 pl-6 w-40">
          <HelpButton id={params.id} help={pupil.help} />
          <CategoryMenu />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-6xl py-10 m-0">{pupil.name}</h2>

          <PointsBar answers={pupil.answers} problems={problems} />
          <Problem problems={problems} pupil={pupil} />
        </div>
      </div>
    </>
  );
}
