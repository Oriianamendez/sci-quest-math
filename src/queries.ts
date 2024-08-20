import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

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
const mockPupils = [
  {
    id: 1,
    name: "Harald",
    points: 3,
  },
  {
    id: 2,
    name: "Lukas",
    points: 3,
  },
  {
    id: 3,
    name: "Oriana",
    points: 3,
  },
];
const url = process.env.POSTGRES_URL as string;

const client = postgres(url);
export const db = drizzle(client, { schema, logger: true });

export async function getPupils() {
  //return await db.query.pupils.findMany();
  return await mockPupils;
}

export async function addPupil(name: string) {
  await mockPupils.push({ id: mockPupils.length + 1, name: name, points: 0 });
}

export async function getProblems() {
  return await mockProblems;
}
