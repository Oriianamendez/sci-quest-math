import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { eq } from "drizzle-orm";
import { pupils } from "./schema";
import { problems } from "./problems";

const url = process.env.POSTGRES_URL as string;

const client = postgres(url);
export const db = drizzle(client, { schema, logger: true });

export async function getPupils(teacherId: string) {
  return await db.query.pupils.findMany({
    where: eq(pupils.teacherId, teacherId),
  });
}

export async function getPupilById(id: string) {
  return await db.query.pupils.findFirst({ where: eq(pupils.id, id) });
}

export async function updatePupil(id: string, problemId: string) {
  const pupilAnswers: string[] = await getPupilById(id).then(
    (res) => res?.answers as string[]
  );
  await db
    .update(pupils)
    .set({ answers: [...pupilAnswers, problemId] })
    .where(eq(pupils.id, id));
}
export async function updateHelpTimestamp(id: string, help: number) {
  return await db
    .update(pupils)
    .set({ help: help == 0 ? Number(new Date()) : 0 })
    .where(eq(pupils.id, id))
    .returning();
}

export async function addPupil(name: string, teacherId: string) {
  await db
    .insert(pupils)
    .values({ name: name, help: 0, teacherId: teacherId })
    .returning();
}

export async function getProblemsByCategory(id: string) {
  return await problems.filter((problem) => problem.categoryId == id);
}
