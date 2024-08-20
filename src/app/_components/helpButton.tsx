"use client";

import { pupilHelpAction } from "@/actions";

export function Help({ id }: { id: string }) {
  return <button onClick={() => pupilHelpAction(id)}>HELP</button>;
}
