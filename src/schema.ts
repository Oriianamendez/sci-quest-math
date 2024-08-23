import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const pupils = pgTable("pupils", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  name: text("name").notNull(),
  help: integer("help").notNull(),
  teacherId: text("teacher_id").notNull(),
});

export const answers = pgTable("answers", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  pupilId: uuid("pupil_id")
    .references(() => pupils.id)
    .notNull(),
  problemId: text("problem_id").notNull(),
});
