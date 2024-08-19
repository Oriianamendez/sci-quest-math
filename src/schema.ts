import { pgTable, text } from "drizzle-orm/pg-core";

export const pupils = pgTable("pupils", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  password: text("password").notNull(),
});
