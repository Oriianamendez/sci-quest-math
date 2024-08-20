"use server";

import { revalidatePath } from "next/cache";
import {
  addPupil,
  getProblems,
  getPupilById,
  getPupils,
  upDateHelpTimeStamp,
  updatePupil,
} from "./queries";

export async function getPupilsAction() {
  return await getPupils();
}

export async function getPupilByIdAction(id: string) {
  return await getPupilById(id);
}

export async function updatePupilAction(id: string, points: number) {
  revalidatePath("/dashboard");
  revalidatePath(`/${id}`);
  return await updatePupil(id, points);
}

export async function pupilHelpAction(id: string) {
  await upDateHelpTimeStamp(id);
  revalidatePath("/dashboard");
  revalidatePath(`/${id}`);
}

export async function getProblemsAction() {
  return await getProblems();
}

export async function addPupilAction(formData: FormData) {
  await addPupil((formData.get("pupil") as string).trim());
  revalidatePath("/dashboard");
}
