"use server";
import { AddPupilForm } from "../_components/add-pupil-form";
import PupilsTable from "../_components/pupils-table";
import { Navbar } from "../_components/navbar";
import { Main } from "../_components/main";
import { CategoryLegend } from "../_components/category-legend";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default async function Dashboard() {
  return (
    <div className="bg-sky-100 min-h-screen">
      <Main>
        <Navbar />
        <SignedIn>
          <div className="flex justify-around pt-6">
            <CategoryLegend />
            <div className="flex flex-col items-center basis-5/6 h-[75vh]">
              <PupilsTable />
              <AddPupilForm />
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex justify-center items-center">
            <h1>Please sign in</h1>
          </div>
        </SignedOut>
      </Main>
    </div>
  );
}
