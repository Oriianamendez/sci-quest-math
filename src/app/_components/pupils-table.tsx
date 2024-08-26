"use client";

import { useEffect, useState } from "react";
import { getPupilsAction } from "@/actions";
import { Pupil } from "@/types";
import PupilRow from "./pupil-row";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PupilsTable() {
  const [pupils, setPupils] = useState<Pupil[] | null>(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const result = await getPupilsAction();
      setPupils(result as Pupil[]);
      console.log(result);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!pupils) return <TableBody>No pupils found</TableBody>;

  pupils.sort((a: Pupil, b: Pupil) => {
    if (a.help == 0) return 1;
    if (b.help == 0) return -1;

    return a.help - b.help;
  });

  return (
    <Table className="p-4 w-3/5 mx-auto">
      <TableHeader className="text-xl">
        <TableRow>
          <TableHead className="w-1/3">Name</TableHead>
          <TableHead className="w-1/3">Points</TableHead>
          <TableHead className="w-1/3">Help</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-lg">
        {pupils.map((pupil: Pupil) => (
          <PupilRow pupil={pupil} key={pupil.id} />
        ))}
      </TableBody>
    </Table>
  );
}
