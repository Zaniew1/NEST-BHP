/*
  Warnings:

  - Added the required column `author` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyDepartment` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyNip` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "author" INTEGER NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "notes" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "pkd" DROP NOT NULL,
ALTER COLUMN "postalCode" DROP NOT NULL,
ALTER COLUMN "regon" DROP NOT NULL,
ALTER COLUMN "street" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Training" ADD COLUMN     "author" INTEGER NOT NULL,
ADD COLUMN     "companyCity" TEXT,
ADD COLUMN     "companyDepartment" INTEGER NOT NULL,
ADD COLUMN     "companyNip" BIGINT NOT NULL,
ADD COLUMN     "companyPkd" TEXT,
ADD COLUMN     "companyPostalCode" TEXT,
ADD COLUMN     "companyStreet" TEXT,
ADD COLUMN     "program" TEXT;

-- AlterTable
ALTER TABLE "Worker" ADD COLUMN     "author" INTEGER NOT NULL,
ALTER COLUMN "notes" DROP NOT NULL,
ALTER COLUMN "positionNotes" DROP NOT NULL;
