import Link from "next/link";
import Image from "next/image";
import { Main } from "./_components/main";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";

/* eslint-disable react/no-unescaped-entities */
export default async function Home() {
  return (
    <Main>
      <nav className="px-4 flex justify-between align-middle">
        <Image
          className="m-0 size-12"
          src="/logo.png"
          priority
          width={50}
          height={50}
          alt=""
        />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
        {/* <Link
          href={"/dashboard"}
          className="border bg-sky-300 rounded-md p-2 no-underline"
        >
          Teacher
        </Link> */}
      </nav>
      <header className="flex flex-col items-center w-full md:flex-row md:pt-16 md:pb-20">
        <div className="md:flex md:items-center md:flex-col">
          <h1 className="text-5xl pt-12 text-sky-900 md:text-7xl text-center">
            SciQuest Math
          </h1>
          <p className="text-center text-lg px-4 pb-4 m-0 text-sky-900 md:text-2xl md:pl-10">
            Empowering first graders to master math with fun, while giving
            teachers the tools to track and support every student's progress.
          </p>
        </div>
        <div>
          <Image
            className="m-0"
            src="/education.png"
            priority
            width={700}
            height={700}
            alt=""
          />
        </div>
      </header>
      <article className="text-justify md:flex md:justify-evenly px-2">
        <section className="bg-white p-4 md:w-1/3 md:px-8 text-sky-950 border-2 rounded-xl m-2">
          <h2 className="mt-2 md:text-3xl text-green-600">For teacher</h2>
          <p>
            Our app empowers teachers with easy-to-use management tools.
            Teachers can effortlessly add students to the platform, track their
            progress, and view a comprehensive table showing each student's
            name, points, and an indicator if a student needs extra help. This
            enables teachers to quickly identify areas where students may be
            struggling, ensuring that no one falls behind.
          </p>
          <p className="text-7xl flex justify-center m-0">🧑🏼‍🏫</p>
        </section>
        <section className="bg-white p-4 md:w-1/3 md:px-8 text-sky-950 border-2 rounded-xl m-2">
          <h2 className="mt-2 md:text-3xl text-yellow-500">In the classroom</h2>
          <p>
            Our Math Practice App is designed to be a seamless addition to the
            classroom environment. Whether it's during individual study time or
            as part of a group activity, students can use the app to reinforce
            what they’ve learned. The real-time feedback and point system make
            learning math both fun and rewarding.
          </p>
          <br />
          <br />
          <p className="text-7xl flex justify-center m-0">🎒</p>
        </section>
        <section className="bg-white p-4 md:w-1/3 md:px-8 text-sky-950 border-2 rounded-xl m-2">
          <h2 className="mt-2 md:text-3xl text-blue-600">For students</h2>
          <p>
            Students are provided with an interactive and enjoyable way to
            practice math. As they solve the questions, the app keeps track of
            their progress, awarding points for correct answers. This not only
            motivates them to keep learning but also helps them see their own
            improvement over time.
          </p>
          <br />
          <br />
          <br />
          <p className="text-7xl flex justify-center m-0">👦🏽👧🏻</p>
        </section>
      </article>
      <footer className="flex flex-col text-center md:p-10 md:pt-12 py-8 px-4">
        <p className="font-bold text-2xl leading-8 m-0">
          We believe that with the right tools, learning math can be an
          enjoyable journey.
        </p>
        <p className="m-0">
          Our app is here to make that possible by providing an interactive,
          supportive, and efficient learning platform for first graders.
        </p>
      </footer>
    </Main>
  );
}
