import { Problem } from "@/types";
import CheckIcon from "@mui/icons-material/Check";

export function PointsBar({
  problems,
  answers,
}: {
  problems: Problem[];
  answers: string[];
}) {
  console.log();
  return (
    <div className="flex gap-1 items-center">
      {problems.map((problem) =>
        answers.includes(problem.id) ? (
          <div
            key={problem.id}
            className="bg-green-500 text-white rounded-full size-10 flex items-center justify-center"
          >
            <CheckIcon />
          </div>
        ) : (
          <div
            key={problem.id}
            className="bg-neutral-500 rounded-full size-10"
          />
        ),
      )}
    </div>
  );
}
