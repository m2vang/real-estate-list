-- Creating listings table in sql
CREATE TABLE "listings" (
	"id" serial primary key,
	"cost" integer,
	"sqft" integer,
	"type" varchar(120) not null,
	"city" varchar(120) not null,
	"image_path" varchar(120) not null );