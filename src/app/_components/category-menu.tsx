"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export function CategoryMenu({ categoryId }: { categoryId: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  function setCategory(id: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", id);
    router.push(pathName + "?" + params);
  }

  const categoryArr = [
    { id: "1", src: "/symbols/+easy.png", alt: "Green plus symbol" },
    { id: "2", src: "/symbols/+medium.png", alt: "Yellow plus symbol" },
    { id: "3", src: "/symbols/+difficult.png", alt: "Red plus symbol" },
    { id: "4", src: "/symbols/-easy.png", alt: "Green minus symbol" },
    { id: "5", src: "/symbols/-medium.png", alt: "Yellow minus symbol" },
    { id: "6", src: "/symbols/-difficult.png", alt: "Red minus symbol" },
    { id: "7", src: "/symbols/question-mark.png", alt: "Question mark symbol" },
  ];

  return (
    <aside className={`flex flex-col text-7xl gap-4 p-4 pt-6 items-center`}>
      {categoryArr.map((category, i) => {
        return (
          <button
            key={i}
            className={`w-fit rounded-lg ${
              categoryId == category.id && "bg-sky-200"
            }`}
            onClick={() => setCategory(category.id)}
          >
            <Image
              className="m-0 size-10 md:size-16"
              src={category.src}
              width={70}
              height={70}
              alt={category.alt}
            />
          </button>
        );
      })}
    </aside>
  );
}
