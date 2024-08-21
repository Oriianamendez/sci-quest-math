import CheckIcon from "@mui/icons-material/Check";

export function PointsBar({
  problems,
  answers,
}: {
  problems: any[];
  answers: string[];
}) {
  return (
    <div className="flex gap-1 items-center">
      {problems.map((problem) =>
        answers.includes(problem.id) ? (
          <div
            key={problem.id}
            className="bg-emerald-600 text-white rounded-full size-6 flex items-center"
          >
            <CheckIcon />
          </div>
        ) : (
          <div
            key={problem.id}
            className="bg-neutral-500 rounded-full size-6"
          />
        ),
      )}
      <div className="text-3xl bg-emerald-600 text-white size-10 rounded-full flex items-center justify-center">
        {answers.length}
      </div>
    </div>
  );
}
