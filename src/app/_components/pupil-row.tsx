"use client";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { HelpCounter } from "./help-counter";
import { TableCell, TableRow } from "@/components/ui/table";
import { Pupil } from "@/types";
import { deletePupilAction } from "@/actions";

export default function PupilRow({ pupil }: { pupil: Pupil }) {
  if (!window) return <></>;

  return (
    <TableRow>
      <TableCell className="flex flex-row gap-2 items-center">
        <button
          title={`${window.location.origin}/${pupil.id}`}
          className="flex justify-center size-6 items-center text-sm p-2 rounded-full bg-neutral-100   hover:bg-neutral-50 "
          onClick={() =>
            navigator.clipboard.writeText(
              `${window.location.origin}/${pupil.id}`
            )
          }
        >
          <ContentCopyIcon color="inherit" fontSize="inherit" />
        </button>

        {pupil.name}
      </TableCell>
      <TableCell>{pupil.answers.length}</TableCell>
      <TableCell>
        {pupil.help == 0 ? "" : <HelpCounter help={pupil.help} />}
      </TableCell>
      <TableCell className="hidden md:block">
        <button
          className="hidden md:block bg-red-400 text-white px-4 py-2 rounded-md transition-colors hover:bg-red-500"
          onClick={() => deletePupilAction(pupil.id)}
        >
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
}
