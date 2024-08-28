export function CategoryInfo() {
  return (
    <article className="flex-col gap-3 basis-1/4 rounded-lg py-2 hidden md:flex">
      <h2 className="text-xl text-slate-500">Category Info</h2>

      <section className="flex flex-col gap-2 p-4 bg-slate-100/75">
        <h3 className="flex gap-2 items-center">
          <div className="rounded-full bg-green-500 size-5" />
          <strong>Green</strong>
        </h3>
        <p>Easy - Suitable for beginners or basic practice.</p>
      </section>
      <section className="flex flex-col gap-2 p-4 bg-slate-100/75 basis-1/4 rounded-lg ">
        <h3 className="flex gap-2 items-center">
          <div className="rounded-full bg-yellow-400 size-5" />
          <strong>Yellow</strong>
        </h3>
        <p>
          Medium - Subtraction with three numbers, and smaller numbers comes
          first in addition.
        </p>
      </section>
      <section className="flex flex-col gap-2 p-4 bg-slate-100/75 basis-1/4 rounded-lg">
        <h3 className="flex gap-2 items-center">
          <div className="rounded-full bg-red-500 size-5" />
          <strong>Red</strong>
        </h3>
        <p>Hard - Contains results above 10.</p>
      </section>
      <section className="flex flex-col gap-2 p-4 bg-slate-100/75 basis-1/4 rounded-lg">
        <strong>?</strong>
        <p>Includes math problems in text.</p>
      </section>
    </article>
  );
}
