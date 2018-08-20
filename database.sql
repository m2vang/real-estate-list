-- Creating listings table in sql
CREATE TABLE "listings" (
	"id" SERIAL PRIMARY KEY,
	"cost" INTEGER NOT NULL,
	"sqft" INTEGER,
	"type" VARCHAR(120) NOT NULL,
	"city" VARCHAR(120) NOT NULL DEFAULT 'Twin Cities',
	"image_path" varchar(120) NOT NULL );