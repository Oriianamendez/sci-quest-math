"use server";

import { revalidatePath } from "next/cache";
import {
  addPupil,
  deletePupil,
  getProblemsByCategory,
  getPupilById,
  getPupilsByTeacherId,
  updateHelpTimestamp,
  updatePupil,
} from "./queries";
import { auth } from "@clerk/nextjs/server";

export async function getPupilsAction() {
  const { userId } = auth();
  if (!userId) return;

  return await getPupilsByTeacherId(userId);
}

export async function getPupilByIdAction(id: string) {
  return await getPupilById(id);
}

export async function updatePupilAction(id: string, problemId: string) {
  revalidatePath("/dashboard");
  revalidatePath(`/${id}`);
  return await updatePupil(id, problemId);
}

export async function pupilHelpAction(id: string, help: number) {
  await updateHelpTimestamp(id, help);
  revalidatePath("/dashboard");
  revalidatePath(`/${id}`);
}

export async function getProblemsByCategoryAction(id: string) {
  return await getProblemsByCategory(id);
}

export async function addPupilAction(formData: FormData) {
  const { userId } = auth();
  await addPupil((formData.get("pupil") as string).trim(), userId!);
  revalidatePath("/dashboard");
}
export async function deletePupilAction(id: string) {
  await deletePupil(id);
  revalidatePath("/dashboard");
}
