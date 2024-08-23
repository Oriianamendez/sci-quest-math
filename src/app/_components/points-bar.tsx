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
            className="bg-green-500 text-white rounded-full size-10 flex items-center justify-center"
          >
            <CheckIcon />
          </div>
        ) : (
          <div
            key={problem.id}
            className="bg-neutral-500 rounded-full size-10"
          />
        )
      )}
      <div className="text-3xl bg-green-500 text-white size-14 rounded-full flex items-center justify-center">
        {answers.length}
      </div>
    </div>
  );
}
