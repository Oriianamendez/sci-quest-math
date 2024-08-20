import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { revalidatePath } from "next/cache";

const url = process.env.POSTGRES_URL as string;

const client = postgres(url);
export const db = drizzle(client, { schema, logger: true });

type Pupil = {
  id: string;
  name: string;
  points: number;
  help: number;
};

const mockProblems = [
  {
    problem: "1 + 1",
    solution: 2,
  },
  {
    problem: "2 + 2",
    solution: 4,
  },
];
const mockPupils: Pupil[] = [
  {
    id: "1",
    name: "Harald",
    points: 1,
    help: 0,
  },
  {
    id: "2",
    name: "Lukas",
    points: 3,
    help: 0,
  },
  {
    id: "3",
    name: "Oriana",
    points: 3,
    help: 0,
  },
];

export async function getPupils() {
  //return await db.query.pupils.findMany();
  return await mockPupils;
}

export async function getPupilById(id: string) {
  //return await db.query.pupils.findMany();
  return await mockPupils.find((pupil) => pupil.id == id);
}

export async function updatePupil(id: string, points: number) {
  let index = mockPupils.findIndex((pupil) => pupil.id == id);
  mockPupils[index] = { ...mockPupils[index], points: points };

  return mockPupils[index];
}
export async function pupilHelp(id: string) {
  let index = mockPupils.findIndex((pupil) => pupil.id == id);
  mockPupils[index] = { ...mockPupils[index], help: Number(new Date()) };

  return mockPupils[index];
}

export async function addPupil(name: string) {
  await mockPupils.push({
    id: (mockPupils.length + 1).toString(),
    name: name,
    points: 0,
    help: 0,
  });
}

export async function getProblems() {
  return await mockProblems;
}
