"use server";

import { revalidatePath } from "next/cache";
import {
  addPupil,
  getProblemsByCategory,
  getPupilById,
  getPupils,
  updateHelpTimestamp,
  updatePupil,
} from "./queries";

export async function getPupilsAction() {
  return await getPupils();
}

export async function getPupilByIdAction(id: string) {
  return await getPupilById(id);
}

export async function updatePupilAction(id: string, problemId: string) {
  revalidatePath("/dashboard");
  revalidatePath(`/${id}`);
  return await updatePupil(id, problemId);
}

export async function pupilHelpAction(id: string) {
  await updateHelpTimestamp(id);
  revalidatePath("/dashboard");
  revalidatePath(`/${id}`);
}

export async function getProblemsByCategoryAction(id: string) {
  return await getProblemsByCategory(id);
}

export async function addPupilAction(formData: FormData) {
  await addPupil((formData.get("pupil") as string).trim());
  revalidatePath("/dashboard");
}
