/*
  Warnings:

  - You are about to drop the column `area` on the `BuildingProject` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BuildingProject" DROP COLUMN "area",
ADD COLUMN     "basic_limits" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "building_type" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "plot_area" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "project_category" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "region" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "urban_or_architecture" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "title" SET DEFAULT '';
