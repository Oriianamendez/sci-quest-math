"use client";
import { Rubik_Bubbles } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const rubik = Rubik_Bubbles({ weight: ["400"], subsets: ["latin"] });
export function CategoryMenu() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  function setCategory(id: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", id);
    router.push(pathName + "?" + params);
  }

  return (
    <aside
      className={`${rubik.className} flex flex-col text-5xl gap-8 text-white`}
    >
      <button
        className="bg-sky-300 size-20 flex items-center justify-center rounded-lg"
        onClick={() => setCategory("1")}
      >
        +
      </button>
      <button
        className="bg-sky-300 size-20 flex items-center justify-center rounded-lg"
        onClick={() => setCategory("2")}
      >
        -
      </button>
      <button
        className="bg-sky-300 size-20 flex items-center justify-center rounded-lg"
        onClick={() => setCategory("3")}
      >
        ?
      </button>
    </aside>
  );
}
