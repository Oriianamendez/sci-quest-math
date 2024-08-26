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
      <section className="w-full lg:w-2/3 flex flex-row justify-center gap-8 p-4 pt-8">
        <div className="flex flex-col items-center pt-32 pl-8">
          <h2 className="absolute top-4 left-32 lg:top-0 lg:left-40 text-4xl pl-6 pt-6 m-0">
            {pupil.name}
          </h2>
          <PointsBar answers={pupil.answers as string[]} problems={problems} />
          <Problem problems={problems} pupil={pupil} />
        </div>
      </section>
      <section className="lg:w-1/3 flex flex-col items-center pt-4 pr-4 lg:gap-12 lg:pt-32">
        <HelpButton id={params.id} help={pupil.help} />
      </section>
    </main>
  );
}
