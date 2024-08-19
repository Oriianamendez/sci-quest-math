import { getPupilsAction } from "@/actions";

export default async function Home() {
  const pupils = await getPupilsAction();
  console.log(pupils);
  return <main className=""></main>;
}
