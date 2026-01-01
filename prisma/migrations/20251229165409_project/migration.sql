-- CreateTable
CREATE TABLE "BuildingProject" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "area" TEXT NOT NULL,

    CONSTRAINT "BuildingProject_pkey" PRIMARY KEY ("id")
);
