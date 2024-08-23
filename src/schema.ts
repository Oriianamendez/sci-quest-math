import { relations, sql } from "drizzle-orm";
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

export const answers = pgTable("answers", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  pupilId: uuid("pupil_id")
    .references(() => pupils.id)
    .notNull(),
  problemId: text("problem_id").notNull(),
});
