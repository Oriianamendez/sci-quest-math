"use client";

import { HelpCounter } from "./help-counter";

export function PupilRow({ pupil }: { pupil: any }) {
  return (
    <tr>
      <td
        className="cursor-pointer"
        onClick={() =>
          navigator.clipboard.writeText(`${window.location.origin}/${pupil.id}`)
        }
      >
        {pupil.name}
      </td>
      <td>{pupil.answers.length}</td>
      <td>{pupil.help == 0 ? "" : <HelpCounter help={pupil.help} />}</td>
    </tr>
  );
}
