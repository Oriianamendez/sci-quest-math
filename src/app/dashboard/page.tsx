"use server";
import { AddPupilForm } from "../_components/add-pupil-form";
import PupilsTable from "../_components/pupils-table";
import { Navbar } from "../_components/navbar";
import { Main } from "../_components/main";

export default async function Dashboard() {
  return (
    <div className="bg-sky-100">
      <Main>
        <Navbar />
        <div className="flex flex-col items-center p-8">
          <PupilsTable />
          <AddPupilForm />
        </div>
      </Main>
    </div>
  );
}
