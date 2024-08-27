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
      className={`${concert.className} flex flex-col text-7xl gap-4 p-4 pt-6`}
    >
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setCategory("1")}
      >
        <Image
          className="m-0"
          src="/symbols/+easy.png"
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
          src="/symbols/+medium.png"
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
          src="/symbols/+difficult.png"
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
          src="/symbols/-easy.png"
          width={70}
          height={70}
          alt="Question mark symbol"
        />
      </button>
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setCategory("5")}
      >
        <Image
          className="m-0"
          src="/symbols/-medium.png"
          width={70}
          height={70}
          alt="Question mark symbol"
        />
      </button>
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setCategory("6")}
      >
        <Image
          className="m-0"
          src="/symbols/-difficult.png"
          width={70}
          height={70}
          alt="Question mark symbol"
        />
      </button>
      <button
        className="flex items-center justify-center rounded-lg"
        onClick={() => setCategory("7")}
      >
        <Image
          className="m-0"
          src="/symbols/question-mark.png"
          width={70}
          height={70}
          alt="Question mark symbol"
        />
      </button>
    </aside>
  );
}
