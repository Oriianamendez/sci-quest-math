"use client";
import { Concert_One } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const concert = Concert_One({ weight: ["400"], subsets: ["latin"] });
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
      className={`${concert.className} flex flex-col text-7xl gap-8 p-4 pt-6`}
    >
      <Image
        className="m-0 size-12 ml-4 lg:ml-8"
        src="/logo.png"
        priority
        width={50}
        height={50}
        alt="Logo of SciQuest Math"
      />
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setCategory("1")}
      >
        <Image
          className="m-0"
          src="/symbols/+.png"
          width={70}
          height={70}
          alt="Plus symbol"
        />
      </button>
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setCategory("2")}
      >
        <Image
          className="m-0"
          src="/symbols/-.png"
          width={70}
          height={70}
          alt="Minus symbol"
        />
      </button>
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setCategory("3")}
      >
        <Image
          className="m-0"
          src="/symbols/question+.png"
          width={70}
          height={70}
          alt="Question mark symbol"
        />
      </button>
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setCategory("4")}
      >
        <Image
          className="m-0"
          src="/symbols/question-.png"
          width={70}
          height={70}
          alt="Question mark symbol"
        />
      </button>
    </aside>
  );
}
