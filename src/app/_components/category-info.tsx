export function CategoryInfo() {
  return (
    <div className="flex-col gap-3 basis-1/4 rounded-lg py-2 hidden md:flex">
      <h2 className="text-xl text-slate-500">Category Info</h2>

      <div className="flex flex-col gap-2 p-4 bg-slate-100/75">
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-green-500 size-5" />
          <strong>Green</strong>
        </div>
        Easy - Suitable for beginners or basic practice.
      </div>
      <div className="flex flex-col gap-2 p-4 bg-slate-100/75 basis-1/4 rounded-lg ">
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-yellow-400 size-5" />
          <strong>Yellow</strong>
        </div>
        Medium - Subtraction with three numbers, and smaller numbers comes first
        in addition.
      </div>
      <div className="flex flex-col gap-2 p-4 bg-slate-100/75 basis-1/4 rounded-lg">
        <div className="flex gap-2 items-center">
          <div className="rounded-full bg-red-500 size-5" />
          <strong>Red</strong>
        </div>
        Hard - Contains results above 10.
      </div>
      <div className="flex flex-col gap-2 p-4 bg-slate-100/75 basis-1/4 rounded-lg">
        <strong>?</strong>
        Includes math problems in text.
      </div>
    </div>
  );
}
