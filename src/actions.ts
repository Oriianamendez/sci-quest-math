"use server";

import { getPupils } from "./queries";

export async function getPupilsAction() {
  return await getPupils();
}
