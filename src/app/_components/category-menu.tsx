import { Rubik_Bubbles } from "next/font/google";

const rubik = Rubik_Bubbles({ weight: ["400"], subsets: ["latin"] });
export function CategoryMenu() {
  return (
    <aside
      className={`${rubik.className} flex flex-col text-5xl gap-8 text-white`}
    >
      <button className="bg-sky-300 size-20 flex items-center justify-center rounded-lg">
        +
      </button>
      <button className="bg-sky-300 size-20 flex items-center justify-center rounded-lg">
        -
      </button>
      <button className="bg-sky-300 size-20 flex items-center justify-center rounded-lg">
        ?
      </button>
    </aside>
  );
}
