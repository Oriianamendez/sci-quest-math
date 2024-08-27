import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { eq } from "drizzle-orm";
import { pupils } from "./schema";
import { problems } from "./problems";
import { Pupil } from "./types";

const url = process.env.POSTGRES_URL as string;

const client = postgres(url);
export const db = drizzle(client, { schema, logger: true });

export async function getPupilsByTeacherId(teacherId: string) {
  try {
    return await db.query.pupils.findMany({
      where: eq(pupils.teacherId, teacherId),
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getPupilById(id: string) {
  try {
    return (await db.query.pupils.findFirst({
      where: eq(pupils.id, id),
    })) as Pupil;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePupil(id: string, problemId: string) {
  try {
    const pupilAnswers = await getPupilById(id).then(
      (res) => res?.answers as string[]
    );
    const pupil = await db
      .update(pupils)
      .set({ answers: [...pupilAnswers, problemId] })
      .where(eq(pupils.id, id))
      .returning();
  } catch (error) {
    console.log(error);
  }
}

export async function deletePupil(id: string) {
  try {
    await db.delete(pupils).where(eq(pupils.id, id));
  } catch (error) {
    console.log(error);
  }
}

export async function updateHelpTimestamp(id: string, help: number) {
  try {
    const pupil = await db
      .update(pupils)
      .set({ help: help == 0 ? Number(new Date()) : 0 })
      .where(eq(pupils.id, id))
      .returning();

    return pupil;
  } catch (error) {
    console.log(error);
  }
}

export async function addPupil(name: string, teacherId: string) {
  try {
    const pupil = await db
      .insert(pupils)
      .values({ name: name, help: 0, teacherId: teacherId })
      .returning();

    return pupil;
  } catch (error) {
    console.log(error);
  }
}

export async function getProblemsByCategory(id: string) {
  return problems.filter((problem) => problem.categoryId == id);
}
