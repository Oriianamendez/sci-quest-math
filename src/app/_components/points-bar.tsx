import { Problem } from "@/types";
import CheckIcon from "@mui/icons-material/Check";

export function PointsBar({
  problems,
  answers,
}: {
  problems: Problem[];
  answers: string[];
}) {
  return (
    <div className="flex gap-1 justify-center items-center pb-4">
      {problems.map((problem) =>
        answers.includes(problem.id) ? (
          <div
            key={problem.id}
            className="bg-green-500 text-white rounded-full size-6 md:size-10 flex items-center justify-center"
          >
            <CheckIcon />
          </div>
        ) : (
          <div
            key={problem.id}
            className="bg-neutral-500 text-white opacity-80 text-opacity-80 rounded-full size-6 md:size-10  flex items-center justify-center"
          >
            <CheckIcon />
          </div>
        ),
      )}
    </div>
  );
}
