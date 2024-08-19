"use server";

import { getProblems, getPupils } from "./queries";

export async function getPupilsAction() {
  return await getPupils();
}

export async function getProblemsAction() {
  return await getProblems();
}
