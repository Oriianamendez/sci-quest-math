import CheckIcon from "@mui/icons-material/Check";

export function PointsBar(problems: any[], points: number) {
  return (
    <div className="flex gap-1 items-center">
      {problems.map((problem, i) =>
        points > i ? (
          <div className="bg-emerald-600 text-white rounded-full size-6 flex items-center">
            <CheckIcon />
          </div>
        ) : (
          <div className="bg-neutral-500 rounded-full size-6" />
        )
      )}
      <div className="text-3xl bg-emerald-600 text-white size-10 rounded-full flex items-center justify-center">
        {points}
      </div>
    </div>
  );
}
