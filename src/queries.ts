import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

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
    id: "1",
    categoryId: "1",
    problem: "1 + 1",
    solution: 2,
  },
  { id: "2", categoryId: "1", problem: "2 + 2", solution: 4 },
  { id: "3", categoryId: "1", problem: "3 + 3", solution: 6 },
  { id: "4", categoryId: "2", problem: "4 - 2", solution: 2 },
  { id: "5", categoryId: "2", problem: "10 - 4", solution: 6 },
  { id: "6", categoryId: "2", problem: "8 - 4", solution: 4 },
  {
    id: "7",
    categoryId: "3",
    problem:
      "You have 3 apples. Your friend gives you 4 more apples. How many apples do you have now?",
    solution: 7,
  },
  {
    id: "8",
    categoryId: "3",
    problem:
      "There are 5 birds on a tree. 2 more birds come and join them. How many birds are on the tree now?",
    solution: 7,
  },
  {
    id: "9",
    categoryId: "3",
    problem:
      "You have 6 toy cars. You get 3 more toy cars as a gift. How many toy cars do you have in total?",
    solution: 9,
  },
  {
    id: "10",
    categoryId: "4",
    problem:
      "You have 8 candies. You eat 3 of them. How many candies do you have left?",
    solution: 5,
  },
  {
    id: "11",
    categoryId: "4",
    problem:
      "There are 7 balloons. 2 balloons fly away. How many balloons are left?",
    solution: 5,
  },
  {
    id: "12",
    categoryId: "4",
    problem:
      "You have 10 cookies. You give 4 cookies to your friend. How many cookies do you have now?",
    solution: 6,
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
export async function updateHelpTimestamp(id: string) {
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

export async function getProblemsByCategory(id: string) {
  return await mockProblems.filter((problem) => problem.categoryId == id);
}
