CREATE TYPE "PREFERRED_OS" AS ENUM ('Windows', 'Linux', 'MacOS');

CREATE TABLE IF NOT EXISTS "developers" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"email" VARCHAR(50) NOT NULL UNIQUE 
);

CREATE TABLE IF NOT EXISTS "developerInfo" (
	"id" SERIAL PRIMARY KEY,
	"developerSince" DATE NOT NULL,
	"preferredOS" "PREFERRED_OS" NOT NULL,
	"developerId" INTEGER NOT NULL UNIQUE,
	FOREIGN KEY ("developerId") REFERENCES "developers"(id) ON DELETE CASCADE	
);

CREATE TABLE IF NOT EXISTS "projects" (
	"id" SERIAL PRIMARY KEY,
	"description" TEXT,
	"repository" VARCHAR(120) NOT NULL,
	"startDate" DATE NOT NULL,
	"endDate" DATE,
	"developerId" INTEGER,
	FOREIGN KEY ("developerId") REFERENCES "developers"(id) ON DELETE SET NULL
);