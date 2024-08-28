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
    <Table className="md:p-4 w-3/5 mx-auto">
      <TableHeader className="text-lg md:text-xl">
        <TableRow>
          <TableHead className="w-1/4">Name</TableHead>
          <TableHead className="w-1/4">Points</TableHead>
          <TableHead className="w-1/4">Help</TableHead>
          <TableHead className="w-1/4">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="md:text-lg">
        {pupils.map((pupil: Pupil) => (
          <PupilRow pupil={pupil} key={pupil.id} />
        ))}
      </TableBody>
    </Table>
  );
}
