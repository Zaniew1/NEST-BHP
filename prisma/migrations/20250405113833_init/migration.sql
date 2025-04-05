/*
  Warnings:

  - You are about to drop the column `name` on the `Training` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[companyId]` on the table `Training` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[companyId]` on the table `Worker` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `city` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nip` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pkd` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regon` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainingDate` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainingForm` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainingType` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainingValidity` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionNotes` to the `Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Worker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nip" INTEGER NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" BIGINT NOT NULL,
ADD COLUMN     "pkd" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "regon" INTEGER NOT NULL,
ADD COLUMN     "street" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Training" DROP COLUMN "name",
ADD COLUMN     "companyId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "number" TEXT NOT NULL,
ADD COLUMN     "trainingDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "trainingForm" TEXT NOT NULL,
ADD COLUMN     "trainingType" TEXT NOT NULL,
ADD COLUMN     "trainingValidity" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Worker" ADD COLUMN     "IdCardNumber" TEXT,
ADD COLUMN     "absence" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "companyId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "department" TEXT,
ADD COLUMN     "disability" BOOLEAN,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "employmentForm" TEXT,
ADD COLUMN     "medicalExamination" TIMESTAMP(3),
ADD COLUMN     "nightShift" BOOLEAN,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "pesel" BIGINT,
ADD COLUMN     "phoneNumber" BIGINT,
ADD COLUMN     "placeOfBirth" TEXT,
ADD COLUMN     "position" TEXT,
ADD COLUMN     "positionNotes" TEXT NOT NULL,
ADD COLUMN     "positionSection" TEXT,
ADD COLUMN     "positionType" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "secondName" TEXT,
ADD COLUMN     "sex" TEXT,
ADD COLUMN     "street" TEXT,
ADD COLUMN     "surname" TEXT NOT NULL,
ADD COLUMN     "trainingEntry" TIMESTAMP(3),
ADD COLUMN     "trainingPeriodic" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "youth" BOOLEAN;

-- CreateIndex
CREATE UNIQUE INDEX "Training_companyId_key" ON "Training"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_companyId_key" ON "Worker"("companyId");

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
