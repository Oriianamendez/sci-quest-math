"use client";

import { useEffect, useState } from "react";
import { getPupilsAction } from "@/actions";
import { Pupil } from "@/types";
import PupilRow from "./pupil-row";

export default function PupilsTable() {
  const [pupils, setPupils] = useState<Pupil[] | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const pupils = await getPupilsAction();
      setPupils(pupils);
      console.log(pupils);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!pupils) return <tbody>No pupils found</tbody>;

  pupils.sort((a: Pupil, b: Pupil) => {
    if (a.help == 0) return 1;
    if (b.help == 0) return -1;

    return a.help - b.help;
  });

  return (
    <tbody className="text-lg">
      {pupils.map((pupil: Pupil) => (
        <PupilRow pupil={pupil} key={pupil.id} />
      ))}
    </tbody>
  );
}
