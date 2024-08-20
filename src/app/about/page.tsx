import Link from "next/link";
import { Main } from "../_components/main";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <Main>
      <nav className="px-4 flex justify-between">
        <Image
          className="m-0 size-10"
          src="/logo.png"
          priority
          width={40}
          height={40}
          alt=""
        />
        <Link href={"/dashboard"} className="border bg-sky-300 rounded-md p-2">
          Teacher
        </Link>
      </nav>
      <header className="flex flex-col items-center w-full">
        <h1 className="text-5xl pt-12 text-sky-900">SciQuest Math</h1>
        <p className="text-center text-lg px-4 pb-4 m-0 text-sky-900">
          Empowering first graders to master math with fun, while giving
          teachers the tools to track and support every student's progress.
        </p>
        <Image
          className="m-0"
          src="/education.png"
          priority
          width={400}
          height={400}
          alt=""
        />
      </header>
      <article className="text-justify">
        <section className="bg-sky-200 p-4">
          <h2 className="mt-4">For teacher</h2>
          <p>
            Our app empowers teachers with easy-to-use management tools.
            Teachers can effortlessly add students to the platform, track their
            progress, and view a comprehensive table showing each student's
            name, points, and an indicator if a student needs extra help. This
            enables teachers to quickly identify areas where students may be
            struggling, ensuring that no one falls behind.
          </p>
        </section>
        <section className="bg-sky-100 p-4">
          <h2 className="mt-4">For students</h2>
          <p>
            Students are provided with an interactive and enjoyable way to
            practice math. As they solve the questions, the app keeps track of
            their progress, awarding points for correct answers. This not only
            motivates them to keep learning but also helps them see their own
            improvement over time.
          </p>
        </section>
        <section className="bg-sky-200 p-4">
          <h2 className="mt-4">In the classroom</h2>
          <p>
            Our Math Practice App is designed to be a seamless addition to the
            classroom environment. Whether it's during individual study time or
            as part of a group activity, students can use the app to reinforce
            what they’ve learned. The real-time feedback and point system make
            learning math both fun and rewarding.
          </p>
        </section>
      </article>
      <footer className="text-justify p-4">
        <p>
          We believe that with the right tools, learning math can be an
          enjoyable journey. Our app is here to make that possible by providing
          an interactive, supportive, and efficient learning platform for first
          graders.
        </p>
      </footer>
    </Main>
  );
}
