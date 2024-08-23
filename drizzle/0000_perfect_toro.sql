CREATE TABLE IF NOT EXISTS "answers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pupil_id" uuid NOT NULL,
	"problem_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pupils" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"help" integer NOT NULL,
	"teacher_id" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answers" ADD CONSTRAINT "answers_pupil_id_pupils_id_fk" FOREIGN KEY ("pupil_id") REFERENCES "public"."pupils"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
