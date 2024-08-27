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
    <main className="flex bg-yellow-300">
      <section className="static flex flex-col bg-sky-100 w-40 h-svh">
        <CategoryMenu />
      </section>
      <section className="w-full lg:max-w-2xl lg:mx-auto gap-8 flex flex-col items-center">
        <div className="self-start flex items-center gap-2 p-4">
          <div className="text-5xl bg-yellow-200 size-20 rounded-full flex items-center justify-center">
            {pupil.answers.length}
          </div>
          <h2 className="text-4xl">{pupil.name}</h2>
        </div>
        <div className="flex gap-8 items-start p-8">
          <div className="flex flex-col gap-8 max-w-min">
            <PointsBar
              answers={pupil.answers as string[]}
              problems={problems}
            />
            <Problem problems={problems} pupil={pupil} />
          </div>
          <HelpButton id={params.id} help={pupil.help} />
        </div>
      </section>
    </main>
  );
}
