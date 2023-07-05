CREATE TABLE "books" (
  "id" SERIAL NOT NULL,
  "title" TEXT NOT NULL,
  "author" TEXT NOT NULL,
  "publisher" TEXT NOT NULL,
  "purchaseDate" TIMESTAMP NOT NULL,
  "read" BOOLEAN NOT NULL DEFAULT(false),
  "grade" INTEGER,
  "review" TEXT,

  CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

INSERT INTO books ("title", "author", "publisher", "purchaseDate") VALUES ('Awesome Book', 'Awesome Author', 'Awesome Publisher', '2020-01-01');