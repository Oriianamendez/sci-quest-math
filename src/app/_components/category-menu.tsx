"use client";
import { Concert_One } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const concert = Concert_One({ weight: ["400"], subsets: ["latin"] });

export function CategoryMenu({ categoryId }: { categoryId: string }) {
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
      className={`${concert.className} flex flex-col text-7xl gap-4 p-4 pt-6 items-center`}
    >
      <button
        className={`w-fit rounded-lg ${categoryId == "1" && "bg-sky-200"}`}
        onClick={() => setCategory("1")}
      >
        <Image
          className="m-0 size-10 md:size-16"
          src="/symbols/+easy.png"
          width={70}
          height={70}
          alt="Green plus symbol"
        />
      </button>
      <button
        className={`w-fit rounded-lg ${categoryId == "2" && "bg-sky-200"}`}
        onClick={() => setCategory("2")}
      >
        <Image
          className="m-0 size-10 md:size-16"
          src="/symbols/+medium.png"
          width={70}
          height={70}
          alt="Yellow plus symbol"
        />
      </button>
      <button
        className={`w-fit rounded-lg ${categoryId == "3" && "bg-sky-200"}`}
        onClick={() => setCategory("3")}
      >
        <Image
          className="m-0 size-10 md:size-16"
          src="/symbols/+difficult.png"
          width={70}
          height={70}
          alt="Red plus symbol"
        />
      </button>
      <button
        className={`w-fit rounded-lg ${categoryId == "4" && "bg-sky-200"}`}
        onClick={() => setCategory("4")}
      >
        <Image
          className="m-0 size-10 md:size-16"
          src="/symbols/-easy.png"
          width={70}
          height={70}
          alt="Green minus symbol"
        />
      </button>
      <button
        className={`w-fit rounded-lg ${categoryId == "5" && "bg-sky-200"}`}
        onClick={() => setCategory("5")}
      >
        <Image
          className="m-0 size-10 md:size-16"
          src="/symbols/-medium.png"
          width={70}
          height={70}
          alt="Yellow minus symbol"
        />
      </button>
      <button
        className={`w-fit rounded-lg ${categoryId == "6" && "bg-sky-200"}`}
        onClick={() => setCategory("6")}
      >
        <Image
          className="m-0 size-10 md:size-16"
          src="/symbols/-difficult.png"
          width={70}
          height={70}
          alt="Red minus symbol"
        />
      </button>
      <button
        className={`w-fit rounded-lg ${categoryId == "7" && "bg-sky-200"}`}
        onClick={() => setCategory("7")}
      >
        <Image
          className="m-0 size-10 md:size-16"
          src="/symbols/question-mark.png"
          width={70}
          height={70}
          alt="Question mark symbol"
        />
      </button>
    </aside>
  );
}
