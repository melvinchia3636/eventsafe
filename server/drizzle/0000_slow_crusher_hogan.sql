CREATE TABLE "test" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"checked" boolean DEFAULT false NOT NULL,
	"singleton" boolean DEFAULT true NOT NULL,
	CONSTRAINT "test_singleton_unique" UNIQUE("singleton"),
	CONSTRAINT "test_singleton_true" CHECK ("test"."singleton")
);
