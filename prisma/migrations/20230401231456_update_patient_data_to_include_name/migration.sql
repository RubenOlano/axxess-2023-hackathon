/*
  Warnings:

  - Added the required column `fname` to the `PatientData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `PatientData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PatientData" ADD COLUMN     "fname" TEXT NOT NULL,
ADD COLUMN     "lname" TEXT NOT NULL;
