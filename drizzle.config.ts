import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: { url: process.env.POSTGRES_URL as string },
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
});
