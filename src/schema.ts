import { sql } from "drizzle-orm";
import { bigint, jsonb, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const pupils = pgTable("pupils", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  help: bigint("help", { mode: "number" }).notNull(),
  teacherId: text("teacher_id").notNull(),
  answers: jsonb("answers")
    .notNull()
    .default(sql`('["tag1", "tag2"]')`),
});
