"use client";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { HelpCounter } from "./help-counter";

export default function PupilRow({ pupil }: { pupil: any }) {
  if (!window) return <></>;

  return (
    <tr>
      <td className="flex flex-row gap-2 items-center">
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
      </td>
      <td>{pupil.answers}</td>
      <td>{pupil.help == 0 ? "" : <HelpCounter help={pupil.help} />}</td>
    </tr>
  );
}
