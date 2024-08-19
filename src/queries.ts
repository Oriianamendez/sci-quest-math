import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const url = process.env.POSTGRES_URL as string;

const client = postgres(url);
export const db = drizzle(client, { schema, logger: true });

export async function getPupils() {
  return await db.query.pupils.findMany();
}
