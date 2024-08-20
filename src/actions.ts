"use server";

import { revalidatePath } from "next/cache";
import { addPupil, getProblems, getPupils } from "./queries";

export async function getPupilsAction() {
  return await getPupils();
}

export async function getProblemsAction() {
  return await getProblems();
}

export async function addPupilAction(formData: FormData) {
  await addPupil((formData.get("pupil") as string).trim());
  revalidatePath("/dashboard");
}
